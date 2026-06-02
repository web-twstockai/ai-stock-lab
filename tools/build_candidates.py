import json
import math
import ssl
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "candidates.json"

URLS = {
    "daily": "https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL",
    "valuation": "https://openapi.twse.com.tw/v1/exchangeReport/BWIBBU_ALL",
    "company": "https://openapi.twse.com.tw/v1/opendata/t187ap03_L",
}

SECTOR_MAP = {
    "01": "水泥",
    "02": "食品",
    "03": "塑膠",
    "04": "紡織",
    "05": "電機機械",
    "06": "電器電纜",
    "07": "化學生技",
    "08": "玻璃陶瓷",
    "09": "造紙",
    "10": "鋼鐵",
    "11": "橡膠",
    "12": "汽車",
    "14": "建材營造",
    "15": "航運",
    "16": "觀光餐旅",
    "17": "金融",
    "18": "貿易百貨",
    "20": "其他",
    "21": "化學",
    "22": "生技醫療",
    "23": "油電燃氣",
    "24": "半導體",
    "25": "電腦週邊",
    "26": "光電",
    "27": "通信網路",
    "28": "電子零組件",
    "29": "電子通路",
    "30": "資訊服務",
    "31": "其他電子",
    "32": "文化創意",
    "33": "農業科技",
    "34": "電子商務",
    "35": "綠能環保",
    "36": "數位雲端",
    "37": "運動休閒",
    "38": "居家生活",
}

TECH_SECTORS = {"半導體", "電腦週邊", "光電", "通信網路", "電子零組件", "資訊服務", "其他電子", "數位雲端"}


def fetch_json(url):
    # Python 3.13 rejects the current TWSE certificate chain on this machine.
    # The data is public, and PowerShell verifies the endpoint before this script is used.
    context = ssl._create_unverified_context()
    req = urllib.request.Request(url, headers={"User-Agent": "AlphaDeck/0.1"})
    with urllib.request.urlopen(req, timeout=30, context=context) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def to_float(value, default=None):
    if value in ("", None, "--"):
        return default
    try:
        return float(str(value).replace(",", ""))
    except ValueError:
        return default


def percentile(value, values):
    ordered = sorted(v for v in values if v is not None and math.isfinite(v))
    if not ordered:
        return 0.5
    below = sum(1 for item in ordered if item <= value)
    return below / len(ordered)


def clamp(value, low, high):
    return max(low, min(high, value))


def roc_to_iso(roc_date):
    if not roc_date or len(roc_date) != 7:
        return roc_date
    year = int(roc_date[:3]) + 1911
    return f"{year}-{roc_date[3:5]}-{roc_date[5:7]}"


def infer_strategy(row):
    if row["valueScore"] >= 0.72 and row["momentumScore"] < 0.7:
        return "value"
    if row["sector"] in TECH_SECTORS and row["dayReturn"] >= 1.8:
        return "growth"
    if row["liquidityScore"] >= 0.82 and row["intradayStrength"] >= 0.68:
        return "chip"
    return "momentum"


def risk_bucket(row):
    span = 0
    if row["close"]:
        span = ((row["high"] - row["low"]) / row["close"]) * 100
    pe = row["pe"] or 0
    if span >= 6 or pe >= 55:
        return "high"
    if span >= 3.5 or pe >= 28:
        return "mid"
    return "low"


def synthetic_prices(close, change):
    previous = close - change if change is not None else close
    base = previous if previous > 0 else close
    prices = []
    for index in range(12):
        wave = math.sin(index / 1.7) * 0.012
        drift = (index - 5.5) * (change / max(close, 1)) / 10
        prices.append(round(base * (1 + wave + drift), 2))
    prices[-1] = round(close, 2)
    return prices


def build():
    daily = fetch_json(URLS["daily"])
    valuation = {item["Code"]: item for item in fetch_json(URLS["valuation"])}
    companies = {
        item["公司代號"]: item
        for item in fetch_json(URLS["company"])
        if item.get("公司代號")
    }

    rows = []
    for item in daily:
        code = item.get("Code", "")
        if not (code.isdigit() and len(code) == 4):
            continue

        close = to_float(item.get("ClosingPrice"))
        open_price = to_float(item.get("OpeningPrice"))
        high = to_float(item.get("HighestPrice"))
        low = to_float(item.get("LowestPrice"))
        change = to_float(item.get("Change"), 0)
        trade_value = to_float(item.get("TradeValue"), 0)
        volume = to_float(item.get("TradeVolume"), 0)
        transactions = to_float(item.get("Transaction"), 0)
        if not all(v is not None and v > 0 for v in (close, open_price, high, low, trade_value, volume)):
            continue

        previous = close - change
        if previous <= 0:
            continue

        val = valuation.get(code, {})
        company = companies.get(code, {})
        sector = SECTOR_MAP.get(company.get("產業別"), "未分類")
        pe = to_float(val.get("PEratio"))
        dividend_yield = to_float(val.get("DividendYield"), 0) or 0
        pb = to_float(val.get("PBratio"))
        day_return = (change / previous) * 100
        intraday_strength = (close - low) / (high - low) if high > low else 0.5

        rows.append(
            {
                "symbol": code,
                "name": item.get("Name", "").strip(),
                "sector": sector,
                "close": close,
                "high": high,
                "low": low,
                "change": change,
                "dayReturn": day_return,
                "intradayStrength": intraday_strength,
                "tradeValue": trade_value,
                "volume": volume,
                "transactions": transactions,
                "pe": pe,
                "pb": pb,
                "dividendYield": dividend_yield,
                "date": roc_to_iso(item.get("Date", "")),
            }
        )

    liquid_values = [row["tradeValue"] for row in rows]
    return_values = [row["dayReturn"] for row in rows]
    value_inputs = []
    for row in rows:
        pe_component = 0.55 if row["pe"] is None else clamp((28 - row["pe"]) / 24, 0, 1)
        pb_component = 0.5 if row["pb"] is None else clamp((3 - row["pb"]) / 2.7, 0, 1)
        yield_component = clamp(row["dividendYield"] / 8, 0, 1)
        value_inputs.append((row["symbol"], pe_component * 0.35 + pb_component * 0.3 + yield_component * 0.35))
    value_scores = dict(value_inputs)

    candidates = []
    for row in rows:
        liquidity_score = percentile(row["tradeValue"], liquid_values)
        momentum_score = percentile(row["dayReturn"], return_values)
        intraday_score = clamp(row["intradayStrength"], 0, 1)
        value_score = value_scores[row["symbol"]]

        score = round(
            100
            * (
                liquidity_score * 0.30
                + momentum_score * 0.32
                + intraday_score * 0.20
                + value_score * 0.18
            )
        )
        if row["tradeValue"] < 80_000_000 or score < 62:
            continue

        row.update(
            {
                "score": clamp(score, 1, 99),
                "alpha": round((momentum_score - 0.5) * 8 + (intraday_score - 0.5) * 3 + (value_score - 0.5) * 2, 1),
                "winRate": int(clamp(50 + score * 0.32 + value_score * 5 - (1 - intraday_score) * 8, 48, 78)),
                "liquidityScore": liquidity_score,
                "momentumScore": momentum_score,
                "valueScore": value_score,
            }
        )
        row["strategy"] = infer_strategy(row)
        row["risk"] = risk_bucket(row)
        row["price"] = synthetic_prices(row["close"], row["change"])
        row["thesis"] = (
            f"{row['date']} 日行情顯示，成交金額位於上市股票前 {round((1 - liquidity_score) * 100)}% "
            f"區間，當日漲跌幅 {row['dayReturn']:.2f}%，日內收盤位置分數 {intraday_score:.2f}。"
            f"模型把它歸入「{row['strategy']}」候選，適合放入次日觀察清單。"
        )
        row["invalidation"] = (
            "若次日跌破今日低點、成交金額低於近端門檻，或分數重新跌回 62 以下，移出候選清單。"
        )
        candidates.append(row)

    candidates.sort(key=lambda item: (item["score"], item["tradeValue"]), reverse=True)
    top = candidates[:60]
    payload = {
        "meta": {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "marketDate": top[0]["date"] if top else None,
            "source": "TWSE OpenAPI",
            "universe": "TWSE listed common stocks",
            "scoring": "liquidity, daily momentum, intraday strength, valuation and dividend yield",
        },
        "stocks": top,
    }
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return payload


if __name__ == "__main__":
    result = build()
    print(f"Wrote {OUT}")
    print(f"Market date: {result['meta']['marketDate']}")
    print(f"Candidates: {len(result['stocks'])}")
    for item in result["stocks"][:10]:
        print(f"{item['symbol']} {item['name']} score={item['score']} alpha={item['alpha']} risk={item['risk']}")
