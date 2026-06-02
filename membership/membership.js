(function () {
  const REQUESTS_KEY = "aiStockLabAdvancedRequests";

  function readRequests() {
    try {
      return JSON.parse(localStorage.getItem(REQUESTS_KEY) || "[]");
    } catch (_) {
      return [];
    }
  }

  function writeRequests(requests) {
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  }

  function toast(message) {
    const node = document.querySelector("[data-application-toast]");
    if (!node) return;
    node.textContent = message;
    node.classList.add("is-visible");
    window.clearTimeout(toast.timer);
    toast.timer = window.setTimeout(() => node.classList.remove("is-visible"), 4200);
  }

  function currentUser() {
    return window.AIStockAuth?.currentUser?.() || null;
  }

  function openAuth(tab) {
    window.AIStockAuth?.openAuth?.(tab);
  }

  function submitAdvancedApplication() {
    const user = currentUser();
    if (!user) {
      toast("請先登入基本會員，再回到會員方案頁提交進階申請。");
      openAuth("login");
      return;
    }

    if (user.role === "admin") {
      toast("管理員已擁有全部權限，不需要提交進階會員申請。");
      return;
    }

    if (user.role === "advanced") {
      toast("你目前已是進階會員，不需要重複提交申請。");
      return;
    }

    const requests = readRequests();
    const existing = requests.find((item) => item.account === user.account && item.status === "pending");
    if (existing) {
      toast("你已送出進階會員申請，目前等待管理員審核。");
      return;
    }

    requests.unshift({
      id: `advanced-${user.account}-${Date.now()}`,
      account: user.account,
      nickname: user.nickname || user.account,
      currentRole: user.role || "basic",
      status: "pending",
      requestedAt: new Date().toISOString(),
      approvedDays: null,
      reviewedAt: null,
      reviewedBy: null,
    });
    writeRequests(requests);
    toast("進階會員申請已送出，待管理員審核後會設定權限開放天數。");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("[data-membership-register]")?.addEventListener("click", () => openAuth("register"));
    document.querySelector("[data-advanced-apply]")?.addEventListener("click", submitAdvancedApplication);
  });
})();
