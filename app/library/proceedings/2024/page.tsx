import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, ArrowLeft } from 'lucide-react';

const proceedings2024 = {
  title: "6th International Research Symposium on Social Sciences and Humanities (IRSSSH) 2024",
  subtitle: "Technology and Society: Navigating the Digital Frontier",
  date: "November 15-16, 2024",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Exploring Innovations: Integrating Technology in English Language Teaching and Linguistics",
      papers: [
        {
          title: "English Language Teaching Integrating E-Learning Flipped Approach and Sustainability: A Phenomenological Study on Faculty Experience in Higher Education",
          authors: "F. N. Wickremasinghe, E. S. Neranjanie",
          file: "/proceedings/2024/SUB_THEME_01.pdf"
        },
        {
          title: "A Study of the Challenges in Producing Authentic Assignments in Language and Linguistics Classes in Colleges in Sri Lanka: Students' Perspectives",
          authors: "Poornima Weerasinghe",
          file: "/proceedings/2024/SUB_THEME_01.pdf"
        },
        {
          title: "Gay Slang Variety 'Nachchi language': Reflexive Ethnographic Observations",
          authors: "Hasitha Pathirana",
          file: "/proceedings/2024/SUB_THEME_01.pdf"
        },
        {
          title: "First Language Production behaviours of Dative Case of Sinhala",
          authors: "Lokeshwari S. Karunarathna",
          file: "/proceedings/2024/SUB_THEME_01.pdf"
        },
        {
          title: "Enhancing Career Readiness through 21st Century Competencies: A Study on Technology Students and Faculty at the Gampaha Wickramarachchi University of Indigenous Medicine",
          authors: "P. N. Gardihewa",
          file: "/proceedings/2024/SUB_THEME_01.pdf"
        },
        {
          title: "Integrating Technology in English Language Teaching and Linguistics: A Comparative Approach with Arabic Language",
          authors: "M. J. H. P. Sabra, M. M. M. Nifras, A. M. Muthalib",
          file: "/proceedings/2024/SUB_THEME_01.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Impact of Technology on Industry, Society, Labour Market, and Human Wellbeing",
      papers: [
        {
          title: "The Impact of British Colonial Policies on Coconut Cultivation: A Study of the Eravur Pattu Division",
          authors: "Nilanthini Chenthurran",
          file: "/proceedings/2024/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf"
        },
        {
          title: "Investigating Determinants of Organizational Commitment Mediated by Job Satisfaction among Public Sector Employees in the North Western Province of Sri Lanka",
          authors: "P. A. B. H. Amarathunga, K. P. T. Sajeewani",
          file: "/proceedings/2024/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf"
        },
        {
          title: "The Modernized Agriculture and its Social Impact on Resettled Veddah Community in Sri Lanka: A Qualitative Study",
          authors: "Pulsie Epa, Suranjith Gunasekara, Nilanthi Devika",
          file: "/proceedings/2024/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf"
        },
        {
          title: "An Analysis on Supply and Demand of Software Engineering Industry Labour Market of Sri Lanka",
          authors: "R. Werawatta, L. M. Senanayake, G. A. H. J. Perera",
          file: "/proceedings/2024/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf"
        },
        {
          title: "An Analysis of the Short Story 'The Machine Stops' by E. M. Forster on the Relationship between the Hegemonic Role of Technology and the Existence of Human Civilization",
          authors: "D. N. P. Amarasooriya",
          file: "/proceedings/2024/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf"
        },
        {
          title: "Relationship between Service Quality and Patient Loyalty in Private and Public Hospitals: A Case Study of Colombo District, Sri Lanka",
          authors: "Parame Maleesha, Nalin D. Wijesinghe",
          file: "/proceedings/2024/15_SUB%20THEME%2002%20-%20Impact%20of%20Technology%20on%20Industry,%20Society,%20Labour%20Market,%20and%20Human%20Wellbeing.pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Role of Technology in Restoring Tangible and Intangible Cultural Heritage",
      papers: [
        {
          title: "Restoring Traditional Performing Arts through Technology: A Study of Chhau Dance-Drama and its Masks",
          authors: "S. M. W. S. K. Samarakoon",
          file: "/proceedings/2024/SUB_THEME_03.pdf"
        },
        {
          title: "Digital Dastaan: Preserving the Tangible and Intangible Cultural Heritage of Indo Pak Region through Technology",
          authors: "N. Aamir, A. Bilal",
          file: "/proceedings/2024/SUB_THEME_03.pdf"
        },
        {
          title: "The Impact of Traditional Economic Practices on Contemporary Markets: A Case Study on the Significance of Cultural Heritage in the Lac (Laksha) Artisanal Economy within Hapuwida Village, Matale, Sri Lanka",
          authors: "D. Dewapura, H. Gamage, R. D. A. Tissa, K. Sajeewani",
          file: "/proceedings/2024/SUB_THEME_03.pdf"
        },
        {
          title: "An analysis of Rock Art on Livelihood and Cognition in Sri Lanka",
          authors: "Niluka D. Thilakarathne",
          file: "/proceedings/2024/SUB_THEME_03.pdf"
        },
        {
          title: "Digital Preservation of Veddah Cultural Heritage: Safeguarding Indigenous Knowledge in Sri Lanka",
          authors: "D. T. H. Ananda, C. A. D. Nahallage",
          file: "/proceedings/2024/SUB_THEME_03.pdf"
        },
        {
          title: "The Role of Hammurabi's Code in Mitigating Fear of Crime: Early Legal Structures and Societal Order",
          authors: "Nishani Ranaweera",
          file: "/proceedings/2024/SUB_THEME_03.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Transforming Education: Navigating Reforms in the Digital Age",
      papers: [
        {
          title: "Advancement of Teacher Professionalism in National Colleges of Education: Sri Lankan Experiences",
          authors: "C. J. H. Kasturi Arachchi, G. G. O. Kasturi Arachchi, C. Kasturi Arachchi",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Enhancing Educational Outcomes: The Role of Instructional Leadership in Education Management in Sri Lanka",
          authors: "A. S. Thennakoon",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Electronic Learning in Secondary School Education: Study Based on Batticaloa West Education Zone",
          authors: "Judith Harriet Francke, Christy Sajith",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Transforming Sri Lankan Education: The Role of Teachers in Human Rights Advocacy in the Digital Age",
          authors: "M. A. S. P. Manchanayaka",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Transnational Education in Non-State Higher Educational institutes in Sri Lanka: Challenges and Opportunities",
          authors: "V. K. Kurukulaarachchi",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Households' Preferences for Private Tuition Attributes in Jaffna Municipal Area, Sri Lanka",
          authors: "S. Vanaiya, S. Sivashankar, K. Sooriyakumar, S. Sarujan",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Exploring the Impact of Technology Integration in Lesson Planning and Teaching Effectiveness in Higher Education Institutions: A case study of the University of Ruhuna, Sri Lanka",
          authors: "Nalin D. Wijesinghe, S. Chandrasena",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Job Satisfaction and Work-Life Balance: Experiences of Police Officers in Sri Lanka",
          authors: "C. J. H. Kasturi Arachchi, G. G. O. Kasturi Arachchi, C. Kasturi Arachchi",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Transforming Education: Navigating Reforms in the Digital Age with Indigenous Medicine",
          authors: "A. M. Muthalib",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        },
        {
          title: "Digital Transformation in Foreign Language Teaching: Exploring the Challenges and Opportunities of Online Education for the German External Degree Program",
          authors: "B. Madhupali Sugandhika Cooray",
          file: "/proceedings/2024/SUB_THEME_04.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Democracy and Citizenship in the Era of Technology",
      papers: [
        {
          title: "Exploring Judicial Narratives: Need for Digital Law Archives",
          authors: "Manikya Kodithuwakku",
          file: "/proceedings/2024/SUB_THEME_05.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Social Networking and Human Interactions Explored Through Technology",
      papers: [
        {
          title: "Social Networking Usage and Conspiracy beliefs among Undergraduates in Colombo, Sri Lanka",
          authors: "S. Pirannavi, Miurangani Karunarathna, A. S. Amathullah",
          file: "/proceedings/2024/SUB_THEME_06.pdf"
        },
        {
          title: "Social Networks and Human Interactions in the Process of Immigrant Settlement-Sri Lankan Sinhalese Migrants in Australia",
          authors: "Jagath Bandara Pathirage",
          file: "/proceedings/2024/SUB_THEME_06.pdf"
        },
        {
          title: "Factors Associated with the User's Willingness to Leave Digital Footprint on Social Media",
          authors: "T. U. S. Senarath, W. A. S. Dishanka",
          file: "/proceedings/2024/SUB_THEME_06.pdf"
        },
        {
          title: "The Evolution of Human Relationships in the Digital Age: A Study of Online Friendships and Offline Impacts",
          authors: "S. Chandrasena, Nalin D. Wijesinghe",
          file: "/proceedings/2024/SUB_THEME_06.pdf"
        }
      ]
    },
    {
      id: "theme7",
      title: "Digital Humanities and Computational Approaches on Harnessing the Performing and Visual Arts",
      papers: [
        {
          title: "Pietra dura: A Distinguished Art of Mughal Empire",
          authors: "Naureen Kamran",
          file: "/proceedings/2024/SUB_THEME_07.pdf"
        }
      ]
    },
    {
      id: "theme8",
      title: "Machine Learning and Machine Translation for Cross-Cultural Communication",
      papers: [
        {
          title: "An Analysis of Foreign Influences on Indigenous Drama During the Medieval Period",
          authors: "P. G. C. M. T. Bandara",
          file: "/proceedings/2024/SUB_THEME_08.pdf"
        }
      ]
    },
    {
      id: "theme9",
      title: "The Impact of Technology on Socio-Economic Crises",
      papers: [
        {
          title: "Review on Enhancing Infrastructure Resilience with Smart Technologies in Sri Lanka",
          authors: "S. K. Manamperi",
          file: "/proceedings/2024/SUB_THEME_09.pdf"
        },
        {
          title: "Factors Affecting Successful E-Government Implementation: Use of Fcc Model in Divisional Secretariats in Sri Lanka",
          authors: "T. Kirubashalini, D. M. T. D. Dissanayake",
          file: "/proceedings/2024/SUB_THEME_09.pdf"
        },
        {
          title: "The Role of Technology Self Efficacy on Human Resource Analytics user behaviour in the Public Sector HR Professionals in Sri Lanka: A Conceptual Study",
          authors: "A. H. U. Perera, B. M. H. Imasha",
          file: "/proceedings/2024/SUB_THEME_09.pdf"
        }
      ]
    },
    {
      id: "theme10",
      title: "Industrialization, Global Warming and Climate Change",
      papers: [
        {
          title: "Climate Change Impacts on Mental Health and Well-Being: A Review",
          authors: "A. S. Jereena, A. M. Muthalib, M. I. Manuha",
          file: "/proceedings/2024/23_SUB%20THEME%2010%20-%20Industrialization,%20Global%20Warming%20and%20Climate%20Change.pdf"
        }
      ]
    },
    {
      id: "theme11",
      title: "Political Economy and Sustainable Transformative Approaches",
      papers: [
        {
          title: "The Role of Sovereign Credit Risk in Domestic Stock and Bond Market Co-Movements",
          authors: "Sehani Sathya Ramanayake, Prabhath Jayasinghe, Venura Welagedara",
          file: "/proceedings/2024/SUB_THEME_11.pdf"
        }
      ]
    },
    {
      id: "theme12",
      title: "Miscellaneous",
      papers: [
        {
          title: "Human Resource Management Issues and Challenges: A Study Based on the University Grants Commission of Sri Lanka",
          authors: "H. D. Rasika Karunarathna",
          file: "/proceedings/2024/SUB_THEME_12.pdf"
        },
        {
          title: "Weighing the Aesthetic Appeal and Cost- Effectiveness of Modern Building Materials Compared to Traditional Options",
          authors: "R. A. D. I. C. Rathnayake, K. D. Wickramarathne, M. Arunshankar, W. A. R. Senevirathne",
          file: "/proceedings/2024/SUB_THEME_12.pdf"
        },
        {
          title: "The Role of Prosthetic Makeup for Creating Realistic Creature Effects in Fantasy Movies",
          authors: "A. Y. Oshan Lakshitha",
          file: "/proceedings/2024/SUB_THEME_12.pdf"
        },
        {
          title: "Significance of life in dance: 'Prāna'",
          authors: "Nishali Silva, Prashanthi Narangoda, Santhushya Fernando",
          file: "/proceedings/2024/SUB_THEME_12.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2024Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2024.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2024.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2024.date}</p>
            <p className="text-gray-500">{proceedings2024.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2024.themes.map((theme) => (
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
          <p>© 2024 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}