-- NCAS CMS schema for PostgreSQL
create extension if not exists "pgcrypto";

create table if not exists public.cms_pages (
  id uuid primary key default gen_random_uuid(),
  path text not null unique,
  title text,
  seo_description text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists cms_pages_status_idx on public.cms_pages (status);
create index if not exists cms_pages_updated_at_idx on public.cms_pages (updated_at desc);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists cms_pages_set_updated_at on public.cms_pages;
create trigger cms_pages_set_updated_at
before update on public.cms_pages
for each row
execute function public.set_updated_at();