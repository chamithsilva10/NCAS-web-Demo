"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function buildRedirectUrl(
  redirectUri: string,
  params: Record<string, string | undefined>,
) {
  const url = new URL(redirectUri)
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })
  return url.toString()
}

export default function OAuthConsentPage() {
  const searchParams = useSearchParams()

  const clientId = searchParams.get("client_id") || "Unknown client"
  const scope = searchParams.get("scope") || "No scopes requested"
  const state = searchParams.get("state") || undefined
  const redirectUri = searchParams.get("redirect_uri") || ""

  const scopes = useMemo(
    () => scope.split(" ").map((item) => item.trim()).filter(Boolean),
    [scope],
  )

  const approve = () => {
    if (!redirectUri) {
      alert("Missing redirect_uri in OAuth request.")
      return
    }

    const url = buildRedirectUrl(redirectUri, {
      state,
      consent: "approved",
    })

    window.location.href = url
  }

  const deny = () => {
    if (!redirectUri) {
      alert("Missing redirect_uri in OAuth request.")
      return
    }

    const url = buildRedirectUrl(redirectUri, {
      state,
      error: "access_denied",
      error_description: "User denied the OAuth authorization request",
    })

    window.location.href = url
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 p-6 md:p-10 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-xl border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">OAuth Consent</Badge>
            <Badge>{process.env.NODE_ENV === "production" ? "Production" : "Development"}</Badge>
          </div>
          <CardTitle className="text-2xl">Authorize Application Access</CardTitle>
          <CardDescription>
            Review requested access for this application before continuing.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg border bg-white p-4 space-y-2">
            <p className="text-sm text-muted-foreground">Client ID</p>
            <p className="font-medium break-all">{clientId}</p>
          </div>

          <div className="rounded-lg border bg-white p-4 space-y-3">
            <p className="text-sm text-muted-foreground">Requested Scopes</p>
            <div className="flex flex-wrap gap-2">
              {scopes.length ? (
                scopes.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">No scopes specified</span>
              )}
            </div>
          </div>

          <div className="rounded-lg border bg-white p-4 space-y-2">
            <p className="text-sm text-muted-foreground">Redirect URI</p>
            <p className="text-sm break-all">{redirectUri || "Missing redirect_uri"}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={approve} className="flex-1" disabled={!redirectUri}>
              Approve
            </Button>
            <Button onClick={deny} variant="outline" className="flex-1" disabled={!redirectUri}>
              Deny
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
