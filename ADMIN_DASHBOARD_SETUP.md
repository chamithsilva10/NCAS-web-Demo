# NCAS Admin Dashboard Setup

## 1. Configure Environment Variables
Copy `.env.local.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- `SUPABASE_SECRET_KEY` (or `SUPABASE_SERVICE_ROLE_KEY`)
- `ADMIN_DASHBOARD_PASSWORD`
- `ADMIN_SESSION_SECRET`

## 1.1 Enable Supabase OAuth Server (Dashboard)
In Supabase Auth settings:

- Enable OAuth server functionality
- Set Site URL (for local dev use `http://localhost:3000`)
- Set Authorization Path to `/oauth/consent`
- Optional: enable dynamic OAuth app registration if needed

## 2. Create CMS Table in Supabase
Run SQL from `supabase/cms-schema.sql` in Supabase SQL Editor.

## 3. Start the App
```bash
npm run dev
```

## 4. Open Admin Dashboard
- Login: `/admin/login`
- Dashboard: `/admin`

## How it Works
- The site renders normal hard-coded pages by default.
- If a page has a **published** CMS override, that HTML replaces the page output.
- You can publish/unpublish each route independently from admin.

## Notes
- Admin write operations require `SUPABASE_SECRET_KEY` (or legacy `SUPABASE_SERVICE_ROLE_KEY`).
- Public page reads use `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or legacy `NEXT_PUBLIC_SUPABASE_ANON_KEY`) with RLS policy for published pages only.
