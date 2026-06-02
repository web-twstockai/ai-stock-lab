(function () {
  const path = window.location.pathname.replace(/\\/g, "/");
  const base = path.includes("/daily-screening/volume-breakout/") ? "../../" : "../";
  const dataUrl = `${base}data/site-data.json`;
  const screeningStrategyUrl = `${base}data/daily-screening-strategies.json`;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const text = (node, value) => {
    if (node && value !== undefined && value !== null) node.textContent = String(value);
  };
  const html = (node, value) => {
    if (node) node.innerHTML = value;
  };
  const fmt = (value, digits = 0) =>
    Number(value || 0).toLocaleString("zh-TW", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  const signed = (value) => `${Number(value || 0) >= 0 ? "+" : ""}${fmt(value, 2)}%`;
  const turnoverLabel = (value) => {
    const n = Number(value || 0);
    if (n >= 100000000) return `${fmt(n / 100000000, 1)} 億`;
    if (n >= 10000) return `${fmt(n / 10000, 0)} 萬`;
    return fmt(n, 0);
  };
  const volumeLabel = (value) => `${Math.floor(Number(value || 0) / 1000).toLocaleString("zh-TW")} 張`;
  const revenueLabel = (value) => {
    const n = Number(value || 0);
    if (!n) return "暫無資料";
    return `${fmt(n / 100000, 1)} 億`;
  };
  const revenueMonthLabel = (value) => {
    const text = String(value || "");
    if (/^\d{5}$/.test(text)) return `${Number(text.slice(0, 3)) + 1911}/${text.slice(3)} 月`;
    if (/^\d{6}$/.test(text)) return `${text.slice(0, 4)}/${text.slice(4)} 月`;
    return text || "暫無資料";
  };
  const themePriority = ["低軌衛星", "功率元件", "玻纖布", "PCB", "AI人工智慧", "AI伺服器", "第三類半導體"];
  const themeLabel = (stock, limit = 3) => {
    const themes = Array.isArray(stock?.themes) ? stock.themes.filter(Boolean) : [];
    themes.sort((a, b) => {
      const ai = themePriority.indexOf(a);
      const bi = themePriority.indexOf(b);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      return 0;
    });
    return themes.length ? themes.slice(0, limit).join(" / ") : "暫無題材資料";
  };
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);

  const riskHeat = (value) => (value >= 70 ? "高熱度" : value >= 45 ? "中高熱度" : "整理中");
  const volumeBadge = (stock) => (Number(stock.turnover || 0) >= 1000000000 ? "成交量大" : "成交量中");
  const badgeClass = (stock) => (Number(stock.turnover || 0) >= 1000000000 ? "hot" : "mid");
  const pick = (data, key) => data.dailyScreening?.strategies?.[key]?.stocks || [];
  const strategyCount = (data, key) => data.dailyScreening?.strategies?.[key]?.count ?? 0;
  const getStored = (key) => {
    try {
      if (window.localStorage) return localStorage.getItem(key);
    } catch (_) {}
    const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  };
  const authUser = () => {
    try {
      const account = getStored("aiStockLabSession");
      const users = JSON.parse(getStored("aiStockLabUsers") || "{}");
      return account ? users[account] || null : null;
    } catch (_) {
      return null;
    }
  };
  const effectiveRole = (user) => {
    if (user?.role === "advanced" && user.advancedExpiresAt) {
      const expiresAt = new Date(user.advancedExpiresAt).getTime();
      if (!Number.isNaN(expiresAt) && expiresAt <= Date.now()) return "basic";
    }
    return user?.role || "basic";
  };
  const roleLevel = (role) => ({ basic: 1, advanced: 2, admin: 3 })[role] || 0;
  const hasTier = (tier) => {
    const level = roleLevel(effectiveRole(authUser()));
    if (tier === "admin") return level >= 3;
    if (tier === "advanced") return level >= 2;
    return level >= 1;
  };
  const watchlistBaseKey = "aiStockLabWatchlist";
  let remoteWatchlist = null;
  let watchlistLoadPromise = null;
  const currentAccount = () => authUser()?.account || "guest";
  const scopedStorageKey = (base) => `${base}:${currentAccount()}`;
  const normalizeWatchlist = (list) => Array.from(new Set((Array.isArray(list) ? list : [])
    .map((item) => String(item || "").trim())
    .filter(Boolean)));
  const readLocalWatchlist = () => {
    try {
      const list = JSON.parse(localStorage.getItem(scopedStorageKey(watchlistBaseKey)) || "[]");
      return normalizeWatchlist(list);
    } catch (_) {
      return [];
    }
  };
  const readWatchlist = () => remoteWatchlist ? [...remoteWatchlist] : readLocalWatchlist();
  const writeLocalWatchlist = (list) => {
    try {
      localStorage.setItem(scopedStorageKey(watchlistBaseKey), JSON.stringify(normalizeWatchlist(list)));
    } catch (_) {}
  };
  const writeWatchlist = (list) => {
    const next = normalizeWatchlist(list);
    remoteWatchlist = next;
    writeLocalWatchlist(next);
    syncWatchlistToSupabase(next);
  };
  const canAddWatchlist = (list) => effectiveRole(authUser()) !== "basic" || list.length < 5;
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
    const rows = normalizeWatchlist(list).map((symbol) => ({ user_id: user.id, symbol }));
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
      console.warn("[AI Stock Lab] watchlist sync failed", error);
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
        console.warn("[AI Stock Lab] watchlist load failed", error);
        return readWatchlist();
      } finally {
        watchlistLoadPromise = null;
      }
    })();
    return watchlistLoadPromise;
  }

  function updateStatusDates(dateText) {
    $$("strong").forEach((node) => {
      if (/2025\/05\/26|2026-05-29|2026\/05\/29/.test(node.textContent)) {
        node.textContent = dateText.replaceAll("-", "/");
      }
    });
    $$("#stockDate").forEach((node) => text(node, dateText));
  }

  function hydrateMarket(data) {
    const overview = data.marketOverview || {};
    const cards = $$(".summary-card");
    if (cards[0]) {
      text($(".summary-title", cards[0]), "族群熱度");
      text($(".metric-row strong", cards[0]), fmt(overview.heatScore, 1));
      text($(".metric-row em", cards[0]), "/ 100");
      text($(".hot-badge", cards[0]), riskHeat(overview.heatScore));
    }
    if (cards[1]) {
      text($(".summary-title", cards[1]), "追蹤標的數量");
      text($(".metric-row strong", cards[1]), fmt(overview.trackedStocks));
      text($(".metric-row em", cards[1]), "檔");
    }
    if (cards[2]) {
      text($(".summary-title", cards[2]), "追蹤族群數量");
      text($(".metric-row strong", cards[2]), fmt(overview.trackedSectors));
      text($(".metric-row em", cards[2]), "個");
    }

    text($(".page-heading h1"), "市場總覽");
    text($(".page-heading p"), "快速掌握盤後整理後的族群熱度與市場觀察重點。");
    text($(".section-heading h2"), "目前族群排名 TOP 4");

    const descriptions = [
      "盤後資料顯示資金集中於高成交量與高相對強度族群。",
      "短線動能延續，成交金額與價格位置同步改善。",
      "接近區間高點的個股增加，適合追蹤突破後延續性。",
      "族群表現相對穩定，可作為隔日觀察名單。"
    ];
    $$(".rank-card").forEach((card, index) => {
      const sector = overview.topSectors?.[index];
      if (!sector) return;
      text($(".rank-top h3", card), sector.sector);
      text($(".rank-top strong", card), fmt(sector.score, 1));
      text($(".rank-desc", card), descriptions[index]);
      const stockList = $(".stock-list", card);
      if (stockList) {
        html(stockList, `
          <div class="stock-title"><span>熱門股票（依成交量）</span></div>
          ${(sector.leaders || []).slice(0, 3).map((stock) => `
            <p><span>${esc(stock.symbol)}&nbsp;&nbsp;${esc(stock.name)}</span><em class="tag ${badgeClass(stock)}">${volumeBadge(stock)}</em></p>
          `).join("")}
        `);
      }
    });

    const observation = $(".observation ul");
    if (observation) {
      const top = overview.topSectors?.[0];
      html(observation, `
        <li>${esc(top?.sector || "高成交量族群")}為目前盤後熱度最高族群，平均分數 ${fmt(top?.score || 0, 1)}。</li>
        <li>全市場追蹤 ${fmt(overview.trackedStocks)} 檔上市櫃日線，最新資料日為 ${esc(data.meta.marketDate)}。</li>
        <li>候選清單以 20 日報酬、60 日高點距離、流動性、波動與量能同步評分。</li>
        <li>觀察重點：優先追蹤站上 MA20 / MA60 且接近 60 日高點的標的。</li>
        <li>高波動個股需搭配停損與失效條件，避免只看分數追高。</li>
      `);
    }
    text($(".observation .info-title h2"), "今日市場觀察重點");
    text($(".update-card .info-title h2"), "資料更新狀態");
    updateStatusDates(data.meta.marketDate);
  }

  const tierConfig = {
    basic: {
      label: "基本會員可使用",
      short: "基本",
      icon: "●",
      order: 1,
    },
    advanced: {
      label: "進階會員可使用",
      short: "進階",
      icon: "♛",
      order: 2,
    },
    admin: {
      label: "管理員可使用 / 可限定開放",
      short: "管理員",
      icon: "◆",
      order: 3,
    },
  };
  const tierLabels = {
    basic: "基本會員",
    advanced: "進階會員",
    admin: "管理員",
  };

  function normalizeStrategyGroups(groups) {
    const output = { basic: [], advanced: [], admin: [] };
    if (!groups || typeof groups !== "object") return output;
    Object.keys(output).forEach((tier) => {
      if (Array.isArray(groups[tier])) {
        output[tier] = groups[tier].map((key) => String(key || "")).filter(Boolean);
      }
    });
    return output;
  }

  function applyScreeningStrategyAccess(data, config) {
    const groups = normalizeStrategyGroups(config?.strategyGroups);
    const strategies = data.dailyScreening?.strategies || {};
    const knownKeys = new Set(Object.keys(strategies));
    const assigned = new Set();
    Object.entries(groups).forEach(([tier, keys]) => {
      groups[tier] = keys.filter((key) => {
        if (!knownKeys.has(key) || assigned.has(key)) return false;
        assigned.add(key);
        return true;
      });
    });
    Object.values(strategies).forEach((strategy) => {
      if (!assigned.has(strategy.key)) {
        const tier = strategy.tier && groups[strategy.tier] ? strategy.tier : "basic";
        groups[tier].push(strategy.key);
      }
    });
    Object.entries(groups).forEach(([tier, keys]) => {
      keys.forEach((key) => {
        if (strategies[key]) {
          strategies[key].tier = tier;
          strategies[key].tierLabel = tierLabels[tier] || tier;
        }
      });
    });
    if (data.dailyScreening) {
      data.dailyScreening.strategyGroups = groups;
      data.dailyScreening.basicCount = groups.basic.length;
      data.dailyScreening.advancedCount = groups.advanced.length;
      data.dailyScreening.adminCount = groups.admin.length;
    }
    return data;
  }

  async function loadScreeningStrategyAccess() {
    try {
      const response = await fetch(screeningStrategyUrl, { cache: "no-store" });
      if (!response.ok) throw new Error(`Cannot load ${screeningStrategyUrl}`);
      return response.json();
    } catch (error) {
      console.warn("[AI Stock Lab] screening strategy access unavailable", error);
      return null;
    }
  }

  function strategiesByTier(data, tier) {
    const keys = data.dailyScreening?.strategyGroups?.[tier] || [];
    const strategies = data.dailyScreening?.strategies || {};
    return keys.map((key) => strategies[key]).filter(Boolean);
  }

  function strategyCard(strategy, locked = false) {
    const tags = (strategy.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join("");
    const lockLabel = strategy.tier === "advanced" ? "需進階會員權限" : "需管理員權限";
    const href = `volume-breakout/?strategy=${encodeURIComponent(strategy.key)}`;
    return `
      <article class="strategy-card${locked ? " is-locked" : ""}" data-strategy="${esc(strategy.key)}"${locked ? "" : ` onclick="location.href='${href}'"`}>
        <h3>${esc(strategy.label)}</h3>
        <p>${esc(strategy.description)}</p>
        <div class="chips">${tags}</div>
        <div class="count"><strong>${fmt(strategy.count)}</strong><em>檔符合</em></div>
        ${locked ? `<div class="lock-overlay"><strong>${lockLabel}</strong><span>升級後可查看完整策略與股票清單</span></div>` : ""}
        <a class="apply" href="${locked ? "#" : href}" ${locked ? 'aria-disabled="true"' : ""}>${locked ? "權限不足" : "套用"}</a>
      </article>`;
  }

  function renderStrategySection(section, tier, data, expanded = false) {
    const config = tierConfig[tier];
    const strategies = strategiesByTier(data, tier);
    const locked = !hasTier(tier);
    if (tier === "admin" && locked) {
      if (section) section.hidden = true;
      return;
    }
    const visibleStrategies = expanded ? strategies : strategies.slice(0, 5);
    const canToggle = strategies.length > 5;
    if (!section || !config) return;
    section.hidden = false;
    section.classList.toggle("is-locked-section", locked);
    section.dataset.expanded = expanded ? "true" : "false";
    section.dataset.strategyTier = tier;
    const title = $(".section-title", section);
    if (title) {
      html(title, `
        <div>
          <span class="section-icon">${config.icon}</span>
          <h2>${config.label}</h2>
          <em>${config.short}</em>
        </div>
        ${canToggle && !locked ? `<a href="#" data-strategy-toggle="${tier}">${expanded ? "收合 <" : "查看全部 >"}</a>` : ""}
      `);
    }
    const grid = $(".strategy-grid", section);
    if (grid) html(grid, visibleStrategies.map((strategy) => strategyCard(strategy, locked)).join(""));
  }

  function hydrateDailyList(data) {
    text($(".title-row h1"), "每日篩選");
    text($(".title-row p"), "盤後依策略條件進行自動篩選，提供隔日觀察清單與投資靈感。");
    const stats = $$(".stat-card");
    if (stats[0]) {
      text($("p", stats[0]), "基本策略數量");
      text($("strong", stats[0]), `${strategiesByTier(data, "basic").length} 個`);
    }
    if (stats[1]) {
      text($("p", stats[1]), "進階策略數量");
      text($("strong", stats[1]), `${strategiesByTier(data, "advanced").length} 個`);
    }
    if (stats[2]) {
      text($("p", stats[2]), "管理員策略數量");
      text($("strong", stats[2]), `${strategiesByTier(data, "admin").length} 個`);
      stats[2].hidden = !hasTier("admin");
    }
    if (stats[3]) {
      text($("p", stats[3]), "更新模式");
      text($("strong", stats[3]), "盤後更新");
    }
    renderStrategySection($(".strategy-section.basic"), "basic", data);
    renderStrategySection($(".strategy-section.advanced"), "advanced", data);
    renderStrategySection($(".strategy-section.admin"), "admin", data);
    document.body.dataset.dailyScreeningHydrated = "true";
    window.AIStockLabDailyScreening = { data, renderStrategySection };
    if (!hasTier("admin")) {
      $$(".permission-item.orange").forEach((item) => { item.hidden = true; });
    }
    text($(".permissions h2"), "權限說明");
    text($(".update h2"), "盤後更新");
    updateStatusDates(data.meta.marketDate);
  }

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-strategy-toggle]");
    if (!toggle) return;
    const daily = window.AIStockLabDailyScreening;
    if (!daily?.data) return;
    const section = toggle.closest(".strategy-section");
    const tier = toggle.dataset.strategyToggle || section?.dataset.strategyTier;
    if (!section || !tier) return;
    event.preventDefault();
    daily.renderStrategySection(section, tier, daily.data, section.dataset.expanded !== "true");
  });

  function stockReason(stock) {
    const themes = Array.isArray(stock.themes) && stock.themes.length ? `；題材：${themeLabel(stock, 2)}` : "";
    const boost = Number(stock.themeBoost || 0) > 0 ? `；題材補分 +${fmt(stock.themeBoost, 1)}` : "";
    return `量能 ${fmt(stock.volumeRatio20, 2)} 倍，20日報酬 ${signed(stock.return20)}，距60日高點 ${fmt(stock.distanceHigh60, 2)}%${themes}${boost}`;
  }

  function hydrateDailyDetail(data) {
    const requestedKey = new URLSearchParams(window.location.search).get("strategy") || "volumeBreakout";
    const strategies = data.dailyScreening?.strategies || {};
    const strategy = strategies[requestedKey] || strategies.volumeBreakout || { count: 0, stocks: [], tags: [] };
    if (!hasTier(strategy.tier || "basic")) {
      const main = $(".detail-layout");
      if (main) {
        main.innerHTML = `
          <section class="locked-detail">
            <h2>${strategy.tier === "advanced" ? "需進階會員權限" : "需管理員權限"}</h2>
            <p>目前帳號為基本會員，無法查看此策略詳情與成分股清單。</p>
            <a href="../">返回每日篩選</a>
          </section>`;
      }
      return;
    }
    const tier = tierConfig[strategy.tier] || tierConfig.basic;
    const typeLabel = strategy.tier === "admin" ? "管理員" : strategy.tier === "advanced" ? "進階款" : "基本款";
    text($(".title-row h1"), "每日篩選");
    text($(".title-row p"), "盤後依策略條件自動篩選，快速查看符合條件的觀察標的。");
    const stats = $$(".detail-stats .stat-card");
    if (stats[0]) {
      text($("p", stats[0]), "已套用策略");
      text($("strong", stats[0]), strategy.label);
    }
    if (stats[1]) {
      text($("p", stats[1]), "策略類型");
      text($("strong", stats[1]), typeLabel);
    }
    if (stats[2]) {
      text($("p", stats[2]), "符合股票");
      text($("strong", stats[2]), `${fmt(strategy.count)} 檔`);
    }
    if (stats[3]) {
      text($("p", stats[3]), "更新模式");
      text($("strong", stats[3]), "盤後更新");
    }
    text($(".hero-name h2"), strategy.label);
    text($(".hero-name em"), "已套用");
    text($(".hero-left p"), strategy.description);
    const heroChips = $(".hero-strategy .chips");
    if (heroChips) html(heroChips, (strategy.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join(""));
    text($(".hero-count strong"), fmt(strategy.count));
    text($(".hero-count span"), "檔符合股票");
    text($(".switch-btn"), "更換策略");
    const strip = $(".condition-strip > div");
    if (strip) {
      html(strip, `
        <span class="filter-icon">▽</span>
        <strong>條件摘要：</strong>
        <em>${esc(typeLabel)}</em>
        <em>${esc(strategy.label)}</em>
        ${(strategy.tags || []).map((tag) => `<em>${esc(tag)}</em>`).join("")}
      `);
    } else {
      text($(".condition-strip strong"), "條件摘要：");
    }
    const allStocks = strategy.stocks || [];
    let visibleCount = 10;
    const table = $(".table-card tbody");
    const moreButton = $(".more-btn");
    const pageSizeSelect = $(".table-tools select");
    const showWatchlistNotice = (message) => {
      let notice = $(".screening-watchlist-notice");
      if (!notice) {
        notice = document.createElement("div");
        notice.className = "screening-watchlist-notice";
        notice.setAttribute("role", "status");
        notice.setAttribute("aria-live", "polite");
        document.body.appendChild(notice);
      }
      notice.textContent = message;
      notice.hidden = false;
      window.clearTimeout(showWatchlistNotice.timer);
      showWatchlistNotice.timer = window.setTimeout(() => {
        notice.hidden = true;
      }, 2200);
    };
    const updateFavoriteButtons = () => {
      const watchlist = new Set(readWatchlist());
      $$("[data-favorite-symbol]", table).forEach((button) => {
        const stock = button.dataset.favoriteSymbol;
        const active = watchlist.has(stock);
        button.classList.toggle("is-active", active);
        button.textContent = active ? "★" : "☆";
        button.setAttribute("aria-pressed", active ? "true" : "false");
        button.setAttribute("title", active ? "從自選股移除" : "加入自選股");
        button.setAttribute("aria-label", active ? `從自選股移除 ${stock}` : `加入自選股 ${stock}`);
      });
    };
    const toggleWatchlist = (symbol) => {
      if (!symbol) return;
      const list = readWatchlist();
      const exists = list.includes(symbol);
      if (!exists && !canAddWatchlist(list)) {
        showWatchlistNotice("基本會員最多加入 5 檔自選股");
        return;
      }
      const next = exists ? list.filter((item) => item !== symbol) : [symbol, ...list];
      writeWatchlist(next);
      updateFavoriteButtons();
      showWatchlistNotice(exists ? `${symbol} 已從自選股移除` : `${symbol} 已加入自選股`);
    };
    const renderRows = () => {
      if (!table) return;
      html(table, allStocks.slice(0, visibleCount).map((stock) => `
        <tr>
          <td class="favorite-cell"><button class="favorite-stock-button" type="button" data-favorite-symbol="${esc(stock.symbol)}" aria-pressed="false">☆</button></td>
          <td><a href="../../stock-analysis/?symbol=${esc(stock.symbol)}">${esc(stock.symbol)}</a></td>
          <td>${esc(stock.name)}</td>
          <td>${esc(stock.sector)}</td>
          <td>${esc(stockReason(stock))}</td>
          <td>${fmt(stock.close, 2)}</td>
          <td class="${Number(stock.changePercent || 0) >= 0 ? "up" : "down"}">${signed(stock.changePercent)}</td>
          <td>${volumeLabel(stock.volume)}</td>
        </tr>
      `).join(""));
      updateFavoriteButtons();
      if (moreButton) {
        const done = visibleCount >= allStocks.length;
        moreButton.textContent = done ? `已顯示全部 ${fmt(allStocks.length)} 檔` : `顯示更多（目前 ${fmt(visibleCount)} / ${fmt(allStocks.length)}）`;
        moreButton.disabled = done;
      }
    };
    const headRow = $(".table-card thead tr");
    if (headRow) html(headRow, ["收藏", "代號", "名稱", "產業", "入選原因", "收盤價", "漲跌幅", "成交量"].map((label) => `<th>${label}</th>`).join(""));
    const buttons = $$(".table-tools button, .more-btn");
    text(buttons[0], "匯出 CSV");
    table?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-favorite-symbol]");
      if (!button) return;
      toggleWatchlist(button.dataset.favoriteSymbol);
    });
    if (pageSizeSelect) {
      pageSizeSelect.innerHTML = `
        <option value="10">顯示 10 檔</option>
        <option value="25">顯示 25 檔</option>
        <option value="50">顯示 50 檔</option>
        <option value="100">顯示 100 檔</option>
      `;
      pageSizeSelect.addEventListener("change", () => {
        visibleCount = Math.min(Number(pageSizeSelect.value || 10), allStocks.length);
        renderRows();
      });
    }
    moreButton?.addEventListener("click", () => {
      visibleCount = Math.min(visibleCount + 50, allStocks.length);
      if (pageSizeSelect && visibleCount > Number(pageSizeSelect.value || 10)) {
        pageSizeSelect.value = ["10", "25", "50", "100"].find((size) => Number(size) >= visibleCount) || "100";
      }
      renderRows();
    });
    renderRows();
    loadWatchlistFromSupabase().then(updateFavoriteButtons);
    text($$(".detail-side h2")[0], "策略說明");
    text($$(".detail-side p")[0], `${strategy.description} 條件：${strategy.criteria || "依日線價量與波動資料計算"}`);
    const conditionList = $$(".condition-list")[0];
    if (conditionList) {
      html(conditionList, `
        <p><span>市場別</span><strong>台灣上市櫃</strong></p>
        <p><span>策略類型</span><em>${esc(typeLabel)}</em></p>
        <p><span>條件標籤</span>${(strategy.tags || []).map((tag) => `<b>${esc(tag)}</b>`).join("")}</p>
      `);
    }
    text($$(".detail-side h2")[1], "套用條件");
    updateStatusDates(data.meta.marketDate);
  }

  function renderChart(stock) {
    const series = (stock.series || []).slice(-95);
    if (!series.length) return "";
    const w = 1460, h = 430, left = 62, right = 70, top = 18, chartH = 225, volTop = 190, volH = 55, macdTop = 292, macdH = 92;
    const highs = series.map((d) => d.high);
    const lows = series.map((d) => d.low);
    const maxP = Math.max(...highs);
    const minP = Math.min(...lows);
    const maxV = Math.max(...series.map((d) => d.volume));
    const xStep = (w - left - right) / Math.max(series.length - 1, 1);
    const x = (i) => left + i * xStep;
    const y = (price) => top + (maxP - price) / Math.max(maxP - minP, 1) * chartH;
    const ma = (index, size) => {
      const start = Math.max(0, index - size + 1);
      const chunk = series.slice(start, index + 1);
      return chunk.reduce((sum, item) => sum + item.close, 0) / chunk.length;
    };
    const line = (size) => series.map((_, i) => `${x(i).toFixed(1)},${y(ma(i, size)).toFixed(1)}`).join(" ");
    const candles = series.map((d, i) => {
      const cx = x(i);
      const green = d.close >= d.open;
      const yOpen = y(d.open);
      const yClose = y(d.close);
      const rectY = Math.min(yOpen, yClose);
      const rectH = Math.max(3, Math.abs(yOpen - yClose));
      const cls = green ? "" : " class=\"red\"";
      const volHeight = Math.max(2, d.volume / maxV * volH);
      const volY = volTop + volH - volHeight;
      return `
        <line x1="${cx.toFixed(1)}" y1="${y(d.high).toFixed(1)}" x2="${cx.toFixed(1)}" y2="${y(d.low).toFixed(1)}"></line>
        <rect${cls} x="${(cx - 4).toFixed(1)}" y="${rectY.toFixed(1)}" width="8" height="${rectH.toFixed(1)}"></rect>
        <rect${cls} x="${(cx - 3).toFixed(1)}" y="${volY.toFixed(1)}" width="6" height="${volHeight.toFixed(1)}"></rect>`;
    }).join("");
    const macd = series.map((_, i) => ma(i, 5) - ma(i, 20));
    const maxM = Math.max(...macd.map(Math.abs), 1);
    const macdBars = macd.map((m, i) => {
      const barH = Math.abs(m) / maxM * (macdH / 2);
      const zero = macdTop + macdH / 2;
      const yBar = m >= 0 ? zero - barH : zero;
      return `<rect${m >= 0 ? "" : " class=\"red\""} x="${(x(i) - 3).toFixed(1)}" y="${yBar.toFixed(1)}" width="6" height="${Math.max(2, barH).toFixed(1)}"></rect>`;
    }).join("");
    const priceLabels = [maxP, (maxP + minP) / 2, minP];
    return `
      <defs><linearGradient id="chartFadeLive" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#eff6ff" stop-opacity=".65"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
      <rect x="0" y="0" width="${w}" height="${h}" fill="white"/>
      <rect x="${left}" y="8" width="${w - left - right}" height="255" fill="url(#chartFadeLive)" opacity=".5"/>
      <g class="grid">${Array.from({ length: 8 }, (_, i) => `<path d="M${left} ${30 + i * 29}H1390"/>`).join("")}${Array.from({ length: 4 }, (_, i) => `<path d="M${left} ${macdTop + i * 34}H1390"/>`).join("")}</g>
      <g class="axis-labels"><text x="12" y="30">價格</text>${priceLabels.map((v, i) => `<text x="18" y="${62 + i * 70}">${fmt(v, 0)}</text>`).join("")}<text x="1408" y="30">成交量</text><text x="1408" y="62">${fmt(maxV / 1000000, 0)}M</text><text x="1418" y="224">0</text><text x="12" y="300">MACD</text></g>
      <g class="volume-bars">${candles}</g>
      <polyline class="ma ma5" points="${line(5)}"></polyline>
      <polyline class="ma ma10" points="${line(10)}"></polyline>
      <polyline class="ma ma20" points="${line(20)}"></polyline>
      <polyline class="ma ma60" points="${line(60)}"></polyline>
      <g class="candles">${candles}</g>
      <g class="macd-bars">${macdBars}</g>
      <polyline class="macd macd-blue" points="${macd.map((m, i) => `${x(i).toFixed(1)},${(macdTop + macdH / 2 - m / maxM * 35).toFixed(1)}`).join(" ")}"></polyline>
      <g class="months">${series.filter((_, i) => i % 16 === 0).map((d, i) => `<text x="${x(i * 16).toFixed(1)}" y="256">${esc(d.date.slice(0, 7))}</text>`).join("")}</g>`;
  }

  function hydrateStock(data) {
    const details = data.stockDetails || {};
    const revenueLookup = {};
    const compactLookup = {};
    (data.candidates || []).forEach((stock) => {
      compactLookup[stock.symbol] = stock;
    });
    Object.values(data.dailyScreening?.strategies || {}).forEach((strategy) => {
      (strategy.stocks || []).forEach((stock) => {
        if (!compactLookup[stock.symbol]) compactLookup[stock.symbol] = stock;
      });
    });
    const params = new URLSearchParams(window.location.search);
    const preferred = params.get("symbol") || "1303";
    const options = Object.values(details);
    const select = $("#stockSelect");
    if (select && options.length) {
      select.innerHTML = options.map((stock) => `<option value="${esc(stock.symbol)}">${esc(stock.symbol)} ${esc(stock.name)}</option>`).join("");
    }

    function apply(symbol) {
      const baseStock = details[symbol] || compactLookup[symbol] || (!symbol || symbol === "1303" ? details["1303"] || options[0] : null);
      const stock = baseStock ? { ...revenueLookup[baseStock.symbol], ...baseStock, ...revenueLookup[baseStock.symbol] } : null;
      if (!stock) return;
      if (select) select.value = stock.symbol;
      text($("#stockTitle"), `${stock.symbol} ${stock.name}`);
      text($("#stockMeta"), `${stock.sector} / ${stock.market}`);
      text($("#stockPrice"), fmt(stock.close, 2).replace(/\.00$/, ""));
      const change = $("#stockChange");
      if (change) {
        change.textContent = `▲ ${signed(stock.changePercent)}`;
        change.classList.toggle("negative", Number(stock.changePercent) < 0);
      }
      text($("#stockVolume"), volumeLabel(stock.volume));
      text($("#stockDate"), stock.date);
      const cards = $$(".score-card");
      const scoreItems = [
        ["AI綜合評分", fmt(stock.rankScore || stock.score, 0), `原始分：${fmt(stock.score, 0)} / 題材補分 +${fmt(stock.themeBoost || 0, 1)}`],
        ["題材熱度", fmt(stock.themeHeatScore || Math.min(99, Math.abs(stock.return20) * 4 + 20), 0), `熱門題材：${themeLabel(stock, 1)}`],
        ["技術狀態", stock.close >= stock.ma20 && stock.ma20 >= stock.ma60 ? "偏多" : "整理", `MA20 ${fmt(stock.ma20, 2)}`],
        ["籌碼狀態", stock.volumeRatio20 >= 1.2 ? "放量" : "正常", `量能 ${fmt(stock.volumeRatio20, 2)} 倍`],
        ["風險等級", stock.risk, `波動 ${fmt(stock.volatility20, 1)}%`],
      ];
      cards.forEach((card, i) => {
        text($("h2", card), scoreItems[i]?.[0]);
        text($("strong", card), scoreItems[i]?.[1]);
        text($("p", card), scoreItems[i]?.[2]);
      });
      text($(".chart-head h2"), "PRICE STRUCTURE / 價格結構");
      text($(".chart-head p"), `日K | ${stock.series?.[0]?.date || ""} 至 ${stock.date}`);
      const labels = ["日K", "週K", "月K", "MA5", "MA10", "MA20", "MA60", "布林", "成交量", "MACD", "RSI"];
      $$(".chart-tabs button").forEach((button, i) => text(button, labels[i]));
      const chart = $(".price-chart");
      if (chart) chart.innerHTML = renderChart(stock);
      const analysisCards = $$(".analysis-card");
      if (analysisCards[0]) {
        text($("h2", analysisCards[0]), "A. 產業與題材");
        html($("dl", analysisCards[0]), `
          <div><dt>所屬產業</dt><dd>${esc(stock.sector)}</dd></div>
          <div><dt>相關題材</dt><dd>${esc(themeLabel(stock, 8))}</dd></div>
          <div><dt>20日成交金額</dt><dd>${turnoverLabel(stock.avgTurnover20)}</dd></div>
          <div><dt>主要風險</dt><dd>波動 ${fmt(stock.volatility20, 1)}%，距60日高點 ${fmt(stock.distanceHigh60, 2)}%</dd></div>
        `);
      }
      if (analysisCards[1]) {
        text($("h2", analysisCards[1]), "B. 技術分析");
        html($("dl", analysisCards[1]), `
          <div><dt>趨勢</dt><dd>${stock.close >= stock.ma20 && stock.ma20 >= stock.ma60 ? "多頭排列" : "整理觀察"}</dd></div>
          <div><dt>均線</dt><dd>${fmt(stock.ma20, 2)} / ${fmt(stock.ma60, 2)}</dd></div>
          <div><dt>20日報酬</dt><dd>${signed(stock.return20)}</dd></div>
          <div><dt>60日報酬</dt><dd>${signed(stock.return60)}</dd></div>
          <div><dt>支撐 / 壓力</dt><dd>${fmt(stock.low20, 2)} / ${fmt(stock.high60, 2)}</dd></div>
        `);
      }
      if (analysisCards[2]) {
        text($("h2", analysisCards[2]), "C. 量能分析");
        html($("dl", analysisCards[2]), `
          <div><dt>成交量</dt><dd>${volumeLabel(stock.volume)}</dd></div>
          <div><dt>成交金額</dt><dd>${turnoverLabel(stock.turnover)}</dd></div>
          <div><dt>20日均額</dt><dd>${turnoverLabel(stock.avgTurnover20)}</dd></div>
          <div><dt>量能倍率</dt><dd>${fmt(stock.volumeRatio20, 2)} 倍</dd></div>
        `);
      }
      const mini = $(".fundamentals .mini-grid");
      if (mini) {
        html(mini, `
          <div><span>最新月營收</span><strong>${revenueLabel(stock.revenue)}</strong></div>
          <div><span>年增率 YoY</span><strong>${Number.isFinite(Number(stock.revenueYoy)) ? signed(stock.revenueYoy) : "暫無資料"}</strong></div>
          <div><span>月增率 MoM</span><strong>${Number.isFinite(Number(stock.revenueMom)) ? signed(stock.revenueMom) : "暫無資料"}</strong></div>
          <div><span>資料月份</span><strong>${revenueMonthLabel(stock.revenueMonth)}</strong></div>
        `);
      }
      text($(".fundamentals h2"), "D. 營收表現");
    }

    select?.addEventListener("change", (event) => apply(event.target.value));
    apply(preferred);

    fetch(`${base}data/candidates.json`, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((candidateData) => {
        (candidateData?.stocks || []).forEach((stock) => {
          if (stock?.symbol) revenueLookup[stock.symbol] = stock;
        });
        apply(select?.value || preferred);
      })
      .catch((error) => {
        console.warn("[AI Stock Lab] revenue data unavailable", error);
      });
  }

  Promise.all([
    fetch(dataUrl, { cache: "no-store" }).then((response) => {
      if (!response.ok) throw new Error(`Cannot load ${dataUrl}`);
      return response.json();
    }),
    loadScreeningStrategyAccess(),
  ])
    .then((response) => {
      const [siteData, strategyAccess] = response;
      const data = strategyAccess ? applyScreeningStrategyAccess(siteData, strategyAccess) : siteData;
      document.documentElement.dataset.realData = "loaded";
      if (path.includes("/market-overview/")) hydrateMarket(data);
      if (path.includes("/daily-screening/volume-breakout/")) hydrateDailyDetail(data);
      else if (path.includes("/daily-screening/")) hydrateDailyList(data);
      if (path.includes("/stock-analysis/")) hydrateStock(data);
    })
    .catch((error) => {
      console.error("[AI Stock Lab] data hydration failed", error);
      document.documentElement.dataset.realData = "failed";
    })
    .finally(() => {
      document.body.classList.remove("dashboard-page-loading");
    });
})();
