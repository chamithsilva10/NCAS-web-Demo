import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-auth"

export function isAdminAuthenticatedFromCookieHeader(cookieHeader: string | null) {
  if (!cookieHeader) {
    return false
  }

  const parts = cookieHeader.split(";").map((part) => part.trim())
  const cookie = parts.find((part) => part.startsWith(`${ADMIN_COOKIE_NAME}=`))
  const token = cookie?.split("=")[1]
  return verifyAdminSessionToken(token)
}

export function isAdminAuthenticatedServer() {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value
  return verifyAdminSessionToken(token)
}

export function requireAdminSession() {
  if (!isAdminAuthenticatedServer()) {
    redirect("/admin/login")
  }
}
