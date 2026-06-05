(function () {
  const favorite = document.querySelector(".favorite-button");
  const search = document.querySelector("#stockSearch");
  const select = document.querySelector("#stockSelect");
  const tabs = Array.from(document.querySelectorAll(".chart-tabs button"));
  const chartScroll = document.querySelector(".chart-scroll");
  const chartHeadMeta = document.querySelector(".chart-head p");
  const watchlistBaseKey = "aiStockLabWatchlist";
  const lastSymbolBaseKey = "aiStockLabLastStock";
  const initialSymbol = new URLSearchParams(window.location.search).get("symbol") || readLastSymbol() || select?.value || "1303";

  const state = {
    symbol: initialSymbol,
    stockUniverse: new Map(),
    revenueUniverse: new Map(),
    themeUniverse: new Map(),
    regularBoardVolume: new Map(),
    timeframe: "day",
    rows: [],
    displayRows: [],
    visibleCount: 126,
    endIndex: 0,
    dragging: false,
    dragX: 0,
    dragEnd: 0,
    pointer: null,
    indicators: {
      ma5: true,
      ma10: true,
      ma20: true,
      ma60: false,
      boll: false,
      volume: true,
      macd: true,
      rsi: false,
    },
  };

  const labels = {
    day: "日K",
    week: "週K",
    month: "月K",
    ma5: "MA5",
    ma10: "MA10",
    ma20: "MA20",
    ma60: "MA60",
    boll: "布林",
    volume: "成交量",
    macd: "MACD",
    rsi: "RSI",
  };

  const colors = {
    grid: "#e4edf8",
    text: "#52657f",
    up: "#ef5350",
    down: "#00a878",
    ma5: "#2f80ed",
    ma10: "#f5a623",
    ma20: "#8b5cf6",
    ma60: "#2fb27c",
    boll: "#94a3b8",
    macd: "#2f80ed",
    signal: "#f59e0b",
  };

  let canvas;
  let ctx;
  let tooltip;
  let statusText;
  let resizeObserver;
  let searchResults;
  let selectObserver;
  let volumeObserver;
  let favoriteNoticeTimer;
  let regularBoardVolumePromise;
  let remoteWatchlist = null;
  let watchlistLoadPromise = null;

  function setupChartSurface() {
    if (!chartScroll) return;
    chartScroll.innerHTML = `
      <div class="tv-chart-shell">
        <div class="tv-chart-toolbar" aria-label="圖表操作">
          <div class="tv-zoom-group">
            <button type="button" data-chart-action="zoom-in" aria-label="放大 K 棒" title="放大">+</button>
            <button type="button" data-chart-action="zoom-out" aria-label="縮小 K 棒" title="縮小">−</button>
            <button type="button" data-chart-action="reset" aria-label="重設圖表" title="重設">重設</button>
          </div>
          <span class="tv-status" aria-live="polite">載入圖表中</span>
        </div>
        <div class="tv-canvas-wrap">
          <canvas id="stockTradingChart" aria-label="可縮放 K 線圖"></canvas>
          <div class="tv-crosshair-tooltip" hidden></div>
        </div>
      </div>
    `;

    canvas = document.querySelector("#stockTradingChart");
    ctx = canvas?.getContext("2d");
    tooltip = document.querySelector(".tv-crosshair-tooltip");
    statusText = document.querySelector(".tv-status");

    chartScroll.querySelector('[data-chart-action="zoom-in"]')?.addEventListener("click", () => zoom(0.82, 1));
    chartScroll.querySelector('[data-chart-action="zoom-out"]')?.addEventListener("click", () => zoom(1.2, 1));
    chartScroll.querySelector('[data-chart-action="reset"]')?.addEventListener("click", resetView);

    canvas?.addEventListener("wheel", onWheel, { passive: false });
    canvas?.addEventListener("pointerdown", onPointerDown);
    canvas?.addEventListener("pointermove", onPointerMove);
    canvas?.addEventListener("pointerup", onPointerUp);
    canvas?.addEventListener("pointerleave", onPointerLeave);

    resizeObserver = new ResizeObserver(() => draw());
    if (canvas) resizeObserver.observe(canvas);
  }

  function setupTabs() {
    tabs.forEach((button) => {
      const key = keyFromLabel(button.textContent);
      if (!key) return;
      button.dataset.chartKey = key;
      button.classList.toggle("active", key === state.timeframe || Boolean(state.indicators[key]));
      button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
      button.addEventListener("click", () => {
        if (["day", "week", "month"].includes(key)) {
          state.timeframe = key;
          state.displayRows = aggregateRows(state.rows, key);
          resetView(false);
        } else {
          state.indicators[key] = !state.indicators[key];
        }
        syncTabs();
        draw();
      });
    });
  }

  function setupSearchAndWatchlist() {
    if (search) {
      search.setAttribute("autocomplete", "off");
      searchResults = document.createElement("div");
      searchResults.className = "stock-search-results";
      searchResults.hidden = true;
      search.closest(".search-box")?.appendChild(searchResults);

      search.addEventListener("input", () => {
        const value = search.value.trim();
        search.dataset.hasValue = value ? "true" : "false";
        renderSearchResults(value);
      });
      search.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        const match = findSearchMatches(search.value.trim())[0];
        if (!match) return;
        event.preventDefault();
        applySymbol(match.symbol);
      });
      search.addEventListener("focus", () => renderSearchResults(search.value.trim()));
      document.addEventListener("click", (event) => {
        if (!event.target.closest(".search-box")) hideSearchResults();
      });
    }

    if (select) {
      select.setAttribute("aria-label", "自選清單");
      captureUniverseFromSelect();
      renderWatchlistSelect();
      selectObserver = new MutationObserver(() => {
        captureUniverseFromSelect();
        renderWatchlistSelect();
      });
      selectObserver.observe(select, { childList: true });
    }

    loadCompanyUniverse();
    loadRevenueUniverse();
    loadRegularBoardVolume();
    loadWatchlistFromSupabase().then(() => {
      renderWatchlistSelect();
      updateFavoriteState();
    });

    favorite?.addEventListener("click", () => {
      if (!state.symbol) return;
      const list = readWatchlist();
      const exists = list.includes(state.symbol);
      if (!exists && !canAddWatchlist(list)) {
        showFavoriteNotice("基本會員最多加入 5 檔自選股");
        return;
      }
      const next = exists ? list.filter((symbol) => symbol !== state.symbol) : [state.symbol, ...list];
      writeWatchlist(next);
      renderWatchlistSelect();
      updateFavoriteState();
      showFavoriteNotice(exists ? "已從自選清單移除" : "已加入自選清單");
    });
    updateFavoriteState();
  }

  async function loadCompanyUniverse() {
    try {
      const companies = await fetchJson("../data/company-meta.json");
      Object.entries(companies || {}).forEach(([symbol, meta]) => {
        if (!symbol || !meta?.name) return;
        state.stockUniverse.set(symbol, {
          symbol,
          name: meta.name,
          sector: meta.sector || "",
          market: meta.market || "",
          label: `${symbol} ${meta.name}`,
        });
      });
      renderWatchlistSelect();
      if (search?.value.trim()) renderSearchResults(search.value.trim());
      if (state.rows.length) updateDerivedPanels(state.symbol, state.rows);
    } catch (error) {
      console.warn("[stock-analysis] company universe unavailable", error);
    }
  }

  async function loadRevenueUniverse() {
    const sources = await Promise.allSettled([
      fetchJson("../data/candidates.json"),
      fetchJson("../data/site-data.json"),
    ]);
    sources.forEach((result) => {
      if (result.status === "fulfilled") {
        ingestRevenueData(result.value);
        ingestThemeData(result.value);
      }
      else console.warn("[stock-analysis] revenue source unavailable", result.reason);
    });
    updateRevenueCard(state.symbol);
    if (state.rows.length) updateDerivedPanels(state.symbol, state.rows);
  }

  function ingestRevenueData(data) {
    const visit = (value) => {
      if (Array.isArray(value)) {
        value.forEach(visit);
        return;
      }
      if (!value || typeof value !== "object") return;
      addRevenueStock(value);
      addThemeStock(value);
      Object.entries(value).forEach(([key, child]) => {
        if (key === "series" || key === "history" || key === "price") return;
        visit(child);
      });
    };
    visit(data);
  }

  function ingestThemeData(data) {
    Object.entries(data?.themeHeat || {}).forEach(([theme, item]) => {
      (item?.leaders || []).forEach((stock) => addThemeStock(stock, theme));
    });
  }

  function addRevenueStock(stock) {
    const symbol = String(stock?.symbol || stock?.code || "").trim();
    if (!symbol || !Number.isFinite(Number(stock.revenue))) return;
    const current = state.revenueUniverse.get(symbol);
    if (current && String(current.revenueMonth || "") >= String(stock.revenueMonth || "")) return;
    state.revenueUniverse.set(symbol, {
      symbol,
      name: stock.name || "",
      sector: stock.sector || stock.revenueSector || "",
      market: stock.market || "",
      revenue: Number(stock.revenue),
      revenueYoy: Number(stock.revenueYoy),
      revenueMom: Number(stock.revenueMom),
      revenueMonth: stock.revenueMonth,
      revenueSector: stock.revenueSector,
    });
  }

  function addThemeStock(stock, themeName) {
    const symbol = String(stock?.symbol || stock?.code || "").trim();
    if (!symbol) return;
    const themes = [
      ...(Array.isArray(stock.themes) ? stock.themes : []),
      themeName,
    ].filter(Boolean).map((theme) => String(theme).trim()).filter(Boolean);
    if (!themes.length) return;
    const current = state.themeUniverse.get(symbol) || [];
    themes.forEach((theme) => {
      if (!current.includes(theme)) current.push(theme);
    });
    state.themeUniverse.set(symbol, current.slice(0, 8));
  }

  async function loadRegularBoardVolume() {
    if (regularBoardVolumePromise) return regularBoardVolumePromise;
    regularBoardVolumePromise = (async () => {
      try {
        const data = window.AI_STOCK_REGULAR_BOARD_VOLUME || (await fetchJson("../data/regular-board-volume.json"));
        ingestRegularBoardVolume(data);
      } catch (error) {
        console.warn("[stock-analysis] regular board volume unavailable", error);
      }
      return state.regularBoardVolume;
    })();
    return regularBoardVolumePromise;
  }

  function ingestRegularBoardVolume(data) {
    Object.entries(data?.stocks || {}).forEach(([symbol, item]) => {
      const shares = Number(item.regularBoardShares);
      const lots = Number(item.regularBoardLots);
      if (!symbol || !Number.isFinite(shares) || shares <= 0) return;
      state.regularBoardVolume.set(symbol, {
        date: item.date,
        shares,
        lots: Number.isFinite(lots) ? lots : Math.floor(shares / 1000),
      });
    });
  }

  async function fetchJson(url) {
    return JSON.parse(await fetchText(url));
  }

  async function fetchText(url) {
    if (typeof window.fetch === "function") {
      const response = await window.fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    }
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onload = () => {
        if (request.status >= 200 && request.status < 300) resolve(request.responseText);
        else reject(new Error(`HTTP ${request.status}`));
      };
      request.onerror = () => reject(new Error("Network request failed"));
      request.send();
    });
  }

  function setupVolumeUnitGuard() {
    const volumeNode = document.querySelector("#stockVolume");
    if (!volumeNode) return;
    volumeObserver = new MutationObserver(() => normalizeSummaryVolume());
    volumeObserver.observe(volumeNode, { childList: true, characterData: true, subtree: true });
    normalizeSummaryVolume();
  }

  function normalizeSummaryVolume(rawValue) {
    const volumeNode = document.querySelector("#stockVolume");
    if (!volumeNode) return;
    const regularLots = regularBoardLotsForSummary();
    if (Number.isFinite(regularLots)) {
      setVolumeText(volumeNode, `${regularLots.toLocaleString("zh-TW")} 張`);
      return;
    }
    if (Number.isFinite(rawValue)) {
      setVolumeText(volumeNode, formatVolumeLotsExact(rawValue));
      return;
    }
    const text = volumeNode.textContent.trim();
    if (!text || text.includes("張")) return;
    const numeric = Number(text.replace(/[^\d.]/g, ""));
    if (Number.isFinite(numeric) && numeric > 0) setVolumeText(volumeNode, formatVolumeLotsExact(numeric));
  }

  function regularBoardLotsForSummary() {
    const override = state.regularBoardVolume.get(state.symbol);
    if (!override) return null;
    const latest = state.rows.at(-1);
    if (latest?.date && override.date && latest.date !== override.date) return null;
    return override.lots;
  }

  function setVolumeText(node, value) {
    if (node.textContent !== value) node.textContent = value;
  }

  function captureUniverseFromSelect() {
    if (!select) return;
    Array.from(select.options).forEach((option) => {
      const symbol = option.value?.trim();
      const text = option.textContent?.trim();
      if (!symbol || !text || text.includes("自選清單")) return;
      const normalized = normalizeStockLabel(symbol, text);
      state.stockUniverse.set(symbol, normalized);
    });
  }

  function normalizeStockLabel(symbol, text) {
    const clean = text.replace(/\s+/g, " ").trim();
    const name = clean.replace(new RegExp(`^${symbol}\\s*`), "").replace(/（目前）$/, "").trim();
    return { symbol, name, label: name ? `${symbol} ${name}` : symbol };
  }

  function getStored(key) {
    try {
      if (window.localStorage) return localStorage.getItem(key);
    } catch (_) {}
    const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function currentUser() {
    try {
      const account = getStored("aiStockLabSession");
      const users = JSON.parse(getStored("aiStockLabUsers") || "{}");
      return account ? users[account] || { account, role: "basic" } : { account: "guest", role: "basic" };
    } catch (_) {
      return { account: "guest", role: "basic" };
    }
  }

  function currentAccount() {
    return currentUser().account || "guest";
  }

  function currentRole() {
    const user = currentUser();
    if (user.role === "advanced" && user.advancedExpiresAt) {
      const expiresAt = new Date(user.advancedExpiresAt).getTime();
      if (!Number.isNaN(expiresAt) && expiresAt <= Date.now()) return "basic";
    }
    return user.role || "basic";
  }

  function scopedKey(base) {
    return `${base}:${currentAccount()}`;
  }

  function normalizeWatchlist(list) {
    return Array.from(new Set((Array.isArray(list) ? list : [])
      .map((item) => String(item || "").trim())
      .filter(Boolean)));
  }

  function readLocalWatchlist() {
    try {
      const list = JSON.parse(localStorage.getItem(scopedKey(watchlistBaseKey)) || "[]");
      return normalizeWatchlist(list);
    } catch (_) {
      return [];
    }
  }

  function readWatchlist() {
    return remoteWatchlist ? [...remoteWatchlist] : readLocalWatchlist();
  }

  function writeLocalWatchlist(list) {
    try {
      localStorage.setItem(scopedKey(watchlistBaseKey), JSON.stringify(normalizeWatchlist(list)));
    } catch (_) {}
  }

  function writeWatchlist(list) {
    const next = normalizeWatchlist(list);
    remoteWatchlist = next;
    writeLocalWatchlist(next);
    syncWatchlistToSupabase(next);
  }

  async function currentSupabaseUser() {
    const supabase = await window.AIStockSupabase?.client?.();
    if (!supabase) return null;
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data?.user || null;
  }

  async function persistWatchlistToSupabase(user, list) {
    const supabase = await window.AIStockSupabase?.client?.();
    if (!supabase || !user?.id) return;
    const { error: deleteError } = await supabase.from("watchlist_items").delete().eq("user_id", user.id);
    if (deleteError) throw deleteError;
    const rows = normalizeWatchlist(list).map((symbol) => ({
      user_id: user.id,
      symbol,
      stock_name: stockInfo(symbol).name || null,
    }));
    if (rows.length) {
      const { error } = await supabase.from("watchlist_items").insert(rows);
      if (error) throw error;
    }
  }

  async function syncWatchlistToSupabase(list) {
    try {
      const user = await currentSupabaseUser();
      if (!user) return;
      await persistWatchlistToSupabase(user, list);
    } catch (error) {
      console.warn("[stock-analysis] watchlist sync failed", error);
    }
  }

  async function loadWatchlistFromSupabase() {
    if (watchlistLoadPromise) return watchlistLoadPromise;
    watchlistLoadPromise = (async () => {
      try {
        const supabase = await window.AIStockSupabase?.client?.();
        const user = await currentSupabaseUser();
        if (!supabase || !user?.id) return readWatchlist();
        const { data, error } = await supabase
          .from("watchlist_items")
          .select("symbol")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (error) throw error;
        const local = readLocalWatchlist();
        const merged = normalizeWatchlist([...(data || []).map((item) => item.symbol), ...local]);
        remoteWatchlist = merged;
        writeLocalWatchlist(merged);
        if (merged.length !== (data || []).length || merged.some((symbol, index) => symbol !== data[index]?.symbol)) {
          await persistWatchlistToSupabase(user, merged);
        }
        return merged;
      } catch (error) {
        console.warn("[stock-analysis] watchlist load failed", error);
        return readWatchlist();
      } finally {
        watchlistLoadPromise = null;
      }
    })();
    return watchlistLoadPromise;
  }

  function readLastSymbol() {
    try {
      return localStorage.getItem(scopedKey(lastSymbolBaseKey));
    } catch (_) {
      return "";
    }
  }

  function writeLastSymbol(symbol) {
    try {
      localStorage.setItem(scopedKey(lastSymbolBaseKey), symbol);
    } catch (_) {}
  }

  function canAddWatchlist(list) {
    return currentRole() !== "basic" || list.length < 5;
  }

  function renderWatchlistSelect() {
    if (!select) return;
    const list = readWatchlist();
    selectObserver?.disconnect();
    select.innerHTML = "";

    if (!list.length) {
      select.appendChild(new Option("自選清單（尚未加入）", ""));
    } else {
      list.forEach((symbol) => {
        const stock = stockInfo(symbol);
        select.appendChild(new Option(stock.label, symbol));
      });
      if (!list.includes(state.symbol)) {
        const stock = stockInfo(state.symbol);
        const current = new Option(`${stock.label}（目前）`, state.symbol);
        current.hidden = true;
        select.insertBefore(current, select.firstChild);
      }
    }
    select.value = list.includes(state.symbol) || select.querySelector(`option[value="${cssEscape(state.symbol)}"]`) ? state.symbol : "";
    selectObserver?.observe(select, { childList: true });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const matches = findSearchMatches(query);
    if (!query || !matches.length) {
      hideSearchResults();
      return;
    }
    searchResults.innerHTML = matches.map((stock) => `
      <button type="button" data-symbol="${escapeHtml(stock.symbol)}">
        <strong>${escapeHtml(stock.symbol)}</strong>
        <span>${escapeHtml(stock.name || stock.label)}</span>
      </button>
    `).join("");
    searchResults.hidden = false;
    searchResults.querySelectorAll("button").forEach((button) => {
      button.addEventListener("mousedown", (event) => event.preventDefault());
      button.addEventListener("click", () => applySymbol(button.dataset.symbol));
    });
  }

  function hideSearchResults() {
    if (searchResults) searchResults.hidden = true;
  }

  function findSearchMatches(query) {
    const value = query.trim().toLowerCase();
    if (!value) return [];
    const stocks = Array.from(state.stockUniverse.values());
    return stocks
      .filter((stock) => stock.symbol.includes(value) || stock.name.toLowerCase().includes(value) || stock.label.toLowerCase().includes(value))
      .sort((a, b) => {
        const aStarts = a.symbol.startsWith(value) ? 0 : 1;
        const bStarts = b.symbol.startsWith(value) ? 0 : 1;
        return aStarts - bStarts || a.symbol.localeCompare(b.symbol);
      })
      .slice(0, 12);
  }

  function applySymbol(symbol) {
    if (!symbol || !select) return;
    const stock = stockInfo(symbol);
    if (!select.querySelector(`option[value="${cssEscape(symbol)}"]`)) {
      const current = new Option(`${stock.label}（目前）`, symbol);
      current.hidden = true;
      select.appendChild(current);
    }
    select.value = symbol;
    search.value = "";
    hideSearchResults();
    select.dispatchEvent(new Event("change", { bubbles: true }));
    window.setTimeout(() => {
      renderWatchlistSelect();
      updateFavoriteState();
    }, 0);
  }

  function stockInfo(symbol) {
    if (state.stockUniverse.has(symbol)) return state.stockUniverse.get(symbol);
    const title = document.querySelector("#stockTitle")?.textContent?.trim() || symbol;
    const info = normalizeStockLabel(symbol, title.startsWith(symbol) ? title : `${symbol} ${title}`);
    state.stockUniverse.set(symbol, info);
    return info;
  }

  function updateFavoriteState() {
    if (!favorite) return;
    const active = readWatchlist().includes(state.symbol);
    favorite.classList.toggle("active", active);
    favorite.setAttribute("aria-pressed", active ? "true" : "false");
    favorite.setAttribute("title", active ? "從自選清單移除" : `加入自選清單${currentRole() === "basic" ? "（基本會員最多 5 檔）" : ""}`);
  }

  function showFavoriteNotice(message) {
    if (!favorite) return;
    let notice = document.querySelector(".favorite-notice");
    if (!notice) {
      notice = document.createElement("span");
      notice.className = "favorite-notice";
      favorite.insertAdjacentElement("afterend", notice);
    }
    notice.textContent = message;
    notice.hidden = false;
    window.clearTimeout(favoriteNoticeTimer);
    favoriteNoticeTimer = window.setTimeout(() => {
      notice.hidden = true;
    }, 2200);
  }

  function cssEscape(value) {
    return String(value).replace(/"/g, '\\"');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function keyFromLabel(label) {
    const clean = label.trim().toLowerCase();
    if (clean === "日k") return "day";
    if (clean === "週k") return "week";
    if (clean === "月k") return "month";
    if (clean === "ma5") return "ma5";
    if (clean === "ma10") return "ma10";
    if (clean === "ma20") return "ma20";
    if (clean === "ma60") return "ma60";
    if (clean === "布林") return "boll";
    if (clean === "成交量") return "volume";
    if (clean === "macd") return "macd";
    if (clean === "rsi") return "rsi";
    return "";
  }

  function syncTabs() {
    tabs.forEach((button) => {
      const key = button.dataset.chartKey;
      const active = key === state.timeframe || Boolean(state.indicators[key]);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  async function loadSymbol(symbol) {
    state.symbol = symbol || "1303";
    writeLastSymbol(state.symbol);
    updateFavoriteState();
    setStatus("載入歷史 K 線中");
    try {
      const rows = await fetchHistory(state.symbol);
      await loadRegularBoardVolume();
      const volumeRows = applyRegularBoardVolume(rows, state.symbol);
      state.rows = volumeRows.map(addIndicators);
      state.displayRows = aggregateRows(state.rows, state.timeframe);
      updateSummaryFromRows(state.symbol, volumeRows);
      updateRevenueCard(state.symbol);
      updateDerivedPanels(state.symbol, state.rows);
      [300, 1200].forEach((delay) => {
        window.setTimeout(() => {
          if (state.symbol === symbol) updateDerivedPanels(state.symbol, state.rows);
        }, delay);
      });
      normalizeSummaryVolume(volumeRows.at(-1)?.volume);
      resetView(false);
      updateChartMeta();
      draw();
    } catch (error) {
      console.error("[stock-analysis] chart history failed", error);
      state.rows = buildFallbackRows();
      state.displayRows = aggregateRows(state.rows, state.timeframe);
      resetView(false);
      setStatus("使用示範資料");
      draw();
    }
  }

  function updateDerivedPanels(symbol, rows) {
    const stats = buildStockStats(symbol, rows);
    if (!stats) return;
    syncSummaryIdentity(stats);
    updateScoreCards(stats);
    updateAnalysisCards(stats);
    updateRevenueCard(symbol);
    normalizeSummaryVolume(rows.at(-1)?.volume);
  }

  function buildStockStats(symbol, rows) {
    if (!rows?.length) return null;
    const latest = rows.at(-1);
    const previous = rows.at(-2) || latest;
    const stock = resolvedStockInfo(symbol);
    const last20 = rows.slice(-20);
    const last60 = rows.slice(-60);
    const previous20 = rows.at(-21);
    const previous60 = rows.at(-61);
    const avgVolume20 = average(last20.map((row) => row.volume));
    const avgTurnover20 = average(last20.map((row) => row.close * row.volume));
    const volumeRatio = avgVolume20 ? latest.volume / avgVolume20 : 0;
    const return1 = previous?.close ? ((latest.close - previous.close) / previous.close) * 100 : 0;
    const return20 = previous20?.close ? ((latest.close - previous20.close) / previous20.close) * 100 : 0;
    const return60 = previous60?.close ? ((latest.close - previous60.close) / previous60.close) * 100 : 0;
    const high20 = Math.max(...last20.map((row) => row.high));
    const low20 = Math.min(...last20.map((row) => row.low));
    const high60 = Math.max(...last60.map((row) => row.high));
    const volatility = annualizedVolatility(last20);
    const distanceHigh60 = high60 ? ((latest.close - high60) / high60) * 100 : 0;
    const ma20 = latest.ma20;
    const ma60 = latest.ma60;
    const trendScore = (latest.close >= ma20 ? 14 : -10) + (ma20 >= ma60 ? 10 : -6) + clamp(return20, -20, 30) * 0.55;
    const volumeScore = clamp((volumeRatio - 1) * 10, -8, 14);
    const riskPenalty = clamp(volatility - 35, 0, 40) * 0.18;
    const score = Math.round(clamp(55 + trendScore + volumeScore - riskPenalty, 1, 99));
    const heat = Math.round(clamp(45 + Math.abs(return20) * 0.45 + volumeRatio * 8, 1, 99));
    const trend = latest.close >= ma20 && ma20 >= ma60 ? "多頭排列" : latest.close >= ma20 ? "偏多" : "整理";
    const volumeStatus = volumeRatio >= 1.25 ? "放量" : volumeRatio <= 0.75 ? "量縮" : "正常";
    const risk = volatility >= 55 ? "高" : volatility >= 35 ? "中" : "低";
    return {
      symbol,
      stock,
      latest,
      return1,
      return20,
      return60,
      avgTurnover20,
      volumeRatio,
      turnover: latest.close * latest.volume,
      ma20,
      ma60,
      high20,
      low20,
      high60,
      distanceHigh60,
      volatility,
      score,
      heat,
      trend,
      volumeStatus,
      risk,
      themes: themesForStock(symbol, stock.sector),
    };
  }

  function resolvedStockInfo(symbol) {
    const stock = { ...stockInfo(symbol) };
    const revenue = state.revenueUniverse.get(symbol);
    const metaText = document.querySelector("#stockMeta")?.textContent?.trim() || "";
    const [sector, market] = metaText.split("/").map((part) => part.trim()).filter(Boolean);
    const staleName = !stock.name || stock.name === symbol || /^\d{4}\s+/.test(stock.name);
    if ((staleName || revenue?.name) && revenue?.name) stock.name = revenue.name;
    if ((!stock.sector || stock.sector === "股票資料") && revenue?.sector) stock.sector = revenue.sector;
    if ((!stock.market || stock.market === "股票資料") && revenue?.market) stock.market = revenue.market;
    if ((!stock.sector || stock.sector === "股票資料") && sector && sector !== "股票資料") stock.sector = sector;
    if ((!stock.market || stock.market === "股票資料") && market && market !== "股票資料") stock.market = market;
    stock.label = stock.name ? `${symbol} ${stock.name}` : symbol;
    state.stockUniverse.set(symbol, stock);
    return stock;
  }

  function syncSummaryIdentity(stats) {
    const title = document.querySelector("#stockTitle");
    const meta = document.querySelector("#stockMeta");
    if (title) title.textContent = stats.stock.label;
    if (meta) meta.textContent = [stats.stock.sector, stats.stock.market].filter(Boolean).join(" / ") || "股票資料";
  }

  function updateScoreCards(stats) {
    const cards = Array.from(document.querySelectorAll(".score-card"));
    const data = [
      ["AI綜合評分", stats.score, `20日 ${signed(stats.return20)} / 60日 ${signed(stats.return60)}`],
      ["題材熱度", stats.heat, `題材：${stats.themes}`],
      ["技術狀態", stats.trend, `MA20 ${formatPrice(stats.ma20)}`],
      ["籌碼狀態", stats.volumeStatus, `量能 ${formatRatio(stats.volumeRatio)} 倍`],
      ["風險等級", stats.risk, `波動 ${formatPercent(stats.volatility)}`],
    ];
    cards.forEach((card, index) => {
      const item = data[index];
      if (!item) return;
      const title = card.querySelector("h2");
      const value = card.querySelector("strong");
      const note = card.querySelector("p");
      if (title) title.textContent = item[0];
      if (value) value.textContent = item[1];
      if (note) note.textContent = item[2];
    });
  }

  function updateAnalysisCards(stats) {
    const cards = Array.from(document.querySelectorAll(".analysis-card"));
    renderDl(cards[0], "A. 產業與題材", [
      ["所屬產業", stats.stock.sector || "股票資料"],
      ["上市櫃別", stats.stock.market || "股票資料"],
      ["相關題材", stats.themes],
      ["主要風險", `波動 ${formatPercent(stats.volatility)}，距60日高點 ${formatPercent(stats.distanceHigh60)}`],
    ]);
    renderDl(cards[1], "B. 技術分析", [
      ["趨勢", stats.trend],
      ["均線", `${formatPrice(stats.ma20)} / ${formatPrice(stats.ma60)}`],
      ["20日報酬", signed(stats.return20)],
      ["60日報酬", signed(stats.return60)],
      ["支撐 / 壓力", `${formatPrice(stats.low20)} / ${formatPrice(stats.high20)}`],
    ]);
    renderDl(cards[2], "C. 量能分析", [
      ["成交量", formatVolumeLotsExact(stats.latest.volume)],
      ["成交金額", formatTurnover(stats.turnover)],
      ["20日均額", formatTurnover(stats.avgTurnover20)],
      ["量能倍率", `${formatRatio(stats.volumeRatio)} 倍`],
    ]);
  }

  function renderDl(card, titleText, rows) {
    if (!card) return;
    const heading = card.querySelector("h2");
    const dl = card.querySelector("dl");
    if (heading) {
      const icon = heading.querySelector("svg");
      heading.textContent = "";
      if (icon) heading.appendChild(icon);
      heading.append(titleText);
    }
    if (dl) {
      dl.innerHTML = rows.map(([label, value]) => `
        <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>
      `).join("");
    }
  }

  function applyRegularBoardVolume(rows, symbol) {
    const override = state.regularBoardVolume.get(symbol);
    if (!override || !rows.length) return rows;
    const index = rows.findIndex((row) => row.date === override.date);
    if (index < 0) return rows;
    return rows.map((row, rowIndex) => (rowIndex === index ? { ...row, volume: override.shares } : row));
  }

  function updateSummaryFromRows(symbol, rows) {
    const latest = rows.at(-1);
    const previous = rows.at(-2);
    if (!latest) return;
    const stock = stockInfo(symbol);
    const title = document.querySelector("#stockTitle");
    const meta = document.querySelector("#stockMeta");
    const price = document.querySelector("#stockPrice");
    const change = document.querySelector("#stockChange");
    const date = document.querySelector("#stockDate");

    if (title) title.textContent = stock.label;
    if (meta) meta.textContent = [stock.sector, stock.market].filter(Boolean).join(" / ") || "股票資料";
    if (price) price.textContent = formatPrice(latest.close);
    if (date) date.textContent = latest.date;
    if (change && previous?.close) {
      const percent = ((latest.close - previous.close) / previous.close) * 100;
      change.textContent = `${percent >= 0 ? "▲" : "▼"} ${signed(percent)}`;
      change.classList.toggle("negative", percent < 0);
    }
  }

  function updateRevenueCard(symbol) {
    const card = document.querySelector(".fundamentals");
    const mini = card?.querySelector(".mini-grid");
    if (!card || !mini) return;
    const revenue = state.revenueUniverse.get(symbol);
    const html = revenue
      ? `
        <div><span>最新月營收</span><strong>${formatRevenue(revenue.revenue)}</strong></div>
        <div><span>年增率 YoY</span><strong>${formatSignedPercent(revenue.revenueYoy)}</strong></div>
        <div><span>月增率 MoM</span><strong>${formatSignedPercent(revenue.revenueMom)}</strong></div>
        <div><span>資料月份</span><strong>${formatRevenueMonth(revenue.revenueMonth)}</strong></div>
      `
      : `
        <div><span>最新月營收</span><strong>暫無資料</strong></div>
        <div><span>年增率 YoY</span><strong>暫無資料</strong></div>
        <div><span>月增率 MoM</span><strong>暫無資料</strong></div>
        <div><span>資料月份</span><strong>暫無資料</strong></div>
      `;
    card.querySelector("h2").lastChild.textContent = "D. 營收表現";
    mini.innerHTML = html;
  }

  async function fetchHistory(symbol) {
    const paths = [
      `../data/history/twse/adjusted/${symbol}.csv`,
      `../data/history/tpex/adjusted/${symbol}.csv`,
    ];
    let lastError;
    for (const path of paths) {
      try {
        const rows = parseCsv(await fetchText(path));
        if (rows.length) return rows;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("No history rows");
  }

  function parseCsv(text) {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines.shift()?.split(",") || [];
    const index = (name) => headers.indexOf(name);
    return lines
      .map((line) => {
        const cols = line.split(",");
        return {
          date: cols[index("date")],
          open: Number(cols[index("adj_open")]),
          high: Number(cols[index("adj_high")]),
          low: Number(cols[index("adj_low")]),
          close: Number(cols[index("adj_close")]),
          volume: Number(cols[index("volume")]),
        };
      })
      .filter((row) => row.date && Number.isFinite(row.close) && Number.isFinite(row.volume));
  }

  function addIndicators(row, index, rows) {
    row.ma5 = sma(rows, index, 5);
    row.ma10 = sma(rows, index, 10);
    row.ma20 = sma(rows, index, 20);
    row.ma60 = sma(rows, index, 60);
    const sd20 = standardDeviation(rows, index, 20, row.ma20);
    row.bollUpper = Number.isFinite(row.ma20) && Number.isFinite(sd20) ? row.ma20 + sd20 * 2 : null;
    row.bollLower = Number.isFinite(row.ma20) && Number.isFinite(sd20) ? row.ma20 - sd20 * 2 : null;
    row.ema12 = ema(rows, index, 12, "close");
    row.ema26 = ema(rows, index, 26, "close");
    row.macd = row.ema12 - row.ema26;
    row.signal = ema(rows, index, 9, "macd");
    row.histogram = row.macd - row.signal;
    row.rsi = rsi(rows, index, 14);
    return row;
  }

  function sma(rows, index, period) {
    if (index + 1 < period) return null;
    let total = 0;
    for (let i = index - period + 1; i <= index; i += 1) total += rows[i].close;
    return total / period;
  }

  function standardDeviation(rows, index, period, mean) {
    if (index + 1 < period || !Number.isFinite(mean)) return null;
    let total = 0;
    for (let i = index - period + 1; i <= index; i += 1) {
      total += (rows[i].close - mean) ** 2;
    }
    return Math.sqrt(total / period);
  }

  function ema(rows, index, period, key) {
    const k = 2 / (period + 1);
    let value = rows[0][key] ?? 0;
    for (let i = 1; i <= index; i += 1) value = (rows[i][key] ?? value) * k + value * (1 - k);
    return value;
  }

  function rsi(rows, index, period) {
    if (index < period) return null;
    let gains = 0;
    let losses = 0;
    for (let i = index - period + 1; i <= index; i += 1) {
      const diff = rows[i].close - rows[i - 1].close;
      if (diff >= 0) gains += diff;
      else losses -= diff;
    }
    if (losses === 0) return 100;
    return 100 - 100 / (1 + gains / losses);
  }

  function aggregateRows(rows, timeframe) {
    if (timeframe === "day") return rows;
    const buckets = new Map();
    rows.forEach((row) => {
      const date = new Date(`${row.date}T00:00:00`);
      const key = timeframe === "month" ? row.date.slice(0, 7) : weekKey(date);
      const bucket = buckets.get(key);
      if (!bucket) {
        buckets.set(key, { ...row });
        return;
      }
      bucket.high = Math.max(bucket.high, row.high);
      bucket.low = Math.min(bucket.low, row.low);
      bucket.close = row.close;
      bucket.volume += row.volume;
      bucket.date = row.date;
    });
    return Array.from(buckets.values()).map(addIndicators);
  }

  function weekKey(date) {
    const copy = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = copy.getUTCDay() || 7;
    copy.setUTCDate(copy.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(copy.getUTCFullYear(), 0, 1));
    const week = Math.ceil(((copy - yearStart) / 86400000 + 1) / 7);
    return `${copy.getUTCFullYear()}-${String(week).padStart(2, "0")}`;
  }

  function resetView(shouldDraw = true) {
    const total = state.displayRows.length;
    state.visibleCount = Math.min(total, state.timeframe === "day" ? 126 : 90);
    state.endIndex = Math.max(0, total - 1);
    if (shouldDraw) draw();
  }

  function zoom(factor, anchorRatio = 0.5) {
    const total = state.displayRows.length;
    const oldCount = state.visibleCount;
    const newCount = Math.max(24, Math.min(total, Math.round(oldCount * factor)));
    if (newCount === oldCount) return;
    const start = Math.max(0, state.endIndex - oldCount + 1);
    const anchorIndex = start + Math.round(oldCount * anchorRatio);
    state.visibleCount = newCount;
    state.endIndex = clamp(Math.round(anchorIndex + newCount * (1 - anchorRatio)), newCount - 1, total - 1);
    draw();
  }

  function onWheel(event) {
    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const anchorRatio = (event.clientX - rect.left) / rect.width;
    zoom(event.deltaY > 0 ? 1.12 : 0.88, anchorRatio);
  }

  function onPointerDown(event) {
    state.dragging = true;
    state.dragX = event.clientX;
    state.dragEnd = state.endIndex;
    canvas.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    const rect = canvas.getBoundingClientRect();
    if (state.dragging) {
      const candleWidth = chartArea(rect).width / Math.max(1, state.visibleCount);
      const diff = Math.round((state.dragX - event.clientX) / candleWidth);
      state.endIndex = clamp(state.dragEnd + diff, state.visibleCount - 1, state.displayRows.length - 1);
      draw();
      return;
    }
    state.pointer = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      pageX: event.clientX,
      pageY: event.clientY,
    };
    draw();
  }

  function onPointerUp(event) {
    state.dragging = false;
    canvas.releasePointerCapture?.(event.pointerId);
  }

  function onPointerLeave() {
    state.dragging = false;
    state.pointer = null;
    if (tooltip) tooltip.hidden = true;
    draw();
  }

  function draw() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    if (!rect.width || !rect.height) return;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);

    const rows = visibleRows();
    if (!rows.length) {
      drawCenteredText("載入 K 線資料中", rect);
      return;
    }

    const areas = layout(rect);
    const priceRange = priceScale(rows);
    const volumeMax = Math.max(...rows.map((row) => row.volume), 1);

    drawGrid(areas.price, priceRange, true);
    drawCandles(rows, areas.price, priceRange);
    drawIndicatorLines(rows, areas.price, priceRange);

    if (state.indicators.volume) drawVolume(rows, areas.volume, volumeMax);
    if (state.indicators.macd) drawMacd(rows, areas.macd);
    if (state.indicators.rsi) drawRsi(rows, areas.rsi);

    drawDates(rows, areas.price, rect);
    drawCrosshair(rows, areas);
    updateStatus(rows);
  }

  function visibleRows() {
    const total = state.displayRows.length;
    const end = clamp(state.endIndex, 0, total - 1);
    const start = Math.max(0, end - state.visibleCount + 1);
    return state.displayRows.slice(start, end + 1);
  }

  function layout(rect) {
    const left = 58;
    const right = 64;
    const top = 16;
    const bottom = 28;
    const volumeHeight = state.indicators.volume ? 86 : 0;
    const volumeGap = state.indicators.volume ? 12 : 0;
    const macdHeight = state.indicators.macd ? 124 : 0;
    const rsiHeight = state.indicators.rsi ? 78 : 0;
    const panelGap = 14;
    const lowerCount = Number(state.indicators.macd) + Number(state.indicators.rsi);
    const oscillatorHeight = lowerCount
      ? panelGap + macdHeight + rsiHeight + (lowerCount - 1) * 12
      : 0;
    const lowerHeight = volumeHeight + volumeGap + oscillatorHeight;
    const priceHeight = Math.max(210, rect.height - top - bottom - lowerHeight);
    const price = { x: left, y: top, width: rect.width - left - right, height: priceHeight };
    const volume = state.indicators.volume
      ? { x: left, y: price.y + price.height + volumeGap, width: price.width, height: volumeHeight }
      : null;
    const oscillatorTop = volume ? volume.y + volume.height : price.y + price.height;
    const macd = state.indicators.macd
      ? { x: left, y: oscillatorTop + panelGap, width: price.width, height: macdHeight }
      : null;
    const rsi = state.indicators.rsi
      ? { x: left, y: (macd ? macd.y + macd.height + 12 : oscillatorTop + panelGap), width: price.width, height: rsiHeight }
      : null;
    return { price, volume, macd, rsi };
  }

  function chartArea(rect) {
    return layout(rect).price;
  }

  function priceScale(rows) {
    const values = rows.flatMap((row) => [
      row.high,
      row.low,
      state.indicators.ma5 ? row.ma5 : null,
      state.indicators.ma10 ? row.ma10 : null,
      state.indicators.ma20 ? row.ma20 : null,
      state.indicators.ma60 ? row.ma60 : null,
      state.indicators.boll ? row.bollUpper : null,
      state.indicators.boll ? row.bollLower : null,
    ]).filter(Number.isFinite);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const pad = Math.max((max - min) * 0.08, max * 0.01);
    return { min: min - pad, max: max + pad };
  }

  function xFor(area, rows, index) {
    if (rows.length <= 1) return area.x + area.width / 2;
    return area.x + (index / (rows.length - 1)) * area.width;
  }

  function yFor(area, range, value) {
    return area.y + ((range.max - value) / (range.max - range.min || 1)) * area.height;
  }

  function drawGrid(area, range, priceLabels) {
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.font = "12px Noto Sans TC, Microsoft JhengHei, sans-serif";
    ctx.fillStyle = colors.text;
    ctx.textBaseline = "middle";
    for (let i = 0; i <= 5; i += 1) {
      const y = area.y + (area.height / 5) * i;
      drawLine(area.x, y, area.x + area.width, y);
      if (priceLabels) {
        const label = range.max - ((range.max - range.min) / 5) * i;
        ctx.fillText(formatPrice(label), 12, y);
      }
    }
    ctx.setLineDash([]);
  }

  function drawVolume(rows, area, volumeMax) {
    if (!area) return;
    drawPanel(area, "成交量");
    const yBase = area.y + area.height;
    const candleStep = area.width / Math.max(rows.length, 1);
    rows.forEach((row, index) => {
      const barHeight = (row.volume / volumeMax) * (area.height - 18);
      const x = xFor(area, rows, index) - candleStep * 0.34;
      ctx.fillStyle = row.close >= row.open ? "rgba(239, 83, 80, .45)" : "rgba(0, 168, 120, .45)";
      ctx.fillRect(x, yBase - barHeight, Math.max(2, candleStep * 0.68), barHeight);
    });
    ctx.fillStyle = colors.text;
    ctx.fillText(`${formatVolume(volumeMax)}`, area.x + area.width + 12, area.y + 8);
  }

  function drawCandles(rows, area, range) {
    const candleStep = area.width / Math.max(rows.length, 1);
    const bodyWidth = clamp(candleStep * 0.62, 3, 14);
    rows.forEach((row, index) => {
      const x = xFor(area, rows, index);
      const openY = yFor(area, range, row.open);
      const closeY = yFor(area, range, row.close);
      const highY = yFor(area, range, row.high);
      const lowY = yFor(area, range, row.low);
      const up = row.close >= row.open;
      ctx.strokeStyle = up ? colors.up : colors.down;
      ctx.fillStyle = up ? colors.up : colors.down;
      ctx.lineWidth = 1.5;
      drawLine(x, highY, x, lowY);
      ctx.fillRect(x - bodyWidth / 2, Math.min(openY, closeY), bodyWidth, Math.max(2, Math.abs(openY - closeY)));
    });
  }

  function drawIndicatorLines(rows, area, range) {
    [
      ["ma5", colors.ma5],
      ["ma10", colors.ma10],
      ["ma20", colors.ma20],
      ["ma60", colors.ma60],
    ].forEach(([key, color]) => {
      if (state.indicators[key]) drawSeriesLine(rows, area, range, key, color, 1.5);
    });
    if (state.indicators.boll) {
      drawSeriesLine(rows, area, range, "bollUpper", colors.boll, 1.2, [5, 5]);
      drawSeriesLine(rows, area, range, "bollLower", colors.boll, 1.2, [5, 5]);
    }
  }

  function drawSeriesLine(rows, area, range, key, color, width, dash = []) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(dash);
    ctx.beginPath();
    let started = false;
    rows.forEach((row, index) => {
      const value = row[key];
      if (!Number.isFinite(value)) return;
      const x = xFor(area, rows, index);
      const y = yFor(area, range, value);
      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    ctx.restore();
  }

  function drawMacd(rows, area) {
    if (!area) return;
    const values = rows.flatMap((row) => [row.macd, row.signal, row.histogram]).filter(Number.isFinite);
    const maxAbs = Math.max(...values.map(Math.abs), 1);
    const range = { min: -maxAbs * 1.2, max: maxAbs * 1.2 };
    drawPanel(area, "MACD");
    const zeroY = yFor(area, range, 0);
    ctx.strokeStyle = "#b8c6d8";
    drawLine(area.x, zeroY, area.x + area.width, zeroY);
    const step = area.width / Math.max(rows.length, 1);
    rows.forEach((row, index) => {
      const x = xFor(area, rows, index);
      const y = yFor(area, range, row.histogram);
      ctx.fillStyle = row.histogram >= 0 ? "rgba(239, 83, 80, .7)" : "rgba(0, 168, 120, .7)";
      ctx.fillRect(x - step * 0.28, Math.min(y, zeroY), Math.max(2, step * 0.56), Math.abs(zeroY - y));
    });
    drawSeriesLine(rows, area, range, "macd", colors.macd, 1.4);
    drawSeriesLine(rows, area, range, "signal", colors.signal, 1.4);
  }

  function drawRsi(rows, area) {
    if (!area) return;
    const range = { min: 0, max: 100 };
    drawPanel(area, "RSI");
    ctx.strokeStyle = "#cbd5e1";
    ctx.setLineDash([5, 5]);
    drawLine(area.x, yFor(area, range, 70), area.x + area.width, yFor(area, range, 70));
    drawLine(area.x, yFor(area, range, 30), area.x + area.width, yFor(area, range, 30));
    ctx.setLineDash([]);
    drawSeriesLine(rows, area, range, "rsi", "#7c3aed", 1.6);
  }

  function drawPanel(area, label) {
    ctx.fillStyle = colors.text;
    ctx.font = "12px Noto Sans TC, Microsoft JhengHei, sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText(label, 12, area.y);
    drawGrid(area, { min: 0, max: 1 }, false);
  }

  function drawDates(rows, area, rect) {
    ctx.fillStyle = colors.text;
    ctx.font = "12px Noto Sans TC, Microsoft JhengHei, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    const count = Math.min(7, rows.length);
    for (let i = 0; i < count; i += 1) {
      const index = Math.round((rows.length - 1) * (i / Math.max(1, count - 1)));
      ctx.fillText(rows[index].date.slice(5), xFor(area, rows, index), rect.height - 6);
    }
    ctx.textAlign = "left";
  }

  function drawCrosshair(rows, areas) {
    if (!state.pointer || !tooltip) return;
    const area = areas.price;
    if (state.pointer.x < area.x || state.pointer.x > area.x + area.width || state.pointer.y < area.y || state.pointer.y > area.y + area.height) {
      tooltip.hidden = true;
      return;
    }
    const index = clamp(Math.round(((state.pointer.x - area.x) / area.width) * (rows.length - 1)), 0, rows.length - 1);
    const row = rows[index];
    const x = xFor(area, rows, index);
    ctx.strokeStyle = "rgba(37, 99, 235, .45)";
    ctx.setLineDash([4, 4]);
    drawLine(x, area.y, x, area.y + area.height);
    drawLine(area.x, state.pointer.y, area.x + area.width, state.pointer.y);
    ctx.setLineDash([]);
    tooltip.hidden = false;
    tooltip.style.left = `${Math.min(state.pointer.x + 14, area.x + area.width - 196)}px`;
    tooltip.style.top = `${Math.max(12, state.pointer.y - 54)}px`;
    tooltip.innerHTML = `
      <strong>${row.date}</strong>
      <span>開 ${formatPrice(row.open)} 高 ${formatPrice(row.high)} 低 ${formatPrice(row.low)} 收 ${formatPrice(row.close)}</span>
      <span>量 ${formatVolume(row.volume)} ${Number.isFinite(row.rsi) ? `RSI ${row.rsi.toFixed(1)}` : ""}</span>
    `;
  }

  function updateStatus(rows) {
    if (!rows.length) return;
    const last = rows[rows.length - 1];
    const change = last.close - rows[0].close;
    const percent = (change / rows[0].close) * 100;
    const rangeText = `${labels[state.timeframe]} | ${rows[0].date} 至 ${last.date}`;
    if (chartHeadMeta) chartHeadMeta.textContent = rangeText;
    setStatus(`${labels[state.timeframe]}｜${rows[0].date} 至 ${last.date}｜${rows.length} 根｜區間 ${signed(percent)}`);
  }

  function updateChartMeta() {
    if (!chartHeadMeta || !state.displayRows.length) return;
    const first = state.displayRows[Math.max(0, state.displayRows.length - state.visibleCount)];
    const last = state.displayRows[state.displayRows.length - 1];
    chartHeadMeta.textContent = `${labels[state.timeframe]} | ${first.date} 至 ${last.date}`;
  }

  function average(values) {
    const numbers = values.filter((value) => Number.isFinite(value));
    if (!numbers.length) return 0;
    return numbers.reduce((total, value) => total + value, 0) / numbers.length;
  }

  function annualizedVolatility(rows) {
    const returns = [];
    for (let index = 1; index < rows.length; index += 1) {
      const previous = rows[index - 1]?.close;
      const current = rows[index]?.close;
      if (previous > 0 && current > 0) returns.push(((current - previous) / previous) * 100);
    }
    if (returns.length < 2) return 0;
    const mean = average(returns);
    const variance = average(returns.map((value) => (value - mean) ** 2));
    return Math.sqrt(variance) * Math.sqrt(252);
  }

  function themesFor(sector) {
    const text = String(sector || "");
    const map = [
      [/電子|零組件|半導體|光電|電腦|通信|資訊/, "電子供應鏈 / AI / PCB"],
      [/塑膠|化學|橡膠/, "塑化原料 / 景氣循環"],
      [/金融|保險|銀行|證券/, "金融股 / 利率 / 股利"],
      [/航運|運輸|觀光/, "運輸觀光 / 景氣循環"],
      [/鋼鐵|水泥|建材|營建/, "原物料 / 建設需求"],
      [/生技|醫療/, "生技醫療 / 新藥題材"],
    ];
    const match = map.find(([pattern]) => pattern.test(text));
    return match ? match[1] : "台股題材 / 價量動能";
  }

  function themesForStock(symbol, sector) {
    const themes = state.themeUniverse.get(symbol) || [];
    if (themes.length) return themes.slice(0, 6).join(" / ");
    return themesFor(sector);
  }

  function setStatus(text) {
    if (statusText) statusText.textContent = text;
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function drawCenteredText(text, rect) {
    ctx.fillStyle = colors.text;
    ctx.font = "14px Noto Sans TC, Microsoft JhengHei, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(text, rect.width / 2, rect.height / 2);
    ctx.textAlign = "left";
  }

  function formatPrice(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "--";
    return number.toFixed(number >= 100 ? 1 : 2).replace(/\.0$/, "");
  }

  function formatVolume(value) {
    const lots = Number(value || 0) / 1000;
    if (lots >= 10000) return `${floorTo(lots / 10000, 1).toLocaleString("zh-TW", { maximumFractionDigits: 1 })}萬張`;
    return `${Math.floor(lots).toLocaleString("zh-TW")}張`;
  }

  function formatRevenue(value) {
    const amount = Number(value || 0);
    if (!amount) return "暫無資料";
    return `${(amount / 100000).toLocaleString("zh-TW", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} 億`;
  }

  function formatSignedPercent(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "暫無資料";
    return `${number >= 0 ? "+" : ""}${number.toLocaleString("zh-TW", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
  }

  function formatRevenueMonth(value) {
    const text = String(value || "");
    if (/^\d{5}$/.test(text)) return `${Number(text.slice(0, 3)) + 1911}/${text.slice(3)} 月`;
    if (/^\d{6}$/.test(text)) return `${text.slice(0, 4)}/${text.slice(4)} 月`;
    return text || "暫無資料";
  }

  function formatVolumeLotsExact(value) {
    return `${Math.floor(Number(value || 0) / 1000).toLocaleString("zh-TW")} 張`;
  }

  function formatTurnover(value) {
    const number = Number(value || 0);
    if (number >= 100000000) return `${(number / 100000000).toLocaleString("zh-TW", { maximumFractionDigits: 1 })} 億`;
    if (number >= 10000) return `${Math.floor(number / 10000).toLocaleString("zh-TW")} 萬`;
    return number.toLocaleString("zh-TW", { maximumFractionDigits: 0 });
  }

  function formatRatio(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number.toFixed(2) : "--";
  }

  function formatPercent(value) {
    const number = Number(value);
    return Number.isFinite(number) ? `${number.toFixed(1)}%` : "--";
  }

  function floorTo(value, digits) {
    const factor = 10 ** digits;
    return Math.floor(Number(value || 0) * factor) / factor;
  }

  function signed(value) {
    const number = Number(value) || 0;
    return `${number >= 0 ? "+" : ""}${number.toFixed(2)}%`;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function buildFallbackRows() {
    const rows = [];
    let close = 82;
    for (let i = 0; i < 180; i += 1) {
      const date = new Date(2025, 8, 1 + i);
      close += Math.sin(i / 8) * 1.2 + (Math.random() - 0.42) * 2.2;
      const open = close + (Math.random() - 0.5) * 2;
      rows.push({
        date: date.toISOString().slice(0, 10),
        open,
        high: Math.max(open, close) + Math.random() * 2,
        low: Math.min(open, close) - Math.random() * 2,
        close,
        volume: 30000000 + Math.random() * 90000000,
      });
    }
    return rows.map(addIndicators);
  }

  setupChartSurface();
  setupTabs();
  setupSearchAndWatchlist();
  setupVolumeUnitGuard();
  select?.addEventListener("change", (event) => {
    if (!event.target.value) return;
    state.symbol = event.target.value;
    loadSymbol(event.target.value);
    window.setTimeout(() => {
      captureUniverseFromSelect();
      renderWatchlistSelect();
      updateFavoriteState();
    }, 0);
  });
  loadSymbol(state.symbol);
})();
