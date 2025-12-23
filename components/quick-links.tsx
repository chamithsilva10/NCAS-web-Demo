import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, FileText, Calendar, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  {
    title: "DIPLOMA IN SMART LIBRARY TECHNOLOGIES",
    description: "Professional diploma program in smart library technologies and digital information management.",
    icon: GraduationCap,
    href: "/programs/diplomas/smart-library",
    color: "text-blue-600",
  },
  {
    title: "DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT",
    description: "Comprehensive training in tourism and hospitality industry management and operations.",
    icon: FileText,
    href: "/programs/diplomas/tourism",
    color: "text-green-600",
  },
  {
    title: "DIPLOMA IN ELDER CARE MANAGEMENT/GERONTOLOGY",
    description: "Specialized program in elder care management and gerontology studies.",
    icon: Calendar,
    href: "/programs/diplomas/elder-care",
    color: "text-purple-600",
  },
  {
    title: "Certificate Course on Mastering Systematic Literature Review",
    description: "Advanced training in systematic literature review and bibliometric analysis.",
    icon: Users,
    href: "/programs/certificates/research-methodology",
    color: "text-orange-600",
  },
  {
    title: "Certificate Course in Introduction to SPSS",
    description: "Statistical analysis training using SPSS software for research and data analysis.",
    icon: Award,
    href: "/programs/certificates/spss",
    color: "text-red-600",
  },
  {
    title: "Scholarships & Fellowships",
    description: "Explore available scholarships, fellowships, and funding opportunities.",
    icon: BookOpen,
    href: "/scholarships",
    color: "text-indigo-600",
  },
]

export function QuickLinks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Quick Access</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find what you're looking for with our convenient quick links to key resources and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Card key={link.title} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <IconComponent className={`h-6 w-6 ${link.color}`} />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm text-pretty">{link.description}</p>
                  <Link href={link.href}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
