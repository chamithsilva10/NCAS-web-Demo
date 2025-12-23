"use client"

import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Profile data with slugs for routing
const profileData = [
  {
    slug: "dr-b-d-d-pathirana",
    name: "Dr. B.D.D. Pathirana",
    dept: "Department of Philosophy & Psychology, University of Peradeniya",
    image: "/bdd-pathirana.jpg",
    content: `Dr. Buddhipraba Pathirana was the first to complete her Ph D in late 2006 under NCAS grants scheme. She completed her Doctoral research at the Faculty of Graduate Studies, University of Colombo, in an area extremely important for the future of the country investigating "Early Violence / Aggression and Pro-Social Behaviour in Preschool Children". Her Supervisors were Professor Swarna Wijetunga and Dr. Gayathri Fernando. The study reveals some stunning evidence of breeding grounds of aggressive behaviour among preschool children primarily rooted in institutional settings of preschools and their teaching methods. What the study reveals is the requirement of change and reform in preschool education. Dr. Pathirana has gathered her empirical evidence through survey questionnaire and semi structured interviews. The outcome of the study is presented through a "Preschool Teacher Training Manual" comprising 14 modules to prevent aggressive behaviour and promote pro-social attitudes among preschool children.`
  },
  {
    slug: "dr-d-m-suratissa",
    name: "Dr. D.M. Suratissa",
    dept: "Natural Zoology Museum, University of Colombo",
    image: "/dm-suratissa_s.jpg",
    content: `Dr. D.M. Suratissa completed his Ph D in Paleobiology and Anthropology under the NCAS grant scheme in August 2007 at Jilin University, China. Going back to the history in time his investigation was mainly Anthropological analysing the "transition from hunting to farming in North-East China". Under the supervision of Professor Tang Zhuo-Wei he conducted case studies in three archealogical sites (Shangjifangyingzi, Dashanqian, and Wangbabozi). His study was mainly comparative identifying the factors in transission from hunting to farming during Neolithic time to Iron Age. His study was exceptional as he conducted his field investigations far-away from Sri Lanka and managed to bring his knowledge and experience to his home country in a valuable manner. In the process of studies, as he claims, he has transformed himself from a museum curator to a potential full born Paleobiologist with qualification.`
  },
  {
    slug: "dr-i-g-p-r-kulanatha",
    name: "Dr. I.G.P.R. Kulanatha",
    dept: "Institute of Indigenous Medicine, University of Colombo",
    image: "/kulanatha_s.jpg",
    content: `Dr. I.G.P.R. Kulanatha obtained her Doctor of Medicine in Ayurveda Samhitha at Baranas Hindu University, India, under NCAS grant scheme. Her study reveals the importance of Ethics described in Ayurveda in proper maintenance of Health with special reference to Varihattray? in all three Samhithas. Her main argument was that Ayurveda is primarily a science of positive health and it is secondarily, a science for the cure of diseases. A major value of her thesis is the presentation of the aged old conceptions of Health in Ayurveda to be valuable for present day living of human beings. Both physical and ethical practices relevant to various stages of life from birth to death are described, related and analyzed in various chapters of her thesis. She successfully completed her MD under the supervision of Professor P.K. Goswani, Reader and Head of the Department of Ayurveda Samhitha at the Baranas Hindu University.`
  },
  {
    slug: "dr-w-a-weerasooriya",
    name: "Dr. W.A. Weerasooriya",
    dept: "Library & Information Science, University of Kelaniya",
    image: "/weerasooriya.jpg",
    content: `The subject of Dr. W.A. Weerasooriya's PhD thesis was "Human Resource Planning in University Libraries" which he completed in August 2008 at the University of Pune, India. While the traditional problem of Library Management was considered about books, he has come up with the argument that it is more about people and their Human Resource Management. This study was concluded under the supervision of Dr. (Mrs.) Neela Deshpande, Reader in the Department of Library and Information Science of the same university. After surveying the existing Human Resource Management setup in various university libraries in Sri Lanka Dr. Weerasooriya has suggested improvements and changes which would guide policy makers, university administrators and library professionals in the field of library science. He proposes more participatory management and higher training for library staff apart from technological improvements for the quality enhancement of university libraries.`
  },
  {
    slug: "dr-d-s-n-p-senaratne",
    name: "Dr. D. S. N. P. Senaratne",
    dept: "Department of Accounting, University of Sri Jayewardenepura",
    image: "/samanthi-senarathna_s.jpg",
    content: `Profile content for Dr. D. S. N. P. Senaratne will be added here.`
  },
  {
    slug: "mr-a-robinson",
    name: "Mr. A. Robinson",
    dept: "Department of Sociology, University of Colombo",
    image: "/robinson_s.jpg",
    content: `Profile content for Mr. A. Robinson will be added here.`
  },
  {
    slug: "rev-dr-j-jebamohan",
    name: "Rev.Dr. J. Jebamohan",
    dept: "Department of Christian & Islamic Civilizations, University of Jaffna",
    image: "/rev.-jebamohan_s.jpg",
    content: `Profile content for Rev.Dr. J. Jebamohan will be added here.`
  },
  {
    slug: "dr-m-p-p-dharmadasa",
    name: "Dr. M. P. P. Dharmadasa",
    dept: "Department of Marketing, University of Colombo",
    image: "/dharmadasa.jpg",
    content: `Profile content for Dr. M. P. P. Dharmadasa will be added here.`
  },
  {
    slug: "dr-c-d-senaratne",
    name: "Dr. C D Senaratne",
    dept: "English Language Teaching Unit, University of Kelaniya",
    image: "/C-D-Senaratne-_B..jpg",
    content: `Profile content for Dr. C D Senaratne will be added here.`
  },
  {
    slug: "dr-mrs-e-l-s-j-perera",
    name: "Dr. (Mrs.) E.L.S.J. Perera",
    dept: "Department of Demography, University of Colombo",
    image: "/elsj-perera_s.jpg",
    content: `Profile content for Dr. (Mrs.) E.L.S.J. Perera will be added here.`
  },
  {
    slug: "dr-k-m-alexander",
    name: "Dr. K.M. Alexander",
    dept: "Department of History and Archaeology, University of Sri Jayewardenepura",
    image: "/alexander_l.jpg",
    content: `Profile content for Dr. K.M. Alexander will be added here.`
  },
  {
    slug: "dr-sandagomi-coperahewa",
    name: "Dr. Sandagomi Coperahewa",
    dept: "Department of Sinhala, University of Colombo",
    image: "/coperahewa_l.jpg",
    content: `Profile content for Dr. Sandagomi Coperahewa will be added here.`
  },
  {
    slug: "dr-ms-hrnpk-handegama",
    name: "Dr. (Ms.) HRNPK Handegama",
    dept: "Department of Philosophy and Psychology, University of Peradeniya",
    image: "/handegama.gif",
    content: `Profile content for Dr. (Ms.) HRNPK Handegama will be added here.`
  },
  {
    slug: "dr-mrs-ameena-cassim",
    name: "Dr. (Mrs.) Ameena Cassim",
    dept: "Department of Arabic & Islamic Civilization, University of Peradeniya",
    image: "/cassim.jpg",
    content: `Profile content for Dr. (Mrs.) Ameena Cassim will be added here.`
  },
  {
    slug: "ms-g-r-k-dissanayake",
    name: "Ms. G.R.K. Dissanayake",
    dept: "Department of Philosophy and Psychology, University of Peradeniya",
    image: "/ms.-g-dissanayake.jpg",
    content: `Profile content for Ms. G.R.K. Dissanayake will be added here.`
  },
  {
    slug: "dr-r-k-lal-mervin-dharmasiri",
    name: "Dr. R K Lal Mervin Dharmasiri",
    dept: "Department of Geography, University of Kelaniya",
    image: "/mervin-dharmasiri.jpg",
    content: `Profile content for Dr. R K Lal Mervin Dharmasiri will be added here.`
  },
  {
    slug: "dr-h-m-nawarathna-banda",
    name: "Dr. H M Nawarathna Banda",
    dept: "Department of Economics, University of Kelaniya",
    image: "/nawarathna-banda.jpg",
    content: `Profile content for Dr. H M Nawarathna Banda will be added here.`
  },
  {
    slug: "dr-ms-t-m-d-subashini",
    name: "Dr. (Ms.) T M D Subashini",
    dept: "Department of Sociology, University of Kelaniya",
    image: "/subashini.png",
    content: `Profile content for Dr. (Ms.) T M D Subashini will be added here.`
  },
  {
    slug: "dr-mrs-swarna-ukwatta",
    name: "Dr. (Mrs.) Swarna Ukwatta",
    dept: "Department of Demography, University of Colombo",
    image: "/ukwatta.jpg",
    content: `Profile content for Dr. (Mrs.) Swarna Ukwatta will be added here.`
  },
  {
    slug: "dr-n-chandrasiri-niriella",
    name: "Dr. N. Chandrasiri Niriella",
    dept: "Department of Sociology, University of Colombo",
    image: "/dr.-niriella-1.jpg",
    content: `Profile content for Dr. N. Chandrasiri Niriella will be added here.`
  },
  {
    slug: "dr-m-g-manuratne",
    name: "Dr. M.G. Manuratne",
    dept: "Department of Sociology, University of Peradeniya",
    image: "/m-g-manuratne-s.jpg",
    content: `Profile content for Dr. M.G. Manuratne will be added here.`
  },
  {
    slug: "dr-jeyaseelan-gnanaseelan",
    name: "Dr. Jeyaseelan Gnanaseelan",
    dept: "ELTU, Vavuniya Campus, University of Jaffna",
    image: "/gunaseelan-l.jpg",
    content: `Profile content for Dr. Jeyaseelan Gnanaseelan will be added here.`
  },
  {
    slug: "dr-w-m-semasinghe",
    name: "Dr. W. M. Semasinghe",
    dept: "Department of Economics, University of Kelaniya",
    image: "/dr.-w-m-semasinghe.jpg",
    content: `Profile content for Dr. W. M. Semasinghe will be added here.`
  },
  {
    slug: "dr-h-r-a-menike",
    name: "Dr. H R A Menike",
    dept: "Department of Economics, University of Kelaniya",
    image: "/h_r_a_menike.jpg",
    content: `Dr. H R A Menike completed her PhD in Economics in March 2011, at the University of Pune, India under the supervision of Professor K.R. Sanap at the same university. Her topic of the research is, "A Study of Demographic Transition and Economic Development in Sri Lanka since 1963 to 2007". The main purpose of the research was to observe the impact of demographic transition on the economic development in Sri Lanka during the period 1963 to 2007. The study reveals that, there is a considerable impact of demographic transition on the economic development in Sri Lanka during the said period. She has also identified that although, there has been a bulge increase of the labour force in Sri Lanka within the study period, and it was observed that the country has been unsuccessful to obtain the maximum benefits of this increased labour force towards the economic expansion. As a result of the demographic transition, the ageing population of the country appears to be increasing gradually. When we consider the impact of this ageing, population against the economic growth of the country, the study exposed that the issues of ageing population in the rural sector has become crucial when compared with the urban sector. Therefore, the ageing population in the rural sector will cause a higher impact on the economic development of the country in the near future.`
  },
  {
    slug: "dr-a-nanthakumaran",
    name: "Dr.(Mrs) A. Nanthakumaran",
    dept: "Department of Biological Sciences, University of Jaffna",
    image: "/anulawathiie.jpg",
    content: `Profile content for Dr.(Mrs) A. Nanthakumaran will be added here.`
  },
  {
    slug: "prashanthi-narangoda",
    name: "Dr.(Mrs) Prashanthi Narangoda",
    dept: "Department of Fine Arts, University of Kelaniya",
    image: "/prashanthi.jpg",
    content: `Dr. (Mrs.) Prashanthi Narangoda, is a Professor in Fine Arts in the Department of Fine Arts of the University of Kelaniya. She is one of the pioneering research scholars in the field of Fine Arts covering many areas and seeking the interconnectedness of the Art, society and the culture, specially focusing on Sri Lanka and Asia. She was graduated from the University of Kelaniya in 1992 and obtained her Master of Science Degree from the Post Graduate Institute of Archaeology, of the same University in the year 2000. She pursued her PhD at the University of the West, California in the USA from 2008-2012 and earned her PhD with a merit due to the research scholarship she demonstrated throughout. Apart from that she bears several memberships in renowned organizations: member of the American Association for Religious Studies (AAR), member of the UNESCO International Dance Council, and a Life member of the Royal Asiatic Society, Sri Lanka Branch. She is also a member of the Advisory Board of the International Journal of Religious Tourism and Pilgrimage. She has been undertaking national and international level responsibilities to date. She is the Chairperson to the Ethics Review Committee of University of Kelaniya to date and was the founding Secretary of the ERC, University of Kelaniya. She is currently holding the post of Director, National Centre for Advanced Studies in Humanities and Social Sciences, purviewed by the Ministry of Education, and the Director, SAARC Cultural Centre, under the purview of South Asian Association for Regional Cooperation (SAARC).`
  }
]

export default function ProfilePage() {
  const params = useParams()
  const slug = params.slug as string

  const profile = profileData.find(p => p.slug === slug)

  if (!profile) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Profile Not Found</h1>
        <p>The requested profile could not be found.</p>
        <Link href="/grants/profiles-phd">
          <Button className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profiles
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Link href="/grants/profiles-phd">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Profiles
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Profile of {profile.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {profile.image && (
              <div className="flex-shrink-0">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
              <p className="text-muted-foreground mb-4">{profile.dept}</p>
              <div className="prose max-w-none">
                <p className="text-justify leading-relaxed">{profile.content}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Link href="/research">
          <Button className="w-full sm:w-auto">
            Explore Research
          </Button>
        </Link>
        <Link href="/publications">
          <Button variant="outline" className="w-full sm:w-auto">
            View Publications
          </Button>
        </Link>
      </div>

      <div className="text-center">
        <Link href="/grants/profiles-phd">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All PhD Profiles
          </Button>
        </Link>
      </div>
    </div>
  )
}