export interface WeddingPackage {
  id: string
  name: string
  audience: string
  summary: string
  highlights: string[]
}

export const weddingServices = [
  {
    title: 'Wedding concept and styling',
    description:
      'Luxury décor direction, event moodboards, floral planning, and premium visual storytelling tailored to each celebration.',
  },
  {
    title: 'Guest experience and hospitality',
    description:
      'Comfort-first planning across guest flow, welcome moments, seating layouts, logistics, and family coordination.',
  },
  {
    title: 'Multi-function execution planning',
    description:
      'Structured planning for engagement, mehendi, sangeet, wedding, and reception events with one seamless experience system.',
  },
] as const

export const weddingPackages: WeddingPackage[] = [
  {
    id: 'pkg-signature',
    name: 'Signature Celebration',
    audience: 'Ideal for intimate premium weddings',
    summary: 'A refined wedding planning package for clients who want premium design quality with focused execution support.',
    highlights: ['Concept styling', 'Vendor coordination', 'Guest flow planning'],
  },
  {
    id: 'pkg-grand',
    name: 'Grand Wedding Experience',
    audience: 'Ideal for multi-event family celebrations',
    summary: 'A fuller wedding planning and experience package for celebrations that need visual polish, hospitality, and smooth multi-day execution.',
    highlights: ['Multi-function planning', 'Hospitality design', 'On-ground management'],
  },
  {
    id: 'pkg-bespoke',
    name: 'Bespoke Luxury Planning',
    audience: 'Ideal for highly personalized weddings',
    summary: 'A high-touch planning experience designed around custom concepts, premium detailing, and curated guest experiences.',
    highlights: ['Custom design language', 'Priority coordination', 'Premium guest experience'],
  },
]

export const weddingProcess = [
  'Discovery consultation to understand style, scale, and guest expectations',
  'Concept development with décor, hospitality, and event-flow planning',
  'Vendor coordination and milestone-based execution management',
  'On-ground wedding-day supervision for a calm and polished experience',
] as const
