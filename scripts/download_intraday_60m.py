import argparse
import csv
import json
import ssl
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

from data_backup import backup_file
from download_history import build_universe, normalize_symbol, yahoo_suffix


ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / "data" / "intraday" / "60m"
TAIPEI = ZoneInfo("Asia/Taipei")
DEFAULT_RANGE = "180d"
INTERVAL = "60m"

FIELDS = [
    "datetime",
    "date",
    "time",
    "symbol",
    "yahoo_symbol",
    "market",
    "open",
    "high",
    "low",
    "close",
    "volume",
]


def http_json(url):
    context = ssl._create_unverified_context()
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 AlphaDeck/0.4"})
    with urllib.request.urlopen(request, timeout=40, context=context) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def safe_at(values, index):
    if values is None or index >= len(values):
        return None
    return values[index]


def market_dir(meta):
    return "tpex" if meta["market"] == "TPEX" else "twse"


def market_label(meta):
    return meta.get("marketName") or ("TPEX" if meta["market"] == "TPEX" else "TWSE")


def resolve_symbols(symbol_args, all_symbols):
    if all_symbols:
        return list(build_universe().values())

    universe = None
    resolved = []
    for item in symbol_args:
        code, market = normalize_symbol(item)
        meta = None
        if market is None:
            if universe is None:
                universe = build_universe()
            meta = universe.get(code)
        if meta and (market is None or meta["market"] == market):
            resolved.append(meta)
            continue
        suffix = yahoo_suffix(market) if market else "TW"
        resolved.append(
            {
                "symbol": code,
                "name": code,
                "market": market or "TWSE",
                "marketName": "TPEX" if market == "TPEX" else "TWSE",
                "suffix": suffix,
            }
        )
    return resolved


def fetch_yahoo_60m(meta, range_):
    yahoo_symbol = f"{meta['symbol']}.{meta['suffix']}"
    url = (
        "https://query1.finance.yahoo.com/v8/finance/chart/"
        f"{urllib.parse.quote(yahoo_symbol)}?range={urllib.parse.quote(range_)}"
        f"&interval={INTERVAL}&events=history&includePrePost=false"
    )
    payload = http_json(url)
    chart = payload.get("chart", {})
    if chart.get("error"):
        raise ValueError(chart["error"])
    result = chart.get("result") or []
    if not result:
        raise ValueError(f"No Yahoo chart result for {yahoo_symbol}")

    item = result[0]
    timestamps = item.get("timestamp") or []
    quote = (item.get("indicators", {}).get("quote") or [{}])[0]
    rows = []
    for index, ts in enumerate(timestamps):
        open_price = safe_at(quote.get("open"), index)
        high = safe_at(quote.get("high"), index)
        low = safe_at(quote.get("low"), index)
        close = safe_at(quote.get("close"), index)
        volume = safe_at(quote.get("volume"), index)
        if None in (open_price, high, low, close, volume):
            continue

        dt = datetime.fromtimestamp(ts, timezone.utc).astimezone(TAIPEI)
        rows.append(
            {
                "datetime": dt.replace(microsecond=0).isoformat(),
                "date": dt.date().isoformat(),
                "time": dt.strftime("%H:%M"),
                "symbol": meta["symbol"],
                "yahoo_symbol": yahoo_symbol,
                "market": market_label(meta),
                "open": round(float(open_price), 6),
                "high": round(float(high), 6),
                "low": round(float(low), 6),
                "close": round(float(close), 6),
                "volume": int(volume),
            }
        )
    if not rows:
        raise ValueError(f"No valid 60m rows for {yahoo_symbol}")
    return rows


def csv_path(meta):
    return OUT_ROOT / market_dir(meta) / "raw" / f"{meta['symbol']}.csv"


def read_rows(path):
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def write_rows(path, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    backup_file(path)
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(rows)


def merge_by_datetime(existing, incoming):
    merged = {
        row["datetime"]: {key: row.get(key, "") for key in FIELDS}
        for row in existing
        if row.get("datetime")
    }
    for row in incoming:
        merged[row["datetime"]] = {key: row.get(key, "") for key in FIELDS}
    return [merged[key] for key in sorted(merged)]


def compact_result(meta, rows):
    path = csv_path(meta)
    return {
        "symbol": meta["symbol"],
        "name": meta.get("name") or meta["symbol"],
        "market": market_label(meta),
        "yahooSymbol": f"{meta['symbol']}.{meta['suffix']}",
        "rows": len(rows),
        "firstDateTime": rows[0]["datetime"] if rows else None,
        "lastDateTime": rows[-1]["datetime"] if rows else None,
        "rawPath": str(path.relative_to(ROOT)),
    }


def save_symbol(meta, rows, keep_zero_volume, dry_run):
    rows = rows if keep_zero_volume else [row for row in rows if int(row["volume"]) > 0]
    if not rows:
        raise ValueError(f"No non-zero-volume 60m rows for {meta['symbol']}.{meta['suffix']}")

    path = csv_path(meta)
    existing = read_rows(path)
    merged = merge_by_datetime(existing, rows)
    if not dry_run:
        write_rows(path, merged)
    return compact_result(meta, merged), len(rows)


def download_one(meta, range_, keep_zero_volume, dry_run, retries=2):
    last_error = None
    for attempt in range(retries + 1):
        try:
            rows = fetch_yahoo_60m(meta, range_)
            return save_symbol(meta, rows, keep_zero_volume, dry_run)
        except Exception as exc:
            last_error = exc
            time.sleep(0.5 + attempt * 0.75)
    raise last_error


def write_manifest(range_, results, errors, dry_run):
    symbols = [item["result"] for item in results]
    symbols.sort(key=lambda item: (item.get("market") or "", item["symbol"]))
    latest = [item.get("lastDateTime") for item in symbols if item.get("lastDateTime")]
    manifest = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "source": "Yahoo Finance chart API",
        "interval": INTERVAL,
        "range": range_,
        "timezone": "Asia/Taipei",
        "description": "Recent 60-minute OHLCV bars for Taiwan listed and TPEx stocks. Yahoo intraday history is range-limited, so refresh this cache regularly after market close.",
        "endDateTime": max(latest) if latest else None,
        "symbols": symbols,
        "errors": errors,
    }
    if not dry_run:
        manifest_path = OUT_ROOT / "manifest.json"
        manifest_path.parent.mkdir(parents=True, exist_ok=True)
        backup_file(manifest_path)
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    return manifest


def run(args):
    symbols = resolve_symbols(args.symbols, args.all)
    results = []
    errors = []
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
        futures = {
            executor.submit(download_one, meta, args.range, args.keep_zero_volume, args.dry_run): meta
            for meta in symbols
        }
        for future in as_completed(futures):
            meta = futures[future]
            yahoo_symbol = f"{meta['symbol']}.{meta['suffix']}"
            try:
                result, fetched_rows = future.result()
                results.append({"result": result, "fetchedRows": fetched_rows})
                if not args.quiet:
                    print(
                        f"OK {yahoo_symbol} fetched={fetched_rows} rows={result['rows']} "
                        f"{result['firstDateTime']}..{result['lastDateTime']}",
                        flush=True,
                    )
            except Exception as exc:
                error = {"symbol": meta["symbol"], "yahooSymbol": yahoo_symbol, "error": str(exc)}
                errors.append(error)
                print(f"ERR {yahoo_symbol} {error['error']}", flush=True)

    manifest = write_manifest(args.range, results, errors, args.dry_run)
    print(
        f"Wrote {OUT_ROOT / 'manifest.json'}" if not args.dry_run else "Dry run; no files written.",
        flush=True,
    )
    print(f"Downloaded {len(manifest['symbols'])} symbols, failed {len(errors)}", flush=True)
    return manifest


def main():
    parser = argparse.ArgumentParser(description="Download Taiwan stock 60-minute OHLCV from Yahoo Finance.")
    parser.add_argument("symbols", nargs="*", help="Symbols such as 2330, 2330.TW, 6016.TWO. Omit with --all for full universe.")
    parser.add_argument("--all", action="store_true", help="Download all TWSE and TPEx common stocks from the current universe.")
    parser.add_argument("--range", default=DEFAULT_RANGE, help="Yahoo intraday range, e.g. 60d, 180d, 730d. Default: 180d.")
    parser.add_argument("--workers", type=int, default=8, help="Parallel Yahoo Finance workers.")
    parser.add_argument("--keep-zero-volume", action="store_true", help="Keep bars with zero volume. Default filters them out.")
    parser.add_argument("--dry-run", action="store_true", help="Fetch and report without writing CSV or manifest.")
    parser.add_argument("--quiet", action="store_true", help="Only print summary and errors.")
    args = parser.parse_args()
    if not args.all and not args.symbols:
        parser.error("Provide symbols or use --all.")
    run(args)


if __name__ == "__main__":
    main()
