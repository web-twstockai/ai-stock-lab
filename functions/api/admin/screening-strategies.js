import { githubConfig, json, requireAdmin } from "./_shared.js";

const STRATEGY_FILE_PATH = "data/daily-screening-strategies.json";
const TIERS = ["basic", "advanced", "admin", "warehouse"];
const githubContentPath = () => STRATEGY_FILE_PATH.split("/").map(encodeURIComponent).join("/");

function contentsToken(env) {
  return env.GITHUB_CONTENTS_TOKEN || env.GITHUB_TOKEN || env.GITHUB_DISPATCH_TOKEN || "";
}

async function githubContentsFetch(env, path, options = {}) {
  const token = contentsToken(env);
  if (!token) {
    throw new Error("Missing GITHUB_CONTENTS_TOKEN in Cloudflare Pages environment variables.");
  }

  return fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "ai-stock-lab-admin",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
}

function githubWriteErrorMessage(status, detail) {
  if (status === 403) {
    return `GitHub write failed: HTTP 403 - 請在 Cloudflare Pages 設定 GITHUB_CONTENTS_TOKEN，token 需要對 web-twstockai/ai-stock-lab 有 Contents: Read and write 權限。${detail ? ` (${detail})` : ""}`;
  }
  return `GitHub write failed: HTTP ${status}${detail ? ` - ${detail}` : ""}`;
}

function defaultConfig() {
  return {
    updatedAt: null,
    strategyGroups: {
      basic: [],
      advanced: [],
      admin: [],
      warehouse: [],
    },
  };
}

function normalizeGroups(groups) {
  const output = defaultConfig().strategyGroups;
  const seen = new Set();
  if (!groups || typeof groups !== "object") return output;

  for (const tier of TIERS) {
    const values = Array.isArray(groups[tier]) ? groups[tier] : [];
    for (const value of values) {
      const key = String(value || "").trim();
      if (!key || seen.has(key)) continue;
      output[tier].push(key);
      seen.add(key);
    }
  }
  return output;
}

function decodeBase64Utf8(value) {
  const binary = atob(String(value || "").replace(/\s/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

async function readConfig(env) {
  const config = githubConfig(env);
  const response = await githubContentsFetch(
    env,
    `/repos/${config.repo}/contents/${githubContentPath()}?ref=${encodeURIComponent(config.ref)}`,
    { method: "GET" }
  );

  if (response.status === 404) {
    return { config: defaultConfig(), sha: null };
  }
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub read failed: HTTP ${response.status}${detail ? ` - ${detail}` : ""}`);
  }

  const payload = await response.json();
  const parsed = JSON.parse(decodeBase64Utf8(payload.content || ""));
  return {
    config: {
      ...parsed,
      strategyGroups: normalizeGroups(parsed.strategyGroups),
      updatedAt: parsed.updatedAt || null,
    },
    sha: payload.sha,
  };
}

function moveStrategy(config, strategyKey, targetTier) {
  const key = String(strategyKey || "").trim();
  const tier = String(targetTier || "").trim();
  if (!key) throw new Error("Missing strategy key.");
  if (!TIERS.includes(tier)) throw new Error("Unknown strategy tier.");

  const groups = normalizeGroups(config.strategyGroups);
  const known = new Set(Object.values(groups).flat());
  if (!known.has(key)) throw new Error("Unknown strategy key.");

  for (const groupTier of TIERS) {
    groups[groupTier] = groups[groupTier].filter((item) => item !== key);
  }
  groups[tier].push(key);

  return {
    ...config,
    updatedAt: new Date().toISOString(),
    strategyGroups: groups,
  };
}

function replaceStrategyGroups(config, nextGroups) {
  const currentGroups = normalizeGroups(config.strategyGroups);
  const known = new Set(Object.values(currentGroups).flat());
  const groups = normalizeGroups(nextGroups);
  const submitted = new Set(Object.values(groups).flat());

  for (const key of submitted) {
    if (!known.has(key)) throw new Error(`Unknown strategy key: ${key}`);
  }
  for (const key of known) {
    if (!submitted.has(key)) throw new Error(`Missing strategy key: ${key}`);
  }

  return {
    ...config,
    updatedAt: new Date().toISOString(),
    strategyGroups: groups,
  };
}

export async function onRequestGet({ request, env }) {
  const admin = await requireAdmin(request, env);
  if (admin.error) return admin.error;

  try {
    const { config } = await readConfig(env);
    return json({ ok: true, config });
  } catch (error) {
    return json({ ok: false, error: error.message || "Cannot read screening strategy config." }, 500);
  }
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

  try {
    const { config, sha } = await readConfig(env);
    const nextConfig = payload.strategyGroups
      ? replaceStrategyGroups(config, payload.strategyGroups)
      : moveStrategy(config, payload.strategyKey, payload.tier);
    const github = githubConfig(env);
    const response = await githubContentsFetch(
      env,
      `/repos/${github.repo}/contents/${githubContentPath()}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: payload.strategyGroups
            ? "Update screening strategy access"
            : `Update screening strategy access for ${payload.strategyKey}`,
          content: encodeBase64Utf8(JSON.stringify(nextConfig, null, 2) + "\n"),
          sha,
          branch: github.ref,
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(githubWriteErrorMessage(response.status, detail));
    }

    return json({ ok: true, config: nextConfig });
  } catch (error) {
    return json({ ok: false, error: error.message || "Cannot update screening strategy config." }, 500);
  }
}
