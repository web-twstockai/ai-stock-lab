(function () {
  const robots = [
    {
      id: "ma-breakout",
      name: "均線突破機器人",
      short: "MA20 突破 + 放量確認",
      desc: "站上短中期均線且量能放大，尋找趨勢初段的隔日買點。",
      status: "等待開盤",
      version: "v2.8",
      params: "MA20 + 量能 1.6x",
      winRate: 64.2,
      profitFactor: 1.86,
      drawdown: "-7.4%",
      pnl: "+38,400",
      candidates: 4,
      next: "等待明日開盤",
    },
    {
      id: "rsi-rebound",
      name: "RSI 反彈機器人",
      short: "超賣反彈 + 站回 5 日線",
      desc: "尋找短線超賣後重新站回均線的修復型交易。",
      status: "完成優化",
      version: "v2.3",
      params: "RSI < 31 + MA5",
      winRate: 58.7,
      profitFactor: 1.52,
      drawdown: "-8.9%",
      pnl: "+18,900",
      candidates: 3,
      next: "觀察成交量",
    },
    {
      id: "macd-momentum",
      name: "MACD 動能機器人",
      short: "DIF 翻正 + 柱狀體擴張",
      desc: "追蹤動能由弱轉強的標的，偏向波段初升段。",
      status: "回測完成",
      version: "v1.9",
      params: "DIF > 0 + 斜率轉正",
      winRate: 61.1,
      profitFactor: 1.69,
      drawdown: "-6.8%",
      pnl: "+31,200",
      candidates: 2,
      next: "產生交易計畫",
    },
    {
      id: "volume-surge",
      name: "量價爆發機器人",
      short: "爆量長紅 + 籌碼集中",
      desc: "專注量價同步放大的強勢股，但會嚴格控管追高風險。",
      status: "監控中",
      version: "v3.1",
      params: "量能 2.2x + 實體 K",
      winRate: 56.9,
      profitFactor: 1.45,
      drawdown: "-10.6%",
      pnl: "+21,700",
      candidates: 2,
      next: "降低建議張數",
    },
    {
      id: "bollinger-reversal",
      name: "布林反轉機器人",
      short: "下軌反轉 + 波動收斂",
      desc: "從波動過度擴張後的收斂位置尋找反轉交易。",
      status: "完成優化",
      version: "v2.1",
      params: "BB 下軌 + ATR 收斂",
      winRate: 59.4,
      profitFactor: 1.57,
      drawdown: "-9.1%",
      pnl: "+12,600",
      candidates: 1,
      next: "等待價格確認",
    },
    {
      id: "chip-follow",
      name: "籌碼跟隨機器人",
      short: "外資連買 + 融資下降",
      desc: "追蹤籌碼連續改善、股價尚未完全反映的標的。",
      status: "資料同步",
      version: "v1.7",
      params: "外資 3 日 + 融資減",
      winRate: 62.8,
      profitFactor: 1.74,
      drawdown: "-7.9%",
      pnl: "+26,100",
      candidates: 2,
      next: "等待籌碼更新",
    },
    {
      id: "day-swing",
      name: "隔日沖機器人",
      short: "短線強勢 + 隔日出場",
      desc: "偏短週期策略，重視進場流動性與隔日賣壓風險。",
      status: "風控降權",
      version: "v1.4",
      params: "開高量能 + 當沖比",
      winRate: 53.6,
      profitFactor: 1.18,
      drawdown: "-12.4%",
      pnl: "-8,300",
      candidates: 1,
      next: "暫停加碼",
    },
    {
      id: "trend-swing",
      name: "波段趨勢機器人",
      short: "多頭排列 + 回調不破",
      desc: "持有週期較長，使用趨勢續航與回撤控管篩選標的。",
      status: "持倉監控",
      version: "v2.6",
      params: "MA 多頭 + 回調量縮",
      winRate: 66.5,
      profitFactor: 2.04,
      drawdown: "-6.1%",
      pnl: "+52,800",
      candidates: 3,
      next: "持倉續抱",
    },
  ];

  const candidates = [
    ["2330", "台積電", "ma-breakout", 88, 1, "980-990", "955", "1030", "中"],
    ["2454", "聯發科", "macd-momentum", 84, 1, "1320-1340", "1285", "1405", "中"],
    ["2317", "鴻海", "chip-follow", 81, 2, "188-191", "181", "204", "低"],
    ["3661", "世芯-KY", "volume-surge", 79, 1, "2860-2910", "2760", "3060", "高"],
    ["3034", "聯詠", "trend-swing", 78, 1, "612-620", "592", "650", "中"],
    ["2379", "瑞昱", "rsi-rebound", 75, 1, "545-552", "528", "586", "中"],
    ["2308", "台達電", "trend-swing", 74, 1, "372-378", "360", "398", "低"],
    ["3017", "奇鋐", "volume-surge", 73, 1, "725-738", "700", "780", "高"],
    ["6415", "矽力-KY", "bollinger-reversal", 71, 1, "486-494", "468", "525", "中"],
    ["3443", "創意", "macd-momentum", 69, 1, "1180-1200", "1145", "1265", "高"],
    ["2357", "華碩", "chip-follow", 68, 1, "565-572", "548", "610", "低"],
    ["8046", "南電", "rsi-rebound", 66, 1, "158-162", "153", "174", "中"],
  ];

  const holdings = [
    ["2330", "台積電", "均線突破", 1, "966", "995", "+29,000"],
    ["2317", "鴻海", "籌碼跟隨", 2, "181", "190.5", "+19,000"],
    ["2379", "瑞昱", "RSI 反彈", 1, "556", "548", "-8,000"],
    ["3034", "聯詠", "波段趨勢", 1, "604", "611", "+7,000"],
  ];

  const soldTrades = [
    ["2382", "廣達", "量價爆發", "+24,500", "達到停利"],
    ["2603", "長榮", "MACD 動能", "+18,200", "訊號轉弱"],
    ["1590", "亞德客-KY", "布林反轉", "-6,400", "觸發停損"],
    ["2881", "富邦金", "籌碼跟隨", "+11,800", "分批停利"],
  ];

  let selectedRobotId = "ma-breakout";
  let candidateFilter = "all";

  function byId(id) {
    return document.getElementById(id);
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function robotById(id) {
    return robots.find((robot) => robot.id === id) || robots[0];
  }

  function robotIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="6" width="14" height="11" rx="4" stroke="currentColor" stroke-width="2"/><path d="M8 21h8M12 3v3M9 11h.01M15 11h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  function renderRobots() {
    const list = byId("robotList");
    if (!list) return;
    list.innerHTML = robots.map((robot) => `
      <button class="robot-button${robot.id === selectedRobotId ? " is-active" : ""}" type="button" data-robot-id="${esc(robot.id)}">
        <span class="mini-bot">${robotIcon()}</span>
        <span>
          <strong>${esc(robot.name)}</strong>
          <span>${esc(robot.short)}</span>
        </span>
        <em class="robot-score">${robot.winRate.toFixed(1)}%</em>
      </button>
    `).join("");
  }

  function renderSelectedRobot() {
    const robot = robotById(selectedRobotId);
    byId("selectedRobotName").textContent = robot.name;
    byId("selectedRobotDesc").textContent = robot.desc;
    byId("selectedVersion").textContent = robot.version;
    byId("selectedParams").textContent = robot.params;
    byId("selectedNext").textContent = robot.next;
    byId("selectedRobotStats").innerHTML = [
      ["近期勝率", `${robot.winRate.toFixed(1)}%`, ""],
      ["Profit Factor", robot.profitFactor.toFixed(2), ""],
      ["最大回撤", robot.drawdown, "negative"],
      ["近 20 筆損益", robot.pnl, robot.pnl.startsWith("-") ? "negative" : "positive"],
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
    const visible = candidates.filter((item) => {
      if (candidateFilter === "high") return item[3] >= 78;
      if (candidateFilter === "selected") return item[2] === selectedRobotId;
      return true;
    });
    rows.innerHTML = visible.map(([symbol, name, robotId, score, lots, entry, stopLoss, takeProfit, risk]) => {
      const robot = robotById(robotId);
      return `
        <tr>
          <td class="stock-cell"><strong>${esc(symbol)} ${esc(name)}</strong><span>${esc(robot.short)}</span></td>
          <td>${esc(robot.name.replace("機器人", ""))}</td>
          <td><span class="score-pill${score >= 80 ? " hot" : ""}">${score}</span></td>
          <td>${lots}</td>
          <td>${esc(entry)}</td>
          <td>${esc(stopLoss)}</td>
          <td>${esc(takeProfit)}</td>
          <td><span class="risk-pill ${riskClass(risk)}">${esc(risk)}</span></td>
        </tr>
      `;
    }).join("");
  }

  function renderHoldings() {
    const rows = byId("holdingRows");
    if (!rows) return;
    rows.innerHTML = holdings.map(([symbol, name, robot, lots, cost, price, pnl]) => `
      <tr>
        <td class="stock-cell"><strong>${esc(symbol)} ${esc(name)}</strong><span>${esc(robot)}</span></td>
        <td>${esc(robot)}</td>
        <td>${lots}</td>
        <td>${esc(cost)}</td>
        <td>${esc(price)}</td>
        <td class="${pnl.startsWith("-") ? "negative" : "positive"}">${esc(pnl)}</td>
      </tr>
    `).join("");
  }

  function renderSoldTrades() {
    const list = byId("soldRows");
    if (!list) return;
    list.innerHTML = soldTrades.map(([symbol, robot, pnl, reason]) => `
      <div class="sold-item">
        <div>
          <strong>${esc(symbol)}</strong>
          <span>${esc(robot)}</span>
          <em>${esc(reason)}</em>
        </div>
        <span class="pnl ${pnl.startsWith("-") ? "negative" : "positive"}">${esc(pnl)}</span>
      </div>
    `).join("");
  }

  function bindEvents() {
    byId("robotList")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-robot-id]");
      if (!button) return;
      selectedRobotId = button.dataset.robotId;
      renderRobots();
      renderSelectedRobot();
      renderCandidates();
    });

    document.querySelectorAll("[data-candidate-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        candidateFilter = button.dataset.candidateFilter || "all";
        document.querySelectorAll("[data-candidate-filter]").forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        renderCandidates();
      });
    });

    byId("refreshSignalButton")?.addEventListener("click", () => {
      const chip = document.querySelector(".sync-chip");
      if (chip) {
        const now = new Date();
        const time = now.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false });
        chip.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 7v5h-5M4 17v-5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 12a7 7 0 0 0-12.1-4.8M5 12a7 7 0 0 0 12.1 4.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' + `今日 ${time} 已更新`;
      }
    });
  }

  function render() {
    byId("metricRobots").textContent = String(robots.length);
    byId("metricCandidates").textContent = String(candidates.length);
    renderRobots();
    renderSelectedRobot();
    renderCandidates();
    renderHoldings();
    renderSoldTrades();
    bindEvents();
    document.body.classList.remove("dashboard-page-loading");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
