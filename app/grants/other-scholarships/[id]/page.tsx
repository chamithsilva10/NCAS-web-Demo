

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, MapPin, Calendar, Award, Building, Globe } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const scholarships = [
  {
    id: 1,
    title: "RMIT-UGC Scholarship Scheme 2025",
    organization: "University Grants Commission Sri Lanka & RMIT University",
    country: "Australia",
    type: "PhD Scholarship",
    description: "Joint PhD programme between UGC Sri Lanka and RMIT University, Australia",
    deadline: "2025",
    link: "https://ugc.ac.lk/index.php?option=com_content&view=article&id=2540:rmit-ugc-scholarship-scheme-2024&catid=131:others&lang=en",
    content: "Content will be loaded from external source"
  },
  {
    id: 2,
    title: "ANU CASS Global South Visiting Fellowship",
    organization: "Australian National University",
    country: "Australia",
    type: "Visiting Fellowship",
    description: "Fellowship for researchers from the Global South",
    deadline: "Ongoing",
    link: "/downloads/ANU-CASS-Global-South-Visiting-Fellowship.pdf",
    content: "Content will be loaded from external source"
  },
  {
    id: 3,
    title: "Priority Social Science Grants",
    organization: "Association of Asian Social Science Research Councils (AASSREC)",
    country: "Asia",
    type: "Research Grant",
    description: "Grants for priority social science research projects",
    deadline: "Ongoing",
    link: "https://aassrec.org/priority-social-science-grants/",
    content: "AASSREC's Priority Social Science Grant Program supports international collaboration between social science researchers in the Indo-Pacific region to carry out and disseminate high-quality research on complex socio-economic problems of mutual interest. The purpose of the program is to forge meaningful regional research collaborations that generate knowledge to support evidence-based policy and innovation. It seeks to foster enduring relationships and cooperation between Indo-Pacific countries that advance and support inclusive and sustainable development in the region. Increasing and advancing gender equity and social inclusion is also a major objective of the program. This program is designed to support research activities involving researchers from at least two different countries in the Asia Pacific region working together on a social science research project. The proposal may include: activities to support collaboration in an ongoing research project, or activities that help to develop or pilot a new collaborative research project. Priority consideration is given to projects aligned with themes: Advancing Gender Equality, Sustainability and Climate Change, State and Social Transformations, Indigenous knowledge systems, and Intergenerational inequality."
  },
  {
    id: 4,
    title: "Yeungnam University Scholarships",
    organization: "Yeungnam University",
    country: "South Korea",
    type: "Masters Scholarship",
    description: "Scholarships for Masters Degree Programmes of Park Chung Hee School of Policy and Saemaul",
    deadline: "2025",
    link: "/grants/other-scholarships/yeungnam-university",
    content: "Scholarship opportunities for Masters Degree Programmes of Park Chung Hee School of Policy and Saemaul at Yeungnam University in the Republic of Korea. NCAS has shared information about scholarship opportunities available at Yeungnam University. For detailed information, please refer to the attached documents: Details for Scholarships-Yeungnam University, Scholarship Opportunities – Republic of Korea, and Letter sent to universities."
  },
  {
    id: 5,
    title: "PhD Opportunities at Poland",
    organization: "University of Szczecin",
    country: "Poland",
    type: "PhD Programme",
    description: "Doctoral programmes at the University of Szczecin",
    deadline: "2025",
    link: "/grants/other-scholarships/szczecin-university",
    content: "Content will be loaded from external source"
  },
  {
    id: 6,
    title: "University of Science and Technology of China",
    organization: "USTC",
    country: "China",
    type: "Scholarships Program",
    description: "Various scholarship programmes for international students",
    deadline: "Ongoing",
    link: "https://isa.ustc.edu.cn/xs/login_scho.asp",
    content: "Content will be loaded from external source"
  },
  {
    id: 7,
    title: "DAAD Development-Related Postgraduate Courses",
    organization: "German Academic Exchange Service",
    country: "Germany",
    type: "Postgraduate Courses",
    description: "Development-related postgraduate courses (EPOS) 2022/2023",
    deadline: "2023",
    link: "/grants/other-scholarships/daad-epos",
    content: "Content will be loaded from external source"
  },
  {
    id: 8,
    title: "South Asian University",
    organization: "SAU",
    country: "India",
    type: "Masters & PhD",
    description: "Masters and PhD programmes at South Asian University",
    deadline: "Ongoing",
    link: "http://www.sau.int/",
    content: "Content will be loaded from external source"
  },
  {
    id: 9,
    title: "Türkiye Scholarships",
    organization: "Government of Turkey",
    country: "Turkey",
    type: "Full Scholarship",
    description: "Full scholarships for international students",
    deadline: "2025",
    link: "/downloads/Embassy_Turkey-20230112_0024.pdf",
    content: "Content will be loaded from external source"
  },
  {
    id: 10,
    title: "Georg Forster Research Fellowship",
    organization: "Alexander von Humboldt Foundation",
    country: "Germany",
    type: "Research Fellowship",
    description: "Fellowship for postdoctoral and experienced researchers",
    deadline: "Ongoing",
    link: "https://ncas.ac.lk/georg-forster-research-fellowship/",
    content: "The Alexander von Humboldt Foundation is sponsoring researchers with above-average qualifications from all fields, through the Georg Forster Research Fellowship. The Georg Forster Research Fellowship supports postdoctoral and experienced researchers, from developing and transition countries (including Sri Lanka), with their research in Germany. For Postdocs: For those who are at the beginning of their academic career, should have completed the doctorate less than 04 years ago, monthly fellowship amount is €2,670, duration from 6 to 24 months. For Experienced researchers: For experienced researchers who are well advanced in their academic career, should have completed the doctorate less than 12 years ago, monthly fellowship amount is €3,170, duration from 6 to 18 months and can be divided into up to three stays within three years. Applications are reviewed in February, June and October. For more details visit: https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/georg-forster-research-fellowship"
  },
  {
    id: 11,
    title: "Allama Iqbal Scholarships",
    organization: "Higher Education Commission Pakistan",
    country: "Pakistan",
    type: "Higher Education",
    description: "Pak-Sri Lanka Higher Education Cooperation Programme scholarships",
    deadline: "2025",
    link: "https://ncas.ac.lk/pak-sri-lanka-higher-education-cooperation-programmehec-allama-iqbal-scholarships-for-sri-lankan-students/",
    content: "Content will be loaded from external source"
  },
  {
    id: 12,
    title: "Scholarship Programmes Thailand",
    organization: "Government of Thailand",
    country: "Thailand",
    type: "Various Scholarships",
    description: "Various scholarship programmes offered by Thailand",
    deadline: "2025",
    link: "https://ncas.ac.lk/scholarship-programmes-thailand/",
    content: "Content will be loaded from external source"
  },
  {
    id: 13,
    title: "South Ural State University",
    organization: "South Ural State University",
    country: "Russia",
    type: "Masters & PhD",
    description: "Masters and PhD programmes for Sri Lankan students",
    deadline: "2025",
    link: "/downloads/South-Ural-State-University-Russia.pdf",
    content: "Content will be loaded from external source"
  },
  {
    id: 14,
    title: "Hong Kong PhD Fellowship Scheme",
    organization: "Research Grants Council of Hong Kong",
    country: "Hong Kong",
    type: "PhD Fellowship",
    description: "PhD fellowship scheme for 2022/23",
    deadline: "2023",
    link: "https://ncas.ac.lk/honk-kong-phd-fellowship-scheme-2022-23/",
    content: "Content will be loaded from external source"
  }
]

interface ScholarshipDetailPageProps {
  params: {
    id: string
  }
}

export default function ScholarshipDetailPage({ params }: ScholarshipDetailPageProps) {
  const scholarship = scholarships.find(s => s.id === parseInt(params.id))

  if (!scholarship) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/grants/other-scholarships">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Scholarships
            </Link>
          </Button>

          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <Badge variant="secondary">{scholarship.country}</Badge>
            <Badge variant="outline">{scholarship.type}</Badge>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2">{scholarship.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{scholarship.organization}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Organization</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-sm">{scholarship.organization}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Country</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-sm">{scholarship.country}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Deadline</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-sm">{scholarship.deadline}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{scholarship.description}</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Detailed Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                {scholarship.content}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href={scholarship.link} target="_blank">
              <ExternalLink className="h-4 w-4 mr-2" />
              Apply Now (External Link)
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/grants/other-scholarships">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View All Scholarships
            </Link>
          </Button>
        </div>

        <div className="mt-8 bg-muted/50 rounded-lg p-6">
          <h3 className="font-medium mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For assistance with scholarship applications or additional information,
            please contact NCAS through our contact page.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">Contact NCAS</Link>
          </Button>
        </div>
      </main>
      </div>
  )
}