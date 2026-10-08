-- =========================================================
-- Nova Health & Wellness: database schema
-- Run once in the Supabase SQL Editor.
-- =========================================================

-- 1. Patient profiles (one per login) ---------------------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  email text not null default '',
  phone text not null default '',
  consented_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Appointment requests ---------------------------------
create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.profiles (id) on delete cascade,
  service text not null check (service in (
    'low-back-pain',
    'musculoskeletal-pain',
    'post-operative-rehab',
    'neurological-conditions',
    'womens-health',
    'paediatric-conditions',
    'not-sure'
  )),
  preferred_date date not null,
  preferred_slot text not null check (preferred_slot in ('morning', 'afternoon', 'evening')),
  note text check (note is null or char_length(note) <= 500),
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  consent_given boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index appointments_patient_idx on public.appointments (patient_id);
create index appointments_status_idx on public.appointments (status, created_at desc);

-- 3. Admins (clinic staff allowed into the dashboard) -----
create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

-- Helper: is the current user an admin? -------------------
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admins where user_id = (select auth.uid())
  );
$$;

-- Keep updated_at fresh -----------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger appointments_updated_at
  before update on public.appointments
  for each row execute function public.set_updated_at();

-- Auto-create a profile when someone signs up -------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, phone, consented_at)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', ''),
    coalesce(new.raw_user_meta_data ->> 'phone', ''),
    case when (new.raw_user_meta_data ->> 'consent') = 'true' then now() end
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

revoke execute on function public.handle_new_user() from public, anon, authenticated;

-- Row-level security --------------------------------------
alter table public.profiles enable row level security;
alter table public.appointments enable row level security;
alter table public.admins enable row level security;

create policy "profiles: read own or admin"
  on public.profiles for select to authenticated
  using (id = (select auth.uid()) or public.is_admin());

create policy "profiles: update own"
  on public.profiles for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

create policy "appointments: read own or admin"
  on public.appointments for select to authenticated
  using (patient_id = (select auth.uid()) or public.is_admin());

create policy "appointments: insert own"
  on public.appointments for insert to authenticated
  with check (patient_id = (select auth.uid()) and status = 'pending');

create policy "appointments: cancel own"
  on public.appointments for update to authenticated
  using (patient_id = (select auth.uid()))
  with check (patient_id = (select auth.uid()) and status = 'cancelled');

create policy "appointments: admin update"
  on public.appointments for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "admins: read own row"
  on public.admins for select to authenticated
  using (user_id = (select auth.uid()));

-- Permissions for logged-in users (never for anonymous) ---
grant select, update on public.profiles to authenticated;
grant select, insert, update on public.appointments to authenticated;
grant select on public.admins to authenticated;