export type NcaLinkItem = {
  title: string
  href: string
  description: string
  localHref?: string
  isNew?: boolean
}

export type NcaLinkCategory = {
  key: string
  label: string
  description: string
  items: NcaLinkItem[]
}

const NCAS_LOCAL_OVERRIDES: Record<string, string> = {
  "/symposium2022/": "/information/symposium-2022",
  "/symposium2023/": "/information/symposium-2023",
  "/symposium2024/": "/information/symposium-2024",
  "/symposium2025/": "/information/symposium-2025",
  "/home-2/contact-us/": "/contact",
  "/publication/": "/publications",
  "/journal/": "/library/journal",
  "/cor/": "/about/council-regents",
  "/com/": "/about/council-management",
  "/grantees/": "/grants/grantees",
  "/qut/": "/grants/qut-scholarships",
}

export function mapNcasUrlToLocalHref(href: string): string | null {
  if (!href) return null

  if (href.startsWith("/")) return href

  try {
    const u = new URL(href)
    const host = u.hostname.toLowerCase()

    if (!host.includes("ncas.ac.lk")) {
      return null
    }

    const normalizedPath = u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`
    if (NCAS_LOCAL_OVERRIDES[normalizedPath]) {
      return NCAS_LOCAL_OVERRIDES[normalizedPath]
    }

    if (normalizedPath.startsWith("/wp-content/uploads/")) {
      const filename = normalizedPath.split("/").filter(Boolean).pop()
      return filename ? `/downloads/${filename}` : null
    }

    const localPath = u.pathname.replace(/\/$/, "") || "/"
    return localPath
  } catch {
    return null
  }
}

export const NCA_LINK_CATEGORIES: NcaLinkCategory[] = [
  {
    key: "academic",
    label: "Academic Programs",
    description: "Courses, training programs, and workshops.",
    items: [
      {
        title: "Postgraduate Programs",
        href: "https://ncas.ac.lk/pg/",
        description: "Advanced postgraduate study programs offered by NCAS.",
        localHref: "/programs/postgraduate",
      },
      {
        title: "Certificate Programs",
        href: "https://ncas.ac.lk/certificate/",
        description: "Certificate-level academic offerings.",
        localHref: "/programs/certificates",
      },
      {
        title: "SPSS Course",
        href: "https://ncas.ac.lk/spss/",
        description: "SPSS analysis and applied research training.",
        localHref: "/programs/certificates/spss",
      },
      {
        title: "Advanced Training Workshops",
        href: "https://ncas.ac.lk/atw/",
        description: "Skill-oriented workshops for academic research.",
        localHref: "/workshops",
      },
      {
        title: "AMOS Workshop",
        href: "https://ncas.ac.lk/amos/",
        description: "Structural equation modeling workshop details.",
        localHref: "/programs/workshops/structural-equation-modeling-amos",
      },
      {
        title: "NVivo Qualitative Research Workshop",
        href: "https://ncas.ac.lk/workshop-on-using-nvivo-for-qualitative-research/",
        description: "Hands-on workshop on NVivo and qualitative methods.",
        localHref: "/programs/workshops/nvivo-qualitative-research",
        isNew: true,
      },
    ],
  },
  {
    key: "admissions",
    label: "Admissions & Apply",
    description: "Funding calls, application pages, and scholarship opportunities.",
    items: [
      {
        title: "Register / Apply",
        href: "https://ncas.ac.lk/register/",
        description: "Primary registration and application access point.",
        localHref: "/register",
      },
      {
        title: "Application Status",
        href: "https://ncas.ac.lk/register/status/",
        description: "Track application progress and status updates.",
        localHref: "/register/status",
      },
      {
        title: "Partial Funding Call",
        href: "https://ncas.ac.lk/ncas-partial-funding-2023/",
        description: "Funding opportunity details for advanced studies.",
        localHref: "/grants/partial-funding",
        isNew: true,
      },
      {
        title: "QUT Scholarship Track",
        href: "https://ncas.ac.lk/qut/",
        description: "NCAS-QUT linked scholarship information.",
        localHref: "/grants/qut-scholarships",
      },
      {
        title: "PhD Opportunity - Szczecin University",
        href: "https://ncas.ac.lk/phd-opportunities-at-poland-doctoral-school-of-the-university-of-szczecin/",
        description: "International PhD opportunity announcement.",
        localHref: "/grants/other-scholarships",
        isNew: true,
      },
    ],
  },
  {
    key: "student-services",
    label: "Student Services",
    description: "Student-facing tools, webinars, and learning services.",
    items: [
      {
        title: "Webinar Resources",
        href: "https://ncas.ac.lk/webinar/",
        description: "Webinar content and event resources.",
        localHref: "/programs/guest-lectures",
      },
      {
        title: "EOW Portal",
        href: "https://ncas.ac.lk/eow/",
        description: "Student service portal entry point.",
      },
      {
        title: "ISW Portal",
        href: "https://ncas.ac.lk/isw/",
        description: "Academic portal and service page.",
      },
      {
        title: "NAT Portal",
        href: "https://ncas.ac.lk/nat/",
        description: "Additional student platform and notices.",
      },
      {
        title: "GL Service Page",
        href: "https://ncas.ac.lk/gl/",
        description: "Student guidance and linked services.",
      },
    ],
  },
  {
    key: "news-events",
    label: "News & Announcements",
    description: "Symposiums, announcements, and event galleries.",
    items: [
      {
        title: "Symposium 2023",
        href: "https://ncas.ac.lk/symposium2023/",
        description: "Official symposium landing page and materials.",
        localHref: "/information/symposium-2023",
      },
      {
        title: "Symposium 2022",
        href: "https://ncas.ac.lk/symposium2022/",
        description: "Official symposium records and highlights.",
        localHref: "/information/symposium-2022",
      },
      {
        title: "IRSSSH 2022 Photo Gallery",
        href: "https://ncas.ac.lk/ncas-4th-international-research-symposium-2022-photos/",
        description: "Event photo archive.",
        localHref: "/information/gallery/all/ncas-4th-international-research-symposium-2022-photos",
      },
      {
        title: "Centenary Celebrations Gallery",
        href: "https://ncas.ac.lk/centenary-year-celebrations-of-humanities-and-social-sciences-photos/",
        description: "Centenary event photos and highlights.",
        localHref: "/information/gallery/all/centenary-year-celebrations-of-humanities-and-social-sciences-photos",
        isNew: true,
      },
      {
        title: "Council Event Notice",
        href: "https://ncas.ac.lk/20th-council-of-regent-took-place-at-the-3rd-floor-board-room-of-the-ministry-of-education/",
        description: "Council event notice and media.",
        localHref: "/information/gallery/all/20th-council-of-regent-took-place-at-the-3rd-floor-board-room-of-the-ministry-of-education",
      },
    ],
  },
  {
    key: "resources",
    label: "Downloads & Resources",
    description: "Library resources, publications, and proceedings.",
    items: [
      {
        title: "NCAS Library",
        href: "https://ncas.ac.lk/library/",
        description: "Library resources and research references.",
        localHref: "/library",
      },
      {
        title: "NCAS Journal",
        href: "https://ncas.ac.lk/journal/",
        description: "Journal pages and publication access.",
        localHref: "/library/journal",
      },
      {
        title: "Publication Archive",
        href: "https://ncas.ac.lk/publication/",
        description: "Publication and document archive.",
        localHref: "/publications",
      },
      {
        title: "Symposium Proceedings 2022",
        href: "https://ncas.ac.lk/symposium-proceedings-2022/",
        description: "Proceedings and conference papers.",
        localHref: "/library/proceedings/2022",
      },
      {
        title: "Scholarship PDF Resource",
        href: "https://ncas.ac.lk/wp-content/uploads/2014/10/Embassy_Turkey-20230112_0024.pdf",
        description: "Direct downloadable scholarship document.",
        localHref: "/downloads/Embassy_Turkey-20230112_0024.pdf",
      },
    ],
  },
  {
    key: "about-contact",
    label: "About & Contact",
    description: "Institutional pages, governance, and contact points.",
    items: [
      {
        title: "Council of Regents",
        href: "https://ncas.ac.lk/cor/",
        description: "Governance and council information.",
        localHref: "/about/council-regents",
      },
      {
        title: "Council of Management",
        href: "https://ncas.ac.lk/com/",
        description: "Management body and mandates.",
        localHref: "/about/council-management",
      },
      {
        title: "Previous Directors",
        href: "https://ncas.ac.lk/previous-directors/",
        description: "Leadership history and profiles.",
        localHref: "/about/previous-directors",
      },
      {
        title: "Secretariat",
        href: "https://ncas.ac.lk/secretariat/",
        description: "Administrative and secretariat information.",
        localHref: "/about/secretariat",
      },
      {
        title: "Contact Us",
        href: "https://ncas.ac.lk/home-2/contact-us/",
        description: "Direct contact information and details.",
        localHref: "/contact",
      },
      {
        title: "International Collaborations",
        href: "https://ncas.ac.lk/international/",
        description: "Partner universities and global collaborations.",
        localHref: "/international",
      },
    ],
  },
]

export const NCA_QUICK_ACCESS: NcaLinkItem[] = [
  {
    title: "Apply / Register",
    href: "https://ncas.ac.lk/register/",
    description: "Start your application quickly.",
    localHref: "/register",
    isNew: true,
  },
  {
    title: "Programs Overview",
    href: "https://ncas.ac.lk/pg/",
    description: "Top programs and entry options.",
    localHref: "/programs",
  },
  {
    title: "Latest Symposium Photos",
    href: "https://ncas.ac.lk/ncas-4th-international-research-symposium-2022-photos/",
    description: "Fast access to gallery highlights.",
    localHref: "/information/gallery/all",
    isNew: true,
  },
  {
    title: "Research Grants",
    href: "https://ncas.ac.lk/grantees/",
    description: "Funding and grantee information.",
    localHref: "/grants",
  },
  {
    title: "Library & Resources",
    href: "https://ncas.ac.lk/library/",
    description: "Publications, journal, and repository.",
    localHref: "/library",
  },
  {
    title: "Contact NCAS",
    href: "https://ncas.ac.lk/home-2/contact-us/",
    description: "Get in touch with NCAS.",
    localHref: "/contact",
  },
]

export const NCA_FALLBACK_UPDATES = [
  {
    title: "NCAS Partial Funding 2023",
    description: "Funding support opportunity for advanced studies.",
    href: "https://ncas.ac.lk/ncas-partial-funding-2023/",
    date: "2023-01-01",
  },
  {
    title: "Inauguration of NCAS Seminars on Sri Lankan Studies 2023",
    description: "Seminar launch and institutional update.",
    href: "https://ncas.ac.lk/inauguration-of-the-ncas-seminars-on-sri-lankan-studies-2023/",
    date: "2023-01-01",
  },
  {
    title: "Guest Lecture on fsQCA in Social Science Research",
    description: "Special guest lecture and method training update.",
    href: "https://ncas.ac.lk/guest-lecturer-on-the-applications-of-fuzzy-set-qualitative-comparative-analysis-in-social-science-research/",
    date: "2023-01-01",
  },
  {
    title: "Advanced Certificate Course on Qualitative Research",
    description: "Newly listed certificate-level training course.",
    href: "https://ncas.ac.lk/advanced-certificate-course-on-qualitative-research-in-the-field-of-humanities-and-social-sciences/",
    date: "2023-01-01",
  },
]