import { Target, Users, Globe, BookOpen, Award, Lightbulb, Heart, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ObjectivesPage() {
  const overallObjectives = [
    "To encourage and nurture reflective thinking and innovative ideas, and to support research characterized by creativity and originality, at a national level and especially within the University System, in fields falling within the scope of the Centre;",
    "To contribute to the building of national capacity to absorb new knowledge and advanced ideas;",
    "To provide opportunities for post-graduate studies and training, at levels comparable with those offered in their respective fields by similar centres of learning and research reputed internationally, under the guidance and supervision of academics and other specialists from national and foreign universities and from outside the University System;",
    "To contribute to the generation of human-resources and the development of academic and professional specializations in all fields falling within the scope of the Centre;",
    "To cater for the interest and capabilities of the emerging academic and professional communities in fields falling within the scope of the Centre.",
  ]

  const operationalObjectives = [
    "The NCAS will promote doctoral studies of university teachers in Arts, Humanities and Social Sciences through grants and other programs.",
    "The NCAS will strengthen the research capacities of university teachers by organizing regular seminars, training workshops and lectures on research methodology and related matters leading to publication.",
    "The NCAS will launch a publication program to publish high quality PhD theses by university academics with necessary editing or revision.",
    "The NCAS will launch specific research programs in areas relevant for national policy development and implementation.",
    "The NCAS will expand its digital library facilities and services to its own grantees, researchers and others in pursing its objectives.",
    "The NCAS will establish international academic cooperation programs with foreign universities and similar institutions to exchange scholars and pursue other objectives of its mandate.",
    "The NCAS will ensure that its intended post-graduate degree programs are feasible and necessary to cater for national and international needs.",
    "The NCAS will initiate any other miscellaneous programs or activities to achieve its objectives.",
  ]

  const specificObjectives = [
    {
      category: "Academic Excellence",
      objectives: [
        "Establish NCAS as a premier research institution in South Asia",
        "Develop innovative research methodologies and approaches",
        "Maintain high standards of academic integrity and ethics",
        "Foster interdisciplinary research collaborations",
      ],
    },
    {
      category: "Education & Training",
      objectives: [
        "Provide world-class postgraduate education in humanities and social sciences",
        "Develop comprehensive training programs for researchers",
        "Create opportunities for continuous professional development",
        "Support early-career researchers and scholars",
      ],
    },
    {
      category: "Knowledge Dissemination",
      objectives: [
        "Publish high-impact research in international journals",
        "Organize conferences and symposiums for knowledge sharing",
        "Develop digital platforms for research dissemination",
        "Create accessible resources for the broader community",
      ],
    },
    {
      category: "Institutional Development",
      objectives: [
        "Build state-of-the-art research infrastructure",
        "Develop sustainable funding mechanisms",
        "Strengthen governance and management systems",
        "Enhance institutional reputation and visibility",
      ],
    },
  ]

  const measurableOutcomes = [
    {
      metric: "PhD Graduates",
      target: "50+ annually",
      description: "High-quality doctoral graduates contributing to academia and society",
    },
    {
      metric: "Research Publications",
      target: "200+ annually",
      description: "Peer-reviewed publications in reputable international journals",
    },
    {
      metric: "International Collaborations",
      target: "25+ active partnerships",
      description: "Active research partnerships with global institutions",
    },
    {
      metric: "Training Programs",
      target: "30+ programs annually",
      description: "Capacity building workshops and training initiatives",
    },
    {
      metric: "Research Grants",
      target: "LKR 100M+ annually",
      description: "External funding secured for research projects",
    },
    {
      metric: "Policy Impact",
      target: "15+ policy contributions",
      description: "Research-informed policy recommendations and implementations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Institutional Objectives</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Strategic goals that guide our pursuit of excellence in humanities and social sciences research
            </p>
          </div>
        </div>
      </section>

      {/* Overall Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Overall Objectives</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Objectives proclaimed in the NCAS Ordinance 2005
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Overall Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {overallObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm leading-relaxed">{objective}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Objectives */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Objectives (2023-2026)</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specific operational objectives according to the Strategic Plan for the period 2023-2026
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Operational Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {operationalObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm leading-relaxed">{objective}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
