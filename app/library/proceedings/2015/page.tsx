import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2015 = {
  title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2015",
  subtitle: "Knowledge, Innovation and Sustainability",
  date: "December 17-18, 2015",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Demography & Health Education",
      papers: [
        {
          title: "Population Aging and Its Implications for Health Care in Sri Lanka",
          authors: "Jayasekara, S. D.",
          file: "/proceedings/2015/Demography%20and%20Health%20Education/Population%20Aging%20and%20Its%20Implications%20for%20Health%20Care%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Role of Health Education in Preventing Chronic Diseases",
          authors: "Thubellage, D. S.",
          file: "/proceedings/2015/Demography%20and%20Health%20Education/The%20Role%20of%20Health%20Education%20in%20Preventing%20Chronic%20Diseases.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Economics",
      papers: [
        {
          title: "Economic Development and Environmental Sustainability in Sri Lanka",
          authors: "Sivashankar, S.",
          file: "/proceedings/2015/Economics/Economic%20Development%20and%20Environmental%20Sustainability%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Impact of Tourism on Economic Growth in Sri Lanka",
          authors: "Sooriyakumar, K.",
          file: "/proceedings/2015/Economics/The%20Impact%20of%20Tourism%20on%20Economic%20Growth%20in%20Sri%20Lanka.pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Law, Political Science & International Relations",
      papers: [
        {
          title: "Human Rights and International Relations in Sri Lanka",
          authors: "Warnakulasuriya, S. S.",
          file: "/proceedings/2015/Law%20Political%20Science%20and%20International%20Relations/Human%20Rights%20and%20International%20Relations%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "The Role of International Organizations in Conflict Resolution",
          authors: "Kandanamulla, K. A. T. K. G.",
          file: "/proceedings/2015/Law%20Political%20Science%20and%20International%20Relations/The%20Role%20of%20International%20Organizations%20in%20Conflict%20Resolution.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Library & Information Sciences",
      papers: [
        {
          title: "Digital Libraries and Information Access in Sri Lanka",
          authors: "Gunasekera, C.",
          file: "/proceedings/2015/Library%20and%20Information%20Sciences/Digital%20Libraries%20and%20Information%20Access%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Information Technology and Library Management",
          authors: "Dilhani, M. P. P.",
          file: "/proceedings/2015/Library%20and%20Information%20Sciences/Information%20Technology%20and%20Library%20Management.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Literature & Performing Arts",
      papers: [
        {
          title: "Contemporary Sri Lankan Literature and Cultural Identity",
          authors: "Weerakoon, H. R. D. F. G. A.",
          file: "/proceedings/2015/Literature%20and%20Performing%20Arts/Contemporary%20Sri%20Lankan%20Literature%20and%20Cultural%20Identity.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Management & Strategy",
      papers: [
        {
          title: "Strategic Planning in Public Sector Organizations",
          authors: "Dayanatha, I. M. A.",
          file: "/proceedings/2015/Management%20and%20Strategy/Strategic%20Planning%20in%20Public%20Sector%20Organizations.pdf"
        },
        {
          title: "Leadership and Organizational Change in Sri Lanka",
          authors: "Silva, K. A.",
          file: "/proceedings/2015/Management%20and%20Strategy/Leadership%20and%20Organizational%20Change%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Human Resource Development in the Digital Age",
          authors: "Dias, S. S.",
          file: "/proceedings/2015/Management%20and%20Strategy/Human%20Resource%20Development%20in%20the%20Digital%20Age.pdf"
        }
      ]
    },
    {
      id: "theme7",
      title: "Marketing Management",
      papers: [
        {
          title: "Brand Management in the Sri Lankan Context",
          authors: "Weerakoon, R.",
          file: "/proceedings/2015/Marketing%20Management/Brand%20Management%20in%20the%20Sri%20Lankan%20Context.pdf"
        },
        {
          title: "Digital Marketing Strategies for Small Businesses",
          authors: "Jayasekara, A.",
          file: "/proceedings/2015/Marketing%20Management/Digital%20Marketing%20Strategies%20for%20Small%20Businesses.pdf"
        }
      ]
    },
    {
      id: "theme8",
      title: "Psychology Counselling & Buddhist Philosophy",
      papers: [
        {
          title: "Mental Health and Well-being in Sri Lankan Society",
          authors: "Chandrasekara, W. S.",
          file: "/proceedings/2015/Psychology%20Counselling%20and%20Buddhist%20Philosophy/Mental%20Health%20and%20Well-being%20in%20Sri%20Lankan%20Society.pdf"
        },
        {
          title: "Buddhist Psychology and Modern Counseling Practices",
          authors: "Sugunasiri, G.",
          file: "/proceedings/2015/Psychology%20Counselling%20and%20Buddhist%20Philosophy/Buddhist%20Psychology%20and%20Modern%20Counseling%20Practices.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2015Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2015.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2015.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2015.date}</p>
            <p className="text-gray-500">{proceedings2015.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2015.themes.map((theme) => (
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
          <p>© 2015 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}