(function () {
  const ratioService = window.ShortMarginRatioService;
  const filters = ["全部", "空方重壓", "軋空觀察", "借券增加", "融資追價", "回補轉強"];
  let data = ratioService.prepareShortMarginData(window.ShortMarginRatioMockData || {});

  const state = {
    filter: "全部",
    keyword: "",
    page: 1,
    pageSize: 8,
    selectedId: null,
    loading: true,
    usingFallback: false,
  };

  const $ = (selector) => document.querySelector(selector);
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);

  function icon(name) {
    const icons = {
      file: '<path d="M15 9h12l6 6v24H15Z" fill="currentColor"/><path d="M27 9v8h8" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M20 24h10M20 30h10M20 36h7" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
      alert: '<path d="M24 7 43 40H5Z" fill="currentColor"/><path d="M24 18v10M24 34h.1" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
      rocket: '<path d="M32 7c-8 1-14 7-17 17l9 9c10-3 16-9 17-17 1-5-4-10-9-9Z" fill="currentColor"/><path d="M17 31 9 39l-1-7 7-7M31 17h.1" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
      trend: '<path d="M10 37h6V24h-6v13Zm11 0h6V17h-6v20Zm11 0h6V10h-6v27Z" fill="currentColor"/><path d="M10 19 20 11l8 5 10-10" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
      users: '<path d="M21 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-13 17c2-9 7-13 13-13s11 4 13 13" fill="currentColor"/><path d="M33 23a6 6 0 1 0 0-12M34 29c4 1 7 5 8 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',
    };
    return `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">${icons[name] || icons.file}</svg>`;
  }

  function formatNumber(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "N/A";
    return Number(value).toLocaleString("zh-TW");
  }

  function formatPercent(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "N/A";
    return `${Number(value).toFixed(2)}%`;
  }

  function ratioClass(ratio) {
    if (ratio >= 100) return "risk-high";
    if (ratio >= 70) return "risk-mid";
    if (ratio >= 30) return "risk-normal";
    return "risk-low";
  }

  function statusClass(status) {
    if (status.includes("極端") || status.includes("重壓")) return "risk-high";
    if (status.includes("偏重") || status.includes("借券")) return "risk-mid";
    if (status.includes("正常")) return "risk-normal";
    if (status.includes("低") || status.includes("回補")) return "risk-low";
    return "risk-squeeze";
  }

  function matchesFilter(stock) {
    if (state.filter === "全部") return true;
    if (state.filter === "空方重壓") return stock.status.includes("極端") || stock.status.includes("重壓") || stock.ratio >= 100;
    if (state.filter === "借券增加") return Number(stock.borrowSellChange) > 0;
    if (state.filter === "融資追價") return Number(stock.marginChange) > 0 && Number(stock.changePercent) >= 0;
    if (state.filter === "回補轉強") return Number(stock.shortChange) < 0 && Number(stock.borrowSellChange) < 0;
    return stock.status === state.filter;
  }

  function filteredStocks() {
    const keyword = state.keyword.trim().toLowerCase();
    return data.stocks.filter((stock) => {
      const keywordOk = !keyword || stock.stockId.includes(keyword) || stock.stockName.toLowerCase().includes(keyword);
      return keywordOk && matchesFilter(stock);
    });
  }

  function selectedStock() {
    const list = filteredStocks();
    return data.stocks.find((stock) => stock.stockId === state.selectedId) || list[0] || data.stocks[0];
  }

  function renderStats() {
    $("[data-updated-at]").textContent = data.updatedAt;
    if ($("[data-date]") && data.date && !$("[data-date]").value) {
      $("[data-date]").value = data.date.replace(/\//g, "-");
    }
    $("[data-stat-grid]").innerHTML = data.stats.map((item) => `
      <article class="short-ratio-stat">
        <span class="short-ratio-stat-icon ${esc(item.tone)}">${icon(item.icon)}</span>
        <div>
          <small>${esc(item.title)}</small>
          <strong>${formatNumber(item.value)}</strong>
          <em>${esc(item.unit)}</em>
        </div>
      </article>
    `).join("");
  }

  function renderFilters() {
    $("[data-filter-row]").innerHTML = filters.map((filter) => `
      <button class="chip-btn ${state.filter === filter ? "is-active" : ""}" type="button" data-filter="${esc(filter)}">${esc(filter)}</button>
    `).join("");

    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter;
        state.page = 1;
        renderFilters();
        renderTable();
        renderDetail();
      });
    });
  }

  function renderTable() {
    if (state.loading) {
      $("[data-stock-table]").innerHTML = '<tr><td colspan="7">正在讀取臺灣證券交易所真實資料...</td></tr>';
      $("[data-total-text]").textContent = "讀取中";
      $("[data-pagination]").innerHTML = "";
      return;
    }
    const list = filteredStocks();
    const maxPage = Math.max(1, Math.ceil(list.length / state.pageSize));
    if (state.page > maxPage) state.page = maxPage;
    if (!list.some((stock) => stock.stockId === state.selectedId)) {
      state.selectedId = list[0]?.stockId || data.stocks[0]?.stockId;
    }
    const rows = list.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);

    $("[data-stock-table]").innerHTML = rows.map((stock) => `
      <tr data-stock-id="${esc(stock.stockId)}" class="${stock.stockId === state.selectedId ? "is-active" : ""}">
        <td><strong class="stock-name">${esc(stock.stockId)} ${esc(stock.stockName)}</strong></td>
        <td><strong class="${ratioClass(stock.ratio)}">${formatPercent(stock.ratio)}</strong></td>
        <td>${formatNumber(stock.marginBalance)}</td>
        <td>${formatNumber(stock.shortBalance)}</td>
        <td>${formatNumber(stock.borrowSellBalance)}</td>
        <td><em class="badge ${statusClass(stock.status)}">${esc(stock.status)}</em></td>
        <td>${esc(stock.time)}</td>
      </tr>
    `).join("");

    $("[data-total-text]").textContent = `共 ${list.length} 筆`;
    const pageButtons = Array.from({ length: Math.min(maxPage, 3) }, (_, index) => index + 1)
      .map((page) => `<button class="${state.page === page ? "is-active" : ""}" type="button" data-page="${page}">${page}</button>`)
      .join("");
    $("[data-pagination]").innerHTML = `
      <button type="button" data-page-prev>‹</button>
      ${pageButtons}
      ${maxPage > 4 ? '<button type="button" aria-label="更多頁">···</button>' : ""}
      ${maxPage > 3 ? `<button class="${state.page === maxPage ? "is-active" : ""}" type="button" data-page="${maxPage}">${maxPage}</button>` : ""}
      <button type="button" data-page-next>›</button>
    `;

    document.querySelectorAll("[data-stock-id]").forEach((row) => {
      row.addEventListener("click", () => {
        state.selectedId = row.dataset.stockId;
        renderTable();
        renderDetail();
      });
    });
    $("[data-page-prev]")?.addEventListener("click", () => {
      state.page = Math.max(1, state.page - 1);
      renderTable();
    });
    $("[data-page-next]")?.addEventListener("click", () => {
      state.page = Math.min(maxPage, state.page + 1);
      renderTable();
    });
    document.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        state.page = Number(button.dataset.page);
        renderTable();
      });
    });
  }

  function renderDetail() {
    if (state.loading) {
      $("[data-detail-card]").innerHTML = '<p>正在整合融資、融券、借券賣出與收盤行情。</p>';
      return;
    }
    const stock = selectedStock();
    if (!stock) return;
    $("[data-detail-card]").innerHTML = `
      <div class="short-ratio-detail-head">
        <h3>${esc(stock.stockId)} ${esc(stock.stockName)} ｜ ${esc(stock.status)}</h3>
        <em class="badge ${statusClass(stock.status)}">${esc(stock.riskLevel)}</em>
      </div>
      <div class="detail-table short-ratio-detail-table">
        <div class="detail-row"><span>基本資訊</span><p>${esc(stock.stockId)} ${esc(stock.stockName)}｜${esc(stock.industry)}</p></div>
        <div class="detail-row"><span>雙券資比</span><p>${formatPercent(stock.ratio)}（屬於 ${stock.ratio >= 150 ? "150% 以上極端區間" : ratioService.getRatioLevel(stock.ratio)}）</p></div>
        <div class="detail-row"><span>籌碼內容</span><p>融資餘額 ${formatNumber(stock.marginBalance)} 張、融券餘額 ${formatNumber(stock.shortBalance)} 張、借券賣出餘額 ${formatNumber(stock.borrowSellBalance)} 張</p></div>
        <div class="detail-row"><span>AI 解讀</span><p>${esc(stock.analysis)}</p></div>
        <div class="detail-row"><span>可能影響</span><p>${esc(stock.possibleImpact)}</p></div>
        <div class="detail-row"><span>風險提醒</span><p>${esc(stock.riskNote)}</p></div>
      </div>
    `;
  }

  function renderChartCard(title, items, tone) {
    const max = Math.max(1, ...items.map((item) => Math.abs(Number(item.value))));
    return `
      <article class="chart-card short-ratio-top-card ${tone}">
        <h2>${esc(title)} <span>?</span></h2>
        <div class="short-ratio-bars">
          ${items.map((item, index) => `
            <div class="short-ratio-bar-row">
              <strong>${index + 1}. ${esc(item.label)}</strong>
              <span class="bar-track"><i style="width: ${(Math.abs(Number(item.value)) / max) * 100}%"></i></span>
              <em>${esc(item.display)}</em>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  function renderCharts() {
    $("[data-chart-grid]").innerHTML = [
      renderChartCard("雙券資比異常 TOP 5", data.charts.ratioTop5, "tone-red"),
      renderChartCard("借券賣出增加 TOP 5", data.charts.borrowTop5, "tone-orange"),
      renderChartCard("軋空觀察 TOP 5", data.charts.squeezeTop5, "tone-purple"),
    ].join("");
  }

  function bindControls() {
    $("[data-search]").addEventListener("input", (event) => {
      state.keyword = event.target.value;
      state.page = 1;
      renderTable();
      renderDetail();
    });
    $("[data-date]").addEventListener("change", async (event) => {
      await loadOfficialData(event.target.value);
    });
  }

  function renderAll() {
    renderStats();
    renderFilters();
    renderTable();
    renderDetail();
    renderCharts();
  }

  async function loadOfficialData(dateValue = $("[data-date]")?.value || data.date || "") {
    state.loading = true;
    renderAll();
    try {
      data = await ratioService.fetchOfficialShortMarginData(dateValue);
      state.usingFallback = false;
    } catch (error) {
      console.warn("TWSE official data unavailable, fallback to local data.", error);
      data = ratioService.prepareShortMarginData(window.ShortMarginRatioMockData || {});
      state.usingFallback = true;
    } finally {
      state.loading = false;
      state.page = 1;
      state.selectedId = data.stocks[0]?.stockId || null;
      if ($("[data-date]") && data.date) $("[data-date]").value = data.date.replace(/\//g, "-");
      renderAll();
    }
  }

  async function init() {
    renderAll();
    bindControls();
    await loadOfficialData();
  }

  init();
})();
