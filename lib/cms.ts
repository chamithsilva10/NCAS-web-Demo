import { createSupabaseAdminServerClient, createSupabasePublicServerClient } from "@/lib/supabase"
import { normalizeCmsPath } from "@/lib/admin-route-path"

export type CmsPageRecord = {
  id: string
  path: string
  title: string | null
  seo_description: string | null
  status: "draft" | "published"
  content: {
    html?: string
  } | null
  updated_at: string
}

export type CmsPageInput = {
  path: string
  title?: string | null
  seo_description?: string | null
  status: "draft" | "published"
  content?: {
    html?: string
  }
}

export async function getPublishedCmsPage(pathname: string): Promise<CmsPageRecord | null> {
  const supabase = createSupabasePublicServerClient()
  if (!supabase) {
    return null
  }

  const normalized = normalizeCmsPath(pathname)
  const { data, error } = await supabase
    .from("cms_pages")
    .select("id,path,title,seo_description,status,content,updated_at")
    .eq("path", normalized)
    .eq("status", "published")
    .maybeSingle<CmsPageRecord>()

  if (error) {
    return null
  }

  return data
}

export async function getCmsPageByPathForAdmin(pathname: string): Promise<CmsPageRecord | null> {
  const supabase = createSupabaseAdminServerClient()
  if (!supabase) {
    return null
  }

  const normalized = normalizeCmsPath(pathname)
  const { data } = await supabase
    .from("cms_pages")
    .select("id,path,title,seo_description,status,content,updated_at")
    .eq("path", normalized)
    .maybeSingle<CmsPageRecord>()

  return data
}

export async function listCmsPagesForAdmin(): Promise<CmsPageRecord[]> {
  const supabase = createSupabaseAdminServerClient()
  if (!supabase) {
    return []
  }

  const { data } = await supabase
    .from("cms_pages")
    .select("id,path,title,seo_description,status,content,updated_at")
    .order("updated_at", { ascending: false })

  return (data as CmsPageRecord[] | null) || []
}

export async function upsertCmsPageForAdmin(input: CmsPageInput) {
  const supabase = createSupabaseAdminServerClient()
  if (!supabase) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured")
  }

  const payload = {
    path: normalizeCmsPath(input.path),
    title: input.title || null,
    seo_description: input.seo_description || null,
    status: input.status,
    content: input.content || {},
  }

  const { data, error } = await supabase
    .from("cms_pages")
    .upsert(payload, { onConflict: "path" })
    .select("id,path,title,seo_description,status,content,updated_at")
    .single<CmsPageRecord>()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
