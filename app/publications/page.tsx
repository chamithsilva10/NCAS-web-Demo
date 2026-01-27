import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, ExternalLink, Search, Filter, Calendar, User } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "Digital Heritage Preservation in the 21st Century: Challenges and Opportunities",
    authors: ["Dr. Samantha Perera", "Prof. Michael Johnson", "Dr. Raj Patel"],
    journal: "International Journal of Cultural Heritage",
    year: 2024,
    volume: "15",
    issue: "2",
    pages: "45-67",
    doi: "10.1080/13527258.2024.1234567",
    abstract:
      "This paper examines the evolving landscape of digital heritage preservation, analyzing current methodologies and emerging technologies that are reshaping how we document, preserve, and provide access to cultural heritage materials.",
    keywords: ["Digital Heritage", "Preservation", "Cultural Heritage", "Technology"],
    type: "Journal Article",
    openAccess: true,
    featured: true,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Social Policy and Community Development: A Comparative Analysis",
    authors: ["Prof. Sarah Williams", "Dr. Ahmed Hassan"],
    journal: "Journal of Social Policy Studies",
    year: 2024,
    volume: "28",
    issue: "1",
    pages: "12-34",
    doi: "10.1177/0958928724567890",
    abstract:
      "A comprehensive comparative analysis of social policy implementations across different regions, examining their effectiveness in promoting community development and social welfare.",
    keywords: ["Social Policy", "Community Development", "Comparative Analysis", "Welfare"],
    type: "Journal Article",
    openAccess: false,
    featured: true,
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Gender Equality in Higher Education: Progress and Challenges",
    authors: ["Dr. Priya Jayawardena", "Prof. Lisa Chen", "Dr. Maria Rodriguez"],
    journal: "Higher Education Review",
    year: 2023,
    volume: "42",
    issue: "4",
    pages: "78-95",
    doi: "10.1080/07294360.2023.2234567",
    abstract:
      "This study analyzes gender representation and equality measures in higher education institutions, identifying progress made and persistent challenges in achieving gender parity.",
    keywords: ["Gender Equality", "Higher Education", "Academic Institutions", "Policy"],
    type: "Journal Article",
    openAccess: true,
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Climate Change and Social Adaptation in South Asia",
    authors: ["Prof. Rajesh Kumar", "Dr. Anita Sharma"],
    publisher: "Academic Press",
    year: 2023,
    pages: "256",
    isbn: "978-0-12-345678-9",
    abstract:
      "A comprehensive examination of how South Asian communities are adapting to climate change, exploring social, cultural, and economic dimensions of adaptation strategies.",
    keywords: ["Climate Change", "Social Adaptation", "South Asia", "Community Resilience"],
    type: "Book",
    openAccess: false,
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Urban Studies and Social Geography: New Perspectives",
    authors: ["Dr. James Thompson", "Prof. Elena Rossi", "Dr. Kenji Tanaka"],
    conference: "International Conference on Urban Studies",
    year: 2023,
    pages: "145-152",
    abstract:
      "This paper presents new perspectives on urban studies and social geography, examining how urbanization processes affect social structures and community dynamics.",
    keywords: ["Urban Studies", "Social Geography", "Urbanization", "Community"],
    type: "Conference Paper",
    openAccess: true,
    downloadUrl: "#",
  },
]

const publicationTypes = [
  { type: "All", count: 156, active: true },
  { type: "Journal Articles", count: 89, active: false },
  { type: "Books", count: 23, active: false },
  { type: "Conference Papers", count: 34, active: false },
  { type: "Reports", count: 10, active: false },
]

const recentAwards = [
  {
    title: "Best Research Paper Award",
    recipient: "Dr. Samantha Perera",
    organization: "International Heritage Studies Association",
    year: 2024,
    publication: "Digital Heritage Preservation in the 21st Century",
  },
  {
    title: "Outstanding Contribution to Social Policy",
    recipient: "Prof. Sarah Williams",
    organization: "Social Policy Research Network",
    year: 2023,
    publication: "Social Policy and Community Development",
  },
  {
    title: "Excellence in Gender Studies Research",
    recipient: "Dr. Priya Jayawardena",
    organization: "International Gender Studies Council",
    year: 2023,
    publication: "Gender Equality in Higher Education",
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Publications</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our latest research publications and scholarly contributions to humanities and social sciences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Search Publications
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {publicationTypes.map((type, index) => (
                <Card
                  key={index}
                  className={`text-center cursor-pointer transition-all duration-200 ${
                    type.active ? "border-primary bg-primary/5" : "hover:shadow-md"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-foreground mb-1">{type.count}</div>
                    <div className="text-sm text-muted-foreground">{type.type}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search publications by title, author, or keyword..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Year
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Publications */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Publications</h2>

            <div className="space-y-6">
              {publications
                .filter((pub) => pub.featured)
                .map((publication) => (
                  <Card key={publication.id} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="default">{publication.type}</Badge>
                            {publication.openAccess && <Badge variant="secondary">Open Access</Badge>}
                          </div>
                          <CardTitle className="text-xl mb-2">{publication.title}</CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <User className="h-4 w-4 mr-1" />
                            {publication.authors.join(", ")}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary">{publication.year}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{publication.abstract}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.keywords.map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          {publication.journal && (
                            <div>
                              <span className="text-muted-foreground">Journal: </span>
                              <span className="font-medium">{publication.journal}</span>
                            </div>
                          )}
                          {publication.publisher && (
                            <div>
                              <span className="text-muted-foreground">Publisher: </span>
                              <span className="font-medium">{publication.publisher}</span>
                            </div>
                          )}
                          {publication.conference && (
                            <div>
                              <span className="text-muted-foreground">Conference: </span>
                              <span className="font-medium">{publication.conference}</span>
                            </div>
                          )}
                        </div>
                        <div>
                          {publication.volume && (
                            <div>
                              <span className="text-muted-foreground">Volume: </span>
                              <span className="font-medium">
                                {publication.volume}
                                {publication.issue && `(${publication.issue})`}
                              </span>
                            </div>
                          )}
                          <div>
                            <span className="text-muted-foreground">Pages: </span>
                            <span className="font-medium">{publication.pages}</span>
                          </div>
                          {publication.doi && (
                            <div>
                              <span className="text-muted-foreground">DOI: </span>
                              <span className="font-medium text-primary">{publication.doi}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Online
                        </Button>
                        <Button variant="outline">Cite</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Recent Publications Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Recent Publications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications
                .filter((pub) => !pub.featured)
                .map((publication) => (
                  <Card key={publication.id} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{publication.type}</Badge>
                        <span className="text-sm font-medium text-primary">{publication.year}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {publication.authors.slice(0, 2).join(", ")}
                        {publication.authors.length > 2 && " et al."}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{publication.abstract}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {publication.keywords.slice(0, 3).map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-1 h-3 w-3" />
                          PDF
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Publications
              </Button>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our publications have received recognition from leading academic organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentAwards.map((award, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{award.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{award.recipient}</p>
                    <p className="text-muted-foreground text-xs mb-3">{award.organization}</p>
                    <Badge variant="secondary">{award.year}</Badge>
                    <p className="text-muted-foreground text-xs mt-3 italic">{award.publication}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
