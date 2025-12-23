import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2018 = {
  title: "1st International Research Symposium on Social Sciences and Humanities (IRSSSH) 2018",
  subtitle: "Knowledge, Innovation and Sustainability",
  date: "December 13-14, 2018",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Environment and Eco-tourism",
      papers: [
        {
          title: "Application of Geographical Information System to Assess Landslide Vulnerability and Risk: Based on Kiriketioya and Belihuloya Watershed",
          authors: "Dananjaya P K V S, Edirisooriya K V D",
          file: "/proceedings/2018/Environment%20and%20Eco-tourism/Dananjaya%20P%20K%20V%20S,%20Edirisooriya%20K%20V%20D.pdf"
        },
        {
          title: "Impact of Coastal Erosion as a Disaster in Sri Lanka",
          authors: "Amarasinghe A G",
          file: "/proceedings/2018/Environment%20and%20Eco-tourism/Amarasinghe%20A%20G.pdf"
        },
        {
          title: "Assessment of Knowledge and Attitudes of Adolescents in Advanced Level Classes towards Their Future Career: A Case Study at Piliyandala Area, Colombo",
          authors: "Lochana K D D, Waidyasekara H",
          file: "/proceedings/2018/Environment%20and%20Eco-tourism/Lochana%20K%20D%20D,%20Waidyasekara%20H.pdf"
        },
        {
          title: "Administration of the Natural Disaster Management Process in Sri Lanka: An Experimental Study on Kotikawatte in the District of Colombo",
          authors: "Somarathna D H A S",
          file: "/proceedings/2018/Environment%20and%20Eco-tourism/Somarathna%20D%20H%20A%20S.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Health and Wellbeing",
      papers: [
        {
          title: "Childhood Illnesses in a Semi Urban Area, Colombo District, Sri Lanka",
          authors: "Madumadavi M M P, Madushanka B D, Gamage M",
          file: "/proceedings/2018/2.%20Health%20and%20Wellbeing/Madumadavi%20M%20M%20P,%20Madushanka%20B%20D,%20Gamage%20M.pdf"
        },
        {
          title: "Awareness and Utilization of Digital Devices among Urban and Rural Undergraduates for Sexual and Reproductive Health Knowledge",
          authors: "Subasinghe Y, Senadhi N, Karunarathne M",
          file: "/proceedings/2018/2.%20Health%20and%20Wellbeing/Subasinghe%20Y,%20Senadhi%20N,%20Karunarathne%20M.pdf"
        },
        {
          title: "A Comprehensive Pharmacological Analysis of Bilwadi Panchamula (Vruhath Panchamula) in the Prevention of Obesity",
          authors: "Edirisinghe B L, Kulathunga W M S S K",
          file: "/proceedings/2018/2.%20Health%20and%20Wellbeing/Edirisinghe%20B%20L,%20Kulathunga%20W%20M%20S%20S%20K.pdf"
        },
        {
          title: "Nutritional Status and Its Association with Selected Socio-Demographic Factors among Elderly People in Galle District, Sri Lanka",
          authors: "Dharmarathna A B, Perera K C",
          file: "/proceedings/2018/2.%20Health%20and%20Wellbeing/Dharmarathna%20A%20B,%20Perera%20K%20C.pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Knowledge Economy and Technology",
      papers: [
        {
          title: "Perception of Luxury Rail Passengers on Implementing ITS Application in Railway: A Case Study on Colombo - Kandy Railway",
          authors: "Uthpala A H A, Wanniarachchi S S",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_51.pdf"
        },
        {
          title: "Making Energy Transitions Just and Sustainable in Transitional Societies",
          authors: "Theiventhran M",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_52.pdf"
        },
        {
          title: "Information Technology (IT) Archetypes and Implementation Framework: IT as a Strategic Partner in Organizations",
          authors: "Lankasena B N S",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_53.pdf"
        },
        {
          title: "A Study on the Impact of Social Media on the Purchase Decision of Branded Men's Wear in Sri Lanka",
          authors: "Nanayakkara J, Senevirathne A, Silva J",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_55.pdf"
        },
        {
          title: "Management and Sustainability of Public Debt in Sri Lanka",
          authors: "Serasinghe U P P",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_56.pdf"
        },
        {
          title: "Use of Internet Sources to Enhance Teaching at a Faculty of Education",
          authors: "Kasturi Arachchi C",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_61.pdf"
        },
        {
          title: "Economic Problems Faced by Rural Farmers in Vavuniya North Ds Division: A Comparison between War and Post War Context",
          authors: "Thanusan S, Kunaratnam L",
          file: "/proceedings/2018/5.%20Knowledge%20Economy%20and%20Technology/Abstract%20book%202018_62.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Law, Good Governance and Sustainable Development",
      papers: [
        {
          title: "Cultural Heritage Tourism as a Medium for Socio-Economic Upliftment of Communities: A Case Study of West Bengal (India)",
          authors: "Ahamed M1, Karim R2",
          file: "/proceedings/2018/8.%20Law,%20Good%20Governance%20and%20Sustainable%20Development/Abstract%20book%202018_95.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Art, Culture and Religion",
      papers: [
        {
          title: "Role of Social Media in Strengthening the Educational Choices in Non-state Higher Education Industry in Sri Lanka: A Review",
          authors: "Abeygunawardena V K A",
          file: "/proceedings/2018/9.%20Art,%20Culture%20and%20Religion/Abstract%20book%202018_103.pdf"
        },
        {
          title: "Cultural Knowledge and Cultural Awareness of Student Nurses in Sri Lanka",
          authors: "Senarathne H S, Meegoda M K D L",
          file: "/proceedings/2018/9.%20Art,%20Culture%20and%20Religion/Abstract%20book%202018_104.pdf"
        },
        {
          title: "Administrative Systems of the 'Masjids' in Sri Lanka and their Contributions towards Social Development",
          authors: "Rizvi M T M",
          file: "/proceedings/2018/9.%20Art,%20Culture%20and%20Religion/Abstract%20book%202018_105.pdf"
        },
        {
          title: "Cognitive Behavioral Group Therapy for University Students with Social Anxiety Disorder: The Development of a Culturally Valid Treatment",
          authors: "De Silva B G R, de Zoysa P, Williams S S",
          file: "/proceedings/2018/9.%20Art,%20Culture%20and%20Religion/Abstract%20book%202018_108.pdf"
        },
        {
          title: "Folk Arts Associated with Agro Life Style and Performing Arts in Sri Lanka",
          authors: "Panapitiya S",
          file: "/proceedings/2018/9.%20Art,%20Culture%20and%20Religion/Abstract%20book%202018_112.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Finance and Accounting",
      papers: [
        {
          title: "Website: www.ncas.ac.lk",
          authors: "",
          file: "/proceedings/2018/10.%20Finance%20and%20Accounting/website.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2018Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2018.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2018.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2018.date}</p>
            <p className="text-gray-500">{proceedings2018.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2018.themes.map((theme) => (
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
                          {paper.authors && <p className="text-sm text-gray-600 mb-2">By: {paper.authors}</p>}
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
          <p>© 2018 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}