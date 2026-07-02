# NCAS Admin Dashboard Setup

## 1. Configure Environment Variables
Copy `.env.local.example` to `.env.local` and set values:

- `DATABASE_URL`
- `DATABASE_SSL` (set to `true` for hosted PostgreSQL with SSL)
- `ADMIN_DASHBOARD_EMAIL`
- `ADMIN_DASHBOARD_PASSWORD`
- `ADMIN_SESSION_SECRET`

## 2. Create CMS Table in PostgreSQL
Run SQL from [supabase/database.sql](supabase/database.sql) against your PostgreSQL database.

If you are using local Postgres, connect with `psql` or your SQL client and run the script there.

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
- Admin and public CMS reads use the PostgreSQL connection in `DATABASE_URL`.
- Public page overrides only render when a `published` row exists in `public.cms_pages`.
