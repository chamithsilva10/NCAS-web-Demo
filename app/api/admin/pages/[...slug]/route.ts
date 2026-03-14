import { NextResponse } from "next/server"
import { adminSlugToRoutePath } from "@/lib/admin-route-path"
import { isAdminAuthenticatedFromCookieHeader } from "@/lib/admin-session"
import { getCmsPageByPathForAdmin, upsertCmsPageForAdmin } from "@/lib/cms"

type Params = {
  params: {
    slug: string[]
  }
}

function ensureAdmin(request: Request) {
  const ok = isAdminAuthenticatedFromCookieHeader(request.headers.get("cookie"))
  if (!ok) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
  return null
}

export async function GET(request: Request, { params }: Params) {
  const unauthorized = ensureAdmin(request)
  if (unauthorized) {
    return unauthorized
  }

  const path = adminSlugToRoutePath(params.slug || [])
  const page = await getCmsPageByPathForAdmin(path)
  return NextResponse.json({ page })
}

export async function PUT(request: Request, { params }: Params) {
  const unauthorized = ensureAdmin(request)
  if (unauthorized) {
    return unauthorized
  }

  const path = adminSlugToRoutePath(params.slug || [])
  const payload = (await request.json()) as {
    title?: string
    seo_description?: string
    status?: "draft" | "published"
    content?: { html?: string }
  }

  if (!payload.status) {
    return NextResponse.json({ message: "status is required" }, { status: 400 })
  }

  try {
    const page = await upsertCmsPageForAdmin({
      path,
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
