import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, ArrowLeft, ExternalLink } from 'lucide-react';

const proceedings2025 = {
  title: "7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025",
  subtitle: "AI in Higher Education: Innovations, Challenges, and Future Directions",
  date: "January 16-17, 2025",
  venue: "Bandaranaike Memorial International Conference Hall (BMICH), Colombo, Sri Lanka",
  themes: [
    {
      id: "theme1",
      title: "Sub Theme 01 - Enhanced Teaching and Learning Innovations, Adaptive Pedagogies, and Student Engagement",
      papers: [
        { title: "ChatGPT in Language Education: Insights from Learners and Teachers", authors: "Arivarasy Thanushan" },
        { title: "Designing Adaptive AI Pedagogies for large ELT classrooms in Sri Lankan universities", authors: "J.M.A.K. Jayakody" },
        { title: "Performance vs. Authenticity: Reflections on AI Use in Undergraduate Literature Classrooms in Sri Lanka", authors: "J.M.B.K. Jayasekera" },
        { title: "Reassessing the Take-Home: Designing AI-Resilient Assessment Criteria in Undergraduate Literature Programs", authors: "D.M.K.H. Dissanayake" },
        { title: "Digital Secrets: Understanding Facebook Users' Privacy Choices in Sri Lanka", authors: "P. Thinojan, D. J. Punchihewa" },
        { title: "Ethical and Academic Boundaries in AI-Assisted Learning: A Qualitative Inquiry", authors: "Ileka Ruwanpathirana" },
        { title: "Determinants and Challenges of Extracurricular Participation: Evidence from Grade 11 Students in Gampaha District Schools", authors: "K.T.M.A.N. Kapuliyadda, R.M.L. Rathnayake" },
        { title: "Student Privacy in AI-Enhanced Learning Platforms: A Comparative Policy Analysis", authors: "P.T.K.I. Dharmasiri, A.N.P. Pigera, K.A.D.A.M. Nanayakkara" },
        { title: "From Classroom to Screen: Exploring the Influence of AI-Assisted Scriptwriting on Film Students", authors: "A.M.G.K.N. Senevirathne, G.D.L. Kavindi" },
        { title: "AI-Driven Graphic Design in Higher Education: A Strategic Approach", authors: "K.P.D.S.L. Kodagoda, H.G.C.K. Hulangamuwa" },
        { title: "The Role of Feedback methods in Artificial Intelligence Tutoring Systems", authors: "M.U. Kiriwandarage" },
        { title: "Knowledge and Attitudes Regarding Artificial Intelligence Among Newly Graduated Medical Pre-Interns", authors: "B.M.N.M.I.M. Balasooriya et al." },
        { title: "Strategies for Detoxifying Learning Environment Pollution Caused by Technological Devices", authors: "Poornima Weerasinghe" },
        { title: "Artificial Intelligence in Higher Education: A Systematic Review", authors: "Nadeesha, D. S." },
        { title: "Artificial Intelligence as a Personalized Tutor to support Learners with Diverse Needs", authors: "Aarabee Sivakugan" },
        { title: "Strengthening reading comprehension through specific strategies: A case study", authors: "A.M.L. Priyanga" },
        { title: "AI as a Personalized Learning Assistant: Opportunities and Limitations", authors: "C.B. Wanigasingha, A.M.S.K. Aththanayaka" },
        { title: "Artificial Intelligence and the Lost Compass: Reclaiming Conscience and Moral Imagination", authors: "Eunan Rohan de Mel" },
        { title: "AI-Enhanced Teaching and Learning through a Developed Android Application", authors: "A.M. Muthalib" }
      ]
    },
    {
      id: "theme2",
      title: "Sub Theme 02 - Curriculum Design and Academic Advising: AI Supported Modelling",
      papers: [
        { title: "Enhancing Policy Decisions to Foster Higher-Order Cognitive Skills among IT Graduates in Sri Lanka", authors: "Amila De Silva, K.P. Hewagamage, R.A.B. Abeygunawardana" },
        { title: "English Language Needs of Women Entrepreneurs in Small and Medium Scale Enterprises", authors: "D.N.P. Amarasooriya, S.P. Premarathna, H.D. Wijesekara, S. Rajadurei" },
        { title: "AI-Supported Curriculum Design and Academic Advising: Educators' Perspectives", authors: "D.T. Gunarathne" }
      ]
    },
    {
      id: "theme3",
      title: "Sub Theme 03 - Research, Writing, and Scholarly Communication: AI Tools",
      papers: [
        { title: "Addressing PCOS in Adolescents through Lifestyle Modification: A Preventive Approach", authors: "J. Rumaiza, R.C. Fernandopulle, P.K. Perera, M.I. Manuha, A.M. Muthalib" },
        { title: "Ethical Use of AI Tools in Academic Research: Issues, Challenges and Remedies", authors: "Dr Susil Manchanayaka" },
        { title: "Mapping the Literature on Artificial Intelligence (AI) in Higher Education: A Bibliometric Approach", authors: "Uditha Gunasekara" },
        { title: "AI Tools in Thesis Writing: Experiences of Master in TESL Students in Sri Lanka", authors: "W. W. A. P. H. Fernando" }
      ]
    },
    {
      id: "theme4",
      title: "Sub Theme 04 - Implementation Case Studies: Successes and Obstacles",
      papers: [
        { title: "A Study on Killa (Impurity) and Its Social Usage", authors: "P. G. C. M. T. Bandara" },
        { title: "AI effectiveness in wearable art design process", authors: "D. A. L. J. Dharmawardana" },
        { title: "Healing or Hedonism? Unpacking the Spa Industry in Sri Lanka", authors: "A. Piyarathne, H.M.U.S Herath" },
        { title: "Weaving Minds in the Cloud: A Metaphorical Framework for Smart Education", authors: "S.K.L.J. Ramanayaka" },
        { title: "The Role of the Ramakrishna Mission in Shaping Education under British Colonialism", authors: "Nilanthini Chenthurran" },
        { title: "Digital Resurrection: Using AI to Preserve and Recreate Cultural Heritage", authors: "R.M.T.D.K. Rathnayaka" },
        { title: "The Use of Artificial Intelligence Tools in Storyboard Development", authors: "H. T. Dahanayaka" },
        { title: "Digital Transformation and Development Perspectives in Higher Education", authors: "Srđan Dušanić" },
        { title: "Understanding Disengagement from Campus Recreation", authors: "S.T. Madusanka" },
        { title: "Public Perception of AI Adoption for Sustainable Tourism in Weralugasthanna", authors: "D. Dewapura, K. Sajeewani, H. Gamage, R. D. A. Tissa" },
        { title: "Environmental pollution by Multinational Companies in Sri Lanka", authors: "S.R. Sunil" },
        { title: "Pressured to Perform: Institutional Pressures in Non-State Higher Education Institutes", authors: "V.K. Kurukulaarachchi" },
        { title: "Management Controls in the Space of Industry 4.0", authors: "H.A. Siriwardana" }
      ]
    },
    {
      id: "theme5",
      title: "Sub Theme 05 - Inclusive Education: Leveraging AI to Bridge Access Gaps",
      papers: [
        { title: "AI-Powered Visual Recognition Tools for Early Literacy Instruction", authors: "H.G.C.K. Hulangamuwa" },
        { title: "AI-Based Chatbot Services in Academic Libraries for Distance Education", authors: "K.D. Wickramarathne et al." },
        { title: "AI for All Minds: Inclusive Education Strategies for Neurodivergent Learners", authors: "H. G. M. D Rathnayake, P. M. V. D Samarasekara" },
        { title: "Generative AI-Based Braille Transformative Solution for Visually Impaired Learners", authors: "S.K. Manamperi, D.N. Manamperi" },
        { title: "Determinants of Specialization Selection among Management Undergraduates", authors: "P.A.B.H. Amarathunga, K.P.T. Sajeewani, R.P.S. Fernando" }
      ]
    },
    {
      id: "theme6",
      title: "Sub Theme 06 - Strategic Planning and Support Services: AI as Challenge and Opportunity",
      papers: [
        { title: "Navigating the Digital Frontier: AI for Education Leadership", authors: "Shylaja Pillarsetti" },
        { title: "The Detrimental Path from Despotic Leadership to Cyber-loafing", authors: "N. Jasintha" },
        { title: "Rewiring the Brain: Pathways to Trauma Recovery", authors: "T.A.H. Jayathilake" }
      ]
    },
    {
      id: "theme7",
      title: "Sub Theme 07 - Miscellaneous",
      papers: [
        { title: "Geospatial Analysis on Land Use Changes of Kegalle Divisional Secretariat Division", authors: "H.D.M.T. Pavithrani" },
        { title: "When Men Rag Men: Masculinity, Sexual Violence, and Institutional Power", authors: "M. Jinadasa" },
        { title: "Promoting Sri Lankan Geographical Indications for Socio-economic Development", authors: "P. R. M. N. D. Pallepola" },
        { title: "Work ethics in the administrative system of the school education sector", authors: "E.A.C.S. Edirisinghe" },
        { title: "Economic Status of Households with Heart Disease and Diabetes Patients in Buttala", authors: "D.M.S. Jeewamali" },
        { title: "Assessment of Solid Waste Generation and Disposal Practices in Wattala Urban Council", authors: "H. H. C. U. M. Perera" }
      ]
    },
    {
      id: "theme8",
      title: "Sub Theme 08 - Policy and Governance: Regulatory Frameworks and AI Adoption",
      papers: [
        { title: "An AI-Driven Framework for Meeting Minutes Management in Higher Education", authors: "A.H.K. Balasooriya" },
        { title: "Are We Prepared for the Algorithm? Policy and Legislative Review on AI in Higher Education", authors: "C.M.N.T.K. Chandrasekara" },
        { title: "Artificial Intelligence in Sustainable Construction Practices", authors: "R.A.D.I.C. Rathnayake, K.D. Wickramarathne, A.L.M.S.D. Ambegoda" },
        { title: "AI-Driven Supplier Assessment and selection for Sustainability Performance", authors: "K.D. Wickramarathne, A.W.S.P. Dayananda, M. Arunshankar" },
        { title: "Proposing Cybercrime Law Reform in Sri Lanka", authors: "N.W. Meegammana, N.S. Punchihewa, H. Fernando" },
        { title: "Global Frameworks, Local Readiness: EU AI Act's Relevance for South Asian Higher Education", authors: "Sana Naz, M. P. Dissanayake" },
        { title: "AI-Driven Framework for creating presentations in Higher Educational Institutes", authors: "S. Chandrasena, V. K. D. Cooray" }
      ]
    }
  ]
};

export default function Proceedings2025Page() {
  const totalPapers = proceedings2025.themes.reduce((acc, theme) => acc + theme.papers.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Link href="/library/proceedings" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Proceedings
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Proceedings 2025
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{proceedings2025.title}</h1>
            <p className="text-xl text-primary-foreground/90 mb-4">
              {proceedings2025.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
              <span>📅 {proceedings2025.date}</span>
              <span>📍 {proceedings2025.venue}</span>
              <span>📄 {totalPapers} Research Papers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">{totalPapers}</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Sub-Themes</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Keynote Speakers</div>
            </CardContent>
          </Card>
        </div>

        {/* Proceedings by Theme */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Papers by Sub-Theme</h2>

          {proceedings2025.themes.map((theme, themeIndex) => (
            <Card key={theme.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2">Sub-Theme {themeIndex + 1}</Badge>
                    <CardTitle className="text-lg">{theme.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">{theme.papers.length} Papers</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {theme.papers.map((paper, paperIndex) => (
                    <div key={paperIndex} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{paper.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{paper.authors}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Information */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>More Information</CardTitle>
            <CardDescription>
              Access additional symposium resources and materials
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="/information/symposium-2025">
                <ExternalLink className="h-4 w-4 mr-2" />
                Symposium Details
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/information/gallery">
                <ExternalLink className="h-4 w-4 mr-2" />
                Photo Gallery
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk
          </p>
        </div>
      </section>
    </div>
  );
}
