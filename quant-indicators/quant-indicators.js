(function () {
  const fallbackData = {
    meta: {
      generatedAt: new Date().toISOString(),
      marketDate: "2026-06-02",
      source: "fallback demo data",
      mode: "fallback",
      notes: ["無法載入 data/quant-robots.json 時使用。"],
    },
    summary: {
      robotCount: 8,
      candidateCount: 0,
      highConfidenceCount: 0,
      totalWinRate: 0,
      profitFactor: 0,
      unrealizedPnl: 0,
      realizedPnl: 0,
    },
    robots: [
      {
        id: "ma-breakout",
        name: "均線突破機器人",
        short: "MA20 突破 + 放量確認",
        desc: "站上短中期均線且量能放大，尋找趨勢初段的隔日買點。",
        status: "等待資料",
        version: "fallback",
        params: "MA20 + 量能",
        winRate: 0,
        profitFactor: 0,
        drawdown: "0%",
        avgReturn: 0,
        tradeCount: 0,
        pnl: "等待資料",
        candidates: 0,
        next: "等待量化資料更新",
      },
    ],
    candidates: [],
    holdings: [],
    closedTrades: [],
    todayTrades: [],
    risk: {
      totalPositionValue: null,
      buyingPower: null,
      singleStrategyExposure: null,
      maxAllowedDrawdown: "-12%",
      level: "等待模擬資料",
    },
    taskFlow: [
      { label: "市場資料更新", state: "pending" },
      { label: "策略回測", state: "pending" },
      { label: "候選股產生", state: "pending" },
      { label: "AI 紙上交易模擬", state: "pending" },
      { label: "開盤監控", state: "pending" },
    ],
  };

  let state = {
    selectedRobotId: "ma-breakout",
    candidateFilter: "all",
    data: fallbackData,
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function number(value, digits = 0) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return "等待資料";
    return parsed.toLocaleString("zh-TW", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  }

  function money(value) {
    if (value === null || value === undefined || value === "") return "等待模擬資料";
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return String(value);
    return `${parsed >= 0 ? "+" : ""}${parsed.toLocaleString("zh-TW", { maximumFractionDigits: 0 })}`;
  }

  function fmtDateTime(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "資料時間待確認";
    return date.toLocaleString("zh-TW", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  function fmtDate(value) {
    if (!value) return "--";
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString("zh-TW", {
      month: "2-digit",
      day: "2-digit",
    });
  }

  function robotById(id) {
    return state.data.robots.find((robot) => robot.id === id) || state.data.robots[0] || fallbackData.robots[0];
  }

  function robotIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="6" width="14" height="11" rx="4" stroke="currentColor" stroke-width="2"/><path d="M8 21h8M12 3v3M9 11h.01M15 11h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  function setText(id, value) {
    const node = byId(id);
    if (node) node.textContent = value;
  }

  function renderSummary() {
    const data = state.data;
    const summary = data.summary || {};
    setText("metricRobots", number(summary.robotCount ?? data.robots.length));
    setText("metricCandidates", number(summary.candidateCount ?? data.candidates.length));
    setText("metricHighConfidence", `高信心 ${number(summary.highConfidenceCount ?? 0)} 檔`);
    setText("metricWinRate", `${number(summary.totalWinRate, 1)}%`);
    setText("metricProfitFactor", `Profit Factor ${number(summary.profitFactor, 2)}`);
    setText("metricUnrealized", money(summary.unrealizedPnl));
    setText("metricRealized", money(summary.realizedPnl));
    setText("syncLabel", `${fmtDateTime(data.meta?.generatedAt)} 更新`);

    const sourceNode = byId("dataSourceLabel");
    if (sourceNode) {
      const isReal = data.meta?.mode === "market-derived";
      sourceNode.textContent = isReal ? "市場資料推導" : "備援示範資料";
      sourceNode.classList.toggle("is-real", isReal);
    }
  }

  function renderRobots() {
    const list = byId("robotList");
    if (!list) return;
    list.innerHTML = state.data.robots.map((robot) => `
      <button class="robot-button${robot.id === state.selectedRobotId ? " is-active" : ""}" type="button" data-robot-id="${esc(robot.id)}">
        <span class="mini-bot">${robotIcon()}</span>
        <span>
          <strong>${esc(robot.name)}</strong>
          <span>${esc(robot.short)}</span>
        </span>
        <em class="robot-score">${number(robot.winRate, 1)}%</em>
      </button>
    `).join("");
  }

  function renderSelectedRobot() {
    const robot = robotById(state.selectedRobotId);
    setText("selectedRobotName", robot.name);
    setText("selectedRobotDesc", robot.desc);
    setText("selectedVersion", robot.version);
    setText("selectedParams", robot.params);
    setText("selectedNext", robot.next);
    byId("selectedRobotStats").innerHTML = [
      ["回測勝率", `${number(robot.winRate, 1)}%`, ""],
      ["Profit Factor", number(robot.profitFactor, 2), ""],
      ["風控後回撤", robot.drawdown, "negative"],
      ["回測筆數", `${number(robot.tradeCount)} 筆`, ""],
    ].map(([label, value, tone]) => `
      <div class="detail-stat">
        <span>${esc(label)}</span>
        <strong class="${tone}">${esc(value)}</strong>
      </div>
    `).join("");
  }

  function riskClass(risk) {
    if (risk === "低") return "low";
    if (risk === "高") return "high";
    return "";
  }

  function renderCandidates() {
    const rows = byId("candidateRows");
    if (!rows) return;
    const candidates = state.data.candidates || [];
    const visible = candidates.filter((item) => {
      if (state.candidateFilter === "high") return Number(item.signalScore) >= 78;
      if (state.candidateFilter === "selected") return item.robotId === state.selectedRobotId;
      return true;
    });

    if (!visible.length) {
      rows.innerHTML = '<tr><td colspan="8" class="empty-cell">目前沒有符合條件的候選股。</td></tr>';
      return;
    }

    rows.innerHTML = visible.map((item) => `
      <tr>
        <td class="stock-cell"><strong>${esc(item.symbol)} ${esc(item.name)}</strong><span>${esc(item.sector || item.reason || "")}</span></td>
        <td>${esc((item.robotName || "").replace("機器人", ""))}</td>
        <td><span class="score-pill${Number(item.signalScore) >= 80 ? " hot" : ""}">${number(item.signalScore)}</span></td>
        <td>${number(item.lots)}</td>
        <td>${number(item.entry, 2)}</td>
        <td>${number(item.stopLoss, 2)}</td>
        <td>${number(item.takeProfit, 2)}</td>
        <td><span class="risk-pill ${riskClass(item.risk)}">${esc(item.risk)}</span></td>
      </tr>
    `).join("");
  }

  function renderHoldings() {
    const rows = byId("holdingRows");
    if (!rows) return;
    const holdings = state.data.holdings || [];
    if (!holdings.length) {
      rows.innerHTML = '<tr><td colspan="7" class="empty-cell">目前 AI 紙上交易沒有持倉。</td></tr>';
      return;
    }
    rows.innerHTML = holdings.map((item) => `
      <tr>
        <td class="stock-cell"><strong>${esc(item.symbol)} ${esc(item.name)}</strong><span>${esc(item.robotName)}</span></td>
        <td>${esc(item.robotName)}</td>
        <td>${fmtDate(item.buyDate)}<span class="subtle-cell">${number(item.heldDays)} 日</span></td>
        <td>${number(item.lots)}</td>
        <td>${number(item.cost, 2)}</td>
        <td>${number(item.price, 2)}</td>
        <td class="${Number(item.unrealizedPnl) < 0 ? "negative" : "positive"}">${money(item.unrealizedPnl)}</td>
      </tr>
    `).join("");
  }

  function renderTodayTrades() {
    const list = byId("todayTradeRows");
    if (!list) return;
    const trades = state.data.todayTrades || [];
    if (!trades.length) {
      list.innerHTML = '<div class="empty-note">今天沒有新的買進或賣出，原持股會延續監控。</div>';
      return;
    }
    list.innerHTML = trades.map((item) => {
      const isSell = item.side === "SELL";
      const amount = isSell ? money(item.realizedPnl) : `${number(item.buyPrice, 2)} / ${number(item.lots)} 張`;
      const dateLine = isSell ? `${fmtDate(item.buyDate)} → ${fmtDate(item.sellDate)}` : `${fmtDate(item.buyDate)} 買進`;
      return `
        <div class="sold-item">
          <div>
            <strong>${esc(item.symbol)} ${esc(item.name || "")}</strong>
            <span><b class="side-pill ${isSell ? "sell" : "buy"}">${isSell ? "賣出" : "買進"}</b>${esc(item.robotName || "")}</span>
            <em>${esc(dateLine)} · ${esc(item.reason || "")}</em>
          </div>
          <span class="pnl ${isSell && Number(item.realizedPnl) < 0 ? "negative" : "positive"}">${amount}</span>
        </div>
      `;
    }).join("");
  }

  function renderClosedTrades() {
    const list = byId("soldRows");
    if (!list) return;
    const trades = state.data.closedTrades || [];
    if (!trades.length) {
      list.innerHTML = '<div class="empty-note">目前 AI 紙上交易尚無賣出紀錄。</div>';
      return;
    }
    list.innerHTML = trades.map((item) => `
      <div class="sold-item">
        <div>
          <strong>${esc(item.symbol)} ${esc(item.name || "")}</strong>
          <span>${esc(item.robotName)}</span>
          <em>${fmtDate(item.buyDate)} → ${fmtDate(item.sellDate)} · ${esc(item.reason)}</em>
        </div>
        <span class="pnl ${Number(item.realizedPnl) < 0 ? "negative" : "positive"}">${money(item.realizedPnl)}</span>
      </div>
    `).join("");
  }

  function renderRisk() {
    const risk = state.data.risk || {};
    const values = [
      ["總持倉金額", money(risk.totalPositionValue)],
      ["今日可買額度", money(risk.buyingPower)],
      ["單一策略曝險", risk.singleStrategyExposure ?? "等待模擬資料"],
      ["最大允許回撤", risk.maxAllowedDrawdown ?? "-12%"],
    ];
    const list = byId("riskList");
    if (list) {
      list.innerHTML = values.map(([label, value]) => `<div><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join("");
    }
    setText("riskLevel", risk.level || "等待模擬資料");
  }

  function renderTaskFlow() {
    const flow = byId("taskFlow");
    if (!flow) return;
    flow.innerHTML = (state.data.taskFlow || []).map((item) => `
      <li class="${esc(item.state)}"><span></span>${esc(item.label)}</li>
    `).join("");
  }

  function renderNotes() {
    const note = byId("dataNote");
    const notes = state.data.meta?.notes || [];
    if (note) note.textContent = notes.join(" ");
  }

  function renderAll() {
    renderSummary();
    renderRobots();
    renderSelectedRobot();
    renderCandidates();
    renderHoldings();
    renderTodayTrades();
    renderClosedTrades();
    renderRisk();
    renderTaskFlow();
    renderNotes();
  }

  function bindEvents() {
    byId("robotList")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-robot-id]");
      if (!button) return;
      state.selectedRobotId = button.dataset.robotId;
      renderRobots();
      renderSelectedRobot();
      renderCandidates();
    });

    document.querySelectorAll("[data-candidate-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.candidateFilter = button.dataset.candidateFilter || "all";
        document.querySelectorAll("[data-candidate-filter]").forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        renderCandidates();
      });
    });

    byId("refreshSignalButton")?.addEventListener("click", loadData);
  }

  async function loadData() {
    try {
      const response = await fetch("../data/quant-robots.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`Cannot load quant data: ${response.status}`);
      const data = await response.json();
      state.data = data;
      state.selectedRobotId = data.robots?.[0]?.id || "ma-breakout";
    } catch (error) {
      console.warn("[AI Stock Lab] quant robot data unavailable", error);
      state.data = fallbackData;
      state.selectedRobotId = fallbackData.robots[0].id;
    } finally {
      renderAll();
      document.body.classList.remove("dashboard-page-loading");
    }
  }

  function init() {
    bindEvents();
    loadData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
