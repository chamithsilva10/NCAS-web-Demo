import { Mail, Phone, MapPin, Award, BookOpen, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function DirectorPage() {
  const currentDirector = {
    name: "Senior Professor (Mrs.) Prashanthi Narangoda",
    title: "Director, NCAS",
    image: "https://ncas.ac.lk/wp-content/uploads/2023/05/IMG-20230206-WA00072.jpg",
    email: "director@ncas.ac.lk",
    phone: "+94 11 2680849",
    office: "Director's Office, NCAS Building",
    education: [
      "PhD",
    ],
    experience: [
      "Director, NCAS",
      "Chairman, Council of Management of NCAS",
    ],
    research: [
      "Humanities and Social Sciences",
    ],
    publications: [
    ],
    awards: [
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Director's Profile</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Leading NCAS towards excellence in humanities and social sciences research
            </p>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={currentDirector.image || "/placeholder.svg"}
                      alt={currentDirector.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl mb-2">{currentDirector.name}</CardTitle>
                    <CardDescription className="text-xl text-primary font-medium">
                      {currentDirector.title}
                    </CardDescription>
                  </CardHeader>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>{currentDirector.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>{currentDirector.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{currentDirector.office}</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="prose max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      It is my pleasure, and believe that I am privileged to be the First Lady Director at the National Center for Advanced Studies in Humanities and Social Sciences (NCAS). NCAS, being the only government owned Institute, established by the NCAS Ordinance No. 02 of 2005, under the vested powers of the Sub Section (1) of the Section 24A of the Universities Act No. 16 of 1978 for the purpose of providing, promoting and developing higher education through Advanced Research and Studies, in the fields of Humanities and Social Sciences, is thrived to cater for the needs and requirements of the academics, professionals, and the interested groups or communities to engage in such studies. Throughout its inception to date, it has been a strong pillar of such studies by supporting the academics of all the state Universities in the country for their Post Graduate Studies. As the only government body that supports the studies in Humanities and Social Sciences, it has financially supported more than 500 academics to pursue their PhD Studies in nationally and internationally recognized Universities. The investment made in favour of the Universities through the support of the NCAS is immeasurable. By doing so, the NCAS accomplishes the objectives already endowed by the Ordinance and made its way towards elevating the status of the NCAS to achieve its goals.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      My vision and mission is to maintain the continuous support and uplift its standards by introducing several other opportunities which are already encompassed by the Ordinance. Being the only Academic Institute other than the Universities under the Universities Act No. 16 of 1978, the NCAS has the granted powers to award Post Graduate Degrees to the qualified academics. Therefore, we are planning to propose the Degree programs covering SLQF guidelines, also maintaining the international standards. This mission is accomplished by our invitation to research scholars from overseas to collaborate with internationally reputed research institutes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      All such strategic elevations are in line with the belief that NCAS will become the meeting place of new thoughts, intellectual discussions, distraction-free opportunity to learn about new frontiers of research and innovation. I am confident that it is a place to sit across from long-term collaborators who we normally do not see face-to-face because they live so far away, and this is a place to think, and a think tank, to brainstorm and anticipate new discoveries. NCAS must forage for forging exciting partnerships, make serendipitous connections where new projects, and new depths are discovered and applied for the benefit of the society by spreading its wings every and elsewhere possible. By doing so I wish we can contribute meaningfully to our community where we belong, taking pride in its unique heritage and innovative strengths. Therefore, I will take each and every step to the best of my knowledge to elevate the status of the NCAS for future academics, researchers and innovators!!!
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button>Contact Director</Button>
                    <Button variant="outline">Schedule Meeting</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentDirector.education.map((edu, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{edu}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentDirector.experience.map((exp, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{exp}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Research Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Research Areas</CardTitle>
                  <CardDescription>Primary fields of research and expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentDirector.research.map((area, index) => (
                      <Badge key={index} variant="secondary">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Awards & Recognition */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentDirector.awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Publications */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Key Publications</CardTitle>
                <CardDescription>Selected books and major publications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentDirector.publications.map((pub, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <BookOpen className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">{pub}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Director's Message</h2>
            <blockquote className="text-xl italic leading-relaxed mb-8">
              "At NCAS, we are committed to fostering excellence in humanities and social sciences research. Our mission
              is to create an environment where scholars can pursue innovative research, engage in meaningful dialogue,
              and contribute to the advancement of knowledge that benefits society. We believe in the power of
              interdisciplinary collaboration and the importance of connecting local insights with global perspectives."
            </blockquote>
            <div className="text-lg font-medium">- Senior Professor (Mrs.) Prashanthi Narangoda</div>
          </div>
        </div>
      </section>
    </div>
  )
}
