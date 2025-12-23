import { Calendar, Clock, MapPin, Users, Award, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const workshopData = {
  1: {
    id: 1,
    title: "Digital Humanities Research Methods",
    description:
      "Learn cutting-edge digital tools and methodologies for humanities research including text mining, data visualization, and digital archives.",
    longDescription:
      "This comprehensive workshop introduces participants to the latest digital tools and methodologies transforming humanities research. Over two intensive days, you'll explore text mining techniques, data visualization principles, digital archive creation, and computational analysis methods. The workshop combines theoretical foundations with hands-on practice using industry-standard software and platforms.",
    date: "2024-02-15",
    endDate: "2024-02-16",
    time: "9:00 AM - 5:00 PM",
    location: "NCAS Main Campus, Colombo",
    duration: "2 days",
    capacity: "25 participants",
    level: "Intermediate",
    instructor: "Dr. Sarah Johnson",
    instructorBio:
      "Dr. Sarah Johnson is a leading expert in digital humanities with over 15 years of experience. She has published extensively on computational methods in literary studies and has led digital archive projects at major universities worldwide.",
    fee: "LKR 15,000",
    image: "/academic-conference.png",
    prerequisites: [
      "Basic computer literacy",
      "Familiarity with research methods",
      "Undergraduate degree in humanities or social sciences",
    ],
    learningOutcomes: [
      "Master text mining and analysis techniques",
      "Create effective data visualizations for research",
      "Understand digital archive principles and practices",
      "Apply computational methods to humanities research",
      "Develop skills in digital research project management",
    ],
    schedule: [
      {
        day: "Day 1",
        sessions: [
          { time: "9:00-10:30", topic: "Introduction to Digital Humanities" },
          { time: "10:45-12:15", topic: "Text Mining Fundamentals" },
          { time: "1:15-2:45", topic: "Data Visualization Principles" },
          { time: "3:00-4:30", topic: "Hands-on: Creating Your First Visualization" },
        ],
      },
      {
        day: "Day 2",
        sessions: [
          { time: "9:00-10:30", topic: "Digital Archives and Metadata" },
          { time: "10:45-12:15", topic: "Computational Analysis Methods" },
          { time: "1:15-2:45", topic: "Project Planning and Management" },
          { time: "3:00-4:30", topic: "Final Projects and Presentations" },
        ],
      },
    ],
    materials: [
      "Workshop handbook and resources",
      "Access to digital tools and software",
      "Sample datasets for practice",
      "Certificate of completion",
    ],
  },
}

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  const workshop = workshopData[Number.parseInt(params.id) as keyof typeof workshopData]

  if (!workshop) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/workshops">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Workshops
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{workshop.level}</Badge>
              <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                {workshop.duration}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{workshop.title}</h1>
            <p className="text-xl text-primary-foreground/90 mb-6 text-pretty">{workshop.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(workshop.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{workshop.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{workshop.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Workshop Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{workshop.longDescription}</p>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Outcomes</CardTitle>
                <CardDescription>What you'll achieve by the end of this workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {workshop.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Workshop Schedule</CardTitle>
                <CardDescription>Detailed agenda for both days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {workshop.schedule.map((day, dayIndex) => (
                  <div key={dayIndex}>
                    <h4 className="font-semibold text-lg mb-3">{day.day}</h4>
                    <div className="space-y-2">
                      {day.sessions.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="flex gap-4 p-3 rounded-lg bg-muted/50">
                          <div className="font-mono text-sm text-muted-foreground min-w-[100px]">{session.time}</div>
                          <div className="font-medium">{session.topic}</div>
                        </div>
                      ))}
                    </div>
                    {dayIndex < workshop.schedule.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Meet Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{workshop.instructor}</h4>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{workshop.instructorBio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{workshop.fee}</CardTitle>
                <CardDescription>Per participant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Calendar
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Limited seats available</p>
                  <p className="text-green-600 font-medium">Early bird discount until Feb 1st</p>
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {workshop.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {workshop.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Have questions about this workshop? Contact our training team.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
