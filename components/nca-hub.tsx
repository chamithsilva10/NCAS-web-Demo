"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Compass,
  Download,
  ExternalLink,
  GraduationCap,
  Info,
  Megaphone,
  Search,
  Sparkles,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { NCA_FALLBACK_UPDATES, NCA_LINK_CATEGORIES, NCA_QUICK_ACCESS } from "@/lib/nca-hub-data"

type UpdateItem = {
  title: string
  description: string
  href: string
  date: string
}

type IconType = (props: { className?: string }) => JSX.Element

const ICONS: Record<string, IconType> = {
  academic: GraduationCap,
  admissions: Compass,
  "student-services": Users,
  "news-events": Megaphone,
  resources: Download,
  "about-contact": Info,
}

function isNewDate(date: string) {
  const now = Date.now()
  const then = new Date(date).getTime()
  const diff = now - then
  return diff >= 0 && diff < 1000 * 60 * 60 * 24 * 45
}

function formatDate(date: string) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return "Recent"
  return parsed.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function NcaHub() {
  const [query, setQuery] = useState("")
  const [updates, setUpdates] = useState<UpdateItem[]>(NCA_FALLBACK_UPDATES)
  const [loadingUpdates, setLoadingUpdates] = useState(true)

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q")
    if (q) setQuery(q)
  }, [])

  useEffect(() => {
    async function loadUpdates() {
      try {
        const response = await fetch("/api/ncas-updates")
        if (!response.ok) return
        const payload = await response.json()
        if (Array.isArray(payload?.updates) && payload.updates.length > 0) {
          setUpdates(payload.updates)
        }
      } finally {
        setLoadingUpdates(false)
      }
    }

    loadUpdates()
  }, [])

  const filteredCategories = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return NCA_LINK_CATEGORIES

    return NCA_LINK_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const haystack = `${item.title} ${item.description} ${item.href}`.toLowerCase()
        return haystack.includes(needle)
      }),
    })).filter((category) => category.items.length > 0)
  }, [query])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_42%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_45%,#f8fafc_100%)]">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-blue-200/60 bg-white/65 p-8 shadow-xl backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-600">Integrated NCA Hub</Badge>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                NCAS Direct Links, Updates, and Quick Access
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                A centralized and maintainable integration layer for important NCAS links and newly added items,
                designed for fast access on desktop and mobile.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {NCA_QUICK_ACCESS.slice(0, 4).map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow"
                  >
                    {item.title}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white/85 p-5 shadow-sm">
              <label className="mb-2 block text-sm font-medium text-slate-700">Search links and pages</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search programs, grants, galleries, contact..."
                  className="pl-9"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">Tip: search by keywords like "grant", "symposium", or "library".</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Quick Access</h2>
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NCA_QUICK_ACCESS.map((item) => (
              <Card key={item.title} className="border-blue-100 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    {item.title}
                    {item.isNew ? <Badge className="bg-emerald-600 text-white">NEW</Badge> : null}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="gap-1">
                      Open NCAS
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                  {item.localHref ? (
                    <Link href={item.localHref}>
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Open Here</Button>
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {filteredCategories.map((category) => {
              const Icon = ICONS[category.key] || BookOpen
              return (
                <Card key={category.key} className="overflow-hidden border-blue-100 bg-white/92 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                      <Icon className="h-5 w-5 text-blue-600" />
                      {category.label}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-5">
                    {category.items.map((item) => (
                      <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-slate-900">{item.title}</h3>
                          {item.isNew ? <Badge className="bg-emerald-600 text-white">NEW</Badge> : null}
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex">
                            <Button size="sm" variant="outline" className="gap-1">
                              Open NCAS Link
                              <ExternalLink className="h-3.5 w-3.5" />
                            </Button>
                          </a>
                          {item.localHref ? (
                            <Link href={item.localHref} className="inline-flex">
                              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Open Local Page</Button>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
            {!filteredCategories.length ? (
              <Card className="border-dashed border-slate-300 bg-white/90">
                <CardContent className="p-10 text-center text-slate-500">No links match your search. Try a broader keyword.</CardContent>
              </Card>
            ) : null}
          </div>

          <div className="space-y-5">
            <Card className="border-blue-100 bg-white/92 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Latest Updates</CardTitle>
                <CardDescription>Newest announcements and content pulled from NCAS sitemap.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {updates.slice(0, 6).map((update) => (
                  <div key={`${update.href}-${update.date}`} className="rounded-lg border border-slate-200 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="line-clamp-2 text-sm font-medium text-slate-900">{update.title}</p>
                      {isNewDate(update.date) ? <Badge className="bg-emerald-600 text-white">NEW</Badge> : null}
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-600">{update.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500">{formatDate(update.date)}</span>
                      <a href={update.href} target="_blank" rel="noreferrer" className="text-xs font-medium text-blue-700 hover:text-blue-900">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
                <a href="https://ncas.ac.lk/" target="_blank" rel="noreferrer" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    View All Updates
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
                {loadingUpdates ? <p className="text-center text-xs text-slate-400">Loading live updates...</p> : null}
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-white/92 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Integration Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>All external links are configured to open in a new tab.</p>
                <p>Link definitions are centralized in one data module for easy future updates.</p>
                <p>Latest updates are dynamic with a static fallback for reliability.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
