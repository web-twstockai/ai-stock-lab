from __future__ import annotations

import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "public-dist"

ROOT_FILES = [
    "app.html",
    "dashboard-data.js",
    "dashboard-header.css",
    "dashboard-header.js",
    "dashboard-simple.css",
    "dashboard-simple.js",
    "home.html",
    "index.html",
    "public-pages.css",
    "site-auth.css",
    "site-auth.js",
    "styles.css",
]

PUBLIC_DIRS = [
    "about",
    "daily-screening",
    "intelligence-center",
    "market-overview",
    "member-admin",
    "membership",
    "model-library",
    "quant-indicators",
    "services",
    "stock-analysis",
    "terms",
]

DATA_FILES = [
    "bh1908_video_sources.json",
    "candidates.json",
    "company-insider-robot.js",
    "company-insider-robot.json",
    "company-meta.json",
    "institutional-robot.js",
    "institutional-robot.json",
    "intelligence-center.js",
    "intelligence-center.json",
    "intelligence-overview.js",
    "intelligence-overview.json",
    "macro-robot.js",
    "macro-robot.json",
    "model_library.json",
    "regular-board-volume.js",
    "regular-board-volume.json",
    "shortMarginRatioMockData.js",
    "shortMarginRatioMockData.json",
    "site-data.json",
    "stock-themes.json",
]

EXCLUDED_SUFFIXES = {
    ".bak",
    ".tmp",
    ".log",
    ".jsonl",
    ".py",
}

EXCLUDED_NAMES = {
    "admin-users.json",
    "admin-audit.jsonl",
}

EXCLUDED_DIR_NAMES = {
    ".git",
    "admin",
    "admin-backups",
    "admin-jobs",
    "scripts",
    "theme-cache",
    "tools",
    "verification-screenshots",
}


def should_skip(path: Path) -> bool:
    relative = path.relative_to(ROOT)
    parts = set(relative.parts)
    if parts & EXCLUDED_DIR_NAMES:
        return True
    if path.name in EXCLUDED_NAMES:
        return True
    if "".join(path.suffixes[-2:]) == ".json.bak":
        return True
    if path.suffix in EXCLUDED_SUFFIXES:
        return True
    return False


def copy_file(source: Path, destination: Path) -> None:
    if should_skip(source):
        return
    if not source.exists():
        print(f"skip missing: {source.relative_to(ROOT)}")
        return
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, destination)


def copy_tree(source: Path, destination: Path) -> None:
    if not source.exists():
        print(f"skip missing dir: {source.relative_to(ROOT)}")
        return
    for file_path in source.rglob("*"):
        if file_path.is_file() and not should_skip(file_path):
            copy_file(file_path, destination / file_path.relative_to(source))


def write_deploy_metadata() -> None:
    (DIST / "_headers").write_text(
        "\n".join(
            [
                "/*",
                "  X-Content-Type-Options: nosniff",
                "  X-Frame-Options: DENY",
                "  Referrer-Policy: strict-origin-when-cross-origin",
                "  Permissions-Policy: camera=(), microphone=(), geolocation=()",
                "",
                "/data/*",
                "  Cache-Control: public, max-age=300",
                "",
                "/*.html",
                "  Cache-Control: no-cache",
                "",
            ]
        ),
        encoding="utf-8",
    )

    (DIST / "robots.txt").write_text(
        "\n".join(
            [
                "User-agent: *",
                "Disallow:",
                "",
            ]
        ),
        encoding="utf-8",
    )


def write_public_auth_script() -> None:
    (DIST / "site-auth.js").write_text(
        "\n".join(
            [
                "(function () {",
                "  const USERS_KEY = 'aiStockLabUsers';",
                "  const SESSION_KEY = 'aiStockLabSession';",
                "",
                "  function getStored(key) {",
                "    try { return localStorage.getItem(key); } catch (_) { return null; }",
                "  }",
                "",
                "  function setStored(key, value) {",
                "    try { localStorage.setItem(key, value); } catch (_) {}",
                "  }",
                "",
                "  function removeStored(key) {",
                "    try { localStorage.removeItem(key); } catch (_) {}",
                "  }",
                "",
                "  function readUsers() {",
                "    try { return JSON.parse(getStored(USERS_KEY) || '{}'); } catch (_) { return {}; }",
                "  }",
                "",
                "  function writeUsers(users) { setStored(USERS_KEY, JSON.stringify(users)); }",
                "",
                "  function currentUser() {",
                "    const account = getStored(SESSION_KEY);",
                "    return account ? readUsers()[account] || null : null;",
                "  }",
                "",
                "  function setSession(account) { setStored(SESSION_KEY, account); }",
                "  function clearSession() { removeStored(SESSION_KEY); }",
                "",
                "  function basePath() {",
                "    return location.pathname.includes('/about/')",
                "      || location.pathname.includes('/terms/')",
                "      || location.pathname.includes('/membership/') ? '../' : '';",
                "  }",
                "",
                "  function goDashboard() {",
                "    const base = basePath();",
                "    location.href = `${base}market-overview/`;",
                "  }",
                "",
                "  function ensureModal() {",
                "    let modal = document.querySelector('[data-auth-modal]');",
                "    if (modal) return modal;",
                "    modal = document.createElement('div');",
                "    modal.className = 'auth-modal';",
                "    modal.dataset.authModal = 'true';",
                "    modal.innerHTML = `",
                "      <div class=\"auth-panel\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Account\">",
                "        <button class=\"auth-close\" type=\"button\" aria-label=\"Close\">x</button>",
                "        <div class=\"auth-tabs\">",
                "          <button type=\"button\" class=\"is-active\" data-auth-tab=\"login\">Login</button>",
                "          <button type=\"button\" data-auth-tab=\"register\">Register</button>",
                "        </div>",
                "        <form class=\"auth-form is-active\" data-auth-form=\"login\">",
                "          <h2>Login</h2>",
                "          <p>This public test account is saved only in this browser.</p>",
                "          <label>Account<input name=\"account\" autocomplete=\"username\" required /></label>",
                "          <label>Password<input name=\"password\" type=\"password\" autocomplete=\"current-password\" required /></label>",
                "          <strong class=\"auth-error\" data-auth-error=\"login\"></strong>",
                "          <button class=\"auth-submit\" type=\"submit\">Login</button>",
                "        </form>",
                "        <form class=\"auth-form\" data-auth-form=\"register\">",
                "          <h2>Register</h2>",
                "          <p>Create a basic test account for browsing the public dashboard.</p>",
                "          <label>Name<input name=\"nickname\" autocomplete=\"nickname\" required /></label>",
                "          <label>Account<input name=\"account\" autocomplete=\"username\" required /></label>",
                "          <label>Password<input name=\"password\" type=\"password\" autocomplete=\"new-password\" minlength=\"4\" required /></label>",
                "          <strong class=\"auth-error\" data-auth-error=\"register\"></strong>",
                "          <button class=\"auth-submit\" type=\"submit\">Register</button>",
                "        </form>",
                "      </div>`;",
                "    document.body.appendChild(modal);",
                "",
                "    const showTab = (name) => {",
                "      modal.querySelectorAll('[data-auth-tab]').forEach((button) => {",
                "        button.classList.toggle('is-active', button.dataset.authTab === name);",
                "      });",
                "      modal.querySelectorAll('[data-auth-form]').forEach((form) => {",
                "        form.classList.toggle('is-active', form.dataset.authForm === name);",
                "      });",
                "    };",
                "",
                "    modal.querySelectorAll('[data-auth-tab]').forEach((button) => {",
                "      button.addEventListener('click', () => showTab(button.dataset.authTab));",
                "    });",
                "    modal.querySelector('.auth-close').addEventListener('click', () => modal.classList.remove('is-open'));",
                "    modal.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('is-open'); });",
                "",
                "    modal.querySelector('[data-auth-form=\"login\"]').addEventListener('submit', (event) => {",
                "      event.preventDefault();",
                "      const form = event.currentTarget;",
                "      const account = form.account.value.trim();",
                "      const password = form.password.value;",
                "      const users = readUsers();",
                "      const error = modal.querySelector('[data-auth-error=\"login\"]');",
                "      if (!users[account] || users[account].password !== password) {",
                "        error.textContent = 'Invalid account or password.';",
                "        return;",
                "      }",
                "      error.textContent = '';",
                "      setSession(account);",
                "      goDashboard();",
                "    });",
                "",
                "    modal.querySelector('[data-auth-form=\"register\"]').addEventListener('submit', (event) => {",
                "      event.preventDefault();",
                "      const form = event.currentTarget;",
                "      const nickname = form.nickname.value.trim();",
                "      const account = form.account.value.trim();",
                "      const password = form.password.value;",
                "      const users = readUsers();",
                "      const error = modal.querySelector('[data-auth-error=\"register\"]');",
                "      if (!nickname || !account || !password) {",
                "        error.textContent = 'Please fill in all fields.';",
                "        return;",
                "      }",
                "      if (users[account]) {",
                "        error.textContent = 'This account already exists in this browser.';",
                "        return;",
                "      }",
                "      users[account] = {",
                "        nickname,",
                "        account,",
                "        password,",
                "        role: 'basic',",
                "        roleLabel: 'Basic member',",
                "        createdAt: new Date().toISOString(),",
                "      };",
                "      writeUsers(users);",
                "      setSession(account);",
                "      goDashboard();",
                "    });",
                "",
                "    return modal;",
                "  }",
                "",
                "  function openAuth(defaultTab = 'login') {",
                "    if (currentUser()) { goDashboard(); return; }",
                "    const modal = ensureModal();",
                "    modal.classList.add('is-open');",
                "    modal.querySelector(`[data-auth-tab=\"${defaultTab}\"]`)?.click();",
                "  }",
                "",
                "  function effectiveRole(user) {",
                "    if (user?.role === 'advanced' && user.advancedExpiresAt) {",
                "      const expiresAt = new Date(user.advancedExpiresAt).getTime();",
                "      if (!Number.isNaN(expiresAt) && expiresAt <= Date.now()) return 'basic';",
                "    }",
                "    return user?.role || 'basic';",
                "  }",
                "",
                "  window.AIStockAuth = {",
                "    currentUser,",
                "    openAuth,",
                "    logout() { clearSession(); location.href = '/'; },",
                "    isBasic(user = currentUser()) { return !user || effectiveRole(user) === 'basic'; },",
                "    hasAdvanced(user = currentUser()) { return !!user && ['advanced', 'admin'].includes(effectiveRole(user)); },",
                "    hasAdmin(user = currentUser()) { return !!user && user.role === 'admin'; },",
                "  };",
                "",
                "  document.addEventListener('DOMContentLoaded', () => {",
                "    document.querySelectorAll('.login, [data-auth-open]').forEach((link) => {",
                "      link.addEventListener('click', (event) => {",
                "        event.preventDefault();",
                "        openAuth('login');",
                "      });",
                "    });",
                "    if (new URLSearchParams(location.search).get('auth') === 'login') openAuth('login');",
                "  });",
                "})();",
                "",
            ]
        ),
        encoding="utf-8",
    )


def sanitize_public_text() -> None:
    replacements = {
        "python scripts/update_data.py --workers 12": "內部資料更新流程",
        "python scripts/build_site_data.py": "內部網站資料產生流程",
    }
    for relative_path in ["dashboard-simple.js", "dashboard-header.js"]:
        path = DIST / relative_path
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8")
        for old, new in replacements.items():
            content = content.replace(old, new)
        path.write_text(content, encoding="utf-8")


def write_public_auth_script() -> None:
    (DIST / "site-auth.js").write_text(
        r"""(function () {
  const USERS_KEY = "aiStockLabUsers";
  const SESSION_KEY = "aiStockLabSession";
  const USER_CACHE_KEY = "aiStockLabPublicUser";

  function getStored(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }

  function setStored(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  function removeStored(key) {
    try { localStorage.removeItem(key); } catch (_) {}
  }

  function readJson(key, fallback) {
    try { return JSON.parse(getStored(key) || ""); } catch (_) { return fallback; }
  }

  function rememberUser(user) {
    if (!user) return;
    const safeUser = {
      account: user.account,
      nickname: user.nickname || user.account,
      role: user.role || "basic",
      roleLabel: user.roleLabel || "Basic member",
      createdAt: user.createdAt || null,
    };
    const users = readJson(USERS_KEY, {});
    users[safeUser.account] = safeUser;
    setStored(USERS_KEY, JSON.stringify(users));
    setStored(SESSION_KEY, safeUser.account);
    setStored(USER_CACHE_KEY, JSON.stringify(safeUser));
  }

  function clearUser() {
    removeStored(SESSION_KEY);
    removeStored(USER_CACHE_KEY);
  }

  function currentUser() {
    return readJson(USER_CACHE_KEY, null);
  }

  async function requestAuth(path, body) {
    const response = await fetch(path, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body || {}),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || "Request failed.");
    return payload;
  }

  function basePath() {
    return location.pathname.includes("/about/")
      || location.pathname.includes("/terms/")
      || location.pathname.includes("/membership/") ? "../" : "";
  }

  function goDashboard() {
    location.href = `${basePath()}market-overview/`;
  }

  function ensureModal() {
    let modal = document.querySelector("[data-auth-modal]");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "auth-modal";
    modal.dataset.authModal = "true";
    modal.innerHTML = `
      <div class="auth-panel" role="dialog" aria-modal="true" aria-label="Account">
        <button class="auth-close" type="button" aria-label="Close">x</button>
        <div class="auth-tabs">
          <button type="button" class="is-active" data-auth-tab="login">Login</button>
          <button type="button" data-auth-tab="register">Register</button>
        </div>

        <form class="auth-form is-active" data-auth-form="login">
          <h2>Login</h2>
          <p>Use your test account to enter the public dashboard.</p>
          <label>Account<input name="account" autocomplete="username" required /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" required /></label>
          <strong class="auth-error" data-auth-error="login"></strong>
          <button class="auth-submit" type="submit">Login</button>
        </form>

        <form class="auth-form" data-auth-form="register">
          <h2>Register</h2>
          <p>Your account is stored on this site's local backend.</p>
          <label>Name<input name="nickname" autocomplete="nickname" required /></label>
          <label>Account<input name="account" autocomplete="username" required /></label>
          <label>Password<input name="password" type="password" autocomplete="new-password" minlength="6" required /></label>
          <strong class="auth-error" data-auth-error="register"></strong>
          <button class="auth-submit" type="submit">Register</button>
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
      const error = modal.querySelector('[data-auth-error="login"]');
      error.textContent = "";
      try {
        const payload = await requestAuth("/api/auth/login", {
          account: form.account.value.trim(),
          password: form.password.value,
        });
        rememberUser(payload.user);
        form.password.value = "";
        goDashboard();
      } catch (authError) {
        error.textContent = authError.message || "Login failed.";
      }
    });

    modal.querySelector('[data-auth-form="register"]').addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const error = modal.querySelector('[data-auth-error="register"]');
      error.textContent = "";
      try {
        const payload = await requestAuth("/api/auth/register", {
          nickname: form.nickname.value.trim(),
          account: form.account.value.trim(),
          password: form.password.value,
        });
        rememberUser(payload.user);
        form.password.value = "";
        goDashboard();
      } catch (authError) {
        error.textContent = authError.message || "Registration failed.";
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
    async logout() {
      try {
        await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
      } catch (_) {}
      clearUser();
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
""",
        encoding="utf-8",
    )


def write_public_dashboard_header_script() -> None:
    (DIST / "dashboard-header.js").write_text(
        r"""(function () {
  const navItems = [
    { key: "market-overview", label: "\u5e02\u5834\u7e3d\u89bd", path: "market-overview/" },
    { key: "daily-screening", label: "\u6bcf\u65e5\u7be9\u9078", path: "daily-screening/" },
    { key: "stock-analysis", label: "\u500b\u80a1\u5206\u6790", path: "stock-analysis/" },
    { key: "quant-indicators", label: "\u91cf\u5316\u6307\u6a19", path: "quant-indicators/", minRole: "advanced" },
    { key: "model-library", label: "\u6a21\u578b\u5eab", path: "model-library/", minRole: "admin" },
    { key: "intelligence-center", label: "\u60c5\u5831\u4e2d\u5fc3", path: "intelligence-center/" },
    { key: "member-admin", label: "\u7ba1\u7406\u54e1", path: "member-admin/", minRole: "admin" }
  ];
  const roleLevel = { basic: 1, advanced: 2, admin: 3 };
  const usersKey = "aiStockLabUsers";
  const sessionKey = "aiStockLabSession";
  const userCacheKey = "aiStockLabPublicUser";

  function setStored(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  function removeStored(key) {
    try { localStorage.removeItem(key); } catch (_) {}
  }

  function rememberUser(user) {
    if (!user) return;
    const safeUser = {
      account: user.account,
      nickname: user.nickname || user.account,
      role: user.role || "basic",
      roleLabel: user.roleLabel || "Basic member",
      createdAt: user.createdAt || null,
    };
    let users = {};
    try { users = JSON.parse(localStorage.getItem(usersKey) || "{}"); } catch (_) {}
    users[safeUser.account] = safeUser;
    setStored(usersKey, JSON.stringify(users));
    setStored(sessionKey, safeUser.account);
    setStored(userCacheKey, JSON.stringify(safeUser));
  }

  function normalizeBase(base) {
    if (!base) return "";
    return base.endsWith("/") ? base : `${base}/`;
  }

  function detectActive() {
    const path = window.location.pathname.replace(/\/+$/, "");
    if (path.includes("/market-overview")) return "market-overview";
    if (path.includes("/intelligence-center")) return "intelligence-center";
    if (path.includes("/daily-screening")) return "daily-screening";
    if (path.includes("/stock-analysis")) return "stock-analysis";
    if (path.includes("/quant-indicators")) return "quant-indicators";
    if (path.includes("/model-library")) return "model-library";
    if (path.includes("/member-admin")) return "member-admin";
    return "home";
  }

  function effectiveRole(user) {
    if (user?.role === "advanced" && user.advancedExpiresAt) {
      const expiresAt = new Date(user.advancedExpiresAt).getTime();
      if (!Number.isNaN(expiresAt) && expiresAt <= Date.now()) return "basic";
    }
    return user?.role || "basic";
  }

  function canAccess(item, user) {
    if (!item.minRole) return true;
    return (roleLevel[effectiveRole(user)] || 0) >= roleLevel[item.minRole];
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function remainingDaysLabel(user, role) {
    if (role !== "advanced") return "\u7121\u671f\u9650";
    const expiresAt = new Date(user.advancedExpiresAt).getTime();
    if (Number.isNaN(expiresAt)) return "\u672a\u8a2d\u5b9a";
    const days = Math.max(0, Math.ceil((expiresAt - Date.now()) / 86400000));
    return `\u5269\u9918 ${days} \u5929`;
  }

  function logoSvg() {
    return `
      <svg class="dashboard-brand-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M10 33 18 17l11 10 9-15" stroke="#60a5fa" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="10" cy="33" r="4.5" fill="#2563eb"/>
        <circle cx="18" cy="17" r="4.5" fill="#60a5fa"/>
        <circle cx="29" cy="27" r="4.5" fill="#8bb8ff"/>
        <circle cx="38" cy="12" r="4.5" fill="#60a5fa"/>
        <path d="M30 27 39 36" stroke="#8bb8ff" stroke-width="4.2" stroke-linecap="round"/>
      </svg>`;
  }

  function userSvg() {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8.2" r="4.2" fill="currentColor"/>
        <path d="M4.3 21c1.18-5.05 4.34-7.6 7.7-7.6s6.52 2.55 7.7 7.6" fill="currentColor"/>
      </svg>`;
  }

  async function fetchCurrentUser() {
    const response = await fetch("/api/auth/me", { credentials: "same-origin", cache: "no-store" });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) return null;
    rememberUser(payload.user);
    return payload.user;
  }

  async function renderHeader(mount) {
    const base = normalizeBase(mount.dataset.base || "");
    const active = mount.dataset.active || detectActive();
    const user = await fetchCurrentUser();

    if (!user) {
      removeStored(sessionKey);
      removeStored(userCacheKey);
      window.location.replace(`${base}?auth=login`);
      return;
    }

    const activeItem = navItems.find((item) => item.key === active);
    if (activeItem && !canAccess(activeItem, user)) {
      window.location.replace(`${base}market-overview/`);
      return;
    }

    if (mount.dataset.minRole && !canAccess({ minRole: mount.dataset.minRole }, user)) {
      window.location.replace(`${base}market-overview/`);
      return;
    }

    const links = navItems.filter((item) => canAccess(item, user)).map((item) => {
      const href = `${base}${item.path}`;
      const activeClass = item.key === active ? " is-active" : "";
      return `<a class="${activeClass.trim()}" href="${href}" data-nav-key="${item.key}">${item.label}</a>`;
    }).join("");
    const displayName = user.nickname || user.account || "\u4f7f\u7528\u8005";
    const role = effectiveRole(user);
    const roleLabel = (user.role === role ? user.roleLabel : null) || (role === "admin" ? "\u7ba1\u7406\u54e1" : role === "advanced" ? "\u9032\u968e\u6703\u54e1" : "\u57fa\u672c\u6703\u54e1");
    const remainingLabel = remainingDaysLabel(user, role);
    const safeDisplayName = escapeHtml(displayName);
    const safeRoleLabel = escapeHtml(roleLabel);
    const safeRemainingLabel = escapeHtml(remainingLabel);

    mount.outerHTML = `
      <header class="dashboard-header">
        <div class="dashboard-brand" aria-label="AI Stock Lab">
          ${logoSvg()}
          <span>AI Stock Lab</span>
        </div>
        <nav class="dashboard-nav" aria-label="\u529f\u80fd\u5c0e\u89bd">
          ${links}
        </nav>
        <div class="dashboard-actions">
          <button class="dashboard-user-button" type="button" aria-label="\u6703\u54e1\u9078\u55ae\uff1a${safeDisplayName}\uff0c${safeRoleLabel}\uff0c${safeRemainingLabel}">
            <span class="dashboard-user-avatar">${userSvg()}</span>
            <span class="dashboard-user-summary">
              <strong class="dashboard-user-name">${safeDisplayName}</strong>
              <span class="dashboard-user-meta">
                <span>${safeRoleLabel}</span>
                <span>${safeRemainingLabel}</span>
              </span>
            </span>
          </button>
          <div class="dashboard-user-menu" aria-hidden="true">
            <strong>${safeDisplayName}</strong>
            <span>${safeRoleLabel} \u00b7 ${safeRemainingLabel}</span>
            <a class="dashboard-user-menu-link" href="${base}">\u9996\u9801</a>
            <button type="button" data-dashboard-logout>\u767b\u51fa</button>
          </div>
        </div>
      </header>`;

    const header = document.querySelector(".dashboard-header");
    const userMenu = header?.querySelector(".dashboard-user-menu");
    header?.querySelector(".dashboard-user-button")?.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-user-menu-open");
      userMenu?.setAttribute("aria-hidden", String(!isOpen));
    });
    header?.querySelector("[data-dashboard-logout]")?.addEventListener("click", async () => {
      try { await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" }); } catch (_) {}
      removeStored(sessionKey);
      removeStored(userCacheKey);
      window.location.href = base || "/";
    });
  }

  document.querySelectorAll("[data-dashboard-header]").forEach((mount) => {
    renderHeader(mount).catch(() => window.location.replace(`${normalizeBase(mount.dataset.base || "")}?auth=login`));
  });
})();
""",
        encoding="utf-8",
    )


def main() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)

    for file_name in ROOT_FILES:
        copy_file(ROOT / file_name, DIST / file_name)

    for dir_name in PUBLIC_DIRS:
        copy_tree(ROOT / dir_name, DIST / dir_name)

    data_dist = DIST / "data"
    for file_name in DATA_FILES:
        copy_file(ROOT / "data" / file_name, data_dist / file_name)

    copy_tree(ROOT / "data" / "history", data_dist / "history")

    write_deploy_metadata()
    write_public_auth_script()
    sanitize_public_text()
    write_public_dashboard_header_script()

    copied_files = sum(1 for path in DIST.rglob("*") if path.is_file())
    copied_bytes = sum(path.stat().st_size for path in DIST.rglob("*") if path.is_file())
    print(f"Built {DIST}")
    print(f"Files: {copied_files:,}")
    print(f"Size: {copied_bytes / 1024 / 1024:.1f} MB")
    print("Upload only public-dist to your static hosting provider.")


if __name__ == "__main__":
    main()
