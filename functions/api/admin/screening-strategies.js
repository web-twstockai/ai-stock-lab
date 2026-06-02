import { githubConfig, githubFetch, json, requireAdmin } from "./_shared.js";

const STRATEGY_FILE_PATH = "data/daily-screening-strategies.json";
const TIERS = ["basic", "advanced", "admin"];
const githubContentPath = () => STRATEGY_FILE_PATH.split("/").map(encodeURIComponent).join("/");

function defaultConfig() {
  return {
    updatedAt: null,
    strategyGroups: {
      basic: [],
      advanced: [],
      admin: [],
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
  const response = await githubFetch(
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
    const nextConfig = moveStrategy(config, payload.strategyKey, payload.tier);
    const github = githubConfig(env);
    const response = await githubFetch(
      env,
      `/repos/${github.repo}/contents/${githubContentPath()}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Update screening strategy access for ${payload.strategyKey}`,
          content: encodeBase64Utf8(JSON.stringify(nextConfig, null, 2) + "\n"),
          sha,
          branch: github.ref,
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`GitHub write failed: HTTP ${response.status}${detail ? ` - ${detail}` : ""}`);
    }

    return json({ ok: true, config: nextConfig });
  } catch (error) {
    return json({ ok: false, error: error.message || "Cannot update screening strategy config." }, 500);
  }
}
