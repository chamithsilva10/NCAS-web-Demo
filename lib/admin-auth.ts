import { createHmac, timingSafeEqual } from "node:crypto"

export const ADMIN_COOKIE_NAME = "ncas_admin_session"

const SESSION_TTL_SECONDS = 60 * 60 * 8

function getAdminPassword() {
  return process.env.ADMIN_DASHBOARD_PASSWORD || ""
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || getAdminPassword() || "ncas-default-admin-secret"
}

function encode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url")
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8")
}

export function verifyAdminPassword(candidate: string) {
  const expected = getAdminPassword()
  if (!expected) {
    return false
  }

  const a = Buffer.from(candidate)
  const b = Buffer.from(expected)
  if (a.length !== b.length) {
    return false
  }

  return timingSafeEqual(a, b)
}

export function createAdminSessionToken() {
  const payload = {
    exp: Date.now() + SESSION_TTL_SECONDS * 1000,
    role: "admin",
  }

  const body = encode(JSON.stringify(payload))
  const signature = createHmac("sha256", getSessionSecret()).update(body).digest("base64url")

  return `${body}.${signature}`
}

export function verifyAdminSessionToken(token: string | undefined) {
  if (!token) {
    return false
  }

  const [body, signature] = token.split(".")
  if (!body || !signature) {
    return false
  }

  const expectedSignature = createHmac("sha256", getSessionSecret()).update(body).digest("base64url")
  const a = Buffer.from(signature)
  const b = Buffer.from(expectedSignature)

  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return false
  }

  try {
    const payload = JSON.parse(decode(body)) as { exp?: number; role?: string }
    return payload.role === "admin" && typeof payload.exp === "number" && payload.exp > Date.now()
  } catch {
    return false
  }
}

export function getAdminCookieMaxAge() {
  return SESSION_TTL_SECONDS
}
