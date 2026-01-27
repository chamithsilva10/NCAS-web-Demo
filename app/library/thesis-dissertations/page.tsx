

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, Search, Filter, Calendar, User, Award } from "lucide-react"
import Link from "next/link"

const thesisDissertations = [
  {
    id: 1,
    title: "Ethics Distributed in vrihattravi for propper maintaince of Health",
    author: "I.G.P.R.Kulanatha",
    university: "Banaras Hindu University",
    degree: "PhD",
    year: 2005,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 2,
    title: "The relevance of the Islamic Philosophy and Theology for the mission in Sri Lanka",
    author: "Jebratnam Jebmohan",
    university: "University of Jaffna",
    degree: "MPhill",
    year: 2006,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 3,
    title: "Urbam housing policy in Sri Lanka: A Study of relationship betwween state, Market and Social classes in Colombo",
    author: "N.Chandrasiri Niriella",
    university: "Javaharlal Neru University",
    degree: "PhD",
    year: 2006,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 4,
    title: "Level of Infornetiveness of Annual Reports and Corporate Governance:A study of Sri Lankan Quoted Public Companies",
    author: "D.S.N.P.Senaratne",
    university: "University of Colombo",
    degree: "PhD",
    year: 2007,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 5,
    title: "Causal Paradigms:A Philosophical Aalysis",
    author: "H.R.N.P.K.Handagama",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2008,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 6,
    title: "Das Vitasokavadana(Asokavadanamala 06) Einleitung kristische Edition des gesamten Textes und deutsche Ubersetzung der Strophen",
    author: "Nirosha Paranavitana",
    university: "Rheinische Friendrich-Wilhelms",
    degree: "PhD",
    year: 2008,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 7,
    title: "Decentralization, Democracy and Development:Demystification and Relevance with particular Reference to Sri Lankan Dilemma",
    author: "Thanabalasingam Krishnamohan",
    university: "University of Jaffna",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 8,
    title: "Contribution of Sri Lankan buddhist Literature for the Development of Ethic identity of Sinhalese",
    author: "R.G.D.Jayawardhana",
    university: "University of Peradeniya",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 9,
    title: "Spatioal and Temporal Distribution of Malaria in the Anuradhapura District in Sri Lanka with special emphasis on natural and human Environmental Factors",
    author: "Gnanalatha Edirisinghe",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 10,
    title: "Organizational Learning,Innovation and Performance in Family-Controlled Manufacturing Small and Medium-Sized Enterprises(SMEs) in Australia",
    author: "Pradeep Dharmasena",
    university: "Bond University",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 11,
    title: "Management of Tank irrigation with ground water use in Tamil Nadu",
    author: "Ananthini Nanthakumaran",
    university: "Tami Nadu Agricultural Universuty",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 12,
    title: "Messaenian identity in Pre-Liberation,MESSENA:A Historical Investigation",
    author: "K.M.R.Nethranjali",
    university: "National University of Ireland",
    degree: "MPhill",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 13,
    title: "Study of Theories and Pronciples of Museology",
    author: "K.M.Alexander",
    university: "College of Literature and Arts",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 14,
    title: "The Polictics of Language in Colonial Sri Lanka, 1900-1948",
    author: "Harison Sandsagomi Coperahewa",
    university: "University of Cambridge",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 15,
    title: "Inclusive Eduacation as a Strategy for Achiving the Educattion For All in Sri Lanka",
    author: "T.D.T.L.Dhanapala",
    university: "University of The Punjab lahore Pakistan",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 16,
    title: "Diverse Needs of Special Children:Analyzing the Classroom Discourse",
    author: "K.A.C.Alwis",
    university: "University of The Punjab lahore Pakistan",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 17,
    title: "Land use, Land Tenure and Agricultural Productivity in Sri Lanka: A Spatio-Temporal Analysis",
    author: "R.K.Lal Mervin Dharmasiri",
    university: "University of Pune",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 18,
    title: "T.M.D.Subhashini",
    author: "T.M.D.Subhashini",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 19,
    title: "Poverty and Coastal Resources Management",
    author: "H.M.Nawarathna Banda",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 20,
    title: "Thesis Written in Arabic Language",
    author: "Ameena Cassim",
    university: "International Islamic University Malaysia",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 21,
    title: "Sustainable Community Development: A case study of Community Participation in the AMDP Resettlement Scheme in System \"C\" Sri Lamka",
    author: "M.G.Manurathne",
    university: "University of New England",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 22,
    title: "Problems of Translating Bhuddhist Text in Pali with special Reference to Therigatha",
    author: "S.R.M.D.Darshani Gunathilake",
    university: "University of Hyderabad",
    degree: "PhD",
    year: 2009,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 23,
    title: "Development in the State Patronage of Traditional Medicine in Sri Lanka",
    author: "Rathnayaka Abeyrathna",
    university: "University college London",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 24,
    title: "A comparative reseach on the administrative system of the Mosques in Sri Lanka and South Indian- Tamil Nadu and their contrtibution towards Social Development",
    author: "Mohamed Thambi Mohamed Rizvi",
    university: "University of Peradeniya",
    degree: "MPhill",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 25,
    title: "Nalanda: Changing Patterns of a Buddhist Monastic Centre (circa 5th century C.E. to 13th century C.E.)",
    author: "Galkande Dhammananda",
    university: "Jawaharlal Nehru University",
    degree: "MPhill",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 26,
    title: "Economic and Social impact of the Migration of the Sri Lankan Transnational Domestic Workers on families and children left behind",
    author: "Swarnalatha Ukwatte",
    university: "The University of Adelaide",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 27,
    title: "Occupational Stress in Private Sector Banks of Sri Lanka: A Study with special reference to branch managers",
    author: "W.R.P.K. Fernando",
    university: "Bharathidasan University",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 28,
    title: "Budgeting, Accountability, and Consensual Spaces: The Case of Sri Lanka Railway",
    author: "A.A. Chandrasiri",
    university: "University of Manchester",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 29,
    title: "A Historical Analysis of Sino-Sri Lankan Cultural Relations (Primarily Focused on Buddhism, up to the 16th Century)",
    author: "Sobhitha",
    university: "Shandong University",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 30,
    title: "A Study of Ethnic Relation in a Border Village Area of Sri Lanka: A Case Study of Seruvila Division in the Trincomalee District",
    author: "E. M. Samantha Ekanayake",
    university: "University of Peradeniya",
    degree: "Mphill",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 31,
    title: "Essays on Irrigation Development, Farm Production, and Unaccounted Costs: Theory and Empirical Evidence",
    author: "P.P.A. Wasantha Athukorala",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 32,
    title: "A Clinico- Experimental Study on the Efficacy of Amalakayas Rasayana in the Management of Premature Ageing (Akalaja Jara)",
    author: "S.M.S. Samarakoon",
    university: "Gujarad Ayurved University",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 33,
    title: "Validation of Asset Proicing Models During Crisis and Non-Crisis Periods: A Comparative Analysis of Stock Markets in Sri Lanka and in the U.S.",
    author: "D.A.I. Dayaratne",
    university: "University of Colombo",
    degree: "PhD",
    year: 2010,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 34,
    title: "A clinical study on Senile Memory Impairment and it’s Management with Guduchyadi Mediya Rasayana",
    author: "R.D.Hemakanthi Kulathunga",
    university: "Gujarad Ayurved University",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 35,
    title: "Effects of leader charisna on follower depency in Sri Lankan firms",
    author: "J.A.S.K.Jayakody",
    university: "University of Sri Jayawardenepura",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 36,
    title: "Factors influencing organizational effectiveness in thwe Public Sector Organizations in Sri Lankan Context: A Sociological Analysis",
    author: "P.M.T.C.Wijesundara",
    university: "Wuhan University",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 37,
    title: "Determinants of Stock Returns in Colombo Stock Exchange",
    author: "Chandrapala Pathirawasam",
    university: "Tomas Bata University in Zlin",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 38,
    title: "The Potential of Mobile Phones to Support Science Teachers in Sri Lanka: A Focus on Pedagogy",
    author: "T.M.S.S.K.Y. Ekanayake",
    university: "University of Bristol",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 39,
    title: "Clausal Complementation in Sinhala",
    author: "M.G. Lalith Ananda",
    university: "Jawaharlal Nehru University",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 40,
    title: "Students’ Experience of Learning in Undergraduate Education in Sri Lanka",
    author: "S.D.K. Wijesundera",
    university: "University of Nottingham",
    degree: "PhD",
    year: 2011,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 41,
    title: "E-learning Systems Success in an Organisational Context",
    author: "S.M. Samarasinghe",
    university: "Massey University",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 42,
    title: "Enhancing and Characterising Paintings: A Computational Aesthetic Approach",
    author: "W.A.P. Wikramasinghe",
    university: "Univeristy of Colombo",
    degree: "MPhill",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 43,
    title: "Corporate Social Responsibility and Company Performance: Evidence from Sri Lanka",
    author: "K.K. Tilaksiri",
    university: "Victoria Univeristy",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 44,
    title: "Business Succession in Medium-Size Family Companies",
    author: "A.C. De Alwis",
    university: "Tomas Bata University in Zlin",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 45,
    title: "Origin and the Evolution of Sri Lankan Buddha Image Independent of the Indian Prototype",
    author: "P. Narangoda",
    university: "University of the West",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 46,
    title: "Macro Economic Impact of Fiscal Policy Changes in Sri Lanka, 1977-2005",
    author: "U.P.P. Serasinghe",
    university: "Jawaharlal Nehru University",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 47,
    title: "Outsourcing Success: Determining its Critical Managerial Factors in Services Industry",
    author: "Nilakshi W.K. Galahitiyawe",
    university: "University of Malaya",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 48,
    title: "Agricultural Biodiveristy, Farm level Technical Efficiency and Conservation Benefits: An Empirical Investigation",
    author: "K.M.R. Karunarathna",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 49,
    title: "Market Orientation and Business Performance of Medium and Large Scale Enterprises in Food and Beverage Industry",
    author: "S.M.A.K.. Samarakoon",
    university: "Tomas Bata University",
    degree: "PhD",
    year: 2012,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 50,
    title: "Premchand Aur Martin Wikramsingh Kee Kahaniyon Main Chittrit Samajik Yatharth (Social Reality Depicted in the Stories of Premchand and Martin Wikramasinghe) (Hindi thesis)",
    author: "R.K.D. Nilanti Hkumari Rajapakshe",
    university: "Mahatma Gandhi International Hindi University",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 51,
    title: "The Reform Movements in India and Sri Lanka: A Comparative Study",
    author: "M.A.S.R. Sanjeevi Manthrirathne",
    university: "Univeristy of Kashmir",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 52,
    title: "Evolution of Sound Recording Techniques and their Impact on the Growth of Music in Sri Lanka",
    author: "M.A.G.M.S.B. Alawathukotuwa",
    university: "University of Delhi",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 53,
    title: "The impact of the Psychotherapy Practices described in the Atharva Veda on the lives of Sri Lankan people",
    author: "Ashoka Gunasekara",
    university: "Univeristy of Kelaniya",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 54,
    title: "Re-contexualization of the Paradigm Shift in the Post-Globalized Cinema in Sri Lanka: A Study of Cinema of Prasanna Vithanage and Asoka Handagama",
    author: "S.S.A. Senavirathne",
    university: "University of Peradeniya",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 55,
    title: "Maritime Cultural Interaction Between Sri Lanka and China-based on Archaeological Artifacts of both countries",
    author: "G. Ranasinghe",
    university: "Xiamen Univeristy",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 56,
    title: "Environmental and Socio-Economic Changes due to Renovation of Small Tanks in the Dry Zone of Sri Lanka (A Case Study in Galgamuwa Division of the Kurunegala District)",
    author: "K.P.L. Nishantha",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 57,
    title: "Consumer Ethnocentrism as a Strategic Tool for Developing Domestic Brand Equity in Developing Countries",
    author: "W.M.C.B. Wanninayake",
    university: "Tomas Bata University in Zlin",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 58,
    title: "The Role of Small and Medium Enterprises (Industrial Sector) In Changing Poverty Status in Sri Lanka",
    author: "S. Vijayakumar",
    university: "Tomas Bata University in Zlin",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 59,
    title: "A Proposal for the Protection of Digital Databases in Sri Lanka (Computer Law)",
    author: "T.B. Abeysekara",
    university: "University of Exeter",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 60,
    title: "The Need to Design Secondary Education for the Development of Vocationally Oriented Skills Required for the World of Work",
    author: "W.M.S. Wanasinghe",
    university: "Open University of Sri Lanka",
    degree: "MPhill",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 61,
    title: "Monetary Transactions in Ancient Sri Lanka",
    author: "V.D.N.S. Gunawardana",
    university: "Pondicherry University",
    degree: "PhD",
    year: 2013,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 62,
    title: "Post-Independence Sri Lankan Women’s Writings in English: A Study",
    author: "N.Harischandra",
    university: "Jawaharlal Nehru University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 63,
    title: "Accounting Practices: The Change I See",
    author: "P.A.G. Gunatilake",
    university: "University of Canterbury",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 64,
    title: "Regional Food chain System for Sustianable Purveyance, Agricultural Production and Local resources utilization in Sri Lanka",
    author: "R.P.I.R. Prasanna",
    university: "Kagoshima University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 65,
    title: "Glycemic Control Behaviors among Adults with Type II Diabetes Mellitus: Sociocultural Context in Sri Lanka",
    author: "A.A.P.T.D. Amarasekara",
    university: "Chaing Mai University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 66,
    title: "A Contrastive Study of Sinhala and Marathi",
    author: "K.A. Thero",
    university: "Deemed University Pune",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 67,
    title: "Politics of Tamil Fiction: A Critical Study of Class Contradiction and Ethnic Conflict Constructed in the Up-Country Tamil Novels",
    author: "S.Y. Sirithar",
    university: "Univeristy of Peradeniya",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 68,
    title: "Oral English Assessment Washback on Management Undergraduates in Sri Lankan State Universities and their Employability: The Case of the University of Sri Jayewardenepura",
    author: "L. Wijewardene",
    university: "Management and Science University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 69,
    title: "Comparison of Hypoglycaemic, Hepatoprotective and Anti-inflamatory activities of Natural Plant and Callus Cultures of Munronia pinnata",
    author: "S.D. Hapuarachchi",
    university: "University of Sri Jayewardenepura",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 70,
    title: "Communication skills of university students in Sri Lanka and their relationship to employment opportunities",
    author: "W.M.Herath",
    university: "University of Kelaniya",
    degree: "MPhill",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 71,
    title: "Employee-Organization congruence and job performance in the Sri Lankan Apparel Industry",
    author: "G.D.N.Perera",
    university: "Management and Science University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 72,
    title: "The impacts of Management Control and the Financial Performance of the Manufacturing Companies in Sri Lanka",
    author: "A.H.M.Kariyawasam",
    university: "Management and Science University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 73,
    title: "Evaluating Geography Teachers’ concerns towards the 5E instructional model in the competency based currriculum reforms of Sri Lanka",
    author: "F.M.Nawastheen",
    university: "Universiti Kebangsaan Malaysisa",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 74,
    title: "The sinhalese lyrical Place in the Context of Theatre choreography in Contemporary in Sri Lanka",
    author: "K.K.Sunethra",
    university: "Jawaharlal Nehru University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 75,
    title: "Facilitating the development of English Language Skills among the online Learners at the university Level: A psycholinguistic Approach",
    author: "S.Ravindran",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 76,
    title: "Critical study of traditional dances of bharat and Kathak Dance",
    author: "H. Anjali Mishra",
    university: "Banaras Hindu University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 77,
    title: "Impacts of the eroison of collective Right zone Developing Nations: A Critical study of the interlectual Property Rights Regime post-TRIPs, with Special focus on Sri Lanka",
    author: "N. Kamardeen",
    university: "University of Colombo",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 78,
    title: "Contribution of tourism to sustainable Rural Development in Sri Lanka",
    author: "M.S.M. Aslam",
    university: "Universiti Putra",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 79,
    title: "A comparative study on factors that getting postgraduate students to perceive E-Learning acceptanace in Sri Lanka and Malaysia",
    author: "M.R.K.N. Yatigammana",
    university: "Management and Science University",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 80,
    title: "Silence in Sri Lankan Cinema From 1990-2010",
    author: "S.L.P. Fonseka",
    university: "Univesity of sydney",
    degree: "MPhill",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 81,
    title: "A study of multicultural practices in Sri Lankan Secondry Schools and an English Comparator School",
    author: "L.N.P. Wedikandage",
    university: "University of Bedfordshire",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 82,
    title: "Applicability of childrens’ Conception of 'Conservation' and 'Space' Presented in Piaget’s Cognitive Development Theory, Sri Lanka, In Sri Lankan Children (A Study related to children bertween the Ages 5 to 10 Years)",
    author: "T.Mukunthan",
    university: "University of Colombo",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 83,
    title: "Moonlighting: An Economic Analysis of Secondry Job Holding in Sri Lanka",
    author: "G.R.S.R.C.Samaraweera",
    university: "University of Colombo",
    degree: "PhD",
    year: 2014,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 84,
    title: "A study of Skin Diseases: Ksudra Kustcha Depicted in Sanskrit Original Sources with Special Reference to Vipadika and its Management",
    author: "H.G.S.P.Hewageegana",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 85,
    title: "A critical study on Pramecha (Urine abnomalities) with Special Reference to Albuminuria and its Management with Candraprabha vati",
    author: "K.R.Weerasekara",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 86,
    title: "Manawa mukthi and Hindi Bhakthi Sahithya",
    author: "E.G.W.P.Gunasena",
    university: "Allahabad University",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 87,
    title: "The study of language planning by linguistic design of author Sidathsangara",
    author: "S.D.A. Indika",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 88,
    title: "The Sinhalese Perspective of Old Age",
    author: "W.M.J. Welgama",
    university: "University of Peradeniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 89,
    title: "The Convergence of Advertising and Folklore: A Lacanian Study",
    author: "D.P.P.G. Liyanage",
    university: "Tezpur University",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 90,
    title: "Communication skills in English of Tourism Professionals: A Case Study of Sri Lanka",
    author: "S. Rajadurai",
    university: "Kakatiya University",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 91,
    title: "An Analysis of the Processes of Conflict and Reconciliation in the Works of George Keyt",
    author: "W.M.P.S.Bandara",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 92,
    title: "Geo-spatial model of household inhabitants’ behavior on conversion of low-lying areas in sub-urban Colombo metropolitan region, Sri Lanka",
    author: "G.P.T.S. Hemakumara",
    university: "Universiti Sains Malaysia",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 93,
    title: "Essays on Urban Poverty and Micro Entrepreneurship in Sri Lanka",
    author: "B.W.R. Damayanthi",
    university: "Universiti Brunei Darussalam",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 94,
    title: "Musical Traces of Hindustani Culture in Malay Ghazal",
    author: "M.L.C.P. Meddegoda",
    university: "Universiti Putra Malaysia",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 95,
    title: "Analytical study of Sri Lankan Paintings based on Modernism and Postmodernism",
    author: "Sundarampillai Sivaretnam",
    university: "Madurai Kamaraj University",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 96,
    title: "Upward Socioeconomic Mobility of the Rodi Caste Community in Sri Lanka: A Sociological Study",
    author: "Sen Lec. T.M. Wijekoon Banda",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 97,
    title: "Ethical Relativism and Ethical Absolutism: A Conceptual Analysis",
    author: "R.A.N. Fernando",
    university: "Friedrich-Alexander University",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 98,
    title: "A Study About Alternative Access detection to the Sri Lankan Proscenium Stage",
    author: "Tumindu Dodanthanna",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 99,
    title: "Efficacy of the Intervention of Natural Food Additives and Mind Calming Exercises in the Management of Female Obesity with Special Reference to Unani Food Guidelines",
    author: "Mustapha Inul Manuha",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 100,
    title: "Harmonic Progressions of Hindi Film Songs based on North Indian Ragas",
    author: "W.K.R.R. Dias",
    university: "Universiti Putra Malaysia",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 101,
    title: "Effects of Heenamadurutala and selected Yogic practices on the Management of Madumeha (Diabetes Mellitus)",
    author: "H.R.D. Fonseka",
    university: "University of Colombo",
    degree: "PhD",
    year: 2015,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 102,
    title: "Fundamental and Behavioural Determinants of Stock Returns: With Special Reference to Sri Lanka",
    author: "L.M.C.S. Menike",
    university: "University of Colombo",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 103,
    title: "Principles of Land during British period in Sri Lanka",
    author: "J.K.A. Kanthi",
    university: "University of Ruhuna",
    degree: "MPhill",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 104,
    title: "Influencing Variables of Occupational Stress among Executives in the Bank of Ceylon- Sri Lanka",
    author: "T.Prabaharan",
    university: "Annamalai University",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 105,
    title: "Taxonomy and Pharmacognostic Properties of Albizia Lebekand Substitute Plants in Sri Lanka",
    author: "A.P.A. Jayasiri",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 106,
    title: "The Hydro-ecological Impact of Agro-well Development in Tank Cascades of the North Central Dry Zone of Sri Lanka",
    author: "M.M.P. Perera",
    university: "University of Peradeniya",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 107,
    title: "An Ethnographic Study of the Applied Numerals in Sinhala",
    author: "Sandhya Kahandagamage",
    university: "University of Colombo",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 108,
    title: "\"Minority Rights in the Third World Democracy\" A Study with Special Reference to Upcountry Tamils in Sri Lanka.",
    author: "R.A.W. Ranasinghe",
    university: "University of Peradeniya",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 109,
    title: "Compliance Behavior of Income Taxpayers and Related Tax issues in Non-corporate sector in Sri Lanka",
    author: "Mohamed Burhan Mohamed Amjath",
    university: "Annamalai University",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 110,
    title: "A Structural Study of the Verb in Classical Sinhalese",
    author: "Rev. Morakandegoda Ariyawansa",
    university: "Deccan College Postgraduate and Research Institute",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 111,
    title: "The Role of Management Accounting in Responding to Environmental Management Issues in Listed Companies: A Survey in the Sri Lankan Context",
    author: "I.M. Withanawasam",
    university: "Victoria Univeristy",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 112,
    title: "Measuring the impact of factors affecting job satisfaction with the moderating effect of demographic factors among academic faculty members of public universities in Sri Lanka",
    author: "T.S.M. Amarasena",
    university: "Management and Science University",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 113,
    title: "The impact of strategic planning on mission achievement in Sri Lankan Non-government organizations: An Evaluation using the balanced score card",
    author: "W.M.R.B. Weerasooriya",
    university: "Management and Science University",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 114,
    title: "Evaluation of Diabetes Management Educational (DSME) Intervantions for Patient with Type 2 Diabetes to develop a new patient education protocol",
    author: "W.N. Priyanthi",
    university: "University of Colombo",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 115,
    title: "Food Price Dynamics and Inflation in Sri Lanka",
    author: "S. Sivarajasingham",
    university: "Universiti Utara Malaysia",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 116,
    title: "A study of Factors Influencing and Contributing towards the Sports Volunteers’ Satisfaction",
    author: "W.M.R.K. Weerakoon",
    university: "Northumbria University",
    degree: "MSc",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 117,
    title: "A Study on the spatial pattern of megalithic tombs in the middle reaches of the Yan River in Sri Lanka",
    author: "K.A.D.M.S. Gunathilake",
    university: "Sichuan University",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 118,
    title: "Evaluation of the Strategic Goals in the Sri Lankan Sports Policy Framework",
    author: "W.M.A.M. Jayawardhana",
    university: "Northumbria University",
    degree: "MSc",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 119,
    title: "Use of E-Resources by Faculty Members and Students of Selected University Libraries in Sri Lanka : A Study",
    author: "K.M. Rani K. Kulatunga",
    university: "University of Delhi",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 120,
    title: "Impact of the Tsunami in 2004 on land forms and ecosystems in the South West coast of Sri Lanka",
    author: "S.Wijeratne",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 121,
    title: "Organization and Transmission of Ayurvedic and Indigenous Medical knowledge in Sri Lanka",
    author: "C.K. Gamage",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2016,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 122,
    title: "Climate Change and Natural Disaster Risks: Case Studies in Hambantota, Ratnapura and Nuwara Eliya Districts in Sri Lanka",
    author: "P.H. Amaraweera",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 123,
    title: "Shewhart Methodology for Modelling Financial Series",
    author: "L.P.N.D. Premarathna",
    university: "Massey University",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 124,
    title: "A Spatial Analysis of Active Ageing in Sri Lanka",
    author: "R.A.S.P. Ranabahu",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 125,
    title: "Role of Ayurvedic Medical System in the Context of Emerging Health Hazards in Contemporary Sri Lankan Society",
    author: "P.R. Ekanayake",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 126,
    title: "A Socio-Historical Inquiry into the Origin and Evolution of Natha Devala Worship (From main Nath Devala in Manuvara District)",
    author: "T.G.A. Talvatta",
    university: "University of Kelaniya",
    degree: "MPhill",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 127,
    title: "From Giving up to Giving: An Ethical Study of the Evolution of the Theravada theory and Practice of Dana",
    author: "W. Kusaladhamma",
    university: "University of the West",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 128,
    title: "Development Administartion in Sri Lanka: Minorities’ Demand for Kalmunai Administrative District",
    author: "A. Sarjoon",
    university: "Univerisiti Kebangsaan Malaysia",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 129,
    title: "Adoption and Implementation of Corporate Sustainability Strategy: Evidence from a Mixed Method Study",
    author: "M.S.B.M. Mihilar",
    university: "Curtin University",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 130,
    title: "Economic History in Medieval Sri Lanka (From 1232 A.D. to 1467 A.D.)",
    author: "J.M. Sudharmawathie",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 131,
    title: "Washback Effects of Speaking Assessment of Teaching English in Sri Lankan Schools",
    author: "S. Umashankar",
    university: "University of Bedfordshire",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 132,
    title: "Spatio-Temporal Urban Growth Patterns in the Colombo Urban Fringe, Sri Lanka",
    author: "K.G.P.K. Weerakoon",
    university: "Universiti Sains Malaysia",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 133,
    title: "A Study of the Traditional Pasan Singing Style associated with the Chatarika Period",
    author: "M.I.S.De Silva Weerakody",
    university: "University of Sri Jayawardenepura",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 134,
    title: "The Rise of Social Enterprises in Low-trust Situations",
    author: "Sivagnanam Mahesgwaran",
    university: "Norwegian University",
    degree: "PhD",
    year: 2017,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 135,
    title: "Integrated Reporting in Sri Lankan PLCs",
    author: "A.M.I.Lakshan",
    university: "University of Waikato",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 136,
    title: "Colonial Choreography: Staging Sri Lankan Dancers Under British Colonial Rule from the 1870s-1930s",
    author: "S.B.M.M.Arachchilage",
    university: "University of Maryland",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 137,
    title: "Women Labor Migration in Sri Lanka: A Study of Policy Implementation",
    author: "K.D.D. Silva",
    university: "Tribhuvan University",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 138,
    title: "From Laborer to Citizen: Problems and Challenges encountered by the Plantation people in Accessing Public Services in Sri Lanka",
    author: "R.Ramasamy",
    university: "Tribhuvan University",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 139,
    title: "Understanding the Role of Career Self Management Behaviors in Predicting Career Satisfaction and Employee Commitment: An Empirical Study of Commercial banks in Sri Lanka",
    author: "R. Wikramarathne",
    university: "Murdoch University",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 140,
    title: "Market Reponse to Publicly Available Information and Capital Market Efficiency: Evidence from Colombo Stock Exchange",
    author: "D.G. Dharmarathne",
    university: "University of Colombo",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 141,
    title: "Integration of Strategy and Corporate Social Responsibility for Value Creation: Case Studies of Local Companies in Sri Lanka",
    author: "B.A.N. Eranda",
    university: "University of Colombo",
    degree: "MPhill",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 142,
    title: "Inequalities at Work: An Investigation of the Garment Industry in Sri Lanka",
    author: "P.D.H.D. Gunatilaka",
    university: "University of Warwick",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 143,
    title: "Paschath Yatathvichithavathi Samaja Pravanatha Nirupitha Stree Karthruka Navakatha (Thoragath Navakatha Ashritha Vimarshanayak)",
    author: "K.A.J.P.K. Madhawatha",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 144,
    title: "Readiness Framework for E-learning Implementation: A Study of the Perception of the Lecturers in the Higher Educational Institutions in Sri Lanka",
    author: "M.H. Thowfeek",
    university: "Universiti Kebangsaan Malaysia",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 145,
    title: "Migration and Selfhood in the Select Fiction of Michael Ondaatje",
    author: "K. Shrikarunaakaran",
    university: "The English and Foreign Languages University",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 146,
    title: "A Critical Review of Manasa Roga in Ayurveda Sanskrit Texts and an Observational Study of Sarasvatha Choorna in the Management of Dementia (Smirithibamsha)",
    author: "T.D.N. Karunarathna",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 147,
    title: "State-Minority Contestations in Post-colonial Sri Lanka",
    author: "M.M. Fazil",
    university: "University of Malaya",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 148,
    title: "Uva Palathe Len Vihara Chithra Pilibandha Puravidyathmaka saha Sansruthika Adyanayak",
    author: "T.A.C.J.S. Bandara",
    university: "University of Colombo",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 149,
    title: "Early Adolescents’ motivation and engagement in learning and impact of the school-related conditions in low socio-economic districts in Sri Lanka: A mixed methods Study",
    author: "K.D.R.L.J. Perera",
    university: "University of New England",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 150,
    title: "Green Bonds: Do they Bring Sustainability to Environmentally Friendly Projects?",
    author: "K.G.M. Nanayakkara",
    university: "Federation University Australia",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 151,
    title: "An annotated English translation of vrttaratnakara with a critical introduction",
    author: "Rev. Mawatagama Pemananda",
    university: "Deccan College Postgraduate and Research Institute",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 152,
    title: "Population Dynamics and its Impact on the Degradation of Coastal Resources: A case of Southern Coastal Zone of Sri Lanka",
    author: "W.K.V. Dayalatha",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2018,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 153,
    title: "Positive Polarity and Exhausitivity in Sinhala: A Study of its Implications for Grammar",
    author: "W.A.T. Weerasooriya",
    university: "University of Ottawa",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 154,
    title: "The Role of Small and Medium Scale Enterprises in Reduction of Rural Poverty in Southern Sri Lanka",
    author: "H.K. Sarath",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 155,
    title: "Management Controls from an Institutional Logics Perspective: Case Study Evidence from an Apparel Group in Sri Lanka",
    author: "D.G.S. Damayanthi",
    university: "University of Sri Jayawardenepura",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 156,
    title: "Crime and the Control of Crime: An Ethical Analysis from a Theravada Buddhist Point of View",
    author: "Sarananda Thero Elamaladeniye",
    university: "University of the West",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 157,
    title: "Amawathure saha Buthsarane Vakya Vinyasaya Pilibandha Thulanathmaka Adyayanayak",
    author: "M.G.N. Dayananda",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 158,
    title: "Pharmaco-Therapeutic and Physico Chemical Evaluation of Ayapirungarajakarpam- A Poly herbo-metallic drug for Paandu-Anemia",
    author: "N. Varnakulendran",
    university: "Tamil University",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 159,
    title: "Kelani Ganga Nimnaye Janavasa Puravidyava Pilibandha Adyayanayak",
    author: "H.P.S. Hathurusingha",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 160,
    title: "The Society and Women as Portrayed in the Literary Works of Major Post-Colonial Hindi Women Novelists in Hindi Literature",
    author: "A.N. Salwathura",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 161,
    title: "Teacher Engagement and Professional Development Initiatives: A Case Study of University ESL teachers in Sri Lanka",
    author: "K.R.W.K.H. Abeywikrama",
    university: "Deakin University",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 162,
    title: "Toxicity, Fertility and Immunomodulatory effects of Polyherbal Formula- Pala Kalyana Ghrita in rat models",
    author: "K.C. Perera",
    university: "University of Colombo",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 163,
    title: "Foreign Investment and Sustainable Development: A Critical Analysis from the Sri Lankan Legal Perspective",
    author: "F.S.D.l.M. Razik",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 164,
    title: "Essays on Agricultural Commodity Markets",
    author: "D. Perera",
    university: "University of Canterbury",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 165,
    title: "When Traditions Meet Consumer Culture: An Interpretive Perspective of Cultural Tension of Consumers in Sri Lanka",
    author: "M.R. Chandrasekara",
    university: "University of Sri Jayawardenepura",
    degree: "PhD",
    year: 2019,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 166,
    title: "Hypoglycaemic, Hypolipidaemic and Antioxidant Activities of the Siddha Medicinal Preparation Mathumeha Chooranam in Patients with Type II Diabetes Mellitus",
    author: "T. Kumutharanjan",
    university: "University of Jaffna",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 167,
    title: "Integrated Reporting in Sri Lanka: An Exploratory Study",
    author: "N.K. Jayasiri",
    university: "University of Otago",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 168,
    title: "Assessing the Sustainability of Agriculture using Geospatial Techniques: A Case Study of Kotmale Catchment Area, Sri Lanka",
    author: "D.M.S.L.B. Dissanayake",
    university: "University of Tsukuba",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 169,
    title: "The Spatio-temporal Dynamics of Socio-economic Networks and Social Vulnerability Assessment for a Natural Disaster- A Case Study of Floods in Sri Lanka",
    author: "Y.A. Karunarathne",
    university: "Seoul National University",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 170,
    title: "Undergraduates’ Academic Literacy in English in Sri Lankan Higher Education: A Multi-level Descriptive Analysis based on Three State Universities",
    author: "M.D.N.M.U. Mahawattha",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 171,
    title: "Managing the Integration Challenge between Corporate Environmental Strategy and Environmental Management Accounting: Perspectives from Sri Lanka",
    author: "A.D.N. Gunarathne",
    university: "Griffith University",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 172,
    title: "Impact of War (1983-2009) on Jaffna Tamil: English, Sinhala and some Indian Languages",
    author: "Mrs. Sri Ranjini Anandakumarasamy",
    university: "University of Kelaniya",
    degree: "Mphil",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 173,
    title: "Corpus Planning: Curriculum Development in Teaching English as a Second Language in Core English Language Programme (Study based on Department of English Language Teaching at Sabaragamuwa University)",
    author: "B.M.L.R.K. Basnayake",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 174,
    title: "A study of employment among Arts gratuates in Sri Lanka with model-assisted approaches using complex survey data",
    author: "I.T. Jayamanne",
    university: "University of Colombo",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 175,
    title: "Information accountability in Health Information Systems using Process Analytics",
    author: "D.W.C.P. Kumari",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 176,
    title: "Exploring the Role of Customer Heterogeneity in Innovation-based Competitive Strategy: A Dynamic Capabilities Perspective",
    author: "W.M.A.K. Wijekoon",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 177,
    title: "Determinants And Consequences of Employee Networking Behaviours",
    author: "W.M.S.K. Wanigasekara",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 178,
    title: "Dilemmas of Justice in Reconcilation: An Analysis of Peacebuilding in Sri Lanka",
    author: "M.R. Wakkumbura",
    university: "Univesity of Colombo",
    degree: "PhD",
    year: 2020,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 179,
    title: "Entrepreneurial Action: Community and Buddhism Contexts in Sri Lanka",
    author: "S. Dissanayake",
    university: "The University of Waikato",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 180,
    title: "Where to Belong and Why? Sri Lankan immigrants’ perception of Australian, New Zeland and Sri Lankan citizenship",
    author: "K.P.P.U. Jayawardena",
    university: "Victoria Univeristy of Wellington",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 181,
    title: "Rearticulating knowledge Management: An alternative perspective informed by the Buddhidt Epistemology",
    author: "Y. Alahakoon",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 182,
    title: "The effect of Task-Based language Teaching on Sri Lankan Undergratuates’ speaking skills",
    author: "A.B. Ithayaraj",
    university: "University Sains Malaysia",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 183,
    title: "Culture, Individuality, and the state of being Successful or Unsuccessful (A study on charactors labled as 'Failed/ Defeated/ Inactive' in Sinhala Novel)",
    author: "R. M. M. Rathnayake",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 184,
    title: "Towards Global Policy Coherence for Tobacco Plain Packaging: Examining the Challenges for Low- and Middle- Income Countries",
    author: "S.S. Wijesinghe",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 185,
    title: "Simultaneous Determination of major financial decisions in the presence of corporate governance factors",
    author: "M.C.A. Nazar",
    university: "University Kebangsaan Malaysia",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 186,
    title: "Fiction as Historical Witness: Resistance in Sinhala and English fiction in Post-War Sri Lanka 2009-2019",
    author: "M.M.K. Ratnayake",
    university: "Hitotsubashi University",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 187,
    title: "Doctor of medicine postgraduate medical trainees’ information seeking behavior in an electronic information resource environment",
    author: "T. Sritharan",
    university: "University of Colombo",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 188,
    title: "Human Resource Management and Organisational Performance: Evidence from an Emerging Economy",
    author: "C.B. Jayasinghe",
    university: "University of Surrey",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 189,
    title: "Enhancing Information Retrieval skills among visually impaired undergraduates in the Sri Lankan university libraries",
    author: "W.J. Jeyaraj",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2021,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 190,
    title: "Managing partner relational and performance risks in public private partnerships (PPPs): Leveraging social capital and management control systems",
    author: "C.L. Senarath",
    university: "RMIT University",
    degree: "PhD",
    year: 2022,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 191,
    title: "Agricultural efficiency analysis: Evidence from the Sri Lankan Tea industry",
    author: "H.N. De Silva",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2022,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 192,
    title: "Representation of identity in sinhala theatre: The impact of the Religious/ Charity model",
    author: "W.N.D.N. Wijesiri",
    university: "Queensland University of Technology",
    degree: "PhD",
    year: 2022,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 193,
    title: "A conceptual framework for information literacy education in the Sri Lankan universities: A Delphi Study",
    author: "R.P.P. Ranaweera",
    university: "University of Kelaniya",
    degree: "PhD",
    year: 2022,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 194,
    title: "Small-Scale Entrepreneurs in the Tourism industry: A gender analysis in Sri Lanka",
    author: "H.S. Kumara",
    university: "Asian Institute of Technology",
    degree: "PhD",
    year: 2022,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 195,
    title: "The Sino-India Rivalry over Energy Sources in the Indian Ocean: The Chinese Response",
    author: "H.A.A. Nishantha",
    university: "University of Ruhuna",
    degree: "PhD",
    year: 2023,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 196,
    title: "Accessibility of Nirvana: The Language and Media of Sri Lankan Buddhist Televangelists and Their Followers",
    author: "K.G.K. Fedricks",
    university: "The University of Texas at Austin",
    degree: "PhD",
    year: 2023,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 197,
    title: "Investigating the implementation of the 2007 national solid waste management policy in Sri Lanka",
    author: "K.N.D. Mahamadachchi",
    university: "Flinders University",
    degree: "PhD",
    year: 2023,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 198,
    title: "Rural Young Men (18-24), Facebook, and Same-Sex Sexual Relationship in Sri Lanka",
    author: "W.W.M.P.K. Jinadasa",
    university: "Newcastle University",
    degree: "PhD",
    year: 2024,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 199,
    title: "First Language Acquisition of Sinhala: Phonetic, Lexical, and Syntactic Development Up to the 4th Year",
    author: "L.S. Karunarathna",
    university: "University of Colombo",
    degree: "PhD",
    year: 2024,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  },
  {
    id: 200,
    title: "An Ascribed Misery of Web Bed Viginity Test: A case Study Among Sri Lankan Muslim Women",
    author: "Abdul Wadood Noor Naleefa",
    university: "Universiti Kebangsaan Malaysia",
    degree: "PhD",
    year: 2024,
    supervisor: "",
    abstract: "",
    keywords: [],
    downloads: 0
  }
]

export default function ThesisDissertationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">NCAS Grantees' Thesis & Dissertations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access a comprehensive collection of theses and dissertations completed by NCAS-funded researchers.
            These works represent cutting-edge research in humanities and social sciences.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by title, author..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Degree" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phd">PhD</SelectItem>
                <SelectItem value="mphil">MPhil</SelectItem>
                <SelectItem value="masters">Masters</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="University" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="colombo">University of Colombo</SelectItem>
                <SelectItem value="peradeniya">University of Peradeniya</SelectItem>
                <SelectItem value="ruhuna">University of Ruhuna</SelectItem>
                <SelectItem value="kelaniya">University of Kelaniya</SelectItem>
                <SelectItem value="jayewardenepura">University of Sri Jayewardenepura</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Works</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{thesisDissertations.length}</div>
              <p className="text-xs text-muted-foreground">Theses & dissertations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PhD Dissertations</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {thesisDissertations.filter(t => t.degree === 'PhD').length}
              </div>
              <p className="text-xs text-muted-foreground">Doctoral research</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Universities</CardTitle>
              <User className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(thesisDissertations.map(t => t.university)).size}
              </div>
              <p className="text-xs text-muted-foreground">Institutions represented</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {thesisDissertations.reduce((sum, t) => sum + t.downloads, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Total downloads</p>
            </CardContent>
          </Card>
        </div>

        {/* Thesis/Dissertation List */}
        <div className="space-y-6">
          {thesisDissertations.map((work) => (
            <Card key={work.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{work.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">{work.degree}</Badge>
                      <Badge variant="outline">{work.year}</Badge>
                      <Badge variant="outline">{work.university}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Author:</span> {work.author} |
                      <span className="font-medium"> Supervisor:</span> {work.supervisor}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Download className="h-4 w-4 mr-1" />
                      {work.downloads} downloads
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/library/thesis-dissertations/${work.id}`}>
                        <Download className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Abstract</h4>
                  <p className="text-muted-foreground text-sm">{work.abstract}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium">Keywords:</span>
                  {work.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Access Information */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Access Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">How to Access</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Register with NCAS digital repository</li>
                <li>• Search by author, title, or keywords</li>
                <li>• Download full-text versions</li>
                <li>• Cite properly in your research</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Usage Guidelines</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Academic and research purposes only</li>
                <li>• Proper citation required</li>
                <li>• No commercial redistribution</li>
                <li>• Contact authors for permissions</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button size="lg" disabled>
              <BookOpen className="h-4 w-4 mr-2" />
              Full Repository Available Locally
            </Button>
          </div>
        </div>
      </main>
      </div>
  )
}