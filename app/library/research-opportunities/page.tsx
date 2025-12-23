import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Users, Globe, Calendar } from "lucide-react"
import Link from "next/link"

const researchOpportunities = [
  {
    id: 1,
    title: "Expanding Research Horizons",
    description: "International collaboration opportunities for researchers in humanities and social sciences",
    type: "International Collaboration",
    deadline: "Ongoing",
    eligibility: "Sri Lankan researchers with active research projects",
    benefits: "Access to international networks, joint publications, funding opportunities",
    link: "/library/expanding-research-horizons"
  },
  {
    id: 2,
    title: "NCAS-QUT PhD Scholarships",
    description: "Joint PhD program with Queensland University of Technology, Australia",
    type: "PhD Scholarship",
    deadline: "Annually",
    eligibility: "Outstanding postgraduate students in humanities/social sciences",
    benefits: "Full scholarship, international exposure, joint supervision",
    link: "/grants/qut-scholarships"
  },
  {
    id: 3,
    title: "Short Term Research Grants",
    description: "Funding support for preliminary research, pilot studies, and collaborative projects",
    type: "Research Grant",
    deadline: "Multiple rounds",
    eligibility: "Researchers with innovative project proposals",
    benefits: "Financial support, research assistance, publication opportunities",
    link: "/grants/short-term"
  },
  {
    id: 4,
    title: "Visiting Research Fellowships",
    description: "Opportunities for international scholars to conduct research at NCAS",
    type: "Visiting Fellowship",
    deadline: "Ongoing",
    eligibility: "Established researchers from partner institutions",
    benefits: "Research facilities, accommodation, stipend, networking",
    link: "/international"
  },
  {
    id: 5,
    title: "Research Colloquium Participation",
    description: "Annual platform for emerging researchers to present work and receive feedback",
    type: "Research Presentation",
    deadline: "Annually",
    eligibility: "Postgraduate students and early-career researchers",
    benefits: "Peer feedback, networking, publication opportunities",
    link: "/grants/research-colloquium"
  },
  {
    id: 6,
    title: "Digital Repository Access",
    description: "Access to NCAS digital repository for research materials and publications",
    type: "Research Resources",
    deadline: "Ongoing",
    eligibility: "Registered researchers and academics",
    benefits: "Access to research materials, citation tools, preservation services",
    link: "/library/digital-repository"
  }
]

const researchResources = [
  {
    title: "Digital Repository",
    description: "Access thousands of research papers, theses, and publications",
    icon: BookOpen,
    link: "/library/digital-repository"
  },
  {
    title: "Research Colloquium",
    description: "Present your research and network with fellow scholars",
    icon: Users,
    link: "/grants/research-colloquium"
  },
  {
    title: "International Partnerships",
    description: "Collaborate with researchers from around the world",
    icon: Globe,
    link: "/international"
  },
  {
    title: "Publication Support",
    description: "Get help with publishing your research work",
    icon: Search,
    link: "/grants/publication-awards"
  }
]

export default function ResearchOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exciting research opportunities, funding schemes, and collaborative platforms
            available through NCAS. Advance your research career with our comprehensive support system.
          </p>
        </div>

        {/* Research Resources Quick Access */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={resource.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Current Research Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{opportunity.title}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{opportunity.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {opportunity.deadline}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Eligibility:</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.eligibility}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Benefits:</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.benefits}</p>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={opportunity.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Support Services */}
        <div className="bg-muted/50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Research Support Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Funding Opportunities</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Short-term research grants</li>
                <li>• Publication awards</li>
                <li>• Travel grants for conferences</li>
                <li>• Equipment and software access</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Research Facilities</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Well-equipped library</li>
                <li>• Digital repository access</li>
                <li>• Computer labs and software</li>
                <li>• Meeting and seminar rooms</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Academic Support</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Research methodology workshops</li>
                <li>• Statistical analysis support</li>
                <li>• Writing and publication assistance</li>
                <li>• Peer review and feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Research Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a postgraduate student, early-career researcher, or established academic,
            NCAS provides the resources and support you need to advance your research goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/register">
                Register for Research Programs
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Research Office
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}