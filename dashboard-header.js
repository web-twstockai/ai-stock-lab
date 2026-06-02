(function () {
  const navItems = [
    { key: "market-overview", label: "\u5e02\u5834\u7e3d\u89bd", path: "market-overview/" },
    { key: "daily-screening", label: "\u6bcf\u65e5\u7be9\u9078", path: "daily-screening/" },
    { key: "stock-analysis", label: "\u500b\u80a1\u5206\u6790", path: "stock-analysis/" },
    { key: "quant-indicators", label: "\u91cf\u5316\u6307\u6a19", path: "quant-indicators/", minRole: "advanced" },
    { key: "model-library", label: "\u6a21\u578b\u5eab", path: "model-library/", minRole: "admin" },
    { key: "intelligence-center", label: "\u60c5\u5831\u4e2d\u5fc3", path: "intelligence-center/" },
    { key: "admin", label: "\u7ba1\u7406\u54e1", path: "admin/", minRole: "admin" }
  ];
  const roleLevel = { basic: 1, advanced: 2, admin: 3 };
  const usersKey = "aiStockLabUsers";
  const sessionKey = "aiStockLabSession";

  function getStored(key) {
    try {
      if (window.localStorage) return localStorage.getItem(key);
    } catch (_) {}
    const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function removeStored(key) {
    try {
      if (window.localStorage) localStorage.removeItem(key);
    } catch (_) {}
    document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
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
    if (path.includes("/admin")) return "admin";
    return "home";
  }

  function users() {
    try {
      return JSON.parse(getStored(usersKey) || "{}");
    } catch (_) {
      return {};
    }
  }

  function currentUser() {
    const account = getStored(sessionKey);
    return account ? users()[account] || null : null;
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

  function renderHeader(mount) {
    const base = normalizeBase(mount.dataset.base || "");
    const active = mount.dataset.active || detectActive();
    const user = currentUser();

    if (!user) {
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
    const roleLabel = (user.role === role ? user.roleLabel : null) || (role === "admin" ? "\u7ba1\u7406\u54e1" : role === "advanced" ? "\u9032\u968e\u6703\u54e1" : "\u57fa\u790e\u6703\u54e1");
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
    header?.querySelector("[data-dashboard-logout]")?.addEventListener("click", () => {
      removeStored(sessionKey);
      window.location.href = base || "/";
    });
  }

  document.querySelectorAll("[data-dashboard-header]").forEach(renderHeader);
})();
