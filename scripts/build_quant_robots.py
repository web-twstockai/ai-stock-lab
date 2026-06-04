import csv
import json
import math
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CANDIDATES = ROOT / "data" / "candidates.json"
HISTORY = ROOT / "data" / "history"
OUT = ROOT / "data" / "quant-robots.json"
VIRTUAL_INITIAL_CASH = 1_000_000
LOT_SIZE = 1000
MAX_POSITIONS = 6
MAX_DAILY_BUYS = 2
BUY_FEE_RATE = 0.001425
SELL_FEE_RATE = 0.001425
SELL_TAX_RATE = 0.003
MAX_ALLOWED_DRAWDOWN = 0.12
MAX_ALLOWED_DRAWDOWN_LABEL = "-12%"
STOP_LOSS_WARN_RATE = 0.35
STOP_LOSS_BLOCK_RATE = 0.5


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


def load_previous_payload():
    if not OUT.exists():
        return {}
    try:
        return load_json(OUT)
    except (OSError, json.JSONDecodeError):
        return {}


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


def trade_date_index(dates, value):
    if not value:
        return None
    try:
        return dates.index(value)
    except ValueError:
        return None


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


def drawdown_status(raw_drawdown):
    if raw_drawdown <= -MAX_ALLOWED_DRAWDOWN:
        return "exceeded"
    if raw_drawdown <= -(MAX_ALLOWED_DRAWDOWN * 0.75):
        return "watch"
    return "ok"


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
        "maxAllowedDrawdown": MAX_ALLOWED_DRAWDOWN_LABEL,
        "drawdownStatus": drawdown_status(max_dd),
        "drawdownPolicy": f"超過 {MAX_ALLOWED_DRAWDOWN_LABEL} 代表策略需降權並重新優化",
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


def parse_pct(value, default=0.0):
    try:
        return float(str(value).replace("%", "")) / 100
    except (TypeError, ValueError):
        return default


def recent_closed_trades(previous_payload, limit=60):
    state = previous_payload.get("paperState") if isinstance(previous_payload, dict) else None
    trades = state.get("closedTrades", []) if isinstance(state, dict) else previous_payload.get("closedTrades", [])
    return list(trades or [])[-limit:]


def build_optimization_profile(previous_payload, robots):
    profile = {}
    trades = recent_closed_trades(previous_payload)
    for robot in robots:
        robot_id = robot["id"]
        robot_trades = [trade for trade in trades if trade.get("robotId") == robot_id]
        stop_trades = [trade for trade in robot_trades if "停損" in str(trade.get("reason", ""))]
        stop_rate = len(stop_trades) / len(robot_trades) if robot_trades else 0
        raw_drawdown = parse_pct(robot.get("drawdown"))
        score_penalty = 0
        min_signal_score = 50
        volatility_cap = 99
        lots_multiplier = 1.0
        status = "正常"
        action = "維持原策略權重"

        if raw_drawdown <= -MAX_ALLOWED_DRAWDOWN:
            score_penalty += 8
            min_signal_score = max(min_signal_score, 76)
            volatility_cap = min(volatility_cap, 6.5)
            status = "回撤超標"
            action = "提高進場門檻並降低高波動標的權重"

        if stop_rate >= STOP_LOSS_BLOCK_RATE and len(robot_trades) >= 3:
            score_penalty += 14
            min_signal_score = max(min_signal_score, 82)
            volatility_cap = min(volatility_cap, 5.5)
            lots_multiplier = 0.5
            status = "停損過高"
            action = "暫停低分訊號，只保留高分且低波動標的"
        elif stop_rate >= STOP_LOSS_WARN_RATE and len(robot_trades) >= 3:
            score_penalty += 8
            min_signal_score = max(min_signal_score, 76)
            volatility_cap = min(volatility_cap, 6.5)
            lots_multiplier = 0.75
            status = "停損偏高"
            action = "降權並提高進場分數門檻"

        profile[robot_id] = {
            "robotId": robot_id,
            "status": status,
            "action": action,
            "stopLossRate": round(stop_rate * 100, 1),
            "closedTrades": len(robot_trades),
            "stopLossTrades": len(stop_trades),
            "scorePenalty": score_penalty,
            "minSignalScore": min_signal_score,
            "volatilityCap": volatility_cap,
            "lotsMultiplier": lots_multiplier,
        }
    return profile


def candidate_rows(stocks, robots_by_id, optimization_profile=None):
    optimization_profile = optimization_profile or {}
    rows = []
    for stock in stocks:
        scores = current_robot_scores(stock)
        close = safe_float(stock.get("close"))
        volatility = safe_float(stock.get("volatility20d"))
        adjusted_scores = {}
        for candidate_robot_id, score in scores.items():
            rule = optimization_profile.get(candidate_robot_id, {})
            adjusted = score - safe_float(rule.get("scorePenalty"))
            if volatility > safe_float(rule.get("volatilityCap"), 99):
                adjusted -= 10
            adjusted_scores[candidate_robot_id] = adjusted
        robot_id, robot_score = max(adjusted_scores.items(), key=lambda item: item[1])
        rule = optimization_profile.get(robot_id, {})
        stop_pct = max(0.03, min(0.1, volatility / 100 * 0.85))
        target_pct = stop_pct * 1.8
        risk = "低" if volatility < 3.5 else "高" if volatility >= 7 else "中"
        lots = 1 if risk != "低" else 2
        lots = max(1, math.floor(lots * safe_float(rule.get("lotsMultiplier"), 1)))
        signal_score = safe_int(min(99, max(45, robot_score)))
        if signal_score < safe_int(rule.get("minSignalScore"), 50):
            continue
        rows.append(
            {
                "symbol": str(stock.get("symbol") or ""),
                "name": stock.get("name") or "",
                "sector": stock.get("sector") or "",
                "robotId": robot_id,
                "robotName": robots_by_id[robot_id]["name"],
                "signalScore": signal_score,
                "minSignalScore": safe_int(rule.get("minSignalScore"), 50),
                "optimizationAction": rule.get("action", "維持原策略權重"),
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


def recent_volatility_pct(rows, index, window=20):
    if index < 2:
        return 4.0
    start = max(1, index - window + 1)
    returns = []
    for i in range(start, index + 1):
        previous = rows[i - 1]["close"]
        if previous:
            returns.append(rows[i]["close"] / previous - 1)
    return stdev(returns) * 100 if returns else 4.0


def robot_signal_score(robot_id, rows, index):
    row = rows[index]
    ma20 = row.get("ma20") or row["close"]
    volume20 = row.get("volume20") or row["volume"] or 1
    volume_ratio = row["volume"] / volume20 if volume20 else 1
    day_return = row["close"] / row["open"] - 1 if row["open"] else 0
    rsi14 = row.get("rsi14") or 50
    macd_hist = row.get("macdHist") or 0
    distance_ma20 = row["close"] / ma20 - 1 if ma20 else 0
    base = 62
    if robot_id == "ma-breakout":
        return base + min(volume_ratio, 3) * 7 + max(0, distance_ma20) * 200
    if robot_id == "rsi-rebound":
        return base + max(0, 50 - rsi14) * 0.8 + max(0, day_return) * 160
    if robot_id == "macd-momentum":
        return base + max(0, macd_hist) * 8 + max(0, day_return) * 140
    if robot_id == "volume-surge":
        return base + min(volume_ratio, 4) * 8 + max(0, day_return) * 150
    if robot_id == "bollinger-reversal":
        return base + max(0, day_return) * 170
    if robot_id == "day-swing":
        return base + min(volume_ratio, 4) * 7 + max(0, day_return) * 180
    if robot_id == "trend-swing":
        return base + max(0, distance_ma20) * 180 + min(volume_ratio, 2) * 5
    return base


def build_date_index(histories):
    date_index = {}
    for symbol, rows in histories.items():
        for index, row in enumerate(rows):
            date_index.setdefault(row["date"], {})[symbol] = index
    return date_index


def trade_cost(price, lots):
    return price * LOT_SIZE * lots


def buy_fee(price, lots):
    return trade_cost(price, lots) * BUY_FEE_RATE


def sell_costs(price, lots):
    value = trade_cost(price, lots)
    return value * (SELL_FEE_RATE + SELL_TAX_RATE)


def stop_loss_detail(row, holding):
    if row["open"] <= holding["stopLoss"]:
        return "開盤跳空跌破停損"
    intraday_drop = row["low"] / holding["entry"] - 1 if holding["entry"] else 0
    if holding.get("heldDays", 0) <= 1:
        return "進場後短線動能反轉"
    if intraday_drop <= -0.08:
        return "單日波動過大打到停損"
    if safe_int(holding.get("signalScore"), 0) < 76:
        return "進場分數偏低，訊號品質不足"
    return "跌破策略停損價"


def optimization_hint_for_exit(reason, detail):
    if "停損" not in str(reason):
        return "維持策略觀察"
    if "跳空" in detail:
        return "降低隔日跳空風險，避開高波動或消息面不穩標的"
    if "動能反轉" in detail:
        return "提高進場動能門檻，要求收盤強度與量能延續"
    if "波動過大" in detail:
        return "降低高波動股票權重，縮小建議張數"
    if "分數偏低" in detail:
        return "提高最低信號分數門檻"
    return "檢查停損距離與進場條件"


def normalize_closed_trade(trade):
    item = dict(trade)
    reason = str(item.get("reason", ""))
    if "停損" in reason and not item.get("optimizationHint"):
        item["optimizationHint"] = "舊交易未保留盤中觸發細節，下一筆停損起會記錄跳空、反轉、波動或分數不足"
    return item


def simulate_paper_trading(histories, robots, stock_meta):
    robots_by_id = {robot["id"]: robot for robot in robots}
    date_index = build_date_index(histories)
    dates = sorted(date_index)
    if not dates:
        return {
            "cash": VIRTUAL_INITIAL_CASH,
            "holdings": [],
            "closedTrades": [],
            "summary": {"unrealizedPnl": 0, "realizedPnl": 0},
            "risk": {},
        }

    simulation_dates = dates[-70:]
    cash = float(VIRTUAL_INITIAL_CASH)
    holdings = {}
    closed_trades = []

    for trade_date in simulation_dates:
        symbols_today = date_index.get(trade_date, {})

        for symbol, holding in list(holdings.items()):
            index = symbols_today.get(symbol)
            if index is None:
                continue
            row = histories[symbol][index]
            exit_price = None
            reason = None
            if row["low"] <= holding["stopLoss"]:
                exit_price = holding["stopLoss"]
                reason = "觸發停損"
            elif row["high"] >= holding["takeProfit"]:
                exit_price = holding["takeProfit"]
                reason = "達到停利"
            elif holding["heldDays"] >= holding["holdDays"]:
                exit_price = row["close"]
                reason = "持有天數到期"

            holding["heldDays"] += 1
            if exit_price is None:
                continue

            lots = holding["lots"]
            proceeds = trade_cost(exit_price, lots) - sell_costs(exit_price, lots)
            realized = proceeds - holding["costAmount"]
            cash += proceeds
            meta = stock_meta.get(symbol, {})
            closed_trades.append(
                {
                    "symbol": symbol,
                    "name": meta.get("name") or symbol,
                    "robotId": holding["robotId"],
                    "robotName": robots_by_id.get(holding["robotId"], {}).get("name", holding["robotId"]),
                    "buyDate": holding["buyDate"],
                    "sellDate": trade_date,
                    "lots": lots,
                    "buyPrice": round(holding["entry"], 2),
                    "sellPrice": round(exit_price, 2),
                    "realizedPnl": round(realized),
                    "reason": reason,
                }
            )
            del holdings[symbol]

        if len(holdings) >= MAX_POSITIONS:
            continue

        signals = []
        for symbol, index in symbols_today.items():
            if symbol in holdings:
                continue
            rows = histories[symbol]
            if index < 61:
                continue
            for robot in robots:
                robot_id = robot["id"]
                if robot_id == "chip-follow":
                    continue
                if signal_for(robot_id, rows, index):
                    score = robot_signal_score(robot_id, rows, index)
                    signals.append((score, symbol, robot_id, index))
                    break

        signals.sort(reverse=True)
        bought_today = 0
        for score, symbol, robot_id, index in signals:
            if bought_today >= MAX_DAILY_BUYS or len(holdings) >= MAX_POSITIONS:
                break
            row = histories[symbol][index]
            entry = row["close"]
            volatility = recent_volatility_pct(histories[symbol], index)
            stop_pct = max(0.03, min(0.08, volatility / 100 * 0.85))
            target_pct = stop_pct * 1.8
            lots = 1
            required_cash = trade_cost(entry, lots) + buy_fee(entry, lots)
            if required_cash > cash:
                continue
            cash -= required_cash
            holdings[symbol] = {
                "symbol": symbol,
                "robotId": robot_id,
                "buyDate": trade_date,
                "entry": entry,
                "lots": lots,
                "costAmount": required_cash,
                "stopLoss": entry * (1 - stop_pct),
                "takeProfit": entry * (1 + target_pct),
                "holdDays": robots_by_id[robot_id]["holdDays"],
                "heldDays": 0,
                "signalScore": round(min(99, max(50, score))),
            }
            bought_today += 1

    last_date = simulation_dates[-1]
    holding_rows = []
    total_position_value = 0.0
    unrealized_pnl = 0.0
    exposure_by_robot = {}

    for symbol, holding in holdings.items():
        index = date_index.get(last_date, {}).get(symbol)
        if index is None:
            index = len(histories[symbol]) - 1
        row = histories[symbol][index]
        meta = stock_meta.get(symbol, {})
        current_value = trade_cost(row["close"], holding["lots"])
        unrealized = current_value - holding["costAmount"]
        total_position_value += current_value
        unrealized_pnl += unrealized
        exposure_by_robot[holding["robotId"]] = exposure_by_robot.get(holding["robotId"], 0) + current_value
        holding_rows.append(
            {
                "symbol": symbol,
                "name": meta.get("name") or symbol,
                "robotId": holding["robotId"],
                "robotName": robots_by_id.get(holding["robotId"], {}).get("name", holding["robotId"]),
                "buyDate": holding["buyDate"],
                "lots": holding["lots"],
                "cost": round(holding["entry"], 2),
                "price": round(row["close"], 2),
                "stopLoss": round(holding["stopLoss"], 2),
                "takeProfit": round(holding["takeProfit"], 2),
                "unrealizedPnl": round(unrealized),
            }
        )

    realized_pnl = sum(trade["realizedPnl"] for trade in closed_trades)
    portfolio_value = cash + total_position_value
    max_exposure = max(exposure_by_robot.values(), default=0)
    single_strategy_exposure = f"{(max_exposure / portfolio_value * 100):.1f}%" if portfolio_value else "0%"
    level = "模擬中"
    if portfolio_value and total_position_value / portfolio_value > 0.85:
        level = "偏高"
    elif total_position_value == 0:
        level = "空手"

    return {
        "cash": round(cash),
        "holdings": sorted(holding_rows, key=lambda item: item["unrealizedPnl"], reverse=True),
        "closedTrades": list(reversed(closed_trades[-8:])),
        "summary": {
            "unrealizedPnl": round(unrealized_pnl),
            "realizedPnl": round(realized_pnl),
            "portfolioValue": round(portfolio_value),
        },
        "risk": {
            "totalPositionValue": round(total_position_value),
            "buyingPower": round(cash),
            "singleStrategyExposure": single_strategy_exposure,
            "maxAllowedDrawdown": MAX_ALLOWED_DRAWDOWN_LABEL,
            "level": level,
        },
    }


def previous_open_symbols(previous_payload):
    state = previous_payload.get("paperState") if isinstance(previous_payload, dict) else None
    positions = state.get("openPositions", []) if isinstance(state, dict) else previous_payload.get("holdings", [])
    return [str(item.get("symbol")) for item in positions if item.get("symbol")]


def normalize_position(item, robots_by_id, dates):
    symbol = str(item.get("symbol") or "")
    if not symbol:
        return None
    robot_id = item.get("robotId") or "ma-breakout"
    robot = robots_by_id.get(robot_id, {})
    lots = max(1, safe_int(item.get("lots"), 1))
    entry = safe_float(item.get("entry"), safe_float(item.get("cost")))
    if entry <= 0:
        entry = safe_float(item.get("buyPrice"), safe_float(item.get("price")))
    if entry <= 0:
        return None
    cost_amount = safe_float(item.get("costAmount"), trade_cost(entry, lots) + buy_fee(entry, lots))
    buy_date = item.get("buyDate") or item.get("tradeDate") or ""
    buy_index = trade_date_index(dates, buy_date)
    last_seen_index = trade_date_index(dates, item.get("lastSeenDate"))
    held_days = safe_int(item.get("heldDays"), 0)
    if buy_index is not None and last_seen_index is not None:
        held_days = max(held_days, last_seen_index - buy_index)
    return {
        "symbol": symbol,
        "robotId": robot_id,
        "buyDate": buy_date,
        "entry": entry,
        "lots": lots,
        "costAmount": cost_amount,
        "stopLoss": safe_float(item.get("stopLoss"), entry * 0.94),
        "takeProfit": safe_float(item.get("takeProfit"), entry * 1.12),
        "holdDays": safe_int(item.get("holdDays"), robot.get("holdDays", 5)),
        "heldDays": held_days,
        "signalScore": safe_int(item.get("signalScore"), 70),
        "lastSeenDate": item.get("lastSeenDate") or buy_date,
    }


def seed_paper_state(previous_payload, robots_by_id, dates):
    state = previous_payload.get("paperState") if isinstance(previous_payload, dict) else None
    if isinstance(state, dict):
        positions = state.get("openPositions", [])
        closed_trades = state.get("closedTrades", [])
        transactions = state.get("transactions", [])
        cash = safe_float(state.get("cash"), VIRTUAL_INITIAL_CASH)
        last_processed_date = state.get("lastProcessedDate") or previous_payload.get("meta", {}).get("marketDate")
    else:
        positions = previous_payload.get("holdings", []) if isinstance(previous_payload, dict) else []
        closed_trades = previous_payload.get("closedTrades", []) if isinstance(previous_payload, dict) else []
        transactions = previous_payload.get("todayTrades", []) if isinstance(previous_payload, dict) else []
        summary = previous_payload.get("summary", {}) if isinstance(previous_payload, dict) else {}
        risk = previous_payload.get("risk", {}) if isinstance(previous_payload, dict) else {}
        cash = safe_float(summary.get("virtualCash"), safe_float(risk.get("buyingPower"), VIRTUAL_INITIAL_CASH))
        last_processed_date = previous_payload.get("meta", {}).get("marketDate") if isinstance(previous_payload, dict) else None

    holdings = {}
    for item in positions:
        position = normalize_position(item, robots_by_id, dates)
        if position:
            holdings[position["symbol"]] = position

    return {
        "cash": cash,
        "holdings": holdings,
        "closedTrades": [normalize_closed_trade(trade) for trade in list(closed_trades or [])],
        "transactions": list(transactions or []),
        "lastProcessedDate": last_processed_date,
    }


def transaction_for(side, trade_date, trade):
    payload = {
        "side": side,
        "tradeDate": trade_date,
        "symbol": trade.get("symbol"),
        "name": trade.get("name"),
        "robotId": trade.get("robotId"),
        "robotName": trade.get("robotName"),
        "lots": trade.get("lots"),
        "reason": trade.get("reason"),
    }
    if side == "BUY":
        payload.update(
            {
                "buyDate": trade.get("buyDate") or trade_date,
                "buyPrice": trade.get("buyPrice"),
                "signalScore": trade.get("signalScore"),
            }
        )
    else:
        payload.update(
            {
                "buyDate": trade.get("buyDate"),
                "sellDate": trade.get("sellDate") or trade_date,
                "buyPrice": trade.get("buyPrice"),
                "sellPrice": trade.get("sellPrice"),
                "realizedPnl": trade.get("realizedPnl"),
            }
        )
    return payload


def simulate_paper_trading(histories, robots, stock_meta, previous_payload=None, target_market_date=None, optimization_profile=None):
    robots_by_id = {robot["id"]: robot for robot in robots}
    optimization_profile = optimization_profile or {}
    date_index = build_date_index(histories)
    dates = sorted(date_index)
    if not dates:
        return {
            "cash": VIRTUAL_INITIAL_CASH,
            "holdings": [],
            "closedTrades": [],
            "todayTrades": [],
            "summary": {"unrealizedPnl": 0, "realizedPnl": 0, "portfolioValue": VIRTUAL_INITIAL_CASH},
            "risk": {},
            "paperState": {
                "cash": VIRTUAL_INITIAL_CASH,
                "openPositions": [],
                "closedTrades": [],
                "transactions": [],
                "lastProcessedDate": None,
            },
        }

    previous_payload = previous_payload or {}
    target_date = target_market_date if target_market_date in date_index else dates[-1]
    target_index = trade_date_index(dates, target_date)
    target_index = target_index if target_index is not None else len(dates) - 1
    state = seed_paper_state(previous_payload, robots_by_id, dates)
    cash = float(state["cash"])
    holdings = state["holdings"]
    closed_trades = state["closedTrades"]
    transactions = state["transactions"]
    last_processed_date = state["lastProcessedDate"]
    last_processed_index = trade_date_index(dates, last_processed_date)

    if last_processed_index is None:
        simulation_dates = dates[max(0, target_index - 69) : target_index + 1]
    else:
        simulation_dates = dates[last_processed_index + 1 : target_index + 1]

    today_trades = [
        item
        for item in previous_payload.get("todayTrades", [])
        if item.get("tradeDate") == target_date or item.get("sellDate") == target_date or item.get("buyDate") == target_date
    ]
    if not today_trades and not simulation_dates:
        for holding in holdings.values():
            if holding.get("buyDate") != target_date:
                continue
            symbol = holding["symbol"]
            meta = stock_meta.get(symbol, {})
            today_trades.append(
                transaction_for(
                    "BUY",
                    target_date,
                    {
                        "symbol": symbol,
                        "name": meta.get("name") or symbol,
                        "robotId": holding["robotId"],
                        "robotName": robots_by_id.get(holding["robotId"], {}).get("name", holding["robotId"]),
                        "buyDate": holding["buyDate"],
                        "lots": holding["lots"],
                        "buyPrice": round(holding["entry"], 2),
                        "signalScore": holding.get("signalScore"),
                        "reason": "舊帳本升級回填今日買進",
                    },
                )
            )
        for trade in closed_trades:
            if trade.get("sellDate") == target_date:
                today_trades.append(transaction_for("SELL", target_date, trade))

    for trade_date in simulation_dates:
        today_trades = []
        symbols_today = date_index.get(trade_date, {})

        for symbol, holding in list(holdings.items()):
            index = symbols_today.get(symbol)
            if index is None:
                continue
            row = histories[symbol][index]
            exit_price = None
            reason = None
            if row["low"] <= holding["stopLoss"]:
                exit_price = holding["stopLoss"]
                detail = stop_loss_detail(row, holding)
                reason = f"觸發停損：{detail}"
            elif row["high"] >= holding["takeProfit"]:
                exit_price = holding["takeProfit"]
                reason = "觸發停利"
            elif holding["heldDays"] >= holding["holdDays"]:
                exit_price = row["close"]
                reason = "達策略持有天數"

            holding["heldDays"] += 1
            holding["lastSeenDate"] = trade_date
            if exit_price is None:
                continue

            lots = holding["lots"]
            proceeds = trade_cost(exit_price, lots) - sell_costs(exit_price, lots)
            realized = proceeds - holding["costAmount"]
            cash += proceeds
            meta = stock_meta.get(symbol, {})
            closed_trade = {
                "symbol": symbol,
                "name": meta.get("name") or symbol,
                "robotId": holding["robotId"],
                "robotName": robots_by_id.get(holding["robotId"], {}).get("name", holding["robotId"]),
                "buyDate": holding["buyDate"],
                "sellDate": trade_date,
                "lots": lots,
                "buyPrice": round(holding["entry"], 2),
                "sellPrice": round(exit_price, 2),
                "realizedPnl": round(realized),
                "reason": reason,
                "optimizationHint": optimization_hint_for_exit(reason, reason),
            }
            closed_trades.append(closed_trade)
            today_trades.append(transaction_for("SELL", trade_date, closed_trade))
            transactions.append(today_trades[-1])
            del holdings[symbol]

        if len(holdings) < MAX_POSITIONS:
            signals = []
            for symbol, index in symbols_today.items():
                if symbol in holdings:
                    continue
                rows = histories[symbol]
                if index < 61:
                    continue
                for robot in robots:
                    robot_id = robot["id"]
                    if robot_id == "chip-follow":
                        continue
                    if signal_for(robot_id, rows, index):
                        score = robot_signal_score(robot_id, rows, index)
                        rule = optimization_profile.get(robot_id, {})
                        volatility = recent_volatility_pct(rows, index)
                        adjusted_score = score - safe_float(rule.get("scorePenalty"))
                        if volatility > safe_float(rule.get("volatilityCap"), 99):
                            continue
                        if adjusted_score < safe_float(rule.get("minSignalScore"), 50):
                            continue
                        signals.append((adjusted_score, symbol, robot_id, index))
                        break

            signals.sort(reverse=True)
            bought_today = 0
            for score, symbol, robot_id, index in signals:
                if bought_today >= MAX_DAILY_BUYS or len(holdings) >= MAX_POSITIONS:
                    break
                row = histories[symbol][index]
                entry = row["close"]
                volatility = recent_volatility_pct(histories[symbol], index)
                stop_pct = max(0.03, min(0.08, volatility / 100 * 0.85))
                target_pct = stop_pct * 1.8
                rule = optimization_profile.get(robot_id, {})
                lots = max(1, math.floor(1 * safe_float(rule.get("lotsMultiplier"), 1)))
                required_cash = trade_cost(entry, lots) + buy_fee(entry, lots)
                if required_cash > cash:
                    continue
                cash -= required_cash
                signal_score = round(min(99, max(50, score)))
                holdings[symbol] = {
                    "symbol": symbol,
                    "robotId": robot_id,
                    "buyDate": trade_date,
                    "entry": entry,
                    "lots": lots,
                    "costAmount": required_cash,
                    "stopLoss": entry * (1 - stop_pct),
                    "takeProfit": entry * (1 + target_pct),
                    "holdDays": robots_by_id[robot_id]["holdDays"],
                    "heldDays": 0,
                    "signalScore": signal_score,
                    "lastSeenDate": trade_date,
                }
                meta = stock_meta.get(symbol, {})
                buy_trade = {
                    "symbol": symbol,
                    "name": meta.get("name") or symbol,
                    "robotId": robot_id,
                    "robotName": robots_by_id.get(robot_id, {}).get("name", robot_id),
                    "buyDate": trade_date,
                    "lots": lots,
                    "buyPrice": round(entry, 2),
                    "signalScore": signal_score,
                    "reason": "策略訊號買進",
                }
                today_trades.append(transaction_for("BUY", trade_date, buy_trade))
                transactions.append(today_trades[-1])
                bought_today += 1

        last_processed_date = trade_date

    last_date = target_date
    holding_rows = []
    open_positions = []
    total_position_value = 0.0
    unrealized_pnl = 0.0
    exposure_by_robot = {}

    for symbol, holding in holdings.items():
        if symbol not in histories:
            continue
        index = date_index.get(last_date, {}).get(symbol)
        if index is None:
            index = len(histories[symbol]) - 1
        row = histories[symbol][index]
        meta = stock_meta.get(symbol, {})
        current_value = trade_cost(row["close"], holding["lots"])
        unrealized = current_value - holding["costAmount"]
        total_position_value += current_value
        unrealized_pnl += unrealized
        exposure_by_robot[holding["robotId"]] = exposure_by_robot.get(holding["robotId"], 0) + current_value
        buy_index = trade_date_index(dates, holding.get("buyDate"))
        current_index = trade_date_index(dates, last_date)
        display_held_days = holding.get("heldDays", 0)
        if buy_index is not None and current_index is not None:
            display_held_days = max(display_held_days, current_index - buy_index)
        open_position = {
            **holding,
            "entry": round(holding["entry"], 4),
            "costAmount": round(holding["costAmount"], 2),
            "stopLoss": round(holding["stopLoss"], 4),
            "takeProfit": round(holding["takeProfit"], 4),
            "heldDays": display_held_days,
            "lastSeenDate": last_date,
        }
        open_positions.append(open_position)
        holding_rows.append(
            {
                "symbol": symbol,
                "name": meta.get("name") or symbol,
                "robotId": holding["robotId"],
                "robotName": robots_by_id.get(holding["robotId"], {}).get("name", holding["robotId"]),
                "buyDate": holding["buyDate"],
                "heldDays": display_held_days,
                "lots": holding["lots"],
                "cost": round(holding["entry"], 2),
                "price": round(row["close"], 2),
                "stopLoss": round(holding["stopLoss"], 2),
                "takeProfit": round(holding["takeProfit"], 2),
                "unrealizedPnl": round(unrealized),
            }
        )

    realized_pnl = sum(safe_float(trade.get("realizedPnl")) for trade in closed_trades)
    portfolio_value = cash + total_position_value
    max_exposure = max(exposure_by_robot.values(), default=0)
    single_strategy_exposure = f"{(max_exposure / portfolio_value * 100):.1f}%" if portfolio_value else "0%"
    level = "模擬中"
    if portfolio_value and total_position_value / portfolio_value > 0.85:
        level = "偏高"
    elif total_position_value == 0:
        level = "低"

    return {
        "cash": round(cash),
        "holdings": sorted(holding_rows, key=lambda item: item["unrealizedPnl"], reverse=True),
        "closedTrades": list(reversed(closed_trades[-12:])),
        "todayTrades": today_trades,
        "summary": {
            "unrealizedPnl": round(unrealized_pnl),
            "realizedPnl": round(realized_pnl),
            "portfolioValue": round(portfolio_value),
        },
        "risk": {
            "totalPositionValue": round(total_position_value),
            "buyingPower": round(cash),
            "singleStrategyExposure": single_strategy_exposure,
            "maxAllowedDrawdown": MAX_ALLOWED_DRAWDOWN_LABEL,
            "level": level,
        },
        "paperState": {
            "cash": round(cash, 2),
            "openPositions": sorted(open_positions, key=lambda item: item["buyDate"]),
            "closedTrades": closed_trades[-120:],
            "transactions": transactions[-240:],
            "lastProcessedDate": last_processed_date or target_date,
        },
    }


def main():
    candidate_data = load_json(CANDIDATES)
    previous_payload = load_previous_payload()
    stocks = candidate_data.get("stocks", [])
    top_symbols = [str(stock.get("symbol")) for stock in stocks[:120] if stock.get("symbol")]
    for symbol in previous_open_symbols(previous_payload):
        if symbol not in top_symbols:
            top_symbols.append(symbol)
    histories = {}
    for symbol in top_symbols:
        rows = enrich_history(load_history(symbol))
        if rows:
            histories[symbol] = rows

    robots = [robot_stats(robot, histories) for robot in ROBOTS]
    robots_by_id = {robot["id"]: robot for robot in robots}
    optimization_profile = build_optimization_profile(previous_payload, robots)
    candidates = candidate_rows(stocks[:160], robots_by_id, optimization_profile)
    stock_meta = {str(stock.get("symbol")): stock for stock in stocks if stock.get("symbol")}
    paper = simulate_paper_trading(
        histories,
        robots,
        stock_meta,
        previous_payload,
        candidate_data.get("meta", {}).get("marketDate"),
        optimization_profile,
    )
    optimization_profile = build_optimization_profile({"paperState": paper["paperState"]}, robots)

    for robot in robots:
        rule = optimization_profile.get(robot["id"], {})
        robot["candidates"] = sum(1 for item in candidates if item["robotId"] == robot["id"])
        robot["optimization"] = rule
        robot["next"] = rule.get("action") or robot["next"]

    measured_robots = [robot for robot in robots if robot.get("tradeCount", 0) > 0]
    payload = {
        "meta": {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "marketDate": candidate_data.get("meta", {}).get("marketDate"),
            "source": "data/candidates.json + data/history adjusted OHLCV",
            "mode": "market-derived",
            "paperTrading": {
                "enabled": True,
                "initialCash": VIRTUAL_INITIAL_CASH,
                "lotSize": LOT_SIZE,
                "maxPositions": MAX_POSITIONS,
                "maxDailyBuys": MAX_DAILY_BUYS,
                "description": "AI 機器人以虛擬資金延續持倉、自動買賣，不連接真實券商帳戶。",
                "lastProcessedDate": paper["paperState"]["lastProcessedDate"],
            },
            "notes": [
                "候選股與策略統計由真實市場資料推導。",
                "持倉與損益為 AI 紙上交易模擬結果，不代表真實下單。",
            ],
            "symbolsBacktested": len(histories),
        },
        "summary": {
            "robotCount": len(robots),
            "candidateCount": len(candidates),
            "highConfidenceCount": sum(1 for item in candidates if item["signalScore"] >= 78),
            "totalWinRate": round(sum(robot["winRate"] for robot in measured_robots) / len(measured_robots), 1) if measured_robots else 0,
            "profitFactor": round(sum(robot["profitFactor"] for robot in measured_robots) / len(measured_robots), 2) if measured_robots else 0,
            "unrealizedPnl": paper["summary"]["unrealizedPnl"],
            "realizedPnl": paper["summary"]["realizedPnl"],
            "portfolioValue": paper["summary"]["portfolioValue"],
            "virtualCash": paper["cash"],
        },
        "robots": robots,
        "candidates": candidates,
        "optimization": list(optimization_profile.values()),
        "holdings": paper["holdings"],
        "closedTrades": paper["closedTrades"],
        "todayTrades": paper["todayTrades"],
        "risk": paper["risk"],
        "paperState": paper["paperState"],
        "taskFlow": [
            {"label": "市場資料更新", "state": "done"},
            {"label": "策略回測", "state": "done"},
            {"label": "候選股產生", "state": "done"},
            {"label": "AI 紙上交易模擬", "state": "active"},
            {"label": "開盤監控", "state": "pending"},
        ],
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(candidates)} candidates and {len(robots)} robots")


if __name__ == "__main__":
    main()
