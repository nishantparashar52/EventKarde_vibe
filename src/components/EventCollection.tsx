import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import type { EventItem } from '../types/event'

import { Button } from './Button'
import { EventCard } from './EventCard'
import { SectionTitle } from './SectionTitle'

interface CollectionOption<TOptionKey extends string> {
  key: TOptionKey
  label: string
}

interface EventCollectionProps<TOptionKey extends string> {
  eyebrow: string
  title: string
  description: string
  events: EventItem[]
  options?: CollectionOption<TOptionKey>[]
  activeOptionKey?: TOptionKey
  onOptionChange?: (optionKey: TOptionKey) => void
  actions?: ReactNode
  compactCards?: boolean
  rail?: boolean
}

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const railAnimation = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: easeOut,
      delay: index * 0.06,
    },
  }),
}

export function EventCollection<TOptionKey extends string>({
  eyebrow,
  title,
  description,
  events,
  options,
  activeOptionKey,
  onOptionChange,
  actions,
  compactCards = true,
  rail = false,
}: EventCollectionProps<TOptionKey>) {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={actions}
      />

      {options && options.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {options.map((option) => {
            const isActive = option.key === activeOptionKey

            return (
              <Button
                key={option.key}
                className={isActive ? 'border-brand-border-strong bg-white/10 text-brand-text-primary shadow-[var(--shadow-glow)]' : ''}
                onClick={() => onOptionChange?.(option.key)}
                size="sm"
                type="button"
                variant="secondary"
              >
                {option.label}
              </Button>
            )
          })}
        </div>
      ) : null}

      {rail ? (
        <div className="event-rail-wrapper">
          <div className="event-rail" role="list" aria-label={title}>
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-rail-item"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={railAnimation}
                role="listitem"
              >
                <EventCard compact={compactCards} event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={railAnimation}
            >
              <EventCard compact={compactCards} event={event} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
