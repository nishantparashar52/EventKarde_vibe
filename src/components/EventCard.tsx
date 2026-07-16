import { motion } from 'framer-motion'

import type { EventItem } from '../types/event'

import { Card } from './Card'

interface EventCardProps {
  event: EventItem
  compact?: boolean
}

function getCategoryLabel(category: EventItem['category']) {
  return category === 'wedding' ? 'Wedding Experience' : 'Corporate Event'
}

export function EventCard({ event, compact = false }: EventCardProps) {
  const cardDescriptionClassName = compact ? 'line-clamp-3 text-sm leading-7' : 'text-base leading-8'
  const serviceItems = compact ? event.services.slice(0, 2) : event.services

  if (compact) {
    return (
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}>
        <Card className="group editorial-card h-full rounded-[var(--radius-card)] p-0 transition-colors duration-300 hover:border-brand-border-strong">
          <div className="relative overflow-hidden border-b border-brand-border bg-linear-to-br from-brand-background-muted via-brand-background to-brand-background">
            <div className="absolute -top-8 right-4 h-24 w-24 rounded-full bg-brand-accent/18 blur-3xl transition-transform duration-300 group-hover:scale-125" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,199,104,0.22),transparent_48%)]" />

            <div className="relative space-y-5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-brand-border-strong bg-brand-background/72 px-3 py-1 text-[0.68rem] font-medium tracking-[0.24em] text-brand-accent uppercase backdrop-blur-md">
                  {getCategoryLabel(event.category)}
                </span>
                <span className="rounded-full border border-brand-border bg-brand-background/60 px-3 py-1 text-xs text-brand-text-secondary backdrop-blur-md">
                  {event.city}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-[0.24em] text-brand-text-muted uppercase">
                  {event.featured ? 'Featured event' : 'Recent event'}
                </p>
                <h3 className="text-xl font-semibold leading-tight text-brand-text-primary">
                  {event.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {serviceItems.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] tracking-[0.18em] text-brand-text-secondary uppercase backdrop-blur-md"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 p-5">
            <p className={cardDescriptionClassName + ' text-brand-text-secondary'}>{event.description}</p>

            {event.testimonial ? (
              <p className="border-l border-brand-border-strong pl-4 text-sm leading-7 text-brand-text-muted">
                “{event.testimonial}”
              </p>
            ) : null}
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}>
      <Card className="group editorial-card h-full rounded-[var(--radius-card)] p-0 transition-colors duration-300 hover:border-brand-border-strong">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-brand-border bg-linear-to-br from-brand-background-muted via-brand-background to-brand-background">
          <div className="absolute -top-8 right-4 h-24 w-24 rounded-full bg-brand-accent/18 blur-3xl transition-transform duration-300 group-hover:scale-125" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,199,104,0.26),transparent_48%)] transition-opacity duration-300 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.08)_5%,rgba(12,10,9,0.22)_48%,rgba(12,10,9,0.94)_100%)]" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5">
            <span className="rounded-full border border-brand-border-strong bg-brand-background/72 px-3 py-1 text-[0.68rem] font-medium tracking-[0.24em] text-brand-accent uppercase backdrop-blur-md">
              {getCategoryLabel(event.category)}
            </span>
            <span className="rounded-full border border-brand-border bg-brand-background/60 px-3 py-1 text-xs text-brand-text-secondary backdrop-blur-md">
              {event.city}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 space-y-4 p-5 md:p-6">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.26em] text-brand-text-muted uppercase">
                {event.featured ? 'Featured event' : 'Recent event'}
              </p>
              <h3 className="text-2xl font-semibold text-brand-text-primary md:text-[1.75rem]">
                {event.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceItems.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] tracking-[0.18em] text-brand-text-secondary uppercase backdrop-blur-md"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6">
          <p className={cardDescriptionClassName + ' text-brand-text-secondary'}>{event.description}</p>

          {event.testimonial ? (
            <p className="border-l border-brand-border-strong pl-4 text-sm leading-7 text-brand-text-muted">
              “{event.testimonial}”
            </p>
          ) : null}
        </div>
      </Card>
    </motion.div>
  )
}
