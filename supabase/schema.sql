-- Run this once in the Supabase SQL editor to provision the waitlist table.
-- Dedup is enforced by the UNIQUE constraint on email + the app's
-- upsert(..., { onConflict: 'email', ignoreDuplicates: true }).

create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Allow anonymous visitors to submit their email from the marketing site.
alter table public.waitlist enable row level security;

create policy "Allow anon inserts" on public.waitlist
  for insert
  to anon
  with check (true);