# NCAS Admin Dashboard Setup

## 1. Configure Environment Variables
Copy `.env.local.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_DASHBOARD_PASSWORD`
- `ADMIN_SESSION_SECRET`

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
- Admin write operations require `SUPABASE_SERVICE_ROLE_KEY`.
- Public page reads use `NEXT_PUBLIC_SUPABASE_ANON_KEY` with RLS policy for published pages only.
