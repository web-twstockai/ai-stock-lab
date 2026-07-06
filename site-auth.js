(function () {
  const USERS_KEY = "aiStockLabUsers";
  const SESSION_KEY = "aiStockLabSession";
  const LOGIN_API = "api/auth/login";
  const DEFAULT_USERS = {
    admin: {
      nickname: "系統管理員",
      account: "admin",
      role: "admin",
      roleLabel: "管理員",
      createdAt: "default",
    },
  };

  function getStored(key) {
    try {
      if (window.localStorage) return localStorage.getItem(key);
    } catch (_) {}
    const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setStored(key, value) {
    try {
      if (window.localStorage) {
        localStorage.setItem(key, value);
        return;
      }
    } catch (_) {}
    document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
  }

  function removeStored(key) {
    try {
      if (window.localStorage) localStorage.removeItem(key);
    } catch (_) {}
    document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
  }

  function readUsers() {
    try {
      const users = JSON.parse(getStored(USERS_KEY) || "{}");
      let changed = false;
      Object.entries(DEFAULT_USERS).forEach(([account, user]) => {
        if (!users[account]) {
          users[account] = user;
          changed = true;
        }
      });
      if (changed) writeUsers(users);
      return users;
    } catch (_) {
      writeUsers({ ...DEFAULT_USERS });
      return { ...DEFAULT_USERS };
    }
  }

  function writeUsers(users) {
    setStored(USERS_KEY, JSON.stringify(users));
  }

  function apiPath(path) {
    const prefix = location.pathname.includes("/about/")
      || location.pathname.includes("/terms/")
      || location.pathname.includes("/membership/")
      ? "../"
      : "";
    return `${prefix}${path}`;
  }

  function rememberAdmin(account, nickname = "系統管理員") {
    const users = readUsers();
    users[account] = {
      ...(users[account] || {}),
      nickname,
      account,
      role: "admin",
      roleLabel: "管理員",
      status: "active",
      createdAt: users[account]?.createdAt || new Date().toISOString(),
    };
    writeUsers(users);
    setSession(account);
    return users[account];
  }

  function currentUser() {
    const account = getStored(SESSION_KEY);
    if (!account) return null;
    return readUsers()[account] || null;
  }

  function setSession(account) {
    setStored(SESSION_KEY, account);
  }

  function clearSession() {
    removeStored(SESSION_KEY);
  }

  function goDashboard() {
    const prefix = location.pathname.includes("/about/")
      || location.pathname.includes("/terms/")
      || location.pathname.includes("/membership/")
      ? "../"
      : "";
    location.href = `${prefix}market-overview/`;
  }

  function ensureModal() {
    let modal = document.querySelector("[data-auth-modal]");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "auth-modal";
    modal.dataset.authModal = "true";
    modal.innerHTML = `
      <div class="auth-panel" role="dialog" aria-modal="true" aria-label="AI Stock Lab 會員登入">
        <button class="auth-close" type="button" aria-label="關閉">×</button>
        <div class="auth-tabs">
          <button type="button" class="is-active" data-auth-tab="login">登入</button>
        </div>

        <form class="auth-form is-active" data-auth-form="login">
          <h2>登入 AI Stock Lab</h2>
          <p>請使用 Cloudflare 設定的管理員帳號登入。</p>
          <label>帳號<input name="account" autocomplete="username" required /></label>
          <label>密碼<input name="password" type="password" autocomplete="current-password" required /></label>
          <strong class="auth-error" data-auth-error="login"></strong>
          <button class="auth-submit" type="submit">登入</button>
        </form>
      </div>`;
    document.body.appendChild(modal);

    const showTab = (name) => {
      modal.querySelectorAll("[data-auth-tab]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.authTab === name);
      });
      modal.querySelectorAll("[data-auth-form]").forEach((form) => {
        form.classList.toggle("is-active", form.dataset.authForm === name);
      });
    };

    modal.querySelectorAll("[data-auth-tab]").forEach((button) => {
      button.addEventListener("click", () => showTab(button.dataset.authTab));
    });
    modal.querySelector(".auth-close").addEventListener("click", () => modal.classList.remove("is-open"));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.classList.remove("is-open");
    });

    modal.querySelector('[data-auth-form="login"]').addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const account = form.account.value.trim();
      const password = form.password.value;
      const error = modal.querySelector('[data-auth-error="login"]');
      try {
        const response = await fetch(apiPath(LOGIN_API), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ account, password }),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || !payload.ok) throw new Error(payload.error || "登入失敗。");
        rememberAdmin(payload.user?.account || account, payload.user?.nickname || "系統管理員");
        error.textContent = "";
        goDashboard();
      } catch (authError) {
        error.textContent = authError.message || "帳號或密碼不正確。";
      }
    });

    return modal;
  }

  function openAuth(defaultTab = "login") {
    if (currentUser()) {
      goDashboard();
      return;
    }
    const modal = ensureModal();
    modal.classList.add("is-open");
    modal.querySelector(`[data-auth-tab="${defaultTab}"]`)?.click();
  }

  function effectiveRole(user) {
    if (user?.role === "advanced" && user.advancedExpiresAt) {
      const expiresAt = new Date(user.advancedExpiresAt).getTime();
      if (!Number.isNaN(expiresAt) && expiresAt <= Date.now()) return "basic";
    }
    return user?.role || "basic";
  }

  window.AIStockAuth = {
    currentUser,
    openAuth,
    logout() {
      clearSession();
      location.href = "/";
    },
    isBasic(user = currentUser()) {
      return !user || effectiveRole(user) === "basic";
    },
    hasAdvanced(user = currentUser()) {
      return !!user && ["advanced", "admin"].includes(effectiveRole(user));
    },
    hasAdmin(user = currentUser()) {
      return !!user && user.role === "admin";
    },
  };

  window.AIStockSupabase = {
    async client() {
      return null;
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".login, [data-auth-open]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openAuth("login");
      });
    });
    if (new URLSearchParams(location.search).get("auth") === "login") openAuth("login");
  });
})();
