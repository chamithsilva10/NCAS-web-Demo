import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Globe } from "lucide-react"

export default function ThesisDissertationsPage() {
  const theses = [
    { year: "2024", title: "Rural Young Men (18-24), Facebook, and Same-Sex Sexual Relationship in Sri Lanka", author: "W.W.M.P.K. Jinadasa", university: "Newcastle University", degree: "PhD" },
    { year: "2024", title: "First Language Acquisition of Sinhala: Phonetic, Lexical, and Syntactic Development Up to the 4th Year", author: "L.S. Karunarathna", university: "University of Colombo", degree: "PhD" },
    { year: "2024", title: "An Ascribed Misery of Web Bed Virginity Test: A case Study Among Sri Lankan Muslim Women", author: "Abdul Wadood Noor Naleefa", university: "Universiti Kebangsaan Malaysia", degree: "PhD" },
    { year: "2023", title: "The Sino-India Rivalry over Energy Sources in the Indian Ocean: The Chinese Response", author: "H.A.A. Nishantha", university: "University of Ruhuna", degree: "PhD" },
    { year: "2023", title: "Accessibility of Nirvana: The Language and Media of Sri Lankan Buddhist Televangelists and Their Followers", author: "K.G.K. Fedricks", university: "The University of Texas at Austin", degree: "PhD" },
    { year: "2023", title: "Investigating the implementation of the 2007 national solid waste management policy in Sri Lanka", author: "K.N.D. Mahamadachchi", university: "Flinders University", degree: "PhD" },
    { year: "2022", title: "Managing partner relational and performance risks in public private partnerships (PPPs)", author: "C.L. Senarath", university: "RMIT University", degree: "PhD" },
    { year: "2022", title: "Agricultural efficiency analysis: Evidence from the Sri Lankan Tea industry", author: "H.N. De Silva", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2022", title: "Representation of identity in sinhala theatre: The impact of the Religious/ Charity model", author: "W.N.D.N. Wijesiri", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2022", title: "A conceptual framework for information literacy education in the Sri Lankan universities", author: "R.P.P. Ranaweera", university: "University of Kelaniya", degree: "PhD" },
    { year: "2022", title: "Small-Scale Entrepreneurs in the Tourism industry: A gender analysis in Sri Lanka", author: "H.S. Kumara", university: "Asian Institute of Technology", degree: "PhD" },
    { year: "2021", title: "Entrepreneurial Action: Community and Buddhism Contexts in Sri Lanka", author: "S. Dissanayake", university: "The University of Waikato", degree: "PhD" },
    { year: "2021", title: "Where to Belong and Why? Sri Lankan immigrants' perception of citizenship", author: "K.P.P.U. Jayawardena", university: "Victoria University of Wellington", degree: "PhD" },
    { year: "2021", title: "Rearticulating knowledge Management: An alternative perspective informed by Buddhist Epistemology", author: "Y. Alahakoon", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2021", title: "The effect of Task-Based language Teaching on Sri Lankan Undergraduates' speaking skills", author: "A.B. Ithayaraj", university: "University Sains Malaysia", degree: "PhD" },
    { year: "2021", title: "Culture, Individuality, and the state of being Successful or Unsuccessful in Sinhala Novel", author: "R. M. M. Rathnayake", university: "University of Kelaniya", degree: "PhD" },
    { year: "2021", title: "Towards Global Policy Coherence for Tobacco Plain Packaging", author: "S.S. Wijesinghe", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2021", title: "Simultaneous Determination of major financial decisions with corporate governance factors", author: "M.C.A. Nazar", university: "University Kebangsaan Malaysia", degree: "PhD" },
    { year: "2021", title: "Fiction as Historical Witness: Resistance in Sinhala and English fiction in Post-War Sri Lanka", author: "M.M.K. Ratnayake", university: "Hitotsubashi University", degree: "PhD" },
    { year: "2021", title: "Doctor of medicine postgraduate medical trainees' information seeking behavior", author: "T. Sritharan", university: "University of Colombo", degree: "PhD" },
    { year: "2021", title: "Human Resource Management and Organisational Performance: Evidence from an Emerging Economy", author: "C.B. Jayasinghe", university: "University of Surrey", degree: "PhD" },
    { year: "2021", title: "Enhancing Information Retrieval skills among visually impaired undergraduates", author: "W.J. Jeyaraj", university: "University of Kelaniya", degree: "PhD" },
    { year: "2020", title: "Hypoglycaemic, Hypolipidaemic and Antioxidant Activities of Siddha Medicinal Preparation", author: "T. Kumutharanjan", university: "University of Jaffna", degree: "PhD" },
    { year: "2020", title: "Integrated Reporting in Sri Lanka: An Exploratory Study", author: "N.K. Jayasiri", university: "University of Otago", degree: "PhD" },
    { year: "2020", title: "Assessing the Sustainability of Agriculture using Geospatial Techniques in Sri Lanka", author: "D.M.S.L.B. Dissanayake", university: "University of Tsukuba", degree: "PhD" },
    { year: "2020", title: "The Spatio-temporal Dynamics of Socio-economic Networks and Social Vulnerability Assessment", author: "Y.A. Karunarathne", university: "Seoul National University", degree: "PhD" },
    { year: "2020", title: "Undergraduates' Academic Literacy in English in Sri Lankan Higher Education", author: "M.D.N.M.U. Mahawattha", university: "University of Kelaniya", degree: "PhD" },
    { year: "2020", title: "Managing the Integration Challenge between Corporate Environmental Strategy and EMA", author: "A.D.N. Gunarathne", university: "Griffith University", degree: "PhD" },
    { year: "2020", title: "Impact of War (1983-2009) on Jaffna Tamil", author: "Mrs. Sri Ranjini Anandakumarasamy", university: "University of Kelaniya", degree: "MPhil" },
    { year: "2020", title: "Corpus Planning: Curriculum Development in Teaching English as a Second Language", author: "B.M.L.R.K. Basnayake", university: "University of Kelaniya", degree: "PhD" },
    { year: "2020", title: "A study of employment among Arts graduates in Sri Lanka", author: "I.T. Jayamanne", university: "University of Colombo", degree: "PhD" },
    { year: "2020", title: "Information accountability in Health Information Systems using Process Analytics", author: "D.W.C.P. Kumari", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2020", title: "Exploring the Role of Customer Heterogeneity in Innovation-based Competitive Strategy", author: "W.M.A.K. Wijekoon", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2020", title: "Determinants And Consequences of Employee Networking Behaviours", author: "W.M.S.K. Wanigasekara", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2020", title: "Dilemmas of Justice in Reconciliation: An Analysis of Peacebuilding in Sri Lanka", author: "M.R. Wakkumbura", university: "University of Colombo", degree: "PhD" },
    { year: "2019", title: "Positive Polarity and Exhaustivity in Sinhala: A Study of its Implications for Grammar", author: "W.A.T. Weerasooriya", university: "University of Ottawa", degree: "PhD" },
    { year: "2019", title: "The Role of SMEs in Reduction of Rural Poverty in Southern Sri Lanka", author: "H.K. Sarath", university: "University of Ruhuna", degree: "PhD" },
    { year: "2019", title: "Management Controls from an Institutional Logics Perspective in Apparel Group", author: "D.G.S. Damayanthi", university: "University of Sri Jayawardenepura", degree: "PhD" },
    { year: "2019", title: "Crime and the Control of Crime: An Ethical Analysis from Theravada Buddhist View", author: "Sarananda Thero Elamaladeniye", university: "University of the West", degree: "PhD" },
    { year: "2019", title: "Teacher Engagement and Professional Development: University ESL teachers in Sri Lanka", author: "K.R.W.K.H. Abeywikrama", university: "Deakin University", degree: "PhD" },
    { year: "2019", title: "Foreign Investment and Sustainable Development: Sri Lankan Legal Perspective", author: "F.S.D.l.M. Razik", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2019", title: "Essays on Agricultural Commodity Markets", author: "D. Perera", university: "University of Canterbury", degree: "PhD" },
    { year: "2019", title: "When Traditions Meet Consumer Culture in Sri Lanka", author: "M.R. Chandrasekara", university: "University of Sri Jayawardenepura", degree: "PhD" },
    { year: "2018", title: "Integrated Reporting in Sri Lankan PLCs", author: "A.M.I.Lakshan", university: "University of Waikato", degree: "PhD" },
    { year: "2018", title: "Colonial Choreography: Staging Sri Lankan Dancers Under British Colonial Rule", author: "S.B.M.M.Arachchilage", university: "University of Maryland", degree: "PhD" },
    { year: "2018", title: "Women Labor Migration in Sri Lanka: A Study of Policy Implementation", author: "K.D.D. Silva", university: "Tribhuvan University", degree: "PhD" },
    { year: "2018", title: "From Laborer to Citizen: Plantation people in Accessing Public Services", author: "R.Ramasamy", university: "Tribhuvan University", degree: "PhD" },
    { year: "2018", title: "Career Self Management Behaviors in Commercial banks in Sri Lanka", author: "R. Wikramarathne", university: "Murdoch University", degree: "PhD" },
    { year: "2018", title: "Market Response to Publicly Available Information: Colombo Stock Exchange", author: "D.G. Dharmarathne", university: "University of Colombo", degree: "PhD" },
    { year: "2018", title: "Integration of Strategy and Corporate Social Responsibility for Value Creation", author: "B.A.N. Eranda", university: "University of Colombo", degree: "MPhil" },
    { year: "2018", title: "Inequalities at Work: Investigation of the Garment Industry in Sri Lanka", author: "P.D.H.D. Gunatilaka", university: "University of Warwick", degree: "PhD" },
    { year: "2018", title: "Readiness Framework for E-learning Implementation in Higher Education Sri Lanka", author: "M.H. Thowfeek", university: "Universiti Kebangsaan Malaysia", degree: "PhD" },
    { year: "2018", title: "Migration and Selfhood in the Select Fiction of Michael Ondaatje", author: "K. Shrikarunaakaran", university: "The English and Foreign Languages University", degree: "PhD" },
    { year: "2018", title: "State-Minority Contestations in Post-colonial Sri Lanka", author: "M.M. Fazil", university: "University of Malaya", degree: "PhD" },
    { year: "2018", title: "Early Adolescents' motivation and engagement in learning in Sri Lanka", author: "K.D.R.L.J. Perera", university: "University of New England", degree: "PhD" },
    { year: "2018", title: "Green Bonds: Do they Bring Sustainability to Environmentally Friendly Projects?", author: "K.G.M. Nanayakkara", university: "Federation University Australia", degree: "PhD" },
    { year: "2017", title: "Climate Change and Natural Disaster Risks in Sri Lanka Districts", author: "P.H. Amaraweera", university: "University of Ruhuna", degree: "PhD" },
    { year: "2017", title: "Shewhart Methodology for Modelling Financial Series", author: "L.P.N.D. Premarathna", university: "Massey University", degree: "PhD" },
    { year: "2017", title: "A Spatial Analysis of Active Ageing in Sri Lanka", author: "R.A.S.P. Ranabahu", university: "University of Ruhuna", degree: "PhD" },
    { year: "2017", title: "Role of Ayurvedic Medical System in Contemporary Sri Lankan Society", author: "P.R. Ekanayake", university: "University of Ruhuna", degree: "PhD" },
    { year: "2017", title: "Development Administration in Sri Lanka: Minorities' Demand for Kalmunai District", author: "A. Sarjoon", university: "Universiti Kebangsaan Malaysia", degree: "PhD" },
    { year: "2017", title: "Adoption and Implementation of Corporate Sustainability Strategy", author: "M.S.B.M. Mihilar", university: "Curtin University", degree: "PhD" },
    { year: "2017", title: "Economic History in Medieval Sri Lanka (1232 A.D. to 1467 A.D.)", author: "J.M. Sudharmawathie", university: "University of Kelaniya", degree: "PhD" },
    { year: "2017", title: "Washback Effects of Speaking Assessment in Sri Lankan Schools", author: "S. Umashankar", university: "University of Bedfordshire", degree: "PhD" },
    { year: "2017", title: "Spatio-Temporal Urban Growth Patterns in Colombo Urban Fringe", author: "K.G.P.K. Weerakoon", university: "Universiti Sains Malaysia", degree: "PhD" },
    { year: "2017", title: "The Rise of Social Enterprises in Low-trust Situations", author: "Sivagnanam Mahesgwaran", university: "Norwegian University", degree: "PhD" },
    { year: "2016", title: "Fundamental and Behavioural Determinants of Stock Returns in Sri Lanka", author: "L.M.C.S. Menike", university: "University of Colombo", degree: "PhD" },
    { year: "2016", title: "Principles of Land during British period in Sri Lanka", author: "J.K.A. Kanthi", university: "University of Ruhuna", degree: "MPhil" },
    { year: "2016", title: "Occupational Stress among Executives in the Bank of Ceylon- Sri Lanka", author: "T.Prabaharan", university: "Annamalai University", degree: "PhD" },
    { year: "2016", title: "Hydro-ecological Impact of Agro-well Development in North Central Dry Zone", author: "M.M.P. Perera", university: "University of Peradeniya", degree: "PhD" },
    { year: "2016", title: "An Ethnographic Study of the Applied Numerals in Sinhala", author: "Sandhya Kahandagamage", university: "University of Colombo", degree: "PhD" },
    { year: "2016", title: "Minority Rights in the Third World Democracy: Upcountry Tamils in Sri Lanka", author: "R.A.W. Ranasinghe", university: "University of Peradeniya", degree: "PhD" },
    { year: "2016", title: "Compliance Behavior of Income Taxpayers in Non-corporate sector in Sri Lanka", author: "Mohamed Burhan Mohamed Amjath", university: "Annamalai University", degree: "PhD" },
    { year: "2016", title: "A Structural Study of the Verb in Classical Sinhalese", author: "Rev. Morakandegoda Ariyawansa", university: "Deccan College", degree: "PhD" },
    { year: "2016", title: "Management Accounting in Environmental Management Issues in Listed Companies", author: "I.M. Withanawasam", university: "Victoria University", degree: "PhD" },
    { year: "2016", title: "Job satisfaction factors among academic faculty in public universities Sri Lanka", author: "T.S.M. Amarasena", university: "Management and Science University", degree: "PhD" },
    { year: "2016", title: "Strategic planning on mission achievement in Sri Lankan NGOs", author: "W.M.R.B. Weerasooriya", university: "Management and Science University", degree: "PhD" },
    { year: "2016", title: "Food Price Dynamics and Inflation in Sri Lanka", author: "S. Sivarajasingham", university: "Universiti Utara Malaysia", degree: "PhD" },
    { year: "2016", title: "Use of E-Resources by Faculty Members in University Libraries in Sri Lanka", author: "K.M. Rani K. Kulatunga", university: "University of Delhi", degree: "PhD" },
    { year: "2016", title: "Impact of the Tsunami 2004 on ecosystems in the South West coast of Sri Lanka", author: "S.Wijeratne", university: "University of Ruhuna", degree: "PhD" },
    { year: "2016", title: "Organization and Transmission of Ayurvedic and Indigenous Medical knowledge", author: "C.K. Gamage", university: "University of Kelaniya", degree: "PhD" },
    { year: "2015", title: "A study of Skin Diseases: Ksudra Kustcha with Special Reference to Vipadika", author: "H.G.S.P.Hewageegana", university: "University of Kelaniya", degree: "PhD" },
    { year: "2015", title: "A critical study on Pramecha with Special Reference to Albuminuria", author: "K.R.Weerasekara", university: "University of Kelaniya", degree: "PhD" },
    { year: "2015", title: "Geo-spatial model of household inhabitants' behavior in sub-urban Colombo", author: "G.P.T.S. Hemakumara", university: "Universiti Sains Malaysia", degree: "PhD" },
    { year: "2015", title: "Essays on Urban Poverty and Micro Entrepreneurship in Sri Lanka", author: "B.W.R. Damayanthi", university: "Universiti Brunei Darussalam", degree: "PhD" },
    { year: "2015", title: "Musical Traces of Hindustani Culture in Malay Ghazal", author: "M.L.C.P. Meddegoda", university: "Universiti Putra Malaysia", degree: "PhD" },
    { year: "2014", title: "Post-Independence Sri Lankan Women's Writings in English: A Study", author: "N.Harischandra", university: "Jawaharlal Nehru University", degree: "PhD" },
    { year: "2014", title: "Accounting Practices: The Change I See", author: "P.A.G. Gunatilake", university: "University of Canterbury", degree: "PhD" },
    { year: "2014", title: "Regional Food chain System for Sustainable Agricultural Production in Sri Lanka", author: "R.P.I.R. Prasanna", university: "Kagoshima University", degree: "PhD" },
    { year: "2014", title: "Glycemic Control Behaviors among Adults with Type II Diabetes Mellitus in Sri Lanka", author: "A.A.P.T.D. Amarasekara", university: "Chiang Mai University", degree: "PhD" },
    { year: "2013", title: "Maritime Cultural Interaction Between Sri Lanka and China based on Archaeological Artifacts", author: "G. Ranasinghe", university: "Xiamen University", degree: "PhD" },
    { year: "2013", title: "Consumer Ethnocentrism as a Strategic Tool for Developing Domestic Brand Equity", author: "W.M.C.B. Wanninayake", university: "Tomas Bata University in Zlin", degree: "PhD" },
    { year: "2013", title: "The Role of SMEs in Changing Poverty Status in Sri Lanka", author: "S. Vijayakumar", university: "Tomas Bata University in Zlin", degree: "PhD" },
    { year: "2013", title: "A Proposal for the Protection of Digital Databases in Sri Lanka", author: "T.B. Abeysekara", university: "University of Exeter", degree: "PhD" },
    { year: "2013", title: "Monetary Transactions in Ancient Sri Lanka", author: "V.D.N.S. Gunawardana", university: "Pondicherry University", degree: "PhD" },
    { year: "2012", title: "E-learning Systems Success in an Organisational Context", author: "S.M. Samarasinghe", university: "Massey University", degree: "PhD" },
    { year: "2012", title: "Origin and Evolution of Sri Lankan Buddha Image Independent of Indian Prototype", author: "P. Narangoda", university: "University of the West", degree: "PhD" },
    { year: "2012", title: "Agricultural Biodiversity, Farm level Technical Efficiency and Conservation Benefits", author: "K.M.R. Karunarathna", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2012", title: "Corporate Social Responsibility and Company Performance: Evidence from Sri Lanka", author: "K.K. Tilaksiri", university: "Victoria University", degree: "PhD" },
    { year: "2012", title: "Business Succession in Medium-Size Family Companies", author: "A.C. De Alwis", university: "Tomas Bata University in Zlin", degree: "PhD" },
    { year: "2011", title: "A clinical study on Senile Memory Impairment and Management with Guduchyadi Rasayana", author: "R.D.Hemakanthi Kulathunga", university: "Gujarat Ayurved University", degree: "PhD" },
    { year: "2011", title: "The Potential of Mobile Phones to Support Science Teachers in Sri Lanka", author: "T.M.S.S.K.Y. Ekanayake", university: "University of Bristol", degree: "PhD" },
    { year: "2011", title: "Clausal Complementation in Sinhala", author: "M.G. Lalith Ananda", university: "Jawaharlal Nehru University", degree: "PhD" },
    { year: "2011", title: "Students' Experience of Learning in Undergraduate Education in Sri Lanka", author: "S.D.K. Wijesundera", university: "University of Nottingham", degree: "PhD" },
    { year: "2011", title: "Determinants of Stock Returns in Colombo Stock Exchange", author: "Chandrapala Pathirawasam", university: "Tomas Bata University in Zlin", degree: "PhD" },
    { year: "2011", title: "Factors influencing organizational effectiveness in Public Sector Organizations", author: "P.M.T.C.Wijesundara", university: "Wuhan University", degree: "PhD" },
    { year: "2011", title: "Effects of leader charisma on follower dependency in Sri Lankan firms", author: "J.A.S.K.Jayakody", university: "University of Sri Jayawardenepura", degree: "PhD" },
    { year: "2010", title: "Development in the State Patronage of Traditional Medicine in Sri Lanka", author: "Rathnayaka Abeyrathna", university: "University College London", degree: "PhD" },
    { year: "2010", title: "Economic and Social impact of Migration of Sri Lankan Transnational Domestic Workers", author: "Swarnalatha Ukwatte", university: "The University of Adelaide", degree: "PhD" },
    { year: "2010", title: "Budgeting, Accountability, and Consensual Spaces: Case of Sri Lanka Railway", author: "A.A. Chandrasiri", university: "University of Manchester", degree: "PhD" },
    { year: "2010", title: "A Historical Analysis of Sino-Sri Lankan Cultural Relations (Buddhism to 16th Century)", author: "Sobhitha", university: "Shandong University", degree: "PhD" },
    { year: "2010", title: "Essays on Irrigation Development, Farm Production, and Unaccounted Costs", author: "P.P.A. Wasantha Athukorala", university: "Queensland University of Technology", degree: "PhD" },
    { year: "2010", title: "Validation of Asset Pricing Models During Crisis and Non-Crisis Periods", author: "D.A.I. Dayaratne", university: "University of Colombo", degree: "PhD" },
    { year: "2009", title: "The Politics of Language in Colonial Sri Lanka, 1900-1948", author: "Harison Sandsagomi Coperahewa", university: "University of Cambridge", degree: "PhD" },
    { year: "2009", title: "Inclusive Education as a Strategy for Achieving Education For All in Sri Lanka", author: "T.D.T.L.Dhanapala", university: "University of The Punjab Lahore Pakistan", degree: "PhD" },
    { year: "2009", title: "Land use, Land Tenure and Agricultural Productivity in Sri Lanka", author: "R.K.Lal Mervin Dharmasiri", university: "University of Pune", degree: "PhD" },
    { year: "2009", title: "Organizational Learning, Innovation and Performance in Family-Controlled SMEs", author: "Pradeep Dharmasena", university: "Bond University", degree: "PhD" },
    { year: "2009", title: "Contribution of Sri Lankan Buddhist Literature for Development of Ethnic identity", author: "R.G.D.Jayawardhana", university: "University of Peradeniya", degree: "PhD" },
    { year: "2009", title: "Spatial and Temporal Distribution of Malaria in Anuradhapura District", author: "Gnanalatha Edirisinghe", university: "University of Ruhuna", degree: "PhD" },
    { year: "2009", title: "Sustainable Community Development: Case Study of AMDP Resettlement Scheme", author: "M.G.Manurathne", university: "University of New England", degree: "PhD" },
    { year: "2008", title: "Causal Paradigms: A Philosophical Analysis", author: "H.R.N.P..K.Handagama", university: "University of Kelaniya", degree: "PhD" },
    { year: "2008", title: "Das Vitasokavadana: Einleitung kristische Edition", author: "Nirosha Paranavitana", university: "Rheinische Friedrich-Wilhelms University", degree: "PhD" },
    { year: "2007", title: "Level of Informativeness of Annual Reports and Corporate Governance", author: "D.S.N.P.Senaratne", university: "University of Colombo", degree: "PhD" },
    { year: "2006", title: "The relevance of Islamic Philosophy and Theology for the mission in Sri Lanka", author: "Jebratnam Jebmohan", university: "University of Jaffna", degree: "MPhil" },
    { year: "2006", title: "Urban housing policy in Sri Lanka: State, Market and Social classes in Colombo", author: "N.Chandrasiri Niriella", university: "Jawaharlal Nehru University", degree: "PhD" },
    { year: "2005", title: "Ethics Distributed in Vrihattravi for Proper Maintenance of Health", author: "I.G.P.R.Kulanatha", university: "Banaras Hindu University", degree: "PhD" },
  ]

  const years = [...new Set(theses.map(t => t.year))].sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Thesis and Dissertations
            </h1>
            <p className="text-lg text-emerald-100 mb-4">
              (Sri Lanka & International Universities) Completed by NCAS Grantees available at NCAS Library
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold">{theses.length}+</div>
                <div className="text-sm text-emerald-200">Total Theses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{theses.filter(t => t.degree === "PhD").length}</div>
                <div className="text-sm text-emerald-200">PhD Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{years.length}</div>
                <div className="text-sm text-emerald-200">Years (2005-2024)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-6">
          {years.map((year) => (
            <Card key={year}>
              <CardHeader className="bg-muted/50">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {year}
                  <Badge variant="secondary" className="ml-2">
                    {theses.filter(t => t.year === year).length} theses
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-2 font-medium">Title</th>
                        <th className="text-left py-2 px-2 font-medium">Author</th>
                        <th className="text-left py-2 px-2 font-medium">University</th>
                        <th className="text-left py-2 px-2 font-medium">Degree</th>
                      </tr>
                    </thead>
                    <tbody>
                      {theses.filter(t => t.year === year).map((thesis, idx) => (
                        <tr key={idx} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2">{thesis.title}</td>
                          <td className="py-3 px-2 text-muted-foreground">{thesis.author}</td>
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-1">
                              <Globe className="h-3 w-3 text-muted-foreground" />
                              <span className="text-muted-foreground">{thesis.university}</span>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <Badge variant={thesis.degree === "PhD" ? "default" : "secondary"}>
                              {thesis.degree}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
