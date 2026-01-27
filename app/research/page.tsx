import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, TrendingUp, Search, Filter, Download } from "lucide-react"
import Link from "next/link"

const researchAreas = [
  {
    id: 1,
    title: "Cultural Heritage Studies",
    description:
      "Exploring the preservation, interpretation, and significance of cultural heritage in contemporary society",
    researchers: 12,
    publications: 45,
    projects: 8,
    featured: true,
    image: "/placeholder.svg?height=300&width=400&text=Cultural+Heritage",
    keywords: ["Heritage Preservation", "Cultural Identity", "Museum Studies", "Digital Heritage"],
  },
  {
    id: 2,
    title: "Social Policy and Development",
    description: "Analyzing social policies and their impact on community development and welfare",
    researchers: 15,
    publications: 62,
    projects: 12,
    featured: true,
    image: "/placeholder.svg?height=300&width=400&text=Social+Policy",
    keywords: ["Policy Analysis", "Community Development", "Social Welfare", "Public Administration"],
  },
  {
    id: 3,
    title: "Digital Humanities",
    description: "Integrating digital technologies with traditional humanities research methodologies",
    researchers: 8,
    publications: 28,
    projects: 6,
    image: "/placeholder.svg?height=300&width=400&text=Digital+Humanities",
    keywords: ["Digital Archives", "Text Mining", "Data Visualization", "Computational Analysis"],
  },
  {
    id: 4,
    title: "Environmental Humanities",
    description: "Examining the intersection of environmental issues with human culture and society",
    researchers: 10,
    publications: 34,
    projects: 7,
    image: "/placeholder.svg?height=300&width=400&text=Environmental+Humanities",
    keywords: ["Climate Change", "Environmental Ethics", "Sustainability", "Ecocriticism"],
  },
  {
    id: 5,
    title: "Gender and Society",
    description: "Investigating gender roles, equality, and social dynamics across different cultures",
    researchers: 14,
    publications: 51,
    projects: 9,
    image: "/placeholder.svg?height=300&width=400&text=Gender+Studies",
    keywords: ["Gender Equality", "Women's Studies", "Social Dynamics", "Cultural Analysis"],
  },
  {
    id: 6,
    title: "Urban Studies",
    description: "Understanding urbanization processes and their social, cultural, and economic implications",
    researchers: 11,
    publications: 39,
    projects: 8,
    image: "/placeholder.svg?height=300&width=400&text=Urban+Studies",
    keywords: ["Urbanization", "City Planning", "Social Geography", "Community Studies"],
  },
]

const featuredProjects = [
  {
    id: 1,
    title: "Digital Archive of Sri Lankan Cultural Heritage",
    description:
      "A comprehensive digital repository preserving and providing access to Sri Lankan cultural artifacts and traditions",
    duration: "2022-2025",
    funding: "$150,000",
    status: "Ongoing",
    lead: "Dr. Samantha Perera",
    collaborators: ["National Museum", "University of Colombo", "Digital Heritage Foundation"],
  },
  {
    id: 2,
    title: "Social Impact of Climate Change in South Asia",
    description:
      "Interdisciplinary study examining the social and cultural impacts of climate change on South Asian communities",
    duration: "2023-2026",
    funding: "$200,000",
    status: "Ongoing",
    lead: "Prof. Rajesh Kumar",
    collaborators: ["UNDP", "Regional Universities", "Climate Research Institute"],
  },
  {
    id: 3,
    title: "Gender Equality in Higher Education",
    description:
      "Comprehensive analysis of gender representation and equality in higher education institutions across the region",
    duration: "2021-2024",
    funding: "$120,000",
    status: "Final Phase",
    lead: "Dr. Priya Jayawardena",
    collaborators: ["UNESCO", "Regional Universities", "Ministry of Education"],
  },
]

const researchStats = [
  { label: "Active Researchers", value: "85+", icon: Users },
  { label: "Research Publications", value: "500+", icon: BookOpen },
  { label: "Ongoing Projects", value: "45", icon: TrendingUp },
  { label: "Awards Received", value: "25", icon: Award },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Research Excellence</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Advancing knowledge through innovative research in humanities and social sciences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Research
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Publications
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Workshop */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Workshop on Partial Least Square Structural Equation Modeling (with SmartPLS)</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quantitative Research Methodology Workshop
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Workshop Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <img
                      src="/pls-sem.jpg"
                      alt="PLS-SEM Workshop"
                      className="max-w-full h-auto rounded-lg shadow-lg mx-auto mb-6"
                    />
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg" className="mb-6">
                      <a href="https://ncas.ac.lk/wp-content/uploads/2014/10/application_form_pls_sem_ncas.doc" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        Download Application Form
                      </a>
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Email:</strong> info@ncas.ac.lk</p>
                        <p><strong>Phone:</strong> +94 011 2680849</p>
                        <p><strong>Fax:</strong> +94 011 269 3975</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Address</h4>
                      <p className="text-sm">
                        National Centre for Advanced Studies in Humanities & Social Sciences (NCAS)<br />
                        6A, Sukhastan Gardens, Ward Place<br />
                        Colombo – 07, Sri Lanka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Research Areas */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Research Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our primary research focus areas driving innovation and scholarly excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {researchAreas
                .filter((area) => area.featured)
                .map((area) => (
                  <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{area.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {area.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                          <div className="font-semibold text-primary">{area.researchers}</div>
                          <div className="text-xs text-muted-foreground">Researchers</div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{area.publications}</div>
                          <div className="text-xs text-muted-foreground">Publications</div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{area.projects}</div>
                          <div className="text-xs text-muted-foreground">Projects</div>
                        </div>
                      </div>

                      <Link href={`/research/${area.id}`}>
                        <Button className="w-full">Learn More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Research Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">All Research Areas</h2>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas
                .filter((area) => !area.featured)
                .map((area) => (
                  <Card key={area.id} className="hover:shadow-lg transition-shadow duration-200">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{area.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {area.keywords.slice(0, 3).map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>{area.researchers} researchers</span>
                        <span>{area.publications} publications</span>
                      </div>

                      <Link href={`/research/${area.id}`}>
                        <Button variant="outline" className="w-full bg-transparent">
                          Explore Area
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Research Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ongoing projects that exemplify our commitment to impactful research
              </p>
            </div>

            <div className="space-y-6">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <CardTitle className="text-xl mb-2 lg:mb-0">{project.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>{project.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-medium">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Funding</div>
                        <div className="font-medium">{project.funding}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Project Lead</div>
                        <div className="font-medium">{project.lead}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-2">Collaborators</div>
                      <div className="flex flex-wrap gap-2">
                        {project.collaborators.map((collaborator, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {collaborator}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline">View Project Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Research Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Collaborate with leading researchers and contribute to groundbreaking discoveries
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">For Researchers</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join our research community and access world-class facilities
                  </p>
                  <Button variant="outline">Apply to Join</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">For Students</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Explore research opportunities and graduate programs
                  </p>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            </div>

            <Button size="lg">Contact Research Office</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
