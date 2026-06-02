# 前台公開部署說明

這個專案要公開給大家測試時，不要上傳整個工作資料夾。

請只上傳 `public-dist/`。它只包含前台網頁與已產生好的公開資料，不包含後台、更新腳本、管理帳號、log、備份檔。

## 產生公開版

在專案根目錄執行：

```powershell
python scripts/build_public_dist.py
```

產生完成後，上傳：

```text
public-dist/
```

## 用自己的電腦跑真正登入後端

如果要讓測試者註冊登入，請不要用 `python -m http.server`。請改用本機後端：

```powershell
python scripts\build_public_dist.py
python scripts\public_server.py --host 127.0.0.1 --port 8080
```

會員資料會存在：

```text
data/public-users.sqlite
```

查看目前註冊會員：

```powershell
python scripts\public_server.py --list-users
```

建立或重設管理員帳號：

```powershell
python scripts\public_server.py --create-admin admin 你的強密碼 --admin-nickname 系統管理員
```

建立後，用這組帳號在前台登入，導覽列會出現 `管理員`，可進入會員管理頁。

升級或降級會員：

```powershell
python scripts\public_server.py --set-role 帳號 advanced
python scripts\public_server.py --set-role 帳號 basic
```

刪除會員：

```powershell
python scripts\public_server.py --delete-user 帳號
```

接著另開一個 PowerShell，用 Cloudflare Tunnel 對外公開：

```powershell
cloudflared tunnel --url http://127.0.0.1:8080
```

測試者註冊後，只會拿到 `basic` 前台帳號。公開版不包含 `admin/` 管理後台，也不會公開更新腳本或管理資料。

## 可以上傳到哪裡

建議用靜態網站服務：

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages

部署設定：

- Build command：留空，或填 `python scripts/build_public_dist.py` 搭配 publish directory
- Publish directory：`public-dist`
- 首頁：`index.html`

## 不要上傳

以下資料不應公開：

- `admin/`
- `scripts/`
- `tools/`
- `data/admin-users.json`
- `data/admin-audit.jsonl`
- `data/admin-backups/`
- `data/admin-jobs/`
- `*.bak`
- `*.log`
- `verification-screenshots/`

## 重要觀念

前端 HTML/CSS/JS 只要放上網，瀏覽器一定看得到；這是正常的。

真正不要公開的是後台程式、爬蟲程式、管理帳號、操作紀錄、備份檔。這些都不會被複製到 `public-dist/`。

你的每日篩選股票、情報中心、機器人資料會以 JSON 或 JS 資料檔形式放在 `public-dist/data/`，一般人只能讀取瀏覽，不能直接修改網站上的原始資料。

如果使用 `scripts/public_server.py`，會員註冊資料會存在你的電腦 SQLite，不會存在使用者自己的瀏覽器。

## 自動更新公開前台資料

每天自動抓完資料並更新 `public-dist/`，請跑：

```powershell
python scripts\update_public_site.py
```

這支腳本會依序執行：

```text
update_data.py
update_regular_board_volume.py
update_short_margin_ratio.py
update_intelligence.py --target all
build_site_data.py
build_public_dist.py
```

只重建公開包、不重抓資料：

```powershell
python scripts\update_public_site.py --only public-dist
```

只用現有資料重建 `site-data.json` 和 `public-dist/`：

```powershell
python scripts\update_public_site.py --skip-fetch
```

Windows 工作排程可以設定每天盤後執行：

```powershell
schtasks /Create /SC DAILY /TN "AI Stock Lab Public Update" /ST 18:30 /TR "cmd /c cd /d C:\Users\User\Documents\AI量化策略 && python scripts\update_public_site.py >> data\public-update.log 2>&1"
```

如果 `scripts\public_server.py` 和 Cloudflare Tunnel 正在跑，更新完成後使用者重新整理頁面就會讀到新的前台資料。
