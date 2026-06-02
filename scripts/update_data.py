import argparse
import json
import math
import ssl
import statistics
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path

from data_backup import backup_file


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "candidates.json"
MODEL_LIBRARY = ROOT / "data" / "model_library.json"

URLS = {
    "twse_company": "https://openapi.twse.com.tw/v1/opendata/t187ap03_L",
    "twse_revenue": "https://openapi.twse.com.tw/v1/opendata/t187ap05_L",
    "twse_valuation": "https://openapi.twse.com.tw/v1/exchangeReport/BWIBBU_ALL",
    "tpex_company": "https://www.tpex.org.tw/openapi/v1/mopsfin_t187ap03_O",
    "tpex_revenue": "https://www.tpex.org.tw/openapi/v1/mopsfin_t187ap05_O",
    "tpex_valuation": "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_peratio_analysis",
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


def http_json(url):
    context = ssl._create_unverified_context()
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 AlphaDeck/0.3"})
    with urllib.request.urlopen(request, timeout=35, context=context) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def to_float(value, default=None):
    if value in ("", None, "--", "null", "N/A"):
        return default
    try:
        return float(str(value).replace(",", "").replace("+", "").strip())
    except ValueError:
        return default


def to_int(value, default=0):
    number = to_float(value, default)
    return int(number) if number is not None else default


def clamp(value, low, high):
    return max(low, min(high, value))


def percentile(value, values):
    valid = sorted(item for item in values if item is not None and math.isfinite(item))
    if not valid:
        return 0.5
    return sum(1 for item in valid if item <= value) / len(valid)


def roc_to_iso(roc_date):
    if not roc_date or len(roc_date) != 7:
        return roc_date
    year = int(roc_date[:3]) + 1911
    return f"{year}-{roc_date[3:5]}-{roc_date[5:7]}"


def iso_to_twse_date(iso_date):
    return iso_date.replace("-", "")


def iso_to_tpex_date(iso_date):
    return iso_date.replace("-", "/")


def yahoo_chart(symbol, suffix, range_="6mo"):
    yahoo_symbol = f"{symbol}.{suffix}"
    url = (
        "https://query1.finance.yahoo.com/v8/finance/chart/"
        f"{urllib.parse.quote(yahoo_symbol)}?range={range_}&interval=1d&events=history"
    )
    payload = http_json(url)
    result = payload.get("chart", {}).get("result") or []
    if not result:
        raise ValueError(f"No Yahoo chart result for {yahoo_symbol}")
    chart = result[0]
    timestamps = chart.get("timestamp") or []
    quote = (chart.get("indicators", {}).get("quote") or [{}])[0]
    rows = []
    for index, ts in enumerate(timestamps):
        close = (quote.get("close") or [None])[index]
        high = (quote.get("high") or [None])[index]
        low = (quote.get("low") or [None])[index]
        volume = (quote.get("volume") or [None])[index]
        open_price = (quote.get("open") or [None])[index]
        if close is None or high is None or low is None or volume is None:
            continue
        rows.append(
            {
                "date": datetime.fromtimestamp(ts, timezone.utc).astimezone().date().isoformat(),
                "open": float(open_price) if open_price is not None else None,
                "high": float(high),
                "low": float(low),
                "close": float(close),
                "volume": int(volume),
            }
        )
    if len(rows) < 65:
        raise ValueError(f"Not enough daily bars for {yahoo_symbol}")
    return rows


def moving_average(values, window):
    if len(values) < window:
        return None
    return sum(values[-window:]) / window


def pct_change(new, old):
    if old in (None, 0) or new is None:
        return None
    return (new / old - 1) * 100


def calculate_price_factors(bars):
    closes = [bar["close"] for bar in bars]
    highs = [bar["high"] for bar in bars]
    volumes = [bar["volume"] for bar in bars]
    latest = bars[-1]
    returns = [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes)) if closes[i - 1]]
    recent_returns = returns[-20:]
    ma20 = moving_average(closes, 20)
    ma60 = moving_average(closes, 60)
    avg_volume_20d = sum(volumes[-20:]) / 20
    avg_turnover_20d = sum(closes[-20 + i] * volumes[-20 + i] for i in range(20)) / 20
    today_turnover = latest["close"] * latest["volume"]
    high_20d = max(highs[-20:])
    low_20d = min(bar["low"] for bar in bars[-20:])
    high_60d = max(highs[-60:])
    low_60d = min(bar["low"] for bar in bars[-60:])
    distance_to_60d_high = (latest["close"] / high_60d - 1) * 100 if high_60d else None
    range_position_20d = ((latest["close"] - low_20d) / (high_20d - low_20d)) if high_20d > low_20d else 0.5
    return {
        "marketDate": latest["date"],
        "close": round(latest["close"], 2),
        "volume": latest["volume"],
        "priceSeries": [round(item, 2) for item in closes[-126:]],
        "volumeSeries": volumes[-126:],
        "return20d": round(pct_change(closes[-1], closes[-21]), 2),
        "return60d": round(pct_change(closes[-1], closes[-61]), 2),
        "ma20": round(ma20, 2),
        "ma60": round(ma60, 2),
        "aboveMa20": latest["close"] >= ma20,
        "aboveMa60": latest["close"] >= ma60,
        "high20d": round(high_20d, 2),
        "low20d": round(low_20d, 2),
        "high60d": round(high_60d, 2),
        "low60d": round(low_60d, 2),
        "is60dHigh": latest["close"] >= high_60d * 0.999,
        "distanceTo60dHigh": round(distance_to_60d_high, 2),
        "drawdown20d": round((latest["close"] / high_20d - 1) * 100, 2),
        "drawdown60d": round(distance_to_60d_high, 2),
        "rangePosition20d": round(range_position_20d, 3),
        "near60dHigh": distance_to_60d_high >= -3,
        "todayTurnover": round(today_turnover),
        "avgTurnover20d": round(avg_turnover_20d),
        "volumeRatio20d": round(latest["volume"] / avg_volume_20d, 2) if avg_volume_20d else None,
        "turnoverRatio20d": round(today_turnover / avg_turnover_20d, 2) if avg_turnover_20d else None,
        "volatility20d": round(statistics.pstdev(recent_returns) * math.sqrt(252) * 100, 2),
    }


def fetch_twse_institutional_for_date(yyyymmdd):
    url = f"https://www.twse.com.tw/rwd/zh/fund/T86?date={yyyymmdd}&selectType=ALLBUT0999&response=json"
    payload = http_json(url)
    if payload.get("stat") != "OK":
        return {}
    fields = payload.get("fields", [])
    rows = payload.get("data", [])
    code_index = fields.index("證券代號")
    foreign_index = fields.index("外陸資買賣超股數(不含外資自營商)")
    trust_index = fields.index("投信買賣超股數")
    dealer_index = fields.index("自營商買賣超股數")
    total_index = fields.index("三大法人買賣超股數")
    required_index = max(code_index, foreign_index, trust_index, dealer_index, total_index)
    result = {}
    for row in rows:
        if len(row) <= required_index:
            continue
        code = row[code_index].strip()
        result[code] = {
            "foreign": to_int(row[foreign_index]),
            "trust": to_int(row[trust_index]),
            "dealer": to_int(row[dealer_index]),
            "total": to_int(row[total_index]),
        }
    return result


def fetch_tpex_institutional_for_date(yyyy_mm_dd):
    url = f"https://www.tpex.org.tw/www/zh-tw/insti/dailyTrade?date={yyyy_mm_dd}&type=Daily&response=json"
    payload = http_json(url)
    tables = payload.get("tables") or []
    if not tables:
        return {}
    result = {}
    for row in tables[0].get("data", []):
        if len(row) <= 23:
            continue
        code = row[0].strip()
        result[code] = {
            "foreign": to_int(row[4]),
            "trust": to_int(row[13]),
            "dealer": to_int(row[22]),
            "total": to_int(row[23]),
        }
    return result


def merge_institutional(target, market, daily):
    bucket = target.setdefault(market, {})
    for symbol, values in daily.items():
        row = bucket.setdefault(symbol, {"foreign": 0, "trust": 0, "dealer": 0, "total": 0})
        for key in row:
            row[key] += values.get(key, 0)


def build_universe():
    universe = {}
    twse_companies = http_json(URLS["twse_company"])
    for item in twse_companies:
        symbol = item.get("公司代號", "")
        if symbol.isdigit() and len(symbol) == 4:
            universe[("TWSE", symbol)] = {
                "market": "上市",
                "suffix": "TW",
                "symbol": symbol,
                "name": item.get("公司簡稱") or item.get("公司名稱") or symbol,
                "sector": SECTOR_MAP.get(item.get("產業別"), "未分類"),
            }

    tpex_companies = http_json(URLS["tpex_company"])
    for item in tpex_companies:
        symbol = item.get("SecuritiesCompanyCode", "")
        if symbol.isdigit() and len(symbol) == 4:
            universe[("TPEX", symbol)] = {
                "market": "上櫃",
                "suffix": "TWO",
                "symbol": symbol,
                "name": item.get("CompanyAbbreviation") or item.get("CompanyName") or symbol,
                "sector": SECTOR_MAP.get(item.get("SecuritiesIndustryCode"), "未分類"),
            }
    return universe


def build_revenue_map():
    revenue = {}
    for market, url in [("TWSE", URLS["twse_revenue"]), ("TPEX", URLS["tpex_revenue"])]:
        for item in http_json(url):
            symbol = item.get("公司代號")
            if not symbol:
                continue
            revenue[(market, symbol)] = {
                "revenueMonth": item.get("資料年月"),
                "revenue": to_float(item.get("營業收入-當月營收")),
                "revenueMom": to_float(item.get("營業收入-上月比較增減(%)")),
                "revenueYoy": to_float(item.get("營業收入-去年同月增減(%)")),
                "revenueSector": item.get("產業別"),
            }
    return revenue


def build_valuation_map():
    valuation = {}
    for item in http_json(URLS["twse_valuation"]):
        symbol = item.get("Code")
        if symbol:
            valuation[("TWSE", symbol)] = {
                "pe": to_float(item.get("PEratio")),
                "pb": to_float(item.get("PBratio")),
                "dividendYield": to_float(item.get("DividendYield"), 0) or 0,
            }
    for item in http_json(URLS["tpex_valuation"]):
        symbol = item.get("SecuritiesCompanyCode")
        if symbol:
            valuation[("TPEX", symbol)] = {
                "pe": to_float(item.get("PriceEarningRatio")),
                "pb": to_float(item.get("PriceBookRatio")),
                "dividendYield": to_float(item.get("YieldRatio"), 0) or 0,
            }
    return valuation


def build_static_maps():
    return build_universe(), build_revenue_map(), build_valuation_map()


def build_stock(key, company, revenue, valuation, institutional_5d):
    market, symbol = key
    bars = yahoo_chart(symbol, company["suffix"])
    price = calculate_price_factors(bars)
    rev = revenue.get(key, {})
    val = valuation.get(key, {})
    inst = institutional_5d.get(market, {}).get(symbol, {"foreign": 0, "trust": 0, "dealer": 0, "total": 0})
    sector = company["sector"]
    if sector == "未分類" and rev.get("revenueSector"):
        sector = rev["revenueSector"].replace("工業", "")

    item = {
        "symbol": symbol,
        "name": company["name"].strip(),
        "market": company["market"],
        "marketCode": market,
        "yahooSymbol": f"{symbol}.{company['suffix']}",
        "sector": sector,
        **price,
        **rev,
        **val,
        "foreign5d": inst["foreign"],
        "trust5d": inst["trust"],
        "dealer5d": inst["dealer"],
        "institutional5d": inst["total"],
    }
    item["passes"] = {
        "revenueGrowth": (item.get("revenueYoy") or -999) > 20,
        "liquidity": item["avgTurnover20d"] > 100_000_000,
        "foreignBuy": item["foreign5d"] > 0,
        "aboveMa": item["aboveMa20"] and item["aboveMa60"],
        "nearHigh": item["near60dHigh"],
    }
    return item


def score_rows(rows):
    returns = [row["return20d"] for row in rows]
    liquidity = [row["avgTurnover20d"] for row in rows]
    volatility = [row["volatility20d"] for row in rows]
    revenue = [row.get("revenueYoy") for row in rows if row.get("revenueYoy") is not None]
    inst = [row["foreign5d"] for row in rows]

    for row in rows:
        momentum_score = percentile(row["return20d"], returns)
        liquidity_score = percentile(row["avgTurnover20d"], liquidity)
        low_vol_score = 1 - percentile(row["volatility20d"], volatility)
        revenue_score = percentile(row.get("revenueYoy") or -999, revenue)
        inst_score = percentile(row["foreign5d"], inst)
        valuation_score = 0.5
        if row.get("pe"):
            valuation_score += clamp((25 - row["pe"]) / 35, -0.3, 0.3)
        if row.get("pb"):
            valuation_score += clamp((2.5 - row["pb"]) / 5, -0.2, 0.2)
        valuation_score += clamp((row.get("dividendYield") or 0) / 12, 0, 0.25)
        valuation_score = clamp(valuation_score, 0, 1)

        high_score = 1 if row["is60dHigh"] else clamp(1 + (row["distanceTo60dHigh"] / 8), 0, 1)
        pass_bonus = sum(1 for passed in row["passes"].values() if passed) * 2.2
        raw_score = (
            momentum_score * 23
            + liquidity_score * 19
            + revenue_score * 18
            + inst_score * 15
            + high_score * 13
            + valuation_score * 8
            + low_vol_score * 4
            + pass_bonus
        )
        row["score"] = int(clamp(round(raw_score), 1, 99))
        row["alpha"] = round((row["score"] - 62) / 4.8 + (row["return20d"] / 12), 1)
        row["winRate"] = int(clamp(48 + row["score"] * 0.3 + sum(row["passes"].values()) * 2.1, 45, 82))

        if row["volatility20d"] > 90 or row["distanceTo60dHigh"] < -10 or (row.get("pe") or 0) > 120:
            row["risk"] = "high"
        elif row["volatility20d"] > 55 or row["distanceTo60dHigh"] < -5 or (row.get("pe") or 0) > 60:
            row["risk"] = "mid"
        else:
            row["risk"] = "low"

        if row["passes"]["revenueGrowth"] and row["sector"] in TECH_SECTORS:
            row["strategy"] = "growth"
        elif row["passes"]["foreignBuy"] and row["passes"]["liquidity"]:
            row["strategy"] = "chip"
        elif valuation_score >= 0.72 and row["return20d"] > -5:
            row["strategy"] = "value"
        else:
            row["strategy"] = "momentum"

        reasons = []
        if row["passes"]["revenueGrowth"]:
            reasons.append(f"月營收 YoY {row['revenueYoy']:.1f}%")
        if row["passes"]["liquidity"]:
            reasons.append(f"20 日均成交金額 {row['avgTurnover20d'] / 100_000_000:.1f} 億")
        if row["passes"]["foreignBuy"]:
            reasons.append(f"外資 5 日買超 {row['foreign5d'] / 1000:.0f} 張")
        if row["passes"]["aboveMa"]:
            reasons.append("股價站上 20/60 日線")
        if row["passes"]["nearHigh"]:
            reasons.append(f"距 60 日高點 {abs(row['distanceTo60dHigh']):.1f}%")
        row["reasons"] = reasons or ["分數來自價格、流動性、估值與風險綜合排名"]
        row["thesis"] = "；".join(row["reasons"]) + f"。20 日報酬 {row['return20d']:.1f}%，波動 {row['volatility20d']:.1f}%。"
        row["invalidation"] = "跌破 60 日線、外資 5 日合計轉賣超、或距 60 日高點擴大到 8% 以上時，移出候選。"


def add_rankings_and_similar(rows):
    by_group = {}
    for row in rows:
        by_group.setdefault((row["market"], row["sector"]), []).append(row)
    for group in by_group.values():
        group.sort(key=lambda item: item["score"], reverse=True)
        for index, row in enumerate(group, start=1):
            row["sectorRank"] = index
            row["sectorSize"] = len(group)
    for row in rows:
        row["similarSetups"] = [
            {
                "label": "動能延續",
                "condition": "20 日報酬為正且接近 60 日新高",
                "match": row["return20d"] > 0 and row["near60dHigh"],
            },
            {
                "label": "法人推升",
                "condition": "外資 5 日買超且成交金額達標",
                "match": row["passes"]["foreignBuy"] and row["passes"]["liquidity"],
            },
            {
                "label": "基本面加速",
                "condition": "月營收 YoY 大於 20%",
                "match": row["passes"]["revenueGrowth"],
            },
        ]


def load_model_library():
    if not MODEL_LIBRARY.exists():
        return []
    payload = json.loads(MODEL_LIBRARY.read_text(encoding="utf-8"))
    return payload.get("models", [])


def valuation_low(row, pe=20, pb=2):
    return ((row.get("pe") is not None and row["pe"] < pe) or (row.get("pb") is not None and row["pb"] < pb))


def distance_to_ma(row, key):
    ma = row.get(key)
    if not ma:
        return 999
    return (row["close"] / ma - 1) * 100


def positive_count(*values):
    return sum(1 for value in values if value and value > 0)


def model_passes(row, model_id):
    checks = {
        "growth_acceleration": lambda r: (r.get("revenueYoy") or -999) > 20 and (r.get("revenueMom") or -999) > 0 and r["passes"]["aboveMa"] and r["passes"]["liquidity"],
        "canslim_lite": lambda r: (r.get("revenueYoy") or -999) > 25 and r["passes"]["nearHigh"] and r["passes"]["foreignBuy"] and r["passes"]["liquidity"],
        "minervini_trend_template_lite": lambda r: r["close"] > r["ma20"] > r["ma60"] and r["distanceTo60dHigh"] >= -3 and r["return20d"] > 10 and r["passes"]["liquidity"],
        "darvas_box_breakout_lite": lambda r: (r["is60dHigh"] or r["distanceTo60dHigh"] >= -1) and r["return20d"] > 8 and r["passes"]["liquidity"] and r["risk"] != "high",
        "weinstein_stage2_lite": lambda r: r["aboveMa60"] and r["ma20"] > r["ma60"] and r["return20d"] > 0 and r["distanceTo60dHigh"] >= -8,
        "turtle_20d_breakout": lambda r: (r["is60dHigh"] or r["distanceTo60dHigh"] >= -1) and r["aboveMa20"] and r["return20d"] > 5,
        "bollinger_squeeze_proxy": lambda r: r["volatility20d"] < 35 and r["passes"]["aboveMa"] and r["distanceTo60dHigh"] >= -5 and r["return20d"] > 0,
        "rsi_momentum_proxy": lambda r: 5 <= r["return20d"] <= 35 and r["aboveMa20"] and r["risk"] != "high",
        "macd_trend_proxy": lambda r: r["ma20"] > r["ma60"] and r["return20d"] > 0 and r["aboveMa20"],
        "foreign_accumulation": lambda r: r["foreign5d"] > 0 and r["institutional5d"] > 0 and r["passes"]["liquidity"] and r["aboveMa60"],
        "trust_following": lambda r: r["trust5d"] > 0 and r["distanceTo60dHigh"] >= -5 and r["return20d"] > 0,
        "value_repair": lambda r: (r.get("pe") is not None and r["pe"] < 18) and (r.get("pb") is not None and r["pb"] < 2) and (r.get("dividendYield") or 0) > 3 and r["aboveMa60"],
        "deep_value_yield": lambda r: (r.get("pe") is not None and r["pe"] < 15) and (r.get("pb") is not None and r["pb"] < 1.5) and (r.get("dividendYield") or 0) > 5,
        "oshaughnessy_trending_value_lite": lambda r: valuation_low(r, 20, 2) and r["return20d"] > 5 and r["aboveMa60"] and r["passes"]["liquidity"],
        "greenblatt_proxy": lambda r: (r.get("pe") is not None and r["pe"] < 20) and (r.get("pb") is not None and r["pb"] < 3) and r["return20d"] > 0 and (r.get("dividendYield") or 0) >= 0,
        "low_volatility_trend": lambda r: r["volatility20d"] < 30 and r["passes"]["aboveMa"] and r["return20d"] > 0,
        "quality_growth_proxy": lambda r: (r.get("revenueYoy") or -999) > 15 and (r.get("pe") is not None and r["pe"] < 40) and r["volatility20d"] < 45 and r["aboveMa60"],
        "ma_bull_stack": lambda r: r["close"] > r["ma20"] > r["ma60"] and r["return20d"] > 0,
        "ma60_reclaim": lambda r: r["aboveMa60"] and r["return20d"] > 0 and r["distanceTo60dHigh"] >= -12,
        "price_volume_breakout": lambda r: r["distanceTo60dHigh"] >= -2 and (r.get("volumeRatio20d") or 0) > 1.2 and r["return20d"] > 5,
        "relative_volume_surge": lambda r: (r.get("volumeRatio20d") or 0) > 1.5 and r["return20d"] > 0 and r["aboveMa20"],
        "high_volume_no_drop": lambda r: (r.get("volumeRatio20d") or 0) > 1.3 and (r.get("rangePosition20d") or 0) > 0.6 and r["return20d"] > 0,
        "ma20_pullback_hold": lambda r: r["aboveMa20"] and 0 <= distance_to_ma(r, "ma20") < 5 and r["ma20"] > r["ma60"],
        "ma60_pullback_hold": lambda r: r["aboveMa60"] and 0 <= distance_to_ma(r, "ma60") < 6 and r["return20d"] > -5,
        "rs_rank_leader": lambda r: r["score"] >= 85 and r["return20d"] > 10 and r["distanceTo60dHigh"] >= -5,
        "sector_rank_leader": lambda r: (r.get("sectorRank") or 999) <= 3 and r["return20d"] > 0 and r["passes"]["liquidity"],
        "vcp_proxy": lambda r: r["volatility20d"] < 45 and r["distanceTo60dHigh"] >= -6 and r["passes"]["aboveMa"],
        "cup_handle_proxy": lambda r: r.get("return60d") is not None and r["return60d"] > 20 and -8 <= r["distanceTo60dHigh"] <= 0.5 and r["volatility20d"] < 55,
        "platform_breakout_proxy": lambda r: (r.get("rangePosition20d") or 0) > 0.85 and (r.get("volumeRatio20d") or 0) > 1.1 and r["distanceTo60dHigh"] >= -4,
        "flag_breakout_proxy": lambda r: r["return20d"] > 12 and r["distanceTo60dHigh"] >= -3 and (r.get("volumeRatio20d") or 0) > 1,
        "triangle_squeeze_proxy": lambda r: r["volatility20d"] < 40 and (r.get("rangePosition20d") or 0) > 0.7 and (r.get("volumeRatio20d") or 0) < 1.5,
        "strong_close_range": lambda r: (r.get("rangePosition20d") or 0) > 0.8 and r["aboveMa20"] and r["return20d"] > 0,
        "obv_accumulation_proxy": lambda r: r["institutional5d"] > 0 and (r.get("volumeRatio20d") or 0) > 1 and r["return20d"] > -3,
        "mfi_money_flow_proxy": lambda r: (r.get("turnoverRatio20d") or 0) > 1.2 and r["return20d"] > 5 and r["foreign5d"] > 0,
        "foreign_10d_proxy": lambda r: r["foreign5d"] > 1_000_000 and r["aboveMa20"] and r["passes"]["liquidity"],
        "institutional_sync_buy": lambda r: r["institutional5d"] > 0 and positive_count(r["foreign5d"], r["trust5d"], r["dealer5d"]) >= 2 and r["aboveMa20"],
        "smart_money_absorption": lambda r: r["institutional5d"] > 0 and -3 <= r["return20d"] <= 8 and r["aboveMa60"],
        "revenue_turnaround": lambda r: (r.get("revenueYoy") or -999) > 0 and (r.get("revenueMom") or -999) > 5 and r["aboveMa60"],
        "revenue_high_growth": lambda r: (r.get("revenueYoy") or -999) > 50 and r["passes"]["liquidity"] and r["aboveMa20"],
        "reasonable_growth": lambda r: (r.get("revenueYoy") or -999) > 20 and (r.get("pe") is not None and r["pe"] < 30) and (r.get("pb") is not None and r["pb"] < 5) and r["aboveMa60"],
        "dividend_momentum": lambda r: (r.get("dividendYield") or 0) > 4 and r["return20d"] > 3 and r["aboveMa60"],
        "cheap_rebound": lambda r: valuation_low(r, 15, 1.5) and r["return20d"] > 5 and r["aboveMa20"],
        "low_risk_value": lambda r: r["volatility20d"] < 35 and (r.get("pe") is not None and r["pe"] < 20) and (r.get("dividendYield") or 0) > 3,
        "risk_on_momentum": lambda r: r["return20d"] > 25 and r["distanceTo60dHigh"] >= -3 and (r.get("turnoverRatio20d") or 0) > 1,
        "oversold_reclaim": lambda r: (r.get("return60d") or 0) < 0 and r["return20d"] > 5 and r["aboveMa20"],
        "near_high_low_vol": lambda r: r["distanceTo60dHigh"] >= -3 and r["volatility20d"] < 40 and r["return20d"] > 0,
        "bh_big_player_breakout_formula": lambda r: r["distanceTo60dHigh"] >= -4 and (r.get("volumeRatio20d") or 0) >= 1.2 and r["return20d"] > 8 and r["passes"]["liquidity"] and positive_count(r["foreign5d"], r["institutional5d"]) >= 1,
        "bh_zero_lag_ai_proxy": lambda r: r["aboveMa20"] and r["return20d"] > 0 and (r.get("rangePosition20d") or 0) > 0.65 and ((r.get("volumeRatio20d") or 0) > 1 or r["institutional5d"] > 0),
        "bh_rsi_launch_point": lambda r: 3 <= r["return20d"] <= 25 and r["aboveMa20"] and r["distanceTo60dHigh"] >= -6 and (r.get("volumeRatio20d") or 0) >= 0.9,
        "bh_kline_stair_trend": lambda r: r["close"] > r["ma20"] > r["ma60"] and (r.get("rangePosition20d") or 0) > 0.65 and r["return20d"] > 5 and r["volatility20d"] < 60,
        "bh_bollinger_reversal_batch": lambda r: r["volatility20d"] < 45 and r["aboveMa20"] and r["return20d"] > 0 and r["drawdown20d"] >= -8 and (r.get("rangePosition20d") or 0) > 0.55,
        "bh_ma_deduction_value": lambda r: r["ma20"] > r["ma60"] and 0 <= distance_to_ma(r, "ma20") < 6 and r["return20d"] > 0,
        "bh_smc_smart_money_line": lambda r: r["institutional5d"] > 0 and r["aboveMa60"] and -5 <= r["return20d"] <= 15 and (r.get("rangePosition20d") or 0) > 0.55,
        "bh_peg_growth_breakout": lambda r: (r.get("revenueYoy") or -999) > 20 and (r.get("pe") is not None and r["pe"] > 0) and r["pe"] / max(r.get("revenueYoy") or 1, 1) < 1.5 and r["return20d"] > 5 and r["distanceTo60dHigh"] >= -5,
        "bh_macd_kline_low_point": lambda r: r["aboveMa20"] and r["ma20"] > r["ma60"] and -2 <= distance_to_ma(r, "ma20") <= 4 and r["return20d"] > 0,
        "bh_volume_profile_acceptance": lambda r: (r.get("volumeRatio20d") or 0) > 1.1 and (r.get("turnoverRatio20d") or 0) > 1 and 0.35 <= (r.get("rangePosition20d") or 0) <= 0.85 and r["return20d"] > -3 and r["aboveMa20"],
        "bh_trendline_breakout_quality": lambda r: r["return20d"] > 8 and r["distanceTo60dHigh"] >= -5 and (r.get("volumeRatio20d") or 0) > 1.1 and r["aboveMa20"],
        "bh_volume_confirmation": lambda r: (r.get("volumeRatio20d") or 0) > 1.3 and r["return20d"] > 3 and (r.get("rangePosition20d") or 0) > 0.65,
        "bh_vegas_dual_channel": lambda r: r["aboveMa20"] and r["aboveMa60"] and r["return20d"] > 5 and r["volatility20d"] < 65,
        "bh_macd_bias_short_swing": lambda r: 3 <= distance_to_ma(r, "ma20") < 15 and r["return20d"] > 8 and (r.get("volumeRatio20d") or 0) > 1,
        "bh_support_resistance_strength": lambda r: -8 <= r["distanceTo60dHigh"] <= 0.5 and (r.get("rangePosition20d") or 0) > 0.6 and r["return20d"] >= 0,
        "bh_kline_trend_3sec": lambda r: r["ma20"] > r["ma60"] and r["aboveMa20"] and (r.get("rangePosition20d") or 0) > 0.55 and r["return20d"] > 0,
        "bh_kd_trend_setup": lambda r: (r.get("rangePosition20d") or 0) > 0.55 and r["aboveMa20"] and r["return20d"] > 0 and r["volatility20d"] < 70,
        "bh_dmi_trend_strength": lambda r: r["return20d"] > 8 and r["ma20"] > r["ma60"] and r["distanceTo60dHigh"] >= -5,
        "bh_ema_false_breakout_reclaim": lambda r: r["aboveMa20"] and r["drawdown20d"] >= -5 and r["return20d"] > 3 and (r.get("rangePosition20d") or 0) > 0.6,
        "bh_macd_kdj_combo": lambda r: r["ma20"] > r["ma60"] and (r.get("rangePosition20d") or 0) > 0.6 and r["return20d"] > 3 and (r.get("volumeRatio20d") or 0) > 1,
        "bh_bollinger_rsi_reversal": lambda r: r["volatility20d"] < 50 and -6 <= r["drawdown20d"] <= 0 and r["return20d"] > 0 and r["aboveMa20"],
        "bh_atr_risk_box": lambda r: r["volatility20d"] < 35 and r["aboveMa20"] and r["return20d"] > 0 and r["risk"] != "high",
        "bh_obv_accumulation_breakout": lambda r: r["institutional5d"] > 0 and (r.get("volumeRatio20d") or 0) > 1.1 and r["return20d"] > 0 and r["distanceTo60dHigh"] >= -6,
        "bh_fibonacci_pullback": lambda r: (r.get("return60d") or 0) > 10 and -13 <= r["distanceTo60dHigh"] <= -3 and r["aboveMa60"] and r["volatility20d"] < 65,
    }
    rule = checks.get(model_id)
    return bool(rule and rule(row))


def attach_model_matches(rows, models):
    executable = [model for model in models if model.get("implemented", True) is not False]
    for row in rows:
        matches = []
        for model in executable:
            if model_passes(row, model["id"]):
                matches.append(model["id"])
        row["modelMatches"] = matches
        row["modelMatchCount"] = len(matches)


def update(workers):
    models = load_model_library()
    universe, revenue, valuation = build_static_maps()
    sample_bars = yahoo_chart("2330", "TW")
    trading_dates = [bar["date"] for bar in sample_bars[-8:]]
    institutional_5d = {}
    for iso_date in trading_dates[-5:]:
        merge_institutional(institutional_5d, "TWSE", fetch_twse_institutional_for_date(iso_to_twse_date(iso_date)))
        merge_institutional(institutional_5d, "TPEX", fetch_tpex_institutional_for_date(iso_to_tpex_date(iso_date)))

    rows = []
    errors = []
    with ThreadPoolExecutor(max_workers=workers) as executor:
        futures = {
            executor.submit(build_stock, key, company, revenue, valuation, institutional_5d): key
            for key, company in universe.items()
        }
        for future in as_completed(futures):
            key = futures[future]
            try:
                rows.append(future.result())
            except Exception as exc:
                errors.append({"market": key[0], "symbol": key[1], "error": str(exc)})

    score_rows(rows)
    add_rankings_and_similar(rows)
    attach_model_matches(rows, models)
    rows.sort(key=lambda item: (sum(item["passes"].values()), item["score"], item["avgTurnover20d"]), reverse=True)
    selected = [
        row
        for row in rows
        if row["score"] >= 58 and row["passes"]["liquidity"] and (row["passes"]["aboveMa"] or row["passes"]["nearHigh"])
    ][:180]
    market_counts = {}
    for row in rows:
        market_counts[row["market"]] = market_counts.get(row["market"], 0) + 1
    selected_counts = {}
    for row in selected:
        selected_counts[row["market"]] = selected_counts.get(row["market"], 0) + 1

    payload = {
        "meta": {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "marketDate": rows[0]["marketDate"] if rows else None,
            "source": "Yahoo Finance + TWSE OpenAPI + TPEx OpenAPI",
            "universe": "TWSE listed and TPEx OTC common stocks",
            "workers": workers,
            "symbolsFetched": len(rows),
            "symbolsFailed": len(errors),
            "marketCounts": market_counts,
            "candidateMarketCounts": selected_counts,
            "scoring": "20d return, 60d high proximity, liquidity, volatility, revenue growth, institutional flow, valuation",
            "modelLibraryVersion": json.loads(MODEL_LIBRARY.read_text(encoding="utf-8")).get("version") if MODEL_LIBRARY.exists() else None,
            "modelCount": len(models),
            "filters": {
                "revenueYoy": 20,
                "avgTurnover20d": 100_000_000,
                "foreign5d": 0,
                "aboveMa20And60": True,
                "distanceTo60dHigh": -3,
            },
        },
        "stocks": selected,
        "errors": errors[:80],
    }
    OUT.parent.mkdir(exist_ok=True)
    backup_file(OUT)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return payload


def main():
    parser = argparse.ArgumentParser(description="Update AlphaDeck real candidate data.")
    parser.add_argument("--workers", type=int, default=8, help="Parallel Yahoo Finance workers.")
    args = parser.parse_args()
    payload = update(max(1, args.workers))
    print(f"Wrote {OUT}")
    print(f"Market date: {payload['meta']['marketDate']}")
    print(f"Fetched: {payload['meta']['symbolsFetched']} symbols, failed: {payload['meta']['symbolsFailed']}")
    print(f"Markets: {payload['meta']['marketCounts']}")
    print(f"Candidates: {len(payload['stocks'])} {payload['meta']['candidateMarketCounts']}")
    for row in payload["stocks"][:14]:
        print(
            f"{row['market']} {row['symbol']} {row['name']} score={row['score']} "
            f"20d={row['return20d']}% high60={row['distanceTo60dHigh']}% "
            f"revYoY={row.get('revenueYoy')} foreign5d={row['foreign5d']}"
        )


if __name__ == "__main__":
    main()
