import {
  Button,
  CTASection,
  CaseStudyCard,
  EventCard,
  FeatureCard,
  Loader,
  Section,
  SectionTitle,
  TestimonialCard,
} from '../components'
import {
  useCorporateCaseStudies,
  useCorporateIndustries,
  useCorporateServices,
} from '../hooks/useCorporateContent'
import { useEventsByCategory } from '../hooks/useEvents'
import { useTestimonialsByRoles } from '../hooks/useTestimonials'
import { routePaths } from '../routes/routePaths'

const reviewRoles = ['HR Head', 'Office Admin Lead']

export function CorporateEventsPage() {
  const corporateEventsQuery = useEventsByCategory('corporate')
  const corporateServicesQuery = useCorporateServices()
  const corporateIndustriesQuery = useCorporateIndustries()
  const corporateCaseStudiesQuery = useCorporateCaseStudies()
  const corporateTestimonialsQuery = useTestimonialsByRoles(reviewRoles)

  const corporateEvents = corporateEventsQuery.data ?? []
  const corporateServices = corporateServicesQuery.data ?? []
  const corporateIndustries = corporateIndustriesQuery.data ?? []
  const corporateCaseStudies = corporateCaseStudiesQuery.data ?? []
  const corporateTestimonials = corporateTestimonialsQuery.data ?? []

  const isLoading =
    corporateEventsQuery.isLoading ||
    corporateServicesQuery.isLoading ||
    corporateIndustriesQuery.isLoading ||
    corporateCaseStudiesQuery.isLoading ||
    corporateTestimonialsQuery.isLoading

  return (
    <>
      <Section className="relative overflow-hidden pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <div className="space-y-8">
            <span className="eyebrow-label">Corporate Event Management · Delhi NCR</span>
            <div className="space-y-6">
              <h1 className="display-title max-w-5xl text-brand-text-primary">
                Corporate events designed for credibility, culture, and confident execution.
              </h1>
              <p className="body-large max-w-2xl">
                Event Karde helps HR teams, office admins, founders, and enterprise stakeholders plan premium corporate events across Delhi NCR with polished presentation, dependable coordination, and strong guest experience control.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" to={routePaths.contact}>
                Book Corporate Consultation
              </Button>
              <Button size="lg" to={routePaths.gallery} variant="secondary">
                View Event Gallery
              </Button>
            </div>
          </div>

          <div className="glass-panel rounded-[var(--radius-shell)] p-6 md:p-8">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.28em] text-brand-accent uppercase">
                What corporate clients value most
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <FeatureCard
                  title="Presentation-ready execution"
                  description="Corporate touchpoints are designed to feel credible, polished, and aligned with internal brand standards."
                />
                <FeatureCard
                  title="Reliable stakeholder coordination"
                  description="We simplify communication between internal teams, vendors, speakers, and venue operations."
                />
                <FeatureCard
                  title="Employee and guest experience"
                  description="The event flow is built to feel smooth, engaging, and comfortable for every attendee segment."
                />
                <FeatureCard
                  title="Structured delivery systems"
                  description="Timelines, execution checkpoints, and on-ground management reduce risk and last-minute confusion."
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {isLoading ? <Loader /> : null}

      <Section>
        <SectionTitle
          eyebrow="Previous Corporate Events"
          title="Recent business events that combine polish with operational control"
          description="Corporate buyers need proof of execution quality, not just visual aesthetics. These showcases highlight both."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {corporateEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Corporate Services"
          title="Support for internal events, launches, and leadership experiences"
          description="The corporate page is structured to reassure decision-makers that Event Karde can manage both the visual standard and the operational discipline their teams expect."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {corporateServices.map((service) => (
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
          eyebrow="Industries Served"
          title="Built for growing startups, established enterprises, and professional teams"
          description="A focused industry section helps future visitors identify fit quickly and supports stronger B2B trust signals."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {corporateIndustries.map((industry) => (
            <FeatureCard
              key={industry}
              title={industry}
              description="Tailored event planning support designed around the expectations, stakeholders, and presentation needs of this business environment."
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Case Studies"
          title="Structured outcomes that help corporate buyers evaluate capability"
          description="These case studies are intentionally framed around audience, execution quality, and event outcomes so they can evolve into deeper conversion assets later."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {corporateCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Client Reviews"
          title="Corporate social proof that strengthens business trust"
          description="For HR teams and office decision-makers, dependable reviews help reduce uncertainty and speed up the consultation decision."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {corporateTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      <Section>
        <CTASection
          title="Planning a corporate event in Delhi NCR?"
          description="Let’s create a business event experience that feels credible, organized, and aligned with your team’s standards from first brief to final execution."
          actions={
            <>
              <Button to={routePaths.contact}>Start your enquiry</Button>
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
