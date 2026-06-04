(function () {
  const service = window.IntelligenceService;
  let data = service.getMacroRobot();
  let isReloadingMacroData = false;
  let lastMacroDataReloadAt = 0;

  function dateOnly(timestamp) {
    return timestamp.slice(0, 10).replaceAll("/", "-");
  }

  function dateRange(items, field) {
    const dates = items.map((item) => dateOnly(item[field] || "")).filter(Boolean).sort();
    return { start: dates[0] || "", end: dates[dates.length - 1] || "" };
  }

  function parsePublishTime(timestamp) {
    const match = String(timestamp || "").match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})/);
    if (!match) return null;
    const [, year, month, day, hour, minute] = match.map(Number);
    const parsed = new Date(year, month - 1, day, hour, minute, 0, 0);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  function hasActualValue(event) {
    const value = String(event.actual ?? "").trim();
    return value !== "" && value !== "—" && value !== "-" && value.toLowerCase() !== "n/a";
  }

  function eventTime(event) {
    return parsePublishTime(event.publishTime || event.timestamp || event.sourcePublishTime);
  }

  function macroDataSignature(payload = data) {
    return JSON.stringify((payload.events || []).map((event) => [event.id, event.publishTime, event.actual, event.status]));
  }

  function hasDueUnpublishedEvent(now = new Date()) {
    return (data.events || []).some((event) => {
      const publishAt = eventTime(event);
      return !hasActualValue(event) && publishAt && publishAt.getTime() <= now.getTime();
    });
  }

  function loadMacroDataScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `../../data/macro-robot.js?v=${Date.now()}`;
      script.async = true;
      script.onload = () => {
        script.remove();
        resolve();
      };
      script.onerror = () => {
        script.remove();
        reject(new Error("macro data reload failed"));
      };
      document.head.appendChild(script);
    });
  }

  async function reloadMacroData() {
    if (isReloadingMacroData) return;
    isReloadingMacroData = true;
    try {
      const before = macroDataSignature();
      await loadMacroDataScript();
      const nextData = service.getMacroRobot();
      if (!nextData || !Array.isArray(nextData.events)) return;
      const after = macroDataSignature(nextData);
      if (after === before) return;
      data = nextData;
      if (!data.events.some((event) => event.id === state.selectedId)) {
        state.selectedId = data.events[0]?.id;
      }
      renderStats();
      renderTable();
      renderAnalysis();
      renderImpactGrid();
      renderOdds();
      renderSources();
    } catch (error) {
      console.warn("Macro data auto reload skipped:", error);
    } finally {
      isReloadingMacroData = false;
    }
  }

  function maybeReloadMacroData() {
    const now = Date.now();
    if (!hasDueUnpublishedEvent(new Date(now))) return;
    if (now - lastMacroDataReloadAt < 60000) return;
    lastMacroDataReloadAt = now;
    reloadMacroData();
  }

  function nextUpcomingEvent(now = new Date()) {
    return [...(data.events || [])]
      .filter((event) => !hasActualValue(event))
      .map((event) => ({ event, time: eventTime(event) }))
      .filter(({ time }) => time && time.getTime() > now.getTime())
      .sort((a, b) => a.time - b.time)[0]?.event || null;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function countdownStatus(event, now = new Date()) {
    if (hasActualValue(event)) return "已公布";
    const publishAt = eventTime(event);
    if (!publishAt) return event.status || "等待公布";

    const diffSeconds = Math.floor((publishAt.getTime() - now.getTime()) / 1000);
    if (diffSeconds <= 0) return "等待實際值更新";

    const days = Math.floor(diffSeconds / 86400);
    const hours = Math.floor((diffSeconds % 86400) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;
    if (days > 0) return `倒數 ${days} 天 ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return `倒數 ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  const initialDateRange = dateRange(data.events || [], "publishTime");
  const state = {
    filter: "all",
    keyword: "",
    start: initialDateRange.start,
    end: initialDateRange.end,
    page: 1,
    pageSize: 10,
    selectedId: data.events[0]?.id,
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
      calendar: '<rect x="9" y="11" width="30" height="29" rx="4" fill="currentColor"/><path d="M15 7v8M33 7v8M10 20h28" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M17 26h4M27 26h4M17 33h4M27 33h4" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',
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

  function directionClass(value) {
    if (value === "偏多") return "green";
    if (value === "偏空") return "red";
    return "";
  }

  function statusClass(event) {
    if (hasActualValue(event)) return "status-done";
    const publishAt = eventTime(event);
    if (publishAt && publishAt.getTime() - Date.now() <= 86400000) return "status-soon";
    return "blue";
  }

  function sortEventsForFilter(events) {
    const now = Date.now();
    const timeValue = (event) => eventTime(event)?.getTime() || 0;
    return [...events].sort((a, b) => {
      const aTime = timeValue(a);
      const bTime = timeValue(b);
      if (state.filter === "published") return bTime - aTime;

      const aFuture = aTime >= now;
      const bFuture = bTime >= now;
      if (aFuture !== bFuture) return aFuture ? -1 : 1;
      return aFuture ? aTime - bTime : bTime - aTime;
    });
  }

  function filteredEvents() {
    const keyword = state.keyword.trim().toLowerCase();
    const now = Date.now();
    const countryMatches = (event) => {
      if (state.filter === "歐洲") return ["歐元區", "德國", "法國", "英國"].includes(event.country);
      return event.country === state.filter;
    };
    const list = data.events.filter((event) => {
      const published = hasActualValue(event);
      const publishAt = eventTime(event);
      const upcoming = !published && publishAt && publishAt.getTime() >= now;
      const visibleInMainList =
        state.filter === "published" ? published : !published;
      const filterOk =
        (state.filter === "all" && visibleInMainList) ||
        (state.filter === "upcoming" && upcoming) ||
        (state.filter === "published" && published) ||
        (state.filter === "high" && !published && event.importance === "高") ||
        (!published && countryMatches(event));
      const keywordOk =
        !keyword ||
        event.eventName.toLowerCase().includes(keyword) ||
        event.title.toLowerCase().includes(keyword) ||
        event.country.toLowerCase().includes(keyword);
      const day = dateOnly(event.publishTime);
      return filterOk && keywordOk && (!state.start || day >= state.start) && (!state.end || day <= state.end);
    });
    return sortEventsForFilter(list);
  }

  function selectedEvent() {
    const list = filteredEvents();
    return list.find((event) => event.id === state.selectedId) || list[0] || data.events[0];
  }

  function summaryCards() {
    const events = data.events || [];
    const upcomingCount = events.filter((event) => !hasActualValue(event)).length;
    const publishedCount = events.length - upcomingCount;
    const highImpactCount = events.filter((event) => event.importance === "高").length;
    const upcomingEvent = nextUpcomingEvent();
    return (data.summary || []).map((card, index) => {
      if (index === 1) return { ...card, value: upcomingCount, unit: "個" };
      if (index === 2) return { ...card, value: publishedCount, unit: "個" };
      if (index === 3) return { ...card, value: highImpactCount, unit: "個", accent: "orange" };
      if (index === 4 && upcomingEvent) {
        return { ...card, value: upcomingEvent.eventName, unit: countdownStatus(upcomingEvent) };
      }
      return card;
    });
  }

  function renderStats() {
    $("[data-updated-at]").textContent = data.updatedAt;
    $("[data-detail-stats]").innerHTML = summaryCards().map((dynamicCard) => {
      return `
      <article class="intel-card">
        <span class="circle-icon ${dynamicCard.accent || ""}">${icon(dynamicCard.icon)}</span>
        <div class="card-copy">
          <small>${esc(dynamicCard.label)}</small>
          <strong>${typeof dynamicCard.value === "number" ? dynamicCard.value.toLocaleString("zh-TW") : esc(dynamicCard.value)}</strong>
          <em>${esc(dynamicCard.unit)}</em>
        </div>
      </article>
    `;
    }).join("");
  }

  function paginationItems(currentPage, maxPage) {
    if (maxPage <= 7) return Array.from({ length: maxPage }, (_, index) => index + 1);

    const pages = new Set([1, maxPage, currentPage - 1, currentPage, currentPage + 1]);
    if (currentPage <= 3) {
      pages.add(2);
      pages.add(3);
      pages.add(4);
    }
    if (currentPage >= maxPage - 2) {
      pages.add(maxPage - 3);
      pages.add(maxPage - 2);
      pages.add(maxPage - 1);
    }

    const sorted = [...pages].filter((page) => page >= 1 && page <= maxPage).sort((a, b) => a - b);
    return sorted.reduce((items, page, index) => {
      if (index > 0 && page - sorted[index - 1] > 1) items.push("ellipsis");
      items.push(page);
      return items;
    }, []);
  }

  function renderTable() {
    const list = filteredEvents();
    const maxPage = Math.max(1, Math.ceil(list.length / state.pageSize));
    if (state.page > maxPage) state.page = maxPage;
    if (!list.some((event) => event.id === state.selectedId)) state.selectedId = list[0]?.id || data.events[0]?.id;
    const pageRows = list.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
    $("[data-macro-event-table]").innerHTML = pageRows.map((event) => `
      <tr data-event-id="${esc(event.id)}" class="${event.id === state.selectedId ? "is-active" : ""} ${event.importance === "高" ? "is-high-impact" : ""}">
        <td>
          <strong>${esc(event.eventName)}</strong>
          ${event.importance === "高" ? '<em class="badge red high-impact-badge">高影響</em>' : ""}
          <div class="tag-row">${event.tags.slice(0, 2).map((tag) => `<em class="badge">${esc(tag)}</em>`).join("")}</div>
        </td>
        <td>${esc(event.country)}</td>
        <td>${esc(event.publishTime)}</td>
        <td>${esc(event.previous)}</td>
        <td>${esc(event.forecast)}</td>
        <td>${esc(event.actual || "—")}</td>
        <td class="${statusClass(event)}" data-countdown-index="${data.events.indexOf(event)}">${esc(countdownStatus(event))}</td>
        <td><em class="badge ${directionClass(event.direction)}">${esc(event.direction || "中性")}</em></td>
      </tr>
    `).join("");
    $("[data-total-text]").textContent = `共 ${list.length} 筆`;
    $("[data-pagination]").innerHTML = `
      <button type="button" data-page-prev ${state.page === 1 ? "disabled" : ""}>‹</button>
      ${paginationItems(state.page, maxPage).map((item) => (
        item === "ellipsis"
          ? '<span class="page-ellipsis">…</span>'
          : `<button class="${item === state.page ? "is-active" : ""}" type="button" data-page="${item}">${item}</button>`
      )).join("")}
      <button type="button" data-page-next ${state.page === maxPage ? "disabled" : ""}>›</button>
    `;
    document.querySelectorAll("[data-event-id]").forEach((row) => {
      row.addEventListener("click", () => {
        state.selectedId = row.dataset.eventId;
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
    const event = selectedEvent();
    if (!event) return;
    $("[data-macro-analysis]").innerHTML = `
      <div class="analysis-head">
        <h3 class="analysis-title">${esc(event.eventName)}</h3>
        <em class="badge ${importanceClass(event.importance)}">${esc(event.importance)}</em>
      </div>
      <div class="detail-table">
        <div class="detail-row"><span>公布時間</span><p>${esc(event.publishTime)}</p></div>
        <div class="detail-row"><span>前值</span><p>${esc(event.previous)}</p></div>
        <div class="detail-row"><span>預期值</span><p>${esc(event.forecast)}</p></div>
        <div class="detail-row"><span>實際值</span><p>${esc(event.actual || "—")}</p></div>
        <div class="detail-row"><span>AI 解讀</span><p>${esc(event.ai)}</p></div>
        <div class="detail-row"><span>可能影響</span><p>${esc(event.impactDetail || event.impact)}</p></div>
        <div class="detail-row"><span>受影響族群</span><p>${esc((event.tags || []).slice(-3).join(" / "))}</p></div>
        <div class="detail-row"><span>風險提醒</span><p>${esc(event.risk)}</p></div>
      </div>
    `;
    $("[data-watch]").textContent = service.isWatched(event.id) ? "已加入觀察" : "加入觀察名單";
    $("[data-read]").textContent = event.read ? "已標記已讀" : "標記已讀";
  }

  function renderImpactGrid() {
    if (!$("[data-impact-grid]")) return;
    const headers = ["股市", "科技股", "金融股", "原物料", "債券", "匯率"];
    $("[data-impact-grid]").innerHTML = `
      <div class="heat-row"><strong></strong>${headers.map((header) => `<strong>${header}</strong>`).join("")}</div>
      ${data.impactGrid.map(([name, ...cells]) => `
        <div class="heat-row">
          <strong>${esc(name)}</strong>
          ${cells.map((cell) => `<span class="heat-cell ${cell === "正面" ? "good" : cell === "負面" ? "bad" : "neutral"}">${esc(cell)}</span>`).join("")}
        </div>
      `).join("")}
    `;
  }

  function renderOdds() {
    $("[data-rate-odds]").innerHTML = data.odds.map(([date, event, hold, cut]) => `
      <div class="odds-row">
        <strong>${esc(date)}</strong>
        <span>${esc(event)}</span>
        <span>${esc(hold)}</span>
        <span>${esc(cut)}</span>
      </div>
    `).join("");
  }

  function renderSources() {
    $("[data-source-grid]").innerHTML = data.sourceCards.map(([title, body]) => `
      <article class="source-card"><h3>${esc(title)}</h3><p>${esc(body)}</p></article>
    `).join("");
  }

  function refreshCountdowns() {
    renderStats();
    document.querySelectorAll("[data-countdown-index]").forEach((cell) => {
      const event = data.events[Number(cell.dataset.countdownIndex)];
      if (!event) return;
      cell.textContent = countdownStatus(event);
      cell.className = statusClass(event);
    });
    maybeReloadMacroData();
  }

  function bindControls() {
    $("[data-date-start]").value = state.start;
    $("[data-date-end]").value = state.end;
    document.querySelectorAll("[data-macro-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.macroFilter;
        state.page = 1;
        document.querySelectorAll("[data-macro-filter]").forEach((node) => node.classList.toggle("is-active", node === button));
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
    $("[data-watch]").addEventListener("click", () => {
      const event = selectedEvent();
      const nowWatched = service.toggleWatch({ stockCode: event.id, stockName: event.eventName, id: event.id });
      $("[data-watch]").textContent = nowWatched ? "已加入觀察" : "加入觀察名單";
    });
    $("[data-read]").addEventListener("click", () => {
      const event = selectedEvent();
      service.markRead(event.id);
      event.read = true;
      renderTable();
      renderAnalysis();
    });
  }

  renderStats();
  renderTable();
  renderAnalysis();
  renderImpactGrid();
  renderOdds();
  renderSources();
  bindControls();
  window.setInterval(refreshCountdowns, 1000);
})();
