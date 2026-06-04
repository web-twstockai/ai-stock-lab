const DEFAULT_OWNER = "web-twstockai";
const DEFAULT_REPO = "ai-stock-lab";
const DEFAULT_REF = "main";

const CRON_DISPATCHES = {
  // Cloudflare Cron uses UTC. Taiwan time is UTC+8.
  "30 10 * * *": [ // 18:30 Taiwan time, every day. Run both after-market jobs independently.
    { workflow: "daily-market-1830.yml", inputs: {} },
    { workflow: "institutional-robot-1830.yml", inputs: {} },
  ],
  "40 14 * * *": [ // 22:40 Taiwan time, every day.
    { workflow: "short-margin-daily.yml", inputs: {} },
  ],
};

const TEST_TASKS = {
  "daily-market": { workflow: "daily-market-1830.yml", inputs: {} },
  institutional: { workflow: "institutional-robot-1830.yml", inputs: {} },
  "short-margin": { workflow: "short-margin-daily.yml", inputs: {} },
  intelligence: { workflow: "admin-update.yml", inputs: { task: "intelligence" } },
  macro: { workflow: "admin-update.yml", inputs: { task: "macro" } },
};

export default {
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(dispatchScheduledCron(controller.cron, env));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const task = url.searchParams.get("task");
    const secret = url.searchParams.get("secret");

    if (!env.CRON_TEST_SECRET || secret !== env.CRON_TEST_SECRET) {
      return new Response("Not found", { status: 404 });
    }

    const dispatch = TEST_TASKS[task];
    if (!dispatch) {
      return new Response("Unknown task", { status: 400 });
    }

    await dispatchWorkflow(dispatch, env, "cloudflare-cron-test");
    return new Response(`Dispatched ${task}`, { status: 200 });
  },
};

async function dispatchScheduledCron(cron, env) {
  const dispatches = CRON_DISPATCHES[cron];
  if (!dispatches?.length) {
    throw new Error(`No dispatch mapped for cron: ${cron}`);
  }

  await Promise.all(dispatches.map((dispatch) => dispatchWorkflow(dispatch, env, `cloudflare-cron:${cron}`)));
}

async function dispatchWorkflow(dispatch, env, operator) {
  const owner = env.GITHUB_OWNER || DEFAULT_OWNER;
  const repo = env.GITHUB_REPO || DEFAULT_REPO;
  const ref = env.GITHUB_REF || DEFAULT_REF;

  if (!env.GITHUB_DISPATCH_TOKEN) {
    throw new Error("Missing GITHUB_DISPATCH_TOKEN secret");
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${dispatch.workflow}/dispatches`,
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
        ref,
        inputs: {
          ...dispatch.inputs,
          operator,
        },
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub dispatch failed for ${dispatch.workflow}: HTTP ${response.status} ${detail}`);
  }
}
