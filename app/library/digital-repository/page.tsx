import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, Eye, BookOpen, FileText, Users, Calendar } from "lucide-react"

export default function DigitalRepositoryPage() {
  const collections = [
    {
      name: "PhD Dissertations",
      count: 145,
      description: "Doctoral dissertations from NCAS graduates",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "MPhil Theses",
      count: 298,
      description: "Master of Philosophy research theses",
      icon: FileText,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Research Papers",
      count: 567,
      description: "Published research papers by NCAS faculty and students",
      icon: FileText,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Conference Proceedings",
      count: 234,
      description: "Papers from international symposiums and conferences",
      icon: Users,
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const recentAdditions = [
    {
      title: "Digital Preservation of Sri Lankan Cultural Heritage: A Comprehensive Framework",
      author: "Dr. Samantha Perera",
      type: "PhD Dissertation",
      year: "2024",
      department: "Digital Humanities",
      downloads: 156,
      abstract:
        "This research develops a comprehensive framework for digital preservation of Sri Lankan cultural heritage, addressing technical, cultural, and institutional challenges...",
    },
    {
      title: "Gender Dynamics in Contemporary Sri Lankan Cinema: A Post-Colonial Analysis",
      author: "Ms. Nimesha Silva",
      type: "MPhil Thesis",
      year: "2024",
      department: "Cultural Studies",
      downloads: 89,
      abstract:
        "An examination of gender representation in Sri Lankan cinema from 1990-2020, analyzing the evolution of female characters and feminist themes...",
    },
    {
      title: "Social Impact of Microfinance in Rural Communities: Evidence from Sri Lanka",
      author: "Dr. Rohan Fernando",
      type: "Research Paper",
      year: "2024",
      department: "Development Studies",
      downloads: 234,
      abstract:
        "This study evaluates the social impact of microfinance programs in rural Sri Lankan communities, focusing on women's empowerment and community development...",
    },
    {
      title: "Buddhist Philosophy and Environmental Ethics: A Contemporary Perspective",
      author: "Prof. Chandana Wickramasinghe",
      type: "Research Paper",
      year: "2024",
      department: "Philosophy",
      downloads: 178,
      abstract:
        "Exploring the intersection of Buddhist philosophy and environmental ethics, this paper examines how traditional Buddhist concepts can inform contemporary environmental discourse...",
    },
  ]

  const featuredCollections = [
    {
      title: "Heritage and Identity Studies",
      description: "Research on cultural heritage, identity formation, and social transformation",
      items: 89,
      image: "/cultural-heritage-research.jpg",
    },
    {
      title: "Digital Humanities Projects",
      description: "Innovative research combining humanities scholarship with digital technologies",
      items: 45,
      image: "/digital-humanities-lab.jpg",
    },
    {
      title: "Post-Colonial Studies",
      description: "Critical analysis of post-colonial literature, culture, and society",
      items: 67,
      image: "/postcolonial-literature.jpg",
    },
  ]

  const searchFilters = [
    { label: "All Types", value: "all" },
    { label: "PhD Dissertations", value: "phd" },
    { label: "MPhil Theses", value: "mphil" },
    { label: "Research Papers", value: "papers" },
    { label: "Conference Proceedings", value: "proceedings" },
  ]

  const departments = [
    { label: "All Departments", value: "all" },
    { label: "Digital Humanities", value: "digital-humanities" },
    { label: "Cultural Studies", value: "cultural-studies" },
    { label: "Development Studies", value: "development-studies" },
    { label: "Philosophy", value: "philosophy" },
    { label: "History", value: "history" },
    { label: "Anthropology", value: "anthropology" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Digital Repository</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Comprehensive collection of academic research, theses, and scholarly publications from NCAS
            </p>
            <div className="flex items-center justify-center gap-8 text-primary-foreground/90">
              <div className="text-center">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Search Repository</CardTitle>
            <CardDescription>Find academic works by title, author, keyword, or subject area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by title, author, or keywords..." className="pl-10" />
                </div>
                <Button>Search</Button>
              </div>
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Document Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {searchFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value}>
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="browse" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Collections</TabsTrigger>
            <TabsTrigger value="recent">Recent Additions</TabsTrigger>
            <TabsTrigger value="featured">Featured Collections</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          {/* Browse Collections Tab */}
          <TabsContent value="browse" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Browse by Collection</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our organized collections of academic works and research materials
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection, index) => {
                const IconComponent = collection.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{collection.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
                      <Badge className={collection.color}>{collection.count} items</Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>Popular searches and frequently accessed materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start bg-transparent">
                    Most Downloaded This Month
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Recently Published
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Award-Winning Research
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Open Access Materials
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Multimedia Resources
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    International Collaborations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Additions Tab */}
          <TabsContent value="recent" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Recent Additions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Latest research works and publications added to our repository
              </p>
            </div>

            <div className="space-y-6">
              {recentAdditions.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-balance">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.year}
                          </span>
                          <Badge variant="outline">{item.type}</Badge>
                          <Badge variant="secondary">{item.department}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{item.abstract}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        <Download className="h-4 w-4 inline mr-1" />
                        {item.downloads} downloads
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Results
              </Button>
            </div>
          </TabsContent>

          {/* Featured Collections Tab */}
          <TabsContent value="featured" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Curated collections highlighting significant research areas and themes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCollections.map((collection, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={collection.image || "/placeholder.svg?height=200&width=300"}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/50 text-white border-0">{collection.items} items</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{collection.title}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Explore Collection</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Special Collections */}
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">Special Collections</CardTitle>
                <CardDescription className="text-amber-700">
                  Unique and rare materials with restricted access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Historical Archives</h4>
                    <ul className="space-y-2 text-sm text-amber-700">
                      <li>• Colonial period documents and manuscripts</li>
                      <li>• Rare books and historical texts</li>
                      <li>• Personal papers of notable scholars</li>
                      <li>• Photographic collections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Access Information</h4>
                    <p className="text-sm text-amber-700 mb-3">
                      Special collections require advance permission and may have viewing restrictions. Contact the
                      library for access procedures.
                    </p>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Request Access
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="statistics" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Repository Statistics</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Usage statistics and growth metrics for our digital repository
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">2,544</div>
                  <p className="text-muted-foreground">Total Documents</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">52,340</div>
                  <p className="text-muted-foreground">Total Downloads</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">1,245</div>
                  <p className="text-muted-foreground">Unique Visitors</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">89</div>
                  <p className="text-muted-foreground">Countries</p>
                </CardContent>
              </Card>
            </div>

            {/* Growth Statistics */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Collection Growth</CardTitle>
                  <CardDescription>Documents added per year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>2024</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm">234</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2023</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                        <span className="text-sm">267</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2022</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-sm">198</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2021</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm">156</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Subjects</CardTitle>
                  <CardDescription>Most accessed research areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Cultural Studies</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                        <span className="text-sm">1,234</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Digital Humanities</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-sm">987</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Development Studies</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm">756</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Philosophy</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: "52%" }}></div>
                        </div>
                        <span className="text-sm">623</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Usage Information */}
            <Card>
              <CardHeader>
                <CardTitle>Repository Usage</CardTitle>
                <CardDescription>Access patterns and user engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">68%</div>
                    <p className="text-sm text-muted-foreground">Academic Users</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">24%</div>
                    <p className="text-sm text-muted-foreground">Student Users</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">8%</div>
                    <p className="text-sm text-muted-foreground">General Public</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
