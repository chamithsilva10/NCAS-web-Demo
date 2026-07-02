import { normalizeCmsPath } from "@/lib/admin-route-path"
import { hasDatabaseConfig, queryDatabase } from "@/lib/postgres"

export type CmsPageRecord = {
  id: string
  path: string
  title: string | null
  seo_description: string | null
  status: "draft" | "published"
  content: CmsPageContent | null
  updated_at: string
}

export type CmsPageContent = {
  html?: string
  [key: string]: unknown
}

export type CmsPageInput = {
  path: string
  title?: string | null
  seo_description?: string | null
  status: "draft" | "published"
  content?: CmsPageContent
}

export async function getPublishedCmsPage(pathname: string): Promise<CmsPageRecord | null> {
  if (!hasDatabaseConfig()) {
    return null
  }

  const normalized = normalizeCmsPath(pathname)
  const { rows } = await queryDatabase<CmsPageRecord>(
    `
      select id, path, title, seo_description, status, content, updated_at
      from public.cms_pages
      where path = $1 and status = 'published'
      limit 1
    `,
    [normalized],
  )

  return rows[0] || null
}

export async function getCmsPageByPathForAdmin(pathname: string): Promise<CmsPageRecord | null> {
  if (!hasDatabaseConfig()) {
    return null
  }

  const normalized = normalizeCmsPath(pathname)
  const { rows } = await queryDatabase<CmsPageRecord>(
    `
      select id, path, title, seo_description, status, content, updated_at
      from public.cms_pages
      where path = $1
      limit 1
    `,
    [normalized],
  )

  return rows[0] || null
}

export async function listCmsPagesForAdmin(): Promise<CmsPageRecord[]> {
  if (!hasDatabaseConfig()) {
    return []
  }

  const { rows } = await queryDatabase<CmsPageRecord>(`
    select id, path, title, seo_description, status, content, updated_at
    from public.cms_pages
    order by updated_at desc
  `)

  return rows
}

export async function upsertCmsPageForAdmin(input: CmsPageInput) {
  if (!hasDatabaseConfig()) {
    throw new Error("DATABASE_URL is not configured")
  }

  const payload = {
    path: normalizeCmsPath(input.path),
    title: input.title || null,
    seo_description: input.seo_description || null,
    status: input.status,
    content: input.content || {},
  }

  const { rows } = await queryDatabase<CmsPageRecord>(
    `
      insert into public.cms_pages (path, title, seo_description, status, content)
      values ($1, $2, $3, $4, $5::jsonb)
      on conflict (path) do update
      set
        title = excluded.title,
        seo_description = excluded.seo_description,
        status = excluded.status,
        content = excluded.content
      returning id, path, title, seo_description, status, content, updated_at
    `,
    [payload.path, payload.title, payload.seo_description, payload.status, JSON.stringify(payload.content)],
  )

  return rows[0]
}
