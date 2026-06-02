# Public Deployment

## Cloudflare Pages

Cloudflare Pages deploys the public site from GitHub repo `web-twstockai/ai-stock-lab`.

Build settings:

```text
Build command: python scripts/build_public_dist.py
Build output directory: public-dist
Root directory: leave blank
```

`public-dist/` is generated during deployment and should not be committed.

## Public Package

The public package includes the frontend pages, public data files, login/register UI, and the admin page shell.

The admin page is allowed to exist in the public package, but access is controlled by Supabase:

- The dashboard navigation only shows the admin entry for `role = 'admin'`.
- The admin page requires a logged-in admin profile.
- Member data reads and writes are protected by Supabase RLS.
- The frontend only uses `SUPABASE_ANON_KEY`.
- Never expose the Supabase `service_role key`.

Public package may include:

- home page
- market overview
- daily screening
- stock analysis
- quant indicators
- model library
- intelligence center
- admin dashboard
- public data files under `data/`

Public package must not include:

- backend service code
- crawler scripts
- private API keys
- Supabase `service_role key`
- local databases
- backups or logs

## Supabase

Frontend accounts are stored in Supabase:

- Supabase Auth stores login credentials.
- `public.profiles` stores account, nickname, role, and status.

The frontend does not ask users for email. It converts the account name into an internal Supabase email identifier, for example:

```text
admin -> admin@users.ai-stock-lab.local
```

Because this is not a real user email, Supabase email confirmation should be disabled.

## Data Updates

Codex automations can update the repo's public data files. Admin users can also trigger updates from the admin dashboard.

The admin dashboard calls Cloudflare Pages Functions:

```text
/api/admin/status
/api/admin/run
```

These Functions verify the current Supabase user is `role = 'admin'`, then trigger GitHub Actions.

Cloudflare Pages environment variables required for admin-triggered updates:

```text
GITHUB_DISPATCH_TOKEN=<GitHub token that can dispatch workflows>
GITHUB_REPO=web-twstockai/ai-stock-lab
GITHUB_WORKFLOW=admin-update.yml
GITHUB_REF=main
```

Only `GITHUB_DISPATCH_TOKEN` is required if the defaults above are unchanged.

GitHub Actions runs the selected Python update script, commits changed files under `data/`, and pushes back to `main`. Cloudflare Pages then rebuilds the public package by running:

```powershell
python scripts/build_public_dist.py
```
