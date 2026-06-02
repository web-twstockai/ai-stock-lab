(function () {
  const service = window.IntelligenceService;
  const data = service.getInstitutionalRobot();

  function dateOnly(timestamp) {
    return timestamp.slice(0, 10).replaceAll("/", "-");
  }

  function dateRange(items, field) {
    const dates = items.map((item) => dateOnly(item[field] || "")).filter(Boolean).sort();
    return { start: dates[0] || "", end: dates[dates.length - 1] || "" };
  }

  const initialDateRange = dateRange(data.signals || [], "timestamp");
  const state = {
    filter: "all",
    keyword: "",
    start: initialDateRange.start,
    end: initialDateRange.end,
    page: 1,
    pageSize: 10,
    selectedId: data.signals[0]?.id,
  };

  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);

  function icon(name) {
    const icons = {
      file: '<path d="M14 7h14l7 7v27H14Z" fill="currentColor"/><path d="M28 7v9h9" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M19 23h13M19 29h13M19 35h9" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
      target: '<circle cx="24" cy="24" r="15" stroke="currentColor" stroke-width="4"/><circle cx="24" cy="24" r="5" fill="currentColor"/><path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      alert: '<path d="M24 6 43 40H5Z" fill="currentColor"/><path d="M24 17v11M24 34h.1" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
      filter: '<path d="M8 10h32L28 24v13l-8 4V24Z" fill="currentColor"/>',
    };
    return `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">${icons[name] || icons.file}</svg>`;
  }

  function importanceClass(value) {
    if (value === "高") return "red";
    if (value === "中高") return "orange";
    return "";
  }

  function streakText(signal) {
    return Number(signal.days || 0) >= 2 ? `${signal.days} 天` : "—";
  }

  function filteredSignals() {
    const keyword = state.keyword.trim().toLowerCase();
    return data.signals.filter((signal) => {
      if (Number(signal.days || 0) < 2) return false;
      const filterOk =
        state.filter === "all" ||
        signal.institutionType === state.filter ||
        (state.filter === "sync" && signal.syncCount >= 3) ||
        (state.filter === "high" && signal.importance === "高");
      const keywordOk =
        !keyword ||
        signal.stockCode.includes(keyword) ||
        signal.stockName.toLowerCase().includes(keyword) ||
        signal.institutionType.toLowerCase().includes(keyword);
      const day = dateOnly(signal.timestamp);
      return filterOk && keywordOk && (!state.start || day >= state.start) && (!state.end || day <= state.end);
    });
  }

  function selectedSignal() {
    const list = filteredSignals();
    return data.signals.find((signal) => signal.id === state.selectedId) || list[0] || data.signals[0];
  }

  function renderStats() {
    $("[data-updated-at]").textContent = data.updatedAt;
    $("[data-detail-stats]").innerHTML = data.summary.map((card) => `
      <article class="intel-card">
        <span class="circle-icon ${card.accent || ""}">${icon(card.icon)}</span>
        <div class="card-copy">
          <small>${esc(card.label)}</small>
          <strong>${typeof card.value === "number" ? card.value.toLocaleString("zh-TW") : esc(card.value)}</strong>
          <em>${esc(card.unit)}</em>
        </div>
      </article>
    `).join("");
  }

  function renderTable() {
    const list = filteredSignals();
    const maxPage = Math.max(1, Math.ceil(list.length / state.pageSize));
    if (state.page > maxPage) state.page = maxPage;
    if (!list.some((signal) => signal.id === state.selectedId)) state.selectedId = list[0]?.id || data.signals[0]?.id;
    const pageRows = list.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
    $("[data-institutional-table]").innerHTML = pageRows.map((signal) => `
      <tr data-signal-id="${esc(signal.id)}" class="${signal.id === state.selectedId ? "is-active" : ""}">
        <td><strong>${esc(signal.stockCode)} ${esc(signal.stockName)}</strong><div class="tag-row">${signal.tags.slice(0, 2).map((tag) => `<em class="badge">${esc(tag)}</em>`).join("")}</div></td>
        <td>${esc(signal.institutionType)}</td>
        <td>${esc(signal.direction)}</td>
        <td>${streakText(signal)}</td>
        <td>${Number(signal.buyVolume || 0).toLocaleString("zh-TW")} 張</td>
        <td>${esc(signal.timestamp)}</td>
      </tr>
    `).join("");
    $("[data-total-text]").textContent = `共 ${list.length} 筆`;
    $("[data-pagination]").innerHTML = `
      <button type="button" data-page-prev>‹</button>
      ${Array.from({ length: maxPage }, (_, index) => `<button class="${index + 1 === state.page ? "is-active" : ""}" type="button" data-page="${index + 1}">${index + 1}</button>`).join("")}
      <button type="button" data-page-next>›</button>
    `;
    document.querySelectorAll("[data-signal-id]").forEach((row) => {
      row.addEventListener("click", () => {
        state.selectedId = row.dataset.signalId;
        renderTable();
        renderAnalysis();
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
    document.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => {
      state.page = Number(button.dataset.page);
      renderTable();
    }));
  }

  function renderAnalysis() {
    const signal = selectedSignal();
    if (!signal) return;
    $("[data-institutional-analysis]").innerHTML = `
      <div class="analysis-head">
        <h3 class="analysis-title">${esc(signal.stockCode)} ${esc(signal.stockName)} ｜ ${esc(signal.institutionType)} ${esc(signal.direction)}</h3>
        <em class="badge ${importanceClass(signal.importance)}">${esc(signal.importance)}</em>
      </div>
      <div class="detail-table">
        <div class="detail-row"><span>基本資訊</span><p>${esc(signal.stockCode)} ${esc(signal.stockName)} ｜ ${esc(signal.group || signal.sector || "-")}</p></div>
        <div class="detail-row"><span>動向內容</span><p>${esc(signal.event || signal.summary)}</p></div>
        <div class="detail-row"><span>AI 解讀</span><p>${esc(signal.ai)}</p></div>
        <div class="detail-row"><span>可能影響</span><p>${esc(signal.impact)}</p></div>
        <div class="detail-row"><span>相關族群</span><p>${esc(signal.group || signal.sector || "AI 伺服器")}</p></div>
        <div class="detail-row"><span>風險提醒</span><p>${esc(signal.risk)}</p></div>
      </div>
    `;
  }

  function renderGroups() {
    const max = Math.max(...data.groups.map(([, value]) => value));
    $("[data-group-bars]").innerHTML = data.groups.map(([name, value], index) => `
      <div class="group-row">
        <span>${index + 1}. ${esc(name)}</span>
        <span class="group-track"><i class="group-fill" style="width:${(value / max) * 100}%"></i></span>
        <strong>+${value.toFixed(2)} 億</strong>
      </div>
    `).join("");
  }

  function renderSources() {
    $("[data-source-grid]").innerHTML = data.sourceCards.map(([title, body]) => `
      <article class="source-card"><h3>${esc(title)}</h3><p>${esc(body)}</p></article>
    `).join("");
  }

  function bindControls() {
    $("[data-date-start]").value = state.start;
    $("[data-date-end]").value = state.end;
    document.querySelectorAll("[data-inst-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.instFilter;
        state.page = 1;
        document.querySelectorAll("[data-inst-filter]").forEach((node) => node.classList.toggle("is-active", node === button));
        renderTable();
        renderAnalysis();
      });
    });
    $("[data-search]").addEventListener("input", (event) => {
      state.keyword = event.target.value;
      state.page = 1;
      renderTable();
      renderAnalysis();
    });
    $("[data-date-start]").addEventListener("change", (event) => {
      state.start = event.target.value;
      state.page = 1;
      renderTable();
      renderAnalysis();
    });
    $("[data-date-end]").addEventListener("change", (event) => {
      state.end = event.target.value;
      state.page = 1;
      renderTable();
      renderAnalysis();
    });
    $("[data-page-size]").addEventListener("change", (event) => {
      state.pageSize = Number(event.target.value);
      state.page = 1;
      renderTable();
    });
  }

  renderStats();
  renderTable();
  renderAnalysis();
  renderGroups();
  renderSources();
  bindControls();
})();
