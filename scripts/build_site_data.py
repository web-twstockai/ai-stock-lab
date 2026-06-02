import csv
import json
import math
import ssl
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

from data_backup import backup_file


ROOT = Path(__file__).resolve().parents[1]
HISTORY = ROOT / "data" / "history"
MANIFEST = HISTORY / "manifest.json"
COMPANY_META = ROOT / "data" / "company-meta.json"
THEME_DATA = ROOT / "data" / "stock-themes.json"
OUT = ROOT / "data" / "site-data.json"
SCREENING_STRATEGIES_CONFIG = ROOT / "data" / "daily-screening-strategies.json"
MIN_DAILY_VOLUME_LOTS = 1000
MIN_DAILY_VOLUME_SHARES = MIN_DAILY_VOLUME_LOTS * 1000
TIER_LABELS = {
    "basic": "基本會員",
    "advanced": "進階會員",
    "admin": "管理員",
}

COMPANY_URLS = {
    "twse": "https://openapi.twse.com.tw/v1/opendata/t187ap03_L",
    "tpex": "https://www.tpex.org.tw/openapi/v1/mopsfin_t187ap03_O",
}

SECTOR_MAP = {
    "01": "水泥工業",
    "02": "食品工業",
    "03": "塑膠工業",
    "04": "紡織纖維",
    "05": "電機機械",
    "06": "電器電纜",
    "07": "化學生技醫療",
    "08": "玻璃陶瓷",
    "09": "造紙工業",
    "10": "鋼鐵工業",
    "11": "橡膠工業",
    "12": "汽車工業",
    "14": "建材營造",
    "15": "航運業",
    "16": "觀光餐旅",
    "17": "金融保險",
    "18": "貿易百貨",
    "20": "其他產業",
    "21": "化學工業",
    "22": "生技醫療業",
    "23": "油電燃氣業",
    "24": "半導體",
    "25": "電腦及週邊設備",
    "26": "光電業",
    "27": "通信網路業",
    "28": "電子零組件",
    "29": "電子通路業",
    "30": "資訊服務業",
    "31": "其他電子業",
    "32": "文化創意業",
    "33": "農業科技",
    "34": "電子商務",
    "35": "綠能環保",
    "36": "數位雲端",
    "37": "運動休閒",
    "38": "居家生活",
}

NAMES = {
    "1303": ("南亞", "塑膠工業"),
    "2303": ("聯電", "半導體"),
    "2317": ("鴻海", "電子零組件"),
    "2330": ("台積電", "半導體"),
    "2356": ("英業達", "電腦及週邊設備"),
    "2376": ("技嘉", "電腦及週邊設備"),
    "2377": ("微星", "電腦及週邊設備"),
    "2382": ("廣達", "電腦及週邊設備"),
    "2408": ("南亞科", "半導體"),
    "2454": ("聯發科", "半導體"),
    "2881": ("富邦金", "金融保險"),
    "2882": ("國泰金", "金融保險"),
    "2891": ("中信金", "金融保險"),
    "3037": ("欣興", "電子零組件"),
    "3231": ("緯創", "電腦及週邊設備"),
}

SECTOR_FALLBACKS = [
    ("23", "半導體"),
    ("24", "半導體"),
    ("30", "電子零組件"),
    ("31", "電子零組件"),
    ("32", "電腦及週邊設備"),
    ("28", "金融保險"),
    ("29", "金融保險"),
]

SYMBOL_META = {}


def http_json(url):
    context = ssl._create_unverified_context()
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 AI Stock Lab"})
    with urllib.request.urlopen(request, timeout=35, context=context) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def load_manifest_meta():
    if not MANIFEST.exists():
        return {}
    try:
        manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}
    meta = {}
    for item in manifest.get("symbols", []):
        symbol = str(item.get("symbol", "")).strip()
        if symbol:
            meta[symbol] = {
                "name": item.get("name") or symbol,
                "market": item.get("market") or "",
            }
    return meta


def load_company_meta():
    if COMPANY_META.exists():
        try:
            cached = json.loads(COMPANY_META.read_text(encoding="utf-8"))
            for item in cached.values():
                if item.get("sector") == "其他":
                    item["sector"] = "其他產業"
            return cached
        except json.JSONDecodeError:
            pass

    meta = {}
    try:
        for row in http_json(COMPANY_URLS["twse"]):
            symbol = str(row.get("公司代號", "")).strip()
            if not symbol:
                continue
            meta[symbol] = {
                "name": (row.get("公司簡稱") or row.get("公司名稱") or symbol).strip(),
                "sector": SECTOR_MAP.get(str(row.get("產業別", "")).strip(), "其他"),
                "market": "上市",
            }
        for row in http_json(COMPANY_URLS["tpex"]):
            symbol = str(row.get("SecuritiesCompanyCode", "")).strip()
            if not symbol:
                continue
            meta[symbol] = {
                "name": (row.get("CompanyAbbreviation") or row.get("CompanyName") or symbol).strip(),
                "sector": SECTOR_MAP.get(str(row.get("SecuritiesIndustryCode", "")).strip(), "其他"),
                "market": "上櫃",
            }
        backup_file(COMPANY_META)
        COMPANY_META.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception:
        return meta
    return meta


def load_theme_data():
    if not THEME_DATA.exists():
        return {"stocks": {}, "themes": {}, "sources": [], "stats": {}}
    try:
        return json.loads(THEME_DATA.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {"stocks": {}, "themes": {}, "sources": [], "stats": {}}


def load_screening_strategy_groups():
    if not SCREENING_STRATEGIES_CONFIG.exists():
        return {}
    try:
        payload = json.loads(SCREENING_STRATEGIES_CONFIG.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}
    groups = payload.get("strategyGroups", {})
    if not isinstance(groups, dict):
        return {}
    normalized = {}
    for tier in ("basic", "advanced", "admin"):
        values = groups.get(tier, [])
        if isinstance(values, list):
            normalized[tier] = [str(value) for value in values if value]
    return normalized


def apply_screening_strategy_groups(definitions):
    groups = load_screening_strategy_groups()
    if not groups:
        return [dict(definition) for definition in definitions]

    tier_by_key = {
        key: tier
        for tier, keys in groups.items()
        for key in keys
        if tier in TIER_LABELS
    }
    updated = []
    for definition in definitions:
        item = dict(definition)
        tier = tier_by_key.get(item["key"], item.get("tier", "basic"))
        if tier not in TIER_LABELS:
            tier = "basic"
        item["tier"] = tier
        item["tierLabel"] = TIER_LABELS[tier]
        updated.append(item)
    return updated


def read_rows(path):
    with path.open("r", encoding="utf-8-sig", newline="") as file:
        return list(csv.DictReader(file))


def num(value, default=0.0):
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def ma(values, window):
    if len(values) < window:
        return None
    return sum(values[-window:]) / window


def pct(new, old):
    if old in (None, 0) or new is None:
        return 0.0
    return (new / old - 1) * 100


def stdev(values):
    if not values:
        return 0.0
    mean = sum(values) / len(values)
    return math.sqrt(sum((item - mean) ** 2 for item in values) / len(values))


def stock_name(symbol):
    if symbol in SYMBOL_META and SYMBOL_META[symbol].get("name"):
        return SYMBOL_META[symbol]["name"]
    return NAMES.get(symbol, (symbol, infer_sector(symbol)))[0]


def infer_sector(symbol):
    if symbol in SYMBOL_META and SYMBOL_META[symbol].get("sector"):
        return SYMBOL_META[symbol]["sector"]
    if symbol in NAMES:
        return NAMES[symbol][1]
    for prefix, sector in SECTOR_FALLBACKS:
        if symbol.startswith(prefix):
            return sector
    return "其他產業"


def market_label(code):
    return "上櫃" if code == "tpex" else "上市"


def symbol_market(symbol, code):
    if symbol in SYMBOL_META and SYMBOL_META[symbol].get("market"):
        return SYMBOL_META[symbol]["market"]
    return market_label(code)


def summarize_symbol(path, market_code):
    rows = read_rows(path)
    if len(rows) < 65:
        return None

    symbol = path.stem
    recent = rows[-126:]
    closes = [num(row["close"]) for row in rows]
    highs = [num(row["high"]) for row in rows]
    lows = [num(row["low"]) for row in rows]
    volumes = [int(num(row["volume"])) for row in rows]
    returns = [(closes[i] / closes[i - 1] - 1) for i in range(1, len(closes)) if closes[i - 1]]

    close = closes[-1]
    previous = closes[-2]
    high60 = max(highs[-60:])
    low60 = min(lows[-60:])
    high20 = max(highs[-20:])
    low20 = min(lows[-20:])
    ma20 = ma(closes, 20) or close
    ma60 = ma(closes, 60) or close
    avg_turnover20 = sum(closes[-20 + i] * volumes[-20 + i] for i in range(20)) / 20
    avg_volume20 = sum(volumes[-20:]) / 20
    volatility20 = stdev(returns[-20:]) * math.sqrt(252) * 100
    range_position60 = (close - low60) / (high60 - low60) if high60 > low60 else 0.5
    distance_high60 = pct(close, high60)
    volume_ratio = volumes[-1] / avg_volume20 if avg_volume20 else 0
    return20 = pct(close, closes[-21])
    return60 = pct(close, closes[-61])

    score = (
        min(max(return20, -20), 40) * 0.9
        + min(max(return60, -30), 70) * 0.42
        + range_position60 * 24
        + min(volume_ratio, 4) * 5
        + min(avg_turnover20 / 1_000_000_000, 8) * 2
        - min(volatility20, 90) * 0.18
    )

    return {
        "symbol": symbol,
        "name": stock_name(symbol),
        "sector": infer_sector(symbol),
        "market": symbol_market(symbol, market_code),
        "marketCode": market_code.upper(),
        "date": rows[-1]["date"],
        "close": round(close, 2),
        "previousClose": round(previous, 2),
        "changePercent": round(pct(close, previous), 2),
        "volume": volumes[-1],
        "turnover": round(close * volumes[-1]),
        "avgTurnover20": round(avg_turnover20),
        "return20": round(return20, 2),
        "return60": round(return60, 2),
        "ma20": round(ma20, 2),
        "ma60": round(ma60, 2),
        "high20": round(high20, 2),
        "low20": round(low20, 2),
        "high60": round(high60, 2),
        "low60": round(low60, 2),
        "distanceHigh60": round(distance_high60, 2),
        "rangePosition60": round(range_position60, 3),
        "volumeRatio20": round(volume_ratio, 2),
        "volatility20": round(volatility20, 2),
        "score": round(max(0, min(99, score)), 1),
        "risk": "高" if volatility20 >= 55 else ("中" if volatility20 >= 32 else "低"),
        "passes": {
            "strength": return20 > 8 and range_position60 > 0.72 and close >= ma20,
            "volumeBreakout": close >= high60 * 0.97 and volume_ratio >= 1.45,
            "maBull": close >= ma20 >= ma60,
            "newHigh60": close >= high60 * 0.995,
            "rsiStrong": return20 > 5 and close >= ma20 and volume_ratio >= 1.0,
            "maClusterBreakout": close >= ma20 >= ma60 and abs(ma20 / ma60 - 1) <= 0.06 and volume_ratio >= 1.1,
            "boxBreakout": close >= high20 * 0.98 and volume_ratio >= 1.2,
            "wBottomRebound": return20 > 3 and return60 < 25 and range_position60 >= 0.45 and close >= ma20,
            "rsiMacdConfirm": return20 > 6 and return60 > 0 and close >= ma20 and volume_ratio >= 1.1,
            "liquidityVolume": avg_turnover20 >= 100_000_000 and volume_ratio >= 1.3 and return20 > 0,
            "bollingerRebound": volatility20 < 55 and return20 > 0 and range_position60 >= 0.35 and close >= ma20,
            "macdTurnRed": return20 > 3 and return60 < 10 and close >= ma20,
            "pullbackMa20": close >= ma20 and close <= ma20 * 1.06 and return60 > 8 and return20 > -5,
            "volumeDryExpand": volume_ratio >= 1.4 and volatility20 < 55 and return20 > 0,
            "sectorLeader": score >= 50 and avg_turnover20 >= 100_000_000,
            "trendBacktest": return60 > 15 and close >= ma20 and ma20 >= ma60,
            "breakoutRetest": close >= high60 * 0.94 and close <= high60 * 0.99 and return20 > 0 and volume_ratio >= 0.8,
            "relativeStrengthLeader": score >= 60,
            "moneyFlowLeader": avg_turnover20 >= 1_000_000_000 and return20 > 5,
            "lowRiskBreakout": close >= high60 * 0.96 and volume_ratio >= 1.1 and volatility20 <= 35,
            "aiScoreTop": score >= 55 and volume_ratio >= 1.0,
            "lowVolStrength": volatility20 <= 35 and return20 > 3 and close >= ma20,
            "liquidityBreakout": avg_turnover20 >= 500_000_000 and close >= high20 * 0.98,
            "highBaseConsolidation": distance_high60 >= -5 and return20 > -3 and volume_ratio < 1.3,
            "riskControlList": volatility20 <= 40 and close >= ma60 and return20 >= 0,
        },
        "series": [
            {
                "date": row["date"],
                "open": round(num(row["open"]), 2),
                "high": round(num(row["high"]), 2),
                "low": round(num(row["low"]), 2),
                "close": round(num(row["close"]), 2),
                "volume": int(num(row["volume"])),
            }
            for row in recent
        ],
    }


def sector_stats(stocks):
    groups = {}
    for stock in stocks:
        groups.setdefault(stock["sector"], []).append(stock)
    stats = []
    for sector, items in groups.items():
        avg_score = sum(item["score"] for item in items) / len(items)
        avg_return = sum(item["return20"] for item in items) / len(items)
        turnover = sum(item["turnover"] for item in items)
        leaders = sorted(items, key=lambda item: item["turnover"], reverse=True)[:3]
        stats.append(
            {
                "sector": sector,
                "score": round(avg_score + max(min(avg_return, 20), -10) * 0.45, 1),
                "count": len(items),
                "turnover": turnover,
                "leaders": leaders,
            }
        )
    return sorted(stats, key=lambda item: item["score"], reverse=True)


STRATEGY_DEFINITIONS = [
    {
        "key": "strength",
        "tier": "basic",
        "tierLabel": "基本會員",
        "label": "強勢股篩選",
        "description": "20 日報酬轉強，股價位於 60 日區間高檔並站上 MA20。",
        "tags": ["動能", "趨勢", "高檔"],
        "criteria": "20日報酬 > 8%、60日區間位置 > 72%、收盤站上 MA20",
    },
    {
        "key": "volumeBreakout",
        "tier": "basic",
        "tierLabel": "基本會員",
        "label": "放量突破",
        "description": "價格接近 60 日高點，成交量相對 20 日均量明顯放大。",
        "tags": ["成交量", "突破", "價量"],
        "criteria": "距60日高點 < 3%、量能倍率 >= 1.45",
    },
    {
        "key": "maBull",
        "tier": "basic",
        "tierLabel": "基本會員",
        "label": "均線多頭排列",
        "description": "收盤價站上 MA20，且 MA20 高於 MA60，趨勢結構偏多。",
        "tags": ["均線", "趨勢", "基本"],
        "criteria": "收盤價 >= MA20 >= MA60",
    },
    {
        "key": "newHigh60",
        "tier": "basic",
        "tierLabel": "基本會員",
        "label": "60日新高",
        "description": "股價突破或貼近 60 日新高，觀察突破後延續性。",
        "tags": ["新高", "突破"],
        "criteria": "收盤價 >= 60日高點的 99.5%",
    },
    {
        "key": "rsiStrong",
        "tier": "basic",
        "tierLabel": "基本會員",
        "label": "動能轉強",
        "description": "以價格動能代理 RSI 轉強，搭配 MA20 與量能確認。",
        "tags": ["RSI代理", "動能"],
        "criteria": "20日報酬 > 5%、收盤站上 MA20、量能倍率 >= 1",
    },
    {
        "key": "maClusterBreakout",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "均線糾結突破",
        "description": "MA20 與 MA60 距離收斂後，股價帶量站上均線結構。",
        "tags": ["均線糾結", "突破"],
        "criteria": "MA20/MA60 差距 <= 6%、收盤站上均線、量能倍率 >= 1.1",
    },
    {
        "key": "boxBreakout",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "箱型整理突破",
        "description": "價格接近 20 日箱型上緣，並搭配量能放大確認。",
        "tags": ["箱型", "突破"],
        "criteria": "收盤價 >= 20日高點的 98%、量能倍率 >= 1.2",
    },
    {
        "key": "wBottomRebound",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "W底反彈",
        "description": "中期未過熱，短線轉強並重新站回 MA20。",
        "tags": ["W底", "反彈"],
        "criteria": "20日報酬 > 3%、60日報酬 < 25%、60日區間位置 >= 45%",
    },
    {
        "key": "rsiMacdConfirm",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "RSI + MACD 雙確認",
        "description": "以短中期報酬、均線與量能同步確認動能轉強。",
        "tags": ["RSI代理", "MACD代理"],
        "criteria": "20日報酬 > 6%、60日報酬 > 0、收盤站上 MA20、量能倍率 >= 1.1",
    },
    {
        "key": "liquidityVolume",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "高流動性 + 放量",
        "description": "20 日均成交金額達門檻，且最新量能明顯放大。",
        "tags": ["流動性", "成交量"],
        "criteria": "20日均成交金額 >= 1億、量能倍率 >= 1.3、20日報酬 > 0",
    },
    {
        "key": "bollingerRebound",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "布林回升",
        "description": "以波動與區間位置代理布林回升，尋找整理後轉強。",
        "tags": ["布林代理", "反彈"],
        "criteria": "波動率 < 55%、20日報酬 > 0、站上 MA20",
    },
    {
        "key": "macdTurnRed",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "MACD 翻紅代理",
        "description": "短線報酬轉正但中期尚未過熱，適合觀察動能初升段。",
        "tags": ["MACD代理", "動能"],
        "criteria": "20日報酬 > 3%、60日報酬 < 10%、收盤站上 MA20",
    },
    {
        "key": "pullbackMa20",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "回檔站回 MA20",
        "description": "中期趨勢仍在，價格回到 MA20 附近後重新站穩。",
        "tags": ["回檔", "MA20"],
        "criteria": "收盤在 MA20 至 MA20*1.06 間、60日報酬 > 8%",
    },
    {
        "key": "volumeDryExpand",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "量縮整理後放量",
        "description": "波動未失控，短線正報酬並出現量能擴張。",
        "tags": ["量縮", "放量"],
        "criteria": "量能倍率 >= 1.4、波動率 < 55%、20日報酬 > 0",
    },
    {
        "key": "sectorLeader",
        "tier": "advanced",
        "tierLabel": "進階會員",
        "label": "族群領先股",
        "description": "綜合分數與流動性同時達標，作為族群領先觀察名單。",
        "tags": ["族群", "領先"],
        "criteria": "綜合分數 >= 50、20日均成交金額 >= 1億",
    },
    {
        "key": "trendBacktest",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "高勝率趨勢回測",
        "description": "中期趨勢向上，收盤站上 MA20 且 MA20 高於 MA60。",
        "tags": ["趨勢", "回測"],
        "criteria": "60日報酬 > 15%、收盤價 >= MA20 >= MA60",
    },
    {
        "key": "breakoutRetest",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "突破後回踩確認",
        "description": "突破後仍接近 60 日高點，量能未明顯退潮。",
        "tags": ["突破", "回踩"],
        "criteria": "收盤介於 60日高點 94%~99%、20日報酬 > 0",
    },
    {
        "key": "relativeStrengthLeader",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "相對強度領先",
        "description": "綜合分數達高標，代表報酬、位置、量能與流動性同步偏強。",
        "tags": ["相對強度", "領先"],
        "criteria": "綜合分數 >= 60",
    },
    {
        "key": "moneyFlowLeader",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "資金流向領先",
        "description": "高成交金額股票中，短線報酬同步轉強。",
        "tags": ["資金", "流動性"],
        "criteria": "20日均成交金額 >= 10億、20日報酬 > 5%",
    },
    {
        "key": "lowRiskBreakout",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "低風險突破",
        "description": "接近 60 日高點且量能放大，但 20 日年化波動相對較低。",
        "tags": ["穩定", "低風險"],
        "criteria": "距60日高點 < 4%、量能倍率 >= 1.1、波動率 <= 35%",
    },
    {
        "key": "aiScoreTop",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "AI 綜合強度排行",
        "description": "用綜合分數與量能倍率找出整體條件最強的一籃子標的。",
        "tags": ["AI分數", "排行"],
        "criteria": "綜合分數 >= 55、量能倍率 >= 1",
    },
    {
        "key": "lowVolStrength",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "低波動續強",
        "description": "波動受控、短線報酬為正，且收盤價站上 MA20。",
        "tags": ["低波動", "續強"],
        "criteria": "波動率 <= 35%、20日報酬 > 3%、收盤站上 MA20",
    },
    {
        "key": "liquidityBreakout",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "高流動性突破",
        "description": "大成交金額股票接近 20 日高點，適合追蹤資金聚焦標的。",
        "tags": ["流動性", "突破"],
        "criteria": "20日均成交金額 >= 5億、收盤價 >= 20日高點的 98%",
    },
    {
        "key": "highBaseConsolidation",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "60日高檔整理",
        "description": "價格仍在 60 日高點附近，但短線尚未過度放量。",
        "tags": ["高檔", "整理"],
        "criteria": "距60日高點 >= -5%、20日報酬 > -3%、量能倍率 < 1.3",
    },
    {
        "key": "riskControlList",
        "tier": "admin",
        "tierLabel": "管理員",
        "label": "風險控管名單",
        "description": "波動相對受控且仍站上 MA60，用於保守觀察清單。",
        "tags": ["風控", "穩定"],
        "criteria": "波動率 <= 40%、收盤站上 MA60、20日報酬 >= 0",
    },
]


def compact_stock(stock):
    return {key: value for key, value in stock.items() if key != "series"}


def compact_sector(sector):
    return {
        **sector,
        "leaders": [compact_stock(stock) for stock in sector.get("leaders", [])],
    }


def clamp(value, low=0, high=100):
    return max(low, min(high, value))


def build_theme_heat(stocks, theme_data):
    groups = {}
    for stock in stocks:
        for theme in stock.get("themes", []):
            groups.setdefault(theme, []).append(stock)

    stats = {}
    source_meta = theme_data.get("themes", {})
    for theme, items in groups.items():
        if not items:
            continue
        avg_return20 = sum(item["return20"] for item in items) / len(items)
        avg_return60 = sum(item["return60"] for item in items) / len(items)
        avg_volume_ratio = sum(item["volumeRatio20"] for item in items) / len(items)
        avg_score = sum(item["score"] for item in items) / len(items)
        total_turnover = sum(item["turnover"] for item in items)
        high_ratio = sum(1 for item in items if item["distanceHigh60"] >= -3) / len(items)
        positive_ratio = sum(1 for item in items if item["return20"] > 0) / len(items)
        source_count = len(source_meta.get(theme, {}).get("sources") or [source_meta.get(theme, {}).get("source")])

        return_score = clamp(16 + avg_return20 * 0.28, 0, 32)
        volume_score = clamp(avg_volume_ratio * 7, 0, 18)
        breakout_score = high_ratio * 16
        breadth_score = positive_ratio * 10
        leader_score = clamp(avg_score / 100 * 10)
        source_score = clamp(source_count * 4, 0, 6)
        reliability = 0.6 + 0.4 * min(1, math.sqrt(len(items) / 20))
        score = round(clamp(return_score + volume_score + breakout_score + breadth_score + leader_score + source_score) * reliability, 1)

        leaders = sorted(items, key=lambda item: (item["score"], item["turnover"]), reverse=True)[:5]
        stats[theme] = {
            "score": score,
            "stockCount": len(items),
            "avgReturn20": round(avg_return20, 2),
            "avgReturn60": round(avg_return60, 2),
            "avgVolumeRatio20": round(avg_volume_ratio, 2),
            "highProportion60": round(high_ratio, 3),
            "positiveProportion20": round(positive_ratio, 3),
            "totalTurnover": round(total_turnover),
            "sourceCount": source_count,
            "sources": source_meta.get(theme, {}).get("sources", []),
            "leaders": [compact_stock(item) for item in leaders],
        }
    return dict(sorted(stats.items(), key=lambda item: item[1]["score"], reverse=True))


def apply_theme_boost(stocks, theme_heat):
    for stock in stocks:
        ranked_themes = sorted(
            (
                {"name": theme, "score": theme_heat.get(theme, {}).get("score", 0)}
                for theme in stock.get("themes", [])
                if theme in theme_heat
            ),
            key=lambda item: item["score"],
            reverse=True,
        )
        top_scores = [item["score"] for item in ranked_themes[:3]]
        top_heat = top_scores[0] if top_scores else 0
        avg_heat = sum(top_scores) / len(top_scores) if top_scores else 0
        confirmation = 0.55
        confirmation += min(stock["volumeRatio20"], 2.2) / 4
        confirmation += 0.18 if stock["close"] >= stock["ma20"] else 0
        confirmation += 0.18 if stock["distanceHigh60"] >= -3 else 0
        confirmation = clamp(confirmation, 0.45, 1.2)
        boost = min(20, (top_heat / 100 * 12 + avg_heat / 100 * 8) * confirmation)
        stock["themeBoost"] = round(boost, 1)
        stock["themeHeatScore"] = round(top_heat, 1)
        stock["hotThemes"] = ranked_themes[:5]
        stock["rankScore"] = round(min(100, stock["score"] * 0.84 + stock["themeBoost"]), 1)


def strategy_payload(stocks, definition):
    key = definition["key"]
    selected = [
        stock
        for stock in stocks
        if stock["passes"].get(key) and stock["volume"] > MIN_DAILY_VOLUME_SHARES
    ]
    selected = sorted(selected, key=lambda item: (item.get("rankScore", item["score"]), item["turnover"]), reverse=True)
    payload = {**definition}
    tags = list(payload.get("tags", []))
    volume_tag = f"成交量>{MIN_DAILY_VOLUME_LOTS}張"
    if volume_tag not in tags:
        tags.append(volume_tag)
    payload["tags"] = tags
    payload["criteria"] = f"{payload.get('criteria', '')}；成交量 > {MIN_DAILY_VOLUME_LOTS} 張"
    payload["minVolumeLots"] = MIN_DAILY_VOLUME_LOTS
    payload.update({"count": len(selected), "stocks": [compact_stock(stock) for stock in selected]})
    return payload


def build():
    global SYMBOL_META
    manifest_meta = load_manifest_meta()
    company_meta = load_company_meta()
    theme_data = load_theme_data()
    stock_themes = theme_data.get("stocks", {})
    SYMBOL_META = {**manifest_meta, **company_meta}

    stocks = []
    for market_code in ("twse", "tpex"):
        raw_dir = HISTORY / market_code / "raw"
        for path in raw_dir.glob("*.csv"):
            item = summarize_symbol(path, market_code)
            if item:
                item["themes"] = stock_themes.get(item["symbol"], {}).get("themes", [])
                stocks.append(item)

    theme_heat = build_theme_heat(stocks, theme_data)
    apply_theme_boost(stocks, theme_heat)

    stocks.sort(key=lambda item: (item.get("rankScore", item["score"]), item["turnover"]), reverse=True)
    candidates = [stock for stock in stocks if stock.get("rankScore", stock["score"]) >= 35][:220]
    sectors = sector_stats(stocks)
    market_date = max(stock["date"] for stock in stocks)
    hot_score = round(sum(item["score"] for item in sectors[:5]) / max(1, len(sectors[:5])), 1)
    heat = max(0, min(100, hot_score))

    strategy_definitions = apply_screening_strategy_groups(STRATEGY_DEFINITIONS)
    strategies = {definition["key"]: strategy_payload(stocks, definition) for definition in strategy_definitions}
    strategy_groups = {
        tier: [definition["key"] for definition in strategy_definitions if definition["tier"] == tier]
        for tier in ("basic", "advanced", "admin")
    }

    stock_details = {}
    for symbol in ("1303", "2330", "2382", "2317", "2303"):
        stock = next((item for item in stocks if item["symbol"] == symbol), None)
        if stock:
            stock_details[symbol] = stock

    payload = {
        "meta": {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "marketDate": market_date,
            "source": "Local Yahoo Finance OHLCV CSV, raw close + adjusted history available",
            "stockCount": len(stocks),
            "candidateCount": len(candidates),
            "dailyScreeningMinVolumeLots": MIN_DAILY_VOLUME_LOTS,
            "themeSourceCount": len(theme_data.get("sources", [])),
            "themeCount": theme_data.get("stats", {}).get("themeCount", 0),
            "themeStockCount": theme_data.get("stats", {}).get("stockCount", 0),
        },
        "themeSources": theme_data.get("sources", []),
        "themes": theme_data.get("themes", {}),
        "themeHeat": theme_heat,
        "topThemes": list(theme_heat.keys())[:20],
        "marketOverview": {
            "heatScore": heat,
            "trackedStocks": len(stocks),
            "trackedSectors": len(sectors),
            "topSectors": [compact_sector(sector) for sector in sectors[:4]],
        },
        "dailyScreening": {
            "basicCount": len(strategy_groups["basic"]),
            "advancedCount": len(strategy_groups["advanced"]),
            "adminCount": len(strategy_groups["admin"]),
            "strategyGroups": strategy_groups,
            "strategies": strategies,
        },
        "stockDetails": stock_details,
        "candidates": [compact_stock(stock) for stock in candidates[:220]],
    }

    backup_file(OUT)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT} with {len(stocks)} stocks, {len(candidates)} candidates")


if __name__ == "__main__":
    build()
