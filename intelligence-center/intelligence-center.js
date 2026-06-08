(function () {
  const service = window.IntelligenceService;
  const state = {
    filter: "all",
    selectedId: null,
    items: [],
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
  const roleLevel = { basic: 1, advanced: 2, admin: 3 };

  function currentUser() {
    try {
      const account = localStorage.getItem("aiStockLabSession");
      const users = JSON.parse(localStorage.getItem("aiStockLabUsers") || "{}");
      return account ? users[account] || null : null;
    } catch (_) {
      return null;
    }
  }

  function canUseAdvancedRobots() {
    const user = currentUser();
    const role = user?.role === "advanced" && user.advancedExpiresAt && new Date(user.advancedExpiresAt).getTime() <= Date.now()
      ? "basic"
      : user?.role;
    return (roleLevel[role] || 0) >= roleLevel.advanced;
  }

  function icon(name, className = "") {
    const icons = {
      file: '<path d="M14 7h14l7 7v27H14Z" fill="currentColor"/><path d="M28 7v9h9" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M19 23h13M19 29h13M19 35h9" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
      alert: '<path d="M24 6 43 40H5Z" fill="currentColor"/><path d="M24 17v11M24 34h.1" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
      target: '<circle cx="24" cy="24" r="15" stroke="currentColor" stroke-width="4"/><circle cx="24" cy="24" r="5" fill="currentColor"/><path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      calendar: '<rect x="9" y="11" width="30" height="29" rx="4" fill="currentColor"/><path d="M15 7v8M33 7v8M10 20h28" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M17 26h4M27 26h4M17 33h4M27 33h4" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',
      person: '<circle cx="24" cy="17" r="8" stroke="currentColor" stroke-width="4"/><path d="M10 41c2.3-9 8-13 14-13s11.7 4 14 13" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      building: '<rect x="11" y="13" width="26" height="27" rx="3" fill="currentColor"/><path d="M17 20h4M27 20h4M17 27h4M27 27h4M17 34h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M17 13V8h14v5" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>',
      globe: '<circle cx="24" cy="24" r="17" stroke="currentColor" stroke-width="4"/><path d="M7 24h34M24 7c6 6 6 28 0 34M24 7c-6 6-6 28 0 34" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    };
    return `<svg class="${className}" viewBox="0 0 48 48" fill="none" aria-hidden="true">${icons[name] || icons.file}</svg>`;
  }

  function importanceClass(value) {
    if (value === "高") return "red";
    if (value === "中高") return "orange";
    return "";
  }

  function typeColor(type) {
    if (type === "institutional") return "purple";
    if (type === "macro") return "green";
    return "";
  }

  function filteredItems() {
    return state.items.filter((item) => {
      if (state.filter === "all") return true;
      if (state.filter === "high") return item.importance === "高";
      return item.type === state.filter;
    });
  }

  function renderOverview(data) {
    $("[data-updated-at]").textContent = data.updatedAt;
    $("[data-overview-cards]").innerHTML = data.cards.map((card) => `
      <article class="intel-card">
        <span class="circle-icon ${card.accent || ""}">${icon(card.icon)}</span>
        <div class="card-copy">
          <small>${esc(card.label)}</small>
          <strong>${typeof card.value === "number" ? card.value.toLocaleString("zh-TW") : esc(card.value)}</strong>
          <em>${esc(card.unit)}</em>
        </div>
      </article>
    `).join("");

    $("[data-robot-grid]").innerHTML = data.robots.map((robot) => `
      <a class="robot-card" href="${esc(robot.href)}">
        <span class="circle-icon">${icon("file")}</span>
        <div class="robot-copy">
          <h2>${esc(robot.title)}</h2>
          ${robot.updatedAt ? `<p class="robot-updated">更新 ${esc(robot.updatedAt)}</p>` : ""}
          <div class="robot-stats">
            ${robot.stats.map(([label, value]) => `<span>${esc(label)}<strong>${esc(value)}</strong></span>`).join("")}
          </div>
        </div>
        <span class="robot-arrow">›</span>
      </a>
    `).join("");

    if (!canUseAdvancedRobots()) {
      document.querySelectorAll("[data-robot-grid] .robot-card").forEach((card, index) => {
        if (index > 1) return;
        card.classList.add("is-locked");
        card.removeAttribute("href");
        card.setAttribute("aria-disabled", "true");
        card.setAttribute("aria-label", "進階會員才能使用");
        card.setAttribute("tabindex", "-1");
        card.querySelector("h2")?.insertAdjacentHTML("afterend", '<em class="access-badge">進階會員</em>');
      });
    }
  }

  function renderList() {
    const list = filteredItems();
    if (!list.some((item) => item.id === state.selectedId)) {
      state.selectedId = list[0]?.id || null;
    }

    $("[data-intel-list]").innerHTML = list.map((item) => `
      <button class="intel-item ${item.id === state.selectedId ? "is-active" : ""} ${item.read ? "is-read" : ""}" type="button" data-id="${esc(item.id)}">
        <span class="item-icon ${typeColor(item.type)}">${icon(service.typeIcon(item.type))}</span>
        <span>
          <span class="item-top">
            <em class="badge">${service.typeLabel(item.type)}</em>
            <em class="badge ${importanceClass(item.importance)}">${esc(item.importance)}</em>
            <strong class="item-title">${esc(item.title)}</strong>
          </span>
          <p class="item-summary">${esc(item.summary)}</p>
          <span class="tag-row">${item.tags.slice(0, 4).map((tag) => `<em class="badge">${esc(tag)}</em>`).join("")}</span>
        </span>
        <span class="item-time">${esc(item.displayTime || item.eventTime || item.eventMonth || item.timestamp)}</span>
      </button>
    `).join("");

    document.querySelectorAll("[data-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedId = button.dataset.id;
        renderList();
        renderAnalysis();
      });
    });
  }

  function selectedItem() {
    return state.items.find((item) => item.id === state.selectedId) || filteredItems()[0] || state.items[0];
  }

  function renderAnalysis() {
    const item = selectedItem();
    if (!item) return;
    const watched = item.stockCode ? service.isWatched(item.stockCode) : false;
    $("[data-analysis-content]").innerHTML = `
      <div class="analysis-head">
        <h3 class="analysis-title">${esc(item.title)} ｜ ${esc(service.typeLabel(item.type))}</h3>
        <em class="badge ${importanceClass(item.importance)}">${esc(item.importance)}</em>
      </div>
      <div class="detail-table">
        <div class="detail-row"><span>基本資訊</span><p>${esc(item.stockCode || item.eventName)} ${esc(item.stockName || "")} ${item.industry ? "｜ " + esc(item.industry) : ""} ${item.marketCap ? "｜ 市值 " + esc(item.marketCap) : ""}</p></div>
        <div class="detail-row"><span>事件內容</span><p>${esc(item.event || item.summary)}</p></div>
        <div class="detail-row"><span>AI 解讀</span><p>${esc(item.ai)}</p></div>
        <div class="detail-row"><span>可能影響</span><p>${esc(item.impactDetail || item.impact)}</p></div>
        <div class="detail-row"><span>相關股票</span><p>${item.stockCode ? `<a href="../stock-analysis/?symbol=${esc(item.stockCode)}">${esc(item.stockCode)} ${esc(item.stockName)}</a>` : "2382 廣達、2357 華碩、6669 緯穎、3017 奇鋐"}</p></div>
        <div class="detail-row"><span>風險提醒</span><p>${esc(item.risk)}</p></div>
      </div>
      <div class="action-row">
        <a class="primary-btn" href="../stock-analysis/?symbol=${esc(item.stockCode || "2330")}">查看個股分析</a>
        <button class="outline-btn" type="button" data-watch>${watched ? "已加入觀察" : "加入觀察名單"}</button>
        <button class="outline-btn" type="button" data-read>${item.read ? "已標記已讀" : "標記已讀"}</button>
      </div>
    `;

    $("[data-watch]")?.addEventListener("click", (event) => {
      if (!item.stockCode) return;
      const nowWatched = service.toggleWatch(item);
      event.currentTarget.textContent = nowWatched ? "已加入觀察" : "加入觀察名單";
    });
    $("[data-read]")?.addEventListener("click", () => {
      service.markRead(item.id);
      const data = service.getOverview();
      state.items = data.items;
      renderList();
      renderAnalysis();
    });
  }

  function renderMacro(events) {
    $("[data-macro-table]").innerHTML = events.map((event) => `
      <tr>
        <td>${esc(event.eventName)}</td>
        <td>${esc(event.publishTime)}</td>
        <td>${esc(event.previous)}</td>
        <td>${esc(event.forecast)}</td>
        <td>${esc(event.actual || "—")}</td>
        <td class="blue">${esc(event.status)}</td>
        <td>${esc(event.impact)}</td>
      </tr>
    `).join("");
  }

  function init() {
    const data = service.getOverview();
    renderOverview(data);
  }

  init();
})();
