export type EventCategory = 'wedding' | 'corporate'

export interface EventItem {
  id: string
  title: string
  slug: string
  category: EventCategory
  city: string
  coverImage: string
  galleryImages: string[]
  video?: string
  services: string[]
  description: string
  featured: boolean
  testimonial?: string
}

export interface GalleryImageItem {
  id: string
  eventId: string
  eventTitle: string
  eventSlug: string
  category: EventCategory
  city: string
  image: string
  alt: string
  featured: boolean
}
