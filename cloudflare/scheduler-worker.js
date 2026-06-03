const WORKFLOW_FILE = "admin-update.yml";
const DEFAULT_OWNER = "web-twstockai";
const DEFAULT_REPO = "ai-stock-lab";

const CRON_TASKS = {
  // Asia/Taipei 18:30, Monday-Friday.
  "30 10 * * 1-5": "evening-batch",
  // Asia/Taipei 22:40, Monday-Friday.
  "40 14 * * 1-5": "short-margin",
};

export default {
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(dispatchScheduledTask(controller.cron, env));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const task = url.searchParams.get("task");
    const secret = url.searchParams.get("secret");

    if (!env.CRON_TEST_SECRET || secret !== env.CRON_TEST_SECRET) {
      return new Response("Not found", { status: 404 });
    }

    if (!task) {
      return new Response("Missing task", { status: 400 });
    }

    await dispatchWorkflow(task, env, "cloudflare-cron-test");
    return new Response(`Dispatched ${task}`, { status: 200 });
  },
};

async function dispatchScheduledTask(cron, env) {
  const task = CRON_TASKS[cron];
  if (!task) {
    throw new Error(`No task mapped for cron: ${cron}`);
  }

  await dispatchWorkflow(task, env, `cloudflare-cron:${cron}`);
}

async function dispatchWorkflow(task, env, operator) {
  const owner = env.GITHUB_OWNER || DEFAULT_OWNER;
  const repo = env.GITHUB_REPO || DEFAULT_REPO;
  const workflow = env.GITHUB_WORKFLOW || WORKFLOW_FILE;

  if (!env.GITHUB_DISPATCH_TOKEN) {
    throw new Error("Missing GITHUB_DISPATCH_TOKEN secret");
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GITHUB_DISPATCH_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "ai-stock-lab-cloudflare-cron",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        ref: "main",
        inputs: {
          task,
          operator,
        },
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub dispatch failed: HTTP ${response.status} ${detail}`);
  }
}
