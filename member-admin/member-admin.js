(function () {
  const SUPABASE_URL = "https://xtimhfolzbeczngvzlxi.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0aW1oZm9semJlY3puZ3Z6bHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNjY5NzEsImV4cCI6MjA5NTk0Mjk3MX0.ioz4NIVRJ8evKG3u0U-cOjzfnsY0HaotQUfSHCan4oI";
  const SUPABASE_SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

  const state = {
    users: [],
    query: "",
  };
  let clientPromise = null;

  const $ = (selector) => document.querySelector(selector);

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

  function toast(message) {
    const node = $("[data-toast]");
    if (!node) return;
    node.textContent = message;
    node.classList.add("is-visible");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => node.classList.remove("is-visible"), 3200);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);
  }

  function formatTime(value) {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "-";
    return date.toLocaleString("zh-TW", { hour12: false });
  }

  function roleLabel(role) {
    if (role === "admin") return "管理員";
    if (role === "advanced") return "進階會員";
    return "基礎會員";
  }

  function filteredUsers() {
    const query = state.query.trim().toLowerCase();
    if (!query) return state.users;
    return state.users.filter((user) =>
      [user.account, user.nickname, user.role, user.status].some((value) => String(value || "").toLowerCase().includes(query))
    );
  }

  function render() {
    const users = filteredUsers();
    const body = $("[data-users]");
    const count = $("[data-count]");
    if (count) count.textContent = `${users.length} / ${state.users.length} users`;
    if (!body) return;

    body.innerHTML = users.map((user) => `
      <tr>
        <td><strong>${escapeHtml(user.account)}</strong><br><small>${escapeHtml(user.status || "active")}</small></td>
        <td>${escapeHtml(user.nickname || "-")}</td>
        <td>${escapeHtml(roleLabel(user.role))}</td>
        <td>${escapeHtml(formatTime(user.created_at))}</td>
        <td>${escapeHtml(formatTime(user.last_login_at))}</td>
        <td>
          <div class="member-admin-row-actions">
            <select class="member-admin-select" data-role="${escapeHtml(user.id)}">
              <option value="basic"${user.role === "basic" ? " selected" : ""}>基礎會員</option>
              <option value="advanced"${user.role === "advanced" ? " selected" : ""}>進階會員</option>
              <option value="admin"${user.role === "admin" ? " selected" : ""}>管理員</option>
            </select>
            <button class="member-admin-danger" type="button" data-status="${escapeHtml(user.id)}" data-next-status="${user.status === "disabled" ? "active" : "disabled"}">
              ${user.status === "disabled" ? "啟用" : "停用"}
            </button>
          </div>
        </td>
      </tr>
    `).join("") || '<tr><td colspan="6">No users.</td></tr>';
  }

  async function loadUsers() {
    const supabase = await supabaseClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("id, account, nickname, role, status, created_at, updated_at, last_login_at")
      .order("created_at", { ascending: false });
    if (error) throw error;
    state.users = data || [];
    render();
  }

  async function updateProfile(id, patch, message) {
    const supabase = await supabaseClient();
    const { error } = await supabase.from("profiles").update(patch).eq("id", id);
    if (error) throw error;
    toast(message);
    await loadUsers();
  }

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-role]");
    if (!select) return;
    updateProfile(select.dataset.role, { role: select.value }, "角色已更新").catch((error) => toast(error.message));
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-refresh]")) {
      loadUsers().catch((error) => toast(error.message));
      return;
    }
    const statusButton = event.target.closest("[data-status]");
    if (statusButton) {
      const nextStatus = statusButton.dataset.nextStatus;
      updateProfile(statusButton.dataset.status, { status: nextStatus }, nextStatus === "active" ? "會員已啟用" : "會員已停用")
        .catch((error) => toast(error.message));
    }
  });

  document.addEventListener("input", (event) => {
    if (!event.target.matches("[data-search]")) return;
    state.query = event.target.value;
    render();
  });

  document.addEventListener("DOMContentLoaded", () => {
    loadUsers().catch((error) => toast(error.message));
  });
})();
