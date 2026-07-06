import { createAdminSession, json, sessionCookieHeader, verifyAdminPassword } from "../admin/_shared.js";

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch (_) {
    return json({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const account = String(payload.account || "").trim();
  const password = String(payload.password || "");
  const verified = verifyAdminPassword(env, account, password);
  if (!verified.ok) return json({ ok: false, error: verified.error }, verified.error?.startsWith("Missing") ? 503 : 401);

  const session = await createAdminSession(env);
  const response = json({ ok: true, user: { account, nickname: env.ADMIN_NICKNAME || "系統管理員", role: "admin" } });
  response.headers.append("Set-Cookie", sessionCookieHeader(session));
  return response;
}
