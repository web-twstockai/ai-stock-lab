import argparse
import json
import re
import ssl
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

from data_backup import backup_file


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
OUT_JSON = DATA_DIR / "shortMarginRatioMockData.json"
OUT_JS = DATA_DIR / "shortMarginRatioMockData.js"
TWSE_BASE_URL = "https://www.twse.com.tw/rwd/zh"
TAIPEI = ZoneInfo("Asia/Taipei")
MIN_BORROW_MARGIN_BALANCE = 30_000
FINANCIAL_STOCK_CODES = {"5871", "5876", "5880", "6005", "6024"}

INDUSTRY_MAP = {
    "2330": "半導體",
    "2308": "電子零組件",
    "2317": "電子代工",
    "2409": "光電",
    "2618": "航運",
    "2881": "金融保險",
    "3231": "電腦及週邊",
    "3481": "光電",
}


def request_json(url):
    context = ssl._create_unverified_context()
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 AI Stock Lab"})
    with urllib.request.urlopen(request, timeout=35, context=context) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def strip_html(value):
    return re.sub(r"<[^>]*>", "", str(value or "")).strip()


def to_number(value):
    text = re.sub(r"[^\d.+-]", "", strip_html(value).replace(",", ""))
    if not text:
        return None
    try:
        return float(text)
    except ValueError:
        return None


def round2(value):
    return round(value + 1e-9, 2)


def is_common_stock_code(code):
    return bool(re.fullmatch(r"[1-9]\d{3}", str(code or "")))


def is_financial_stock(stock):
    stock_id = str(stock.get("stockId") or "")
    industry = str(stock.get("industry") or "")
    return stock_id.startswith("28") or stock_id in FINANCIAL_STOCK_CODES or "金融" in industry


def passes_threshold(stock):
    return (stock.get("borrowSellBalance") or 0) + (stock.get("marginBalance") or 0) > MIN_BORROW_MARGIN_BALANCE


def ratio(stock):
    margin = to_number(stock.get("marginBalance")) or 0
    if not margin:
        return None
    short = to_number(stock.get("shortBalance")) or 0
    borrow = to_number(stock.get("borrowSellBalance")) or 0
    return round2(((borrow + short) / margin) * 100)


def ratio_level(value):
    if value is None:
        return "N/A"
    if value >= 150:
        return "極端高券資比 / 軋空風險"
    if value >= 100:
        return "空方重壓"
    if value >= 70:
        return "空方偏熱"
    if value >= 30:
        return "中性偏高"
    return "空方偏低"


def risk_level(value):
    if value is None:
        return "N/A"
    if value >= 150:
        return "極高"
    if value >= 100:
        return "高"
    if value >= 70:
        return "中高"
    if value >= 30:
        return "中"
    return "低"


def ai_status(stock):
    current_ratio = stock.get("ratio")
    price_up = (stock.get("changePercent") or 0) > 0
    price_surge = (stock.get("changePercent") or 0) >= 3
    volume_up = (stock.get("volume") or 0) >= (stock.get("averageVolume") or 0)
    ratio_up = (stock.get("ratioChange") or 0) > 0
    margin_hot = (stock.get("marginChange") or 0) >= 1000
    short_down = (stock.get("shortChange") or 0) < 0
    borrow_down = (stock.get("borrowSellChange") or 0) < 0
    borrow_up = (stock.get("borrowSellChange") or 0) > 0

    if current_ratio is not None and current_ratio >= 150:
        return "極端高券資比 / 軋空風險"
    if price_up and short_down and borrow_down and not ratio_up:
        return "空方回補轉強"
    if price_up and volume_up and (short_down or borrow_down):
        return "軋空觀察"
    if price_surge and ratio_up and borrow_up:
        return "強勢空方加壓"
    if margin_hot and price_up and not ratio_up:
        return "融資追價偏熱"
    if current_ratio is not None and current_ratio > 100:
        return "空方籌碼偏重"
    return ratio_level(current_ratio)


def analysis(stock):
    current_ratio = stock.get("ratio")
    price_up = (stock.get("changePercent") or 0) > 0
    ratio_up = (stock.get("ratioChange") or 0) > 0
    if price_up and ratio_up:
        return "股價上漲且雙券資比同步上升，代表空方仍在加壓，需注意高檔震盪與籌碼對作風險。"
    if price_up and not ratio_up:
        return "股價上漲且雙券資比下降，代表空方回補壓力增加，走勢偏向軋空轉強觀察。"
    if not price_up and ratio_up:
        return "股價下跌但雙券資比上升，代表空方持續追擊，短線走勢偏弱。"
    if not price_up and not ratio_up:
        return "股價下跌且雙券資比下降，可能是空方獲利回補，後續可觀察是否進入止跌區。"
    return f"雙券資比位於{ratio_level(current_ratio)}區間，仍需搭配股價位置、成交量與融資增減判斷。"


def api_date(value):
    if value:
        raw = re.sub(r"\D", "", value)
        if len(raw) == 8:
            return raw
    return datetime.now(TAIPEI).strftime("%Y%m%d")


def fetch_margin_json(target_date):
    margin_json = request_json(f"{TWSE_BASE_URL}/marginTrading/MI_MARGN?date={target_date}&selectType=ALL&response=json")
    if margin_json.get("stat") != "OK":
        raise ValueError(f"TWSE margin data unavailable for {target_date}: {margin_json.get('stat')}")
    return margin_json


def resolve_target_date(value):
    if value:
        return api_date(value)

    today = datetime.now(TAIPEI).date()
    for offset in range(14):
        target_date = (today - timedelta(days=offset)).strftime("%Y%m%d")
        try:
            fetch_margin_json(target_date)
            if offset:
                print(f"[short-margin-ratio] using latest available TWSE margin date: {target_date}")
            return target_date
        except Exception as exc:
            print(f"[short-margin-ratio] {target_date} unavailable: {exc}")

    raise ValueError("No TWSE margin data available in the last 14 days.")


def display_date(yyyymmdd):
    return f"{yyyymmdd[:4]}/{yyyymmdd[4:6]}/{yyyymmdd[6:8]}"


def signed_price_change(sign_html, diff_value):
    sign = strip_html(sign_html)
    diff = to_number(diff_value) or 0
    return -abs(diff) if "-" in sign else abs(diff)


def closing_price_table(price_json):
    for table in price_json.get("tables", []):
        if "每日收盤行情" in str(table.get("title") or ""):
            return table
    return {}


def build_price_map(price_json):
    table = closing_price_table(price_json)
    result = {}
    for row in table.get("data", []):
        stock_id = row[0]
        if not is_common_stock_code(stock_id):
            continue
        close_price = to_number(row[8])
        change_value = signed_price_change(row[9], row[10])
        previous_close = close_price - change_value if close_price is not None else None
        result[stock_id] = {
            "closePrice": close_price,
            "changePercent": round2((change_value / previous_close) * 100) if previous_close else None,
            "volume": int((to_number(row[2]) or 0) / 1000),
        }
    return result


def build_borrow_map(borrow_json):
    result = {}
    for row in borrow_json.get("data", []):
        stock_id = row[0]
        if not is_common_stock_code(stock_id) or len(row) <= 12:
            continue
        previous_balance = (to_number(row[8]) or 0) / 1000
        current_balance = (to_number(row[12]) or 0) / 1000
        result[stock_id] = {
            "borrowSellBalance": int(current_balance),
            "borrowSellChange": int(current_balance - previous_balance),
        }
    return result


def build_stocks(margin_json, borrow_map, price_map, target_date):
    tables = margin_json.get("tables") or []
    margin_table = tables[1] if len(tables) > 1 else {}
    stocks = []
    for row in margin_table.get("data", []):
        stock_id = row[0]
        if not is_common_stock_code(stock_id) or len(row) <= 12:
            continue
        price = price_map.get(stock_id, {})
        borrow = borrow_map.get(stock_id, {})
        margin_balance = to_number(row[6]) or 0
        margin_previous = to_number(row[5]) or 0
        short_balance = to_number(row[12]) or 0
        short_previous = to_number(row[11]) or 0
        stock = {
            "stockId": stock_id,
            "stockName": row[1],
            "industry": INDUSTRY_MAP.get(stock_id, "上市股票"),
            "date": display_date(target_date),
            "closePrice": price.get("closePrice"),
            "changePercent": price.get("changePercent"),
            "volume": price.get("volume") or 0,
            "marginBalance": int(margin_balance),
            "marginChange": int(margin_balance - margin_previous),
            "shortBalance": int(short_balance),
            "shortChange": int(short_balance - short_previous),
            "borrowSellBalance": borrow.get("borrowSellBalance", 0),
            "borrowSellChange": borrow.get("borrowSellChange", 0),
            "time": "22:40",
            "source": "TWSE",
        }
        current_ratio = ratio(stock)
        stock["ratio"] = current_ratio
        stock["ratioChange"] = None
        stock["status"] = ai_status(stock)
        stock["riskLevel"] = risk_level(current_ratio)
        stock["possibleImpact"] = "雙券資比偏高代表空方部位集中，後續需搭配價格趨勢、成交量與回補跡象一起判讀。"
        stock["riskNote"] = "雙券資比高不等於一定上漲或下跌，請搭配價格趨勢與成交量審慎評估。"
        stock["analysis"] = analysis(stock)
        if stock["marginBalance"] > 0 and passes_threshold(stock) and not is_financial_stock(stock):
            stocks.append(stock)
    return sorted(stocks, key=lambda item: item.get("ratio") or -1, reverse=True)


def build_stats(stocks):
    return [
        {"title": "偵測檔數", "value": len(stocks), "unit": "筆", "icon": "file", "tone": "blue"},
        {"title": "空方重壓", "value": sum(1 for stock in stocks if (stock.get("ratio") or 0) >= 100), "unit": "筆", "icon": "alert", "tone": "red"},
        {"title": "軋空觀察", "value": sum(1 for stock in stocks if "軋空" in stock.get("status", "")), "unit": "筆", "icon": "rocket", "tone": "purple"},
        {"title": "借券增加", "value": sum(1 for stock in stocks if stock.get("borrowSellChange", 0) > 0), "unit": "筆", "icon": "trend", "tone": "orange"},
        {"title": "融資追價", "value": sum(1 for stock in stocks if stock.get("marginChange", 0) > 0 and (stock.get("changePercent") or 0) >= 0), "unit": "筆", "icon": "users", "tone": "green"},
    ]


def top_by(stocks, getter, display, count=5):
    return [
        {
            "label": f"{stock['stockId']} {stock['stockName']}",
            "value": getter(stock),
            "display": display(stock),
        }
        for stock in sorted(stocks, key=getter, reverse=True)[:count]
    ]


def build_charts(stocks):
    return {
        "ratioTop5": top_by(stocks, lambda stock: stock.get("ratio") or 0, lambda stock: f"{stock.get('ratio') or 0:.2f}%"),
        "borrowTop5": top_by(stocks, lambda stock: stock.get("borrowSellChange") or 0, lambda stock: f"{stock.get('borrowSellChange') or 0:+,} 張"),
        "squeezeTop5": [
            {
                "label": f"{stock['stockId']} {stock['stockName']}",
                "value": abs((stock.get("shortChange") or 0) + (stock.get("borrowSellChange") or 0)),
                "display": f"{(stock.get('shortChange') or 0) + (stock.get('borrowSellChange') or 0):+,} 張",
            }
            for stock in sorted(
                [stock for stock in stocks if stock.get("shortChange", 0) < 0 or stock.get("borrowSellChange", 0) < 0],
                key=lambda stock: (stock.get("shortChange") or 0) + (stock.get("borrowSellChange") or 0),
            )[:5]
        ],
    }


def fetch_payload(target_date):
    margin_json = fetch_margin_json(target_date)
    borrow_json = request_json(f"{TWSE_BASE_URL}/marginTrading/TWT93U?date={target_date}&response=json")
    price_json = request_json(f"{TWSE_BASE_URL}/afterTrading/MI_INDEX?date={target_date}&type=ALLBUT0999&response=json")
    stocks = build_stocks(margin_json, build_borrow_map(borrow_json), build_price_map(price_json), target_date)
    return {
        "updatedAt": f"{display_date(target_date)} 22:40",
        "date": display_date(target_date),
        "source": "臺灣證券交易所",
        "stats": build_stats(stocks),
        "stocks": stocks,
        "charts": build_charts(stocks),
    }


def write_payload(payload):
    DATA_DIR.mkdir(exist_ok=True)
    payload_json = json.dumps(payload, ensure_ascii=False, indent=2)
    backup_file(OUT_JSON)
    backup_file(OUT_JS)
    OUT_JSON.write_text(payload_json + "\n", encoding="utf-8")
    OUT_JS.write_text(f"window.ShortMarginRatioMockData = {payload_json};\n", encoding="utf-8")


def parse_args():
    parser = argparse.ArgumentParser(description="Update short margin ratio robot data from TWSE official APIs.")
    parser.add_argument(
        "--date",
        help="Target market date YYYY-MM-DD or YYYYMMDD. Default is the latest available TWSE margin date.",
    )
    parser.add_argument("--dry-run", action="store_true", help="Fetch and print summary without writing files.")
    return parser.parse_args()


def main():
    args = parse_args()
    try:
        target_date = resolve_target_date(args.date)
        payload = fetch_payload(target_date)
    except Exception as exc:
        print(f"[short-margin-ratio] skipped: {exc}")
        return 0
    if not args.dry_run:
        write_payload(payload)
    print(
        f"[short-margin-ratio] date={payload['date']} stocks={len(payload['stocks'])} "
        f"topRatio={(payload['stocks'][0]['ratio'] if payload['stocks'] else 'N/A')} dryRun={args.dry_run}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
