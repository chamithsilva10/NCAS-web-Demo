import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, FileText, Users, Clock, Download, Eye } from "lucide-react"

export default function CouncilMeetingsPage() {
  const upcomingMeetings = [
    {
      date: "2024-03-25",
      time: "2:00 PM - 5:00 PM",
      type: "Regular Council Meeting",
      venue: "NCAS Boardroom",
      agenda: "Budget Review, Academic Programs, Research Initiatives",
      status: "Scheduled",
    },
    {
      date: "2024-04-22",
      time: "2:00 PM - 5:00 PM",
      type: "Regular Council Meeting",
      venue: "NCAS Boardroom",
      agenda: "Policy Updates, International Collaborations, Infrastructure",
      status: "Scheduled",
    },
    {
      date: "2024-05-20",
      time: "2:00 PM - 5:00 PM",
      type: "Regular Council Meeting",
      venue: "NCAS Boardroom",
      agenda: "Annual Review, Strategic Planning, Faculty Appointments",
      status: "Scheduled",
    },
  ]

  const pastMeetings = [
    {
      date: "2024-02-26",
      type: "Regular Council Meeting",
      decisions: 8,
      attendees: 12,
      minutesAvailable: true,
      keyDecisions: [
        "Approved new PhD program in Digital Humanities",
        "Allocated budget for library digitization project",
        "Endorsed partnership with Queensland University",
      ],
    },
    {
      date: "2024-01-22",
      type: "Regular Council Meeting",
      decisions: 6,
      attendees: 11,
      minutesAvailable: true,
      keyDecisions: [
        "Approved 2024 research grant allocations",
        "Ratified new faculty appointments",
        "Endorsed symposium 2024 theme and budget",
      ],
    },
    {
      date: "2023-12-18",
      type: "Special Council Meeting",
      decisions: 4,
      attendees: 13,
      minutesAvailable: true,
      keyDecisions: [
        "Approved annual budget for 2024",
        "Endorsed strategic plan 2024-2027",
        "Approved infrastructure development projects",
      ],
    },
  ]

  const councilMembers = [
    {
      name: "Prof. Malini Silva",
      position: "Chairperson",
      affiliation: "NCAS",
      expertise: "Cultural Anthropology",
    },
    {
      name: "Dr. Asanka Perera",
      position: "Vice-Chairperson",
      affiliation: "University of Colombo",
      expertise: "Development Economics",
    },
    {
      name: "Prof. Sandya Wickramasinghe",
      position: "Member",
      affiliation: "University of Peradeniya",
      expertise: "Political Science",
    },
    {
      name: "Dr. Priya Fernando",
      position: "Member",
      affiliation: "NCAS",
      expertise: "Digital Humanities",
    },
    {
      name: "Prof. Roshan Jayawardena",
      position: "Member",
      affiliation: "University of Kelaniya",
      expertise: "Sociology",
    },
    {
      name: "Dr. Chaminda Rathnayake",
      position: "Member",
      affiliation: "NCAS",
      expertise: "History",
    },
  ]

  const meetingProcedures = [
    {
      title: "Meeting Schedule",
      description: "Regular meetings held on the last Monday of each month at 2:00 PM",
    },
    {
      title: "Agenda Setting",
      description: "Agenda items must be submitted 7 days before the meeting date",
    },
    {
      title: "Quorum Requirements",
      description: "Minimum 7 members required for valid decision-making",
    },
    {
      title: "Decision Making",
      description: "Decisions made by majority vote with detailed minute recording",
    },
    {
      title: "Minutes Publication",
      description: "Meeting minutes published within 14 days of the meeting",
    },
    {
      title: "Public Access",
      description: "Non-confidential minutes available for public viewing",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Council Meetings</h1>
                <p className="text-xl text-primary-foreground/90">Governance and Decision Making</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Transparent governance through regular council meetings and public access to decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                View Latest Minutes
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Meeting Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Meetings</TabsTrigger>
            <TabsTrigger value="members">Council Members</TabsTrigger>
            <TabsTrigger value="procedures">Procedures</TabsTrigger>
          </TabsList>

          {/* Upcoming Meetings Tab */}
          <TabsContent value="upcoming" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Upcoming Council Meetings</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Schedule of upcoming council meetings and their agendas
              </p>
            </div>

            <div className="space-y-6">
              {upcomingMeetings.map((meeting, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{meeting.type}</CardTitle>
                        <CardDescription className="mt-2">
                          {new Date(meeting.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{meeting.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{meeting.venue}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Agenda Items</h4>
                        <p className="text-sm text-muted-foreground">{meeting.agenda}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <Button variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        View Full Agenda
                      </Button>
                      <Button variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Add to Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Meeting Information */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Meeting Information</CardTitle>
                <CardDescription className="text-blue-700">
                  Important information about council meetings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Public Attendance</h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Members of the public may attend council meetings during open sessions. Please contact the
                      secretariat for advance registration.
                    </p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Register to Attend
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Meeting Documents</h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Agendas are published 3 days before meetings. Minutes are available within 14 days after each
                      meeting.
                    </p>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                      Document Archive
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Past Meetings Tab */}
          <TabsContent value="past" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Past Council Meetings</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Archive of past meetings with minutes and key decisions
              </p>
            </div>

            <div className="space-y-6">
              {pastMeetings.map((meeting, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{meeting.type}</CardTitle>
                        <CardDescription className="mt-2">
                          {new Date(meeting.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </CardDescription>
                      </div>
                      <Badge variant={meeting.minutesAvailable ? "default" : "secondary"}>
                        {meeting.minutesAvailable ? "Minutes Available" : "Processing"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{meeting.decisions}</div>
                        <div className="text-sm text-muted-foreground">Decisions Made</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{meeting.attendees}</div>
                        <div className="text-sm text-muted-foreground">Members Present</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">100%</div>
                        <div className="text-sm text-muted-foreground">Quorum Met</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Decisions</h4>
                      <ul className="space-y-2">
                        {meeting.keyDecisions.map((decision, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{decision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" disabled={!meeting.minutesAvailable}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Minutes
                      </Button>
                      <Button variant="outline" disabled={!meeting.minutesAvailable}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Archive Access */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Archive</CardTitle>
                <CardDescription>Access to all council meeting records since 2019</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="mb-4">
                    Browse Full Archive
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Search by date, topic, or decision type • Download individual or bulk documents
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Council Members Tab */}
          <TabsContent value="members" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Council Members</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Distinguished academics and professionals governing NCAS
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {councilMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-muted-foreground mb-2">{member.affiliation}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Council Information */}
            <Card>
              <CardHeader>
                <CardTitle>Council Composition</CardTitle>
                <CardDescription>Structure and representation of the NCAS Council</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">13</div>
                    <p className="text-muted-foreground">Total Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <p className="text-muted-foreground">External Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-muted-foreground">Year Terms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Procedures Tab */}
          <TabsContent value="procedures" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Meeting Procedures</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Governance procedures and protocols for council meetings
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {meetingProcedures.map((procedure, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{procedure.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{procedure.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Governance Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Governance Documents</CardTitle>
                <CardDescription>Official documents governing council operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Council Charter
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Meeting Procedures
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Code of Conduct
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Conflict of Interest Policy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Contact Council Secretariat</CardTitle>
                <CardDescription className="text-green-700">
                  For inquiries about council meetings and procedures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">General Inquiries</h4>
                    <p className="text-sm text-green-700 mb-2">
                      <strong>Email:</strong> council@ncas.ac.lk
                    </p>
                    <p className="text-sm text-green-700 mb-2">
                      <strong>Phone:</strong> +94 11 269 1056 (Ext. 205)
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Meeting Attendance</h4>
                    <p className="text-sm text-green-700 mb-3">
                      To register for public attendance at council meetings, please contact the secretariat at least 48
                      hours in advance.
                    </p>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Contact Secretariat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
