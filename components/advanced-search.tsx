"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Calendar, Clock, FileText, Filter, Search, Users, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type SearchType = "page" | "document" | "news" | "program"

type SearchResult = {
  id: string
  title: string
  description: string
  url: string
  category: string
  type: SearchType
  date?: string
  tags?: string[]
}

type SearchFilters = {
  category: string
  type: string
}

export function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [items, setItems] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({ category: "all", type: "all" })
  const [showFilters, setShowFilters] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem("ncas-recent-searches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!searchRef.current || !isOpen) {
        return
      }

      if (!searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEsc)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || items.length) {
      return
    }

    const loadSearchItems = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/search", { cache: "no-store" })
        const payload = (await response.json()) as { items?: SearchResult[] }
        setItems(payload.items || [])
      } catch {
        setItems([])
      } finally {
        setIsLoading(false)
      }
    }

    loadSearchItems()
  }, [isOpen, items.length])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = oldOverflow
    }
  }, [isOpen])

  const categories = useMemo(() => {
    const base = new Set<string>()
    for (const item of items) {
      base.add(item.category)
    }
    return ["all", ...Array.from(base).sort((a, b) => a.localeCompare(b))]
  }, [items])

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) {
      return []
    }

    return items.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.url.toLowerCase().includes(normalizedQuery) ||
        (item.tags || []).some((tag) => tag.toLowerCase().includes(normalizedQuery))

      const matchesCategory = filters.category === "all" || item.category === filters.category
      const matchesType = filters.type === "all" || item.type === filters.type

      return matchesQuery && matchesCategory && matchesType
    })
  }, [filters.category, filters.type, items, query])

  const saveRecentSearch = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed || recentSearches.includes(trimmed)) {
      return
    }

    const updated = [trimmed, ...recentSearches].slice(0, 6)
    setRecentSearches(updated)
    localStorage.setItem("ncas-recent-searches", JSON.stringify(updated))
  }

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.trim().length > 2) {
      saveRecentSearch(value)
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("ncas-recent-searches")
  }

  const getTypeIcon = (type: SearchType) => {
    if (type === "news") return <Calendar className="h-4 w-4" />
    if (type === "program") return <Users className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "about":
        return "bg-blue-100 text-blue-800"
      case "grants":
        return "bg-green-100 text-green-800"
      case "programs":
        return "bg-cyan-100 text-cyan-800"
      case "information":
        return "bg-orange-100 text-orange-800"
      case "library":
        return "bg-red-100 text-red-800"
      case "news":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      <Button
        variant="ghost"
        size="sm"
        className="search-button flex p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/20"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Search className="h-4 w-4" />
      </Button>

      {isOpen ? <div className="fixed inset-0 z-40 bg-black/40 md:hidden" /> : null}

      {isOpen && (
        <div className="fixed z-50 inset-x-2 top-24 bottom-2 rounded-xl bg-background border border-border shadow-xl md:absolute md:top-full md:right-0 md:left-auto md:inset-y-auto md:mt-2 md:w-[36rem] md:max-w-[95vw] md:bottom-auto md:rounded-lg">
          <div className="p-3 sm:p-4 h-full flex flex-col">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search pages, programs, grants, news..."
                value={query}
                onChange={(event) => handleSearch(event.target.value)}
                className="pl-10 pr-10"
                autoFocus
              />
              {query ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setQuery("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              ) : null}
            </div>

            <div className="flex items-center justify-between mb-3 gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowFilters((prev) => !prev)} className="text-sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-sm">
                Close
              </Button>
            </div>

            {showFilters ? (
              <Card className="mb-3">
                <CardContent className="p-3 sm:p-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Category</label>
                      <Select value={filters.category} onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category === "all" ? "All Categories" : category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Type</label>
                      <Select value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="page">Pages</SelectItem>
                          <SelectItem value="document">Documents</SelectItem>
                          <SelectItem value="news">News</SelectItem>
                          <SelectItem value="program">Programs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : null}

            <div className="flex-1 min-h-0 overflow-y-auto">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">Loading search index...</p>
                </div>
              ) : query.trim() ? (
                filteredResults.length ? (
                  <div className="space-y-2">
                    {filteredResults.map((result) => (
                      <Link key={result.id} href={result.url} onClick={() => setIsOpen(false)} className="block">
                        <Card className="hover:bg-muted/60 transition-colors cursor-pointer">
                          <CardContent className="p-3">
                            <div className="flex items-start gap-3">
                              <div className="mt-1 text-muted-foreground">{getTypeIcon(result.type)}</div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">{result.title}</h4>
                                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{result.description}</p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                  <Badge className={`text-xs ${getCategoryColor(result.category)}`}>{result.category}</Badge>
                                  <span className="text-xs text-muted-foreground">{result.url}</span>
                                  {result.date ? (
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {new Date(result.date).toLocaleDateString()}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
                    <p className="text-xs text-muted-foreground mt-1">Try a broader word like grants, library, programs, or news</p>
                  </div>
                )
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Recent Searches
                    </h4>
                    {recentSearches.length ? (
                      <Button variant="ghost" size="sm" onClick={clearRecentSearches} className="text-xs h-6 px-2">
                        Clear
                      </Button>
                    ) : null}
                  </div>

                  {recentSearches.length ? (
                    <div className="space-y-1">
                      {recentSearches.map((search) => (
                        <button
                          key={search}
                          onClick={() => handleSearch(search)}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">Start typing to search the site</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}