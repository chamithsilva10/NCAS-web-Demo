import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, Target, ExternalLink } from "lucide-react"
import Link from "next/link"

const procurementPlans = [
  {
    year: 2025,
    title: "Master Procurement Plan 2025",
    description: "Comprehensive procurement strategy for NCAS operations and development projects",
    status: "Current",
    downloadUrl: "https://ncas.ac.lk/wp-content/uploads/2014/10/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf",
    keyObjectives: [
      "Procurement of research equipment and software",
      "Library resource development",
      "Infrastructure maintenance and upgrades",
      "Capacity building programs",
      "International collaboration support"
    ]
  },
  {
    year: 2024,
    title: "Master Procurement Plan 2024",
    description: "Annual procurement plan focusing on digital transformation and research enhancement",
    status: "Completed",
    downloadUrl: "#",
    keyObjectives: [
      "Digital library system implementation",
      "Research methodology training programs",
      "Publication support services",
      "Conference and workshop organization",
      "Staff development initiatives"
    ]
  },
  {
    year: 2023,
    title: "Master Procurement Plan 2023",
    description: "Strategic procurement plan for organizational development and research excellence",
    status: "Completed",
    downloadUrl: "#",
    keyObjectives: [
      "Research grant management system",
      "Academic program development",
      "Partnership and collaboration frameworks",
      "Quality assurance systems",
      "Sustainability initiatives"
    ]
  }
]

const procurementCategories = [
  {
    category: "Research Equipment",
    description: "Advanced tools and technology for research activities",
    items: ["Computer systems", "Software licenses", "Laboratory equipment", "Data analysis tools"]
  },
  {
    category: "Library Resources",
    description: "Books, journals, and digital resources for research",
    items: ["Academic databases", "E-books and journals", "Reference materials", "Digital archives"]
  },
  {
    category: "Training & Development",
    description: "Professional development and capacity building",
    items: ["Workshops and seminars", "Training programs", "Certification courses", "Study visits"]
  },
  {
    category: "Infrastructure",
    description: "Facilities and maintenance for optimal operations",
    items: ["Office equipment", "Furniture and fixtures", "IT infrastructure", "Building maintenance"]
  }
]

export default function ProcurementPlanPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Master Procurement Plan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NCAS Master Procurement Plan outlines our strategic approach to acquiring resources,
            services, and infrastructure necessary for advancing research excellence and organizational
            development in humanities and social sciences.
          </p>
        </div>

        {/* Current Plan Highlight */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Master Procurement Plan 2025</h2>
              <p className="text-muted-foreground mb-4">
                Our current procurement strategy focuses on digital transformation,
                research capacity building, and sustainable development initiatives.
              </p>
              <Badge className="mb-4">Currently Active</Badge>
            </div>
            <Button asChild size="lg">
              <Link href="https://ncas.ac.lk/wp-content/uploads/2014/10/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf" target="_blank">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Link>
            </Button>
          </div>
        </div>

        {/* Procurement Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Procurement Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {procurementCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Items:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Historical Plans */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Procurement Plan Archive</h2>
          <div className="space-y-4">
            {procurementPlans.slice(1).map((plan) => (
              <Card key={plan.year}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="outline">{plan.year}</Badge>
                        <Badge variant={plan.status === 'Current' ? 'default' : 'secondary'}>
                          {plan.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    <Button variant="outline" size="sm" disabled={!plan.downloadUrl || plan.downloadUrl === '#'}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium mb-2">Key Objectives:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {plan.keyObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Procurement Process */}
        <div className="bg-muted/50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Procurement Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Planning</h3>
              <p className="text-sm text-muted-foreground">
                Annual procurement planning based on organizational needs and strategic objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Tendering</h3>
              <p className="text-sm text-muted-foreground">
                Competitive bidding process ensuring transparency and value for money
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Evaluation</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive evaluation of proposals based on quality, cost, and compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Contract execution and monitoring to ensure timely delivery and quality standards
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Procurement Inquiries</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For detailed information about our procurement processes, vendor registration,
            or partnership opportunities, please contact our procurement office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Procurement Office
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://ncas.ac.lk/wp-content/uploads/2014/10/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf" target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Current Plan
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}