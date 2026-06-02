import argparse
import json
import ssl
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COMPANY_META = ROOT / "data" / "company-meta.json"
OUT = ROOT / "data" / "regular-board-volume.json"
OUT_JS = ROOT / "data" / "regular-board-volume.js"
MIS_URL = "https://mis.twse.com.tw/stock/api/getStockInfo.jsp"


def load_companies():
    return json.loads(COMPANY_META.read_text(encoding="utf-8"))


def market_prefix(meta):
    market = str(meta.get("market") or "")
    return "otc" if "上櫃" in market else "tse"


def batched(items, size):
    for index in range(0, len(items), size):
        yield items[index : index + size]


def to_int(value):
    try:
        return int(float(str(value).replace(",", "")))
    except (TypeError, ValueError):
        return 0


def fetch_batch(channels, timeout):
    query = urllib.parse.urlencode({"ex_ch": "|".join(channels), "json": "1", "delay": "0"})
    request = urllib.request.Request(
        f"{MIS_URL}?{query}",
        headers={
            "User-Agent": "Mozilla/5.0 AI Stock Lab/1.0",
            "Referer": "https://mis.twse.com.tw/stock/fibest.jsp",
        },
    )
    context = ssl._create_unverified_context()
    with urllib.request.urlopen(request, timeout=timeout, context=context) as response:
        text = response.read().decode("utf-8-sig", errors="replace").strip()
    return json.loads(text)


def normalize_quote(item, meta):
    regular_lots = to_int(item.get("v")) + to_int(item.get("fv"))
    if regular_lots <= 0:
        return None
    date_text = str(item.get("d") or "")
    iso_date = f"{date_text[:4]}-{date_text[4:6]}-{date_text[6:8]}" if len(date_text) == 8 else date_text
    return {
        "symbol": str(item.get("c") or ""),
        "name": item.get("n") or meta.get("name") or "",
        "market": meta.get("market") or ("上櫃" if item.get("ex") == "otc" else "上市"),
        "date": iso_date,
        "regularBoardLots": regular_lots,
        "regularBoardShares": regular_lots * 1000,
        "accumulatedLots": to_int(item.get("v")),
        "finalLots": to_int(item.get("fv")),
        "lastPrice": item.get("z") or "",
        "open": item.get("o") or "",
        "high": item.get("h") or "",
        "low": item.get("l") or "",
    }


def build(args):
    companies = load_companies()
    channels = []
    meta_by_channel = {}
    for symbol, meta in sorted(companies.items()):
        if not (str(symbol).isdigit() and len(str(symbol)) == 4):
            continue
        channel = f"{market_prefix(meta)}_{symbol}.tw"
        channels.append(channel)
        meta_by_channel[channel] = {**meta, "symbol": symbol}

    stocks = {}
    errors = []
    for batch in batched(channels, args.batch_size):
        try:
            payload = fetch_batch(batch, args.timeout)
            for item in payload.get("msgArray") or []:
                symbol = str(item.get("c") or "")
                channel = f"{item.get('ex')}_{symbol}.tw"
                meta = meta_by_channel.get(channel) or companies.get(symbol, {})
                quote = normalize_quote(item, meta)
                if quote:
                    stocks[symbol] = quote
        except Exception as exc:
            errors.append({"channels": batch, "error": str(exc)})
        if args.sleep > 0:
            time.sleep(args.sleep)

    dates = sorted({item["date"] for item in stocks.values() if item.get("date")})
    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "source": "TWSE MIS getStockInfo.jsp, regular board lot volume uses v + fv",
        "unit": "lots",
        "date": dates[-1] if dates else "",
        "count": len(stocks),
        "errors": errors,
        "stocks": dict(sorted(stocks.items())),
    }
    json_text = json.dumps(payload, ensure_ascii=False, indent=2)
    OUT.write_text(json_text + "\n", encoding="utf-8")
    OUT_JS.write_text(
        "window.AI_STOCK_REGULAR_BOARD_VOLUME = "
        + json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(stocks)} stocks")
    if errors:
        print(f"{len(errors)} batch errors")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch-size", type=int, default=80)
    parser.add_argument("--sleep", type=float, default=0.05)
    parser.add_argument("--timeout", type=int, default=30)
    build(parser.parse_args())


if __name__ == "__main__":
    main()
