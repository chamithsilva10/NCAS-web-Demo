import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2016 = {
  title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2016",
  subtitle: "Knowledge, Innovation and Sustainability",
  date: "December 15-16, 2016",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Demography & Health Education",
      papers: [
        {
          title: "The Impact of Demographic Transition on Economic Growth in Sri Lanka",
          authors: "Jayasekara, S. D.",
          file: "/proceedings/2016/Demography%20and%20Health%20Education/The%20Impact%20of%20Demographic%20Transition%20on%20Economic%20Growth%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Health Seeking Behavior of Rural Women in Sri Lanka: A Case Study of the Hambantota District",
          authors: "Jayasekara, A. P. H. S.",
          file: "/proceedings/2016/Demography%20and%20Health%20Education/Health%20Seeking%20Behavior%20of%20Rural%20Women%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Impact of Health Education on the Prevention of Non-Communicable Diseases in Sri Lanka",
          authors: "Thubellage, D. S.",
          file: "/proceedings/2016/Demography%20and%20Health%20Education/The%20Impact%20of%20Health%20Education%20on%20the%20Prevention%20of%20Non-Communicable%20Diseases%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Economics",
      papers: [
        {
          title: "The Impact of Foreign Direct Investment on Economic Growth in Sri Lanka",
          authors: "Sivashankar, S.",
          file: "/proceedings/2016/Economics/The%20Impact%20of%20Foreign%20Direct%20Investment%20on%20Economic%20Growth%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Role of Microfinance in Poverty Alleviation in Sri Lanka",
          authors: "Sooriyakumar, K.",
          file: "/proceedings/2016/Economics/The%20Role%20of%20Microfinance%20in%20Poverty%20Alleviation%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Law, Political Science & International Relations",
      papers: [
        {
          title: "The Impact of International Law on Domestic Legislation in Sri Lanka",
          authors: "Warnakulasuriya, S. S.",
          file: "/proceedings/2016/Law%20Political%20Science%20and%20International%20Relations/The%20Impact%20of%20International%20Law%20on%20Domestic%20Legislation%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Role of Political Parties in Democratic Governance in Sri Lanka",
          authors: "Kandanamulla, K. A. T. K. G.",
          file: "/proceedings/2016/Law%20Political%20Science%20and%20International%20Relations/The%20Role%20of%20Political%20Parties%20in%20Democratic%20Governance%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Library & Information Sciences",
      papers: [
        {
          title: "The Use of Information Technology in Library Services in Sri Lanka",
          authors: "Gunasekera, C.",
          file: "/proceedings/2016/Library%20and%20Information%20Sciences/The%20Use%20of%20Information%20Technology%20in%20Library%20Services%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Information Literacy Skills of Undergraduate Students in Sri Lanka",
          authors: "Dilhani, M. P. P.",
          file: "/proceedings/2016/Library%20and%20Information%20Sciences/Information%20Literacy%20Skills%20of%20Undergraduate%20Students%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Literature & Performing Arts",
      papers: [
        {
          title: "The Representation of Women in Sri Lankan Literature",
          authors: "Weerakoon, H. R. D. F. G. A.",
          file: "/proceedings/2016/Literature%20and%20Performing%20Arts/The%20Representation%20of%20Women%20in%20Sri%20Lankan%20Literature.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Management & Strategy",
      papers: [
        {
          title: "The Impact of Leadership Styles on Organizational Performance in Sri Lanka",
          authors: "Dayanatha, I. M. A.",
          file: "/proceedings/2016/Management%20and%20Strategy/The%20Impact%20of%20Leadership%20Styles%20on%20Organizational%20Performance%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Strategic Management Practices in Sri Lankan Organizations",
          authors: "Silva, K. A.",
          file: "/proceedings/2016/Management%20and%20Strategy/Strategic%20Management%20Practices%20in%20Sri%20Lankan%20Organizations.pdf"
        },
        {
          title: "The Role of Human Resource Management in Organizational Success",
          authors: "Dias, S. S.",
          file: "/proceedings/2016/Management%20and%20Strategy/The%20Role%20of%20Human%20Resource%20Management%20in%20Organizational%20Success.pdf"
        }
      ]
    },
    {
      id: "theme7",
      title: "Marketing Management",
      papers: [
        {
          title: "Consumer Behavior in Sri Lanka: A Study of Urban Consumers",
          authors: "Weerakoon, R.",
          file: "/proceedings/2016/Marketing%20Management/Consumer%20Behavior%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Impact of Social Media on Marketing in Sri Lanka",
          authors: "Jayasekara, A.",
          file: "/proceedings/2016/Marketing%20Management/The%20Impact%20of%20Social%20Media%20on%20Marketing%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme8",
      title: "Psychology Counselling & Buddhist Philosophy",
      papers: [
        {
          title: "Mental Health Issues Among University Students in Sri Lanka",
          authors: "Chandrasekara, W. S.",
          file: "/proceedings/2016/Psychology%20Counselling%20and%20Buddhist%20Philosophy/Mental%20Health%20Issues%20Among%20University%20Students%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Buddhist Philosophy and Modern Psychology",
          authors: "Sugunasiri, G.",
          file: "/proceedings/2016/Psychology%20Counselling%20and%20Buddhist%20Philosophy/Buddhist%20Philosophy%20and%20Modern%20Psychology.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2016Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2016.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2016.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2016.date}</p>
            <p className="text-gray-500">{proceedings2016.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2016.themes.map((theme) => (
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
          <p>© 2016 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}