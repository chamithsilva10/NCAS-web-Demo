import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Eye, Users, ExternalLink } from "lucide-react"

export default function JournalPage() {
  const currentIssue = {
    volume: "Volume 13, Number 2",
    year: "2024",
    theme: "Digital Humanities in South Asia",
    published: "December 2024",
    articles: 8,
    pages: 156,
    coverImage: "/journal-cover-current.jpg",
  }

  const featuredArticles = [
    {
      title: "Machine Learning Applications in Archaeological Site Documentation: A Sri Lankan Case Study",
      authors: ["Dr. Priya Jayawardena", "Prof. Michael Chen", "Dr. Sandun Perera"],
      pages: "15-34",
      abstract:
        "This paper explores the application of machine learning techniques in documenting archaeological sites in Sri Lanka, presenting a novel framework for automated artifact classification and site mapping.",
      keywords: ["Machine Learning", "Archaeology", "Digital Documentation", "Sri Lanka"],
      doi: "10.1234/ncas.2024.13.2.001",
    },
    {
      title: "Digital Storytelling and Cultural Preservation: Community-Based Approaches in South Asia",
      authors: ["Dr. Nimesha Fernando", "Prof. Sarah Williams"],
      pages: "35-58",
      abstract:
        "An examination of community-based digital storytelling initiatives across South Asia, analyzing their effectiveness in preserving intangible cultural heritage and promoting cultural continuity.",
      keywords: ["Digital Storytelling", "Cultural Preservation", "Community Engagement", "South Asia"],
      doi: "10.1234/ncas.2024.13.2.002",
    },
    {
      title: "Virtual Reality in Historical Education: Reconstructing Colonial Colombo",
      authors: ["Dr. Roshan Silva", "Ms. Chamari Wickramasinghe", "Dr. James Thompson"],
      pages: "59-82",
      abstract:
        "This study presents a virtual reality application for historical education, featuring a detailed reconstruction of colonial-era Colombo and its educational impact on university students.",
      keywords: ["Virtual Reality", "Historical Education", "Colonial History", "Colombo"],
      doi: "10.1234/ncas.2024.13.2.003",
    },
  ]

  const recentIssues = [
    {
      volume: "Volume 13, Number 1",
      year: "2024",
      theme: "Social Media and Cultural Change",
      articles: 6,
      published: "June 2024",
    },
    {
      volume: "Volume 12, Number 2",
      year: "2023",
      theme: "Post-Colonial Literature Studies",
      articles: 7,
      published: "December 2023",
    },
    {
      volume: "Volume 12, Number 1",
      year: "2023",
      theme: "Environmental Humanities",
      articles: 5,
      published: "June 2023",
    },
    {
      volume: "Volume 11, Number 2",
      year: "2022",
      theme: "Gender and Development",
      articles: 8,
      published: "December 2022",
    },
  ]

  const editorialBoard = [
    {
      name: "Prof. Malini Silva",
      position: "Editor-in-Chief",
      affiliation: "NCAS",
      expertise: "Cultural Anthropology, Digital Humanities",
    },
    {
      name: "Dr. Asanka Perera",
      position: "Associate Editor",
      affiliation: "University of Colombo",
      expertise: "Development Economics, Social Policy",
    },
    {
      name: "Prof. Sarah Johnson",
      position: "International Editor",
      affiliation: "Queensland University of Technology, Australia",
      expertise: "Digital Heritage, Museum Studies",
    },
    {
      name: "Dr. Rajesh Kochhar",
      position: "Editorial Board Member",
      affiliation: "IISER, India",
      expertise: "History of Science, Science Policy",
    },
    {
      name: "Prof. Emma Wilson",
      position: "Editorial Board Member",
      affiliation: "University of Cambridge, UK",
      expertise: "Post-Colonial Studies, Literature",
    },
    {
      name: "Dr. Priya Fernando",
      position: "Managing Editor",
      affiliation: "NCAS",
      expertise: "Digital Publishing, Information Science",
    },
  ]

  const submissionGuidelines = [
    {
      category: "Article Types",
      items: [
        "Original Research Articles (5,000-8,000 words)",
        "Review Articles (6,000-10,000 words)",
        "Short Communications (2,000-3,000 words)",
        "Book Reviews (1,000-1,500 words)",
      ],
    },
    {
      category: "Formatting Requirements",
      items: [
        "APA 7th edition citation style",
        "Double-spaced, 12pt Times New Roman",
        "Abstract: 150-250 words",
        "Keywords: 5-7 terms",
      ],
    },
    {
      category: "Review Process",
      items: [
        "Double-blind peer review",
        "Initial review: 4-6 weeks",
        "Revision period: 8 weeks",
        "Final decision: 2-3 weeks",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">NCAS Journal</h1>
                <p className="text-xl text-primary-foreground/90">Humanities & Social Sciences Research</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Peer-reviewed academic journal publishing cutting-edge research in humanities and social sciences
            </p>
            <div className="flex items-center justify-center gap-8 text-primary-foreground/90">
              <div className="text-center">
                <div className="text-2xl font-bold">13</div>
                <div className="text-sm">Volumes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2.3</div>
                <div className="text-sm">Impact Factor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="current" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="current">Current Issue</TabsTrigger>
            <TabsTrigger value="archives">Archives</TabsTrigger>
            <TabsTrigger value="submit">Submit</TabsTrigger>
            <TabsTrigger value="editorial">Editorial Board</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* Current Issue Tab */}
          <TabsContent value="current" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Current Issue</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Latest research and scholarly articles from our current publication
              </p>
            </div>

            {/* Current Issue Overview */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <div className="text-center">
                      <Button className="w-full mb-2">
                        <Download className="h-4 w-4 mr-2" />
                        Download Full Issue
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Read Online
                      </Button>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{currentIssue.volume}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{currentIssue.theme}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{currentIssue.year}</Badge>
                        <Badge variant="outline">{currentIssue.published}</Badge>
                        <Badge variant="outline">{currentIssue.articles} articles</Badge>
                        <Badge variant="outline">{currentIssue.pages} pages</Badge>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{currentIssue.articles}</div>
                        <div className="text-sm text-muted-foreground">Articles</div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{currentIssue.pages}</div>
                        <div className="text-sm text-muted-foreground">Pages</div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">Open</div>
                        <div className="text-sm text-muted-foreground">Access</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Articles */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Featured Articles</h3>
              {featuredArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2 text-balance">{article.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Users className="h-4 w-4" />
                        <span>{article.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>Pages: {article.pages}</span>
                        <span>DOI: {article.doi}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{article.abstract}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Read Abstract
                      </Button>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Cite Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Archives Tab */}
          <TabsContent value="archives" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Journal Archives</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse our complete collection of published issues and articles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentIssues.map((issue, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{issue.volume}</h3>
                    <p className="text-primary font-medium mb-2">{issue.theme}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{issue.year}</Badge>
                      <Badge variant="outline">{issue.articles} articles</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Published: {issue.published}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Archive Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search Archives</CardTitle>
                <CardDescription>Find specific articles, authors, or topics across all issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="mb-4">
                    Advanced Search
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Search by author, title, keyword, or publication date • Full-text search available
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submit Tab */}
          <TabsContent value="submit" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Submit Your Research</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Guidelines and procedures for submitting manuscripts to NCAS Journal
              </p>
            </div>

            {/* Submission Guidelines */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {submissionGuidelines.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Submission Process */}
            <Card>
              <CardHeader>
                <CardTitle>Submission Process</CardTitle>
                <CardDescription>Step-by-step guide to submitting your manuscript</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Prepare Manuscript</h4>
                    <p className="text-sm text-muted-foreground">Format according to guidelines</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Online Submission</h4>
                    <p className="text-sm text-muted-foreground">Submit via our portal</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Peer Review</h4>
                    <p className="text-sm text-muted-foreground">Double-blind review process</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Publication</h4>
                    <p className="text-sm text-muted-foreground">Online and print publication</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submission Portal */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Ready to Submit?</CardTitle>
                <CardDescription className="text-green-700">
                  Access our online submission portal to begin the process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 mb-4">
                    Submit Manuscript
                  </Button>
                  <p className="text-sm text-green-700">
                    New users will need to create an account • Existing users can log in directly
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Editorial Board Tab */}
          <TabsContent value="editorial" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Editorial Board</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Distinguished scholars and experts guiding our publication standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editorialBoard.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-muted-foreground mb-2">{member.affiliation}</p>
                    <p className="text-xs text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Editorial Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Editorial Policies</CardTitle>
                <CardDescription>Our commitment to academic integrity and publishing excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Quality Standards</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Rigorous double-blind peer review</li>
                      <li>• International editorial board oversight</li>
                      <li>• Adherence to COPE guidelines</li>
                      <li>• Regular impact assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ethical Guidelines</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Plagiarism detection and prevention</li>
                      <li>• Conflict of interest disclosure</li>
                      <li>• Research ethics compliance</li>
                      <li>• Open access commitment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">About NCAS Journal</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our mission, scope, and commitment to advancing humanities and social sciences research
              </p>
            </div>

            {/* Journal Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mission & Scope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The NCAS Journal serves as a premier platform for publishing high-quality research in humanities and
                    social sciences, with particular focus on South Asian studies, digital humanities, and
                    interdisciplinary approaches to cultural and social phenomena.
                  </p>
                  <h4 className="font-semibold mb-2">Research Areas</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Cultural Studies and Anthropology</li>
                    <li>• Digital Humanities and Technology</li>
                    <li>• Post-Colonial Studies</li>
                    <li>• Development Studies</li>
                    <li>• Philosophy and Ethics</li>
                    <li>• History and Heritage Studies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Publication Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Publication Schedule</h4>
                      <p className="text-sm text-muted-foreground">Bi-annual publication (June and December)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">ISSN</h4>
                      <p className="text-sm text-muted-foreground">Print: 1234-5678 | Online: 8765-4321</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Indexing</h4>
                      <p className="text-sm text-muted-foreground">
                        Indexed in major academic databases and citation indices
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Access Policy</h4>
                      <p className="text-sm text-muted-foreground">Open access with Creative Commons licensing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact and Recognition */}
            <Card>
              <CardHeader>
                <CardTitle>Impact & Recognition</CardTitle>
                <CardDescription>Our journal's contribution to academic discourse</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2.3</div>
                    <p className="text-sm text-muted-foreground">Impact Factor</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">156</div>
                    <p className="text-sm text-muted-foreground">Articles Published</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">45</div>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">12K+</div>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Contact Editorial Office</CardTitle>
                <CardDescription className="text-blue-700">
                  Get in touch with our editorial team for inquiries and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Editorial Office</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <p>
                        <strong>Email:</strong> journal@ncas.ac.lk
                      </p>
                      <p>
                        <strong>Phone:</strong> +94 11 269 1056 (Ext. 301)
                      </p>
                      <p>
                        <strong>Address:</strong> NCAS, No. 35/2, Kynsey Road, Colombo 08, Sri Lanka
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">For Authors</h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Questions about submissions, review process, or publication procedures? Our editorial team is here
                      to help.
                    </p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Contact Editorial Team
                    </Button>
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
