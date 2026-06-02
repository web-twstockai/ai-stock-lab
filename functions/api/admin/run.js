import { TASKS, githubConfig, githubFetch, json, requireAdmin } from "./_shared.js";

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
      return json({ ok: false, error: `GitHub dispatch failed: HTTP ${response.status}`, detail: text }, 502);
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
