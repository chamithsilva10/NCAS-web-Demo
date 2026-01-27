import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, ExternalLink, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ProceedingsPage() {
  const proceedings = [
    {
      year: "2025",
      title: "7th International Research Symposium in Humanities and Social Sciences (IRSHSS 2025)",
      theme: "AI in Higher Education: Innovations, Challenges, and Future Directions",
      date: "January 16-17, 2025",
      fullProceedings: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/NCAS_IRSHSS2025_Symposium_Proceeding_Book_2025.pdf",
      pageUrl: "https://ncas.ac.lk/symposium2025/",
      sections: [
        { name: "Front Pages", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/FP.pdf" },
        { name: "Organizing Committee", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/OG.2025.pdf" },
        { name: "Table of Contents", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/contents.pdf" },
        { name: "Panel of Reviewers", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/Panel%20of%20Reviewers.pdf" },
        { name: "Session Chairs & Co-Chairs", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/SessionChairs_and_CoChairs.pdf" },
        { name: "List of Abstracts", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/ListofAbstracts.pdf" },
      ],
      messages: [
        { name: "Chief Guest - Hon. Prime Minister Dr. Harini Amarasuriya", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/messages/MESSAGE%20BY%20THE%20CHIEF%20GUEST.pdf" },
        { name: "Director - Professor Prashanthi Narangoda", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/messages/MESSAGE%20BY%20THE%20DIRECTOR.pdf" },
        { name: "Co-Chair - Dr. Sampath Chandrasena", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/messages/MESSAGE%20FROM%20THE%20CO%20CHAIR%20Dr.%20Sampath%20Chandrasena.pdf" },
        { name: "Keynote - Professor C. D. Sebastian", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/messages/Keynote%20Address%20by%20Professor%20C.%20D.%20Sebastian.pdf" },
        { name: "Keynote - Dr. Chris Haywood", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/messages/Keynote%20Address%20by%20Dr.%20Chris%20Haywood.pdf" },
        { name: "Plenary Session", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/messages/PLENARY%20SESSION.pdf" },
      ],
      subThemes: [
        { name: "Sub Theme 01 - AI Enhanced Teaching & Learning", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/01%20AI%20Enhanced%20Teaching%20&%20Learning%20innovations,%20adaptive%20pedagogies,%20and%20student%20engagement.pdf" },
        { name: "Sub Theme 02 - Curriculum Design & Academic Advising", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/02%20Curriculum%20Design%20&%20Academic%20Advising%20AI%20supported%20modelling,%20personal%20learning%20pathways,%20and%20skills%20forecasting.pdf" },
        { name: "Sub Theme 03 - Research, Writing & Scholarly Communication", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/03%20Research,%20Writing,%20and%20Scholarly%20Communication%20AI%20tools%20for%20literature%20review,%20data%20analysis,%20and%20knowledge%20dissemination.pdf" },
        { name: "Sub Theme 04 - Implementation Case Studies", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/04%20Implementation%20Case%20Studies%20successes%20and%20obstacles%20across%20varied%20cultural,%20economic,%20and%20institutional%20settings.pdf" },
        { name: "Sub Theme 05 - Inclusive Education", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/05%20Inclusive%20Education%20leveraging%20AI%20to%20bridge%20access%20gaps%20and%20support%20learners%20with%20diverse%20needs.pdf" },
        { name: "Sub Theme 06 - Strategic Planning & Support Services", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/06%20Strategic%20Planning%20&%20Support%20Services%20AI%20as%20both%20a%20challenge%20and%20an%20opportunity%20for%20educational%20leadership.pdf" },
        { name: "Sub Theme 07 - Miscellaneous", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/07%20Miscellaneous%20final.pdf" },
        { name: "Sub Theme 08 - Policy & Governance", url: "https://ncas.ac.lk/symposium2025/IRSHSS2025ProceedingBook/08%20Policy%20&%20Governance%20regulatory%20frameworks,%20quality%20assurance,%20and%20institutional%20readiness%20for%20AI%20adoption%20Final.pdf" },
      ]
    },
    {
      year: "2024",
      title: "6th International Research Symposium in Humanities and Social Sciences (IRSHSS 2024)",
      theme: "Heritage, Identity and Transformation",
      date: "November 28, 2024",
      pageUrl: "https://ncas.ac.lk/symposium2024/",
      sections: [
        { name: "Front Pages", url: "https://ncas.ac.lk/symposium2024/bookspdf/1_Front%20Page.pdf" },
        { name: "Organizing Committee", url: "https://ncas.ac.lk/symposium2024/bookspdf/2_Organizing%20Committee.pdf" },
        { name: "Table of Contents", url: "https://ncas.ac.lk/symposium2024/bookspdf/3_CONTENTS.pdf" },
        { name: "Panel of Reviewers", url: "https://ncas.ac.lk/symposium2024/bookspdf/4_Panel%20of%20Reviewers.pdf" },
        { name: "Session Chairs & Co-Chairs", url: "https://ncas.ac.lk/symposium2024/bookspdf/5_Session%20Chairs,%20Co-Chairs%20and%20Rapporteurs.pdf" },
        { name: "List of Abstracts", url: "https://ncas.ac.lk/symposium2024/bookspdf/6_List%20of%20Abstracts.pdf" },
      ],
      messages: [
        { name: "Chairman UGC - Senior Professor Kapila Senaviratne", url: "https://ncas.ac.lk/symposium2024/bookspdf/7_Message%20by%20Senior%20Professor%20Kapila%20Senaviratne.pdf" },
        { name: "Vice Chairman UGC - Senior Professor K. L. Wasantha Kumara", url: "https://ncas.ac.lk/symposium2024/bookspdf/8_Message%20by%20Senior%20Professor%20K%20L%20Wasantha%20Kumara.pdf" },
        { name: "Director - Professor Prashanthi Narangoda", url: "https://ncas.ac.lk/symposium2024/bookspdf/9_Message%20by%20Professor%20(Mrs.)%20Prashanthi%20Narangoda.pdf" },
        { name: "Co-Chair - Senior Professor Upul Ranjith Hewawitanagamage", url: "https://ncas.ac.lk/symposium2024/bookspdf/10_Message%20by%20Senior%20(Chair)%20Professor%20Upul%20Ranjith%20Hewawitanagamage.pdf" },
        { name: "Co-Chair - Dr. Sampath Chandrasena", url: "https://ncas.ac.lk/symposium2024/bookspdf/11_Message%20by%20Dr.%20Sampath%20Chandrasena.pdf" },
        { name: "Keynote Speech - Dr. Robert Dygas", url: "https://ncas.ac.lk/symposium2024/bookspdf/12_Message%20by%20Keynote%20Speech%20Dr.%20Robert%20Dygas.pdf" },
        { name: "Panel Discussion", url: "https://ncas.ac.lk/symposium2024/bookspdf/13_Panel%20Discussions.pdf" },
      ],
      subThemes: [
        { name: "Sub Theme 01 - Technology in English Language Teaching", url: "https://ncas.ac.lk/symposium2024/bookspdf/14_SUB%20THEME%2001%20-%20Exploring%20Innovations%20Integrating%20Technology%20in%20English%20Language%20Teaching%20and%20Linguistics.pdf" },
        { name: "Sub Theme 02 - Impact of Technology on Industry & Society", url: "https://ncas.ac.lk/symposium2024/bookspdf/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf" },
        { name: "Sub Theme 03 - Technology in Cultural Heritage", url: "https://ncas.ac.lk/symposium2024/bookspdf/16_SUB%20THEME%2003%20-%20Role%20of%20Technology%20in%20Restoring%20Tangible%20and%20Intangible%20Cultural%20Heritage.pdf" },
        { name: "Sub Theme 04 - Transforming Education", url: "https://ncas.ac.lk/symposium2024/bookspdf/17_SUB%20THEME%2004%20-%20Transforming%20Education%20Navigating%20Reforms%20in%20the%20Digital%20Age.pdf" },
        { name: "Sub Theme 05 - Democracy and Citizenship", url: "https://ncas.ac.lk/symposium2024/bookspdf/18_SUB%20THEME%2005%20-%20Democracy%20and%20Citizenship%20in%20the%20Era%20of%20Technology.pdf" },
        { name: "Sub Theme 06 - Social Networking", url: "https://ncas.ac.lk/symposium2024/bookspdf/19_SUB%20THEME%2006%20-%20Social%20Networking%20and%20Human%20Interactions%20Explored%20Through%20Technology.pdf" },
        { name: "Sub Theme 07 - Digital Humanities", url: "https://ncas.ac.lk/symposium2024/bookspdf/20_SUB%20THEME%2007%20-%20Digital%20Humanities%20and%20Computational%20Approaches%20on%20Harnessing%20the%20Performing%20and%20Visual%20Arts.pdf" },
        { name: "Sub Theme 08 - Machine Learning & Translation", url: "https://ncas.ac.lk/symposium2024/bookspdf/21_SUB%20THEME%2008%20-%20Machine%20Learning%20and%20Machine%20Translation%20for%20Cross-Cultural%20Communication.pdf" },
        { name: "Sub Theme 09 - Technology on Socio-Economic Crises", url: "https://ncas.ac.lk/symposium2024/bookspdf/22_SUB%20THEME%2009%20-%20The%20Impact%20of%20Technology%20on%20Socio-Economic%20Crises.pdf" },
        { name: "Sub Theme 10 - Industrialization & Climate Change", url: "https://ncas.ac.lk/symposium2024/bookspdf/23_SUB%20THEME%2010%20-%20Industrialization,%20Global%20Warming%20and%20Climate%20Change.pdf" },
        { name: "Sub Theme 11 - Political Economy", url: "https://ncas.ac.lk/symposium2024/bookspdf/24_SUB%20THEME%2011%20-%20Political%20Economy%20and%20Sustainable%20Transformative%20Approaches.pdf" },
        { name: "Sub Theme 12 - Miscellaneous", url: "https://ncas.ac.lk/symposium2024/bookspdf/25_SUB%20THEME%2012%20-%20Miscellaneous.pdf" },
        { name: "Index", url: "https://ncas.ac.lk/symposium2024/bookspdf/26_Indexes.pdf" },
      ]
    },
    {
      year: "2023",
      title: "5th International Research Symposium on Social Sciences & Humanities (IRSSSH 2023)",
      theme: "Heritage and Culture: Re-visiting the late Professor Senake Dias Bandaranayake",
      date: "November 29, 2023",
      pageUrl: "https://ncas.ac.lk/symposium2023/",
      sections: [
        { name: "Front Pages", url: "https://ncas.ac.lk/symposium2023/bookspdf/1_Front%20Page.pdf" },
        { name: "Organizing Committee", url: "https://ncas.ac.lk/symposium2023/bookspdf/2_Organizing%20Committee.pdf" },
        { name: "Table of Contents", url: "https://ncas.ac.lk/symposium2023/bookspdf/3_CONTENTS.pdf" },
        { name: "Panel of Reviewers", url: "https://ncas.ac.lk/symposium2023/bookspdf/4_Panel%20of%20Reviewers.pdf" },
        { name: "Session Chairs & Co-Chairs", url: "https://ncas.ac.lk/symposium2023/bookspdf/5_Session%20Chairs,%20Co-Chairs%20and%20Rapporteurs.pdf" },
        { name: "List of Abstracts", url: "https://ncas.ac.lk/symposium2023/bookspdf/6_List%20of%20Abstracts.pdf" },
      ],
      messages: [
        { name: "Hon. Minister Dr. Susil Premajayantha", url: "https://ncas.ac.lk/symposium2023/bookspdf/7_Message%20by%20Hon.%20Dr.%20Susil%20Premajayantha.pdf" },
        { name: "Hon. State Minister Dr. Suren Raghavan", url: "https://ncas.ac.lk/symposium2023/bookspdf/8_Message%20by%20Hon.%20Dr.%20Suren%20Raghavan.pdf" },
        { name: "Chairman UGC - Senior Professor Sampath Amarathunge", url: "https://ncas.ac.lk/symposium2023/bookspdf/9_Message%20by%20Senior%20Professor%20Sampath%20Amarathunge.pdf" },
        { name: "Director - Professor Prashanthi Narangoda", url: "https://ncas.ac.lk/symposium2023/bookspdf/10_Message%20by%20Professor%20(Mrs.)%20Prashanthi%20Narangoda.pdf" },
        { name: "Symposium Coordinator - Dr. Sampath Chandrasena", url: "https://ncas.ac.lk/symposium2023/bookspdf/11_Message%20by%20Dr.%20Sampath%20Chandrasena.pdf" },
        { name: "Keynote Speech - Dr. Lodewijk J. Wagenaar", url: "https://ncas.ac.lk/symposium2023/bookspdf/12_Message%20by%20Keynote%20Speech%20Dr.%20Lodewijk%20J.%20Wagenaar.pdf" },
      ],
      subThemes: [
        { name: "Sub Theme 01 - Tangible and Intangible Cultural Heritage", url: "https://ncas.ac.lk/symposium2023/bookspdf/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf" },
        { name: "Sub Theme 02 - Religion and Society", url: "https://ncas.ac.lk/symposium2023/bookspdf/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf" },
        { name: "Sub Theme 03 - Freedom, Rights, and Civil Responsibilities", url: "https://ncas.ac.lk/symposium2023/bookspdf/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf" },
        { name: "Sub Theme 04 - Reconciliation, Politics, and Society", url: "https://ncas.ac.lk/symposium2023/bookspdf/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf" },
        { name: "Sub Theme 05 - Environment and Ecology", url: "https://ncas.ac.lk/symposium2023/bookspdf/18_SUB%20THEME%2005%20Environment%20and%20Ecology,%20Transmigration%20of%20Healthy%20Livelihood.pdf" },
        { name: "Sub Theme 06 - Sustainable Development and SMEs", url: "https://ncas.ac.lk/symposium2023/bookspdf/19_SUB%20THEME%2006%20Sustainable%20Development%20and%20the%20Role%20of%20SMEs..pdf" },
        { name: "Sub Theme 07 - Tourism", url: "https://ncas.ac.lk/symposium2023/bookspdf/20_SUB%20THEME%2007%20Tourism%20An%20Industry%20or%20and%20Art.pdf" },
        { name: "Sub Theme 08 - Digital Tools in Teaching and Learning", url: "https://ncas.ac.lk/symposium2023/bookspdf/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf" },
        { name: "Sub Theme 09 - Authentic Science and Technology", url: "https://ncas.ac.lk/symposium2023/bookspdf/22_SUB%20THEME%2009%20Authentic%20Science%20and%20Technology.pdf" },
        { name: "Sub Theme 10 - AI and Digital Restoration", url: "https://ncas.ac.lk/symposium2023/bookspdf/23_SUB%20THEME%2010%20Al%20(Artificial%20Intelligence)%20and%20digital%20restoration.pdf" },
      ]
    },
    {
      year: "2022",
      title: "4th International Research Symposium on Social Sciences & Humanities (IRSSSH 2022)",
      theme: "Digital Humanities and Cultural Heritage",
      date: "November 17-18, 2022",
      fullProceedings: "https://ncas.ac.lk/wp-content/uploads/2022/12/IRSSSH_2022_Symposium_Proceedings.pdf",
      pageUrl: "https://ncas.ac.lk/symposium-proceedings-2022/",
    },
    {
      year: "2020",
      title: "3rd International Research Symposium on Social Sciences & Humanities (IRSSSH 2020)",
      theme: "Development towards Sustainability",
      date: "December 2020",
      pageUrl: "https://ncas.ac.lk/3rd-international-research-symposium-on-social-sciences-and-humanities-irsssh-2020/",
    },
    {
      year: "2019",
      title: "2nd International Symposium on Social Science and Humanities (ISSSH 2019)",
      theme: "Development towards Sustainability",
      date: "December 12-13, 2019",
      pageUrl: "https://ncas.ac.lk/2nd-international-symposium-on-social-science-and-humanities-isssh-2019-development-towards-sustainability-1213-december-2019",
    },
    {
      year: "2018",
      title: "International Research Symposium on Social Sciences & Humanities (IRSSSH 2018)",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 13-14, 2018",
      pageUrl: "https://ncas.ac.lk/Proceedings/IRSSSH2018/index_2018.html",
    },
    {
      year: "2017",
      title: "Annual Research Symposium on Social Sciences & Humanities (ARSSSH 2017)",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 14-15, 2017",
      pageUrl: "https://ncas.ac.lk/Proceedings/ARSSSH_2017/arrsssh2017.html",
    },
    {
      year: "2016",
      title: "Annual Research Symposium on Social Sciences & Humanities (ARSSSH 2016)",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 15-16, 2016",
      pageUrl: "https://ncas.ac.lk/Proceedings/symposium2016/index.html",
    },
    {
      year: "2015",
      title: "Annual Research Symposium on Social Sciences & Humanities (ARSSSH 2015)",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 17-18, 2015",
      pageUrl: "https://ncas.ac.lk/Proceedings/symposium2015/index_2015.html",
    },
    {
      year: "2014",
      title: "Annual Research Symposium on Social Sciences & Humanities (ARSSSH 2014)",
      theme: "Knowledge, Innovation and Sustainability",
      date: "December 18-19, 2014",
      pageUrl: "https://ncas.ac.lk/Proceedings/symposium2014/index_2014.html",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Symposium Proceedings
            </h1>
            <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
              Access conference papers and presentations from NCAS International Research Symposiums 
              in Humanities and Social Sciences (2014-2025)
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {proceedings.map((proc) => (
            <Card key={proc.year} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default" className="text-lg px-3 py-1">{proc.year}</Badge>
                      <Badge variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        {proc.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{proc.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      <strong>Theme:</strong> {proc.theme}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {proc.fullProceedings && (
                      <Button asChild>
                        <Link href={proc.fullProceedings} target="_blank">
                          <Download className="h-4 w-4 mr-2" />
                          Full Proceedings
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="outline">
                      <Link href={proc.pageUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on NCAS
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {(proc.sections || proc.messages || proc.subThemes) && (
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Front Matter Section */}
                    {proc.sections && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Front Matter
                        </h4>
                        <ul className="space-y-2">
                          {proc.sections.map((section, idx) => (
                            <li key={idx}>
                              <Link 
                                href={section.url} 
                                target="_blank"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                {section.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Messages Section */}
                    {proc.messages && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Messages
                        </h4>
                        <ul className="space-y-2">
                          {proc.messages.map((msg, idx) => (
                            <li key={idx}>
                              <Link 
                                href={msg.url} 
                                target="_blank"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                {msg.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Sub Themes Section */}
                    {proc.subThemes && (
                      <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Sub Themes / Papers
                        </h4>
                        <ul className="space-y-2">
                          {proc.subThemes.map((theme, idx) => (
                            <li key={idx}>
                              <Link 
                                href={theme.url} 
                                target="_blank"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                {theme.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              For more information about symposium proceedings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Telephone:</strong> +94 011 2685850</p>
                <p><strong>Fax:</strong> +94 011 2693975</p>
              </div>
              <div>
                <p><strong>Email:</strong> info@ncas.ac.lk</p>
                <p><strong>Website:</strong> <Link href="https://ncas.ac.lk" target="_blank" className="text-primary hover:underline">ncas.ac.lk</Link></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
