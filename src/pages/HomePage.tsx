import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import {
  Button,
  CTASection,
  EventCollection,
  FeatureCard,
  Loader,
  Section,
  SectionTitle,
  StatCard,
  TestimonialCard,
} from '../components'
import { useEventsByCategory, useRecentEvents } from '../hooks/useEvents'
import { useTestimonials } from '../hooks/useTestimonials'
import { routePaths } from '../routes/routePaths'

const services = [
  {
    title: 'Wedding planning & décor',
    description:
      'Luxury wedding concepts, venue styling, guest flow, and premium hospitality managed with care across Delhi NCR.',
  },
  {
    title: 'Corporate event production',
    description:
      'Leadership summits, annual celebrations, office events, launches, and branded experiences built for credibility and impact.',
  },
  {
    title: 'End-to-end vendor coordination',
    description:
      'Trusted execution across décor, production, logistics, hospitality, and on-ground coordination without fragmented communication.',
  },
] as const

const differentiators = [
  {
    title: 'Premium positioning with practical execution',
    description:
      'Elegant visual storytelling is matched by detailed planning, guest comfort, and calm event-day coordination.',
  },
  {
    title: 'Built for high-trust referrals',
    description:
      'Our experiences are designed to create confidence among families, HR teams, and leadership stakeholders.',
  },
  {
    title: 'Scalable foundation for future growth',
    description:
      'The same structured planning approach works across intimate weddings, corporate gatherings, launches, and signature celebrations.',
  },
] as const

const stats = [
  {
    value: 'Delhi NCR',
    label: 'Focused market expertise',
    description: 'We are intentionally focused on Delhi, Gurgaon, and Noida to deliver stronger local coordination and venue familiarity.',
  },
  {
    value: 'Premium',
    label: 'Brand-led experience design',
    description: 'Every touchpoint is crafted to feel elegant, polished, and aligned with the expectations of modern premium clients.',
  },
  {
    value: 'End-to-end',
    label: 'Single planning partner',
    description: 'From concept to guest experience, we reduce coordination complexity and create one clear execution system.',
  },
] as const

const browseOptions = [
  { key: 'all', label: 'All events' },
  { key: 'wedding', label: 'Wedding highlights' },
  { key: 'corporate', label: 'Corporate showcases' },
  { key: 'featured', label: 'Featured picks' },
] as const

const heroSignals = [
  'Lead-generation focused event discovery',
  'Luxury wedding and corporate event positioning',
  'Delhi NCR expertise with premium coordination',
] as const

const categoryHighlights = [
  {
    title: 'Wedding weekends',
    description: 'Immersive wedding celebrations with décor, hospitality, and guest flow designed to feel premium end to end.',
    actionLabel: 'See wedding events',
    actionTo: routePaths.wedding,
  },
  {
    title: 'Corporate experiences',
    description: 'Townhalls, launches, leadership gatherings, and employee experiences created with strong presentation control.',
    actionLabel: 'See corporate events',
    actionTo: routePaths.corporateEvents,
  },
  {
    title: 'Recent event stories',
    description: 'A growing portfolio of polished event executions that will later support deeper case studies and SEO landing pages.',
    actionLabel: 'Open gallery',
    actionTo: routePaths.gallery,
  },
] as const

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
}

export function HomePage() {
  const [activeBrowseOption, setActiveBrowseOption] = useState<(typeof browseOptions)[number]['key']>('all')

  const weddingEventsQuery = useEventsByCategory('wedding')
  const corporateEventsQuery = useEventsByCategory('corporate')
  const recentEventsQuery = useRecentEvents()
  const testimonialsQuery = useTestimonials()

  const weddingEvents = (weddingEventsQuery.data ?? []).slice(0, 4)
  const corporateEvents = (corporateEventsQuery.data ?? []).slice(0, 4)
  const recentEvents = (recentEventsQuery.data ?? []).slice(0, 6)
  const testimonials = (testimonialsQuery.data ?? []).slice(0, 3)

  const featuredCollection = useMemo(() => {
    if (activeBrowseOption === 'wedding') {
      return weddingEvents
    }

    if (activeBrowseOption === 'corporate') {
      return corporateEvents
    }

    if (activeBrowseOption === 'featured') {
      return recentEvents.filter((event) => event.featured).slice(0, 4)
    }

    return recentEvents.slice(0, 4)
  }, [activeBrowseOption, corporateEvents, recentEvents, weddingEvents])

  const isLoading =
    weddingEventsQuery.isLoading ||
    corporateEventsQuery.isLoading ||
    recentEventsQuery.isLoading ||
    testimonialsQuery.isLoading

  return (
    <>
      <Section className="relative overflow-hidden pt-10 md:pt-16">
        <motion.div
          className="hero-orb top-8 left-0 h-32 w-32 bg-brand-accent/18"
          animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.88, 0.65] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: easeOut }}
        />
        <motion.div
          className="hero-orb top-32 right-12 h-40 w-40 bg-amber-200/12"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.62, 0.4] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: easeOut }}
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="eyebrow-label">Premium Event Discovery · Delhi NCR</span>
            <div className="space-y-6">
              <h1 className="display-title max-w-5xl text-brand-text-primary">
                Browse memorable weddings and corporate events with a premium planner’s eye.
              </h1>
              <p className="body-large max-w-2xl">
                Event Karde combines elegant event styling with dependable execution so clients can quickly explore what we create, understand our standards, and move into a confident consultation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {browseOptions.map((option) => {
                const isActive = option.key === activeBrowseOption

                return (
                  <Button
                    key={option.key}
                    className={isActive ? 'border-brand-border-strong bg-white/10 text-brand-text-primary shadow-[var(--shadow-glow)]' : ''}
                    onClick={() => setActiveBrowseOption(option.key)}
                    size="sm"
                    type="button"
                    variant="secondary"
                  >
                    {option.label}
                  </Button>
                )
              })}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal, index) => (
                <motion.div
                  key={signal}
                  className="editorial-card rounded-[1.25rem] px-4 py-4 text-sm leading-6 text-brand-text-secondary"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + index * 0.08, ease: easeOut }}
                >
                  {signal}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" to={routePaths.contact}>
                Book Consultation
              </Button>
              <Button size="lg" to={routePaths.gallery} variant="secondary">
                Explore All Events
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel-strong relative overflow-hidden rounded-[var(--radius-shell)] p-5 md:p-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.12 }}
          >
            <div className="absolute top-0 right-0 h-40 w-40 translate-x-8 -translate-y-8 rounded-full bg-brand-accent/10 blur-3xl" />

            <div className="relative mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.28em] text-brand-accent uppercase">Trending now</p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-text-primary">Quick event browse</h2>
              </div>
              <Button to={routePaths.gallery} variant="ghost">
                View all
              </Button>
            </div>

            <div className="relative grid gap-4">
              {featuredCollection.map((event, index) => (
                <motion.article
                  key={event.id}
                  className="editorial-card rounded-[1.4rem] p-4 transition-transform duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.34, delay: 0.12 + index * 0.06, ease: easeOut }}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-brand-border-strong bg-brand-background/70 px-3 py-1 text-[0.68rem] tracking-[0.24em] text-brand-accent uppercase">
                      {index === 0 ? 'Spotlight pick' : 'Curated event'}
                    </span>
                    <span className="rounded-full border border-brand-border px-3 py-1 text-xs text-brand-text-muted">
                      {event.city}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs tracking-[0.22em] text-brand-text-muted uppercase">{event.category}</p>
                    <h3 className="text-lg font-semibold text-brand-text-primary">{event.title}</h3>
                    <p className="text-sm leading-7 text-brand-text-secondary">{event.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <EventCollection
          eyebrow="Explore Events"
          title="A homepage built for discovery, not just scrolling"
          description="Inspired by modern event-browsing patterns, this section helps visitors quickly move between wedding inspiration, corporate showcases, and featured work without losing the premium lead-generation focus."
          events={featuredCollection}
          options={browseOptions.map((option) => ({ key: option.key, label: option.label }))}
          activeOptionKey={activeBrowseOption}
          onOptionChange={setActiveBrowseOption}
          actions={<Button to={routePaths.gallery} variant="ghost">Browse the full gallery</Button>}
          rail
        />
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Browse by Intent"
          title="Clear paths for families, founders, and workplace teams"
          description="A more intuitive homepage should help visitors identify the kind of event experience they need in seconds, not force them to decode the whole site first."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categoryHighlights.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={<span className="text-lg font-semibold">→</span>}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categoryHighlights.map((item) => (
            <Button key={item.title} to={item.actionTo} variant="secondary">
              {item.actionLabel}
            </Button>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Services"
          title="Lead-generation focused experiences for premium event audiences"
          description="The homepage still needs to communicate service capability clearly, but now it sits inside a more engaging event-discovery flow."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              description={service.description}
              title={service.title}
            />
          ))}
        </div>
      </Section>

      {isLoading ? <Loader /> : null}

      <Section>
        <EventCollection
          eyebrow="Wedding Highlights"
          title="Wedding experiences that feel refined, personal, and instantly aspirational"
          description="This collection surfaces elegant wedding work in a more browsable, image-led format so visitors feel inspiration before they read deeper service details."
          events={weddingEvents}
          actions={<Button to={routePaths.wedding} variant="ghost">Explore wedding services</Button>}
          rail
        />
      </Section>

      <Section>
        <EventCollection
          eyebrow="Corporate Highlights"
          title="Corporate showcases designed for credibility, culture, and stakeholder confidence"
          description="Business buyers need fast proof of execution quality. This collection brings that proof forward in a format that feels easier to scan and compare."
          events={corporateEvents}
          actions={<Button to={routePaths.corporateEvents} variant="ghost">Explore corporate events</Button>}
          rail
        />
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Why Event Karde"
          title="A premium event partner built for presentation quality and dependable execution"
          description="The browsing experience is more dynamic now, but the core trust signals still matter for conversion and premium positioning."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item) => (
            <FeatureCard
              key={item.title}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Proof Points"
          title="Operational confidence paired with polished event storytelling"
          description="These trust markers anchor the more discovery-led homepage with strong signals around market focus, premium positioning, and execution discipline."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              description={stat.description}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Testimonials"
          title="Client confidence shaped by smooth planning and elevated experiences"
          description="Social proof remains one of the strongest conversion tools for premium wedding and corporate event enquiries."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      <Section>
        <CTASection
          title="Planning a wedding or corporate event in Delhi NCR?"
          description="Let’s build an event experience that feels elegant, trustworthy, and operationally seamless from planning to execution."
          actions={
            <>
              <Button to={routePaths.contact}>Start your enquiry</Button>
              <Button href="tel:+919999999999" variant="secondary">
                Call Event Karde
              </Button>
            </>
          }
        />
      </Section>
    </>
  )
}
