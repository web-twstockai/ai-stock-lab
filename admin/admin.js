(function () {
  const USERS_KEY = "aiStockLabUsers";
  const SESSION_KEY = "aiStockLabSession";
  const ADVANCED_REQUESTS_KEY = "aiStockLabAdvancedRequests";
  const API_AUTH_ME_URL = "../api/auth/me";
  const API_AUTH_LOGIN_URL = "../api/auth/login";
  const API_AUTH_LOGOUT_URL = "../api/auth/logout";
  const API_AUTH_CHANGE_PASSWORD_URL = "../api/auth/change-password";
  const API_STATUS_URL = "../api/admin/status";
  const API_RUN_URL = "../api/admin/run";
  const API_LOGS_URL = "../api/admin/logs";
  const API_BACKUP_URL = "../api/admin/backup";
  const API_AUDIT_URL = "../api/admin/audit";
  const SUPABASE_URL = "https://xtimhfolzbeczngvzlxi.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0aW1oZm9semJlY3puZ3Z6bHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNjY5NzEsImV4cCI6MjA5NTk0Mjk3MX0.ioz4NIVRJ8evKG3u0U-cOjzfnsY0HaotQUfSHCan4oI";
  const SUPABASE_SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

  const roleLabels = {
    basic: "基本會員",
    advanced: "進階會員",
    admin: "管理員",
  };

  const updateItems = [
    {
      task: "daily-market",
      title: "每日行情資料",
      detail: "重建全市場 OHLCV、候選股與網站資料包",
      command: "python scripts/update_data.py --workers 12",
      source: "site",
    },
    {
      task: "intelligence",
      title: "情報中心",
      detail: "更新新聞摘要、主題分類與情報中心總覽",
      command: "python scripts/update_intelligence.py",
      source: "intelligence",
    },
    {
      task: "institutional",
      title: "法人機器人",
      detail: "同步三大法人與籌碼觀察資料",
      command: "python scripts/update_institutional_robot.py",
      source: "institutional",
    },
    {
      task: "macro",
      title: "總經資料",
      detail: "更新總經事件、總經機器人與自動追蹤紀錄",
      command: "python scripts/update_macro_robot.py",
      source: "macro",
    },
    {
      task: "short-margin",
      title: "融資融券",
      detail: "更新融資融券比率與信用交易資料",
      command: "python scripts/update_short_margin_ratio.py",
      source: "shortMargin",
    },
  ];

  const healthFiles = [
    { label: "網站主資料", path: "../data/site-data.json", key: "site" },
    { label: "模型庫", path: "../data/model_library.json", key: "modelLibrary" },
    { label: "情報中心", path: "../data/intelligence-overview.json", key: "intelligence" },
    { label: "法人機器人", path: "../data/institutional-robot.json", key: "institutional" },
    { label: "總經機器人", path: "../data/macro-robot.json", key: "macro" },
    { label: "融資融券比率", path: "../data/shortMarginRatioMockData.json", key: "shortMargin" },
    { label: "歷史資料索引", path: "../data/history/manifest.json", key: "history" },
  ];

  const fallbackBackups = [
    { title: "主資料備份", path: "data/site-data.json.bak" },
    { title: "候選股備份", path: "data/candidates.json.bak" },
    { title: "主題資料備份", path: "data/stock-themes.json.bak" },
    { title: "總經資料備份", path: "data/macro-robot.json.bak" },
    { title: "法人資料備份", path: "data/institutional-robot.json.bak" },
  ];

  const state = {
    apiAvailable: false,
    apiAuthRequired: false,
    apiUser: null,
    apiStatus: null,
    supabaseUsers: null,
    advancedRequests: null,
    results: {},
    logs: { normal: { text: "" }, error: { text: "" } },
  };
  let clientPromise = null;

  const $ = (selector) => document.querySelector(selector);
  const fmt = (value) => Number(value || 0).toLocaleString("zh-TW");
  const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);

  function getStored(key) {
    try {
      if (window.localStorage) return localStorage.getItem(key);
    } catch (_) {}
    return null;
  }

  function setStored(key, value) {
    try {
      if (window.localStorage) localStorage.setItem(key, value);
    } catch (_) {}
  }

  function readUsers() {
    if (state.supabaseUsers) {
      return Object.fromEntries(state.supabaseUsers.map((profile) => {
        const user = profileToUser(profile);
        return [user.account, user];
      }));
    }
    try {
      return JSON.parse(getStored(USERS_KEY) || "{}");
    } catch (_) {
      return {};
    }
  }

  function writeUsers(users) {
    setStored(USERS_KEY, JSON.stringify(users));
  }

  async function supabaseClient() {
    if (window.AIStockSupabase?.client) return window.AIStockSupabase.client();
    if (!clientPromise) {
      clientPromise = import(SUPABASE_SDK).then(({ createClient }) =>
        createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
        })
      );
    }
    return clientPromise;
  }

  async function adminAuthHeaders() {
    const supabase = await supabaseClient();
    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  function profileToUser(profile) {
    return {
      id: profile.id,
      account: profile.account,
      nickname: profile.nickname || profile.account,
      role: profile.role || "basic",
      roleLabel: roleLabels[profile.role] || profile.role || "basic",
      status: profile.status || "active",
      createdAt: profile.created_at,
      advancedApprovedAt: profile.advanced_approved_at,
      advancedExpiresAt: profile.advanced_expires_at,
      lastLoginAt: profile.last_login_at,
    };
  }

  async function loadSupabaseUsers() {
    try {
      const supabase = await supabaseClient();
      const { data, error } = await supabase
        .from("profiles")
        .select("id, account, nickname, role, status, advanced_approved_at, advanced_expires_at, created_at, updated_at, last_login_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      state.supabaseUsers = data || [];
    } catch (error) {
      state.supabaseUsers = null;
      console.warn("[AI Stock Lab] Supabase users unavailable", error);
    }
  }

  async function updateSupabaseUserRole(user, role, extra = {}) {
    if (!user?.id) return false;
    const supabase = await supabaseClient();
    const patch = { role, ...extra };
    const { error } = await supabase.from("profiles").update(patch).eq("id", user.id);
    if (error) throw error;
    await loadSupabaseUsers();
    return true;
  }

  function applicationToRequest(application) {
    return {
      id: application.id,
      userId: application.user_id,
      account: application.account,
      nickname: application.nickname,
      currentRole: application.current_role,
      status: application.status || "pending",
      requestedAt: application.requested_at,
      approvedDays: application.approved_days,
      expiresAt: application.expires_at,
      reviewedAt: application.reviewed_at,
      reviewedBy: application.reviewed_by,
    };
  }

  async function loadSupabaseAdvancedRequests() {
    try {
      const supabase = await supabaseClient();
      const { data, error } = await supabase
        .from("advanced_applications")
        .select("id, user_id, account, nickname, current_role, status, requested_at, approved_days, expires_at, reviewed_at, reviewed_by")
        .eq("status", "pending")
        .order("requested_at", { ascending: false });
      if (error) throw error;
      state.advancedRequests = (data || []).map(applicationToRequest);
    } catch (error) {
      state.advancedRequests = null;
      console.warn("[AI Stock Lab] Supabase advanced applications unavailable", error);
    }
  }

  function readAdvancedRequests() {
    if (state.advancedRequests) return [...state.advancedRequests];
    try {
      return JSON.parse(getStored(ADVANCED_REQUESTS_KEY) || "[]");
    } catch (_) {
      return [];
    }
  }

  function writeAdvancedRequests(requests) {
    setStored(ADVANCED_REQUESTS_KEY, JSON.stringify(requests));
  }

  async function updateSupabaseAdvancedRequest(requestId, patch) {
    const supabase = await supabaseClient();
    const { data: userData } = await supabase.auth.getUser();
    const payload = { ...patch, reviewed_by: userData?.user?.id || null };
    const { error } = await supabase.from("advanced_applications").update(payload).eq("id", requestId);
    if (error) throw error;
    await loadSupabaseAdvancedRequests();
    return true;
  }

  function isAdvancedExpired(user) {
    if (user?.role !== "advanced" || !user.advancedExpiresAt) return false;
    return new Date(user.advancedExpiresAt).getTime() <= Date.now();
  }

  function effectiveRole(user) {
    return isAdvancedExpired(user) ? "basic" : (user?.role || "basic");
  }

  function addDays(date, days) {
    const next = new Date(date);
    next.setDate(next.getDate() + Number(days || 0));
    return next;
  }

  function currentUser() {
    const account = getStored(SESSION_KEY);
    return account ? readUsers()[account] || null : null;
  }

  function operatorPayload() {
    const user = currentUser();
    return {
      account: user?.account || "unknown",
      nickname: user?.nickname || user?.account || "Unknown",
      role: user?.role || "unknown",
    };
  }

  function formatDate(value) {
    if (!value) return "--";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return new Intl.DateTimeFormat("zh-TW", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function daysSince(value) {
    if (!value) return Infinity;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return Infinity;
    return Math.max(0, Math.round((Date.now() - date.getTime()) / 86400000));
  }

  function icon(name) {
    const icons = {
      play: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/></svg>',
      copy: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      info: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    };
    return icons[name] || "";
  }

  async function fetchJson(item) {
    try {
      const response = await fetch(item.path, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      return { ...item, ok: true, data };
    } catch (error) {
      return { ...item, ok: false, error: error.message };
    }
  }

  async function fetchText(path) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return { ok: true, text: await response.text() };
    } catch (error) {
      return { ok: false, error: error.message, text: "" };
    }
  }

  async function readApiJson(response) {
    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();
    if (!contentType.includes("application/json")) {
      const isHtml = text.trim().startsWith("<");
      throw new Error(isHtml
        ? "沒有連到 Admin API。請用 python scripts/admin_server.py --port 4177 啟動，並開啟該 port 的 /admin/。"
        : `Admin API 回應格式不是 JSON：HTTP ${response.status}`);
    }
    try {
      return JSON.parse(text || "{}");
    } catch (_) {
      throw new Error(`Admin API 回傳 JSON 格式錯誤：HTTP ${response.status}`);
    }
  }

  async function loadAdminStatus() {
    await loadApiAuth();
    await loadSupabaseUsers();
    await loadSupabaseAdvancedRequests();

    const entries = await Promise.all(healthFiles.map(fetchJson));
    state.results = Object.fromEntries(entries.map((entry) => [entry.key, entry]));
    state.logs = {
      normal: await fetchText("../data/macro-auto-updater.log"),
      error: await fetchText("../data/macro-auto-updater.err.log"),
    };

    try {
      if (state.apiAuthRequired) throw new Error("API authentication required");
      const response = await fetch(API_STATUS_URL, {
        cache: "no-store",
        headers: await adminAuthHeaders(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const apiStatus = await readApiJson(response);
      if (!apiStatus.ok) throw new Error(apiStatus.error || "Admin API unavailable");
      state.apiAvailable = true;
      state.apiAuthRequired = false;
      state.apiStatus = apiStatus;
      state.apiUser = apiStatus.user || state.apiUser;
      if (apiStatus.dataFiles) {
        state.results = Object.fromEntries(Object.entries(apiStatus.dataFiles).map(([key, file]) => [key, file]));
      }
      if (apiStatus.logs) {
        state.logs = {
          normal: { ok: true, text: (apiStatus.logs?.macro || []).join("\n") },
          error: { ok: true, text: (apiStatus.logs?.macroError || []).join("\n") },
        };
      }
      return;
    } catch (_) {
      state.apiAvailable = false;
      state.apiStatus = null;
    }
  }

  async function loadApiAuth() {
    try {
      const response = await fetch(API_AUTH_ME_URL, { cache: "no-store" });
      if (response.status === 401 || response.status === 403) {
        state.apiUser = null;
        state.apiAuthRequired = true;
        return;
      }
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      state.apiUser = payload.user;
      state.apiAuthRequired = false;
    } catch (_) {
      state.apiUser = null;
      state.apiAuthRequired = false;
    }
  }

  function fileSummary(key) {
    const result = state.results[key] || {};
    if (result.summary) return result.summary;
    const data = result.data || {};
    return data.meta || data || {};
  }

  function generatedAtFor(key) {
    const summary = fileSummary(key);
    return summary.generatedAt || summary.updatedAt || state.results[key]?.modifiedAt;
  }

  function renderMetrics() {
    const site = fileSummary("site");
    const users = Object.values(readUsers());
    const staleDays = daysSince(site.generatedAt || state.results.site?.modifiedAt);
    const failedFiles = Object.values(state.results).filter((result) => !result.ok).length;
    const errorLogLines = state.logs.error.text.trim().split(/\r?\n/).filter(Boolean).length;
    const runningJobs = (state.apiStatus?.jobs || []).filter((job) => job.status === "running").length;
    const warningCount = failedFiles + errorLogLines + (staleDays > 2 ? 1 : 0);

    $('[data-metric="candidateCount"]').textContent = fmt(site.candidateCount);
    $('[data-metric="stockCount"]').textContent = fmt(site.stockCount);
    $('[data-metric="userCount"]').textContent = fmt(users.length);
    $('[data-metric="warningCount"]').textContent = fmt(warningCount);

    $('[data-metric-note="candidateCount"]').textContent = `市場日期 ${site.marketDate || "--"}`;
    $('[data-metric-note="stockCount"]').textContent = state.apiAvailable
      ? `Admin API 已登入：${state.apiUser?.nickname || state.apiUser?.account || "admin"}`
      : (state.apiAuthRequired ? "Admin API 需要登入" : (site.source || "靜態資料模式"));
    $('[data-metric-note="userCount"]').textContent = `${users.filter((user) => user.role === "admin").length} 位管理員`;
    $('[data-metric-note="warningCount"]').textContent = runningJobs ? `${runningJobs} 個任務執行中` : (warningCount ? "需要檢查" : "目前無明顯異常");

    $(".metric-card-alert").classList.toggle("is-clear", warningCount === 0);
    $("[data-generated-at]").textContent = `產生時間 ${formatDate(site.generatedAt || state.results.site?.modifiedAt)}`;

    const dot = $("[data-health-dot]");
    dot.classList.toggle("is-ok", warningCount === 0);
    dot.classList.toggle("is-alert", warningCount > 0);
    $("[data-system-status]").textContent = warningCount ? "需要檢查" : "系統正常";
    $("[data-system-summary]").textContent = state.apiAvailable
      ? `管理 API 已連線，資料更新至 ${site.marketDate || "--"}`
      : state.apiAuthRequired
        ? `管理 API 需要後端登入，資料更新至 ${site.marketDate || "--"}`
        : `靜態模式，資料更新至 ${site.marketDate || "--"}`;
  }

  function renderApiAuth() {
    const panel = $("[data-api-auth-panel]");
    if (!panel) return;
    const form = $("[data-api-login-form]");
    const passwordForm = $("[data-api-password-form]");
    const logoutButton = $("[data-api-logout]");
    const message = $("[data-api-auth-message]");

    if (state.apiUser) {
      message.textContent = `Cloudflare 管理 API 已連線：${state.apiUser.nickname || state.apiUser.account || "admin"}。更新按鈕會觸發 GitHub Actions。`;
      form.hidden = true;
      passwordForm.hidden = true;
      logoutButton.hidden = true;
      return;
    }

    message.textContent = "尚未連線 Cloudflare 管理 API。請確認已用管理員帳號登入，且 Cloudflare 環境變數已設定。";
    form.hidden = true;
    passwordForm.hidden = true;
    logoutButton.hidden = true;
  }

  function runningJobFor(task) {
    return (state.apiStatus?.jobs || []).find((job) => job.task === task && ["queued", "running"].includes(job.status));
  }

  function lastJobFor(task) {
    return (state.apiStatus?.jobs || []).filter((job) => job.task === task).slice(-1)[0];
  }

  function statusFor(item) {
    const runningJob = runningJobFor(item.task);
    if (runningJob) return { label: runningJob.status === "queued" ? "排程中" : "執行中", tone: "info", time: formatDate(runningJob.startedAt || runningJob.createdAt) };

    const lastJob = lastJobFor(item.task);
    if (lastJob?.status === "failed") return { label: "執行失敗", tone: "error", time: formatDate(lastJob.finishedAt) };
    if (lastJob?.status === "success") return { label: "執行完成", tone: "ok", time: formatDate(lastJob.finishedAt) };

    const result = state.results[item.source];
    if (!result) return { label: "待確認", tone: "info", time: "--" };
    if (!result.ok) return { label: "讀取失敗", tone: "error", time: result.error || "--" };

    const generatedAt = generatedAtFor(item.source);
    const age = daysSince(generatedAt);
    if (age > 2) return { label: "可能過期", tone: "warn", time: formatDate(generatedAt) };
    return { label: "已同步", tone: "ok", time: formatDate(generatedAt) };
  }

  function renderUpdates() {
    $("[data-update-list]").innerHTML = updateItems.map((item) => {
      const status = statusFor(item);
      const isRunning = !!runningJobFor(item.task);
      const runDisabled = !state.apiAvailable || isRunning;
      const runLabel = state.apiAvailable ? `執行 ${item.title}` : "需啟動 Admin API";
      return `
        <article class="update-row">
          <div>
            <strong class="update-title">${escapeHtml(item.title)}</strong>
            <span class="update-sub">${escapeHtml(item.detail)}</span>
          </div>
          <div>
            <span class="status-pill ${status.tone}">${escapeHtml(status.label)}</span>
            <span class="update-sub">最後更新 ${escapeHtml(status.time)}</span>
          </div>
          <code class="update-command" title="${escapeHtml(item.command)}">${escapeHtml(item.command)}</code>
          <div class="action-group">
            <button class="icon-action is-run" type="button" data-run-task="${escapeHtml(item.task)}" ${runDisabled ? "disabled" : ""} aria-label="${escapeHtml(runLabel)}">${icon("play")}</button>
            <button class="icon-action" type="button" data-copy-command="${escapeHtml(item.command)}" aria-label="複製 ${escapeHtml(item.title)} 指令">${icon("copy")}</button>
            <button class="icon-action" type="button" data-command-info="${escapeHtml(item.title)}" aria-label="查看 ${escapeHtml(item.title)} 說明">${icon("info")}</button>
          </div>
        </article>`;
    }).join("");
  }

  function renderUsers() {
    const users = readUsers();
    const keyword = ($("[data-user-search]")?.value || "").trim().toLowerCase();
    const rows = Object.values(users)
      .filter((user) => {
        const text = `${user.nickname || ""} ${user.account || ""} ${user.role || ""}`.toLowerCase();
        return !keyword || text.includes(keyword);
      })
      .sort((a, b) => (a.role === "admin" ? -1 : 0) - (b.role === "admin" ? -1 : 0) || String(a.account).localeCompare(String(b.account)));

    $("[data-user-list]").innerHTML = rows.map((user) => {
      const role = effectiveRole(user);
      const expiresNote = user.role === "advanced" && user.advancedExpiresAt
        ? ` · 進階到期 ${formatDate(user.advancedExpiresAt)}`
        : "";
      return `
        <article class="user-row">
          <div>
            <strong class="user-name">${escapeHtml(user.nickname || user.account || "未命名使用者")}</strong>
            <span class="user-sub">${escapeHtml(user.account || "--")} · 建立 ${escapeHtml(user.createdAt === "default" ? "預設帳號" : formatDate(user.createdAt))}${escapeHtml(expiresNote)}</span>
          </div>
          <div class="action-group">
            <span class="role-chip ${role}">${escapeHtml(roleLabels[role] || role)}</span>
            <select class="role-select" data-role-account="${escapeHtml(user.account || "")}" aria-label="調整 ${escapeHtml(user.account || "使用者")} 權限">
              ${Object.entries(roleLabels).map(([value, label]) => `<option value="${value}" ${value === role ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
        </article>`;
    }).join("") || '<div class="log-row">找不到符合條件的使用者。</div>';
  }

  function requestStatusLabel(status) {
    return {
      pending: "待審核",
      approved: "已核准",
      rejected: "已拒絕",
    }[status] || status || "待審核";
  }

  function renderAdvancedRequests() {
    const mount = $("[data-advanced-request-list]");
    if (!mount) return;
    const requests = readAdvancedRequests()
      .filter((request) => (request.status || "pending") === "pending")
      .slice()
      .sort((a, b) => {
        const ar = a.status === "pending" ? 0 : 1;
        const br = b.status === "pending" ? 0 : 1;
        return ar - br || new Date(b.requestedAt || 0) - new Date(a.requestedAt || 0);
      });
    const users = readUsers();

    mount.innerHTML = requests.map((request) => {
      const user = users[request.account] || {};
      const status = request.status || "pending";
      const days = Number(request.approvedDays || 30);
      const expiresAt = user.advancedExpiresAt || request.expiresAt;
      return `
        <article class="request-row ${status}">
          <div>
            <strong class="request-title">${escapeHtml(request.nickname || user.nickname || request.account || "未命名使用者")}</strong>
            <span class="request-sub">${escapeHtml(request.account || "--")} · 申請 ${escapeHtml(formatDate(request.requestedAt))}${expiresAt ? ` · 到期 ${escapeHtml(formatDate(expiresAt))}` : ""}</span>
          </div>
          <span class="status-pill ${status === "pending" ? "warn" : status === "approved" ? "ok" : "error"}">${escapeHtml(requestStatusLabel(status))}</span>
          <div class="request-actions">
            <label>
              <span>開放天數</span>
              <input type="number" min="1" max="365" value="${escapeHtml(days)}" data-request-days="${escapeHtml(request.id || "")}" ${status !== "pending" ? "disabled" : ""} />
            </label>
            <button class="ghost-button" type="button" data-approve-request="${escapeHtml(request.id || "")}" ${status !== "pending" ? "disabled" : ""}>核准</button>
            <button class="ghost-button danger-button" type="button" data-reject-request="${escapeHtml(request.id || "")}" ${status !== "pending" ? "disabled" : ""}>拒絕</button>
          </div>
        </article>`;
    }).join("") || '<div class="log-row">目前沒有進階會員申請。</div>';
  }

  function renderHealth() {
    $("[data-health-list]").innerHTML = healthFiles.map((file) => {
      const result = state.results[file.key];
      const status = result?.ok ? { label: "可讀取", tone: "ok" } : { label: "異常", tone: "error" };
      let note = file.path.replace("../", "");
      if (result?.ok) {
        const summary = fileSummary(file.key);
        const when = summary.generatedAt || summary.updatedAt || result.modifiedAt;
        const count = summary.items || Object.keys(result.data || {}).length;
        note = when ? `${note} · ${formatDate(when)}` : `${note} · ${fmt(count)} 個欄位`;
      } else if (result?.error) {
        note = `${note} · ${result.error}`;
      }

      return `
        <article class="health-row">
          <div>
            <strong class="health-title">${escapeHtml(file.label)}</strong>
            <span class="health-sub">${escapeHtml(note)}</span>
          </div>
          <span class="status-pill ${status.tone}">${status.label}</span>
        </article>`;
    }).join("");
  }

  function renderLogs() {
    const normalLines = state.logs.normal.text.trim().split(/\r?\n/).filter(Boolean).slice(-4);
    const errorLines = state.logs.error.text.trim().split(/\r?\n/).filter(Boolean).slice(-4);
    const jobLines = (state.apiStatus?.jobs || []).slice(-4).map((job) => ({
      line: `${job.label} ${job.status} ${formatDate(job.finishedAt || job.startedAt || job.createdAt)}`,
      source: job.logPath || "admin-jobs",
      jobId: job.id,
    }));
    const auditLines = (state.apiStatus?.audit || []).slice(-4).map((entry) => ({
      line: `${formatAuditAction(entry.action)} ${formatAuditStatus(entry.status)} · ${entry.operator?.nickname || entry.operator?.account || "Unknown"}`,
      source: `audit ${formatDate(entry.time)}`,
      audit: true,
    }));
    const combined = [
      ...auditLines,
      ...jobLines,
      ...normalLines.map((line) => ({ line, source: "macro-auto-updater.log", logKey: "macro" })),
      ...errorLines.map((line) => ({ line, source: "macro-auto-updater.err.log", logKey: "macroError" })),
    ];

    $("[data-log-list]").innerHTML = combined.length
      ? combined.map((item) => `
          <button class="log-row log-row-button" type="button" ${item.audit ? "data-open-audit" : item.jobId ? `data-open-job-log="${escapeHtml(item.jobId)}"` : `data-open-log="${escapeHtml(item.logKey || "macro")}"`}>
            ${escapeHtml(item.line)}
            <span class="log-sub">${escapeHtml(item.source)}</span>
          </button>`).join("")
      : '<article class="log-row">目前沒有可顯示的更新紀錄。</article>';
  }

  function formatAuditAction(action) {
    return {
      "run-task": "執行更新",
      "run-task-complete": "更新完成",
      "create-backup": "建立備份",
      "auth-login": "API 登入",
      "auth-logout": "API 登出",
      "auth-change-password": "修改密碼",
    }[action] || action || "操作";
  }

  function formatAuditStatus(status) {
    return {
      queued: "已排程",
      success: "成功",
      failed: "失敗",
      blocked: "已阻擋",
    }[status] || status || "--";
  }

  function renderBackups() {
    if (state.apiStatus?.backups?.length) {
      $("[data-backup-list]").innerHTML = state.apiStatus.backups.slice(0, 8).map((item) => `
        <article class="backup-row">
          <div>
            <strong class="backup-title">${escapeHtml(item.path.split(/[\\/]/).pop())}</strong>
            <span class="backup-sub">${escapeHtml(item.path)} · ${formatDate(item.modifiedAt)}</span>
          </div>
          <span class="status-pill ok">已建立</span>
        </article>`).join("");
      return;
    }

    const history = state.results.history?.data;
    const marketDate = fileSummary("site").marketDate || "--";
    const historyCount = Array.isArray(history?.symbols) ? history.symbols.length : 0;
    const rows = [
      { title: "歷史資料索引", path: `${fmt(historyCount)} 檔股票，更新至 ${marketDate}`, tone: historyCount ? "ok" : "warn" },
      ...fallbackBackups.map((item) => ({ ...item, tone: "info" })),
    ];

    $("[data-backup-list]").innerHTML = rows.map((item) => `
      <article class="backup-row">
        <div>
          <strong class="backup-title">${escapeHtml(item.title)}</strong>
          <span class="backup-sub">${escapeHtml(item.path)}</span>
        </div>
        <span class="status-pill ${item.tone}">${item.tone === "ok" ? "已建立" : item.tone === "warn" ? "待確認" : "追蹤中"}</span>
      </article>`).join("");
  }

  async function runTask(task) {
    if (!state.apiAvailable) {
      showToast("管理 API 尚未連線。請確認 Cloudflare Pages 環境變數已設定，並重新部署。");
      return;
    }
    const item = updateItems.find((entry) => entry.task === task);
    if (!item) return;

    const confirmed = window.confirm(`確定要執行「${item.title}」嗎？\n\n這會觸發 GitHub Actions 執行資料更新，完成後會自動 commit 並讓 Cloudflare 重新部署。`);
    if (!confirmed) return;

    try {
      const response = await fetch(API_RUN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(await adminAuthHeaders()),
        },
        body: JSON.stringify({ task, operator: operatorPayload() }),
      });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      showToast(`已觸發「${item.title}」更新，GitHub Actions 會在背景執行。`);
      await hydrate({ silent: true });
    } catch (error) {
      showToast(`觸發失敗：${error.message}`);
    }
  }

  async function openLog(key = "macro") {
    if (!state.apiAvailable) {
      if (state.apiAuthRequired) {
        showToast("請先登入 Admin API。");
        return;
      }
      const lines = key === "macroError" ? state.logs.error.text : state.logs.normal.text;
      showLogModal(key === "macroError" ? "錯誤紀錄" : "更新紀錄", lines || "目前沒有紀錄。");
      return;
    }

    try {
      const response = await fetch(`${API_LOGS_URL}?key=${encodeURIComponent(key)}&limit=240`, { cache: "no-store" });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      showLogModal(key === "macroError" ? "錯誤紀錄" : "更新紀錄", (payload.lines || []).join("\n") || "目前沒有紀錄。");
    } catch (error) {
      showToast(`讀取紀錄失敗：${error.message}`);
    }
  }

  async function openJobLog(jobId) {
    if (!state.apiAvailable || !jobId) return;
    try {
      const response = await fetch(`../api/admin/jobs/${encodeURIComponent(jobId)}/log`, { cache: "no-store" });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      showLogModal(`任務紀錄 ${jobId}`, (payload.lines || []).join("\n") || "目前沒有紀錄。");
    } catch (error) {
      showToast(`讀取任務紀錄失敗：${error.message}`);
    }
  }

  async function openAudit() {
    if (!state.apiAvailable || state.apiAuthRequired) {
      showToast(state.apiAuthRequired ? "請先登入 Admin API。" : "目前是靜態模式，沒有伺服器端操作紀錄。");
      return;
    }

    try {
      const response = await fetch(`${API_AUDIT_URL}?limit=120`, { cache: "no-store" });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      const lines = (payload.entries || []).map((entry) => {
        const operator = entry.operator?.nickname || entry.operator?.account || "Unknown";
        const detail = entry.detail ? ` ${JSON.stringify(entry.detail)}` : "";
        return `[${entry.time || "--"}] ${formatAuditAction(entry.action)} ${formatAuditStatus(entry.status)} by ${operator}${detail}`;
      });
      showLogModal("操作審計紀錄", lines.join("\n") || "目前沒有操作紀錄。");
    } catch (error) {
      showToast(`讀取操作紀錄失敗：${error.message}`);
    }
  }

  async function createBackup() {
    if (!state.apiAvailable) {
      showToast(state.apiAuthRequired ? "請先登入 Admin API。" : "目前是靜態模式。請用 python scripts/admin_server.py --port 4177 啟動管理 API。");
      return;
    }
    const confirmed = window.confirm("確定要建立目前資料檔的時間戳備份嗎？\n\n備份會寫入 data/admin-backups，不會覆蓋原始資料。");
    if (!confirmed) return;

    try {
      const response = await fetch(API_BACKUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operator: operatorPayload() }),
      });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      showToast(`已建立 ${payload.created.length} 個備份檔。`);
      await hydrate({ silent: true });
    } catch (error) {
      showToast(`建立備份失敗：${error.message}`);
    }
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("已複製指令。");
    } catch (_) {
      showToast(text);
    }
  }

  function showToast(message) {
    document.querySelector(".toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
  }

  function showLogModal(title, text) {
    document.querySelector(".admin-modal")?.remove();
    const modal = document.createElement("div");
    modal.className = "admin-modal";
    modal.innerHTML = `
      <section class="admin-modal-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <header class="admin-modal-header">
          <strong>${escapeHtml(title)}</strong>
          <button class="admin-modal-close" type="button" data-close-modal aria-label="關閉">×</button>
        </header>
        <pre class="admin-log-pre">${escapeHtml(text)}</pre>
      </section>`;
    document.body.appendChild(modal);
  }

  async function hydrate(options = {}) {
    await loadAdminStatus();
    renderMetrics();
    renderApiAuth();
    renderUpdates();
    renderUsers();
    renderAdvancedRequests();
    renderHealth();
    renderLogs();
    renderBackups();
    if (!options.silent) {
      document.documentElement.dataset.adminApi = state.apiAvailable ? "connected" : "static";
    }
  }

  document.addEventListener("click", async (event) => {
    const runButton = event.target.closest("[data-run-task]");
    if (runButton) runTask(runButton.dataset.runTask);

    const openLogButton = event.target.closest("[data-open-log]");
    if (openLogButton) openLog(openLogButton.dataset.openLog);

    const openJobLogButton = event.target.closest("[data-open-job-log]");
    if (openJobLogButton) openJobLog(openJobLogButton.dataset.openJobLog);

    if (event.target.closest("[data-open-audit]")) openAudit();

    if (event.target.closest("[data-create-backup]")) createBackup();

    if (event.target.closest("[data-api-logout]")) logoutApi();

    if (event.target.closest("[data-close-modal]") || event.target.classList.contains("admin-modal")) {
      document.querySelector(".admin-modal")?.remove();
    }

    const copyButton = event.target.closest("[data-copy-command]");
    if (copyButton) copyText(copyButton.dataset.copyCommand);

    const infoButton = event.target.closest("[data-command-info]");
    if (infoButton) {
      const message = state.apiAvailable
        ? `${infoButton.dataset.commandInfo}：可直接執行，系統會在 data/admin-jobs 留下任務 log。`
        : `${infoButton.dataset.commandInfo}：目前是靜態模式，啟動 Admin API 後可一鍵執行。`;
      showToast(message);
    }

    if (event.target.closest("[data-refresh]")) {
      hydrate();
      showToast("已重新讀取管理員資料。");
    }

    const approveButton = event.target.closest("[data-approve-request]");
    if (approveButton) {
      const requestId = approveButton.dataset.approveRequest;
      const requests = readAdvancedRequests();
      const request = requests.find((item) => item.id === requestId);
      if (!request) return;
      const users = readUsers();
      const user = users[request.account];
      if (!user) {
        showToast("找不到此申請對應的使用者。");
        return;
      }
      const daysInput = document.querySelector(`[data-request-days="${CSS.escape(requestId)}"]`);
      const days = Math.max(1, Math.min(365, Number(daysInput?.value || 30)));
      const now = new Date();
      const expiresAt = addDays(now, days).toISOString();
      user.role = "advanced";
      user.roleLabel = roleLabels.advanced;
      user.advancedApprovedAt = now.toISOString();
      user.advancedExpiresAt = expiresAt;
      try {
        const updated = await updateSupabaseUserRole(user, "advanced", {
          advanced_approved_at: user.advancedApprovedAt,
          advanced_expires_at: expiresAt,
        });
        if (updated) {
          await updateSupabaseAdvancedRequest(requestId, {
            status: "approved",
            approved_days: days,
            expires_at: expiresAt,
            reviewed_at: now.toISOString(),
          });
        } else {
          writeUsers(users);
          writeAdvancedRequests(requests.filter((item) => item.id !== requestId));
        }
        renderMetrics();
        renderUsers();
        renderAdvancedRequests();
        showToast(`已核准 ${request.account} 的進階會員權限 ${days} 天。`);
      } catch (error) {
        showToast(error.message || "核准進階會員申請失敗。");
      }
      return;
    }

    const rejectButton = event.target.closest("[data-reject-request]");
    if (rejectButton) {
      const requestId = rejectButton.dataset.rejectRequest;
      const requests = readAdvancedRequests();
      const request = requests.find((item) => item.id === requestId);
      if (!request) return;
      try {
        if (state.advancedRequests) {
          await updateSupabaseAdvancedRequest(requestId, {
            status: "rejected",
            reviewed_at: new Date().toISOString(),
          });
        } else {
          writeAdvancedRequests(requests.filter((item) => item.id !== requestId));
        }
        renderAdvancedRequests();
        showToast(`已拒絕 ${request.account} 的進階會員申請。`);
      } catch (error) {
        showToast(error.message || "拒絕進階會員申請失敗。");
      }
    }
  });

  document.addEventListener("change", async (event) => {
    const select = event.target.closest("[data-role-account]");
    if (!select) return;
    const users = readUsers();
    const account = select.dataset.roleAccount;
    if (!users[account]) return;
    const previousRole = users[account].role;
    users[account].role = select.value;
    users[account].roleLabel = roleLabels[select.value] || select.value;
    if (select.value !== "advanced") {
      delete users[account].advancedApprovedAt;
      delete users[account].advancedExpiresAt;
    }
    try {
      const extra = select.value === "advanced"
        ? {}
        : { advanced_approved_at: null, advanced_expires_at: null };
      if (!(await updateSupabaseUserRole(users[account], select.value, extra))) {
        writeUsers(users);
      }
      renderMetrics();
      renderUsers();
      showToast(`已將 ${account} 權限調整為 ${roleLabels[select.value]}。`);
    } catch (error) {
      users[account].role = previousRole;
      select.value = previousRole;
      renderUsers();
      showToast(error.message || "權限更新失敗。");
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-user-search]")) renderUsers();
  });

  document.addEventListener("submit", (event) => {
    const loginForm = event.target.closest("[data-api-login-form]");
    if (loginForm) {
      event.preventDefault();
      loginApi(loginForm);
      return;
    }

    const passwordForm = event.target.closest("[data-api-password-form]");
    if (passwordForm) {
      event.preventDefault();
      changeApiPassword(passwordForm);
    }
  });

  async function loginApi(form) {
    try {
      const response = await fetch(API_AUTH_LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: form.account.value.trim(),
          password: form.password.value,
        }),
      });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      form.password.value = "";
      showToast("Admin API 已登入。");
      await hydrate({ silent: true });
    } catch (error) {
      showToast(`API 登入失敗：${error.message}`);
    }
  }

  async function logoutApi() {
    try {
      await fetch(API_AUTH_LOGOUT_URL, { method: "POST" });
      state.apiUser = null;
      state.apiAvailable = false;
      state.apiAuthRequired = true;
      showToast("Admin API 已登出。");
      await hydrate({ silent: true });
    } catch (error) {
      showToast(`API 登出失敗：${error.message}`);
    }
  }

  async function changeApiPassword(form) {
    if (!state.apiUser) {
      showToast("請先登入 Admin API。");
      return;
    }
    if (form.newPassword.value.length < 8) {
      showToast("新密碼至少需要 8 碼。");
      return;
    }
    const confirmed = window.confirm("確定要修改 Admin API 密碼嗎？\n\n成功後新密碼會以雜湊存入 data/admin-users.json。");
    if (!confirmed) return;

    try {
      const response = await fetch(API_AUTH_CHANGE_PASSWORD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: form.currentPassword.value,
          newPassword: form.newPassword.value,
        }),
      });
      const payload = await readApiJson(response);
      if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
      form.reset();
      showToast("Admin API 密碼已更新。");
      await hydrate({ silent: true });
    } catch (error) {
      showToast(`修改密碼失敗：${error.message}`);
    }
  }

  hydrate().catch((error) => {
    console.error("[AI Stock Lab] admin dashboard failed", error);
    $("[data-system-status]").textContent = "載入失敗";
    $("[data-system-summary]").textContent = "請檢查資料檔或瀏覽器主控台";
    $("[data-health-dot]").classList.add("is-alert");
  });

  window.setInterval(() => {
    if (state.apiAvailable && (state.apiStatus?.jobs || []).some((job) => ["queued", "running"].includes(job.status))) {
      hydrate({ silent: true });
    }
  }, 5000);
})();
