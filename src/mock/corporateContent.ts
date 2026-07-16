export interface CorporateCaseStudy {
  id: string
  title: string
  audience: string
  summary: string
  outcomes: string[]
}

export const corporateServices = [
  {
    title: 'Leadership and townhall events',
    description:
      'Executive-facing events designed for clarity, stakeholder confidence, and polished stagecraft.',
  },
  {
    title: 'Employee engagement experiences',
    description:
      'Office celebrations, annual meets, and internal culture moments planned to feel seamless and brand-aligned.',
  },
  {
    title: 'Launches and premium brand activations',
    description:
      'Structured event delivery for product launches, media moments, and curated guest experiences.',
  },
] as const

export const corporateIndustries = [
  'Technology and SaaS',
  'Startups and venture-backed teams',
  'Consulting and professional services',
  'Enterprise offices and regional leadership teams',
] as const

export const corporateCaseStudies: CorporateCaseStudy[] = [
  {
    id: 'case-leadership-summit',
    title: 'Leadership summit built for executive trust',
    audience: 'Enterprise leadership teams',
    summary: 'A structured summit experience focused on premium hospitality, stage confidence, and clear session flow.',
    outcomes: ['Executive-ready presentation', 'Guest confidence', 'Polished event operations'],
  },
  {
    id: 'case-townhall',
    title: 'Annual townhall with stronger employee engagement',
    audience: 'Scaling corporate teams',
    summary: 'A people-first event format balancing executive communication with a more memorable employee experience.',
    outcomes: ['Smooth AV delivery', 'Stronger employee participation', 'Brand-consistent environment'],
  },
  {
    id: 'case-launch',
    title: 'Launch event designed for visibility and precision',
    audience: 'Brands and growth-stage companies',
    summary: 'A premium launch environment built around reveal choreography, media-friendly visuals, and guest flow control.',
    outcomes: ['Sharable visual moments', 'VIP hospitality', 'Controlled execution timeline'],
  },
]
