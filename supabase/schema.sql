create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  account text not null unique,
  nickname text not null,
  role text not null default 'basic' check (role in ('basic', 'advanced', 'admin')),
  status text not null default 'active' check (status in ('active', 'disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_login_at timestamptz
);

alter table public.profiles enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
      and status = 'active'
  );
$$;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.touch_updated_at();

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
on public.profiles
for select
to authenticated
using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check (id = auth.uid());

drop policy if exists "profiles_update_own_limited_or_admin" on public.profiles;
create policy "profiles_update_own_limited_or_admin"
on public.profiles
for update
to authenticated
using (id = auth.uid() or public.is_admin())
with check (
  public.is_admin()
  or (
    id = auth.uid()
    and role = 'basic'
    and status = 'active'
  )
);

drop policy if exists "profiles_delete_admin" on public.profiles;
create policy "profiles_delete_admin"
on public.profiles
for delete
to authenticated
using (public.is_admin());

create table if not exists public.watchlist_items (
  user_id uuid not null references auth.users(id) on delete cascade,
  symbol text not null,
  stock_name text,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, symbol),
  constraint watchlist_symbol_format check (symbol ~ '^[A-Za-z0-9_.-]{1,20}$')
);

create index if not exists watchlist_items_user_created_idx
on public.watchlist_items (user_id, created_at desc);

alter table public.watchlist_items enable row level security;

drop trigger if exists watchlist_items_touch_updated_at on public.watchlist_items;
create trigger watchlist_items_touch_updated_at
before update on public.watchlist_items
for each row execute function public.touch_updated_at();

drop policy if exists "watchlist_select_own_or_admin" on public.watchlist_items;
create policy "watchlist_select_own_or_admin"
on public.watchlist_items
for select
to authenticated
using (user_id = auth.uid() or public.is_admin());

drop policy if exists "watchlist_insert_own" on public.watchlist_items;
create policy "watchlist_insert_own"
on public.watchlist_items
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "watchlist_update_own_or_admin" on public.watchlist_items;
create policy "watchlist_update_own_or_admin"
on public.watchlist_items
for update
to authenticated
using (user_id = auth.uid() or public.is_admin())
with check (user_id = auth.uid() or public.is_admin());

drop policy if exists "watchlist_delete_own_or_admin" on public.watchlist_items;
create policy "watchlist_delete_own_or_admin"
on public.watchlist_items
for delete
to authenticated
using (user_id = auth.uid() or public.is_admin());
