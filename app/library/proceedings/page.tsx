import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Eye, Calendar, Users, Award, FileText } from "lucide-react"
import Link from "next/link"

export default function ProceedingsPage() {
  const symposiumProceedings = [
    {
      year: "2024",
      title: "6th International Research Symposium",
      theme: "Heritage, Identity and Transformation",
      date: "November 28, 2024",
      papers: 24,
      pages: 312,
      participants: 180,
      countries: 15,
      status: "Available",
    },
    {
      year: "2023",
      title: "5th International Research Symposium",
      theme: "Heritage and Culture: Re-visiting the late Professor Senake Dias Bandaranayake",
      date: "November 29, 2023",
      papers: 22,
      pages: 298,
      participants: 150,
      countries: 12,
      status: "Available",
    },
    {
      year: "2022",
      title: "4th International Research Symposium",
      theme: "Digital Humanities and Cultural Heritage",
      date: "December 15, 2022",
      papers: 18,
      pages: 245,
      participants: 120,
      countries: 10,
      status: "Available",
    },
    {
      year: "2021",
      title: "3rd International Research Symposium",
      theme: "Post-Colonial Studies in the Digital Age",
      date: "November 25, 2021",
      papers: 16,
      pages: 210,
      participants: 95,
      countries: 8,
      status: "Available",
    },
    {
      year: "2020",
      title: "2nd International Research Symposium",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 17, 2020",
      papers: 14,
      pages: 185,
      participants: 85,
      countries: 7,
      status: "Available",
    },
    {
      year: "2019",
      title: "1st International Research Symposium",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 19, 2019",
      papers: 12,
      pages: 165,
      participants: 75,
      countries: 6,
      status: "Available",
    },
    {
      year: "2018",
      title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2018",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 13-14, 2018",
      papers: 20,
      pages: 240,
      participants: 100,
      countries: 8,
      status: "Available",
    },
    {
      year: "2017",
      title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2017",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 14-15, 2017",
      papers: 18,
      pages: 220,
      participants: 90,
      countries: 7,
      status: "Available",
    },
    {
      year: "2016",
      title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2016",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 15-16, 2016",
      papers: 16,
      pages: 200,
      participants: 80,
      countries: 6,
      status: "Available",
    },
    {
      year: "2015",
      title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2015",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 17-18, 2015",
      papers: 14,
      pages: 180,
      participants: 70,
      countries: 5,
      status: "Available",
    },
    {
      year: "2014",
      title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2014",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 18-19, 2014",
      papers: 12,
      pages: 160,
      participants: 60,
      countries: 4,
      status: "Available",
    },
  ]

  const featuredPapers2024 = [
    {
      title: "Digital Preservation Strategies for Intangible Cultural Heritage in South Asia",
      authors: ["Dr. Priya Jayawardena", "Prof. Michael Chen"],
      affiliation: "NCAS & Queensland University of Technology",
      pages: "15-28",
      abstract:
        "This paper presents innovative digital preservation strategies specifically designed for intangible cultural heritage in South Asia, addressing the unique challenges of documenting oral traditions, performing arts, and cultural practices.",
      keywords: ["Digital Preservation", "Intangible Heritage", "South Asia", "Cultural Documentation"],
    },
    {
      title: "AI-Assisted Archaeological Site Documentation: A Case Study from Anuradhapura",
      authors: ["Dr. Sandun Perera", "Ms. Chamari Silva", "Prof. James Thompson"],
      affiliation: "NCAS & University of Cambridge",
      pages: "29-45",
      abstract:
        "An exploration of artificial intelligence applications in archaeological documentation, featuring a comprehensive case study of AI-assisted mapping and artifact classification at Anuradhapura ancient city.",
      keywords: ["Artificial Intelligence", "Archaeology", "Documentation", "Anuradhapura"],
    },
    {
      title: "Community-Based Heritage Management: Lessons from Rural Sri Lanka",
      authors: ["Dr. Nimesha Fernando", "Prof. Sarah Williams"],
      affiliation: "NCAS & University of Melbourne",
      pages: "46-62",
      abstract:
        "This study examines community-based approaches to heritage management in rural Sri Lankan contexts, analyzing successful models of local engagement and sustainable preservation practices.",
      keywords: ["Community Management", "Heritage Preservation", "Rural Development", "Sri Lanka"],
    },
  ]

  const workshopProceedings = [
    {
      title: "Digital Humanities Workshop 2024",
      theme: "Machine Learning in Cultural Analysis",
      date: "March 15, 2024",
      papers: 12,
      participants: 45,
      type: "Workshop",
    },
    {
      title: "Research Methodology Workshop 2024",
      theme: "Qualitative Research in Social Sciences",
      date: "February 20, 2024",
      papers: 8,
      participants: 35,
      type: "Workshop",
    },
    {
      title: "Heritage Documentation Workshop 2023",
      theme: "3D Scanning and Digital Modeling",
      date: "October 12, 2023",
      papers: 10,
      participants: 28,
      type: "Workshop",
    },
  ]

  const specialCollections = [
    {
      title: "Keynote Addresses Collection",
      description: "Distinguished keynote presentations from international scholars",
      count: 45,
      years: "2019-2024",
    },
    {
      title: "Best Paper Awards",
      description: "Award-winning papers from each symposium",
      count: 18,
      years: "2019-2024",
    },
    {
      title: "Student Research Papers",
      description: "Outstanding research presentations by graduate students",
      count: 67,
      years: "2020-2024",
    },
    {
      title: "Panel Discussion Summaries",
      description: "Comprehensive summaries of panel discussions and debates",
      count: 32,
      years: "2021-2024",
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
                <FileText className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Conference Proceedings</h1>
                <p className="text-xl text-primary-foreground/90">Research Papers & Presentations</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Comprehensive collection of research papers from international symposiums, workshops, and academic
              conferences
            </p>
            <div className="flex items-center justify-center gap-8 text-primary-foreground/90">
              <div className="text-center">
                <div className="text-2xl font-bold">11</div>
                <div className="text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">234</div>
                <div className="text-sm">Papers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Search Proceedings</CardTitle>
            <CardDescription>Find papers by title, author, year, or research topic</CardDescription>
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
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="symposium">International Symposium</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="conference">Conferences</SelectItem>
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
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                    <SelectItem value="2014">2014</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Research Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="digital-humanities">Digital Humanities</SelectItem>
                    <SelectItem value="cultural-studies">Cultural Studies</SelectItem>
                    <SelectItem value="heritage">Heritage Studies</SelectItem>
                    <SelectItem value="postcolonial">Post-Colonial Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="symposium" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="symposium">International Symposium</TabsTrigger>
            <TabsTrigger value="featured">Featured Papers</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="collections">Special Collections</TabsTrigger>
          </TabsList>

          {/* International Symposium Tab */}
          <TabsContent value="symposium" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">International Research Symposium Proceedings</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Annual symposium proceedings featuring research from international scholars
              </p>
            </div>

            <div className="space-y-6">
              {symposiumProceedings.map((symposium, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{symposium.title}</h3>
                            <p className="text-primary font-medium mb-2">{symposium.theme}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {symposium.date}
                              </span>
                              <Badge variant="secondary">{symposium.year}</Badge>
                              <Badge
                                variant={symposium.status === "Available" ? "default" : "secondary"}
                                className={symposium.status === "Available" ? "bg-green-600" : ""}
                              >
                                {symposium.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-primary">{symposium.papers}</div>
                            <div className="text-xs text-muted-foreground">Papers</div>
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-primary">{symposium.pages}</div>
                            <div className="text-xs text-muted-foreground">Pages</div>
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-primary">{symposium.participants}</div>
                            <div className="text-xs text-muted-foreground">Participants</div>
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-primary">{symposium.countries}</div>
                            <div className="text-xs text-muted-foreground">Countries</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-3">
                        <Link href={`/library/proceedings/${symposium.year}`}>
                          <Button className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download Full Proceedings
                          </Button>
                        </Link>
                        <Link href={`/library/proceedings/${symposium.year}`}>
                          <Button variant="outline" className="w-full bg-transparent">
                            <Eye className="h-4 w-4 mr-2" />
                            Browse Papers
                          </Button>
                        </Link>
                        <Link href={`/library/proceedings/${symposium.year}`}>
                          <Button variant="outline" className="w-full bg-transparent">
                            <FileText className="h-4 w-4 mr-2" />
                            Table of Contents
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Archive Access */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Archive</CardTitle>
                <CardDescription>Access to all symposium proceedings from 2014 to 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="mb-4">
                    Browse Complete Archive
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Search across all years • Download individual papers or complete volumes
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Featured Papers Tab */}
          <TabsContent value="featured" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Featured Papers 2024</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Highlighted research papers from our latest international symposium
              </p>
            </div>

            <div className="space-y-6">
              {featuredPapers2024.map((paper, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 text-balance">{paper.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {paper.authors.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{paper.affiliation}</span>
                        <span>Pages: {paper.pages}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.keywords.map((keyword, idx) => (
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
                        <Award className="h-4 w-4 mr-2" />
                        Citation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Awards and Recognition */}
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">Best Paper Awards</CardTitle>
                <CardDescription className="text-amber-700">
                  Recognizing outstanding research contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 text-amber-600" />
                    <h4 className="font-semibold text-amber-800 mb-2">Best Overall Paper</h4>
                    <p className="text-sm text-amber-700">
                      "Digital Preservation Strategies for Intangible Cultural Heritage in South Asia"
                    </p>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 text-amber-600" />
                    <h4 className="font-semibold text-amber-800 mb-2">Best Student Paper</h4>
                    <p className="text-sm text-amber-700">
                      "Community-Based Heritage Management: Lessons from Rural Sri Lanka"
                    </p>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 text-amber-600" />
                    <h4 className="font-semibold text-amber-800 mb-2">Innovation Award</h4>
                    <p className="text-sm text-amber-700">
                      "AI-Assisted Archaeological Site Documentation: A Case Study from Anuradhapura"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workshops Tab */}
          <TabsContent value="workshops" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Workshop Proceedings</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized workshops and training sessions with focused research presentations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshopProceedings.map((workshop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2">
                        {workshop.type}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2">{workshop.title}</h3>
                      <p className="text-primary font-medium mb-2">{workshop.theme}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{workshop.date}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center mb-4">
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{workshop.papers}</div>
                        <div className="text-xs text-muted-foreground">Papers</div>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{workshop.participants}</div>
                        <div className="text-xs text-muted-foreground">Participants</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        View Papers
                      </Button>
                      <Button size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Workshop Information */}
            <Card>
              <CardHeader>
                <CardTitle>Workshop Series</CardTitle>
                <CardDescription>Regular workshops and training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Upcoming Workshops</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Advanced Research Methods (March 2025)</li>
                      <li>• Digital Archive Management (April 2025)</li>
                      <li>• Grant Writing Workshop (May 2025)</li>
                      <li>• Publication Strategies (June 2025)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Workshop Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hands-on training sessions</li>
                      <li>• Expert-led instruction</li>
                      <li>• Networking opportunities</li>
                      <li>• Certificate of completion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Special Collections Tab */}
          <TabsContent value="collections" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Special Collections</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Curated collections of proceedings organized by theme and significance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specialCollections.map((collection, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{collection.title}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{collection.count}</div>
                        <div className="text-sm text-muted-foreground">Items</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-primary">{collection.years}</div>
                        <div className="text-sm text-muted-foreground">Years</div>
                      </div>
                    </div>
                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Browse Collection
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Digital Archive Features */}
            <Card>
              <CardHeader>
                <CardTitle>Digital Archive Features</CardTitle>
                <CardDescription>Advanced search and access capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Search className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Advanced Search</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-text search across all proceedings with filters and faceted browsing
                    </p>
                  </div>
                  <div className="text-center">
                    <Download className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Bulk Download</h4>
                    <p className="text-sm text-muted-foreground">
                      Download individual papers or complete proceedings volumes
                    </p>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Citation Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatic citation generation in multiple academic formats
                    </p>
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
