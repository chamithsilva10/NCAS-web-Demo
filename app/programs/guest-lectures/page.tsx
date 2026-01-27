import { Metadata } from "next"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Guest Lectures / Webinars | NCAS Programs",
  description: "NCAS hosts a series of guest lectures and webinars featuring renowned scholars and experts in humanities and social sciences.",
}

export default function GuestLecturesPage() {
  const lectures = [
    {
      id: 1,
      title: "The Webinar on Gender Equality and Trans Gender Legalization",
      description: "An important discussion on gender equality and transgender rights, exploring legal frameworks and social implications.",
      date: "2024",
      category: "Webinar",
      speaker: "NCAS Research Team",
      image: "/gender-equality-webinar.pdf",
      type: "document",
      content: "This webinar explores the critical issues surrounding gender equality and transgender legalization in contemporary society. Topics include legal frameworks, social implications, and pathways for inclusive policy development."
    },
    {
      id: 2,
      title: "SRI LANKA ECONOMIC CRISIS: 'DOWNFALL OF THE PEARL OF THE INDIAN OCEAN', AN OPEN INTELLECTUAL DIALOGUE",
      description: "An open intellectual dialogue examining the economic challenges facing Sri Lanka and potential pathways for recovery.",
      date: "2024",
      category: "Dialogue",
      speaker: "Panel of Economists",
      image: "/sri-lanka-economic-crisis.jpg",
      type: "image",
      content: "This intellectual dialogue brings together leading economists and scholars to analyze the current economic crisis in Sri Lanka, exploring historical context, current challenges, and potential solutions for sustainable economic recovery."
    },
    {
      id: 3,
      title: "Guest Lecture on The Impact of Rabindranath Tagore on the Development of Art and Culture of South Asia",
      description: "Exploring Rabindranath Tagore's profound influence on South Asian art, literature, and cultural development.",
      date: "2024",
      category: "Guest Lecture",
      speaker: "Cultural Studies Expert",
      image: "",
      type: "registration",
      registrationLink: "https://forms.gle/C7hH59wFoYdgyTki6",
      content: "This lecture examines the lasting impact of Rabindranath Tagore on South Asian cultural landscape, covering his contributions to literature, music, art, and philosophy that shaped the region's cultural identity."
    },
    {
      id: 4,
      title: "NCAS Seminars on Sri Lanka Studies (Seminar 01): The Impact of COVID-19 Pandemic on Apparel Exports",
      description: "Evidence from Sri Lanka - Analyzing how the COVID-19 pandemic affected Sri Lanka's apparel export industry.",
      date: "2023",
      category: "Seminar",
      speaker: "Economics Research Team",
      image: "/seminar-2023.jpg",
      type: "registration",
      registrationLink: "https://forms.gle/LpgyPsy5PqWWdL8X8",
      content: "This seminar presents empirical research on how the COVID-19 pandemic impacted Sri Lanka's apparel export sector, including supply chain disruptions, market changes, and recovery strategies."
    },
    {
      id: 5,
      title: "GUEST LECTURE ON ROOTS OF THE PRESENT POLITICAL INSTABILITY OF SRI LANKA",
      description: "An in-depth analysis of the historical and contemporary factors contributing to Sri Lanka's political challenges.",
      date: "2023",
      category: "Guest Lecture",
      speaker: "Political Science Expert",
      image: "",
      type: "lecture",
      content: "This lecture explores the historical roots and contemporary dynamics of political instability in Sri Lanka, examining institutional, social, and economic factors that have shaped the country's political landscape."
    },
    {
      id: 6,
      title: "Guest Lecture on 'The Will to Encounter: Anthropology, Science Fiction, and the Search for Terrestrial Intelligence' by Prof. Rohan Bastin",
      description: "Prof. Rohan Bastin explores the intersection of anthropology, science fiction, and the search for extraterrestrial intelligence.",
      date: "2021",
      category: "Guest Lecture",
      speaker: "Prof. Rohan Bastin",
      image: "",
      type: "lecture",
      content: "In this fascinating lecture, Prof. Rohan Bastin examines how science fiction narratives intersect with anthropological inquiry and the philosophical quest for understanding intelligence beyond Earth."
    },
    {
      id: 7,
      title: "Webinar Lecture Series on Humanities and Social Sciences Research",
      description: "A comprehensive series of webinars covering various aspects of research methodology in humanities and social sciences.",
      date: "2020",
      category: "Webinar Series",
      speaker: "NCAS Faculty",
      image: "/webinar-research.jpg",
      type: "series",
      content: "This webinar series provides researchers with essential tools and methodologies for conducting high-quality research in humanities and social sciences disciplines."
    },
    {
      id: 8,
      title: "WORKSHOP ON RESEARCH METHODOLOGY (Literature Review)",
      description: "Comprehensive workshop on conducting systematic literature reviews, held on 22nd January 2020 at NCAS Auditorium.",
      date: "2020-01-22",
      category: "Workshop",
      speaker: "Prof. Madawa Chandratilake",
      location: "NCAS Auditorium",
      image: "/webinar-research.jpg",
      type: "workshop",
      content: "This intensive workshop covered advanced techniques for conducting systematic literature reviews, including database searching, critical appraisal, synthesis methods, and publication strategies."
    },
    {
      id: 9,
      title: "Guest Lecture on 'Current Issues in Higher Education Sector'",
      description: "Held on Thursday, 21st February, 2019 - Examining contemporary challenges and opportunities in higher education.",
      date: "2019-02-21",
      category: "Guest Lecture",
      speaker: "Education Policy Expert",
      image: "/guest-lecture-2019.jpg",
      type: "lecture",
      content: "This lecture addressed pressing issues in the higher education sector, including quality assurance, access and equity, internationalization, and the impact of technology on teaching and learning."
    }
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Guest Lectures / Webinars</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                NCAS hosts a series of guest lectures and webinars featuring renowned scholars and experts in humanities and social sciences.
              </p>
            </div>
          </div>
        </section>

        {/* Lectures Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lectures.map((lecture) => (
                <Card key={lecture.id} className="hover:shadow-lg transition-shadow duration-200">
                  {lecture.image && lecture.type === "image" && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={lecture.image}
                        alt={lecture.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{lecture.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {lecture.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{lecture.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{lecture.description}</p>

                    {lecture.speaker && (
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <User className="h-4 w-4 mr-1" />
                        {lecture.speaker}
                      </div>
                    )}

                    {lecture.location && (
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {lecture.location}
                      </div>
                    )}

                    <div className="space-y-2">
                      {lecture.type === "registration" && lecture.registrationLink && (
                        <Button asChild className="w-full" size="sm">
                          <a href={lecture.registrationLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Register Now
                          </a>
                        </Button>
                      )}

                      {lecture.type === "document" && (
                        <Button asChild variant="outline" className="w-full" size="sm">
                          <a href={lecture.image} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" />
                            View Document
                          </a>
                        </Button>
                      )}

                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Speaker Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Speakers</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Prof. P.M. C. Lal Thilakarathne</CardTitle>
                  <p className="text-muted-foreground">Professor of Accounting</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Qualifications</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• B.Com. (Kelaniya)</li>
                        <li>• M.Com. (Panjab)</li>
                        <li>• Ph.D. (Aegean)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Position</h4>
                      <p className="text-sm text-muted-foreground">
                        Professor of Accounting<br />
                        Director – Centre for Distance and Continuing Education<br />
                        University of Kelaniya
                      </p>
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/prof-lal-thilakarathne.jpg"
                        alt="Prof. P.M. C. Lal Thilakarathne"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Prof. Madawa Chandratilake</CardTitle>
                  <p className="text-muted-foreground">Research Methodology Expert</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Workshop Conducted</h4>
                      <p className="text-sm text-muted-foreground">
                        "Workshop on Research Methodology (Literature Review)"<br />
                        Held on 22nd January 2020<br />
                        At NCAS Auditorium
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Workshop Images</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <Image
                            src="/webinar-research.jpg"
                            alt="Workshop Session 1"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <Image
                            src="/workshop-research-2.jpg"
                            alt="Workshop Session 2"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <Image
                            src="/workshop-research-3.jpg"
                            alt="Workshop Session 3"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  For more information about Guest Lectures and Webinars, please contact NCAS.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      6A, Sukhastan Gardens<br />
                      Ward Place, Colombo – 07<br />
                      Sri Lanka
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Contact Details</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>📞 Phone: +94 011 2680849</p>
                      <p>📠 Fax: +94 011 269 3975</p>
                      <p>✉️ Email: info@ncas.ac.lk</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      </div>
  )
}