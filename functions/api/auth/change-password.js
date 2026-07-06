import { json, requireAdmin } from "../admin/_shared.js";

export async function onRequestPost({ request, env }) {
  const admin = await requireAdmin(request, env);
  if (admin.error) return admin.error;

  return json({
    ok: false,
    error: "密碼由 Cloudflare Pages 環境變數 ADMIN_PASSWORD 管理。請到 Cloudflare Pages 專案的 Variables and Secrets 修改。",
  }, 501);
}
