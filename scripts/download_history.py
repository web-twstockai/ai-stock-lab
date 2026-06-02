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

from data_backup import backup_file


ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / "data" / "history"
START_DATE = "2000-01-04"

URLS = {
    "twse_company": "https://openapi.twse.com.tw/v1/opendata/t187ap03_L",
    "tpex_company": "https://www.tpex.org.tw/openapi/v1/mopsfin_t187ap03_O",
}


def http_json(url):
    context = ssl._create_unverified_context()
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 AlphaDeck/0.4"})
    with urllib.request.urlopen(request, timeout=40, context=context) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def parse_date(date_text):
    return datetime.strptime(date_text, "%Y-%m-%d").replace(tzinfo=timezone.utc)


def yahoo_suffix(market):
    if market in ("TPEX", "TWO", "上櫃"):
        return "TWO"
    return "TW"


def normalize_symbol(symbol):
    symbol = symbol.strip().upper()
    if "." in symbol:
        code, suffix = symbol.split(".", 1)
        market = "TPEX" if suffix == "TWO" else "TWSE"
        return code, market
    return symbol, None


def build_universe():
    universe = {}
    for item in http_json(URLS["twse_company"]):
        symbol = item.get("公司代號", "")
        if symbol.isdigit() and len(symbol) == 4:
            universe[symbol] = {
                "symbol": symbol,
                "name": item.get("公司簡稱") or item.get("公司名稱") or symbol,
                "market": "TWSE",
                "marketName": "上市",
                "suffix": "TW",
            }
    for item in http_json(URLS["tpex_company"]):
        symbol = item.get("SecuritiesCompanyCode", "")
        if symbol.isdigit() and len(symbol) == 4:
            universe[symbol] = {
                "symbol": symbol,
                "name": item.get("CompanyAbbreviation") or item.get("CompanyName") or symbol,
                "market": "TPEX",
                "marketName": "上櫃",
                "suffix": "TWO",
            }
    return universe


def resolve_symbols(symbol_args, all_symbols):
    universe = build_universe()
    if all_symbols:
        return list(universe.values())

    resolved = []
    for item in symbol_args:
        code, market = normalize_symbol(item)
        meta = universe.get(code)
        if meta and (market is None or meta["market"] == market):
            resolved.append(meta)
        elif market:
            resolved.append(
                {
                    "symbol": code,
                    "name": code,
                    "market": market,
                    "marketName": "上櫃" if market == "TPEX" else "上市",
                    "suffix": yahoo_suffix(market),
                }
            )
        else:
            # Default bare symbols to TWSE when not found in the local universe.
            resolved.append({"symbol": code, "name": code, "market": "TWSE", "marketName": "上市", "suffix": "TW"})
    return resolved


def fetch_yahoo_history(meta, start_date, end_date=None):
    period1 = int(parse_date(start_date).timestamp())
    period2 = int((parse_date(end_date) if end_date else datetime.now(timezone.utc)).timestamp())
    yahoo_symbol = f"{meta['symbol']}.{meta['suffix']}"
    url = (
        "https://query1.finance.yahoo.com/v8/finance/chart/"
        f"{urllib.parse.quote(yahoo_symbol)}?period1={period1}&period2={period2}"
        "&interval=1d&events=history&includeAdjustedClose=true"
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
    adjclose = (item.get("indicators", {}).get("adjclose") or [{}])[0].get("adjclose") or []
    rows = []
    for index, ts in enumerate(timestamps):
        open_price = safe_at(quote.get("open"), index)
        high = safe_at(quote.get("high"), index)
        low = safe_at(quote.get("low"), index)
        close = safe_at(quote.get("close"), index)
        volume = safe_at(quote.get("volume"), index)
        adj_close = safe_at(adjclose, index)
        if None in (open_price, high, low, close, volume):
            continue
        adjustment_factor = (adj_close / close) if adj_close and close else 1.0
        rows.append(
            {
                "date": datetime.fromtimestamp(ts, timezone.utc).astimezone().date().isoformat(),
                "symbol": meta["symbol"],
                "yahoo_symbol": yahoo_symbol,
                "market": meta["marketName"],
                "open": round(float(open_price), 6),
                "high": round(float(high), 6),
                "low": round(float(low), 6),
                "close": round(float(close), 6),
                "volume": int(volume),
                "adj_open": round(float(open_price) * adjustment_factor, 6),
                "adj_high": round(float(high) * adjustment_factor, 6),
                "adj_low": round(float(low) * adjustment_factor, 6),
                "adj_close": round(float(adj_close if adj_close is not None else close), 6),
                "adjustment_factor": round(float(adjustment_factor), 10),
            }
        )
    if not rows:
        raise ValueError(f"No valid daily rows for {yahoo_symbol}")
    return rows


def safe_at(values, index):
    if values is None or index >= len(values):
        return None
    return values[index]


def write_csv(path, rows, fieldnames):
    path.parent.mkdir(parents=True, exist_ok=True)
    backup_file(path)
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def save_symbol(meta, rows):
    raw_fields = ["date", "symbol", "yahoo_symbol", "market", "open", "high", "low", "close", "volume"]
    adjusted_fields = [
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
    raw_rows = [{key: row[key] for key in raw_fields} for row in rows]
    adjusted_rows = [{key: row[key] for key in adjusted_fields} for row in rows]
    market_dir = "tpex" if meta["market"] == "TPEX" else "twse"
    base = OUT_ROOT / market_dir
    write_csv(base / "raw" / f"{meta['symbol']}.csv", raw_rows, raw_fields)
    write_csv(base / "adjusted" / f"{meta['symbol']}.csv", adjusted_rows, adjusted_fields)
    return {
        "symbol": meta["symbol"],
        "name": meta["name"],
        "market": meta["marketName"],
        "yahooSymbol": f"{meta['symbol']}.{meta['suffix']}",
        "rows": len(rows),
        "firstDate": rows[0]["date"],
        "lastDate": rows[-1]["date"],
        "rawPath": str((base / "raw" / f"{meta['symbol']}.csv").relative_to(ROOT)),
        "adjustedPath": str((base / "adjusted" / f"{meta['symbol']}.csv").relative_to(ROOT)),
    }


def download_one(meta, start_date, end_date, retries=2):
    last_error = None
    for attempt in range(retries + 1):
        try:
            rows = fetch_yahoo_history(meta, start_date, end_date)
            return save_symbol(meta, rows)
        except Exception as exc:
            last_error = exc
            time.sleep(0.5 + attempt * 0.75)
    raise last_error


def run(args):
    symbols = resolve_symbols(args.symbols, args.all)
    manifest = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "source": "Yahoo Finance chart API",
        "startDate": args.start,
        "endDate": args.end or "today",
        "rawDescription": "Original Yahoo OHLCV. Close is unadjusted raw close.",
        "adjustedDescription": "Back-adjusted OHLC using adjustment_factor = Adj Close / Close. Volume is original Yahoo volume.",
        "symbols": [],
        "errors": [],
    }
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
        futures = {executor.submit(download_one, meta, args.start, args.end): meta for meta in symbols}
        for future in as_completed(futures):
            meta = futures[future]
            try:
                result = future.result()
                manifest["symbols"].append(result)
                print(f"OK {result['yahooSymbol']} rows={result['rows']} {result['firstDate']}..{result['lastDate']}")
            except Exception as exc:
                error = {
                    "symbol": meta["symbol"],
                    "market": meta["marketName"],
                    "yahooSymbol": f"{meta['symbol']}.{meta['suffix']}",
                    "error": str(exc),
                }
                manifest["errors"].append(error)
                print(f"ERR {error['yahooSymbol']} {error['error']}")

    manifest["symbols"].sort(key=lambda item: (item["market"], item["symbol"]))
    manifest_path = OUT_ROOT / "manifest.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    backup_file(manifest_path)
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {manifest_path}")
    print(f"Downloaded {len(manifest['symbols'])} symbols, failed {len(manifest['errors'])}")
    return manifest


def main():
    parser = argparse.ArgumentParser(description="Download Taiwan stock raw and adjusted daily history from Yahoo Finance.")
    parser.add_argument("symbols", nargs="*", help="Symbols such as 2330, 2330.TW, 6016.TWO. Omit with --all for full universe.")
    parser.add_argument("--all", action="store_true", help="Download all TWSE and TPEx common stocks from the current universe.")
    parser.add_argument("--start", default=START_DATE, help="Start date, default 2000-01-04.")
    parser.add_argument("--end", default=None, help="End date YYYY-MM-DD. Default is today.")
    parser.add_argument("--workers", type=int, default=8, help="Parallel workers.")
    args = parser.parse_args()
    if not args.all and not args.symbols:
        parser.error("Provide symbols or use --all.")
    run(args)


if __name__ == "__main__":
    main()
