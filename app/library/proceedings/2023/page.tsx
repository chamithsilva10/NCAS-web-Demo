import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, ArrowLeft } from 'lucide-react';

const proceedings2023 = {
  title: "5th International Research Symposium on Social Sciences and Humanities (IRSSSH) 2023",
  subtitle: "Post-War Reconciliation and Sustainable Peace: Challenges and Prospects",
  date: "November 17-18, 2023",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Tangible and Intangible Cultural Heritage A Retrospective of Demanding Identity",
      papers: [
        {
          title: "Sound Assimilation in First Language Acquisition of Sinhala",
          authors: "Lokeshwari S. Karunarathna",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        },
        {
          title: "Performing Ethnic Identity: A Discourse Study on the Sri Lankan Chinese Immigrant",
          authors: "Pathirana H.P.H.P.K",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        },
        {
          title: "The Influence of Gender Stereotypes in Children's Psychological Development: An Examination of Cartoons in 1990's Sri Lanka",
          authors: "Asha Jayakody",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        },
        {
          title: "Women in Craftsmanship and Artistic Traditions: an Analysis of Female Artisans in Ancient Sri Lanka",
          authors: "K.M.G. Arjuna Manage",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        },
        {
          title: "ජන ආගමික ප්‍රලයවීම්හි භාවිත භෞතික විභවයන් හා අධිභෞතික විභවයන් පිළිබඳ සෞන්දයර් යමක්",
          authors: "එල්. බී. එස්. ගුණවර්ධන",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        },
        {
          title: "Culture, Individuality, and success; A study of 'defeated' or 'failed' characters in Sinhala novel with some Theoretical approaches such as Existentialism, psychoanalysis theory etc.…'",
          authors: "Dr. Mahinda Rathnayaka",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        },
        {
          title: "The Musical Culture of Ceylon Africans: A case study of Manja tradition of Sirambiadiya region",
          authors: "J.Chandana Ruwan Kumara",
          file: "/proceedings/2023/14_SUB%20THEME%2001%20Tangible%20and%20Intangible%20Cultural%20Heritage%20A%20Retrospective%20of%20Demanding%20Identity.pdf"
        }
      ]
    },
    {
      id: "theme2",
      title: "Religion And Society a Philosophy, Myth and Reality Beyond Science",
      papers: [
        {
          title: "මහාචාර්ය සේනක බණ්ඩාරනායක මහතා පුවත්පත් මාධ්‍යය මඟින් සිදු කළ සමාජ සංස්කෘතික බලපෑම පිළිබඳ අධ්‍යයනයක්",
          authors: "කුසලා සජීවනී",
          file: "/proceedings/2023/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf"
        },
        {
          title: "Effectiveness of Time and Space on Dance symbolized in Rock Art",
          authors: "Niluka D Thilakarathne",
          file: "/proceedings/2023/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf"
        },
        {
          title: "Unveiling Truth: A Comparative Explanation of Knowledge, Reality, and Liberation in Bhagavad Gita and Plato's Allegory of the Cave",
          authors: "S.S.Hewawasam",
          file: "/proceedings/2023/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf"
        },
        {
          title: "Wedding Night Virginity Test Among Sri Lankan Muslims: A Myth or Science?",
          authors: "Abdul Wadood Noor Naleefa, Mimi Hanida Abdul Mutalib, and Yew Wong Chin",
          file: "/proceedings/2023/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf"
        },
        {
          title: "An Academic Exploration of 'The Survival of The Fittest' and the Deconstruction of Man-Made Religious Beliefs in Yashpal's /khəccər ɔ:r a:dmi:/ (Mule and the Man).",
          authors: "L.M.RidmaNishadineeLansakara",
          file: "/proceedings/2023/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf"
        },
        {
          title: "Identification and examination of the editing methodology of Sinhala classics of Valivitiya Soratha (1897-1963).",
          authors: "Chinthaka Ranasinha",
          file: "/proceedings/2023/15_SUB%20THEME%2002%20Religion%20And%20Society%20a%20Philosophy,%20Myth%20and%20Reality%20Beyond%20Science..pdf"
        }
      ]
    },
    {
      id: "theme3",
      title: "Freedom, Rights, and Civil Responsibilities vs Legislation and Social Justice",
      papers: [
        {
          title: "Accountability in Disaster Risk Governance (DRG) in Sri Lanka: An analysis on National Policy on Disaster Management (NDMP) of Sri Lanka",
          authors: "Senanayake M, Amaratunga D, Haigh R",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        },
        {
          title: "Navigating Between Public and Private Spheres: A Case Study of Scooter Riding Women in Colombo Suburbs",
          authors: "Anton Piyaratne, Lavangi Ranasinghe",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        },
        {
          title: "Rights of Sri Lankan Indigenous People (the Veddas): A Call for Conservation and Empowerment",
          authors: "D. T. H. Ananda, C. A. D. Nahallage",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        },
        {
          title: "Cultural Dynamics and the Advancement of LGBTIQ Rights in Sri Lanka: An Investigative Study on Activism and Implementation",
          authors: "N.C. Pathirana",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        },
        {
          title: "Effect of Audit Committee Quality and Corporate Ownership on Timeliness of Financial Reporting: Evidence from India",
          authors: "D. Samarawickrama, P. K Biswas, H. Roberts",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        },
        {
          title: "We do not need another 'Homosexual' to our Social Sciences Faculty; Workplace Harassment, Discrimination, and Labelling towards LGBTIQ+ and Queer Studies in Critical and Cultural Communication",
          authors: "Manoj Jinadasa",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        },
        {
          title: "Gendered Insecurities: Understanding Factors Influencing the Fear of Crime in Colombo, Sri Lanka",
          authors: "K.G.N.U Ranaweera, N.T Rugkhapan, I. Rado",
          file: "/proceedings/2023/16_SUB%20THEME%2003%20Freedom,%20Rights,%20and%20Civil%20Responsibilities%20vs%20Legislation%20and%20Social%20Justice.pdf"
        }
      ]
    },
    {
      id: "theme4",
      title: "Reconciliation, Politics, and Society",
      papers: [
        {
          title: "Does Social Safety Net Programs Reduces Poverty? Evidence from Samurdhi Program in Sri Lanka",
          authors: "N.P. Ravindra Deyshappriya, K.M.N Jeewanthi, K.A.D.D. Kannangara",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        },
        {
          title: "Local Governance Autonomy for National Reconciliation after the War in Sri Lanka: Policy and Practice of the Agency-Model",
          authors: "S. Chandran",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        },
        {
          title: "Concept Of Global Britain and Rishi Sunak Foreign Policy in United Kingdom",
          authors: "Vithanage chamali, Perera H.R.L",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        },
        {
          title: "පශ්චාත් යුද සුවයේ දේශීය වේදිකා නාට්‍ය මගින් නිරුෂිත සමකාලීන කටුමිරිය පිළිවිද",
          authors: "පී.පී.සී.එම්.ටී.බණ්ඩාර",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        },
        {
          title: "APPLICATION OF CAGE DISTANCE FRAMEWORK ON BILATERAL FOREIGN DIRECT INVESTMENT INFLOWS TO OECD AND NON-OECD ASIAN COUNTRIES",
          authors: "S. S. Ramanayake",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        },
        {
          title: "Institutional logics in Nonstate Higher Education Institutes in Sri Lanka: Pilot Study",
          authors: "K. Kurukulaarachchi, A.W.J.C. Abeygunasekera",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        },
        {
          title: "Portuguese Administration in the Eastern Region of Sri Lanka",
          authors: "Nilanthini Chenthurran",
          file: "/proceedings/2023/17_SUB%20THEME%2004%20Reconciliation,%20Politics,%20and%20Society.pdf"
        }
      ]
    },
    {
      id: "theme5",
      title: "Environment and Ecology, Transmigration of Healthy Livelihood",
      papers: [
        {
          title: "The Impact of Environment on Psychological Well-Being of Individuals: a Review",
          authors: "Malathie P. Dissanayake",
          file: "/proceedings/2023/18_SUB%20THEME%2005%20Environment%20and%20Ecology,%20Transmigration%20of%20Healthy%20Livelihood.pdf"
        },
        {
          title: "Unravelling the Complexities: Exploring the challenges of municipal solid waste management policy implementation in Sri Lanka",
          authors: "M.K. Nadeeka Damayanthi",
          file: "/proceedings/2023/18_SUB%20THEME%2005%20Environment%20and%20Ecology,%20Transmigration%20of%20Healthy%20Livelihood.pdf"
        },
        {
          title: "ප්‍රජා සංක්‍රමණික ඉතිහාසය ගොඩනැගීම පිළිබඳ ක්‍රමංවදිය ගැටලූ සහ අර්ථකථනය සීමාජගත් බණ්ඩාර පතිරගේ",
          authors: "",
          file: "/proceedings/2023/18_SUB%20THEME%2005%20Environment%20and%20Ecology,%20Transmigration%20of%20Healthy%20Livelihood.pdf"
        }
      ]
    },
    {
      id: "theme6",
      title: "Sustainable Development and the Role of SMEs",
      papers: [
        {
          title: "Exploring Alternative Strategies to Address Egg Market Inefficiencies in Sri Lanka: An Analysis in Gampaha District",
          authors: "Pasindu Maheela Dharmasiri",
          file: "/proceedings/2023/19_SUB%20THEME%2006%20Sustainable%20Development%20and%20the%20Role%20of%20SMEs..pdf"
        },
        {
          title: "Digital Storytelling for Communicating the Sustainability Practices: A Case Study of House of Lonali",
          authors: "B.A.N. Eranda",
          file: "/proceedings/2023/19_SUB%20THEME%2006%20Sustainable%20Development%20and%20the%20Role%20of%20SMEs..pdf"
        },
        {
          title: "Business Model Adaptation for Social Enterprise Sustainability: Case in Sri Lanka",
          authors: "R.M.H.A Karunathilake, R. Senathiraja",
          file: "/proceedings/2023/19_SUB%20THEME%2006%20Sustainable%20Development%20and%20the%20Role%20of%20SMEs..pdf"
        },
        {
          title: "An analysis of the role that the English Language plays in empowering women entrepreneurs in the small and medium scale enterprises in Sri Lanka",
          authors: "D.N.P Amarasooriya",
          file: "/proceedings/2023/19_SUB%20THEME%2006%20Sustainable%20Development%20and%20the%20Role%20of%20SMEs..pdf"
        }
      ]
    },
    {
      id: "theme7",
      title: "Tourism An Industry or and Art",
      papers: [
        {
          title: "IMPACT OF THE CURRENT ECONOMIC CRISIS IN SRI LANKA ON FAMILIES ENGAGED IN THE TOURISM INDUSTRY",
          authors: "T.P.G.T.M. De Alwis, M.O. Perera",
          file: "/proceedings/2023/20_SUB%20THEME%2007%20Tourism%20An%20Industry%20or%20and%20Art.pdf"
        },
        {
          title: "ශ්‍රී ලංකාවේ සම්ප්‍රදායික පහතරට නර්තන කලාව සහා සංචාරක කර්මාන්තය ප්‍රවර්ධනය",
          authors: "ආර්.ඩී. සිල්වා, එස්.ඒ. පෙරේරා",
          file: "/proceedings/2023/20_SUB%20THEME%2007%20Tourism%20An%20Industry%20or%20and%20Art.pdf"
        },
        {
          title: "Analysis of website globalization of official tourism promotion websites in South Asia",
          authors: "S. Herath",
          file: "/proceedings/2023/20_SUB%20THEME%2007%20Tourism%20An%20Industry%20or%20and%20Art.pdf"
        }
      ]
    },
    {
      id: "theme8",
      title: "Role of Digital Tools in Teaching and Learning A far cry for Language Learning",
      papers: [
        {
          title: "Frustrations And Restrictions on Delivering Online to Foster the Continuation of School Education During the Second Wave of COVID-19 in Sri Lanka",
          authors: "V.G. Chinthaka Naleen",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        },
        {
          title: "The Use of Smartwatches as a Wearable Device for Learning in Higher Education: Toward an Integrative Theoretical Model",
          authors: "W.T.M. de Silva",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        },
        {
          title: "Digital Tools in Language Learning: Impact and Challenges",
          authors: "Manchanayaka, M. A. S. P.",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        },
        {
          title: "s using digital dictionaries a far cry for Sri Lankan English language learners?",
          authors: "K.M. Dissanayake, B.M.T.C Basnayake",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        },
        {
          title: "Work-family Interface, telecommuting and Quality of work-life of female academics in Sri Lanka",
          authors: "H.M. Nishanthi, Mario Fernanado",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        },
        {
          title: "Need Analysis to identify the need for Module-Based Teaching: Intervention to Children with Reading Difficulties in Sri Lanka",
          authors: "N.M.M. Safeek",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        },
        {
          title: "Mapping the Evolving Landscape of Employability Skills in the 21st-Century Labor Market: A Comprehensive Literature Review",
          authors: "P.N Gardihewa",
          file: "/proceedings/2023/21_SUB%20THEME%2008%20Role%20of%20Digital%20Tools%20in%20Teaching%20and%20Learning%20A%20far%20cry%20for%20Language%20Learning..pdf"
        }
      ]
    },
    {
      id: "theme9",
      title: "Authentic Science and Technology",
      papers: [
        {
          title: "Study on the Demand for Degrees in Bachelor of Science (BSc.) Honours in Information Technology, Sri Lanka",
          authors: "R. Werawatta, L.M. Senanayake, S. Chandrasena, L. Kodagoda",
          file: "/proceedings/2023/22_SUB%20THEME%2009%20Authentic%20Science%20and%20Technology.pdf"
        },
        {
          title: "A critical review of Manasa Roga in Ayurveda Sanskrit texts and an observational study of Sarasvatha Choorna in the Management of Dementia (Smrutihbramsha)",
          authors: "T.D.N. Karunaratne, K. Sugataratana, H.A.S. Ariyawansa, H.A. de Silva",
          file: "/proceedings/2023/22_SUB%20THEME%2009%20Authentic%20Science%20and%20Technology.pdf"
        },
        {
          title: "Development of a Framework for Health Data Governance in Sri Lanka",
          authors: "K.T.S. Virantha, B.N.S. Lankasena",
          file: "/proceedings/2023/22_SUB%20THEME%2009%20Authentic%20Science%20and%20Technology.pdf"
        }
      ]
    },
    {
      id: "theme10",
      title: "Al (Artificial Intelligence) and digital restoration",
      papers: [
        {
          title: "A Study on the utility of the Facilities Provided by the Google Earth Software for Historical Studies",
          authors: "B.M.C Madhusanka Bandara",
          file: "/proceedings/2023/23_SUB%20THEME%2010%20Al%20(Artificial%20Intelligence)%20and%20digital%20restoration.pdf"
        },
        {
          title: "Formulating Digital Wellbeing from the Employee's Perspective: Directions for Future Research",
          authors: "Yohan Perera",
          file: "/proceedings/2023/23_SUB%20THEME%2010%20Al%20(Artificial%20Intelligence)%20and%20digital%20restoration.pdf"
        },
        {
          title: "The Impact of Artificial Intelligence in Enhancing the Writing Skill of ESL Learners",
          authors: "Mrs. Vithuja Rajaram",
          file: "/proceedings/2023/23_SUB%20THEME%2010%20Al%20(Artificial%20Intelligence)%20and%20digital%20restoration.pdf"
        }
      ]
    }
  ]
};

export default function Proceedings2023Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2023.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2023.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2023.date}</p>
            <p className="text-gray-500">{proceedings2023.venue}</p>
          </div>
        </div>

        {/* Themes */}
        <div className="space-y-6">
          {proceedings2023.themes.map((theme) => (
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
          <p>© 2023 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}