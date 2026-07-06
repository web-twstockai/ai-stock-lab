const ADMIN_SESSION_COOKIE = "ai_stock_lab_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 14;

export const TASKS = {
  "daily-market": "每日行情資料",
  "evening-batch": "每日盤後批次",
  intelligence: "情報中心",
  institutional: "法人機器人",
  macro: "總經資料",
  "macro-due-check": "總經公布追蹤",
  "macro-watch-europe": "總經即時追蹤：歐洲時段",
  "macro-watch-us": "總經即時追蹤：美國時段",
  "quant-robots": "量化機器人",
  "short-margin": "融資融券比率",
};

export const DEDICATED_WORKFLOWS = {
  "daily-market": "daily-market-1830.yml",
  institutional: "institutional-robot-1830.yml",
  "quant-robots": "quant-robots-1840.yml",
  "short-margin": "short-margin-daily.yml",
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

function textEncoder() {
  return new TextEncoder();
}

function base64UrlEncode(value) {
  const bytes = value instanceof Uint8Array ? value : textEncoder().encode(String(value));
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecode(value) {
  const normalized = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    textEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function signPayload(payload, secret) {
  const key = await hmacKey(secret);
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, textEncoder().encode(payload)));
}

function timingSafeEqual(a, b) {
  const left = textEncoder().encode(String(a || ""));
  const right = textEncoder().encode(String(b || ""));
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index += 1) diff |= left[index] ^ right[index];
  return diff === 0;
}

function cookieValue(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

export function adminProfile(env) {
  const account = env.ADMIN_ACCOUNT || "admin";
  return {
    id: "local-admin",
    account,
    nickname: env.ADMIN_NICKNAME || "系統管理員",
    role: "admin",
    status: "active",
  };
}

export function adminPasswordConfigured(env) {
  return !!env.ADMIN_PASSWORD;
}

function sessionSecret(env) {
  return env.ADMIN_SESSION_SECRET || env.ADMIN_PASSWORD || env.GITHUB_DISPATCH_TOKEN || "";
}

export function sessionCookieHeader(value, maxAge = SESSION_TTL_SECONDS) {
  const secure = "Secure";
  return `${ADMIN_SESSION_COOKIE}=${encodeURIComponent(value)}; Path=/; HttpOnly; ${secure}; SameSite=Lax; Max-Age=${maxAge}`;
}

export function clearSessionCookieHeader() {
  return sessionCookieHeader("", 0);
}

export async function createAdminSession(env) {
  const profile = adminProfile(env);
  const payload = {
    account: profile.account,
    nickname: profile.nickname,
    role: profile.role,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = base64UrlEncode(await signPayload(encodedPayload, sessionSecret(env)));
  return `${encodedPayload}.${signature}`;
}

export async function readAdminSession(request, env) {
  const secret = sessionSecret(env);
  if (!secret) return null;
  const token = cookieValue(request, ADMIN_SESSION_COOKIE);
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;
  const expected = base64UrlEncode(await signPayload(encodedPayload, secret));
  if (!timingSafeEqual(signature, expected)) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(encodedPayload)));
    if (!payload?.exp || payload.exp <= Math.floor(Date.now() / 1000)) return null;
    if (payload.role !== "admin") return null;
    const profile = adminProfile(env);
    if (payload.account !== profile.account) return null;
    return { token, profile: { ...profile, nickname: payload.nickname || profile.nickname } };
  } catch (_) {
    return null;
  }
}

export function verifyAdminPassword(env, account, password) {
  const expectedAccount = env.ADMIN_ACCOUNT || "admin";
  if (!adminPasswordConfigured(env)) return { ok: false, error: "Missing ADMIN_PASSWORD in Cloudflare Pages environment variables." };
  if (!timingSafeEqual(account, expectedAccount) || !timingSafeEqual(password, env.ADMIN_PASSWORD)) {
    return { ok: false, error: "帳號或密碼錯誤。" };
  }
  return { ok: true };
}

export function githubConfig(env) {
  return {
    token: env.GITHUB_DISPATCH_TOKEN || env.GITHUB_TOKEN || "",
    repo: env.GITHUB_REPO || "web-twstockai/ai-stock-lab",
    workflow: env.GITHUB_WORKFLOW || "admin-update.yml",
    ref: env.GITHUB_REF || "main",
  };
}

export function workflowForTask(env, task) {
  const config = githubConfig(env);
  const workflow = DEDICATED_WORKFLOWS[task];
  return {
    workflow: workflow || config.workflow,
    includeTaskInput: !workflow,
  };
}

export function workflowsForStatus(env) {
  const config = githubConfig(env);
  return [...new Set([config.workflow, ...Object.values(DEDICATED_WORKFLOWS)])];
}

export async function requireAdmin(request, env) {
  if (!adminPasswordConfigured(env)) {
    return { error: json({ ok: false, error: "Missing ADMIN_PASSWORD in Cloudflare Pages environment variables." }, 503) };
  }
  const session = await readAdminSession(request, env);
  if (!session) return { error: json({ ok: false, error: "Missing or invalid admin session." }, 401) };
  return { token: session.token, user: session.profile, profile: session.profile };
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
