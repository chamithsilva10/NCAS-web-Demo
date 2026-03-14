"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type EditorProps = {
  routePath: string
  initial: {
    title: string
    seoDescription: string
    status: "draft" | "published"
    html: string
  }
}

export function PageEditor({ routePath, initial }: EditorProps) {
  const router = useRouter()
  const [title, setTitle] = useState(initial.title)
  const [seoDescription, setSeoDescription] = useState(initial.seoDescription)
  const [status, setStatus] = useState<"draft" | "published">(initial.status)
  const [html, setHtml] = useState(initial.html)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const encodedPath = useMemo(() => {
    if (routePath === "/") {
      return "_home"
    }
    return routePath.split("/").filter(Boolean).join("/")
  }, [routePath])

  const save = async () => {
    setIsSaving(true)
    setError("")
    setMessage("")

    try {
      const response = await fetch(`/api/admin/pages/${encodedPath}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: routePath,
          title,
          seo_description: seoDescription,
          status,
          content: {
            html,
          },
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({ message: "Failed to save page" }))
        setError(payload.message || "Failed to save page")
        return
      }

      setMessage("Page saved successfully")
      router.refresh()
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Page Content</CardTitle>
          <CardDescription>
            Add full custom HTML for this route. When published, this content overrides the existing page UI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="html">HTML Content</Label>
            <Textarea
              id="html"
              className="min-h-[520px] font-mono text-sm"
              value={html}
              onChange={(event) => setHtml(event.target.value)}
              placeholder="<h1>Page Title</h1><p>Page content...</p>"
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {message ? <p className="text-sm text-emerald-600">{message}</p> : null}

          <div className="flex gap-3">
            <Button onClick={save} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
            <Button variant="outline" asChild>
              <a href={routePath} target="_blank" rel="noreferrer">
                Open Live Page
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Page Settings</CardTitle>
          <CardDescription>Control metadata and publication state.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="route">Route</Label>
            <Input id="route" value={routePath} readOnly />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Admin Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Page title for dashboard"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="seo">SEO Description</Label>
            <Textarea
              id="seo"
              value={seoDescription}
              onChange={(event) => setSeoDescription(event.target.value)}
              placeholder="Meta description for this page"
            />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <Select value={status} onValueChange={(value: "draft" | "published") => setStatus(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
