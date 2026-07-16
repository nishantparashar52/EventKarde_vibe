import type { Testimonial } from '../types/testimonial'

import { Card } from './Card'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full space-y-5">
      <div className="flex items-center gap-1 text-brand-accent" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <span key={`${testimonial.id}-${index}`} aria-hidden="true">
            ★
          </span>
        ))}
      </div>
      <blockquote className="text-lg leading-8 text-brand-text-secondary">
        “{testimonial.quote}”
      </blockquote>
      <footer>
        <p className="font-semibold text-brand-text-primary">{testimonial.name}</p>
        <p className="text-sm text-brand-text-muted">
          {[testimonial.role, testimonial.company].filter(Boolean).join(' · ')}
        </p>
      </footer>
    </Card>
  )
}
