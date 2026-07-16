import { useQuery } from '@tanstack/react-query'

import { testimonialService } from '../services/testimonialService'

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: () => testimonialService.getAll(),
  })
}

export function useTestimonialsByRole(role: string) {
  return useQuery({
    queryKey: ['testimonials', role],
    queryFn: async () => {
      const testimonials = await testimonialService.getAll()
      return testimonials.filter((testimonial) => testimonial.role === role)
    },
  })
}

export function useTestimonialsByRoles(roles: string[]) {
  return useQuery({
    queryKey: ['testimonials', ...roles],
    queryFn: async () => {
      const testimonials = await testimonialService.getAll()
      return testimonials.filter((testimonial) => roles.includes(testimonial.role))
    },
  })
}
