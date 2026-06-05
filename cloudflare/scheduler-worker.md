# AI Stock Lab Cloudflare Scheduler

This Worker is the primary clock for public data updates. It dispatches GitHub
Actions workflows through `workflow_dispatch`.

## Cron Schedule

Cloudflare Cron uses UTC. Taiwan time is UTC+8.

| Taiwan time | UTC cron | Workflow |
| --- | --- | --- |
| 15:45 Mon-Fri | `45 7 * * 1-5` | `admin-update.yml`, task `macro-watch-europe` |
| 18:30 daily | `30 10 * * *` | `daily-market-1830.yml`, `institutional-robot-1830.yml` |
| 18:40 daily | `40 10 * * *` | `quant-robots-1840.yml` |
| 20:25 Mon-Fri | `25 12 * * 1-5` | `admin-update.yml`, task `macro-watch-us` |
| 22:40 daily | `40 14 * * *` | `short-margin-daily.yml` |

## Required Secrets

Set these Worker secrets in Cloudflare:

```bash
npx wrangler secret put GITHUB_DISPATCH_TOKEN --config cloudflare/wrangler.scheduler.toml
npx wrangler secret put CRON_TEST_SECRET --config cloudflare/wrangler.scheduler.toml
```

`GITHUB_DISPATCH_TOKEN` must be a GitHub token that can dispatch Actions for
`web-twstockai/ai-stock-lab`.

Deploy:

```bash
npx wrangler deploy --config cloudflare/wrangler.scheduler.toml
```

Test manually after deploy:

```text
https://<worker-url>/?task=short-margin&secret=<CRON_TEST_SECRET>
```
