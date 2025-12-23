import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2017 = {
  title: "Annual Research Symposium on Social Sciences and Humanities (ARSSSH) 2017",
  subtitle: "Knowledge, Innovation and Sustainability",
  date: "December 14-15, 2017",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Demography & Health Education",
      papers: [
        {
          title: "GIS Integrated Growth Type Index (GTI) for Analysis of Spatiotemporal Urban Growth in the Colombo District Sri Lanka",
          authors: "Weerakoon, K.G.P.K.",
          file: "/proceedings/2017/Demography%20and%20health%20education/GIS%20Integrated%20Growth%20Type%20Index%20(GTI)%20for%20Analysis%20of%20Spatiotemporal.pdf"
        },
        {
          title: "Elderly Population of Sri Lanka in Gender Perspective",
          authors: "Welgama, W.M.J.",
          file: "/proceedings/2017/Demography%20and%20health%20education/Elderly%20Population%20of%20Sri%20Lanka%20in%20Gender%20Perspective.pdf"
        },
        {
          title: "Madrid Plan and Social Policy for Older Persons in Sri Lanka: In Search for a Sustainable - Localized Solution",
          authors: "Udayanga, K.A.S.",
          file: "/proceedings/2017/Demography%20and%20health%20education/Madrid%20Plan%20and%20Social%20Policy%20for%20Older%20Persons%20in%20Sri%20Lanka.pdf"
        },
        {
          title: "Evaluation of Health Policy: How Well Have the Policies on Prevention and Control of Ischemic Heart Disease Been Evaluated in Sri Lanka?",
          authors: "Thubellage, D.S., Dharmasiri, A.S., Senarath, J. U.",
          file: "/proceedings/2017/Demography%20and%20health%20education/Evaluation%20of%20Health%20Policy.pdf"
        },
        {
          title: "Impact of Physical Inactivity on Non - Communicable Diseases: A Risk Factor Influencing the Health of Men in Colombo District",
          authors: "Jayarathne, A.P.H.S.",
          file: "/proceedings/2017/Demography%20and%20health%20education/Impact%20of%20Physical%20Inactivity%20on%20Non.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Economics",
      papers: [
        {
          title: "Economic Valuation of Bio Ecosystem Services from Organic Farming in Valikamam Jaffna Sri Lanka",
          authors: "Sivashankar. S, Sireeranhan. A, Sooriyakumar. K",
          file: "/proceedings/2017/Economics/Economic%20Valuation%20of%20Bio%20Ecosystem%20Services%20from%20Organic%20Farming%20in.pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Law, Political Science & International Relations",
      papers: [
        {
          title: "Prevention of Domestic Violence Act and why it doesn't Work",
          authors: "Warnakulasuriya, S. S.",
          file: "/proceedings/2017/Law%20political%20science%20and%20international%20relations/Prevention%20of%20Domestic%20Violence%20Act%20and%20why.pdf"
        },
        {
          title: "Potential for Sri Lanka's Science Diplomacy: Scientific Collaborations 2010 – 2015",
          authors: "Kandanamulla. K. A .T. K. G., Dissanayake.V. H. W., Cooke.G.",
          file: "/proceedings/2017/Law%20political%20science%20and%20international%20relations/Potential%20for%20Sri%20Lanka%E2%80%99s%20Science%20Diplomacy.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Library & Information Sciences",
      papers: [
        {
          title: "Self Archiving Practices of University Academics: Special Emphasis on the Social Science and Humanity Scholars in the Faculty of Arts, University of Peradeniya",
          authors: "Gunasekera, Chamani",
          file: "/proceedings/2017/Library%20Information%20Sciences/Self%20Archiving%20Practices%20of%20University%20Academics.pdf"
        },
        {
          title: "Information Needs and Seeking Behavior of Medical Officers Attached to Rural Hospitals (D H Type - C) in Sri Lanka",
          authors: "Dilhani M.P.P., Senevirathe, W., Abeysena, C.",
          file: "/proceedings/2017/Library%20Information%20Sciences/Information%20Needs%20and%20Seeking%20Behavior%20of%20Medical%20Officers.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Literature & Performing Arts",
      papers: [
        {
          title: "Representation of University of Sri Jayewardenepura in Popular Fiction by Sri Lankan Writers",
          authors: "Weerakoon, H. R. D. F. G. A.",
          file: "/proceedings/2017/Literature%20and%20Performing%20Arts/Representation%20of%20University%20of%20Sri%20Jayewardenepura.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Management & Strategy",
      papers: [
        {
          title: "Sesnemaking and Sensegiving: An Alternative Perspective for Understanding IS Success",
          authors: "Dayanatha, I.M.A.",
          file: "/proceedings/2017/Management%20and%20Strategy/Sesnemaking%20and%20Sensegiving.pdf"
        },
        {
          title: "Civil Society's Engagement with Business in Search of Common Good: An Experience in Global South",
          authors: "Silva, Kapila Ariyadarshana",
          file: "/proceedings/2017/Management%20and%20Strategy/Civil%20Society%E2%80%99s%20Engagement%20with%20Business.pdf"
        },
        {
          title: "Authentic Leadership Makes Subordinates Happy: Sri Lankan Context",
          authors: "Dias, Surani Sharmalee, Jayakody J. A .S. K., Galahitiyawe, Nilakshi W. K.",
          file: "/proceedings/2017/Management%20and%20Strategy/Authentic%20Leadership%20Makes%20Subordinates%20Happy.pdf"
        },
        {
          title: "Autonomy of Schools: A Study Based on the Programme of School Improvement in Sri Lanka",
          authors: "Kasturiarachchi, Chandana",
          file: "/proceedings/2017/Management%20and%20Strategy/Autonomy%20of%20Schools.pdf"
        }
      ]
    },
    {
      id: "theme7",
      title: "Marketing Management",
      papers: [
        {
          title: "Service Quality and Its Impact on the Level of Tourist Satisfaction in Marine Based Recreation",
          authors: "Weerakoon, Ranjan, Wehigaldeniya, W.G.D.S, Edirisinghe I.T",
          file: "/proceedings/2017/Marketing%20Management/Service%20Quality%20and%20Its%20Impact%20on%20the%20Level.pdf"
        },
        {
          title: "Tensions between Consumerist and Traditional Values: Intergenerational Dynamics",
          authors: "Jayasekara, Anne",
          file: "/proceedings/2017/Marketing%20Management/Tensions%20between%20Consumerist%20and%20Traditional%20Values.pdf"
        }
      ]
    },
    {
      id: "theme8",
      title: "Psychology Counselling & Buddhist Philosophy",
      papers: [
        {
          title: "Beyond Stigma: Perceived Barriers and Enablers for Help Seeking for Mental Health Issues in Undergraduate Students in Sri Lanka",
          authors: "Chandrasekara, W.S",
          file: "/proceedings/2017/Psychology%20Counselling%20Buddhist%20Philosophy/Beyond%20Stigma%20%20Perceived%20Barriers%20and%20Enablers%20for%20Help%20Seeking.pdf"
        },
        {
          title: "A Critical Study on the Buddhist and Kantian Approaches towards Epistemology with Special Reference to'Madhupinḍika Sutta and Critique of Pure Reason'",
          authors: "Sugunasiri Thero, G.",
          file: "/proceedings/2017/Psychology%20Counselling%20Buddhist%20Philosophy/A%20Critical%20Study%20on%20the%20Buddhist%20and%20Kantian%20Approaches%20towards.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2017Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2017.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2017.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2017.date}</p>
            <p className="text-gray-500">{proceedings2017.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2017.themes.map((theme) => (
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
          <p>© 2017 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}