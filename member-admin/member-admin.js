(function () {
  const state = {
    users: [],
    query: "",
  };

  const $ = (selector) => document.querySelector(selector);

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

  async function requestJson(path, options = {}) {
    const response = await fetch(path, {
      credentials: "same-origin",
      cache: "no-store",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || "Request failed.");
    return payload;
  }

  function roleLabel(role) {
    if (role === "admin") return "Admin";
    if (role === "advanced") return "Advanced member";
    return "Basic member";
  }

  function filteredUsers() {
    const query = state.query.trim().toLowerCase();
    if (!query) return state.users;
    return state.users.filter((user) =>
      [user.account, user.nickname, user.role].some((value) => String(value || "").toLowerCase().includes(query))
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
        <td><strong>${escapeHtml(user.account)}</strong></td>
        <td>${escapeHtml(user.nickname || "-")}</td>
        <td>${escapeHtml(roleLabel(user.role))}</td>
        <td>${escapeHtml(formatTime(user.created_at || user.createdAt))}</td>
        <td>${escapeHtml(formatTime(user.last_login_at || user.lastLoginAt))}</td>
        <td>
          <div class="member-admin-row-actions">
            <select class="member-admin-select" data-role="${escapeHtml(user.account)}">
              <option value="basic"${user.role === "basic" ? " selected" : ""}>Basic</option>
              <option value="advanced"${user.role === "advanced" ? " selected" : ""}>Advanced</option>
              <option value="admin"${user.role === "admin" ? " selected" : ""}>Admin</option>
            </select>
            <button class="member-admin-danger" type="button" data-delete="${escapeHtml(user.account)}">刪除</button>
          </div>
        </td>
      </tr>
    `).join("") || '<tr><td colspan="6">No users.</td></tr>';
  }

  async function loadUsers() {
    const payload = await requestJson("/api/admin/users");
    state.users = payload.users || [];
    render();
  }

  async function setRole(account, role) {
    await requestJson("/api/admin/users/role", {
      method: "POST",
      body: JSON.stringify({ account, role }),
    });
    toast("角色已更新");
    await loadUsers();
  }

  async function deleteUser(account) {
    if (!window.confirm(`確定刪除 ${account}？`)) return;
    await requestJson("/api/admin/users/delete", {
      method: "POST",
      body: JSON.stringify({ account }),
    });
    toast("會員已刪除");
    await loadUsers();
  }

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-role]");
    if (!select) return;
    setRole(select.dataset.role, select.value).catch((error) => toast(error.message));
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-refresh]")) {
      loadUsers().catch((error) => toast(error.message));
      return;
    }
    const deleteButton = event.target.closest("[data-delete]");
    if (deleteButton) deleteUser(deleteButton.dataset.delete).catch((error) => toast(error.message));
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
