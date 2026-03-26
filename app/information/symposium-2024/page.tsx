import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Award, Download, Clock, Globe, BookOpen, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Symposium2024Page() {
  const keynoteSpeakers = [
    {
      name: "Prof. Sarah Johnson",
      affiliation: "Queensland University of Technology, Australia",
      topic: "Digital Heritage in the Post-Colonial Context",
      bio: "Leading expert in digital humanities and cultural heritage preservation with over 20 years of experience.",
      image: "/keynote-speaker-1.jpg",
    },
    {
      name: "Dr. Rajesh Kochhar",
      affiliation: "Indian Institute of Science Education and Research, India",
      topic: "Science, Technology and Society in South Asia",
      bio: "Renowned historian of science and technology with focus on colonial and post-colonial scientific developments.",
      image: "/keynote-speaker-2.jpg",
    },
    {
      name: "Prof. Emma Wilson",
      affiliation: "University of Cambridge, UK",
      topic: "Memory, Trauma and Reconciliation in Post-Conflict Societies",
      bio: "Expert in post-conflict studies and transitional justice with extensive fieldwork experience.",
      image: "/keynote-speaker-3.jpg",
    },
  ]

  const sessions = [
    {
      time: "9:00 AM - 10:30 AM",
      title: "Opening Ceremony & Keynote Address",
      speaker: "Prof. Sarah Johnson",
      location: "Main Auditorium",
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Panel 1: Digital Humanities and Cultural Heritage",
      speaker: "Multiple Speakers",
      location: "Conference Hall A",
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Panel 2: Post-Colonial Studies and Identity",
      speaker: "Multiple Speakers",
      location: "Conference Hall B",
    },
    {
      time: "4:00 PM - 5:30 PM",
      title: "Panel 3: Science, Technology and Society",
      speaker: "Dr. Rajesh Kochhar",
      location: "Main Auditorium",
    },
  ]

  const importantDates = [
    { date: "September 15, 2024", event: "Call for Papers Released" },
    { date: "October 31, 2024", event: "Abstract Submission Deadline" },
    { date: "November 15, 2024", event: "Notification of Acceptance" },
    { date: "November 25, 2024", event: "Early Bird Registration Ends" },
    { date: "November 28, 2024", event: "Symposium Day" },
  ]

  const registrationFees = [
    { category: "Local Academics", earlyBird: "LKR 5,000", regular: "LKR 7,000" },
    { category: "International Academics", earlyBird: "USD 50", regular: "USD 75" },
    { category: "Students (Local)", earlyBird: "LKR 2,500", regular: "LKR 3,500" },
    { category: "Students (International)", earlyBird: "USD 25", regular: "USD 35" },
  ]

  const photoGallery = [
    { src: "/symposium-2024/MG_0087-1024x960.jpg", alt: "Opening ceremony", caption: "Inaugural session with keynote speakers" },
    { src: "/symposium-2024/MG_0090-1024x687.jpg", alt: "Panel discussion", caption: "Interactive panel on heritage and identity" },
    { src: "/symposium-2024/MG_0101-1024x615.jpg", alt: "Audience engagement", caption: "Participants actively engaged in discussions" },
    { src: "/symposium-2024/MG_0109-1024x901.jpg", alt: "Cultural presentation", caption: "Traditional cultural performances" },
    { src: "/symposium-2024/MG_0118-1024x567.jpg", alt: "Poster session", caption: "Research posters and presentations" },
    { src: "/symposium-2024/MG_0122-1024x679.jpg", alt: "Networking session", caption: "Participants networking during breaks" },
    { src: "/symposium-2024/MG_0123-1024x526.jpg", alt: "Closing ceremony", caption: "Vote of thanks and closing remarks" },
    { src: "/symposium-2024/IRSSSH2024-banner-1024x500.jpg", alt: "Symposium banner", caption: "Official symposium banner and branding" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  6th International Research Symposium 2024
                </h1>
                <p className="text-xl text-primary-foreground/90">Heritage, Identity and Transformation</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Exploring the intersections of cultural heritage, identity formation, and social transformation in the
              contemporary world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Register Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Download Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="speakers">Speakers</TabsTrigger>
            <TabsTrigger value="program">Program</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="venue">Venue</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Symposium Overview</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us for our premier annual research symposium bringing together scholars from around the world
              </p>
            </div>

            {/* Key Information */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Date</h3>
                  <p className="text-sm text-muted-foreground">November 28, 2024</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Venue</h3>
                  <p className="text-sm text-muted-foreground">NCAS Main Campus</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Expected</h3>
                  <p className="text-sm text-muted-foreground">200+ Participants</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Countries</h3>
                  <p className="text-sm text-muted-foreground">15+ Nations</p>
                </CardContent>
              </Card>
            </div>

            {/* Theme Description */}
            <Card>
              <CardHeader>
                <CardTitle>Symposium Theme</CardTitle>
                <CardDescription>Heritage, Identity and Transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The 6th International Research Symposium explores the complex relationships between cultural heritage,
                  identity formation, and social transformation in our rapidly changing world. We invite scholars to
                  examine how communities negotiate their past, present, and future through various forms of cultural
                  expression, memory practices, and identity construction.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Sub-themes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Digital Heritage and Technology</li>
                      <li>• Post-Colonial Identity Formation</li>
                      <li>• Memory and Reconciliation</li>
                      <li>• Cultural Tourism and Development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Disciplines</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Anthropology</li>
                      <li>• History</li>
                      <li>• Cultural Studies</li>
                      <li>• Sociology</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formats</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Keynote Presentations</li>
                      <li>• Panel Discussions</li>
                      <li>• Poster Sessions</li>
                      <li>• Workshops</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium">{item.event}</span>
                      <Badge variant="outline">{item.date}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Speakers Tab */}
          <TabsContent value="speakers" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Keynote Speakers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Distinguished scholars and researchers from leading international institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keynoteSpeakers.map((speaker, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{speaker.name}</h3>
                    <p className="text-primary font-medium mb-2">{speaker.affiliation}</p>
                    <p className="text-sm font-medium mb-3">"{speaker.topic}"</p>
                    <p className="text-xs text-muted-foreground">{speaker.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call for Papers */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Call for Papers</CardTitle>
                <CardDescription className="text-blue-700">
                  We invite submissions from researchers and scholars
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Submission Guidelines</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• Abstract: 250-300 words</li>
                      <li>• Keywords: 5-7 relevant terms</li>
                      <li>• Author bio: 100 words maximum</li>
                      <li>• Presentation: 15-20 minutes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Review Process</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• Double-blind peer review</li>
                      <li>• Academic committee evaluation</li>
                      <li>• Notification within 2 weeks</li>
                      <li>• Publication opportunities available</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">Submit Abstract</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Program Tab */}
          <TabsContent value="program" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Program Schedule</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Detailed schedule for November 28, 2024</p>
            </div>

            <div className="space-y-6">
              {sessions.map((session, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-24 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {session.time}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{session.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{session.speaker}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{session.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download Program */}
            <Card>
              <CardHeader>
                <CardTitle>Program Materials</CardTitle>
                <CardDescription>Download detailed program and presentation materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Full Program (PDF)
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Abstract Book
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Participant List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registration Tab */}
          <TabsContent value="registration" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Registration Information</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Register now to secure your place at the symposium
              </p>
            </div>

            {/* Registration Fees */}
            <Card>
              <CardHeader>
                <CardTitle>Registration Fees</CardTitle>
                <CardDescription>Early bird rates available until November 25, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Category</th>
                        <th className="text-left p-4">Early Bird</th>
                        <th className="text-left p-4">Regular</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrationFees.map((fee, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-4 font-medium">{fee.category}</td>
                          <td className="p-4 text-green-600 font-semibold">{fee.earlyBird}</td>
                          <td className="p-4">{fee.regular}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle>Registration Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Conference Materials</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-green-600" />
                        <span>Conference program and abstract book</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-green-600" />
                        <span>Digital access to presentations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-green-600" />
                        <span>Certificate of participation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Refreshments</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>Welcome coffee and registration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>Morning and afternoon tea breaks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>Networking lunch</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle>Online Registration</CardTitle>
                <CardDescription>Complete your registration in minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="mb-4">
                    Register Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Secure payment processing • Instant confirmation • Early bird rates available
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Venue Tab */}
          <TabsContent value="venue" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Venue Information</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The symposium will be held at the NCAS main campus in Colombo
              </p>
            </div>

            {/* Venue Details */}
            <Card>
              <CardHeader>
                <CardTitle>NCAS Main Campus</CardTitle>
                <CardDescription>National Centre for Advanced Studies in Humanities & Social Sciences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Address</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      No. 35/2, Kynsey Road
                      <br />
                      Colombo 08
                      <br />
                      Sri Lanka
                    </p>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      Phone: +94 11 269 1056
                      <br />
                      Email: info@ncas.ac.lk
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Facilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Main auditorium (capacity: 200)</li>
                      <li>• Two conference halls (capacity: 50 each)</li>
                      <li>• Modern AV equipment</li>
                      <li>• High-speed WiFi</li>
                      <li>• Parking facilities</li>
                      <li>• Accessible for disabled participants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
                <CardDescription>Transportation options to reach the venue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">From Airport</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Taxi: 45 minutes (LKR 3,000)</li>
                      <li>• Airport Express Bus: 1 hour</li>
                      <li>• Uber/PickMe: Available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Public Transport</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bus routes: 138, 177, 120</li>
                      <li>• Nearest station: Borella</li>
                      <li>• Three-wheeler: Widely available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Parking</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• On-site parking available</li>
                      <li>• Limited spaces (first come basis)</li>
                      <li>• Street parking nearby</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accommodation */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Accommodation</CardTitle>
                <CardDescription>Hotels near the venue with special rates for participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Luxury Hotels</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cinnamon Grand Colombo (5 km)</li>
                      <li>• Hilton Colombo (4 km)</li>
                      <li>• Shangri-La Colombo (6 km)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Budget Options</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hotel Sapphire (2 km)</li>
                      <li>• Colombo City Hotel (3 km)</li>
                      <li>• OZO Colombo (4 km)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline">View Hotel Booking Options</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Photo Gallery
                </CardTitle>
                <CardDescription>
                  Highlights from the 6th International Research Symposium on Social Sciences and Humanities 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {photoGallery.map((photo, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                        <p className="text-white text-sm p-3">{photo.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/information/gallery/all/ncas-6th-international-research-symposium-2024-photos">
                      <Camera className="h-4 w-4 mr-2" />
                      View Full 2024 Gallery
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
