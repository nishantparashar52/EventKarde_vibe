import { testimonials } from '../mock/testimonials'
import type { Testimonial } from '../types/testimonial'

const wait = async (duration = 120) => new Promise((resolve) => setTimeout(resolve, duration))

export const testimonialService = {
  async getAll(): Promise<Testimonial[]> {
    await wait()
    return testimonials
  },
}
