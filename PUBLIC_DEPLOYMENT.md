# Public Deployment

## 目前部署方式

Cloudflare Pages 從 GitHub repo `web-twstockai/ai-stock-lab` 部署公開前台。

Cloudflare Pages build 設定：

```text
Build command: python scripts/build_public_dist.py
Build output directory: public-dist
Root directory: 留空
```

`public-dist/` 是部署產物，不需要 commit 到 GitHub。

## 公開包只放前台

`scripts/build_public_dist.py` 只會把公開頁面和公開資料複製到 `public-dist/`。

公開包可以包含：

- 首頁與會員登入註冊 UI
- 市場總覽
- 每日篩選
- 個股分析
- 量化指標
- 模型庫
- 情報中心
- 公開資料檔 `data/*.json` / `data/*.js`

公開包不包含：

- 管理後台頁面
- 後端程式
- 抓資料腳本
- 私密 API key
- Supabase `service_role key`
- 本機資料庫
- 備份與 log

## 後台不要放進公開包

管理後台不應該放在 Cloudflare Pages 的公開包裡。

如果要做真正後台，建議獨立成另一個私有入口，例如：

- Cloudflare Access 保護的 admin 網站
- Supabase + Edge Function 的後台 API
- 只允許管理員登入的獨立 admin app

會員登入可以留在公開前台；但管理操作、資料更新、敏感設定不應該出現在 `public-dist/`。

## Supabase

前台會員帳號存在 Supabase：

- Supabase Auth：登入密碼
- `public.profiles`：帳號、名稱、角色、狀態

前台只使用 `SUPABASE_ANON_KEY`。這個 key 可以公開，真正權限由 Supabase RLS 控制。

不要把 `service_role key` 放到前台或 GitHub。

## 自動更新資料

Codex 自動化抓完資料後，應該更新 repo 內的公開資料檔，再讓 Cloudflare Pages 重新部署。

Cloudflare 每次部署會重新執行：

```powershell
python scripts/build_public_dist.py
```

然後只發布 `public-dist/`。
