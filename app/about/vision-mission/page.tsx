import { Target, Eye, Heart, Users, Globe, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VisionMissionPage() {
  const coreValues = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Commitment to the highest standards of scholarship and research integrity",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Fostering interdisciplinary collaboration and knowledge sharing",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Connecting local research with international academic communities",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Research that contributes to societal development and human welfare",
    },
  ]

  const strategicObjectives = [
    "Advance cutting-edge research in humanities and social sciences",
    "Develop human resources through postgraduate education and training",
    "Foster international collaborations and partnerships",
    "Promote interdisciplinary research approaches",
    "Disseminate research findings through publications and conferences",
    "Support policy development through evidence-based research",
    "Preserve and promote cultural heritage and knowledge systems",
    "Build capacity in digital humanities and research methodologies",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Vision & Mission</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Guiding principles that drive our commitment to excellence in humanities and social sciences
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    To be a center of excellence of national and international repute, building synergies between knowledge, resources, research, education and social activity in the fields of Humanities and Social Sciences.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Recognizing the need to strengthen and upgrade teaching and research at all Sri Lankan universities, Realizing the need that universities should contribute to the development of the country and society through research and policy inputs, NCAS shall support both theoretical and applied postgraduate, post-doctoral and other research in the Humanities and Social Sciences and promote advance thinking and creative originality by motivating and rewarding academics in that direction. NCAS will be an apex body within Sri Lanka's university system networking with national and International organizations to achieve its objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The fundamental principles that guide our work and define our institutional character
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Objectives</h2>
              <p className="text-xl text-muted-foreground">
                Key goals that drive our institutional development and academic excellence
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Our Strategic Focus Areas</CardTitle>
                <CardDescription className="text-center">
                  Eight key objectives that shape our institutional priorities and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {strategicObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
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

      {/* Commitment Statement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                NCAS is committed to creating an inclusive and supportive environment where scholars from diverse
                backgrounds can pursue innovative research that addresses contemporary challenges in humanities and
                social sciences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe in the transformative power of research and education to build bridges between communities,
                preserve cultural heritage, and contribute to sustainable development. Our work is guided by principles
                of academic freedom, ethical research practices, and social responsibility.
              </p>
              <p className="text-lg leading-relaxed">
                Through our research, education, and outreach activities, we strive to make meaningful contributions to
                knowledge creation, policy development, and societal well-being, both locally and globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
