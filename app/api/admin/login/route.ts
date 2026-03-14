import { NextResponse } from "next/server"
import { ADMIN_COOKIE_NAME, createAdminSessionToken, getAdminCookieMaxAge, verifyAdminEmail, verifyAdminPassword } from "@/lib/admin-auth"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { email?: string; password?: string }
  const email = body.email || ""
  const password = body.password || ""

  if (!verifyAdminEmail(email) || !verifyAdminPassword(password)) {
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: createAdminSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: getAdminCookieMaxAge(),
  })

  return response
}
