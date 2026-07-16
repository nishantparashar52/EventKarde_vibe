import {
  Button,
  CTASection,
  EventCard,
  FeatureCard,
  Loader,
  PackageCard,
  Section,
  SectionTitle,
  TestimonialCard,
} from '../components'
import { useEventsByCategory } from '../hooks/useEvents'
import { useTestimonialsByRole } from '../hooks/useTestimonials'
import {
  useWeddingPackages,
  useWeddingProcess,
  useWeddingServices,
} from '../hooks/useWeddingContent'
import { routePaths } from '../routes/routePaths'

export function WeddingPage() {
  const weddingEventsQuery = useEventsByCategory('wedding')
  const weddingTestimonialsQuery = useTestimonialsByRole('Wedding Client')
  const weddingServicesQuery = useWeddingServices()
  const weddingPackagesQuery = useWeddingPackages()
  const weddingProcessQuery = useWeddingProcess()

  const weddingEvents = weddingEventsQuery.data ?? []
  const weddingTestimonials = weddingTestimonialsQuery.data ?? []
  const weddingServices = weddingServicesQuery.data ?? []
  const weddingPackages = weddingPackagesQuery.data ?? []
  const weddingProcess = weddingProcessQuery.data ?? []

  const isLoading =
    weddingEventsQuery.isLoading ||
    weddingTestimonialsQuery.isLoading ||
    weddingServicesQuery.isLoading ||
    weddingPackagesQuery.isLoading ||
    weddingProcessQuery.isLoading

  return (
    <>
      <Section className="relative overflow-hidden pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <div className="space-y-8">
            <span className="eyebrow-label">Luxury Wedding Planning · Delhi NCR</span>
            <div className="space-y-6">
              <h1 className="display-title max-w-5xl text-brand-text-primary">
                Wedding celebrations designed with elegance, calm coordination, and unforgettable guest experience.
              </h1>
              <p className="body-large max-w-2xl">
                Event Karde helps modern families plan weddings across Delhi, Gurgaon, and Noida with premium styling, thoughtful hospitality, and execution systems that reduce stress while elevating every moment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" to={routePaths.contact}>
                Book Wedding Consultation
              </Button>
              <Button size="lg" to={routePaths.gallery} variant="secondary">
                View Wedding Gallery
              </Button>
            </div>
          </div>

          <div className="glass-panel rounded-[var(--radius-shell)] p-6 md:p-8">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.28em] text-brand-accent uppercase">
                What wedding clients value most
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <FeatureCard
                  title="Calm planning journey"
                  description="We structure decisions, vendor coordination, and timelines so families feel guided instead of overwhelmed."
                />
                <FeatureCard
                  title="Elegant visual language"
                  description="Every detail is shaped to feel premium, cohesive, and beautiful in person as well as in photography."
                />
                <FeatureCard
                  title="Guest-first hospitality"
                  description="Thoughtful flow planning and comfort touchpoints help every celebration feel smooth and memorable."
                />
                <FeatureCard
                  title="Execution you can trust"
                  description="Our systems are built to reduce last-minute stress and keep wedding-day coordination polished."
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {isLoading ? <Loader /> : null}

      <Section>
        <SectionTitle
          eyebrow="Wedding Gallery Preview"
          title="Recent weddings that balance design-led storytelling with practical execution"
          description="These showcases help potential clients imagine the level of refinement, guest comfort, and planning control Event Karde brings to wedding celebrations."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {weddingEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Wedding Services"
          title="Structured support across styling, hospitality, and multi-event coordination"
          description="The wedding page is designed to reassure families that both visual elegance and operational clarity are handled with equal care."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {weddingServices.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Packages"
          title="Flexible planning formats for intimate, grand, and bespoke celebrations"
          description="These packages are positioning tools for lead generation today and can later evolve into detailed service tiers or custom quotation flows."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {weddingPackages.map((packageItem) => (
            <PackageCard key={packageItem.id} packageItem={packageItem} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Previous Weddings"
          title="A portfolio foundation that can grow into richer case studies over time"
          description="As content expands, these wedding stories can later support individual project pages, gallery filters, and stronger Delhi NCR SEO landing pages."
          actions={<Button to={routePaths.gallery} variant="ghost">Explore full gallery</Button>}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {weddingEvents.slice(0, 2).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Customer Reviews"
          title="Wedding testimonials that reinforce calm, trust, and premium delivery"
          description="For a wedding enquiry page, social proof needs to reduce anxiety and make the next consultation step feel safe."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {weddingTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Our Process"
          title="A simple planning journey that keeps every decision intentional"
          description="We use a clear process so wedding planning feels organized, collaborative, and beautifully executed from first consultation to final celebration."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {weddingProcess.map((step, index) => (
            <FeatureCard
              key={step}
              title={`Step ${index + 1}`}
              description={step}
            />
          ))}
        </div>
      </Section>

      <Section>
        <CTASection
          title="Planning a wedding in Delhi NCR and want it to feel premium from the start?"
          description="Let’s create a wedding experience shaped around your style, your guests, and a planning process that feels calm, clear, and beautifully managed."
          actions={
            <>
              <Button to={routePaths.contact}>Book consultation</Button>
              <Button href="tel:+919999999999" variant="secondary">
                Speak to our team
              </Button>
            </>
          }
        />
      </Section>
    </>
  )
}
