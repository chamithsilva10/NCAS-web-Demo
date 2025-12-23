import { Users, Target, Award, Globe, BookOpen, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutPage() {
  const leadership = [
    {
      name: "Prof. Rajitha Dissanayake",
      position: "Director",
      qualification: "PhD in Social Sciences, University of Cambridge",
      image: "/professional-academic-director.jpg",
    },
    {
      name: "Dr. Priyani Fernando",
      position: "Deputy Director (Research)",
      qualification: "PhD in Humanities, Oxford University",
      image: "/female-academic-researcher.png",
    },
    {
      name: "Prof. Asanka Perera",
      position: "Deputy Director (Academic Affairs)",
      qualification: "PhD in Cultural Studies, Harvard University",
      image: "/male-professor-academic.jpg",
    },
    {
      name: "Dr. Malini Jayawardena",
      position: "Head of Publications",
      qualification: "PhD in Literature, University of London",
      image: "/female-academic-publications.jpg",
    },
  ]

  const achievements = [
    {
      year: "2020",
      title: "UNESCO Recognition",
      description: "Recognized as a Category 2 Centre under UNESCO's auspices for excellence in humanities research",
    },
    {
      year: "2019",
      title: "International Collaboration Award",
      description: "Received the South Asian Research Excellence Award for cross-border academic initiatives",
    },
    {
      year: "2018",
      title: "Digital Humanities Pioneer",
      description: "First institution in Sri Lanka to establish a comprehensive digital humanities program",
    },
    {
      year: "2017",
      title: "Research Impact Recognition",
      description: "Awarded for significant contributions to policy development through humanities research",
    },
  ]

  const statistics = [
    { number: "15+", label: "Years of Excellence" },
    { number: "200+", label: "Research Publications" },
    { number: "50+", label: "International Collaborations" },
    { number: "1000+", label: "Scholars Trained" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/ncas-logo.png"
                alt="NCAS Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About NCAS</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Advancing knowledge and understanding in humanities and social sciences through research, education, and
              international collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To advance knowledge and understanding in the humanities and social sciences through high-quality
                  research, innovative education programs, and meaningful international collaborations that contribute
                  to societal development and cultural preservation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading center of excellence in South Asia for humanities and social sciences research,
                  fostering critical thinking, cultural understanding, and innovative solutions to contemporary
                  challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Background */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Established in 2008, the National Centre for Advanced Studies in Humanities & Social Sciences (NCAS) was
                founded with the vision of creating a premier institution dedicated to advancing knowledge in the
                humanities and social sciences. Located in Colombo, Sri Lanka, NCAS has grown from a small research
                center to a internationally recognized institution.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey began with a commitment to bridging the gap between traditional scholarship and contemporary
                research methodologies. Over the years, we have developed comprehensive programs that combine rigorous
                academic research with practical applications, contributing significantly to policy development,
                cultural preservation, and social understanding.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, NCAS stands as a beacon of academic excellence, fostering collaboration between local and
                international scholars, supporting emerging researchers, and contributing to the global discourse in
                humanities and social sciences through our publications, conferences, and research initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our distinguished leadership brings together decades of academic excellence and research expertise
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground">{leader.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that mark our journey of excellence and recognition
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Badge variant="secondary" className="text-sm font-semibold">
                          {achievement.year}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our institutional character
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Academic Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Commitment to the highest standards of scholarship, research integrity, and intellectual rigor in all
                  our academic endeavors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Global Perspective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fostering international collaboration and cross-cultural understanding while maintaining strong roots
                  in local contexts and traditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Inclusive Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating an inclusive environment that welcomes diverse perspectives, backgrounds, and approaches to
                  knowledge creation and sharing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
