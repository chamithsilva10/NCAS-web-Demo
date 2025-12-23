import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2014 = {
  title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2014",
  subtitle: "Knowledge, Innovation and Sustainability",
  date: "December 18-19, 2014",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Demography & Health Education",
      papers: [
        {
          title: "Demographic Changes and Health Challenges in Sri Lanka",
          authors: "Jayasekara, S. D.",
          file: "/proceedings/2014/Demography%20and%20Health%20Education/Demographic%20Changes%20and%20Health%20Challenges%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Health Education Programs for Rural Communities",
          authors: "Thubellage, D. S.",
          file: "/proceedings/2014/Demography%20and%20Health%20Education/Health%20Education%20Programs%20for%20Rural%20Communities.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Economics",
      papers: [
        {
          title: "Sustainable Economic Development in Sri Lanka",
          authors: "Sivashankar, S.",
          file: "/proceedings/2014/Economics/Sustainable%20Economic%20Development%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Microfinance and Poverty Reduction",
          authors: "Sooriyakumar, K.",
          file: "/proceedings/2014/Economics/Microfinance%20and%20Poverty%20Reduction.pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Law, Political Science & International Relations",
      papers: [
        {
          title: "International Relations and Sri Lanka's Foreign Policy",
          authors: "Warnakulasuriya, S. S.",
          file: "/proceedings/2014/Law%20Political%20Science%20and%20International%20Relations/International%20Relations%20and%20Sri%20Lanka%E2%80%99s%20Foreign%20Policy.pdf"
        },
        {
          title: "Human Rights in Post-Conflict Sri Lanka",
          authors: "Kandanamulla, K. A. T. K. G.",
          file: "/proceedings/2014/Law%20Political%20Science%20and%20International%20Relations/Human%20Rights%20in%20Post-Conflict%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Library & Information Sciences",
      papers: [
        {
          title: "Information Literacy in the Digital Age",
          authors: "Gunasekera, C.",
          file: "/proceedings/2014/Library%20and%20Information%20Sciences/Information%20Literacy%20in%20the%20Digital%20Age.pdf"
        },
        {
          title: "Library Automation and Digital Resources",
          authors: "Dilhani, M. P. P.",
          file: "/proceedings/2014/Library%20and%20Information%20Sciences/Library%20Automation%20and%20Digital%20Resources.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Literature & Performing Arts",
      papers: [
        {
          title: "Sri Lankan Literature in the Post-Colonial Era",
          authors: "Weerakoon, H. R. D. F. G. A.",
          file: "/proceedings/2014/Literature%20and%20Performing%20Arts/Sri%20Lankan%20Literature%20in%20the%20Post-Colonial%20Era.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Management & Strategy",
      papers: [
        {
          title: "Strategic Management in Sri Lankan Organizations",
          authors: "Dayanatha, I. M. A.",
          file: "/proceedings/2014/Management%20and%20Strategy/Strategic%20Management%20in%20Sri%20Lankan%20Organizations.pdf"
        },
        {
          title: "Change Management in Public Sector",
          authors: "Silva, K. A.",
          file: "/proceedings/2014/Management%20and%20Strategy/Change%20Management%20in%20Public%20Sector.pdf"
        },
        {
          title: "Human Resource Management Practices",
          authors: "Dias, S. S.",
          file: "/proceedings/2014/Management%20and%20Strategy/Human%20Resource%20Management%20Practices.pdf"
        }
      ]
    },
    {
      id: "theme7",
      title: "Marketing Management",
      papers: [
        {
          title: "Marketing Strategies for Sri Lankan Businesses",
          authors: "Weerakoon, R.",
          file: "/proceedings/2014/Marketing%20Management/Marketing%20Strategies%20for%20Sri%20Lankan%20Businesses.pdf"
        },
        {
          title: "Consumer Behavior in Sri Lanka",
          authors: "Jayasekara, A.",
          file: "/proceedings/2014/Marketing%20Management/Consumer%20Behavior%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme8",
      title: "Psychology Counselling & Buddhist Philosophy",
      papers: [
        {
          title: "Mental Health Services in Sri Lanka",
          authors: "Chandrasekara, W. S.",
          file: "/proceedings/2014/Psychology%20Counselling%20and%20Buddhist%20Philosophy/Mental%20Health%20Services%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Buddhist Philosophy and Counseling",
          authors: "Sugunasiri, G.",
          file: "/proceedings/2014/Psychology%20Counselling%20and%20Buddhist%20Philosophy/Buddhist%20Philosophy%20and%20Counseling.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2014Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/library/proceedings">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Proceedings
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2014.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2014.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2014.date}</p>
            <p className="text-gray-500">{proceedings2014.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2014.themes.map((theme) => (
            <Card key={theme.id} className="w-full">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700">{theme.title}</CardTitle>
                <CardDescription>{theme.papers.length} papers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {theme.papers.map((paper, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{paper.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">By: {paper.authors}</p>
                        </div>
                        <Button asChild size="sm" className="ml-4">
                          <a href={paper.file} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2014 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}