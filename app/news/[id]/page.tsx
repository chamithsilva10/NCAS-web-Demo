import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const getArticle = (id: string) => {
  const articles = [
    {
      id: 1,
      title: "Calling Applications for the Post of Research Fellow",
      content: `
        <p>The National Centre for Advanced Studies in Humanities & Social Sciences (NCAS) invites applications for the position of Research Fellow. This is an excellent opportunity for emerging scholars to work alongside established researchers and contribute to groundbreaking research projects.</p>
        
        <h3>Position Requirements:</h3>
        <ul>
          <li>PhD in relevant field of humanities or social sciences</li>
          <li>Demonstrated research experience and publications</li>
          <li>Strong analytical and writing skills</li>
          <li>Ability to work collaboratively in interdisciplinary teams</li>
        </ul>
        
        <h3>Responsibilities:</h3>
        <ul>
          <li>Conduct independent research in assigned areas</li>
          <li>Collaborate with senior researchers on ongoing projects</li>
          <li>Contribute to academic publications and presentations</li>
          <li>Participate in academic conferences and workshops</li>
          <li>Mentor junior researchers and graduate students</li>
        </ul>
        
        <h3>Application Process:</h3>
        <p>Interested candidates should submit their complete application including CV, research statement, writing samples, and three letters of recommendation by the deadline specified in the official announcement.</p>
        
        <p>For more information and to access the application form, please visit our careers section or contact the Human Resources department.</p>
      `,
      date: "2024-03-15",
      category: "Vacancies",
      author: "NCAS Administration",
      image: "/academic-research-office.jpg",
    },
    // Add more articles as needed
  ]

  return articles.find((article) => article.id === Number.parseInt(id))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticle(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/news">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="default">{article.category}</Badge>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">{article.title}</h1>

              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      Funding
                    </Badge>
                    <h4 className="font-semibold mb-2">Short Term Research Grants Available</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      New funding opportunities for emerging scholars in humanities and social sciences.
                    </p>
                    <Link href="/news/2">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      International
                    </Badge>
                    <h4 className="font-semibold mb-2">International Collaboration Programs</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Expanding research horizons through global partnerships and academic exchange.
                    </p>
                    <Link href="/news/3">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
