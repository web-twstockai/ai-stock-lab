const DEFAULT_SUPABASE_URL = "https://xtimhfolzbeczngvzlxi.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0aW1oZm9semJlY3puZ3Z6bHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNjY5NzEsImV4cCI6MjA5NTk0Mjk3MX0.ioz4NIVRJ8evKG3u0U-cOjzfnsY0HaotQUfSHCan4oI";

export const TASKS = {
  "daily-market": "每日行情資料",
  "evening-batch": "每日盤後批次",
  intelligence: "情報中心",
  institutional: "法人機器人",
  macro: "總經資料",
  "macro-due-check": "總經公布追蹤",
  "short-margin": "融資融券比率",
};

export function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export function githubConfig(env) {
  return {
    token: env.GITHUB_DISPATCH_TOKEN || env.GITHUB_TOKEN || "",
    repo: env.GITHUB_REPO || "web-twstockai/ai-stock-lab",
    workflow: env.GITHUB_WORKFLOW || "admin-update.yml",
    ref: env.GITHUB_REF || "main",
  };
}

function bearerToken(request) {
  const header = request.headers.get("Authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

async function fetchSupabaseUser(env, token) {
  const supabaseUrl = env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
  const anonKey = env.SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;
  const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: anonKey,
    },
  });
  if (!response.ok) return null;
  return response.json();
}

async function fetchProfile(env, token, userId) {
  const supabaseUrl = env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
  const anonKey = env.SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;
  const url = new URL(`${supabaseUrl}/rest/v1/profiles`);
  url.searchParams.set("id", `eq.${userId}`);
  url.searchParams.set("select", "id,account,nickname,role,status");
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: anonKey,
      Accept: "application/json",
    },
  });
  if (!response.ok) return null;
  const rows = await response.json();
  return Array.isArray(rows) ? rows[0] || null : null;
}

export async function requireAdmin(request, env) {
  const token = bearerToken(request);
  if (!token) return { error: json({ ok: false, error: "Missing admin session." }, 401) };

  const user = await fetchSupabaseUser(env, token);
  if (!user?.id) return { error: json({ ok: false, error: "Invalid admin session." }, 401) };

  const profile = await fetchProfile(env, token, user.id);
  if (!profile || profile.status !== "active" || profile.role !== "admin") {
    return { error: json({ ok: false, error: "Admin role required." }, 403) };
  }

  return { token, user, profile };
}

export async function githubFetch(env, path, options = {}) {
  const config = githubConfig(env);
  if (!config.token) throw new Error("Missing GITHUB_DISPATCH_TOKEN in Cloudflare Pages environment variables.");

  return fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "User-Agent": "ai-stock-lab-admin",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
}
