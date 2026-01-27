import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Globe, Search, Library, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ExternalLibrariesPage() {
  const digitalLibraries = [
    {
      name: "National Digital Library of India (NDLI)",
      url: "https://ndl.iitkgp.ac.in/",
      description: "A virtual repository of learning resources with a single-window search facility. Contains over 45 million resources from various domains.",
      category: "Academic"
    },
    {
      name: "JSTOR Open Access",
      url: "https://www.jstor.org/open/",
      description: "Free access to thousands of journal articles, books, and primary sources across disciplines.",
      category: "Journals"
    },
    {
      name: "Shodhganga",
      url: "https://shodhganga.inflibnet.ac.in/",
      description: "A reservoir of Indian theses and dissertations, maintained by INFLIBNET Centre.",
      category: "Theses"
    },
    {
      name: "ERIC (Education Resources Information Center)",
      url: "https://eric.ed.gov/",
      description: "An online library of education research and information sponsored by the Institute of Education Sciences.",
      category: "Education"
    },
  ]

  const freeEbookSites = [
    { name: "Project Gutenberg", url: "https://www.gutenberg.org/", description: "Over 60,000 free eBooks, focused on older works with expired US copyright" },
    { name: "Internet Archive", url: "https://archive.org/details/texts", description: "Non-profit library of millions of free books, movies, software, music, and more" },
    { name: "Open Library", url: "https://openlibrary.org/", description: "Open, editable library catalog with millions of books available to borrow" },
    { name: "ManyBooks", url: "https://manybooks.net/", description: "Over 50,000 free eBooks in various formats" },
    { name: "Bookboon", url: "https://bookboon.com/", description: "Free textbooks and business eBooks written exclusively for Bookboon" },
    { name: "Free-eBooks.net", url: "https://www.free-ebooks.net/", description: "Free ebooks collection including fiction, non-fiction, academic texts" },
    { name: "Standard Ebooks", url: "https://standardebooks.org/", description: "Free, open-source ebooks carefully formatted and typo-free" },
    { name: "Feedbooks", url: "https://www.feedbooks.com/", description: "Large catalog of free public domain and original ebooks" },
    { name: "LibriVox", url: "https://librivox.org/", description: "Free public domain audiobooks read by volunteers" },
    { name: "Bartleby", url: "https://www.bartleby.com/", description: "Reference works, verse, fiction, and nonfiction" },
    { name: "Digital Library of India", url: "http://dli.ernet.in/", description: "Preservation and enhanced access to Indian literary heritage" },
    { name: "PDF Drive", url: "https://www.pdfdrive.com/", description: "Search engine for PDF files with millions of free books" },
    { name: "Z-Library", url: "https://z-lib.org/", description: "One of the largest ebook libraries" },
    { name: "OpenStax", url: "https://openstax.org/", description: "Free peer-reviewed textbooks for college and high school courses" },
    { name: "DOAB (Directory of Open Access Books)", url: "https://www.doabooks.org/", description: "Discovery service for peer-reviewed open access books" },
    { name: "OAPEN Library", url: "https://www.oapen.org/", description: "Freely accessible academic books, mainly in humanities and social sciences" },
    { name: "AvaxHome", url: "https://avxhm.se/", description: "Wide variety of educational content and materials" },
    { name: "Free Computer Books", url: "https://freecomputerbooks.com/", description: "Free computer, programming, mathematics, technical books" },
    { name: "Planet eBook", url: "https://www.planetebook.com/", description: "Free classic literature in ebook format" },
    { name: "Get Free eBooks", url: "https://www.getfreeebooks.com/", description: "Legal free ebooks download site" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Library className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              External Digital Libraries
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Access a curated collection of free digital libraries, open access journals, thesis repositories, 
              and ebook resources from around the world.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Major Digital Libraries */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Major Digital Libraries & Repositories
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {digitalLibraries.map((lib, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{lib.name}</CardTitle>
                        <CardDescription className="mt-2">{lib.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{lib.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={lib.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Library
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Free eBook Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Free eBook Resources
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {freeEbookSites.map((site, idx) => (
                    <Link
                      key={idx}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                            {site.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {site.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Search Tips */}
          <section>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Tips for Using Digital Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Use specific keywords and Boolean operators (AND, OR, NOT) for better search results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Check the citation requirements for each resource before using them in your research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Create accounts on major platforms to save searches and access personalized recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Use filters to narrow down results by publication date, subject area, or document type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Always verify the credibility of sources and cross-reference information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* NCAS Library Resources */}
          <section>
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  NCAS Library Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  In addition to these external resources, NCAS maintains a comprehensive library with:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Link href="/library/thesis-dissertations" className="p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <span className="font-medium">Thesis & Dissertations</span>
                  </Link>
                  <Link href="/library/journal" className="p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <span className="font-medium">NCAS Journal</span>
                  </Link>
                  <Link href="/library/proceedings" className="p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <span className="font-medium">Proceedings</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
