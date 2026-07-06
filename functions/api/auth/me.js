import { adminPasswordConfigured, json, readAdminSession } from "../admin/_shared.js";

export async function onRequestGet({ request, env }) {
  if (!adminPasswordConfigured(env)) {
    return json({ ok: false, error: "Missing ADMIN_PASSWORD in Cloudflare Pages environment variables." }, 503);
  }

  const session = await readAdminSession(request, env);
  if (!session) return json({ ok: false, error: "Not logged in." }, 401);

  return json({
    ok: true,
    user: session.profile,
    passwordManagedBy: "cloudflare-env",
  });
}
