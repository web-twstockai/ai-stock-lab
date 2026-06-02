const fallbackStocks = [
  {
    symbol: "2330",
    name: "台積電",
    sector: "半導體",
    strategy: "momentum",
    score: 92,
    alpha: 8.4,
    winRate: 74,
    risk: "mid",
    price: [890, 904, 918, 912, 925, 948, 955, 972, 986, 1004, 995, 1018],
    thesis: "AI 伺服器需求維持強勢，外資連續買超且 20 日均線上彎。量價結構偏向趨勢延續，適合用分批方式追蹤突破後的續航。",
    invalidation: "跌破 20 日均線且三日內無法收復，或外資買超轉為連續賣超。"
  },
  {
    symbol: "2382",
    name: "廣達",
    sector: "AI 伺服器",
    strategy: "growth",
    score: 89,
    alpha: 9.1,
    winRate: 71,
    risk: "mid",
    price: [256, 262, 258, 266, 279, 282, 291, 286, 294, 306, 318, 324],
    thesis: "營收年增率與毛利率同步改善，法人籌碼回補速度快於同族群。短線震盪較大，但成長因子分數仍位於前段。",
    invalidation: "月營收動能低於同業中位數，或跌破大量紅 K 的低點。"
  },
  {
    symbol: "3661",
    name: "世芯-KY",
    sector: "IC 設計",
    strategy: "momentum",
    score: 87,
    alpha: 7.8,
    winRate: 69,
    risk: "high",
    price: [2970, 3045, 3110, 3060, 3200, 3375, 3310, 3440, 3525, 3480, 3610, 3740],
    thesis: "高價股動能恢復，ASIC 題材仍具資金聚焦效果。訊號品質好，但波動偏高，部位需要比大型權值股更小。",
    invalidation: "成交量放大但價格無法創高，或波動率突破近半年 80 分位。"
  },
  {
    symbol: "3034",
    name: "聯詠",
    sector: "IC 設計",
    strategy: "value",
    score: 82,
    alpha: 5.7,
    winRate: 68,
    risk: "low",
    price: [518, 512, 506, 514, 526, 531, 528, 536, 542, 550, 548, 556],
    thesis: "估值分位偏低，股息殖利率提供下檔支撐。當面板與消費電子庫存回補時，具備反轉型候選資格。",
    invalidation: "本益比折價收斂前，月營收再度轉弱並跌破季線。"
  },
  {
    symbol: "2308",
    name: "台達電",
    sector: "電源管理",
    strategy: "chip",
    score: 84,
    alpha: 6.2,
    winRate: 67,
    risk: "low",
    price: [342, 348, 351, 356, 361, 359, 366, 372, 379, 383, 390, 398],
    thesis: "電源、散熱與資料中心題材形成多因子共振，投信持股穩定增加。相對強弱優於大盤，適合作為核心追蹤名單。",
    invalidation: "投信連續賣超五日，或相對強弱跌回 50 以下。"
  },
  {
    symbol: "2603",
    name: "長榮",
    sector: "航運",
    strategy: "value",
    score: 76,
    alpha: 4.8,
    winRate: 61,
    risk: "mid",
    price: [174, 170, 168, 171, 176, 181, 179, 184, 187, 185, 190, 194],
    thesis: "高現金殖利率與運價彈性提供反轉題材，短線資金有回流跡象。適合以價值反轉模型觀察，不宜追高。",
    invalidation: "運價指數連續兩周回落，且價格跌破前波整理平台。"
  },
  {
    symbol: "2881",
    name: "富邦金",
    sector: "金融",
    strategy: "value",
    score: 73,
    alpha: 3.2,
    winRate: 64,
    risk: "low",
    price: [78, 79, 78.6, 80, 81, 80.5, 81.8, 82.4, 83.1, 82.7, 83.6, 84.5],
    thesis: "金融股防禦屬性佳，壽險淨值與股息預期支撐評價。訊號不爆發，但適合降低組合波動。",
    invalidation: "殖利率優勢消失，或金融族群相對強弱跌破季均線。"
  },
  {
    symbol: "6446",
    name: "藥華藥",
    sector: "生技醫療",
    strategy: "growth",
    score: 81,
    alpha: 6.9,
    winRate: 63,
    risk: "high",
    price: [612, 628, 621, 645, 638, 660, 674, 690, 682, 704, 719, 733],
    thesis: "營收成長與海外市場擴張是主要動能，資金偏好成長題材時容易被納入攻擊名單。波動高，需搭配停損規則。",
    invalidation: "營收年增率低於模型門檻，或法人籌碼轉為分歧。"
  },
  {
    symbol: "2345",
    name: "智邦",
    sector: "網通",
    strategy: "chip",
    score: 85,
    alpha: 6.5,
    winRate: 70,
    risk: "mid",
    price: [520, 528, 535, 531, 548, 562, 558, 570, 585, 592, 588, 604],
    thesis: "交換器升級循環延續，主力與法人籌碼同步偏多。突破整理區後，量能若能維持，續漲機率提高。",
    invalidation: "三大法人合計轉賣，且股價跌回前箱型上緣。"
  },
  {
    symbol: "8454",
    name: "富邦媒",
    sector: "電商",
    strategy: "value",
    score: 66,
    alpha: 2.1,
    winRate: 55,
    risk: "mid",
    price: [328, 320, 315, 318, 323, 319, 325, 331, 329, 335, 338, 340],
    thesis: "估值已修正，但營運動能仍待恢復。模型暫列觀察，除非營收或毛利率出現明確轉折，否則不列優先。",
    invalidation: "低基期反彈失敗，且短中期均線重新轉空。"
  }
];

let stocks = fallbackStocks;
let dataMeta = null;
let modelLibrary = [];

const strategies = [
  { id: "momentum", title: "趨勢動能", desc: "價格突破、相對強弱、量能擴張與法人回補同步出現。", base: 73 },
  { id: "value", title: "價值反轉", desc: "估值折價、殖利率保護、籌碼止穩後等待均值回歸。", base: 64 },
  { id: "chip", title: "籌碼轉強", desc: "投信、外資與主力買盤形成連續性，追蹤持股變化。", base: 69 },
  { id: "growth", title: "成長爆發", desc: "營收、毛利率與題材熱度同時升溫，偏向攻擊配置。", base: 71 }
];

const state = {
  selectedSymbol: stocks[0].symbol,
  strategy: "all",
  sector: "all",
  market: "all",
  minScore: 72,
  excludeHighRisk: true,
  minRevenueYoy: 20,
  minTurnover: 100000000,
  requireForeignBuy: true,
  requireAboveMa: true,
  requireNearHigh: true,
  view: "home",
  backtestStrategy: "growth_acceleration",
  backtestTop: 20,
  backtestExcludeHighRisk: true,
  sortKey: "score",
  sortDirection: "desc",
  period: 20,
  watchlist: new Set()
};

const sectorSelect = document.querySelector("#sectorSelect");
const marketSelect = document.querySelector("#marketSelect");
const strategySelect = document.querySelector("#strategySelect");
const scoreRange = document.querySelector("#scoreRange");
const scoreLabel = document.querySelector("#scoreLabel");
const riskToggle = document.querySelector("#riskToggle");
const revenueYoyInput = document.querySelector("#revenueYoyInput");
const turnoverInput = document.querySelector("#turnoverInput");
const foreignToggle = document.querySelector("#foreignToggle");
const maToggle = document.querySelector("#maToggle");
const highToggle = document.querySelector("#highToggle");
const searchInput = document.querySelector("#searchInput");
const stockTable = document.querySelector("#stockTable");
const heatmap = document.querySelector("#heatmap");
const strategyCards = document.querySelector("#strategyCards");
const toast = document.querySelector("#toast");
const backtestStrategySelect = document.querySelector("#backtestStrategySelect");
const backtestTopInput = document.querySelector("#backtestTopInput");
const backtestRiskToggle = document.querySelector("#backtestRiskToggle");

function uniqueSectors() {
  return [...new Set(stocks.map((stock) => stock.sector))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
}

function riskLabel(risk) {
  return { low: "低", mid: "中", high: "高" }[risk];
}

function formatPercent(value, digits = 1) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "--";
  return `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`;
}

function formatPlainPercent(value, digits = 1) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "--";
  return `${value.toFixed(digits)}%`;
}

function formatTurnover(value) {
  if (!value) return "--";
  if (value >= 100000000) return `${(value / 100000000).toFixed(1)} 億`;
  return `${Math.round(value / 10000)} 萬`;
}

function formatShares(value) {
  if (value === undefined || value === null) return "--";
  return `${Math.round(value / 1000).toLocaleString("zh-Hant")} 張`;
}

function strategyTitle(id) {
  return strategies.find((item) => item.id === id)?.title || id;
}

function selectedBacktestModel() {
  return modelLibrary.find((model) => model.id === state.backtestStrategy);
}

function backtestName(id) {
  return selectedBacktestModel()?.name || strategyTitle(id);
}

function modelAccess(model, index = 0) {
  const basicFamilies = ["基本面分析", "技術指標"];
  const basicIds = new Set(["growth_acceleration", "turtle_20d_breakout", "ma_trend_filter", "liquidity_quality"]);
  if (basicIds.has(model.id) || (basicFamilies.includes(model.family) && index % 3 === 0)) {
    return { label: "Basic", locked: false };
  }
  return { label: "Pro", locked: true };
}

function filteredStocks() {
  const query = searchInput.value.trim().toLowerCase();
  return stocks
    .filter((stock) => state.strategy === "all" || stock.strategy === state.strategy)
    .filter((stock) => state.sector === "all" || stock.sector === state.sector)
    .filter((stock) => state.market === "all" || stock.market === state.market)
    .filter((stock) => stock.score >= state.minScore)
    .filter((stock) => !state.excludeHighRisk || stock.risk !== "high")
    .filter((stock) => (stock.revenueYoy ?? -999) >= state.minRevenueYoy)
    .filter((stock) => (stock.avgTurnover20d ?? 0) >= state.minTurnover)
    .filter((stock) => !state.requireForeignBuy || (stock.foreign5d ?? 0) > 0)
    .filter((stock) => !state.requireAboveMa || (stock.aboveMa20 && stock.aboveMa60))
    .filter((stock) => !state.requireNearHigh || stock.is60dHigh || (stock.distanceTo60dHigh ?? -999) >= -3)
    .filter((stock) => {
      if (!query) return true;
      return [stock.symbol, stock.name, stock.sector].some((value) => value.toLowerCase().includes(query));
    })
    .sort((a, b) => {
      const first = a[state.sortKey];
      const second = b[state.sortKey];
      const direction = state.sortDirection === "asc" ? 1 : -1;
      if (first === undefined || first === null) return 1;
      if (second === undefined || second === null) return -1;
      if (typeof first === "string") return first.localeCompare(second, "zh-Hant") * direction;
      return (first - second) * direction;
    });
}

function updateMetrics(rows) {
  const count = rows.length;
  const averageAlpha = count ? rows.reduce((sum, stock) => sum + stock.alpha, 0) / count : 0;
  const medianWin = count ? [...rows].sort((a, b) => a.winRate - b.winRate)[Math.floor(count / 2)].winRate : 0;
  const riskScore = rows.reduce((sum, stock) => sum + ({ low: 1, mid: 2, high: 3 }[stock.risk]), 0) / Math.max(count, 1);
  document.querySelector("#metricCount").textContent = count;
  document.querySelector("#metricAlpha").textContent = formatPercent(averageAlpha);
  document.querySelector("#metricWin").textContent = `${medianWin}%`;
  document.querySelector("#metricRisk").textContent = riskScore < 1.6 ? "偏低" : riskScore < 2.3 ? "中性" : "偏高";
}

function renderTable(rows) {
  stockTable.innerHTML = rows
    .map(
      (stock) => `
        <tr data-symbol="${stock.symbol}" class="${stock.symbol === state.selectedSymbol ? "selected" : ""}">
          <td>
            <div class="stock-symbol">${stock.symbol}</div>
            <div class="stock-name">${stock.market || ""} · ${strategyTitle(stock.strategy)}</div>
          </td>
          <td>${stock.name}</td>
          <td><span class="tag">${stock.sector}</span></td>
          <td>
            <div class="bar-cell">
              <strong>${stock.score}</strong>
              <span class="bar"><span style="width:${stock.score}%"></span></span>
            </div>
          </td>
          <td class="${stock.return20d > 0 ? "up" : ""}">${formatPercent(stock.return20d, 1)}</td>
          <td>${formatPercent(stock.distanceTo60dHigh, 1)}</td>
          <td>${formatTurnover(stock.avgTurnover20d)}</td>
          <td><span class="risk-pill ${stock.risk}">${riskLabel(stock.risk)}</span></td>
        </tr>
      `
    )
    .join("");

  stockTable.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedSymbol = row.dataset.symbol;
      openStockPage(row.dataset.symbol);
    });
  });
}

function renderHeatmap() {
  const sectors = uniqueSectors().map((sector) => {
    const members = stocks.filter((stock) => stock.sector === sector);
    const score = members.reduce((sum, stock) => sum + stock.score + stock.alpha * 2, 0) / members.length;
    return { sector, score, count: members.length };
  });

  heatmap.innerHTML = sectors
    .sort((a, b) => b.score - a.score)
    .map((item) => {
      const normalized = Math.max(0, Math.min(1, (item.score - 64) / 34));
      const displayScore = Math.min(100, Math.round(item.score));
      const hue = Math.round(8 + normalized * 164);
      const light = Math.round(36 + normalized * 8);
      return `
        <button class="heat-cell" type="button" data-sector="${item.sector}" style="background:hsl(${hue} 58% ${light}%)">
          <span>${item.sector}</span>
          <strong>${displayScore}</strong>
          <span>${item.count} 檔候選</span>
        </button>
      `;
    })
    .join("");

  heatmap.querySelectorAll(".heat-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      state.sector = cell.dataset.sector;
      sectorSelect.value = state.sector;
      render();
    });
  });
}

function renderStrategies() {
  strategyCards.innerHTML = strategies
    .map((strategy) => {
      const periodBoost = state.period === 20 ? 0 : state.period === 60 ? 4 : -2;
      const matching = stocks.filter((stock) => stock.strategy === strategy.id);
      const averageScore = Math.round(
        (matching.reduce((sum, stock) => sum + stock.score, 0) / Math.max(matching.length, 1)) + periodBoost
      );
      return `
        <button class="strategy-card" type="button" data-strategy="${strategy.id}">
          <div>
            <strong>${strategy.title}</strong>
            <p>${strategy.desc}</p>
          </div>
          <span class="score-pill">${averageScore}</span>
        </button>
      `;
    })
    .join("");

  strategyCards.querySelectorAll(".strategy-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.strategy = card.dataset.strategy;
      strategySelect.value = state.strategy;
      openBacktestPage(card.dataset.strategy);
    });
  });
}

function renderDetail() {
  const stock = stocks.find((item) => item.symbol === state.selectedSymbol) || filteredStocks()[0] || stocks[0];
  const title = strategyTitle(stock.strategy);
  const closeLine = stock.close ? `<div><dt>收盤價</dt><dd>${stock.close}</dd></div>` : "";
  const returnLine = stock.return20d !== undefined ? `<div><dt>20 日報酬</dt><dd>${formatPercent(stock.return20d, 2)}</dd></div>` : "";
  const highLine = stock.distanceTo60dHigh !== undefined ? `<div><dt>距 60 日高點</dt><dd>${formatPercent(stock.distanceTo60dHigh, 2)}</dd></div>` : "";
  const turnoverLine = stock.avgTurnover20d ? `<div><dt>20 日均成交額</dt><dd>${formatTurnover(stock.avgTurnover20d)}</dd></div>` : "";
  const peLine = stock.pe ? `<div><dt>本益比</dt><dd>${stock.pe}</dd></div>` : "";
  const yieldLine = stock.dividendYield !== undefined ? `<div><dt>殖利率</dt><dd>${stock.dividendYield}%</dd></div>` : "";
  state.selectedSymbol = stock.symbol;
  document.querySelector("#detailTitle").textContent = `${stock.symbol} ${stock.name}`;
  document.querySelector("#detailThesis").textContent = stock.thesis;
  document.querySelector("#detailInvalidation").textContent = stock.invalidation;
  document.querySelector("#detailStats").innerHTML = `
    <div><dt>市場</dt><dd>${stock.market || "--"}</dd></div>
    <div><dt>策略</dt><dd>${title}</dd></div>
    <div><dt>綜合分數</dt><dd>${stock.score}</dd></div>
    <div><dt>預估 Alpha</dt><dd>${formatPercent(stock.alpha)}</dd></div>
    <div><dt>歷史勝率</dt><dd>${stock.winRate}%</dd></div>
    ${closeLine}
    ${returnLine}
    ${highLine}
    ${turnoverLine}
    ${peLine}
    ${yieldLine}
  `;
  document.querySelector("#watchBtn").textContent = state.watchlist.has(stock.symbol) ? "已追蹤" : "加入追蹤";
  renderChart(stock.priceSeries || stock.price, "#priceChart");
}

function renderChart(prices, target = "#priceChart") {
  if (!prices || prices.length < 2) return;
  const width = 640;
  const height = 238;
  const padding = 22;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const points = prices
    .map((price, index) => {
      const x = padding + (index / (prices.length - 1)) * (width - padding * 2);
      const y = height - padding - ((price - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;
  document.querySelector(target).innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="近 12 期價格走勢">
      <polygon points="${areaPoints}" fill="rgba(15,143,131,0.16)"></polygon>
      <polyline points="${points}" fill="none" stroke="#0f8f83" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <circle cx="${points.split(" ").at(-1).split(",")[0]}" cy="${points.split(" ").at(-1).split(",")[1]}" r="7" fill="#096b62"></circle>
      <text x="${width - padding}" y="28" text-anchor="end" fill="#14202b" font-size="16" font-weight="800">${prices.at(-1)}</text>
      <text x="${padding}" y="${height - 10}" fill="#667381" font-size="12">${prices.length} 期相對走勢</text>
    </svg>
  `;
}

function renderLineChart(values, target, options = {}) {
  if (!values || values.length < 2) return;
  const width = 760;
  const height = options.height || 360;
  const padding = 28;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values
    .map((value, index) => {
      const x = padding + (index / (values.length - 1)) * (width - padding * 2);
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;
  const last = values.at(-1);
  document.querySelector(target).innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${options.label || "走勢圖"}">
      <polygon points="${areaPoints}" fill="rgba(47,112,183,0.14)"></polygon>
      <polyline points="${points}" fill="none" stroke="${options.color || "#2f70b7"}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <text x="${width - padding}" y="30" text-anchor="end" fill="#14202b" font-size="16" font-weight="800">${last.toFixed(1)}</text>
      <text x="${padding}" y="${height - 10}" fill="#667381" font-size="12">${options.caption || "等權指數，起始 100"}</text>
    </svg>
  `;
}

function renderWatchlist() {
  const list = [...state.watchlist].map((symbol) => stocks.find((stock) => stock.symbol === symbol)).filter(Boolean);
  document.querySelector("#watchCount").textContent = `${list.length} 檔`;
  document.querySelector("#watchList").innerHTML = list.length
    ? list
        .map(
          (stock) => `
            <div class="watch-item">
              <div>
                <strong>${stock.symbol} ${stock.name}</strong>
                <span>${stock.market || ""} · ${stock.sector} · ${formatPercent(stock.alpha)} Alpha</span>
              </div>
              <button type="button" aria-label="移除 ${stock.name}" data-remove="${stock.symbol}">×</button>
            </div>
          `
        )
        .join("")
    : '<p class="watch-empty">點選候選股後加入追蹤，這裡會保留你的觀察名單。</p>';

  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.watchlist.delete(button.dataset.remove);
      render();
    });
  });
}

function factorClass(passed) {
  return passed ? "reason-item" : "reason-item muted";
}

function renderStockPage() {
  const stock = stocks.find((item) => item.symbol === state.selectedSymbol) || stocks[0];
  if (!stock) return;
  document.querySelector("#scannerView").classList.toggle("hidden-view", state.view === "stock");
  document.querySelector("#stockPage").hidden = state.view !== "stock";
  if (state.view !== "stock") return;

  document.querySelector("#stockPageTitle").textContent = `${stock.symbol} ${stock.name} · ${stock.market || ""}`;
  document.querySelector("#stockPageMetrics").innerHTML = `
    <div class="research-metric"><span>綜合分數</span><strong>${stock.score}</strong></div>
    <div class="research-metric"><span>20 日報酬</span><strong>${formatPercent(stock.return20d, 1)}</strong></div>
    <div class="research-metric"><span>距 60 日高點</span><strong>${formatPercent(stock.distanceTo60dHigh, 1)}</strong></div>
    <div class="research-metric"><span>20 日均成交額</span><strong>${formatTurnover(stock.avgTurnover20d)}</strong></div>
    <div class="research-metric"><span>外資 5 日</span><strong>${formatShares(stock.foreign5d)}</strong></div>
  `;
  renderChart(stock.priceSeries || stock.price, "#stockPageChart");

  const passes = stock.passes || {};
  document.querySelector("#stockPageReasons").innerHTML = `
    <div class="${factorClass(passes.revenueGrowth)}"><strong>營收加速</strong><span>月營收 YoY ${formatPercent(stock.revenueYoy, 1)}，MoM ${formatPercent(stock.revenueMom, 1)}</span></div>
    <div class="${factorClass(passes.liquidity)}"><strong>流動性達標</strong><span>20 日均成交金額 ${formatTurnover(stock.avgTurnover20d)}</span></div>
    <div class="${factorClass(passes.foreignBuy)}"><strong>籌碼轉強</strong><span>外資 5 日 ${formatShares(stock.foreign5d)}，三大法人 ${formatShares(stock.institutional5d)}</span></div>
    <div class="${factorClass(passes.aboveMa)}"><strong>均線結構</strong><span>收盤 ${stock.close}，MA20 ${stock.ma20}，MA60 ${stock.ma60}</span></div>
    <div class="${factorClass(passes.nearHigh)}"><strong>60 日新高</strong><span>60 日高點 ${stock.high60d}，目前距離 ${formatPercent(stock.distanceTo60dHigh, 1)}</span></div>
  `;

  document.querySelector("#stockPageFactors").innerHTML = [
    ["20 日報酬", formatPercent(stock.return20d, 1), stock.return20d > 0 ? "動能為正" : "動能偏弱"],
    ["60 日高點距離", formatPercent(stock.distanceTo60dHigh, 1), stock.near60dHigh ? "接近高點" : "離高點較遠"],
    ["20 日均成交額", formatTurnover(stock.avgTurnover20d), stock.passes?.liquidity ? "流動性達標" : "流動性不足"],
    ["20 日年化波動", formatPercent(stock.volatility20d, 1), riskLabel(stock.risk)],
    ["均線結構", `${stock.close} / ${stock.ma20} / ${stock.ma60}`, stock.passes?.aboveMa ? "站上 20/60 日線" : "均線尚未轉強"]
  ]
    .map(([label, value, note]) => `<div class="factor-row"><span>${label}</span><strong>${value}</strong><span>${note}</span></div>`)
    .join("");

  document.querySelector("#stockPageFundamentals").innerHTML = [
    ["月營收 YoY", formatPercent(stock.revenueYoy, 1), stock.passes?.revenueGrowth ? "成長達標" : "成長未達標"],
    ["月營收 MoM", formatPercent(stock.revenueMom, 1), stock.revenueMonth || "--"],
    ["PE / PB", `${stock.pe ?? "--"} / ${stock.pb ?? "--"}`, `殖利率 ${stock.dividendYield ?? "--"}%`],
    ["外資 5 日", formatShares(stock.foreign5d), stock.passes?.foreignBuy ? "買超" : "賣超或持平"],
    ["投信 / 自營商", `${formatShares(stock.trust5d)} / ${formatShares(stock.dealer5d)}`, `三大法人 ${formatShares(stock.institutional5d)}`]
  ]
    .map(([label, value, note]) => `<div class="factor-row"><span>${label}</span><strong>${value}</strong><span>${note}</span></div>`)
    .join("");

  const rankPercent = stock.sectorSize ? Math.max(6, 100 - ((stock.sectorRank - 1) / stock.sectorSize) * 100) : 50;
  document.querySelector("#stockPageRank").innerHTML = `
    <strong>${stock.market || ""} ${stock.sector} 第 ${stock.sectorRank || "--"} / ${stock.sectorSize || "--"} 名</strong>
    <div class="rank-meter"><span style="width:${rankPercent}%"></span></div>
    <p>同族群排名使用本次候選清單內的綜合分數排序，方便快速判斷資金是否集中在同一產業。</p>
  `;

  document.querySelector("#stockPageSimilar").innerHTML = (stock.similarSetups || [])
    .map((item) => `
      <div class="${factorClass(item.match)}">
        <strong>${item.label}</strong>
        <span>${item.condition}</span>
      </div>
    `)
    .join("");
  document.querySelector("#stockPageInvalidation").textContent = stock.invalidation;
}

function openStockPage(symbol) {
  state.selectedSymbol = symbol;
  state.view = "stock";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeStockPage() {
  state.view = "scanner";
  render();
}

function backtestMembers() {
  const selectedModel = selectedBacktestModel();
  return stocks
    .filter((stock) => selectedModel ? (stock.modelMatches || []).includes(selectedModel.id) : stock.strategy === state.backtestStrategy)
    .filter((stock) => !state.backtestExcludeHighRisk || stock.risk !== "high")
    .sort((a, b) => b.score - a.score)
    .slice(0, state.backtestTop);
}

function buildEqualWeightCurve(members) {
  const series = members.map((stock) => stock.priceSeries || stock.price).filter((prices) => prices && prices.length > 2);
  if (!series.length) return [];
  const length = Math.min(126, ...series.map((prices) => prices.length));
  return Array.from({ length }, (_, index) => {
    const normalized = series.map((prices) => {
      const slice = prices.slice(-length);
      return (slice[index] / slice[0]) * 100;
    });
    return normalized.reduce((sum, value) => sum + value, 0) / normalized.length;
  });
}

function maxDrawdown(values) {
  let peak = values[0] || 100;
  let drawdown = 0;
  values.forEach((value) => {
    peak = Math.max(peak, value);
    drawdown = Math.min(drawdown, (value / peak - 1) * 100);
  });
  return drawdown;
}

function renderBacktestPage() {
  document.querySelector("#backtestPage").hidden = state.view !== "backtest";
  if (state.view !== "backtest") return;
  const members = backtestMembers();
  const curve = buildEqualWeightCurve(members);
  const strategy = backtestName(state.backtestStrategy);
  document.querySelector("#backtestTitle").textContent = `${strategy} · 等權回測`;
  if (backtestStrategySelect.value !== state.backtestStrategy) backtestStrategySelect.value = state.backtestStrategy;
  backtestTopInput.value = state.backtestTop;
  backtestRiskToggle.checked = state.backtestExcludeHighRisk;

  const totalReturn = curve.length ? curve.at(-1) - 100 : 0;
  const returns = curve.slice(1).map((value, index) => value / curve[index] - 1);
  const annualVol = returns.length ? statisticsLikeStdev(returns) * Math.sqrt(252) * 100 : 0;
  const winRate = returns.length ? (returns.filter((value) => value > 0).length / returns.length) * 100 : 0;
  const dd = curve.length ? maxDrawdown(curve) : 0;
  document.querySelector("#backtestMetrics").innerHTML = `
    <div class="research-metric"><span>成分數</span><strong>${members.length}</strong></div>
    <div class="research-metric"><span>期間報酬</span><strong>${formatPercent(totalReturn, 1)}</strong></div>
    <div class="research-metric"><span>年化波動</span><strong>${formatPlainPercent(annualVol, 1)}</strong></div>
    <div class="research-metric"><span>最大回撤</span><strong>${formatPercent(dd, 1)}</strong></div>
    <div class="research-metric"><span>日勝率</span><strong>${formatPlainPercent(winRate, 1)}</strong></div>
  `;
  renderLineChart(curve, "#backtestChart", { label: `${strategy} 等權組合曲線`, color: "#0f8f83" });
  renderModelLibraryGrid();
  document.querySelector("#backtestConstituentCount").textContent = `${members.length} 檔`;
  document.querySelector("#backtestTable").innerHTML = members
    .map(
      (stock) => `
        <tr data-symbol="${stock.symbol}">
          <td><strong>${stock.symbol}</strong></td>
          <td>${stock.name}</td>
          <td>${stock.market}</td>
          <td>${stock.score}</td>
          <td>${formatPercent(stock.return20d, 1)}</td>
        </tr>
      `
    )
    .join("");
}

function statisticsLikeStdev(values) {
  if (!values.length) return 0;
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance = values.reduce((sum, value) => sum + (value - average) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function populateBacktestOptions() {
  const executableModels = modelLibrary.filter((model) => model.implemented !== false);
  const modelOptions = executableModels
    .map((model) => `<option value="${model.id}">${model.family} · ${model.name}</option>`)
    .join("");
  const legacyOptions = strategies
    .map((strategy) => `<option value="${strategy.id}">內建分類 · ${strategy.title}</option>`)
    .join("");
  backtestStrategySelect.innerHTML = `${modelOptions}${legacyOptions}`;
  if (!backtestStrategySelect.querySelector(`option[value="${state.backtestStrategy}"]`)) {
    state.backtestStrategy = executableModels[0]?.id || "growth";
  }
  backtestStrategySelect.value = state.backtestStrategy;
}

function renderModelLibraryGrid() {
  const grid = document.querySelector("#modelLibraryGrid");
  const count = document.querySelector("#modelLibraryCount");
  if (!grid || !count) return;
  const executable = modelLibrary.filter((model) => model.implemented !== false);
  count.textContent = `${modelLibrary.length} 個模型`;
  grid.innerHTML = executable
    .map((model, index) => {
      const matches = stocks.filter((stock) => (stock.modelMatches || []).includes(model.id)).length;
      const access = modelAccess(model, index);
      return `
        <button class="model-card ${model.id === state.backtestStrategy ? "active" : ""}" type="button" data-model="${model.id}">
          <span>${model.family} · ${model.style}</span>
          <strong>${model.name}</strong>
          <p>${model.summary}</p>
          <div class="model-tags">
            <span class="tag ${access.locked ? "locked-tag" : "open-tag"}">${access.label}</span>
            <span class="tag">${matches} 檔命中</span>
            <span class="tag">${model.rules.length} 條規則</span>
          </div>
        </button>
      `;
    })
    .join("");
  grid.querySelectorAll("[data-model]").forEach((button) => {
    button.addEventListener("click", () => {
      state.backtestStrategy = button.dataset.model;
      render();
    });
  });
}

function openBacktestPage(strategy = state.backtestStrategy) {
  state.backtestStrategy = strategy;
  state.view = "backtest";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeBacktestPage() {
  state.view = "scanner";
  render();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function loadRealCandidates() {
  const label = document.querySelector("#dataSourceLabel");
  try {
    const response = await fetch(`data/candidates.json?ts=${Date.now()}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.stocks) || payload.stocks.length === 0) {
      throw new Error("Empty candidate payload");
    }
    stocks = payload.stocks;
    dataMeta = payload.meta || null;
    const marketCounts = dataMeta?.candidateMarketCounts
      ? ` · 上市 ${dataMeta.candidateMarketCounts["上市"] || 0} / 上櫃 ${dataMeta.candidateMarketCounts["上櫃"] || 0}`
      : "";
    label.textContent = `${dataMeta?.source || "真實資料"} · ${dataMeta?.marketDate || "最新交易日"} · ${stocks.length} 檔候選${marketCounts}`;
  } catch (error) {
    stocks = fallbackStocks;
    dataMeta = null;
    label.textContent = "目前使用示範資料；執行 python tools/build_candidates.py 可更新真實候選清單";
  }
}

async function loadModelLibrary() {
  try {
    const response = await fetch(`data/model_library.json?ts=${Date.now()}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    modelLibrary = Array.isArray(payload.models) ? payload.models : [];
  } catch (error) {
    modelLibrary = [];
  }
}

function render() {
  scoreLabel.textContent = state.minScore;
  const rows = filteredStocks();
  if (!rows.some((stock) => stock.symbol === state.selectedSymbol) && rows[0]) {
    state.selectedSymbol = rows[0].symbol;
  }
  updateMetrics(rows);
  renderTable(rows);
  renderHeatmap();
  renderStrategies();
  renderDetail();
  renderWatchlist();
  renderStockPage();
  renderBacktestPage();
  document.querySelector("#homeView").classList.toggle("hidden-view", state.view !== "home");
  document.querySelector("#scannerTopbar").classList.toggle("hidden-view", state.view !== "scanner");
  document.querySelector("#scannerView").classList.toggle("hidden-view", state.view !== "scanner");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle(
      "active",
      item.dataset.view === state.view ||
        (state.view === "backtest" && item.dataset.view === "strategies") ||
        (state.view === "stock" && item.dataset.view === "research")
    );
  });
}

function setupControls() {
  sectorSelect.querySelectorAll("option:not([value='all'])").forEach((option) => option.remove());
  uniqueSectors().forEach((sector) => {
    const option = document.createElement("option");
    option.value = sector;
    option.textContent = sector;
    sectorSelect.append(option);
  });

  strategySelect.addEventListener("change", (event) => {
    state.strategy = event.target.value;
    render();
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.dataset.view === "strategies") {
        openBacktestPage(state.backtestStrategy);
      } else if (item.dataset.view === "research") {
        openStockPage(state.selectedSymbol);
      } else {
        state.view = item.dataset.view;
        render();
      }
    });
  });

  document.querySelectorAll("[data-home-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.homeAction;
      if (action === "scanner") {
        state.view = "scanner";
        render();
      }
      if (action === "backtest") openBacktestPage(state.backtestStrategy);
      if (action === "research") openStockPage(state.selectedSymbol);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  sectorSelect.addEventListener("change", (event) => {
    state.sector = event.target.value;
    render();
  });

  marketSelect.addEventListener("change", (event) => {
    state.market = event.target.value;
    render();
  });

  scoreRange.addEventListener("input", (event) => {
    state.minScore = Number(event.target.value);
    render();
  });

  riskToggle.addEventListener("change", (event) => {
    state.excludeHighRisk = event.target.checked;
    render();
  });

  revenueYoyInput.addEventListener("input", (event) => {
    state.minRevenueYoy = Number(event.target.value || 0);
    render();
  });

  turnoverInput.addEventListener("input", (event) => {
    state.minTurnover = Number(event.target.value || 0) * 100000000;
    render();
  });

  foreignToggle.addEventListener("change", (event) => {
    state.requireForeignBuy = event.target.checked;
    render();
  });

  maToggle.addEventListener("change", (event) => {
    state.requireAboveMa = event.target.checked;
    render();
  });

  highToggle.addEventListener("change", (event) => {
    state.requireNearHigh = event.target.checked;
    render();
  });

  searchInput.addEventListener("input", render);

  document.querySelectorAll("th[data-sort]").forEach((header) => {
    header.addEventListener("click", () => {
      const key = header.dataset.sort;
      state.sortDirection = state.sortKey === key && state.sortDirection === "desc" ? "asc" : "desc";
      state.sortKey = key;
      render();
    });
  });

  document.querySelectorAll(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.period = Number(button.dataset.period);
      renderStrategies();
    });
  });

  document.querySelector("#watchBtn").addEventListener("click", () => {
    if (state.watchlist.has(state.selectedSymbol)) {
      state.watchlist.delete(state.selectedSymbol);
      showToast("已從追蹤組合移除");
    } else {
      state.watchlist.add(state.selectedSymbol);
      showToast("已加入追蹤組合");
    }
    render();
  });

  document.querySelector("#backToScannerBtn").addEventListener("click", closeStockPage);
  document.querySelector("#backtestBackBtn").addEventListener("click", closeBacktestPage);

  backtestStrategySelect.addEventListener("change", (event) => {
    state.backtestStrategy = event.target.value;
    render();
  });

  backtestTopInput.addEventListener("input", (event) => {
    state.backtestTop = Number(event.target.value || 20);
    render();
  });

  backtestRiskToggle.addEventListener("change", (event) => {
    state.backtestExcludeHighRisk = event.target.checked;
    render();
  });

  document.querySelector("#rebalanceBtn").addEventListener("click", () => {
    stocks.forEach((stock) => {
      const drift = Math.round((Math.random() - 0.45) * 4);
      stock.score = Math.max(50, Math.min(98, stock.score + drift));
    });
    showToast("已重新計算產業輪動分數");
    render();
  });

  document.querySelector("#exportBtn").addEventListener("click", () => {
    const rows = filteredStocks();
    const csv = ["symbol,name,sector,score,alpha,winRate,risk"]
      .concat(rows.map((stock) => [stock.symbol, stock.name, stock.sector, stock.score, stock.alpha, stock.winRate, stock.risk].join(",")))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "alphadeck-candidates.csv";
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("已匯出目前候選清單");
  });
}

Promise.all([loadRealCandidates(), loadModelLibrary()]).finally(() => {
  populateBacktestOptions();
  setupControls();
  render();
});
