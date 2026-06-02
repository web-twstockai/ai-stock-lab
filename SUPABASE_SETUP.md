# Supabase Setup

## 1. 建立資料表與權限

到 Supabase project：

```text
SQL Editor → New query
```

貼上並執行：

```text
supabase/schema.sql
```

這會建立 `public.profiles`，並啟用 Row Level Security。一般會員只能看自己的 profile；`role = 'admin'` 的管理員可以管理所有 profiles。

## 2. Auth 設定

測試期建議先到：

```text
Authentication → Providers → Email
```

關閉：

```text
Confirm email
```

這樣使用者註冊後可以立刻登入。若你之後要正式營運，可以再打開 email confirmation。

## 3. 建立第一個管理員

先到網站前台註冊一個帳號，例如：

```text
admin
```

註冊完成後，到 Supabase SQL Editor 執行：

```sql
update public.profiles
set role = 'admin', nickname = '系統管理員'
where account = 'admin';
```

之後用這個帳號登入，導覽列會出現 `管理員`。

## 4. 安全注意

`SUPABASE_ANON_KEY` 可以放在前端，真正權限靠 RLS 控制。

`service_role key` 不可以放進前端，也不要提交到 GitHub。未來若要用 GitHub Actions 寫入資料庫，才把它放進 GitHub Actions Secrets。
