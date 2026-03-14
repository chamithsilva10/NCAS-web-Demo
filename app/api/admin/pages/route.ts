import { NextResponse } from "next/server"
import { isAdminAuthenticatedFromCookieHeader } from "@/lib/admin-session"
import { listCmsPagesForAdmin, upsertCmsPageForAdmin } from "@/lib/cms"

function ensureAdmin(request: Request) {
  const ok = isAdminAuthenticatedFromCookieHeader(request.headers.get("cookie"))
  if (!ok) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
  return null
}

export async function GET(request: Request) {
  const unauthorized = ensureAdmin(request)
  if (unauthorized) {
    return unauthorized
  }

  const pages = await listCmsPagesForAdmin()
  return NextResponse.json({ pages })
}

export async function POST(request: Request) {
  const unauthorized = ensureAdmin(request)
  if (unauthorized) {
    return unauthorized
  }

  const payload = (await request.json()) as {
    path?: string
    title?: string
    seo_description?: string
    status?: "draft" | "published"
    content?: { html?: string }
  }

  if (!payload.path || !payload.status) {
    return NextResponse.json({ message: "path and status are required" }, { status: 400 })
  }

  try {
    const page = await upsertCmsPageForAdmin({
      path: payload.path,
      title: payload.title || "",
      seo_description: payload.seo_description || "",
      status: payload.status,
      content: payload.content || {},
    })

    return NextResponse.json({ page })
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to save page" },
      { status: 500 },
    )
  }
}
