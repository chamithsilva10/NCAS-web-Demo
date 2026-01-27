"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, FileText, Mail, Phone, Globe, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function JournalPage() {
  const [expandedVolumes, setExpandedVolumes] = useState<string[]>([])

  const toggleVolume = (id: string) => {
    setExpandedVolumes(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    )
  }

  const journalInfo = {
    title: "Sri Lanka Journal of Advanced Research Studies in Humanities and Social Sciences",
    subtitle: "(Continuation of Sri Lanka Journal of Advanced Social Studies published since 2011)",
    issn: "3084 - 9144",
    issnOnline: "3084 - 9152",
    contact: {
      phone: "+94112685850",
      fax: "+94112693975",
      email: "editor@ncas.ac.lk",
      website: "www.ncas.ac.lk"
    }
  }

  const volumes = [
    {
      id: "2023-02",
      volume: "Volume 13",
      number: "Number 2",
      year: "2023",
      fullJournal: "http://ncas.ac.lk/journal/journal_2023_02/NCAS%20Journal%202023%20Vol%2013%20No2.pdf",
      coverContents: "http://ncas.ac.lk/journal/journal_2023_02/Cover%20inner%20Content%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf",
      articles: [
        { title: "Digital Tools in Language Learning: Their Effectiveness, Impact and Challenges", author: "M. A. S. P. Manchanayaka", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2001%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" },
        { title: "Media and Mental Health: Examining the impact of Information Overload during COVID-19", author: "Ankuran Dutta / Anupa Lahkar Goswami", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2002%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" },
        { title: "Use of Sri Lankan Traditional Stylized Mythical Creatures in the Film and Video Game Industries", author: "H.N. Ranatunga", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2003%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" },
        { title: "Alternative Strategy Use and the Impact of MT on Vocabulary Acquisition: Case of Sri Lankan ESL Learners", author: "P. S. Manthrirathna / T. R. Ponnamperuma / L. Wijewardene", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2004%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" },
        { title: "ශ්‍රී ලංකාවේ සම්ප්‍රදායික පහතරට නර්තන කලාව සහ සංචාරක කර්මාන්තය", author: "රංගනාත් සුදර්ශන ද සිල්වා", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2005%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" },
        { title: "The Role of Prosthetic Makeup for Creating Realistic Creature Effects in Fantasy Movie", author: "A. Y. O. Lakshitha", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2006%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" },
        { title: "The Impact of Generative AI on Library Services and Digital Content Management in Sri Lanka", author: "S. Chandrasena", pdf: "http://ncas.ac.lk/journal/journal_2023_02/Article%2007%20NCAS%20Journal%20VOLUME%2013%20NO.%202.pdf" }
      ]
    },
    {
      id: "2023-01",
      volume: "Volume 13",
      number: "Number 1",
      year: "2023",
      fullJournal: "http://ncas.ac.lk/journal/Journal_2023_01/Journal%20Vol13%20No%2001%202023.pdf",
      coverContents: "http://ncas.ac.lk/journal/Journal_2023_01/Cover%20inner%20Content%20NCAS%20Journal%20VOLUME%2013%20NO.%201.pdf",
      articles: [
        { title: "Impact of the Economic Crisis in Sri Lanka on Families Engaged in the Tourism Industry", author: "T. P. G. T. M. De Alwis / M. O. Perera", pdf: "http://ncas.ac.lk/journal/journal_2023_01/Article%2001%20NCAS%20Journal%20VOLUME%2013%20NO.%201..pdf" },
        { title: "Analysis on the Role of Public Relations in Tourism: A case study of Santiniketan", author: "Mir Abdul Sofique / Anirban Sircar", pdf: "http://ncas.ac.lk/journal/journal_2023_01/Article%2002%20NCAS%20Journal%20VOLUME%2013%20NO.%201..pdf" },
        { title: "Bridging the Gap Between ICT University Learning Outcomes and Industry Expectations", author: "N. Lankasena / H. L. N. Himanshi", pdf: "http://ncas.ac.lk/journal/journal_2023_01/Article%2003%20NCAS%20Journal%20VOLUME%2013%20NO.%201..pdf" },
        { title: "Assessing AI Literacy Levels among Fresh Technology Undergraduates", author: "S. Chandrasena / Y. H. P. S. S. Pathirathna / T. H. A. S. H. Niranjala / K. K. A. H. Kumarasinghe", pdf: "http://ncas.ac.lk/journal/journal_2023_01/Article%2004%20NCAS%20Journal%20VOLUME%2013%20NO.%201..pdf" },
        { title: "Performing Hybrid Identities: Discursive Construction of Sri Lankan-Chinese Self and Other", author: "Hasitha Pathirana", pdf: "http://ncas.ac.lk/journal/journal_2023_01/Article%2005%20NCAS%20Journal%20VOLUME%2013%20NO.%201..pdf" },
        { title: "Practical Project-based Analysis of Sri Lankan Traditional Mythical Creature Designs", author: "H.N. Ranatunga", pdf: "http://ncas.ac.lk/journal/journal_2023_01/Article%2006%20NCAS%20Journal%20VOLUME%2013%20NO.%201..pdf" }
      ]
    },
    {
      id: "2022-02",
      volume: "Volume 12",
      number: "Number 2",
      year: "2022",
      period: "July-December 2022",
      fullJournal: "http://ncas.ac.lk/journal/Journal_2022_02/NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf",
      coverContents: "http://ncas.ac.lk/journal/Journal_2022_02/Cover%20inner%20Content%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf",
      articles: [
        { title: "Framework for assessing Perceived Safety and Comfort in Urban Public Realm: A Study on Colombo", author: "Kawshalya, L.W.G. / Weerasinghe, U.G.D. / Chandrasekara, D.P.", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2001%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" },
        { title: "Learner Beliefs and Expectations of English Language Usage", author: "Wathuge, P.C.", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2002%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" },
        { title: "The Dynamic Relationship between Foreign Direct Investment Inflows and Interest Rate in Sri Lanka", author: "Washima, M.N.F.", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2003%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" },
        { title: "Drainage System and Settlement Pattern in the Yamuna-Hindon Doab: An Archaeological Perspective", author: "Dr. Rewant Vikram Singh", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2004%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" },
        { title: "Waste Management in Sri Lanka: Challenges and Opportunities", author: "Mervin Lal Dharmasiri", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2005%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" },
        { title: "Inevitability of Inter-textual Characteristics of Artistic Cinema: a brief survey", author: "Prabhath Agampodi", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2006%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" },
        { title: "Reactivation and The Sri Lankan Social Formation", author: "Rohan Bastin", pdf: "http://ncas.ac.lk/journal/journal_2022_02/Article%2007%20%20NCAS%20Journal%20VOLUME%2012%20NO.%202-%20JULY-DECEMBER%202022.pdf" }
      ]
    },
    {
      id: "2022-01",
      volume: "Volume 12",
      number: "Number 1",
      year: "2022",
      period: "January-June 2022",
      fullJournal: "http://ncas.ac.lk/journal/Journal_2022_01/NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf",
      coverContents: "http://ncas.ac.lk/journal/Journal_2022_01/Cover%20inner%20content%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf",
      articles: [
        { title: "Mind Mapping: A Strategy To Enhance Essay Writing Skills of Learners of English as a Second Language", author: "Seneviratne, S.L. / Senaratne, C.D.", pdf: "http://ncas.ac.lk/journal/journal_2022_01/Article%2001%20%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf" },
        { title: "Settlement Pattern of Ancient Ports of Western Maharashtra – An Archaeological Perspective", author: "Rewant Vikram Singh", pdf: "http://ncas.ac.lk/journal/journal_2022_01/Article%2002%20%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf" },
        { title: "'Culture' as Breaking Barriers: India's Evolving Diplomacy during Pandemic", author: "Mukesh Kumar Srivastava", pdf: "http://ncas.ac.lk/journal/journal_2022_01/Article%2003%20%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf" },
        { title: "Exploring the Uniqueness of American Aboriginal Culture in Louis Erdrich's The Antelope Wife", author: "Ramesh Prasad Adhikary", pdf: "http://ncas.ac.lk/journal/journal_2022_01/Article%2004%20%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf" },
        { title: "Locational Suitability for Residential Development in Kandy District: GIS-Based Multi-Criteria Evaluation", author: "Gayani Lakmali Pathirage / Bandara, T.W.M.T.W.", pdf: "http://ncas.ac.lk/journal/journal_2022_01/Article%2005%20%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf" },
        { title: "Examining the role of advertising value perceptions in driving engagement: hotel/restaurant advertising on Facebook", author: "Thanuka Mahesha de Silva", pdf: "http://ncas.ac.lk/journal/journal_2022_01/Article%2006%20%20NCAS%20Journal%20VOLUME%2012%20No%2001%20%20JANUARY-JUNE%202022.pdf" }
      ]
    },
    {
      id: "2021-02",
      volume: "Volume 11",
      number: "Number 2",
      year: "2021",
      period: "July-December 2021",
      fullJournal: "http://ncas.ac.lk/journal/Journal_2021_02/NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021.pdf",
      coverContents: "http://ncas.ac.lk/journal/Journal_2021_02/Cover%20Inner%20content%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021.pdf",
      articles: [
        { title: "Sadia Shepard's Memoir The Girl from Foreign: A Quest for Cultural Roots", author: "Ramesh Prasad Adhikary", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2001%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" },
        { title: "Indian Knowledge Tradition and its Contribution to Development of Medicinal Sciences", author: "Rewant Vikram Singh", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2002%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" },
        { title: "Anthropological reflections on water consumption patterns around CKDu in Ginnoruwa", author: "Upul Kumara Wickramasinghe", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2003%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" },
        { title: "Blended Method of Assessment: A Success Case study based on Engineering Faculty Students", author: "Pushpakumara, B.H.J / Faiz MMT Marikar", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2004%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" },
        { title: "Enduring death and bereavement: An Analysis of Sinhala Buddhist Funerary Practices", author: "Vishanka Gunawardana", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2005%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" },
        { title: "The Prospects of Translanguaging in the second language learning classroom", author: "Himesha Prabodini Alahakoon", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2006%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" },
        { title: "Review of Prevailing Trends in Online Learning amidst COVID-19 Pandemic", author: "Chandrasena, S. / Senevirathne, W.A.R.", pdf: "http://ncas.ac.lk/journal/journal_2021_02/Article%2007%20%20NCAS%20Journal%20VOLUME%2011%20NO.%202-%20JULY-DECEMBER%202021-2.pdf" }
      ]
    },
    {
      id: "2021-01",
      volume: "Volume 11",
      number: "Number 1",
      year: "2021",
      period: "January-June 2021",
      fullJournal: "http://ncas.ac.lk/journal/Journal_2021_01/NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf",
      coverContents: "http://ncas.ac.lk/journal/Journal_2021_01/Cover%20Inner%20pages%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf",
      articles: [
        { title: "Analysis on Money Laundering: 'National Security Saboteur'", author: "Patabendige, C.L.C.M.", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2001%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Applicability of the flipped classroom approach to teach English during post-pandemic Sri Lanka", author: "Dilusha Randi", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2002%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Impact of Contextual Determinants Towards the Disposition Bias of Individual Investors", author: "Buddhika, H.J.R. / Ediriwickrama, T.C.", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2003%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Online Feminism for an Inclusive Democracy in Sri Lanka", author: "Vibusha Kalanee Madanayake", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2004%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Representation of Language in Sri Lankan English Newspapers: Key Word Analysis", author: "Amarasinghe, H.A.S.L.", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2005%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Application of Digital Technology for Film Restoration", author: "Ravindra Priyantha Lal", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2006%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Challenges and Opportunities of adapting to mLearning During Lockdown", author: "Naleen, V.G.C.", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2007%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" },
        { title: "Hieroglyphics rituals performed at Pandam Dolaha (Twelve Torches) Shanthikarma", author: "Gunawardana, L.B.S. / Narangoda, P.", pdf: "http://ncas.ac.lk/journal/journal_2021_01/Article%2008%20%20NCAS%20Journal%20VOLUME%2011%20NO.%201-%20JANUARY-JUNE%202021.pdf" }
      ]
    },
    {
      id: "2020-02",
      volume: "Volume 10",
      number: "Number 2",
      year: "2020",
      fullJournal: "http://ncas.ac.lk/journal/journal_2020_2/",
      coverContents: "http://ncas.ac.lk/journal/journal_2020_2/content.pdf",
      articles: [
        { title: "Urban Consumers' Choice of Optimal and suboptimal products: Organic and Non-Organic Food Choices", author: "Premaratna, S.P. / Machado, L.J. / Gunawardena, M.N.", pdf: "http://ncas.ac.lk/journal/journal_2020_2/article%20_01_NCAS%20journal2020_2.pdf" },
        { title: "Construct of social capital on perceived decision making effectiveness in strategic supply chain decisions", author: "Wanodya, W.G.M.U. / Silva, G.R.P.", pdf: "http://ncas.ac.lk/journal/journal_2020_2/article%20_02_NCAS%20journal2020_2.pdf" },
        { title: "Trade elasticities and the marshall lerner Condition: Evidence from Sri Lanka", author: "Chandrarathne, S.G.U.S. / Jayasundara J.M.D.P. / Perera, M.S.S. / Navaratne, T.L.", pdf: "http://ncas.ac.lk/journal/journal_2020_2/article%20_03_NCAS%20journal2020_2.pdf" },
        { title: "The Impact of reference groups' Recommendations on Attitude towards Organic Foods", author: "Jayasinghe, J.A.S.C.", pdf: "http://ncas.ac.lk/journal/journal_2020_2/article%20_04_NCAS%20journal2020_2.pdf" },
        { title: "Paradigm Shifts in Demographic components in the new millennium: A case study of Sri Lanka", author: "W. Indralal De Silva / Ranjith de Silva / Goonatilaka W.S.M.", pdf: "http://ncas.ac.lk/journal/journal_2020_2/article%20_05_NCAS%20journal2020_2.pdf" }
      ]
    },
    {
      id: "2020-01",
      volume: "Volume 10",
      number: "Number 1",
      year: "2020",
      coverContents: "http://ncas.ac.lk/journal/journal_2020_1/content.pdf",
      articles: [
        { title: "Impact of Green Practices on Behavioral Intentions of Tourists: A Study in Sri Lankan Hotels", author: "Weerasekara, W.M.T.K. / Jayasinghe, J.A.S.C.", pdf: "http://ncas.ac.lk/journal/journal_2020_1/article%20_01_NCAS%20journal2020.pdf" },
        { title: "Government Budgeting and Consensual Spaces: The Case of Sri Lanka Railway", author: "Abeysinghe, A.A.C.", pdf: "http://ncas.ac.lk/journal/journal_2020_1/article%20_02_NCAS%20journal2020.pdf" },
        { title: "Impact of Japanese ODA Economic Growth and Development in Sri Lanka", author: "Dunusinghe, P.", pdf: "http://ncas.ac.lk/journal/journal_2020_1/article%20_03_NCAS%20journal2020.pdf" },
        { title: "Intellectual Property Rights for Tourism-Related Traditional Knowledge: A Case Study of Sri Lanka", author: "Punchihewa, N.S.", pdf: "http://ncas.ac.lk/journal/journal_2020_1/article%20_04_NCAS%20journal2020.pdf" },
        { title: "Impact of Market Orientation and Performance Measurement Orientation on SME Performance", author: "Abeygunasekera, A.W.J.C. / Thennakoon,T.M.N.D. / Madhuhansi, W.H.T. / Razik, R.", pdf: "http://ncas.ac.lk/journal/journal_2020_1/article%20_05_NCAS%20journal2020.pdf" },
        { title: "How does COVID-19 influence the MSME Sector in Sri Lanka?", author: "Indika, M.G.N. / Perera, H.A.P.K. / Abeysiriwardena, N.K.", pdf: "http://ncas.ac.lk/journal/journal_2020_1/article%20_06_NCAS%20journal2020.pdf" }
      ]
    },
    {
      id: "2019-01",
      volume: "Volume 9",
      number: "Number 1",
      year: "2019",
      articles: [
        { title: "The Impact of Financial Rewards on Work Motivation of Operational Level Employees", author: "M. A. M. Shibly / T. D. Weerasinghe" },
        { title: "Trends of Wetland Reclamation in the Colombo Metropolitan Region in Sri Lanka", author: "A.G. Amarasinghe" },
        { title: "Diversity of Amphibians in the eastern and Southern parts of the Sinharaja forest", author: "H.I.G.C. Kumara / V.A.M.P.K. Samarawikrama" },
        { title: "Sri Lanka-China Tourism Relations: An Analysis of Recent Trends", author: "N.P.R. Deyshappriya / A.A.K.A. Damanupola / M. M. T. D. M. Kumari" },
        { title: "The burial of the dead - A critical analysis of the use of poetic license", author: "R. A. P. K. Ranatunge / C Dilkushi Senaratne / E. A. G. Fonseka" },
        { title: "Waste Management in Sri Lanka: Challenges & Opportunities", author: "Mervin Lal Dharmasiri" }
      ]
    },
    {
      id: "2017-18",
      volume: "Volume 7 & 8",
      number: "Number 1 & 2",
      year: "2017-2018",
      articles: [
        { title: "GIS-Based Assessment of the Green Space Per Capita in the City of Galle, Sri Lanka", author: "D.B.C. Jayasinghe / G.PTS. Hemakumara / P Hewage" },
        { title: "The Socio-economic Impact of Contributory Pension Schemes on the Well-being of the Elderly", author: "W Indralal De Silva / WS.M. Goonatilaka" },
        { title: "Hybrid Identities to Overcome Language Anxiety: An Exploratory Study", author: "S. Sebastian Pereira / C. Dilkushi Senaratne" },
        { title: "Locational Suitability for Residential Development in the Kandy District", author: "G. Lakmali Pathirage / T.W.M.T.W. Bandara" },
        { title: "Nativizing Strategies in Mixed Contexts", author: "C. Dilkushi Senaratne" }
      ]
    },
    {
      id: "2015-16",
      volume: "Volume 5 & 6",
      number: "Number 1 & 2",
      year: "2015-2016",
      articles: [
        { title: "Are Workers' Remittance Flows a Source of Economic Development in Sri Lanka?", author: "Harsha Eranda Paranavithana" },
        { title: "Gender Disparities in Labour Force Participation in Sri Lanka", author: "I.R. Bandara / A.J. Satharasinghe" },
        { title: "Bridging the Gap: People Centered Policy Guidelines to Minimize Relocation Failures", author: "Nishara Fernando" },
        { title: "Factors Associated with Attitudes on Induced Abortion in Colombo City", author: "M. Suchira Suranga / Kalinga Tudor Silva / Lakshman Senanayake" },
        { title: "Impact of Social Welfare Strategies on the Traditional Family Systems", author: "W. Indralal De Silva / D.M.S.G Wjerathna / V.P.N Senadhi / I.S Samarakoon" }
      ]
    },
    {
      id: "2014-01",
      volume: "Volume 4",
      number: "Number 1 & 2",
      year: "2014",
      articles: [
        { title: "Discovering the Missing Links: Analysis of the Case Data on Attempted Suicide", author: "Upali Vidanapathirana / Anton Piyaratne / Harini Amarcsuiya / Pumima Perera" },
        { title: "Dynamics of International Labour Migration of Sri Lanka", author: "W. lndralal De Silva / Dinesha Siriwardhane" },
        { title: "Socio-economic Correlates of Exclusions from Compulsory Schooling in Sri Lanka", author: "Geetha Mayadunne" },
        { title: "The impact of Educational Assessment on National Educational Goals", author: "Lakshman Wedikkarage" },
        { title: "Role of Agriculture in improving the Food and Nutrition Security in Sri Lanka", author: "S. M. P. Senanayake / S. P. Premarathne" },
        { title: "Decolonization, Development and Disease: A social History of Malaria in Sri Lanka", author: "Jayantha Perera" }
      ]
    },
    {
      id: "2013-02",
      volume: "Volume 3",
      number: "Number 2",
      year: "2013",
      period: "July-December 2013",
      articles: [
        { title: "Changing causes and consequences of labour force participation trends among the elderly", author: "W. Indralal De Silva / D. N. Prasadi Fernando" },
        { title: "Some aspects of youth unemployment and poverty in the Southern province of Sri Lanka", author: "S. M. P. Senanayake" },
        { title: "Strong together: social networks of rural women in dry zone agriculture", author: "K. R. N. S. Rajamanthrie / M. R. Pinnawala" },
        { title: "Exchange rate, exchange rate volatility and foreign direct investment in Sri Lanka", author: "S. G. S. D. Jayasekara" },
        { title: "Overcoming discrimination: social responsibility towards people with mental illness", author: "Dilrukshi Abeysinghe" }
      ]
    },
    {
      id: "2013-01",
      volume: "Volume 3",
      number: "Number 1",
      year: "2013",
      period: "January-July 2013",
      articles: [
        { title: "Economic Growth, Income Distribution and Social Equity in Sri Lanka", author: "R. M. K. Ratnayake" },
        { title: "Sri Lankan Youth and their Exposure to Computer Literacy", author: "W. Indralal De Silva / Pamoda Kodikara / Ruwani Somarathne" },
        { title: "A Model to Develop Small and Medium Enterprise Sector in Sri Lanka", author: "S. P. Premaratna / S. Weerawansa / P. W. C. Wijegunawardana" },
        { title: "Problems Faced by Undergraduates in the Learning Environment", author: "M. A. N. Rasanjalee Perera" },
        { title: "Effect of Rasayana Therapy on Ageing: An Ayurvedic Perspective", author: "R D.H Kulatunga" }
      ]
    },
    {
      id: "2012-02",
      volume: "Volume 2",
      number: "Number 2",
      year: "2012",
      period: "July-December 2012",
      articles: [
        { title: "A Constructivist Approach towards Quality Development in Universities", author: "Chandra Gunawardena" },
        { title: "Feasibility of Introducing General English as a University Entry Requirement for Medicine", author: "N. R. De Silva / G.D.C. Priyabhashini / P. K. Godage / P. Premakumara / A. Pathmeswaran" },
        { title: "Force and Field Factors of Growth and Development: Evidence from International Experience", author: "H. N. Thenuwara" },
        { title: "Assessment of the Goodness of Measure of Union Commitment", author: "K. A. S. Dhammika / Fais Bin Ahamed / Thi Lip Sam" },
        { title: "Socio-Economic Characteristics of Factorial Influencing adaptation to Climate Change", author: "C. Daulagala / J. Weerahewa / B. Maramhe / G. Pushpakumara / P. Silva / R. Punyawardena" }
      ]
    },
    {
      id: "2012-01",
      volume: "Volume 2",
      number: "Number 1",
      year: "2012",
      period: "January-July 2012",
      articles: [
        { title: "The Age Structure Transition and the Demographic Dividend in Sri Lanka", author: "W. lndralal De Silva" },
        { title: "Economic Benefits and Options for Financing Higher Education in Sri Lanka", author: "Harsha Aturuoane" },
        { title: "Competition and Financial Sector Development in Sri Lanka", author: "W. M. Hemachandra" },
        { title: "A Study on the Children's Coping Strategies in the Aftermath of Tsunami: 2004", author: "G. R. K. Dissanayake" }
      ]
    },
    {
      id: "2011-02",
      volume: "Volume 1",
      number: "Number 2",
      year: "2011",
      period: "July-December 2011",
      articles: [
        { title: "The Potential of Using Mobile Money Systems for Enhancing Financial Inclusion", author: "Sirimevan S. Colombage" },
        { title: "Measuring Agricultural Productivity Using the Average Productivity Index (APl)", author: "Lal Mervin Dharmasiri" },
        { title: "A Discourse Analysis of Ethnic Conflict and Peace in the Editorials of English Newspapers", author: "Jeyaseelan Gnanaseelan" },
        { title: "The Concretization of Sinhalese into the Ethnic identity by Buddhist Pilgrimages", author: "R. G. D. Jayawardena" },
        { title: "Factors Contributing to the Success of Women Entrepreneurs in Sri Lanka", author: "Seuwandhi B.Ranasinghe" },
        { title: "Ensuring Harmony and Protection in Preschool Education", author: "Buddhiprabha D. D. Pathirana" }
      ]
    },
    {
      id: "2011-01",
      volume: "Volume 1",
      number: "Number 1",
      year: "2011",
      period: "January-July 2011",
      articles: [
        { title: "Corporate Governance Reforms in Sri Lanka", author: "Samanthi Senantne" },
        { title: "Colonialism and Problems of Language Policy in Sri Lanka", author: "Sandagomi Coperahewa" },
        { title: "Housing Market in Metropolitan Colombo: New Trends", author: "N. Chandrasiri Niriella" },
        { title: "Public Expenditure Reforms and Rural Poverty in Sri Lanka", author: "B. M. Sumanaratne" },
        { title: "The Effects of Public Welfare Policies on Rural Poverty in Sri Lanka", author: "W. M. Semasinghe" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {journalInfo.title}
            </h1>
            <p className="text-blue-200 text-sm mb-4">{journalInfo.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">ISSN: {journalInfo.issn}</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">ISSN Online: {journalInfo.issnOnline}</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="volumes" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="volumes">All Volumes</TabsTrigger>
              <TabsTrigger value="guidelines">Submission Guidelines</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="volumes" className="space-y-4">
              {volumes.map((volume) => (
                <Card key={volume.id}>
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleVolume(volume.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <CardTitle className="text-lg">
                            {volume.volume} / {volume.number}
                          </CardTitle>
                          <CardDescription>
                            {volume.period || volume.year} • {volume.articles.length} articles
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {volume.fullJournal && (
                          <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                            <Link href={volume.fullJournal} target="_blank">
                              <Download className="h-4 w-4 mr-1" />
                              Full PDF
                            </Link>
                          </Button>
                        )}
                        {expandedVolumes.includes(volume.id) ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedVolumes.includes(volume.id) && (
                    <CardContent className="pt-0 border-t">
                      <div className="pt-4 space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Contents</h4>
                        {volume.articles.map((article, idx) => (
                          <div key={idx} className="flex items-start justify-between gap-4 py-2 border-b last:border-0">
                            <div className="flex-1">
                              {'pdf' in article && article.pdf ? (
                                <Link href={article.pdf} target="_blank" className="font-medium text-primary hover:underline">
                                  {article.title}
                                </Link>
                              ) : (
                                <span className="font-medium">{article.title}</span>
                              )}
                              <p className="text-sm text-muted-foreground mt-1">{article.author}</p>
                            </div>
                            {'pdf' in article && article.pdf && (
                              <Button asChild variant="ghost" size="sm">
                                <Link href={article.pdf} target="_blank">
                                  <Download className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="guidelines">
              <Card>
                <CardHeader>
                  <CardTitle>Submission Guidelines</CardTitle>
                  <CardDescription>Guidelines for authors submitting manuscripts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Article Types</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Original Research Articles (5,000-8,000 words)</li>
                      <li>Review Articles (6,000-10,000 words)</li>
                      <li>Short Communications (2,000-3,000 words)</li>
                      <li>Book Reviews (1,000-2,000 words)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Formatting Requirements</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Manuscripts should be in Microsoft Word format</li>
                      <li>Use Times New Roman, 12pt font</li>
                      <li>Double-spaced with 1-inch margins</li>
                      <li>Include abstract (150-250 words) and keywords (5-7)</li>
                      <li>Follow APA 7th edition citation style</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Submission Process</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Submit manuscripts via email to editor@ncas.ac.lk</li>
                      <li>Include cover letter with author details</li>
                      <li>Ensure manuscript is not under consideration elsewhere</li>
                      <li>Sign copyright transfer agreement upon acceptance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Editorial Contact</CardTitle>
                  <CardDescription>Get in touch with the editorial team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Telephone</p>
                          <p className="text-muted-foreground">{journalInfo.contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Fax</p>
                          <p className="text-muted-foreground">{journalInfo.contact.fax}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">{journalInfo.contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Website</p>
                          <Link href="https://ncas.ac.lk" target="_blank" className="text-primary hover:underline">
                            {journalInfo.contact.website}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
