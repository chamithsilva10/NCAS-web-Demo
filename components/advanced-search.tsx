"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, Filter, Clock, FileText, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
  type: 'page' | 'document' | 'news' | 'program'
  date?: string
  tags?: string[]
}

interface SearchFilters {
  category: string
  type: string
  dateRange: string
}

export function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    category: "all",
    type: "all",
    dateRange: "all"
  })
  const [showFilters, setShowFilters] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: "1",
      title: "Corporate Plan 2023-2027",
      description: "NCAS Corporate Plan outlining organizational goals and development strategies.",
      url: "/about/corporate-plan-2023-2027",
      category: "About",
      type: "document",
      date: "2023-01-01",
      tags: ["corporate", "planning", "strategy"]
    },
    {
      id: "2",
      title: "Research Symposium 2024",
      description: "Annual research symposium showcasing latest research in humanities and social sciences.",
      url: "/information/symposium-2024",
      category: "Information",
      type: "program",
      date: "2024-12-01",
      tags: ["research", "symposium", "conference"]
    },
    {
      id: "3",
      title: "MPhil/PhD Registration",
      description: "Information and application process for MPhil and PhD programs at NCAS.",
      url: "/register",
      category: "Programs",
      type: "page",
      tags: ["mphil", "phd", "registration"]
    },
    {
      id: "4",
      title: "Latest News: Vacancies Available",
      description: "Current job openings and career opportunities at NCAS.",
      url: "/information/vacancies",
      category: "Information",
      type: "news",
      date: "2025-01-15",
      tags: ["vacancies", "jobs", "careers"]
    },
    {
      id: "5",
      title: "Digital Repository",
      description: "Access NCAS digital collection of research papers, theses, and publications.",
      url: "/library/digital-repository",
      category: "Library",
      type: "page",
      tags: ["digital", "repository", "publications"]
    },
    {
      id: "6",
      title: "Strategic Plan 2025-2029",
      description: "Comprehensive strategic plan outlining NCAS's vision and strategic direction.",
      url: "/about/strategic-plan-2025-2029",
      category: "About",
      type: "document",
      date: "2025-01-01",
      tags: ["strategic", "planning", "vision"]
    }
  ]

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('ncas-recent-searches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }

    // Close search on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const filteredResults = searchData.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = filters.category === "all" || item.category.toLowerCase() === filters.category.toLowerCase()
      const matchesType = filters.type === "all" || item.type === filters.type

      return matchesQuery && matchesCategory && matchesType
    })

    setResults(filteredResults)
    setIsLoading(false)

    // Save to recent searches
    if (searchQuery.trim() && !recentSearches.includes(searchQuery.trim())) {
      const updated = [searchQuery.trim(), ...recentSearches.slice(0, 4)]
      setRecentSearches(updated)
      localStorage.setItem('ncas-recent-searches', JSON.stringify(updated))
    }
  }

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    performSearch(searchQuery)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('ncas-recent-searches')
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return <FileText className="h-4 w-4" />
      case 'document': return <FileText className="h-4 w-4" />
      case 'news': return <Calendar className="h-4 w-4" />
      case 'program': return <Users className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'about': return 'bg-blue-100 text-blue-800'
      case 'grants': return 'bg-green-100 text-green-800'
      case 'programs': return 'bg-purple-100 text-purple-800'
      case 'information': return 'bg-orange-100 text-orange-800'
      case 'library': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Trigger Button */}
      <Button
        variant="ghost"
        size="sm"
        className="flex p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Search className="h-4 w-4" />
      </Button>

      {/* Advanced Search Modal */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[90vw] bg-background border border-border rounded-lg shadow-xl z-50">
          <div className="p-4">
            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search NCAS website..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-10"
                autoFocus
              />
              {query && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => {
                    setQuery("")
                    setResults([])
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>

            {/* Filters Toggle */}
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="text-sm"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-sm"
              >
                Close
              </Button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <Card className="mb-4">
                <CardContent className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="about">About</SelectItem>
                          <SelectItem value="grants">Grants</SelectItem>
                          <SelectItem value="programs">Programs</SelectItem>
                          <SelectItem value="information">Information</SelectItem>
                          <SelectItem value="library">Library</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Type</label>
                      <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
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
            )}

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-sm text-muted-foreground mt-2">Searching...</p>
                </div>
              ) : query ? (
                results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className="block"
                      >
                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                          <CardContent className="p-3">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1">
                                {getTypeIcon(result.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">{result.title}</h4>
                                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                  {result.description}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge className={`text-xs ${getCategoryColor(result.category)}`}>
                                    {result.category}
                                  </Badge>
                                  {result.date && (
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {new Date(result.date).toLocaleDateString()}
                                    </span>
                                  )}
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
                    <p className="text-xs text-muted-foreground mt-1">Try adjusting your search terms or filters</p>
                  </div>
                )
              ) : (
                /* Recent Searches */
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Recent Searches
                    </h4>
                    {recentSearches.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRecentSearches}
                        className="text-xs h-6 px-2"
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                  {recentSearches.length > 0 ? (
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No recent searches
                    </p>
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