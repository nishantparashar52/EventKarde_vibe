import { describe, expect, it } from 'vitest'

import { eventService } from './eventService'

describe('eventService', () => {
  it('returns featured events from mock data', async () => {
    const featuredEvents = await eventService.getFeatured()

    expect(featuredEvents.length).toBeGreaterThan(0)
    expect(featuredEvents.every((event) => event.featured)).toBe(true)
  })

  it('returns category-specific events for home page showcases', async () => {
    const weddingEvents = await eventService.getByCategory('wedding')
    const corporateEvents = await eventService.getByCategory('corporate')

    expect(weddingEvents.length).toBeGreaterThan(1)
    expect(corporateEvents.length).toBeGreaterThan(1)
    expect(weddingEvents.every((event) => event.category === 'wedding')).toBe(true)
    expect(corporateEvents.every((event) => event.category === 'corporate')).toBe(true)
  })

  it('returns flattened gallery images for the gallery experience', async () => {
    const galleryImages = await eventService.getGalleryImages()
    const weddingGalleryImages = await eventService.getGalleryImages('wedding')

    expect(galleryImages.length).toBeGreaterThan(10)
    expect(galleryImages.every((image) => image.alt.length > 0)).toBe(true)
    expect(weddingGalleryImages.every((image) => image.category === 'wedding')).toBe(true)
  })
})
