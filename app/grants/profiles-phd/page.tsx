import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const phdProfiles = [
  { name: "Dr. B.D.D. Pathirana", dept: "Department of Philosophy & Psychology, University of Peradeniya", slug: "dr-b-d-d-pathirana", image: "/bdd-pathirana.jpg" },
  { name: "Dr. D.M. Suratissa", dept: "Natural Zoology Museum, University of Colombo", slug: "dr-d-m-suratissa", image: "/dm-suratissa_s.jpg" },
  { name: "Dr. I.G.P.R. Kulanatha", dept: "Institute of Indigenous Medicine, University of Colombo", slug: "dr-i-g-p-r-kulanatha", image: "/kulanatha_s.jpg" },
  { name: "Dr. W.A. Weerasooriya", dept: "Library & Information Science, University of Kelaniya", slug: "dr-w-a-weerasooriya", image: "/weerasooriya.jpg" },
  { name: "Dr. D. S. N. P. Senaratne", dept: "Department of Accounting, University of Sri Jayewardenepura", slug: "dr-d-s-n-p-senaratne", image: "/samanthi-senarathna_s.jpg" },
  { name: "Mr. A. Robinson", dept: "Department of Sociology, University of Colombo", slug: "mr-a-robinson", image: "/robinson_s.jpg" },
  { name: "Rev.Dr. J. Jebamohan", dept: "Department of Christian & Islamic Civilizations, University of Jaffna", slug: "rev-dr-j-jebamohan", image: "/rev.-jebamohan_s.jpg" },
  { name: "Dr. M. P. P. Dharmadasa", dept: "Department of Marketing, University of Colombo", slug: "dr-m-p-p-dharmadasa", image: "/dharmadasa.jpg" },
  { name: "Dr. C D Senaratne", dept: "English Language Teaching Unit, University of Kelaniya", slug: "dr-c-d-senaratne", image: "/C-D-Senaratne-_B..jpg" },
  { name: "Dr. (Mrs.) E.L.S.J. Perera", dept: "Department of Demography, University of Colombo", slug: "dr-mrs-e-l-s-j-perera", image: "/elsj-perera_s.jpg" },
  { name: "Dr. K.M. Alexander", dept: "Department of History and Archaeology, University of Sri Jayewardenepura", slug: "dr-k-m-alexander", image: "/alexander_l.jpg" },
  { name: "Dr. Sandagomi Coperahewa", dept: "Department of Sinhala, University of Colombo", slug: "dr-sandagomi-coperahewa", image: "/coperahewa_l.jpg" },
  { name: "Dr. (Ms.) HRNPK Handegama", dept: "Department of Philosophy and Psychology, University of Peradeniya", slug: "dr-ms-hrnpk-handegama", image: "/handegama.gif" },
  { name: "Dr. (Mrs.) Ameena Cassim", dept: "Department of Arabic & Islamic Civilization, University of Peradeniya", slug: "dr-mrs-ameena-cassim", image: "/cassim.jpg" },
  { name: "Ms. G.R.K. Dissanayake", dept: "Department of Philosophy and Psychology, University of Peradeniya", slug: "ms-g-r-k-dissanayake", image: "/ms.-g-dissanayake.jpg" },
  { name: "Dr. R K Lal Mervin Dharmasiri", dept: "Department of Geography, University of Kelaniya", slug: "dr-r-k-lal-mervin-dharmasiri", image: "/mervin-dharmasiri.jpg" },
  { name: "Dr. H M Nawarathna Banda", dept: "Department of Economics, University of Kelaniya", slug: "dr-h-m-nawarathna-banda", image: "/nawarathna-banda.jpg" },
  { name: "Dr. (Ms.) T M D Subashini", dept: "Department of Sociology, University of Kelaniya", slug: "dr-ms-t-m-d-subashini", image: "/subashini.png" },
  { name: "Dr. (Mrs.) Swarna Ukwatta", dept: "Department of Demography, University of Colombo", slug: "dr-mrs-swarna-ukwatta", image: "/ukwatta.jpg" },
  { name: "Dr. N. Chandrasiri Niriella", dept: "Department of Sociology, University of Colombo", slug: "dr-n-chandrasiri-niriella", image: "/dr.-niriella-1.jpg" },
  { name: "Dr. M.G. Manuratne", dept: "Department of Sociology, University of Peradeniya", slug: "dr-m-g-manuratne", image: "/m-g-manuratne-s.jpg" },
  { name: "Dr. Jeyaseelan Gnanaseelan", dept: "ELTU, Vavuniya Campus, University of Jaffna", slug: "dr-jeyaseelan-gnanaseelan", image: "/gunaseelan-l.jpg" },
  { name: "Dr. W. M. Semasinghe", dept: "Department of Economics, University of Kelaniya", slug: "dr-w-m-semasinghe", image: "/dr.-w-m-semasinghe.jpg" },
  { name: "Dr. H R A Menike", dept: "Department of Economics, University of Kelaniya", slug: "dr-h-r-a-menike", image: "/h_r_a_menike.jpg" },
  { name: "Dr.(Mrs) A. Nanthakumaran", dept: "Department of Biological Sciences, University of Jaffna", slug: "dr-a-nanthakumaran", image: "/anulawathiie.jpg" },
  { name: "Dr.(Mrs) Prashanthi Narangoda", dept: "Department of Fine Arts, University of Kelaniya", slug: "prashanthi-narangoda", image: "/prashanthi.jpg" },
];

export default function ProfilesPhdPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profiles of NCAS PhD Grantees</h1>
      <Card className="mb-6">
        <CardContent className="p-6">
          <p className="text-lg mb-4">
            The NCAS is glad to profile those who have completed their PhDs and MPhils under its grants scheme as a token of appreciation for them and an encouragement for those who are on line to complete their ongoing studies. Three hundred ninety seven (397) grantees have completed their postgraduate degrees at the end of the year 2024. They come from the fields of Psychology, Anthropology/Paleobiology, Indigenous Medicine, Library Science, Management, Sociology, Comparative Religion, Mass Communication, Economics, Geography, Education, History and Archeology, Political Science, International Relations, Linguistics, Philosophy, Buddhist Studies, Arabic Language Studies, Sinhala, English, Fine Arts.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>PhD Grantees Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {phdProfiles.map((profile, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {profile.image && (
                  <div className="mb-3">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-center">{profile.name}</h3>
                <p className="text-sm text-muted-foreground mb-2 text-center">{profile.dept}</p>
                <div className="text-center">
                  <Button asChild size="sm">
                    <Link href={`/grants/profiles-phd/${profile.slug}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}