import { describe, expect, it } from 'vitest'

import { testimonialService } from './testimonialService'

describe('testimonialService', () => {
  it('returns enough testimonials for the home page social-proof section', async () => {
    const testimonialItems = await testimonialService.getAll()

    expect(testimonialItems.length).toBeGreaterThan(2)
    expect(testimonialItems.every((testimonial) => testimonial.rating === 5)).toBe(true)
  })

  it('includes wedding-specific testimonials for the wedding landing page', async () => {
    const testimonialItems = await testimonialService.getAll()
    const weddingTestimonials = testimonialItems.filter(
      (testimonial) => testimonial.role === 'Wedding Client',
    )

    expect(weddingTestimonials.length).toBeGreaterThan(1)
  })

  it('includes corporate-facing testimonials for the corporate landing page', async () => {
    const testimonialItems = await testimonialService.getAll()
    const corporateTestimonials = testimonialItems.filter((testimonial) =>
      ['HR Head', 'Office Admin Lead'].includes(testimonial.role),
    )

    expect(corporateTestimonials.length).toBeGreaterThan(1)
  })
})
