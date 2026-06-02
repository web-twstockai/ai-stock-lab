# Supabase Setup

## 1. 建立會員資料表

到 Supabase 專案後台執行：

```text
SQL Editor -> New query
```

貼上並執行：

```text
supabase/schema.sql
```

這會建立 `public.profiles`，並啟用 Row Level Security。一般會員只能看自己的資料，`role = 'admin'` 的管理員可以管理所有會員資料。

## 2. Auth 設定

前台註冊只需要：

```text
帳號 + 密碼
```

使用者不需要填 Email。Supabase Auth 底層需要 email 欄位，所以前端會自動把帳號轉成內部識別，例如：

```text
admin -> admin@users.ai-stock-lab.local
```

因為這不是使用者真實信箱，請到 Supabase 關閉 email confirmation：

```text
Authentication -> Providers -> Email
```

確認這個選項是開啟：

```text
Allow new users to sign up
```

找到並關閉：

```text
Confirm email
```

如果新版介面沒有顯示這些選項，先測試註冊：

- 若出現「Supabase 目前關閉新會員註冊」，代表 `Allow new users to sign up` 沒開。
- 若出現「Supabase 仍要求 Email 驗證」或 `email rate limit exceeded`，代表 `Confirm email` 還開著。

## 3. 建立第一個管理員

先到網站前台註冊一個帳號：

```text
admin
```

註冊完成後，到 Supabase SQL Editor 執行：

```sql
update public.profiles
set role = 'admin', nickname = '系統管理員'
where account = 'admin';
```

之後用 `admin` 登入，就可以看到並操作「管理員」頁面。

## 4. 安全提醒

`SUPABASE_ANON_KEY` 可以放在前端，真正權限靠 RLS 控制。

`service_role key` 不可以放到前端，也不要貼到 GitHub。未來若 GitHub Actions 需要寫入 Supabase，再放進 GitHub Actions Secrets。
