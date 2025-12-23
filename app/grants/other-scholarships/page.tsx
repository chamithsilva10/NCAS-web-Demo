import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Calendar, Award, Globe } from "lucide-react"
import Link from "next/link"

const scholarships = [
  {
    id: 1,
    title: "RMIT-UGC Scholarship Scheme 2025",
    organization: "University Grants Commission Sri Lanka & RMIT University",
    country: "Australia",
    type: "PhD Scholarship",
    description: "Joint PhD programme between UGC Sri Lanka and RMIT University, Australia",
    deadline: "2025",
    link: "https://ugc.ac.lk/index.php?option=com_content&view=article&id=2540:rmit-ugc-scholarship-scheme-2024&catid=131:others&lang=en"
  },
  {
    id: 2,
    title: "ANU CASS Global South Visiting Fellowship",
    organization: "Australian National University",
    country: "Australia",
    type: "Visiting Fellowship",
    description: "Fellowship for researchers from the Global South",
    deadline: "Ongoing",
    link: "https://ncas.ac.lk/wp-content/uploads/2024/09/ANU-CASS-Global-South-Visiting-Fellowship.pdf"
  },
  {
    id: 3,
    title: "Priority Social Science Grants",
    organization: "Association of Asian Social Science Research Councils (AASSREC)",
    country: "Asia",
    type: "Research Grant",
    description: "Grants for priority social science research projects",
    deadline: "Ongoing",
    link: "https://aassrec.org/priority-social-science-grants/"
  },
  {
    id: 4,
    title: "Yeungnam University Scholarships",
    organization: "Yeungnam University",
    country: "South Korea",
    type: "Masters Scholarship",
    description: "Scholarships for Masters Degree Programmes of Park Chung Hee School of Policy and Saemaul",
    deadline: "2025",
    link: "https://ncas.ac.lk/scholarship-opportunities-for-masters-degree-programmes-of-park-chung-hee-school-of-policy-and-saemaul-at-yeungnam-university-in-the-republic-of-korea/"
  },
  {
    id: 5,
    title: "PhD Opportunities at Poland",
    organization: "University of Szczecin",
    country: "Poland",
    type: "PhD Programme",
    description: "Doctoral programmes at the University of Szczecin",
    deadline: "2025",
    link: "https://ncas.ac.lk/phd-opportunities-at-poland-doctoral-school-of-the-university-of-szczecin/"
  },
  {
    id: 6,
    title: "University of Science and Technology of China",
    organization: "USTC",
    country: "China",
    type: "Scholarships Program",
    description: "Various scholarship programmes for international students",
    deadline: "Ongoing",
    link: "https://isa.ustc.edu.cn/xs/login_scho.asp"
  },
  {
    id: 7,
    title: "DAAD Development-Related Postgraduate Courses",
    organization: "German Academic Exchange Service",
    country: "Germany",
    type: "Postgraduate Courses",
    description: "Development-related postgraduate courses (EPOS) 2022/2023",
    deadline: "2023",
    link: "https://ncas.ac.lk/daad-development-related-postgraduate-courses-epos-2022-2023"
  },
  {
    id: 8,
    title: "South Asian University",
    organization: "SAU",
    country: "India",
    type: "Masters & PhD",
    description: "Masters and PhD programmes at South Asian University",
    deadline: "Ongoing",
    link: "http://www.sau.int/"
  },
  {
    id: 9,
    title: "Türkiye Scholarships",
    organization: "Government of Turkey",
    country: "Turkey",
    type: "Full Scholarship",
    description: "Full scholarships for international students",
    deadline: "2025",
    link: "https://ncas.ac.lk/wp-content/uploads/2014/10/Embassy_Turkey-20230112_0024.pdf"
  },
  {
    id: 10,
    title: "Georg Forster Research Fellowship",
    organization: "Alexander von Humboldt Foundation",
    country: "Germany",
    type: "Research Fellowship",
    description: "Fellowship for postdoctoral and experienced researchers",
    deadline: "Ongoing",
    link: "https://ncas.ac.lk/georg-forster-research-fellowship/"
  },
  {
    id: 11,
    title: "Allama Iqbal Scholarships",
    organization: "Higher Education Commission Pakistan",
    country: "Pakistan",
    type: "Higher Education",
    description: "Pak-Sri Lanka Higher Education Cooperation Programme scholarships",
    deadline: "2025",
    link: "https://ncas.ac.lk/pak-sri-lanka-higher-education-cooperation-programmehec-allama-iqbal-scholarships-for-sri-lankan-students/"
  },
  {
    id: 12,
    title: "Scholarship Programmes Thailand",
    organization: "Government of Thailand",
    country: "Thailand",
    type: "Various Scholarships",
    description: "Various scholarship programmes offered by Thailand",
    deadline: "2025",
    link: "https://ncas.ac.lk/scholarship-programmes-thailand/"
  },
  {
    id: 13,
    title: "South Ural State University",
    organization: "South Ural State University",
    country: "Russia",
    type: "Masters & PhD",
    description: "Masters and PhD programmes for Sri Lankan students",
    deadline: "2025",
    link: "https://ncas.ac.lk/wp-content/uploads/2014/10/Invitation-for-Sri-Lankan-Students-to-Applv-to-the-South-Ural-State-University-in-Russia.pdf"
  },
  {
    id: 14,
    title: "Hong Kong PhD Fellowship Scheme",
    organization: "Research Grants Council of Hong Kong",
    country: "Hong Kong",
    type: "PhD Fellowship",
    description: "PhD fellowship scheme for 2022/23",
    deadline: "2023",
    link: "https://ncas.ac.lk/honk-kong-phd-fellowship-scheme-2022-23/"
  }
]

export default function OtherScholarshipsPage() {
  // Group scholarships by country
  const scholarshipsByCountry = scholarships.reduce((acc, scholarship) => {
    if (!acc[scholarship.country]) {
      acc[scholarship.country] = []
    }
    acc[scholarship.country].push(scholarship)
    return acc
  }, {} as Record<string, typeof scholarships>)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Other Scholarships & Fellowships</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of international scholarship and fellowship opportunities
            available to Sri Lankan researchers and students in humanities and social sciences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Opportunities</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{scholarships.length}</div>
              <p className="text-xs text-muted-foreground">Scholarships & fellowships</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.keys(scholarshipsByCountry).length}</div>
              <p className="text-xs text-muted-foreground">Countries represented</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Types</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(scholarships.map(s => s.type)).size}
              </div>
              <p className="text-xs text-muted-foreground">Different programme types</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {Object.entries(scholarshipsByCountry).map(([country, countryScholarships]) => (
            <div key={country} className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">{country}</h2>
                <Badge variant="secondary">{countryScholarships.length} opportunities</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {countryScholarships.map((scholarship) => (
                  <Card key={scholarship.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{scholarship.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mb-2">{scholarship.organization}</p>
                          <Badge variant="outline" className="mb-2">{scholarship.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{scholarship.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          Deadline: {scholarship.deadline}
                        </div>
                        <Button asChild size="sm">
                          <Link href={`/grants/other-scholarships/${scholarship.id}`}>
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">NCAS-QUT PhD Scholarships</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Joint PhD programme with Queensland University of Technology, Australia.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/grants/qut-scholarships">Learn More</Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-2">Research Colloquium</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Annual research colloquium showcasing emerging scholars' work.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/grants/research-colloquium">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}