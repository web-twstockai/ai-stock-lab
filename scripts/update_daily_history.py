import argparse
import csv
import json
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

from data_backup import backup_file
from download_history import START_DATE, build_universe, fetch_yahoo_history


ROOT = Path(__file__).resolve().parents[1]
HISTORY = ROOT / "data" / "history"
MANIFEST = HISTORY / "manifest.json"
LOG_FILE = HISTORY / "daily-update-log.json"
TAIPEI = ZoneInfo("Asia/Taipei")

RAW_FIELDS = ["date", "symbol", "yahoo_symbol", "market", "open", "high", "low", "close", "volume"]
ADJUSTED_FIELDS = [
    "date",
    "symbol",
    "yahoo_symbol",
    "market",
    "adj_open",
    "adj_high",
    "adj_low",
    "adj_close",
    "volume",
    "adjustment_factor",
]


def parse_iso_date(value):
    return datetime.strptime(value, "%Y-%m-%d").date()


def today_taipei():
    return datetime.now(TAIPEI).date()


def market_dir(meta):
    return "tpex" if meta["market"] == "TPEX" else "twse"


def market_label(meta):
    return meta.get("marketName") or ("TPEX" if meta["market"] == "TPEX" else "TWSE")


def load_json(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def manifest_meta(item):
    yahoo_symbol = str(item.get("yahooSymbol") or item.get("yahoo_symbol") or "").strip().upper()
    symbol = str(item.get("symbol") or yahoo_symbol.split(".", 1)[0]).strip()
    suffix = yahoo_symbol.split(".", 1)[1] if "." in yahoo_symbol else "TW"
    market = "TPEX" if suffix == "TWO" else "TWSE"
    return {
        "symbol": symbol,
        "name": item.get("name") or symbol,
        "market": market,
        "marketName": item.get("market") or ("TPEX" if market == "TPEX" else "TWSE"),
        "suffix": suffix,
        "lastDate": item.get("lastDate"),
    }


def manifest_symbols(manifest, args):
    symbols = manifest.get("symbols") or []
    by_symbol = {str(item.get("symbol")): manifest_meta(item) for item in symbols if item.get("symbol")}

    if args.symbols:
        selected = []
        universe = None
        for raw_symbol in args.symbols:
            code = raw_symbol.split(".", 1)[0].strip()
            if code in by_symbol:
                selected.append(by_symbol[code])
                continue
            if universe is None:
                universe = build_universe()
            if code in universe:
                selected.append(universe[code])
            else:
                suffix = "TWO" if raw_symbol.upper().endswith(".TWO") else "TW"
                selected.append(
                    {
                        "symbol": code,
                        "name": code,
                        "market": "TPEX" if suffix == "TWO" else "TWSE",
                        "marketName": "TPEX" if suffix == "TWO" else "TWSE",
                        "suffix": suffix,
                    }
                )
        return selected

    if by_symbol:
        return list(by_symbol.values())

    if args.all:
        return list(build_universe().values())

    raise SystemExit("No manifest symbols found. Provide symbols or use --all for a first-time universe fetch.")


def csv_path(meta, adjusted=False):
    folder = "adjusted" if adjusted else "raw"
    return HISTORY / market_dir(meta) / folder / f"{meta['symbol']}.csv"


def read_rows(path):
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def write_rows(path, rows, fieldnames):
    path.parent.mkdir(parents=True, exist_ok=True)
    backup_file(path)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def latest_date(rows):
    dates = [row.get("date") for row in rows if row.get("date")]
    return max(dates) if dates else None


def merge_by_date(existing, incoming, fieldnames):
    merged = {row["date"]: {key: row.get(key, "") for key in fieldnames} for row in existing if row.get("date")}
    for row in incoming:
        merged[row["date"]] = {key: row.get(key, "") for key in fieldnames}
    return [merged[key] for key in sorted(merged)]


def compact_result(meta, raw_rows, adjusted_rows):
    first_date = raw_rows[0]["date"] if raw_rows else None
    last_date = raw_rows[-1]["date"] if raw_rows else None
    raw_path = csv_path(meta, adjusted=False)
    adjusted_path = csv_path(meta, adjusted=True)
    return {
        "symbol": meta["symbol"],
        "name": meta.get("name") or meta["symbol"],
        "market": market_label(meta),
        "yahooSymbol": f"{meta['symbol']}.{meta['suffix']}",
        "rows": len(raw_rows),
        "firstDate": first_date,
        "lastDate": last_date,
        "rawPath": str(raw_path.relative_to(ROOT)),
        "adjustedPath": str(adjusted_path.relative_to(ROOT)),
    }


def update_one(meta, target_date, sleep_seconds, dry_run):
    raw_path = csv_path(meta, adjusted=False)
    adjusted_path = csv_path(meta, adjusted=True)
    raw_existing = read_rows(raw_path)
    adjusted_existing = read_rows(adjusted_path)
    current_latest = latest_date(raw_existing) or meta.get("lastDate")

    if current_latest and parse_iso_date(current_latest) >= target_date:
        return {
            "status": "current",
            "newRows": 0,
            "result": compact_result(meta, raw_existing, adjusted_existing),
        }

    start_date = parse_iso_date(current_latest) + timedelta(days=1) if current_latest else parse_iso_date(START_DATE)
    if start_date > target_date:
        return {
            "status": "current",
            "newRows": 0,
            "result": compact_result(meta, raw_existing, adjusted_existing),
        }

    if sleep_seconds > 0:
        time.sleep(sleep_seconds)

    end_exclusive = target_date + timedelta(days=1)
    try:
        fetched = fetch_yahoo_history(meta, start_date.isoformat(), end_exclusive.isoformat())
    except ValueError as exc:
        if "No valid daily rows" not in str(exc):
            raise
        return {
            "status": "empty",
            "newRows": 0,
            "result": compact_result(meta, raw_existing, adjusted_existing),
        }
    new_rows = [
        row
        for row in fetched
        if start_date <= parse_iso_date(row["date"]) <= target_date
    ]

    if not new_rows:
        return {
            "status": "empty",
            "newRows": 0,
            "result": compact_result(meta, raw_existing, adjusted_existing),
        }

    raw_incoming = [{key: row[key] for key in RAW_FIELDS} for row in new_rows]
    adjusted_incoming = [{key: row[key] for key in ADJUSTED_FIELDS} for row in new_rows]
    raw_merged = merge_by_date(raw_existing, raw_incoming, RAW_FIELDS)
    adjusted_merged = merge_by_date(adjusted_existing, adjusted_incoming, ADJUSTED_FIELDS)

    if not dry_run:
        write_rows(raw_path, raw_merged, RAW_FIELDS)
        write_rows(adjusted_path, adjusted_merged, ADJUSTED_FIELDS)

    return {
        "status": "updated",
        "newRows": len(new_rows),
        "result": compact_result(meta, raw_merged, adjusted_merged),
    }


def write_manifest(previous, results, errors, target_date, dry_run):
    result_by_symbol = {
        item["result"]["symbol"]: item["result"]
        for item in results
        if item.get("result") and item["result"].get("symbol")
    }
    symbols = []
    seen = set()
    for item in previous.get("symbols", []):
        symbol = str(item.get("symbol") or "")
        if not symbol:
            continue
        symbols.append(result_by_symbol.get(symbol, item))
        seen.add(symbol)
    for symbol, item in result_by_symbol.items():
        if symbol not in seen:
            symbols.append(item)
    symbols.sort(key=lambda item: (item.get("market") or "", item["symbol"]))
    latest_dates = [item.get("lastDate") for item in symbols if item.get("lastDate")]
    end_date = max(latest_dates) if latest_dates else target_date.isoformat()
    manifest = {
        **previous,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "source": previous.get("source") or "Yahoo Finance chart API",
        "startDate": previous.get("startDate") or START_DATE,
        "endDate": end_date,
        "rawDescription": previous.get("rawDescription") or "Original Yahoo OHLCV. Close is unadjusted raw close.",
        "adjustedDescription": previous.get("adjustedDescription")
        or "Back-adjusted OHLC using adjustment_factor = Adj Close / Close. Volume is original Yahoo volume.",
        "symbols": symbols,
        "errors": errors,
    }
    if not dry_run:
        MANIFEST.parent.mkdir(parents=True, exist_ok=True)
        backup_file(MANIFEST)
        MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    return manifest


def append_log(summary, dry_run):
    if dry_run:
        return
    history = load_json(LOG_FILE, [])
    if not isinstance(history, list):
        history = []
    history.append(summary)
    history = history[-60:]
    LOG_FILE.write_text(json.dumps(history, ensure_ascii=False, indent=2), encoding="utf-8")


def run_command(command):
    print(f"[daily-update] Running: {' '.join(command)}", flush=True)
    return subprocess.run(command, cwd=ROOT).returncode


def rebuild_outputs(args):
    failures = []
    if args.rebuild_site_data:
        code = run_command([sys.executable, str(ROOT / "scripts" / "build_site_data.py")])
        if code:
            failures.append({"step": "build_site_data", "returnCode": code})
    if args.update_candidates:
        code = run_command([sys.executable, str(ROOT / "scripts" / "update_data.py"), "--workers", str(args.workers)])
        if code:
            failures.append({"step": "update_data", "returnCode": code})
    return failures


def update_daily_history(args):
    target_date = parse_iso_date(args.target_date) if args.target_date else today_taipei()
    if args.skip_weekends and target_date.weekday() >= 5:
        print(f"[daily-update] {target_date} is a weekend; skipping.", flush=True)
        return 0

    previous = load_json(MANIFEST, {})
    symbols = manifest_symbols(previous, args)
    print(f"[daily-update] Target date: {target_date}", flush=True)
    print(f"[daily-update] Symbols: {len(symbols)}", flush=True)

    results = []
    errors = []
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
        futures = {
            executor.submit(update_one, meta, target_date, args.sleep, args.dry_run): meta
            for meta in symbols
        }
        for future in as_completed(futures):
            meta = futures[future]
            try:
                item = future.result()
                results.append(item)
                result = item.get("result") or {}
                if not args.quiet:
                    print(
                        f"[daily-update] {item['status'].upper()} {result.get('yahooSymbol', meta['symbol'])} "
                        f"new={item.get('newRows', 0)} last={result.get('lastDate')}",
                        flush=True,
                    )
            except Exception as exc:
                error = {
                    "symbol": meta["symbol"],
                    "yahooSymbol": f"{meta['symbol']}.{meta['suffix']}",
                    "error": str(exc),
                }
                errors.append(error)
                print(f"[daily-update] ERR {error['yahooSymbol']} {error['error']}", flush=True)

    updated = sum(1 for item in results if item.get("status") == "updated")
    new_rows = sum(item.get("newRows", 0) for item in results)
    write_manifest(previous, results, errors, target_date, args.dry_run)

    rebuild_failures = []
    if not args.dry_run and (updated or args.force_rebuild):
        rebuild_failures = rebuild_outputs(args)

    summary = {
        "ranAt": datetime.now(timezone.utc).isoformat(),
        "targetDate": target_date.isoformat(),
        "symbols": len(symbols),
        "updatedSymbols": updated,
        "newRows": new_rows,
        "errors": len(errors),
        "rebuildFailures": rebuild_failures,
    }
    append_log(summary, args.dry_run)

    print(
        f"[daily-update] Done target={target_date} updated={updated} newRows={new_rows} "
        f"errors={len(errors)} rebuildFailures={len(rebuild_failures)}",
        flush=True,
    )
    if rebuild_failures:
        return 2
    return 0


def parse_args():
    parser = argparse.ArgumentParser(description="Incrementally update Taiwan daily OHLCV after market close.")
    parser.add_argument("symbols", nargs="*", help="Optional symbols such as 2330, 2330.TW, or 6016.TWO.")
    parser.add_argument("--all", action="store_true", help="Use all symbols from manifest, or current universe if manifest is empty.")
    parser.add_argument("--incremental", action="store_true", help="Accepted for scheduler compatibility; updates are always incremental.")
    parser.add_argument("--target-date", help="Target market date YYYY-MM-DD. Default is today's date in Asia/Taipei.")
    parser.add_argument("--workers", type=int, default=8, help="Parallel Yahoo Finance workers.")
    parser.add_argument("--sleep", type=float, default=0.0, help="Optional delay before each symbol fetch.")
    parser.add_argument("--skip-weekends", action="store_true", default=True, help="Skip Saturday and Sunday targets.")
    parser.add_argument("--no-skip-weekends", action="store_false", dest="skip_weekends", help="Allow weekend target dates.")
    parser.add_argument("--rebuild-site-data", action="store_true", help="Rebuild data/site-data.json after new rows are added.")
    parser.add_argument("--update-candidates", action="store_true", help="Rebuild data/candidates.json after new rows are added.")
    parser.add_argument("--force-rebuild", action="store_true", help="Run rebuild steps even when no symbols received new rows.")
    parser.add_argument("--dry-run", action="store_true", help="Fetch and report without writing CSV, manifest, or rebuild outputs.")
    parser.add_argument("--quiet", action="store_true", help="Only print summary, errors, and rebuild steps.")
    return parser.parse_args()


def main():
    raise SystemExit(update_daily_history(parse_args()))


if __name__ == "__main__":
    main()
