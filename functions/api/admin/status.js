import { TASKS, githubConfig, githubFetch, json, requireAdmin, workflowsForStatus } from "./_shared.js";

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

async function fetchWorkflowRuns(env, config, workflow) {
  const response = await githubFetch(
    env,
    `/repos/${config.repo}/actions/workflows/${encodeURIComponent(workflow)}/runs?branch=${encodeURIComponent(config.ref)}&per_page=5`,
    { method: "GET" }
  );
  if (!response.ok) return [];
  const payload = await response.json();
  return (payload.workflow_runs || []).map(normalizeRun);
}

export async function onRequestGet({ request, env }) {
  const admin = await requireAdmin(request, env);
  if (admin.error) return admin.error;

  const config = githubConfig(env);
  let jobs = [];

  if (config.token) {
    try {
      const results = await Promise.all(
        workflowsForStatus(env).map((workflow) => fetchWorkflowRuns(env, config, workflow).catch(() => []))
      );
      jobs = results
        .flat()
        .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
        .slice(0, 12);
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
