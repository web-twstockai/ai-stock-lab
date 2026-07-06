import { clearSessionCookieHeader, json } from "../admin/_shared.js";

export async function onRequestPost() {
  const response = json({ ok: true });
  response.headers.append("Set-Cookie", clearSessionCookieHeader());
  return response;
}
