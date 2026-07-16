import { events } from '../mock/events'
import type { EventCategory, EventItem, GalleryImageItem } from '../types/event'

const wait = async (duration = 120) => new Promise((resolve) => setTimeout(resolve, duration))

function createGalleryImages(eventItems: EventItem[]): GalleryImageItem[] {
  return eventItems.flatMap((event) =>
    [event.coverImage, ...event.galleryImages].map((image, index) => ({
      id: `${event.id}-image-${index}`,
      eventId: event.id,
      eventTitle: event.title,
      eventSlug: event.slug,
      category: event.category,
      city: event.city,
      image,
      alt: `${event.title} ${index === 0 ? 'cover' : `gallery image ${index}`} in ${event.city}`,
      featured: event.featured,
    })),
  )
}

export const eventService = {
  async getAll(): Promise<EventItem[]> {
    await wait()
    return events
  },

  async getFeatured(): Promise<EventItem[]> {
    await wait()
    return events.filter((event) => event.featured)
  },

  async getByCategory(category: EventCategory): Promise<EventItem[]> {
    await wait()
    return events.filter((event) => event.category === category)
  },

  async getGalleryImages(category?: EventCategory | 'all'): Promise<GalleryImageItem[]> {
    await wait()

    const filteredEvents =
      category && category !== 'all'
        ? events.filter((event) => event.category === category)
        : events

    return createGalleryImages(filteredEvents)
  },
}
