import { TASKS, githubConfig, githubFetch, json, requireAdmin } from "./_shared.js";

function normalizeRun(run) {
  const status = run.status === "completed"
    ? (run.conclusion === "success" ? "success" : run.conclusion === "failure" ? "failed" : run.conclusion || "completed")
    : (run.status === "in_progress" ? "running" : run.status);
  return {
    id: String(run.id),
    task: run.display_title || "admin-update",
    label: run.name || "Admin data update",
    status,
    createdAt: run.created_at,
    startedAt: run.run_started_at,
    finishedAt: run.updated_at,
    htmlUrl: run.html_url,
  };
}

export async function onRequestGet({ request, env }) {
  const admin = await requireAdmin(request, env);
  if (admin.error) return admin.error;

  const config = githubConfig(env);
  let jobs = [];

  if (config.token) {
    try {
      const response = await githubFetch(
        env,
        `/repos/${config.repo}/actions/workflows/${encodeURIComponent(config.workflow)}/runs?branch=${encodeURIComponent(config.ref)}&per_page=8`,
        { method: "GET" }
      );
      if (response.ok) {
        const payload = await response.json();
        jobs = (payload.workflow_runs || []).map(normalizeRun);
      }
    } catch (_) {
      jobs = [];
    }
  }

  return json({
    ok: true,
    mode: "github-actions",
    user: admin.profile,
    tasks: TASKS,
    jobs,
    logs: {},
    backups: [],
  });
}
