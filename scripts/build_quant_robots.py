import csv
import json
import math
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CANDIDATES = ROOT / "data" / "candidates.json"
HISTORY = ROOT / "data" / "history"
OUT = ROOT / "data" / "quant-robots.json"


ROBOTS = [
    {
        "id": "ma-breakout",
        "name": "均線突破機器人",
        "short": "MA20 突破 + 放量確認",
        "desc": "站上短中期均線且量能放大，尋找趨勢初段的隔日買點。",
        "params": "MA20 > MA60 + 量能 1.2x",
        "holdDays": 5,
    },
    {
        "id": "rsi-rebound",
        "name": "RSI 反彈機器人",
        "short": "超賣修復 + 站回短均線",
        "desc": "尋找短線超賣後重新站回均線的修復型交易。",
        "params": "RSI14 < 42 後轉強",
        "holdDays": 5,
    },
    {
        "id": "macd-momentum",
        "name": "MACD 動能機器人",
        "short": "MACD 翻正 + 動能擴張",
        "desc": "追蹤動能由弱轉強的標的，偏向波段初升段。",
        "params": "MACD histogram > 0",
        "holdDays": 5,
    },
    {
        "id": "volume-surge",
        "name": "量價爆發機器人",
        "short": "爆量長紅 + 強勢突破",
        "desc": "專注量價同步放大的強勢股，並控管追高風險。",
        "params": "量能 1.8x + 收紅",
        "holdDays": 3,
    },
    {
        "id": "bollinger-reversal",
        "name": "布林反轉機器人",
        "short": "波動壓縮 + 下軌修復",
        "desc": "從波動過度擴張後的收斂位置尋找反轉交易。",
        "params": "接近布林下緣後收復",
        "holdDays": 5,
    },
    {
        "id": "chip-follow",
        "name": "籌碼跟隨機器人",
        "short": "法人買超 + 融資風險低",
        "desc": "追蹤籌碼連續改善、股價尚未完全反映的標的。",
        "params": "法人 5 日買超",
        "holdDays": 5,
    },
    {
        "id": "day-swing",
        "name": "隔日沖機器人",
        "short": "短線強勢 + 隔日出場",
        "desc": "偏短週期策略，重視進場流動性與隔日賣壓風險。",
        "params": "高分 + 高量能",
        "holdDays": 1,
    },
    {
        "id": "trend-swing",
        "name": "波段趨勢機器人",
        "short": "多頭排列 + 回調不破",
        "desc": "持有週期較長，使用趨勢續航與回撤控管篩選標的。",
        "params": "MA 多頭 + 低回撤",
        "holdDays": 10,
    },
]


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def safe_float(value, default=0.0):
    try:
        number = float(value)
        if math.isfinite(number):
            return number
    except (TypeError, ValueError):
        pass
    return default


def safe_int(value, default=0):
    try:
        return int(float(value))
    except (TypeError, ValueError):
        return default


def moving_average(values, window, index):
    if index + 1 < window:
        return None
    window_values = values[index + 1 - window : index + 1]
    return sum(window_values) / window


def stdev(values):
    if not values:
        return 0.0
    mean = sum(values) / len(values)
    variance = sum((value - mean) ** 2 for value in values) / len(values)
    return math.sqrt(variance)


def rsi(values, period, index):
    if index < period:
        return None
    gains = []
    losses = []
    for i in range(index - period + 1, index + 1):
        diff = values[i] - values[i - 1]
        gains.append(max(diff, 0))
        losses.append(abs(min(diff, 0)))
    avg_gain = sum(gains) / period
    avg_loss = sum(losses) / period
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return 100 - (100 / (1 + rs))


def ema_series(values, period):
    if not values:
        return []
    alpha = 2 / (period + 1)
    result = [values[0]]
    for value in values[1:]:
        result.append(value * alpha + result[-1] * (1 - alpha))
    return result


def load_history(symbol):
    candidates = [
        HISTORY / "twse" / "adjusted" / f"{symbol}.csv",
        HISTORY / "tpex" / "adjusted" / f"{symbol}.csv",
    ]
    path = next((item for item in candidates if item.exists()), None)
    if not path:
        return []

    rows = []
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            close = safe_float(row.get("adj_close"))
            if close <= 0:
                continue
            rows.append(
                {
                    "date": row.get("date") or "",
                    "open": safe_float(row.get("adj_open"), close),
                    "high": safe_float(row.get("adj_high"), close),
                    "low": safe_float(row.get("adj_low"), close),
                    "close": close,
                    "volume": safe_float(row.get("volume")),
                }
            )
    return rows


def enrich_history(rows):
    closes = [row["close"] for row in rows]
    volumes = [row["volume"] for row in rows]
    ema12 = ema_series(closes, 12)
    ema26 = ema_series(closes, 26)
    macd = [fast - slow for fast, slow in zip(ema12, ema26)]
    signal = ema_series(macd, 9)

    for index, row in enumerate(rows):
        row["ma5"] = moving_average(closes, 5, index)
        row["ma20"] = moving_average(closes, 20, index)
        row["ma60"] = moving_average(closes, 60, index)
        row["volume20"] = moving_average(volumes, 20, index)
        row["rsi14"] = rsi(closes, 14, index)
        row["macdHist"] = macd[index] - signal[index]
        if index >= 20:
            band_values = closes[index - 19 : index + 1]
            mid = sum(band_values) / len(band_values)
            spread = stdev(band_values) * 2
            row["bbLower"] = mid - spread
            row["bbUpper"] = mid + spread
        else:
            row["bbLower"] = None
            row["bbUpper"] = None
    return rows


def signal_for(robot_id, rows, index):
    row = rows[index]
    prev = rows[index - 1] if index > 0 else row
    ma20 = row.get("ma20")
    ma60 = row.get("ma60")
    ma5 = row.get("ma5")
    volume20 = row.get("volume20") or 0
    volume_ratio = row["volume"] / volume20 if volume20 else 0
    day_return = row["close"] / row["open"] - 1 if row["open"] else 0
    rsi14 = row.get("rsi14")
    prev_rsi = prev.get("rsi14")
    macd_hist = row.get("macdHist") or 0
    prev_macd_hist = prev.get("macdHist") or 0

    if robot_id == "ma-breakout":
        return bool(ma20 and ma60 and row["close"] > ma20 > ma60 and volume_ratio >= 1.2)
    if robot_id == "rsi-rebound":
        return bool(rsi14 and prev_rsi and prev_rsi < 42 and rsi14 > prev_rsi and ma5 and row["close"] > ma5)
    if robot_id == "macd-momentum":
        return bool(macd_hist > 0 and macd_hist > prev_macd_hist)
    if robot_id == "volume-surge":
        return bool(volume_ratio >= 1.8 and day_return > 0.01)
    if robot_id == "bollinger-reversal":
        return bool(row.get("bbLower") and prev["close"] <= (prev.get("bbLower") or prev["close"]) and row["close"] > row["open"])
    if robot_id == "day-swing":
        return bool(volume_ratio >= 1.5 and day_return > 0.015)
    if robot_id == "trend-swing":
        return bool(ma20 and ma60 and row["close"] > ma20 > ma60 and volume_ratio < 1.8)
    return False


def trade_returns(robot, histories):
    returns = []
    hold_days = robot["holdDays"]
    for rows in histories.values():
        if len(rows) < 90 + hold_days:
            continue
        start = max(61, len(rows) - 252)
        end = len(rows) - hold_days
        index = start
        while index < end:
            if not signal_for(robot["id"], rows, index):
                index += 1
                continue
            entry = rows[index]["close"]
            exit_price = rows[index + hold_days]["close"]
            if entry:
                returns.append(exit_price / entry - 1)
            index += hold_days
    return returns


def max_drawdown_from_returns(returns):
    equity = 1.0
    peak = 1.0
    max_dd = 0.0
    for value in returns:
        equity *= 1 + value
        peak = max(peak, equity)
        if peak:
            max_dd = min(max_dd, equity / peak - 1)
    return max_dd


def robot_stats(robot, histories):
    returns = trade_returns(robot, histories)
    wins = [value for value in returns if value > 0]
    losses = [value for value in returns if value <= 0]
    win_rate = (len(wins) / len(returns) * 100) if returns else 0
    gross_win = sum(wins)
    gross_loss = abs(sum(losses))
    profit_factor = gross_win / gross_loss if gross_loss else (gross_win if gross_win else 0)
    avg_return = sum(returns) / len(returns) if returns else 0
    max_dd = max_drawdown_from_returns(returns)
    return {
        **robot,
        "status": "市場資料回測完成" if returns else "訊號不足",
        "version": f"market-{datetime.now(timezone.utc).strftime('%Y%m%d')}",
        "winRate": round(win_rate, 1),
        "profitFactor": round(profit_factor, 2),
        "drawdown": f"{max_dd * 100:.1f}%",
        "avgReturn": round(avg_return * 100, 2),
        "tradeCount": len(returns),
        "pnl": "等待交易帳本",
        "next": "依明日候選股產生交易計畫",
    }


def current_robot_scores(stock):
    close = safe_float(stock.get("close"))
    ma20 = safe_float(stock.get("ma20"))
    ma60 = safe_float(stock.get("ma60"))
    volume_ratio = safe_float(stock.get("volumeRatio20d"), 1)
    return20 = safe_float(stock.get("return20d"))
    range20 = safe_float(stock.get("rangePosition20d"), 50)
    distance_high = safe_float(stock.get("distanceTo60dHigh"))
    volatility = safe_float(stock.get("volatility20d"))
    institutional = safe_float(stock.get("institutional5d"))
    foreign = safe_float(stock.get("foreign5d"))
    base_score = safe_float(stock.get("score"))

    return {
        "ma-breakout": (close > ma20 > ma60) * 34 + min(volume_ratio, 3) * 14 + max(0, 10 + distance_high) + base_score * 0.35,
        "rsi-rebound": max(0, 35 - range20) * 1.2 + max(0, -return20) * 1.3 + base_score * 0.25,
        "macd-momentum": max(0, return20) * 2.2 + (close > ma20) * 20 + base_score * 0.35,
        "volume-surge": min(volume_ratio, 4) * 22 + max(0, return20) * 1.4 + base_score * 0.25,
        "bollinger-reversal": max(0, 45 - range20) + volatility * 0.5 + base_score * 0.22,
        "chip-follow": max(0, institutional) * 0.0000006 + max(0, foreign) * 0.0000005 + base_score * 0.35,
        "day-swing": min(volume_ratio, 4) * 18 + max(0, return20) * 1.2 + base_score * 0.3,
        "trend-swing": (close > ma20 > ma60) * 30 + max(0, return20) * 1.3 + max(0, 10 + distance_high) + base_score * 0.35,
    }


def candidate_rows(stocks, robots_by_id):
    rows = []
    for stock in stocks:
        scores = current_robot_scores(stock)
        robot_id, robot_score = max(scores.items(), key=lambda item: item[1])
        close = safe_float(stock.get("close"))
        volatility = safe_float(stock.get("volatility20d"))
        stop_pct = max(0.03, min(0.1, volatility / 100 * 0.85))
        target_pct = stop_pct * 1.8
        risk = "低" if volatility < 3.5 else "高" if volatility >= 7 else "中"
        lots = 1 if risk != "低" else 2
        rows.append(
            {
                "symbol": str(stock.get("symbol") or ""),
                "name": stock.get("name") or "",
                "sector": stock.get("sector") or "",
                "robotId": robot_id,
                "robotName": robots_by_id[robot_id]["name"],
                "signalScore": safe_int(min(99, max(45, robot_score))),
                "lots": lots,
                "entry": round(close, 2),
                "stopLoss": round(close * (1 - stop_pct), 2),
                "takeProfit": round(close * (1 + target_pct), 2),
                "risk": risk,
                "reason": stock.get("thesis") or "由每日候選股與歷史量價條件推導。",
                "marketDate": stock.get("marketDate") or "",
            }
        )
    rows.sort(key=lambda item: item["signalScore"], reverse=True)
    return rows[:24]


def main():
    candidate_data = load_json(CANDIDATES)
    stocks = candidate_data.get("stocks", [])
    top_symbols = [str(stock.get("symbol")) for stock in stocks[:120] if stock.get("symbol")]
    histories = {}
    for symbol in top_symbols:
        rows = enrich_history(load_history(symbol))
        if rows:
            histories[symbol] = rows

    robots = [robot_stats(robot, histories) for robot in ROBOTS]
    robots_by_id = {robot["id"]: robot for robot in robots}
    candidates = candidate_rows(stocks[:160], robots_by_id)

    for robot in robots:
        robot["candidates"] = sum(1 for item in candidates if item["robotId"] == robot["id"])

    measured_robots = [robot for robot in robots if robot.get("tradeCount", 0) > 0]
    payload = {
        "meta": {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "marketDate": candidate_data.get("meta", {}).get("marketDate"),
            "source": "data/candidates.json + data/history adjusted OHLCV",
            "mode": "market-derived",
            "notes": [
                "候選股與策略統計由真實市場資料推導。",
                "持倉、已實現損益與未實現損益等待交易帳本或券商 API 接入。",
            ],
            "symbolsBacktested": len(histories),
        },
        "summary": {
            "robotCount": len(robots),
            "candidateCount": len(candidates),
            "highConfidenceCount": sum(1 for item in candidates if item["signalScore"] >= 78),
            "totalWinRate": round(sum(robot["winRate"] for robot in measured_robots) / len(measured_robots), 1) if measured_robots else 0,
            "profitFactor": round(sum(robot["profitFactor"] for robot in measured_robots) / len(measured_robots), 2) if measured_robots else 0,
            "unrealizedPnl": None,
            "realizedPnl": None,
        },
        "robots": robots,
        "candidates": candidates,
        "holdings": [],
        "closedTrades": [],
        "risk": {
            "totalPositionValue": None,
            "buyingPower": None,
            "singleStrategyExposure": None,
            "maxAllowedDrawdown": "-12%",
            "level": "等待交易帳本",
        },
        "taskFlow": [
            {"label": "市場資料更新", "state": "done"},
            {"label": "策略回測", "state": "done"},
            {"label": "候選股產生", "state": "active"},
            {"label": "交易帳本同步", "state": "pending"},
            {"label": "開盤監控", "state": "pending"},
        ],
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(candidates)} candidates and {len(robots)} robots")


if __name__ == "__main__":
    main()
