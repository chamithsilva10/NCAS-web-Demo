"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type BuilderBlockType = "heading" | "text" | "image" | "button" | "cardRow"

type BuilderCard = {
  id: string
  title: string
  description: string
  imageUrl?: string
  linkLabel?: string
  linkHref?: string
}

type BuilderBlock = {
  id: string
  type: BuilderBlockType
  headingLevel?: "h1" | "h2" | "h3"
  headingText?: string
  text?: string
  imageUrl?: string
  imageAlt?: string
  buttonLabel?: string
  buttonHref?: string
  cards?: BuilderCard[]
}

type EditorMode = "builder" | "html"

type EditorProps = {
  routePath: string
  initial: {
    title: string
    seoDescription: string
    status: "draft" | "published"
    html: string
    builder?: BuilderBlock[]
  }
}

function makeId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function buildHtmlFromBlocks(blocks: BuilderBlock[]) {
  const content = blocks
    .map((block) => {
      if (block.type === "heading") {
        const level = block.headingLevel || "h2"
        const text = escapeHtml(block.headingText || "Heading")
        return `<${level}>${text}</${level}>`
      }

      if (block.type === "text") {
        const text = escapeHtml(block.text || "").replaceAll("\n", "<br />")
        return `<p>${text}</p>`
      }

      if (block.type === "image") {
        const imageUrl = (block.imageUrl || "").trim()
        if (!imageUrl) {
          return ""
        }

        const imageAlt = escapeHtml(block.imageAlt || "Image")
        return `<img src="${escapeHtml(imageUrl)}" alt="${imageAlt}" style="max-width:100%;height:auto;border-radius:8px;" />`
      }

      if (block.type === "button") {
        const label = escapeHtml(block.buttonLabel || "Button")
        const href = escapeHtml((block.buttonHref || "#").trim() || "#")
        return `<a href="${href}" style="display:inline-block;padding:10px 16px;background:#0f172a;color:#fff;text-decoration:none;border-radius:8px;">${label}</a>`
      }

      const cards = block.cards || []
      if (!cards.length) {
        return ""
      }

      const cardsHtml = cards
        .map((card) => {
          const title = escapeHtml(card.title || "Card title")
          const description = escapeHtml(card.description || "")
          const image = card.imageUrl
            ? `<img src="${escapeHtml(card.imageUrl)}" alt="${title}" style="width:100%;height:auto;border-radius:8px;margin-bottom:10px;" />`
            : ""
          const link = card.linkHref
            ? `<a href="${escapeHtml(card.linkHref)}" style="display:inline-block;margin-top:10px;color:#1d4ed8;text-decoration:underline;">${escapeHtml(card.linkLabel || "Learn more")}</a>`
            : ""
          return `<article style="border:1px solid #e5e7eb;border-radius:10px;padding:14px;background:#fff;"><h3 style="margin:0 0 8px 0;">${title}</h3>${image}<p style="margin:0;">${description}</p>${link}</article>`
        })
        .join("")

      return `<section style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">${cardsHtml}</section>`
    })
    .join("\n")

  return `<section style="max-width:1000px;margin:0 auto;padding:24px;line-height:1.7;">${content}</section>`
}

function createBlock(type: BuilderBlockType): BuilderBlock {
  if (type === "heading") {
    return { id: makeId("heading"), type, headingLevel: "h2", headingText: "New heading" }
  }

  if (type === "text") {
    return { id: makeId("text"), type, text: "Type your paragraph here" }
  }

  if (type === "image") {
    return { id: makeId("image"), type, imageUrl: "", imageAlt: "" }
  }

  if (type === "button") {
    return { id: makeId("button"), type, buttonLabel: "Click here", buttonHref: "#" }
  }

  return {
    id: makeId("cards"),
    type,
    cards: [
      {
        id: makeId("card"),
        title: "Card title",
        description: "Card description",
        imageUrl: "",
        linkLabel: "Read more",
        linkHref: "#",
      },
    ],
  }
}

function reorderBlocks(blocks: BuilderBlock[], sourceId: string, targetId: string) {
  const sourceIndex = blocks.findIndex((block) => block.id === sourceId)
  const targetIndex = blocks.findIndex((block) => block.id === targetId)

  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
    return blocks
  }

  const copy = [...blocks]
  const [moved] = copy.splice(sourceIndex, 1)
  copy.splice(targetIndex, 0, moved)
  return copy
}

export function PageEditor({ routePath, initial }: EditorProps) {
  const router = useRouter()
  const [title, setTitle] = useState(initial.title)
  const [seoDescription, setSeoDescription] = useState(initial.seoDescription)
  const [status, setStatus] = useState<"draft" | "published">(initial.status)
  const [html, setHtml] = useState(initial.html)
  const [mode, setMode] = useState<EditorMode>(initial.builder?.length ? "builder" : "html")
  const [blocks, setBlocks] = useState<BuilderBlock[]>(initial.builder || [])
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const encodedPath = useMemo(() => {
    if (routePath === "/") {
      return "_home"
    }
    return routePath.split("/").filter(Boolean).join("/")
  }, [routePath])

  const generatedHtml = useMemo(() => buildHtmlFromBlocks(blocks), [blocks])
  const effectiveHtml = mode === "builder" ? generatedHtml : html

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
            html: effectiveHtml,
            builder: mode === "builder" ? blocks : undefined,
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
            Use visual builder or custom HTML. When published, this content overrides the existing page UI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button type="button" variant={mode === "builder" ? "default" : "outline"} onClick={() => setMode("builder")}>
              Visual Builder
            </Button>
            <Button type="button" variant={mode === "html" ? "default" : "outline"} onClick={() => setMode("html")}>
              HTML Mode
            </Button>
          </div>

          {mode === "builder" ? (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" onClick={() => setBlocks((prev) => [...prev, createBlock("heading")])}>+ Heading</Button>
                <Button type="button" variant="outline" onClick={() => setBlocks((prev) => [...prev, createBlock("text")])}>+ Text</Button>
                <Button type="button" variant="outline" onClick={() => setBlocks((prev) => [...prev, createBlock("image")])}>+ Image</Button>
                <Button type="button" variant="outline" onClick={() => setBlocks((prev) => [...prev, createBlock("button")])}>+ Button</Button>
                <Button type="button" variant="outline" onClick={() => setBlocks((prev) => [...prev, createBlock("cardRow")])}>+ Flex Cards</Button>
              </div>

              <div className="space-y-3">
                {blocks.map((block, index) => (
                  <div
                    key={block.id}
                    className="rounded-lg border p-3 space-y-3 bg-white"
                    draggable
                    onDragStart={() => setDraggedBlockId(block.id)}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={() => {
                      if (!draggedBlockId) return
                      setBlocks((prev) => reorderBlocks(prev, draggedBlockId, block.id))
                      setDraggedBlockId(null)
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium">Block {index + 1}: {block.type}</p>
                      <div className="flex gap-1">
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setBlocks((prev) => {
                              if (index === 0) return prev
                              const copy = [...prev]
                              ;[copy[index - 1], copy[index]] = [copy[index], copy[index - 1]]
                              return copy
                            })
                          }
                        >
                          Up
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setBlocks((prev) => {
                              if (index === prev.length - 1) return prev
                              const copy = [...prev]
                              ;[copy[index + 1], copy[index]] = [copy[index], copy[index + 1]]
                              return copy
                            })
                          }
                        >
                          Down
                        </Button>
                        <Button type="button" size="sm" variant="outline" onClick={() => setBlocks((prev) => prev.filter((item) => item.id !== block.id))}>
                          Remove
                        </Button>
                      </div>
                    </div>

                    {block.type === "heading" ? (
                      <div className="space-y-2">
                        <Label>Heading Level</Label>
                        <Select
                          value={block.headingLevel || "h2"}
                          onValueChange={(value: "h1" | "h2" | "h3") =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, headingLevel: value } : item)))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="h1">H1</SelectItem>
                            <SelectItem value="h2">H2</SelectItem>
                            <SelectItem value="h3">H3</SelectItem>
                          </SelectContent>
                        </Select>
                        <Label>Heading Text</Label>
                        <Input
                          value={block.headingText || ""}
                          onChange={(event) =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, headingText: event.target.value } : item)))
                          }
                        />
                      </div>
                    ) : null}

                    {block.type === "text" ? (
                      <div className="space-y-2">
                        <Label>Paragraph Text</Label>
                        <Textarea
                          value={block.text || ""}
                          onChange={(event) =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, text: event.target.value } : item)))
                          }
                        />
                      </div>
                    ) : null}

                    {block.type === "image" ? (
                      <div className="space-y-2">
                        <Label>Image URL</Label>
                        <Input
                          placeholder="https://..."
                          value={block.imageUrl || ""}
                          onChange={(event) =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, imageUrl: event.target.value } : item)))
                          }
                        />
                        <Label>Image Alt Text</Label>
                        <Input
                          value={block.imageAlt || ""}
                          onChange={(event) =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, imageAlt: event.target.value } : item)))
                          }
                        />
                      </div>
                    ) : null}

                    {block.type === "button" ? (
                      <div className="space-y-2">
                        <Label>Button Label</Label>
                        <Input
                          value={block.buttonLabel || ""}
                          onChange={(event) =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, buttonLabel: event.target.value } : item)))
                          }
                        />
                        <Label>Button Link URL</Label>
                        <Input
                          placeholder="/contact"
                          value={block.buttonHref || ""}
                          onChange={(event) =>
                            setBlocks((prev) => prev.map((item) => (item.id === block.id ? { ...item, buttonHref: event.target.value } : item)))
                          }
                        />
                      </div>
                    ) : null}

                    {block.type === "cardRow" ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Flex Cards</Label>
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              setBlocks((prev) =>
                                prev.map((item) =>
                                  item.id === block.id
                                    ? {
                                        ...item,
                                        cards: [
                                          ...(item.cards || []),
                                          {
                                            id: makeId("card"),
                                            title: "Card title",
                                            description: "Card description",
                                            imageUrl: "",
                                            linkLabel: "Read more",
                                            linkHref: "#",
                                          },
                                        ],
                                      }
                                    : item,
                                ),
                              )
                            }
                          >
                            + Add Card
                          </Button>
                        </div>

                        {(block.cards || []).map((card) => (
                          <div key={card.id} className="rounded border p-3 space-y-2">
                            <Input
                              placeholder="Card title"
                              value={card.title}
                              onChange={(event) =>
                                setBlocks((prev) =>
                                  prev.map((item) =>
                                    item.id === block.id
                                      ? {
                                          ...item,
                                          cards: (item.cards || []).map((c) =>
                                            c.id === card.id ? { ...c, title: event.target.value } : c,
                                          ),
                                        }
                                      : item,
                                  ),
                                )
                              }
                            />
                            <Textarea
                              placeholder="Card description"
                              value={card.description}
                              onChange={(event) =>
                                setBlocks((prev) =>
                                  prev.map((item) =>
                                    item.id === block.id
                                      ? {
                                          ...item,
                                          cards: (item.cards || []).map((c) =>
                                            c.id === card.id ? { ...c, description: event.target.value } : c,
                                          ),
                                        }
                                      : item,
                                  ),
                                )
                              }
                            />
                            <Input
                              placeholder="Image URL (optional)"
                              value={card.imageUrl || ""}
                              onChange={(event) =>
                                setBlocks((prev) =>
                                  prev.map((item) =>
                                    item.id === block.id
                                      ? {
                                          ...item,
                                          cards: (item.cards || []).map((c) =>
                                            c.id === card.id ? { ...c, imageUrl: event.target.value } : c,
                                          ),
                                        }
                                      : item,
                                  ),
                                )
                              }
                            />
                            <div className="grid md:grid-cols-2 gap-2">
                              <Input
                                placeholder="Link label"
                                value={card.linkLabel || ""}
                                onChange={(event) =>
                                  setBlocks((prev) =>
                                    prev.map((item) =>
                                      item.id === block.id
                                        ? {
                                            ...item,
                                            cards: (item.cards || []).map((c) =>
                                              c.id === card.id ? { ...c, linkLabel: event.target.value } : c,
                                            ),
                                          }
                                        : item,
                                    ),
                                  )
                                }
                              />
                              <Input
                                placeholder="Link URL"
                                value={card.linkHref || ""}
                                onChange={(event) =>
                                  setBlocks((prev) =>
                                    prev.map((item) =>
                                      item.id === block.id
                                        ? {
                                            ...item,
                                            cards: (item.cards || []).map((c) =>
                                              c.id === card.id ? { ...c, linkHref: event.target.value } : c,
                                            ),
                                          }
                                        : item,
                                    ),
                                  )
                                }
                              />
                            </div>
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                setBlocks((prev) =>
                                  prev.map((item) =>
                                    item.id === block.id
                                      ? { ...item, cards: (item.cards || []).filter((c) => c.id !== card.id) }
                                      : item,
                                  ),
                                )
                              }
                            >
                              Remove Card
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}

                {!blocks.length ? <p className="text-sm text-muted-foreground">Add blocks to start building your page.</p> : null}
              </div>

              <div className="space-y-2">
                <Label>Live HTML Preview (Auto Generated)</Label>
                <Textarea readOnly className="min-h-[220px] font-mono text-xs" value={generatedHtml} />
              </div>
            </div>
          ) : null}

          {mode === "html" ? (
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
          ) : null}

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
