import { TASKS, githubConfig, githubFetch, json, requireAdmin } from "./_shared.js";

function parseGitHubError(text) {
  try {
    const payload = JSON.parse(text);
    return payload.message || text;
  } catch (_) {
    return text;
  }
}

function dispatchErrorMessage(status, detail) {
  if (status === 401) {
    return "GitHub Token 無效，請重新建立 GitHub PAT 並更新 Cloudflare 的 GITHUB_DISPATCH_TOKEN。";
  }
  if (status === 403) {
    return "GitHub Token 權限不足，請確認 GITHUB_DISPATCH_TOKEN 對 ai-stock-lab 有 Actions 讀寫權限。";
  }
  if (status === 404) {
    return "找不到 GitHub repo 或 workflow，請確認 GITHUB_REPO、GITHUB_WORKFLOW、GITHUB_REF 設定。";
  }
  return `GitHub dispatch failed: HTTP ${status}${detail ? ` - ${detail}` : ""}`;
}

export async function onRequestPost({ request, env }) {
  const admin = await requireAdmin(request, env);
  if (admin.error) return admin.error;

  let payload;
  try {
    payload = await request.json();
  } catch (_) {
    return json({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const task = String(payload.task || "");
  if (!TASKS[task]) return json({ ok: false, error: "Unknown task." }, 400);

  const config = githubConfig(env);
  try {
    const response = await githubFetch(
      env,
      `/repos/${config.repo}/actions/workflows/${encodeURIComponent(config.workflow)}/dispatches`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref: config.ref,
          inputs: {
            task,
            operator: admin.profile.account || admin.profile.id || "admin",
          },
        }),
      }
    );

    if (response.status !== 204) {
      const text = await response.text();
      const detail = parseGitHubError(text);
      return json({ ok: false, error: dispatchErrorMessage(response.status, detail), detail }, 502);
    }

    return json({
      ok: true,
      job: {
        id: `${task}-${Date.now()}`,
        task,
        label: TASKS[task],
        status: "queued",
        createdAt: new Date().toISOString(),
        operator: admin.profile,
      },
    }, 202);
  } catch (error) {
    return json({ ok: false, error: error.message || "GitHub dispatch failed." }, 500);
  }
}
