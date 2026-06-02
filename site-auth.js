(function () {
  const USERS_KEY = "aiStockLabUsers";
  const SESSION_KEY = "aiStockLabSession";
  const DEFAULT_USERS = {
    admin: {
      nickname: "系統管理員",
      account: "admin",
      password: "admin1234",
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
          <button type="button" data-auth-tab="register">註冊</button>
        </div>

        <form class="auth-form is-active" data-auth-form="login">
          <h2>登入 AI Stock Lab</h2>
          <p>請先註冊會員，再登入使用市場總覽與基本會員功能。</p>
          <label>帳號<input name="account" autocomplete="username" required /></label>
          <label>密碼<input name="password" type="password" autocomplete="current-password" required /></label>
          <strong class="auth-error" data-auth-error="login"></strong>
          <button class="auth-submit" type="submit">登入</button>
        </form>

        <form class="auth-form" data-auth-form="register">
          <h2>註冊基本會員</h2>
          <p>剛註冊的會員預設為基本會員，可使用基本策略與公開功能頁。</p>
          <label>暱稱<input name="nickname" autocomplete="nickname" required /></label>
          <label>帳號<input name="account" autocomplete="username" required /></label>
          <label>密碼<input name="password" type="password" autocomplete="new-password" minlength="4" required /></label>
          <strong class="auth-error" data-auth-error="register"></strong>
          <button class="auth-submit" type="submit">註冊並登入</button>
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

    modal.querySelector('[data-auth-form="login"]').addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const account = form.account.value.trim();
      const password = form.password.value;
      const users = readUsers();
      const error = modal.querySelector('[data-auth-error="login"]');
      if (!users[account] || users[account].password !== password) {
        error.textContent = "帳號或密碼不正確。";
        return;
      }
      error.textContent = "";
      setSession(account);
      goDashboard();
    });

    modal.querySelector('[data-auth-form="register"]').addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const nickname = form.nickname.value.trim();
      const account = form.account.value.trim();
      const password = form.password.value;
      const users = readUsers();
      const error = modal.querySelector('[data-auth-error="register"]');
      if (!nickname || !account || !password) {
        error.textContent = "請完整填寫暱稱、帳號與密碼。";
        return;
      }
      if (users[account]) {
        error.textContent = "這個帳號已經註冊。";
        return;
      }
      users[account] = {
        nickname,
        account,
        password,
        role: "basic",
        roleLabel: "基礎會員",
        createdAt: new Date().toISOString(),
      };
      writeUsers(users);
      setSession(account);
      goDashboard();
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
