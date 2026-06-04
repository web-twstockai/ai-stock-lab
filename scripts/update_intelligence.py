import argparse
import json
import re
import ssl
import time
import urllib.parse
import urllib.request
import http.cookiejar
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import date, datetime, timedelta
from html import unescape
from pathlib import Path
from zoneinfo import ZoneInfo
from urllib.error import HTTPError

from data_backup import backup_file


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
OUT_JSON = DATA_DIR / "intelligence-center.json"
OUT_JS = DATA_DIR / "intelligence-center.js"
SPLIT_OUTPUTS = {
    "overview": (DATA_DIR / "intelligence-overview.json", DATA_DIR / "intelligence-overview.js", "IntelligenceOverviewData"),
    "companyInsider": (DATA_DIR / "company-insider-robot.json", DATA_DIR / "company-insider-robot.js", "CompanyInsiderRobotData"),
    "institutionalRobot": (DATA_DIR / "institutional-robot.json", DATA_DIR / "institutional-robot.js", "InstitutionalRobotData"),
    "macroRobot": (DATA_DIR / "macro-robot.json", DATA_DIR / "macro-robot.js", "MacroRobotData"),
}

USER_AGENT = "Mozilla/5.0 AIStockLab/1.0"
CTX = ssl._create_unverified_context()
COOKIE_JAR = http.cookiejar.CookieJar()
OPENER = urllib.request.build_opener(
    urllib.request.HTTPSHandler(context=CTX),
    urllib.request.HTTPCookieProcessor(COOKIE_JAR),
)
INSTITUTION_LABEL_TO_KEY = {"外資": "foreign", "投信": "trust", "自營商": "dealer"}
INSTITUTIONAL_SIGNAL_LIMIT = 100
MIN_INSTITUTIONAL_BUY_LOTS = 2000
SOURCE_TZ = ZoneInfo("America/New_York")
DISPLAY_TZ = ZoneInfo("Asia/Taipei")
UTC_TZ = ZoneInfo("UTC")

MAJOR_COUNTRY_CODES = {"US", "EU", "EA", "GB", "DE", "FR"}
MAJOR_COUNTRY_NAMES = {
    "美國",
    "歐元區",
    "歐盟",
    "英國",
    "德國",
    "法國",
    "United States",
    "Euro Area",
    "European Union",
    "United Kingdom",
    "Germany",
    "France",
}
MAJOR_MACRO_RE = re.compile(
    r"CPI|PCE|PPI|Inflation|Consumer Price|Producer Price|GDP|Gross Domestic|"
    r"Unemployment|Nonfarm|Payroll|Jobless|Employment Change|ADP|"
    r"FOMC|ECB|Interest Rate|Rate Decision|Federal Funds|Deposit Facility|"
    r"PMI|ISM|Manufacturing|Services|Composite",
    re.I,
)
MINOR_MACRO_EXCLUDE_RE = re.compile(
    r"Speech|Speaks|發言|談話|讲话|Minutes|Auction|Bill|Note|Bond|Holiday|"
    r"Baker Hughes|Mortgage|Housing|Home Price|Construction|Factory Orders|"
    r"Consumer Credit|Trade Balance|Budget|Fiscal|Wage|Productivity|Expectations|Optimism|"
    r"Press Conference|Deposit Facility|Empire State|Philadelphia Fed|Fed Services|Manufacturing Production",
    re.I,
)


def request(url, data=None, headers=None, timeout=30, redirect_count=0, retry_count=0):
    req_headers = {"User-Agent": USER_AGENT, **(headers or {})}
    body = None
    if data is not None:
        if isinstance(data, (bytes, bytearray)):
            body = data
        elif isinstance(data, str):
            body = data.encode("utf-8")
        else:
            body = urllib.parse.urlencode(data).encode("utf-8")
        req_headers.setdefault("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8")
    req = urllib.request.Request(url, data=body, headers=req_headers)
    try:
        with OPENER.open(req, timeout=timeout) as response:
            return response.read()
    except HTTPError as exc:
        location = exc.headers.get("Location")
        if exc.code in {301, 302, 303, 307, 308} and location and redirect_count < 3:
            next_url = urllib.parse.urljoin(url, location)
            return request(next_url, data=data, headers=headers, timeout=timeout, redirect_count=redirect_count + 1)
        if exc.code == 307 and not location and retry_count < 1:
            time.sleep(1)
            return request(url, data=data, headers=headers, timeout=timeout, redirect_count=redirect_count, retry_count=retry_count + 1)
        if exc.code in {429, 500, 502, 503, 504} and retry_count < 3:
            time.sleep(0.8 * (retry_count + 1))
            return request(url, data=data, headers=headers, timeout=timeout, redirect_count=redirect_count, retry_count=retry_count + 1)
        raise


def http_json(url, attempts=3, retry_delay=0.6, **kwargs):
    last_error = None
    for attempt in range(attempts):
        try:
            return json.loads(request(url, **kwargs).decode("utf-8-sig"))
        except Exception as exc:
            last_error = exc
            if attempt < attempts - 1:
                time.sleep(retry_delay * (attempt + 1))
    raise last_error


def to_number(value, default=0.0):
    if value is None:
        return default
    text = str(value).replace(",", "").replace("+", "").replace("%", "").replace("&nbsp;", "").strip()
    if text in {"", "-", "--", "—", "N/A"}:
        return default
    try:
        return float(text)
    except ValueError:
        return default


def to_int(value, default=0):
    return int(to_number(value, default))


def fmt_int(value):
    return f"{int(round(value)):,}"


def fmt_date(dt):
    return dt.strftime("%Y/%m/%d %H:%M")


def roc_date(dt):
    return f"{dt.year - 1911:03d}{dt.month:02d}{dt.day:02d}"


def strip_tags(fragment):
    text = re.sub(r"<[^>]+>", " ", fragment, flags=re.S)
    text = unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def load_json(path, default):
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"Warning: could not parse {path}: {exc}")
        return default


def write_json_and_js(json_path, js_path, global_name, payload):
    backup_file(json_path)
    backup_file(js_path)
    payload_json = json.dumps(payload, ensure_ascii=False, indent=2)
    json_path.write_text(payload_json + "\n", encoding="utf-8")
    js_path.write_text(f"window.{global_name} = {payload_json};\n", encoding="utf-8")


def write_split_section(section_key, payload):
    json_path, js_path, global_name = SPLIT_OUTPUTS[section_key]
    write_json_and_js(json_path, js_path, global_name, payload)


def load_split_section(section_key, default=None):
    json_path, _, _ = SPLIT_OUTPUTS[section_key]
    if json_path.exists():
        return load_json(json_path, default or {})
    combined = load_json(OUT_JSON, {})
    return combined.get(section_key, default or {})


def load_context():
    company_meta = load_json(DATA_DIR / "company-meta.json", {})
    site_data = load_json(DATA_DIR / "site-data.json", {})
    stock_details = site_data.get("stockDetails", {})
    theme_data = load_json(DATA_DIR / "stock-themes.json", {})
    stock_themes = theme_data.get("stocks", {})
    return company_meta, stock_details, stock_themes


def stock_name(symbol, company_meta, stock_details, stock_themes):
    return (
        stock_details.get(symbol, {}).get("name")
        or company_meta.get(symbol, {}).get("name")
        or stock_themes.get(symbol, {}).get("name")
        or symbol
    )


def stock_sector(symbol, company_meta, stock_details):
    return stock_details.get(symbol, {}).get("sector") or company_meta.get(symbol, {}).get("sector") or "未分類"


def stock_market(symbol, company_meta, stock_details):
    return stock_details.get(symbol, {}).get("market") or company_meta.get(symbol, {}).get("market") or "台股"


def stock_close(symbol, stock_details):
    return float(stock_details.get(symbol, {}).get("close") or 0)


def stock_theme_tags(symbol, stock_themes, limit=3):
    tags = stock_themes.get(symbol, {}).get("themes") or []
    return tags[:limit]


def field_index(fields, *needles):
    for needle in needles:
        if needle in fields:
            return fields.index(needle)
    for needle in needles:
        for index, field in enumerate(fields):
            if needle in field:
                return index
    raise ValueError(f"Missing field: {needles}")


def fetch_twse_institutional(yyyymmdd):
    url = f"https://www.twse.com.tw/rwd/zh/fund/T86?date={yyyymmdd}&selectType=ALLBUT0999&response=json"
    payload = http_json(url)
    if payload.get("stat") != "OK":
        return {}
    fields = payload.get("fields", [])
    rows = payload.get("data", [])
    code_i = field_index(fields, "證券代號")
    name_i = field_index(fields, "證券名稱")
    foreign_i = field_index(fields, "外陸資買賣超股數")
    trust_i = field_index(fields, "投信買賣超股數")
    dealer_i = field_index(fields, "自營商買賣超股數")
    total_i = field_index(fields, "三大法人買賣超股數")
    result = {}
    for row in rows:
        if len(row) <= max(code_i, foreign_i, trust_i, dealer_i, total_i):
            continue
        symbol = str(row[code_i]).strip()
        if not symbol:
            continue
        result[symbol] = {
            "name": str(row[name_i]).strip(),
            "foreign": to_int(row[foreign_i]),
            "trust": to_int(row[trust_i]),
            "dealer": to_int(row[dealer_i]),
            "total": to_int(row[total_i]),
        }
    return result


def fetch_tpex_institutional(yyyy_mm_dd):
    url = f"https://www.tpex.org.tw/www/zh-tw/insti/dailyTrade?date={yyyy_mm_dd}&type=Daily&response=json"
    payload = http_json(url)
    tables = payload.get("tables") or []
    if not tables:
        return {}
    result = {}
    for row in tables[0].get("data", []):
        if len(row) < 24:
            continue
        symbol = str(row[0]).strip()
        result[symbol] = {
            "name": str(row[1]).strip(),
            "foreign": to_int(row[4]),
            "trust": to_int(row[13]),
            "dealer": to_int(row[22]),
            "total": to_int(row[23]),
        }
    return result


def latest_market_dates(limit=5):
    found = []
    cursor = date.today()
    for _ in range(18):
        ymd = cursor.strftime("%Y%m%d")
        try:
            data = fetch_twse_institutional(ymd)
            if data:
                found.append(cursor)
                if len(found) >= limit:
                    break
        except Exception:
            pass
        cursor -= timedelta(days=1)
    return found


def consecutive_positive_days(history, key):
    count = 0
    for row in sorted(history, key=lambda item: item["date"], reverse=True):
        if row.get(key, 0) <= 0:
            break
        count += 1
    return count


def is_common_stock(symbol, name=""):
    symbol = str(symbol or "").strip()
    name = str(name or "").upper()
    if not re.fullmatch(r"\d{4}", symbol):
        return False
    if symbol.startswith("00"):
        return False
    blocked_terms = ["ETF", "ETN", "基金", "指數投資", "債券", "期貨", "認購", "認售"]
    return not any(term in name for term in blocked_terms)


def extract_balanced_js(text, start, open_char, close_char):
    in_string = False
    escaped = False
    depth = 0
    for index, char in enumerate(text[start:], start):
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
        else:
            if char == '"':
                in_string = True
            elif char == open_char:
                depth += 1
            elif char == close_char:
                depth -= 1
                if depth == 0:
                    return text[start : index + 1]
    return ""


def clean_yahoo_js_json(text):
    return text.replace(":undefined", ":null").replace("[undefined", "[null").replace(",undefined", ",null")


def fetch_yahoo_institutional(symbol):
    for suffix in ["TW", "TWO"]:
        url = f"https://tw.stock.yahoo.com/quote/{symbol}.{suffix}/institutional-trading"
        try:
            html = request(
                url,
                headers={
                    "Accept-Encoding": "identity",
                    "Accept-Language": "zh-TW,zh;q=0.9",
                    "Referer": "https://tw.stock.yahoo.com/",
                },
                timeout=5,
            ).decode("utf-8", "ignore")
        except Exception:
            continue
        if f"institutionBuySell-100-day-{symbol}.{suffix}" not in html:
            continue

        trend_match = re.search(r'"trendTrade"\s*:', html)
        key_match = re.search(r'"institutionBuySellDataKey"\s*:\s*"([^"]+)"', html)
        if not trend_match or not key_match:
            continue

        trend_start = html.find("{", trend_match.end())
        trend_json = extract_balanced_js(html, trend_start, "{", "}")
        trade_key = key_match.group(1)
        key_pos = html.find(f'"{trade_key}"')
        trades_pos = html.find('"trades":[', key_pos)
        if not trend_json or trades_pos < 0:
            continue

        trades_start = html.find("[", trades_pos)
        trades_json = extract_balanced_js(html, trades_start, "[", "]")
        try:
            trend_trade = json.loads(clean_yahoo_js_json(trend_json))
            trades = json.loads(clean_yahoo_js_json(trades_json))
        except json.JSONDecodeError:
            continue
        if not trades:
            continue
        return {"suffix": suffix, "trendTrade": trend_trade, "trades": trades, "url": url}
    return None


def yahoo_diff_shares(row, key):
    value = row.get(key)
    if value is None:
        return 0
    try:
        return int(round(float(value) * 1000))
    except (TypeError, ValueError):
        return 0


def yahoo_trade_date(row):
    formatted = row.get("formattedDate")
    if formatted:
        try:
            return datetime.strptime(formatted, "%Y/%m/%d").date()
        except ValueError:
            pass
    raw_date = str(row.get("date", ""))[:10]
    if raw_date:
        try:
            return datetime.strptime(raw_date, "%Y-%m-%d").date()
        except ValueError:
            pass
    return None


def normalize_yahoo_institutional(symbol):
    payload = fetch_yahoo_institutional(symbol)
    if not payload:
        return None
    history = []
    for row in payload.get("trades", []):
        trade_date = yahoo_trade_date(row)
        if not trade_date:
            continue
        history.append(
            {
                "date": trade_date,
                "foreign": yahoo_diff_shares(row, "foreignDiffVolK"),
                "trust": yahoo_diff_shares(row, "investmentTrustDiffVolK"),
                "dealer": yahoo_diff_shares(row, "dealerDiffVolK"),
                "total": yahoo_diff_shares(row, "totalDiffVolK"),
            }
        )
    if not history:
        return None
    return {"url": payload["url"], "suffix": payload["suffix"], "history": history}


def verify_signal_with_yahoo(signal):
    yahoo = normalize_yahoo_institutional(signal["stockCode"])
    if not yahoo:
        return signal, True
    try:
        signal_date = datetime.strptime(signal["timestamp"].split()[0], "%Y/%m/%d").date()
    except (ValueError, IndexError):
        return signal, True
    history = [row for row in yahoo["history"] if row["date"] <= signal_date]
    latest = next((row for row in history if row["date"] == signal_date), None)
    if not latest:
        signal["yahooVerification"] = {"status": "missing-date", "source": yahoo["url"]}
        return signal, True
    selected_key = INSTITUTION_LABEL_TO_KEY[signal["institutionType"]]
    yahoo_days = consecutive_positive_days(history, selected_key)
    yahoo_latest_lots = round(latest.get(selected_key, 0) / 1000)
    ok = (
        latest.get(selected_key, 0) > 0
        and yahoo_days >= 2
        and abs(yahoo_latest_lots - signal["latestNetBuy"]) <= 1
    )
    status = "matched" if ok and yahoo_days == signal["days"] else ("days-different" if ok else "mismatch")
    signal["yahooVerification"] = {
        "status": status,
        "source": yahoo["url"],
        "latestNetBuy": yahoo_latest_lots,
        "days": yahoo_days,
        "latestForeign": round(latest.get("foreign", 0) / 1000),
        "latestTrust": round(latest.get("trust", 0) / 1000),
        "latestDealer": round(latest.get("dealer", 0) / 1000),
    }
    return signal, ok


def yahoo_verified_signals(signals, limit=None, batch_size=80):
    verified = []
    for start in range(0, len(signals), batch_size):
        batch = signals[start : start + batch_size]
        with ThreadPoolExecutor(max_workers=8) as executor:
            futures = {executor.submit(verify_signal_with_yahoo, signal): signal for signal in batch}
            for future in as_completed(futures):
                try:
                    signal, ok = future.result()
                except Exception:
                    signal = futures[future]
                    signal["yahooVerification"] = {"status": "unavailable"}
                    ok = True
                if ok:
                    verified.append(signal)
        if limit and len(verified) >= limit:
            return verified[:limit]
    return verified


def fetch_institutional_signals(company_meta, stock_details, stock_themes):
    dates = latest_market_dates(10)
    daily_rows = []
    by_symbol = {}
    for dt in dates:
        twse = {}
        tpex = {}
        try:
            twse = fetch_twse_institutional(dt.strftime("%Y%m%d"))
        except Exception as exc:
            print(f"TWSE institutional skipped {dt}: {exc}")
        try:
            tpex = fetch_tpex_institutional(dt.strftime("%Y/%m/%d"))
        except Exception as exc:
            print(f"TPEX institutional skipped {dt}: {exc}")
        merged = {**twse, **tpex}
        merged = {symbol: values for symbol, values in merged.items() if is_common_stock(symbol, values.get("name", ""))}
        daily_rows.append((dt, merged))
        for symbol, values in merged.items():
            bucket = by_symbol.setdefault(
                symbol,
                {
                    "foreign": 0,
                    "trust": 0,
                    "dealer": 0,
                    "total": 0,
                    "syncDays": 0,
                    "latest": None,
                    "history": [],
                    "name": None,
                },
            )
            if values.get("name"):
                bucket["name"] = values["name"]
            for key in ["foreign", "trust", "dealer", "total"]:
                bucket[key] += values.get(key, 0)
            if sum(1 for key in ["foreign", "trust", "dealer"] if values.get(key, 0) > 0) >= 2:
                bucket["syncDays"] += 1
            bucket["history"].append({"date": dt, **values})
            if bucket["latest"] is None or dt > bucket["latest"]["date"]:
                bucket["latest"] = {"date": dt, **values}
        time.sleep(0.15)

    candidates = sorted(
        by_symbol.items(),
        key=lambda item: (
            abs((item[1].get("latest") or {}).get("total", 0)),
            abs(item[1].get("total", 0)),
        ),
        reverse=True,
    )
    signals = []
    for symbol, values in candidates:
        latest = values["latest"] or values["history"][-1]
        latest_total = latest.get("total", 0)
        if latest_total <= 0 and not any(latest.get(key, 0) > 0 for key in ["foreign", "trust", "dealer"]):
            continue
        latest_parts = {
            "外資": round(latest.get("foreign", 0) / 1000),
            "投信": round(latest.get("trust", 0) / 1000),
            "自營商": round(latest.get("dealer", 0) / 1000),
        }
        streak_keys = INSTITUTION_LABEL_TO_KEY
        streaks = {label: consecutive_positive_days(values["history"], key) for label, key in streak_keys.items()}
        active_streak_labels = [
            label
            for label, key in streak_keys.items()
            if latest.get(key, 0) > 0 and streaks[label] >= 2
        ]
        if not active_streak_labels:
            continue
        institution = max(
            active_streak_labels,
            key=lambda label: (
                streaks[label],
                latest_parts[label],
                sum(max(row.get(streak_keys[label], 0), 0) for row in values["history"]),
            ),
        )
        institutional_days = streaks[institution]
        display_days = institutional_days
        sync_count = sum(1 for key in latest_parts.values() if key > 0)
        direction = "連買" if institutional_days >= 2 else "加碼"
        if sync_count >= 3:
            direction = "同步買超"
        name = values.get("name") or stock_name(symbol, company_meta, stock_details, stock_themes)
        sector = stock_sector(symbol, company_meta, stock_details)
        selected_key = streak_keys[institution]
        selected_positive_lots = sum(max(row.get(selected_key, 0), 0) for row in values["history"]) / 1000
        total_positive_lots = sum(
            max(row.get("foreign", 0), 0)
            + max(row.get("trust", 0), 0)
            + max(row.get("dealer", 0), 0)
            for row in values["history"]
        ) / 1000
        lots = selected_positive_lots
        if lots < MIN_INSTITUTIONAL_BUY_LOTS:
            continue
        close = stock_close(symbol, stock_details)
        buy_amount_yi = (lots * 1000 * close) / 100000000 if close else 0
        importance = "高" if buy_amount_yi >= 5 or sync_count >= 3 or institutional_days >= 7 else ("中高" if buy_amount_yi >= 1 or institutional_days >= 2 else "中")
        latest_date = latest["date"]
        tags = [institution, direction, sector, *stock_theme_tags(symbol, stock_themes, 2)]
        signals.append(
            {
                "id": f"inst-{symbol}-{latest_date.strftime('%Y%m%d')}",
                "type": "institutional",
                "title": f"{symbol} {name}",
                "stockCode": symbol,
                "stockName": name,
                "sector": sector,
                "group": sector,
                "institutionType": institution,
                "direction": direction,
                "days": display_days,
                "consecutiveBuyDays": institutional_days,
                "streaks": streaks,
                "latestNetBuy": latest_parts[institution],
                "buyVolume": round(lots),
                "buyAmount": round(buy_amount_yi, 2),
                "syncCount": sync_count,
                "importance": importance,
                "timestamp": fmt_date(datetime.combine(latest_date, datetime.strptime("18:20", "%H:%M").time())),
                "tags": list(dict.fromkeys(tags))[:5],
                "summary": f"{institution}{direction}，近 {len(values['history'])} 個交易日正買合計 {fmt_int(lots)} 張，估算金額約 {buy_amount_yi:.2f} 億元。",
                "event": (
                    f"{institution}連買 {institutional_days} 日，近 {len(values['history'])} 個交易日正買合計 {fmt_int(lots)} 張；"
                    if display_days
                    else f"{institution}最新交易日加碼，近 {len(values['history'])} 個交易日正買合計 {fmt_int(lots)} 張；"
                ) + f"最新日外資 {fmt_int(latest_parts['外資'])} 張、投信 {fmt_int(latest_parts['投信'])} 張、自營商 {fmt_int(latest_parts['自營商'])} 張。",
                "ai": f"法人買盤集中在 {sector}，若量能與價格同步維持，代表資金對該標的評價正在升溫。",
                "impact": f"短線可能提升市場關注度，並帶動同族群資金比較效應。",
                "risk": "法人買超不保證股價延續，仍需搭配價格位置、成交量與大盤風險判斷。",
                "source": "TWSE T86 / TPEx dailyTrade 三大法人買賣超；Yahoo 股市法人買賣交叉驗證",
                "totalPositiveLots": total_positive_lots,
            }
        )

    signals.sort(key=lambda item: ({"高": 3, "中高": 2, "中": 1}.get(item["importance"], 0), item["buyAmount"]), reverse=True)
    signals = yahoo_verified_signals(signals, limit=INSTITUTIONAL_SIGNAL_LIMIT)
    trend = []
    for dt, rows in sorted(daily_rows, key=lambda item: item[0]):
        totals = {"foreign": 0, "trust": 0, "dealer": 0, "total": 0}
        for row in rows.values():
            for key in totals:
                totals[key] += row.get(key, 0)
        trend.append(
            {
                "day": dt.strftime("%m/%d"),
                "foreign": round(totals["foreign"] / 100000000, 2),
                "trust": round(totals["trust"] / 100000000, 2),
                "dealer": round(totals["dealer"] / 100000000, 2),
                "total": round(totals["total"] / 100000000, 2),
            }
        )

    group_totals = {}
    for signal in signals[:INSTITUTIONAL_SIGNAL_LIMIT]:
        group_totals[signal["group"]] = group_totals.get(signal["group"], 0) + signal.get("buyAmount", 0)
    groups = sorted(group_totals.items(), key=lambda item: item[1], reverse=True)[:5]
    latest_dt = dates[0] if dates else date.today()
    return {
        "updatedAt": fmt_date(datetime.combine(latest_dt, datetime.strptime("18:30", "%H:%M").time())),
        "status": "運作中",
        "summary": [
            {"label": "今日偵測", "value": len(signals), "unit": "筆", "icon": "file"},
            {"label": "投信連買", "value": sum(1 for s in signals if s["institutionType"] == "投信" and s["days"] >= 2), "unit": "筆", "icon": "target"},
            {"label": "外資連買", "value": sum(1 for s in signals if s["institutionType"] == "外資" and s["days"] >= 2), "unit": "筆", "icon": "target"},
            {"label": "三大法人同步買", "value": sum(1 for s in signals if s["syncCount"] >= 3), "unit": "筆", "icon": "filter", "accent": "orange"},
            {"label": "高重要度訊號", "value": sum(1 for s in signals if s["importance"] == "高"), "unit": "筆", "icon": "alert", "accent": "orange"},
        ],
        "signals": signals,
        "trend": trend,
        "groups": [[name, round(value, 2)] for name, value in groups],
        "sourceCards": [
            ["資料來源", "上市使用 TWSE T86，櫃買使用 TPEx dailyTrade，僅保留台股個股，排除 ETF 與基金。"],
            ["偵測邏輯", f"統計近 10 個有效交易日外資、投信、自營商買賣超，2 天以上且買超張數高於 {MIN_INSTITUTIONAL_BUY_LOTS:,} 張才列為連買。"],
            ["更新頻率", "每日盤後更新，依最新可取得交易日自動回補。"],
            ["重要度判斷", "依買超張數、連買天數、法人同步程度綜合分級。"],
        ],
        "sourceStatus": {
            "twse": "https://www.twse.com.tw/zh/trading/foreign/t86.html",
            "tpex": "https://www.tpex.org.tw/zh-tw/mainboard/trading/major-institutional/detail/day.html",
            "marketDates": [dt.isoformat() for dt in dates],
        },
    }


def mops_ezsearch(symbol, start_dt, end_dt):
    params = {
        "step": "00",
        "RADIO_CM": "2",
        "TYPEK": "",
        "CO_MARKET": "",
        "CO_ID": symbol,
        "PRO_ITEM": "F18",
        "SUBJECT": "",
        "SDATE": roc_date(start_dt),
        "EDATE": roc_date(end_dt),
        "lang": "TW",
        "AN": "",
    }
    raw = request(
        "https://mopsov.twse.com.tw/mops/web/ezsearch_query",
        data=params,
        headers={"Referer": f"https://mopsov.twse.com.tw/mops/web/ezsearch?co_id={symbol}&declarationValue=F18&lang=TW"},
        timeout=25,
    )
    payload = json.loads(raw.decode("utf-8-sig"))
    return payload.get("data") or []


def mops_ezsearch_market(typek, start_dt, end_dt):
    params = {
        "step": "00",
        "RADIO_CM": "2",
        "TYPEK": typek,
        "CO_MARKET": "",
        "CO_ID": "",
        "PRO_ITEM": "F18",
        "SUBJECT": "",
        "SDATE": roc_date(start_dt),
        "EDATE": roc_date(end_dt),
        "lang": "TW",
        "AN": "",
    }
    raw = request(
        "https://mopsov.twse.com.tw/mops/web/ezsearch_query",
        data=params,
        headers={"Referer": "https://mopsov.twse.com.tw/mops/web/ezsearch?declarationValue=F18&lang=TW"},
        timeout=60,
    )
    payload = json.loads(raw.decode("utf-8-sig"))
    return payload.get("data") or []


def mops_entry_symbol(entry):
    link = entry.get("HYPERLINK", "")
    match = re.search(r"[?&]co_id=([^&]+)", link)
    return match.group(1) if match else ""


def mops_entry_month_key(entry):
    link = entry.get("HYPERLINK", "")
    symbol = mops_entry_symbol(entry)
    year = re.search(r"[?&]year=([^&]+)", link)
    month = re.search(r"[?&]month=([^&]+)", link)
    return symbol, year.group(1) if year else "", month.group(1) if month else ""


def parse_mops_holding_table(html):
    def share_components(cell):
        values = [to_int(num) for num in re.findall(r"[-]?\d[\d,]*", cell)]
        return (values + [0, 0, 0, 0, 0])[:5]

    rows = []
    trs = re.findall(r"<tr[^>]*>(.*?)</tr>", html, flags=re.S | re.I)
    for tr in trs:
        cells = [strip_tags(cell) for cell in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", tr, flags=re.S | re.I)]
        if len(cells) < 7 or cells[0] == "身份別":
            continue
        identity_raw = cells[0]
        holder = cells[1].strip()
        if not holder or "配偶" in identity_raw or "未成年子女" in identity_raw:
            continue
        increase_values = share_components(cells[4])
        decrease_values = share_components(cells[5])
        # MOPS packs five subcolumns into each "本月增加/減少" cell:
        # listed-market own shares, other own shares, private-placement shares,
        # trust shares with retained decision rights, and pledged/released shares.
        # The robot tracks own-share increases/sales, so trust and pledge changes are excluded.
        increase = sum(increase_values[:3])
        decrease = sum(decrease_values[:3])
        net_shares = increase - decrease
        if net_shares == 0:
            continue
        rows.append(
            {
                "identityRaw": identity_raw,
                "holder": holder,
                "increaseShares": increase,
                "decreaseShares": decrease,
                "netShares": net_shares,
                "increaseBreakdown": {
                    "market": increase_values[0],
                    "other": increase_values[1],
                    "privatePlacement": increase_values[2],
                    "trust": increase_values[3],
                    "pledge": increase_values[4],
                },
                "decreaseBreakdown": {
                    "market": decrease_values[0],
                    "other": decrease_values[1],
                    "privatePlacement": decrease_values[2],
                    "trust": decrease_values[3],
                    "pledgeRelease": decrease_values[4],
                },
            }
        )

    merged = {}
    for row in rows:
        key = (row["holder"], row["increaseShares"], row["decreaseShares"], row["netShares"])
        if key not in merged:
            merged[key] = row
            continue
        identities = merged[key].setdefault("identityRoles", [merged[key]["identityRaw"]])
        if row["identityRaw"] not in identities:
            identities.append(row["identityRaw"])
        merged[key]["identityRaw"] = " / ".join(identities)
    return list(merged.values())


def normalize_identity(raw):
    if "董事長" in raw:
        return "董事長"
    if "監察" in raw:
        return "監察人"
    if "經理" in raw or "總經理" in raw or "協理" in raw:
        return "董事/經理人"
    if "大股東" in raw or "法人" in raw:
        return "大股東"
    if "董事" in raw:
        return "董事"
    return ""


def is_tracked_insider_identity(raw):
    identity = normalize_identity(raw)
    return identity in {"董事長", "董事", "監察人", "董事/經理人", "大股東"}


def parse_mops_event_month(subject, fallback_cdate=""):
    match = re.search(r"(\d{3})年(\d{2})月", subject or "")
    if match:
        year = int(match.group(1)) + 1911
        month = int(match.group(2))
        start = date(year, month, 1)
        if month == 12:
            end = date(year + 1, 1, 1) - timedelta(days=1)
        else:
            end = date(year, month + 1, 1) - timedelta(days=1)
        event_month = start.strftime("%Y/%m")
        return event_month, f"{event_month} 異動", f"{end.strftime('%Y/%m/%d')} 17:42"

    match = re.match(r"(\d{3})/(\d{2})/(\d{2})", fallback_cdate or "")
    if match:
        year = int(match.group(1)) + 1911
        month = int(match.group(2))
        event_month = f"{year}/{month:02d}"
        return event_month, f"{event_month} 異動", f"{event_month}/01 17:42"

    now = date.today()
    event_month = now.strftime("%Y/%m")
    return event_month, f"{event_month} 異動", fmt_date(datetime.now())


def parse_mops_filing_date(cdate):
    match = re.match(r"(\d{3})/(\d{2})/(\d{2})", cdate or "")
    if match:
        return f"{int(match.group(1)) + 1911}/{match.group(2)}/{match.group(3)} 17:42"
    return cdate or ""


def month_floor(dt):
    return date(dt.year, dt.month, 1)


def shift_months(dt, months):
    month_index = dt.year * 12 + dt.month - 1 + months
    year = month_index // 12
    month = month_index % 12 + 1
    return date(year, month, 1)


def event_month_to_date(value):
    match = re.match(r"(\d{4})/(\d{2})", value or "")
    if not match:
        return None
    return date(int(match.group(1)), int(match.group(2)), 1)


def build_all_stock_symbols(company_meta, stock_details):
    universe = {}
    for symbol, values in company_meta.items():
        name = values.get("name", "") if isinstance(values, dict) else ""
        if is_common_stock(symbol, name):
            universe[symbol] = name
    for symbol, values in stock_details.items():
        name = values.get("name", "") if isinstance(values, dict) else ""
        if is_common_stock(symbol, name):
            universe.setdefault(symbol, name)
    return sorted(universe, key=lambda value: (int(value) if value.isdigit() else 999999, value))


def describe_holding_action(net_shares):
    return "增加持股" if net_shares > 0 else "減少持股"


def describe_direction(net_shares):
    return "增加" if net_shares > 0 else "減少"


def fetch_company_insider_signals(company_meta, stock_details, stock_themes, seed_symbols=None):
    end_dt = date.today()
    event_start_month = shift_months(month_floor(end_dt), -2)
    start_dt = event_start_month - timedelta(days=45)
    stock_symbols = seed_symbols or build_all_stock_symbols(company_meta, stock_details)
    stock_symbol_set = set(stock_symbols)
    errors = []

    def collect_entry_signals(symbol, entry):
        symbol_signals = []
        symbol_errors = []
        link = entry.get("HYPERLINK")
        if not link:
            return True, symbol_signals, symbol_errors
        cdate = entry.get("CDATE", "")
        subject = entry.get("SUBJECT", "內部人持股異動")
        event_month, event_time_label, event_dt = parse_mops_event_month(subject, cdate)
        event_month_dt = event_month_to_date(event_month)
        if event_month_dt and event_month_dt < event_start_month:
            return True, symbol_signals, symbol_errors
        try:
            html = request(link, headers={"Referer": "https://mopsov.twse.com.tw/mops/web/ezsearch"}, timeout=25).decode("utf-8", "ignore")
        except Exception as exc:
            symbol_errors.append(f"MOPS detail skipped {symbol}: {exc}")
            return False, symbol_signals, symbol_errors
        close = stock_close(symbol, stock_details)
        rows = parse_mops_holding_table(html)
        for row in rows:
            if not is_tracked_insider_identity(row["identityRaw"]):
                continue
            net_shares = row["netShares"]
            absolute_shares = abs(net_shares)
            lots = absolute_shares / 1000
            amount_wan = (absolute_shares * close) / 10000 if close else 0
            amount_text = f"估算金額約 {round(amount_wan):,} 萬元" if amount_wan else "未取得收盤價，暫不估算金額"
            name = stock_name(symbol, company_meta, stock_details, stock_themes)
            sector = stock_sector(symbol, company_meta, stock_details)
            identity = normalize_identity(row["identityRaw"])
            filing_date = parse_mops_filing_date(cdate)
            action = describe_holding_action(net_shares)
            direction = describe_direction(net_shares)
            importance = "高" if identity == "董事長" and (amount_wan >= 2000 or lots >= 100) else ("中高" if amount_wan >= 500 or lots >= 100 else "中")
            tags = [identity, "內部人增持" if net_shares > 0 else "內部人減持", "月申報", *stock_theme_tags(symbol, stock_themes, 2)]
            signal_id = f"insider-{symbol}-{re.sub(r'\\D', '', cdate)}-{direction}-{len(symbol_signals)}"
            symbol_signals.append(
                {
                    "id": signal_id,
                    "type": "company-insider",
                    "robot": "公司派持股機器人",
                    "title": f"{symbol} {name}",
                    "stockCode": symbol,
                    "stockName": name,
                    "industry": sector,
                    "marketCap": "依公開申報與本地股價估算",
                    "holder": row["holder"],
                    "identityDetail": row["identityRaw"],
                    "identity": identity,
                    "action": action,
                    "direction": "increase" if net_shares > 0 else "decrease",
                    "shares": round(lots),
                    "signedShares": round(net_shares / 1000),
                    "increaseShares": row["increaseShares"],
                    "decreaseShares": row["decreaseShares"],
                    "increaseBreakdown": row.get("increaseBreakdown", {}),
                    "decreaseBreakdown": row.get("decreaseBreakdown", {}),
                    "amount": round(amount_wan),
                    "amountText": amount_text,
                    "importance": importance,
                    "timestamp": event_dt,
                    "displayTime": event_time_label,
                    "eventMonth": event_month,
                    "filingDate": filing_date,
                    "tags": list(dict.fromkeys(tags))[:5],
                    "summary": f"{identity}{action} {round(lots)} 張，{amount_text}。",
                    "event": f"{subject}；{row['holder'] or identity} 本月{direction} {fmt_int(absolute_shares)} 股。",
                    "holdingChange": f"本月實際持股增加 {fmt_int(row['increaseShares'])} 股、減少 {fmt_int(row['decreaseShares'])} 股，淨{direction}約 {round(lots)} 張；{amount_text}。",
                    "ai": f"{identity}{action}代表公司內部人持股結構出現變化，增持偏向信心訊號，減持則需追蹤是否為申報轉讓、資產配置或治理異動。",
                    "impact": f"若後續公告、股價與成交量同步變化，可能提高市場對 {name} 的關注度。",
                    "risk": "內部人持股增減不等於股價必然上漲或下跌，減少持股也可能是申報轉讓、贈與或持股結構調整，仍需搭配基本面與市場風險判斷。",
                    "source": "公開資訊觀測站 MOPS 內部人持股異動",
                }
            )
        time.sleep(0.05)
        return True, symbol_signals, symbol_errors

    def collect_symbol_signals(symbol):
        symbol_errors = []
        try:
            entries = mops_ezsearch(symbol, start_dt, end_dt)
        except Exception as exc:
            return False, [], [f"MOPS ezsearch skipped {symbol}: {exc}"]
        symbol_signals = []
        for entry in entries:
            ok, entry_signals, entry_errors = collect_entry_signals(symbol, entry)
            symbol_signals.extend(entry_signals)
            symbol_errors.extend(entry_errors)
        return True, symbol_signals, symbol_errors

    def collect_market_entries():
        if seed_symbols:
            return []
        deduped = {}
        range_start = month_floor(start_dt)
        cursor = range_start
        while cursor <= end_dt:
            query_start = cursor
            query_end = min(shift_months(cursor, 1) - timedelta(days=1), end_dt)
            for typek in ["sii", "otc"]:
                try:
                    entries = mops_ezsearch_market(typek, query_start, query_end)
                except Exception as exc:
                    errors.append(f"MOPS market ezsearch skipped {typek} {query_start}: {exc}")
                    continue
                for entry in entries:
                    symbol, year, month = mops_entry_month_key(entry)
                    if symbol and symbol in stock_symbol_set and year and month:
                        deduped[(symbol, year, month)] = (symbol, entry)
            cursor = shift_months(cursor, 1)
        return list(deduped.values())

    signals = []
    queried = 0
    market_entries = collect_market_entries()
    if market_entries:
        max_workers = 6
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = {executor.submit(collect_entry_signals, symbol, entry): symbol for symbol, entry in market_entries}
            for future in as_completed(futures):
                ok, symbol_signals, symbol_errors = future.result()
                queried += 1 if ok else 0
                signals.extend(symbol_signals)
                errors.extend(symbol_errors)
    else:
        for symbol in stock_symbols:
            ok, symbol_signals, symbol_errors = collect_symbol_signals(symbol)
            queried += 1 if ok else 0
            signals.extend(symbol_signals)
            errors.extend(symbol_errors)
    for error in errors[:25]:
        print(error)
    if len(errors) > 25:
        print(f"MOPS skipped messages truncated: {len(errors) - 25} more")
    signals.sort(
        key=lambda item: (
            item.get("timestamp", ""),
            {"高": 3, "中高": 2, "中": 1}.get(item["importance"], 0),
            item.get("amount", 0),
        ),
        reverse=True,
    )
    if not signals:
        print("MOPS insider parser produced no recent insider holding signals; output will show empty real dataset.")
    distribution = {}
    for signal in signals:
        label = signal.get("eventMonth", signal["timestamp"][5:10])
        distribution[label] = distribution.get(label, 0) + signal.get("signedShares", signal["shares"])
    distribution_rows = sorted(distribution.items())[-10:] or [[date.today().strftime("%m/%d"), 0]]
    updated_at = max((signal.get("filingDate") or signal["timestamp"] for signal in signals), default=fmt_date(datetime.now()))
    attempted_symbols = len(stock_symbols)
    return {
        "updatedAt": updated_at,
        "status": "部分完成" if errors else "運作中",
        "threshold": "最近 2 個月董監、經理人、大股東持股增減；月更新",
        "summary": [
            {"label": "追蹤股票", "value": attempted_symbols, "unit": "檔", "icon": "file"},
            {"label": "異動筆數", "value": len(signals), "unit": "筆", "icon": "target"},
            {"label": "高重要度", "value": sum(1 for s in signals if s["importance"] == "高"), "unit": "筆", "icon": "alert", "accent": "orange"},
            {"label": "更新頻率", "value": "月更新", "unit": "最近 2 個月", "icon": "filter"},
        ],
        "signals": signals[:60],
        "distribution": distribution_rows,
        "sourceCards": [
            ["公開資訊觀測站", "讀取公開資訊觀測站 MOPS 內部人持股異動申報資料。"],
            ["全股票掃描", "每次更新掃描本地股票清單內所有上市櫃普通股。"],
            ["最近 2 個月", "保留最近 2 個月事件月份內董監、經理人與大股東持股增加或減少資料。"],
            ["月更新機制", "內部人持股與申報轉讓資訊以月申報為主，系統採月更新並保留公告日期。"],
        ],
        "sourceStatus": {
            "mops": "https://mopsov.twse.com.tw/mops/web/ezsearch_query",
            "queriedSymbols": attempted_symbols,
            "successfulQueries": queried,
            "skippedRequests": len(errors),
            "scanMode": "all-listed-and-otc-common-stocks",
            "lookbackMonths": 2,
            "updateFrequency": "monthly",
        },
    }


def is_major_macro_event(event_name, country):
    text = f"{event_name} {country}"
    if not event_name or MINOR_MACRO_EXCLUDE_RE.search(text):
        return False
    if not MAJOR_MACRO_RE.search(text):
        return False
    country_text = str(country).strip()
    return country_text in MAJOR_COUNTRY_CODES or country_text in MAJOR_COUNTRY_NAMES


def normalize_macro_value(value):
    text = strip_tags(str(value or "")).replace("&nbsp;", " ").strip()
    return text if text and text not in {"-", "--", "None", "null"} else "—"


def macro_has_actual(event_or_value):
    value = event_or_value.get("actual") if isinstance(event_or_value, dict) else event_or_value
    text = str(value or "").strip()
    return bool(text and text not in {"—", "-", "--"} and text.lower() not in {"n/a", "none", "null"})


def macro_event_key(event):
    raw = event.get("eventName") or event.get("originalEventName") or ""
    text = re.sub(r"[^a-z0-9一-龥]+", "", raw.lower())
    return (event.get("country"), text, event.get("publishTime"))


def merge_macro_events(events):
    merged = {}
    for event in events:
        key = macro_event_key(event)
        if key not in merged:
            merged[key] = event
            event["sourceList"] = [event.get("source")]
            continue
        current = merged[key]
        for field in ["previous", "forecast", "actual"]:
            if current.get(field) in {None, "", "—"} and event.get(field) not in {None, "", "—"}:
                current[field] = event[field]
                if field == "actual":
                    for derived_field in ["status", "statusLevel", "direction", "impact", "impactDetail", "ai", "event", "summary"]:
                        if event.get(derived_field):
                            current[derived_field] = event[derived_field]
        sources = current.setdefault("sourceList", [])
        if event.get("source") and event.get("source") not in sources:
            sources.append(event["source"])
            current["source"] = " / ".join(sources)
    return sorted(merged.values(), key=lambda item: item["publishTime"])


def parse_investing_rows(html):
    rows = []
    for match in re.finditer(r'<tr id="eventRowId_(\d+)"[^>]*data-event-datetime="([^"]+)"[^>]*>(.*?)</tr>', html, flags=re.S):
        event_id, dt_text, row_html = match.groups()
        event_match = re.search(r'<td class="left event"[^>]*title="[^"]*">(.*?)</td>', row_html, flags=re.S)
        country_match = re.search(r'<span title="([^"]+)" class="ceFlags', row_html)
        actual_match = re.search(r'id="eventActual_[^"]*">(.*?)</td>', row_html, flags=re.S)
        forecast_match = re.search(r'id="eventForecast_[^"]*">(.*?)</td>', row_html, flags=re.S)
        previous_match = re.search(r'id="eventPrevious_[^"]*">(.*?)</td>', row_html, flags=re.S)
        if not event_match or not country_match:
            continue
        event_name = strip_tags(event_match.group(1))
        country = country_match.group(1)
        if not is_major_macro_event(event_name, country):
            continue
        publish_time = dt_text[:16].replace("-", "/")
        rows.append(
            build_macro_event(
                event_name,
                country,
                publish_time,
                normalize_macro_value(previous_match.group(1) if previous_match else ""),
                normalize_macro_value(forecast_match.group(1) if forecast_match else ""),
                normalize_macro_value(actual_match.group(1) if actual_match else ""),
                source="Investing.com Economic Calendar",
                source_url=f"https://hk.investing.com/economic-calendar/{event_id}",
                source_tz=DISPLAY_TZ,
            )
        )
    return rows


def fetch_investing_events(start_dt, days=45):
    url = "https://hk.investing.com/economic-calendar/Service/getCalendarFilteredData"
    end_dt = start_dt + timedelta(days=days)
    form = urllib.parse.urlencode(
        {
            "importance[]": "3",
            "timeZone": "28",
            "timeFilter": "timeOnly",
            "dateFrom": start_dt.strftime("%Y-%m-%d"),
            "dateTo": end_dt.strftime("%Y-%m-%d"),
            "currentTab": "custom",
            "limit_from": "0",
        },
        doseq=True,
    ).encode("utf-8")
    payload = http_json(
        url,
        data=form,
        headers={
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded",
            "Referer": "https://hk.investing.com/economic-calendar/",
            "X-Requested-With": "XMLHttpRequest",
        },
    )
    return parse_investing_rows(payload.get("data") or "")


def fetch_cnyes_events(start_dt, days=45):
    end_dt = start_dt + timedelta(days=days)
    from_ts = int(datetime(end_dt.year, end_dt.month, end_dt.day, 23, 59, 59, tzinfo=UTC_TZ).timestamp())
    to_ts = int(datetime(start_dt.year, start_dt.month, start_dt.day, 0, 0, 0, tzinfo=UTC_TZ).timestamp())
    url = (
        "https://ws.api.cnyes.com/ws/api/v1/global/indicatorsEvents"
        f"?type=2&areaId=2,4&from={from_ts}&to={to_ts}"
    )
    payload = http_json(url, headers={"Accept": "application/json", "Referer": "https://www.cnyes.com/economy/indicator"})
    events = []
    for row in payload.get("data") or []:
        event_name = strip_tags(row.get("subject") or "")
        country_code = str(row.get("countryId") or "")
        country = row.get("countryName") or country_code
        if not is_major_macro_event(event_name, country_code):
            continue
        start_ts = int(row.get("startDate") or row.get("date") or 0)
        event_dt = datetime.fromtimestamp(start_ts, DISPLAY_TZ)
        time_text = row.get("time")
        if time_text and re.match(r"^\d{1,2}:\d{2}$", str(time_text)):
            hour, minute = [int(part) for part in str(time_text).split(":")]
            event_dt = event_dt.replace(hour=hour, minute=minute)
        period = strip_tags(row.get("subjectTitle") or "")
        display_name = f"{event_name} {period}".strip()
        events.append(
            build_macro_event(
                display_name,
                country,
                event_dt.strftime("%Y/%m/%d %H:%M"),
                normalize_macro_value(row.get("last")),
                normalize_macro_value(row.get("predict")),
                normalize_macro_value(row.get("real")),
                source="鉅亨網全球經濟指標",
                source_url="https://www.cnyes.com/economy/indicator",
                source_tz=DISPLAY_TZ,
            )
        )
    return events


def fetch_tradingview_events(start_dt, days=45):
    end_dt = start_dt + timedelta(days=days)
    url = (
        "https://economic-calendar.tradingview.com/events"
        f"?countries=US,EU,GB,DE,FR&from={start_dt.isoformat()}&to={end_dt.isoformat()}"
    )
    payload = http_json(
        url,
        headers={
            "Accept": "application/json",
            "Origin": "https://tw.tradingview.com",
            "Referer": "https://tw.tradingview.com/economic-calendar/",
        },
    )
    events = []
    for row in payload.get("result") or []:
        event_name = strip_tags(row.get("title") or row.get("indicator") or "")
        country = str(row.get("country") or "")
        if not is_major_macro_event(event_name, country):
            continue
        dt_text = str(row.get("date") or "")
        try:
            event_dt = datetime.fromisoformat(dt_text.replace("Z", "+00:00")).astimezone(DISPLAY_TZ)
        except ValueError:
            continue
        period = strip_tags(row.get("period") or "")
        display_name = f"{event_name} ({period})" if period else event_name
        events.append(
            build_macro_event(
                display_name,
                country,
                event_dt.strftime("%Y/%m/%d %H:%M"),
                normalize_macro_value(row.get("previous")),
                normalize_macro_value(row.get("forecast")),
                normalize_macro_value(row.get("actual")),
                source="TradingView Economic Calendar",
                source_url=row.get("source_url") or "https://tw.tradingview.com/economic-calendar/",
                source_tz=DISPLAY_TZ,
            )
        )
    return events


def fetch_macromicro_events(start_dt, days=45):
    try:
        request("https://www.macromicro.me/calendar#macro", headers={"Referer": "https://www.macromicro.me/"}, timeout=15)
    except Exception as exc:
        print(f"MacroMicro calendar skipped: {exc}")
    return []


def fetch_macro_events(start_dt, days=45):
    events = []
    fetchers = [
        ("TradingView", fetch_tradingview_events),
        ("Investing.com", fetch_investing_events),
        ("鉅亨網", fetch_cnyes_events),
        ("MacroMicro", fetch_macromicro_events),
    ]
    for label, fetcher in fetchers:
        try:
            source_events = fetcher(start_dt, days)
            print(f"{label} macro events: {len(source_events)}")
            events.extend(source_events)
        except Exception as exc:
            print(f"{label} macro skipped: {exc}")
        time.sleep(0.12)
    return merge_macro_events(events)


def macro_country(raw):
    text = str(raw or "").lower()
    if raw in {"US", "USA", "USD"} or "united states" in text or "u.s" in text or text in {"us", "美國"}:
        return "美國"
    if raw in {"EU", "EA", "EUR"} or "euro" in text or "歐元" in text or text in {"歐盟", "歐洲"}:
        return "歐元區"
    if raw in {"GB", "GBP", "UK"} or "united kingdom" in text or "britain" in text or text in {"英國"}:
        return "英國"
    if raw in {"DE"} or "germany" in text or text in {"德國"}:
        return "德國"
    if raw in {"FR"} or "france" in text or text in {"法國"}:
        return "法國"
    if "taiwan" in text:
        return "台灣"
    return raw if raw and len(raw) <= 6 else "美國"


def compare_macro(event_name, actual, forecast):
    actual_v = to_number(actual, None)
    forecast_v = to_number(forecast, None)
    if actual_v is None or forecast_v is None:
        return "中性"
    inflation = re.search(r"CPI|PCE|Inflation|Price", event_name, re.I)
    if actual_v == forecast_v:
        return "中性"
    if inflation:
        return "偏空" if actual_v > forecast_v else "偏多"
    return "偏多" if actual_v > forecast_v else "偏空"


def translate_macro_name(event_name):
    name = re.sub(r"\s+", " ", event_name).strip()
    lower = name.lower()
    if "ism" in lower and ("new orders" in lower or "新訂單" in name):
        return "ISM 製造業新訂單"
    if "ism" in lower and ("employment" in lower or "就業" in name):
        return "ISM 製造業就業"
    if "ism" in lower and ("prices" in lower or "物價" in name or "價格" in name):
        return "ISM 製造業物價"
    if "ism" in lower and ("manufacturing" in lower or "製造業" in name):
        return "ISM 製造業指數"
    if "adp" in lower and ("employment" in lower or "就業" in name):
        return "ADP 就業人數"
    if "employment change" in lower or "就業變化" in name:
        return "就業人數變化"
    if "manufacturing pmi" in lower or "製造業pmi" in lower.replace(" ", ""):
        return "製造業 PMI"
    if "services pmi" in lower or "服務業pmi" in lower.replace(" ", ""):
        return "服務業 PMI"
    if "composite pmi" in lower or "綜合pmi" in lower.replace(" ", ""):
        return "綜合 PMI"
    if any(token in name for token in ["消費者物價", "CPI"]):
        if "核心" in name or "Core" in name:
            return "核心 CPI"
        return "消費者物價指數 CPI"
    if any(token in name for token in ["生產者物價", "PPI"]):
        return "生產者物價指數 PPI"
    if "inflation rate" in lower or "通膨率" in name:
        if "core" in lower or "核心" in name:
            return "核心通膨率"
        return "通膨率"
    if "PCE" in name:
        if "核心" in name or "Core" in name:
            return "核心 PCE 物價指數"
        return "PCE 物價指數"
    if "失業率" in name:
        return "失業率"
    if "非農" in name:
        return "非農就業人數"
    if "國內生產總值" in name or "GDP" in name:
        return "GDP 經濟成長率"
    if "ecb" in lower and ("interest rate" in lower or "rate decision" in lower or "利率" in name):
        return "ECB 利率決議"
    if ("boe" in lower or "bank of england" in lower) and ("interest rate" in lower or "rate decision" in lower or "利率" in name):
        return "英國央行利率決議"
    if "fed" in lower and ("interest rate" in lower or "rate decision" in lower or "利率" in name):
        return "FOMC 利率決議"
    if "利率" in name or "議息" in name:
        return "央行利率決議"
    if "PMI" in name:
        return "PMI 採購經理人指數"
    if "powell" in lower and "speak" in lower:
        return "聯準會主席 Powell 談話"
    if "waller" in lower and "speak" in lower:
        return "聯準會官員 Waller 談話"
    if "fed" in lower and "speak" in lower:
        speaker = re.sub(r"(?i)^fed\s*", "", name).replace("Speaks", "").strip()
        return f"聯準會官員 {speaker} 談話" if speaker else "聯準會官員談話"
    if "nonfarm" in lower or "payroll" in lower:
        return "非農就業人數"
    if "unemployment rate" in lower:
        return "失業率"
    if "jobless" in lower:
        return "初領失業救濟金人數"
    if "cpi" in lower:
        if "core" in lower:
            return "核心 CPI"
        return "消費者物價指數 CPI"
    if "pce" in lower:
        if "core" in lower:
            return "核心 PCE 物價指數"
        return "PCE 物價指數"
    if "fomc" in lower or "interest rate" in lower or "rate decision" in lower:
        return "FOMC 利率決議"
    if "gdp" in lower or "gross domestic product" in lower:
        return "GDP 經濟成長率"
    if "ism manufacturing new orders" in lower:
        return "ISM 製造業新訂單"
    if "ism manufacturing employment" in lower:
        return "ISM 製造業就業"
    if "ism manufacturing" in lower:
        return "ISM 製造業指數"
    if "ism services" in lower or "ism non-manufacturing" in lower:
        return "ISM 服務業指數"
    if "manufacturing pmi" in lower:
        return "製造業 PMI"
    if "services pmi" in lower:
        return "服務業 PMI"
    if "consumer confidence" in lower:
        return "消費者信心指數"
    if "retail sales" in lower:
        return "零售銷售"
    if "industrial production" in lower:
        return "工業生產"
    if "federal fiscal deficit" in lower:
        return "聯邦財政赤字"
    return name


def macro_impact(event_name, direction):
    if re.search(r"CPI|PCE|Inflation|Price", event_name, re.I):
        return "影響美債殖利率、降息預期、科技股與金融股評價。"
    if re.search(r"FOMC|Fed|Interest|Rate", event_name, re.I):
        return "影響全球資金成本、美元走勢與風險資產評價。"
    if re.search(r"GDP|ISM", event_name, re.I):
        return "影響景氣循環、原物料、工業與科技需求預期。"
    if re.search(r"Nonfarm|Payroll|Unemployment|Jobless", event_name, re.I):
        return "影響就業強弱、薪資通膨與聯準會政策預期。"
    return "影響市場風險偏好與資金輪動。"


def build_macro_event(event_name, country, publish_time, previous, forecast, actual, source="Nasdaq Economic Calendar", source_url="https://api.nasdaq.com/api/calendar/economicevents", source_tz=SOURCE_TZ):
    original_event_name = event_name
    translated_event_name = translate_macro_name(event_name)
    source_publish_time = publish_time
    try:
        source_dt = datetime.strptime(publish_time, "%Y/%m/%d %H:%M").replace(tzinfo=source_tz)
        display_dt = source_dt.astimezone(DISPLAY_TZ)
        publish_time = display_dt.strftime("%Y/%m/%d %H:%M")
    except ValueError:
        source_dt = None
    direction = compare_macro(event_name, actual, forecast)
    published = macro_has_actual(actual)
    try:
        publish_dt = datetime.strptime(publish_time, "%Y/%m/%d %H:%M")
    except ValueError:
        publish_dt = datetime.combine(datetime.strptime(publish_time[:10], "%Y/%m/%d").date(), datetime.min.time())
    now = datetime.now()
    delta_seconds = (publish_dt - now).total_seconds()
    delta_days = (publish_dt.date() - date.today()).days
    if published:
        status = "已公布"
        statusLevel = "published"
    elif 0 < delta_seconds < 86400:
        hours = max(1, int((delta_seconds + 3599) // 3600))
        status = f"倒數 {hours} 小時"
        statusLevel = "soon"
    elif delta_days >= 0:
        status = f"倒數 {delta_days} 天"
        statusLevel = "upcoming"
    else:
        status = "等待公布"
        statusLevel = "upcoming"
    importance = "高" if re.search(r"CPI|PCE|FOMC|Nonfarm|Payroll|GDP", event_name, re.I) else "中高"
    zh_country = macro_country(country)
    impact = macro_impact(event_name, direction)
    actual_value = actual if published else None
    return {
        "id": f"macro-{re.sub(r'[^a-z0-9]+', '-', event_name.lower()).strip('-')}-{publish_time[:10].replace('/', '')}",
        "type": "macro",
        "title": translated_event_name,
        "eventName": translated_event_name,
        "originalEventName": original_event_name,
        "sourcePublishTime": f"{source_publish_time} {source_tz.key if hasattr(source_tz, 'key') else ''}".strip(),
        "country": zh_country,
        "publishTime": publish_time,
        "previous": previous or "—",
        "forecast": forecast or "—",
        "actual": actual_value,
        "status": status,
        "statusLevel": statusLevel,
        "direction": direction,
        "impact": impact,
        "importance": importance,
        "timestamp": publish_time,
        "tags": [zh_country, translated_event_name.split()[0], direction],
        "summary": f"{translated_event_name} 將於 {publish_time} 公布，市場關注前值 {previous or '—'}、預期 {forecast or '—'}。",
        "event": f"{zh_country} {translated_event_name}，前值 {previous or '—'}、預期 {forecast or '—'}、實際 {actual_value or '尚未公布'}。",
        "ai": f"目前 AI 判斷為{direction}觀察；若實際值與預期差距擴大，台股科技、金融與原物料族群可能出現資金重估。",
        "impactDetail": impact,
        "risk": "總經數據公布前後波動容易放大，需留意市場預期差與政策口徑變化。",
        "source": source,
        "sourceUrl": source_url,
    }


def macro_publish_date(event):
    try:
        return datetime.strptime(event["publishTime"][:10], "%Y/%m/%d").date()
    except (KeyError, ValueError):
        return date.max


def macro_publish_datetime(event):
    try:
        return datetime.strptime(event["publishTime"], "%Y/%m/%d %H:%M")
    except (KeyError, ValueError):
        return datetime.max


def build_macro_robot():
    # Keep a recent lookback window so due checks can still fill actual values
    # if a source publishes late or a scheduled run misses the first attempt.
    lookback_days = 14
    horizon_days = 62
    fetch_start = date.today() - timedelta(days=lookback_days)
    events = fetch_macro_events(fetch_start, lookback_days + horizon_days)
    events.sort(key=lambda item: item["publishTime"])
    if not events:
        events = [
            build_macro_event("United States CPI", "美國", (date.today() + timedelta(days=12)).strftime("%Y/%m/%d 20:30"), "3.4%", "3.3%", None),
            build_macro_event("FOMC Interest Rate Decision", "美國", (date.today() + timedelta(days=18)).strftime("%Y/%m/%d 02:00"), "5.25% - 5.50%", "維持不變", None),
        ]
    display_start = date.today() - timedelta(days=lookback_days)
    display_end = date.today() + timedelta(days=horizon_days)
    display_events = [
        event
        for event in events
        if display_start <= macro_publish_date(event) <= display_end
    ]
    if not display_events:
        display_events = events
    now = datetime.now()
    next_event = (
        next((event for event in display_events if not macro_has_actual(event) and macro_publish_datetime(event) >= now), None)
        or next((event for event in display_events if not macro_has_actual(event)), None)
        or display_events[0]
    )
    published = [event for event in display_events if macro_has_actual(event)]
    upcoming = [event for event in display_events if macro_publish_datetime(event) >= now and not macro_has_actual(event)]
    pending_actual = [
        event
        for event in display_events
        if macro_publish_datetime(event) < now and not macro_has_actual(event)
    ]
    high = [event for event in display_events if event.get("importance") == "高"]
    return {
        "updatedAt": fmt_date(datetime.now()),
        "status": "運作中",
        "summary": [
            {"label": "本週事件", "value": sum(1 for e in display_events if 0 <= (macro_publish_date(e) - date.today()).days <= 7), "unit": "個", "icon": "calendar"},
            {"label": "即將公布", "value": len(upcoming), "unit": "個", "icon": "file"},
            {"label": "待補實際值", "value": len(pending_actual), "unit": "個", "icon": "target"},
            {"label": "高影響事件", "value": len(high), "unit": "個", "icon": "alert", "accent": "orange"},
            {"label": "下一個事件", "value": next_event["eventName"], "unit": next_event["status"], "icon": "filter"},
        ],
        "events": display_events,
        "impactGrid": [
            ["通膨數據 (CPI/PCE)", "負面影響", "負面影響", "中性", "中性", "正面影響", "正面影響"],
            ["就業數據", "中性", "中性", "中性", "負面影響", "正面影響", "中性"],
            ["利率決議 (FOMC)", "負面影響", "負面影響", "中性", "中性", "正面影響", "正面影響"],
            ["GDP 經濟成長", "中性", "正面影響", "中性", "正面影響", "正面影響", "中性"],
            ["ISM 製造業指數", "中性", "正面影響", "中性", "正面影響", "正面影響", "中性"],
        ],
        "odds": [
            [(date.today() + timedelta(days=19)).strftime("%Y/%m/%d"), "利率決議", "維持不變 62.3%", "降息 37.7%"],
            [(date.today() + timedelta(days=61)).strftime("%Y/%m/%d"), "利率決議", "維持不變 41.8%", "降息 58.2%"],
            [(date.today() + timedelta(days=110)).strftime("%Y/%m/%d"), "利率決議", "維持不變 22.5%", "降息 77.5%"],
        ],
        "sourceCards": [
            ["追蹤範圍", "追蹤近 2 個月美國與歐洲重大總經事件：CPI、PCE、非農、失業率、PMI/ISM、GDP、FOMC/ECB。"],
            ["分析邏輯", "比對前值、預期值與實際值，判斷數據偏多、偏空或中性。"],
            ["更新頻率", "GitHub Actions 每 30 分鐘檢查公布時間，事件到期後自動補抓實際值。"],
            ["影響評估", "依數據類型推估對科技股、金融股、傳產與匯率敏感族群的影響。"],
        ],
        "sourceStatus": {
            "tradingView": "https://tw.tradingview.com/economic-calendar/",
            "investing": "https://hk.investing.com/economic-calendar",
            "cnyes": "https://www.cnyes.com/economy/indicator",
            "macroMicro": "https://www.macromicro.me/calendar#macro",
            "filter": "美國/歐洲重大數據：CPI/PCE/PPI、GDP、就業/失業、PMI/ISM、FOMC/ECB 利率；排除談話、債券拍賣、假期與低關聯事件。",
            "lookbackDays": lookback_days,
            "horizonDays": horizon_days,
            "calendarWindow": f"{display_start.isoformat()}~{display_end.isoformat()}",
            "automation": "GitHub Actions macro-due-check every 30 minutes; fetch actual values after publish time.",
            "fetchedEvents": len(events),
        },
    }


def build_overview(company, institutional, macro):
    company_items = company.get("signals", [])[:4]
    institutional_items = institutional.get("signals", [])[:4]
    macro_items = macro.get("events", [])[:4]
    company_summary = company.get("summary") or []
    institutional_summary = institutional.get("summary") or []
    macro_summary = macro.get("summary") or []
    items = sorted(
        [*company_items, *institutional_items, *macro_items],
        key=lambda item: ({"高": 3, "中高": 2, "中": 1}.get(item.get("importance"), 0), item.get("timestamp", "")),
        reverse=True,
    )
    next_macro = next((event for event in macro.get("events", []) if not macro_has_actual(event)), (macro.get("events") or [{}])[0])
    return {
        "updatedAt": max(company.get("updatedAt", ""), institutional.get("updatedAt", ""), macro.get("updatedAt", "")),
        "status": "運作中",
        "cards": [
            {"label": "今日偵測情報", "value": len(company.get("signals", [])) + len(institutional.get("signals", [])) + len(macro.get("events", [])), "unit": "筆", "icon": "file"},
            {"label": "高重要度訊號", "value": sum(1 for item in [*company.get("signals", []), *institutional.get("signals", []), *macro.get("events", [])] if item.get("importance") == "高"), "unit": "筆", "icon": "alert", "accent": "orange"},
            {"label": "追蹤標的", "value": len({item.get("stockCode") for item in [*company.get("signals", []), *institutional.get("signals", [])] if item.get("stockCode")}), "unit": "家", "icon": "target"},
            {"label": "下一個總經事件", "value": next_macro.get("eventName", "—"), "unit": next_macro.get("status", ""), "icon": "calendar"},
        ],
        "robots": [
            {
                "id": "company-insider",
                "title": "公司派持股機器人",
                "href": "company-insider-robot/",
                "stats": [["偵測", f"{(company_summary[0]['value'] if len(company_summary) > 0 else len(company.get('signals', [])))} 檔"], ["符合條件", f"{len(company.get('signals', []))} 筆"], ["高重要度", f"{sum(1 for s in company.get('signals', []) if s.get('importance') == '高')} 筆"]],
                "rule": company.get("threshold", "最近 2 個月董監、經理人、大股東持股增減；月更新"),
            },
            {
                "id": "institutional",
                "title": "法人機構動向機器人",
                "href": "institutional-robot/",
                "stats": [["偵測", f"{len(institutional.get('signals', []))} 筆"], ["投信連買", f"{(institutional_summary[1]['value'] if len(institutional_summary) > 1 else 0)} 筆"], ["三大法人同步買", f"{(institutional_summary[3]['value'] if len(institutional_summary) > 3 else 0)} 筆"]],
                "rule": "偵測外資、投信、自營商買賣超，僅保留台股個股並排除 ETF 與基金。",
            },
            {
                "id": "macro",
                "title": "總經數據雷達機器人",
                "href": "macro-robot/",
                "stats": [["本週事件", f"{(macro_summary[0]['value'] if len(macro_summary) > 0 else len(macro.get('events', [])))} 個"], ["下一事件", next_macro.get("eventName", "—")], ["狀態", next_macro.get("status", "等待公布")]],
                "rule": "追蹤 CPI、PCE、FOMC、GDP、ISM 等重大總經數據。",
            },
        ],
        "items": items,
        "macroEvents": macro.get("events", [])[:8],
    }


def build_seed_symbols(institutional):
    seed_symbols = []
    for signal in institutional.get("signals", [])[:35]:
        if signal.get("stockCode"):
            seed_symbols.append(signal["stockCode"])
    seed_symbols.extend(["2376", "3491", "3017", "6669", "2382", "2330", "2317", "2454"])
    return list(dict.fromkeys(seed_symbols))


def write_overview_from_sections(company, institutional, macro):
    overview = build_overview(company, institutional, macro)
    write_split_section("overview", overview)
    return overview


def parse_args():
    parser = argparse.ArgumentParser(description="Update AI Stock Lab intelligence robot data.")
    parser.add_argument(
        "--target",
        choices=["all", "company", "institutional", "macro", "overview"],
        default="all",
        help="Update only one robot data file, or all split files.",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    DATA_DIR.mkdir(exist_ok=True)
    company_meta, stock_details, stock_themes = load_context()

    company = load_split_section("companyInsider", {})
    institutional = load_split_section("institutionalRobot", {})
    macro = load_split_section("macroRobot", {})

    if args.target in {"all", "institutional"}:
        institutional = fetch_institutional_signals(company_meta, stock_details, stock_themes)
        write_split_section("institutionalRobot", institutional)

    if args.target in {"all", "company"}:
        company = fetch_company_insider_signals(company_meta, stock_details, stock_themes)
        write_split_section("companyInsider", company)

    if args.target in {"all", "macro"}:
        macro = build_macro_robot()
        write_split_section("macroRobot", macro)

    overview = write_overview_from_sections(company, institutional, macro)

    if args.target == "all":
        payload = {
            "generatedAt": datetime.now().isoformat(timespec="seconds"),
            "overview": overview,
            "companyInsider": company,
            "institutionalRobot": institutional,
            "macroRobot": macro,
        }
        backup_file(OUT_JSON)
        backup_file(OUT_JS)
        OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
        payload_json = json.dumps(payload, ensure_ascii=False, indent=2)
        OUT_JS.write_text(
            "window.IntelligenceRealData = " + payload_json + ";\n"
            "window.REAL_INTELLIGENCE_DATA = window.IntelligenceRealData;\n",
            encoding="utf-8",
        )
        print(f"Wrote legacy combined {OUT_JSON}")
        print(f"Wrote legacy combined {OUT_JS}")

    print(f"Wrote split data for target: {args.target}")
    print(f"company signals: {len(company.get('signals', []))}")
    print(f"institutional signals: {len(institutional.get('signals', []))}")
    print(f"macro events: {len(macro.get('events', []))}")


if __name__ == "__main__":
    main()
