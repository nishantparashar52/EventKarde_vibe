import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Section, SectionTitle } from '../components'
import { contactSchema, type ContactFormValues } from '../schemas/contactSchema'
import { contactService } from '../services/contactService'

const eventTypeOptions = ['Wedding', 'Corporate Event', 'Engagement', 'Private Celebration'] as const
const budgetOptions = ['Below ₹5L', '₹5L - ₹8L', '₹8L - ₹15L', '₹15L+'] as const

const contactHighlights = [
  {
    title: 'Consultation-first approach',
    description: 'We treat every enquiry as a planning conversation, not a generic booking form submission.',
  },
  {
    title: 'Delhi NCR planning expertise',
    description: 'Venue familiarity across Delhi, Gurgaon, and Noida helps us guide faster and more confidently.',
  },
  {
    title: 'Premium execution focus',
    description: 'We are best suited for clients who value polish, thoughtful coordination, and elevated guest experience.',
  },
] as const

export function ContactPage() {
  const [submissionState, setSubmissionState] = useState<{
    enquiryId: string
    name: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      budget: '',
      location: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    const response = await contactService.submitEnquiry(values)

    setSubmissionState({
      enquiryId: response.enquiryId,
      name: values.name,
    })

    reset()
  }

  return (
    <>
      <Section className="relative overflow-hidden pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start">
          <div className="space-y-8">
            <span className="eyebrow-label">Book Consultation · Delhi NCR</span>
            <div className="space-y-6">
              <h1 className="display-title max-w-5xl text-brand-text-primary">
                Start your enquiry with a team built for premium event execution.
              </h1>
              <p className="body-large max-w-2xl">
                Share your event goals, expected scale, and preferred location. Event Karde will use this enquiry to prepare a more relevant consultation conversation for your wedding or corporate event.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactHighlights.map((item) => (
                <div key={item.title} className="editorial-card rounded-[1.25rem] p-4">
                  <p className="text-lg font-semibold text-brand-text-primary">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-brand-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="tel:+919999999999" variant="secondary">
                Call Event Karde
              </Button>
              <Button href="https://wa.me/919999999999" variant="secondary">
                WhatsApp Us
              </Button>
            </div>
          </div>

          <div className="glass-panel-strong rounded-[var(--radius-shell)] p-6 md:p-8">
            <SectionTitle
              eyebrow="Lead Form"
              title="Tell us about your event"
              description="The more context you share, the more tailored our first consultation can be."
            />

            {submissionState ? (
              <div className="editorial-card mt-8 rounded-[1.5rem] p-5">
                <p className="text-xs tracking-[0.26em] text-brand-accent uppercase">Enquiry submitted</p>
                <h2 className="mt-3 text-xl font-semibold text-brand-text-primary">
                  Thanks, {submissionState.name}.
                </h2>
                <p className="mt-2 text-sm leading-7 text-brand-text-secondary">
                  Your request has been recorded with reference <span className="text-brand-text-primary">{submissionState.enquiryId}</span>. Our team will review the details and reach out for the next step.
                </p>
              </div>
            ) : null}

            <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-brand-text-primary">Full name</span>
                  <input
                    {...register('name')}
                    className="w-full rounded-[1rem] border border-brand-border bg-white/5 px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                    placeholder="Your full name"
                  />
                  {errors.name ? <span className="text-sm text-red-300">{errors.name.message}</span> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-brand-text-primary">Phone number</span>
                  <input
                    {...register('phone')}
                    className="w-full rounded-[1rem] border border-brand-border bg-white/5 px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                    placeholder="+91 99999 99999"
                  />
                  {errors.phone ? <span className="text-sm text-red-300">{errors.phone.message}</span> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-brand-text-primary">Email address</span>
                  <input
                    {...register('email')}
                    className="w-full rounded-[1rem] border border-brand-border bg-white/5 px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                    placeholder="you@example.com"
                    type="email"
                  />
                  {errors.email ? <span className="text-sm text-red-300">{errors.email.message}</span> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-brand-text-primary">Event type</span>
                  <select
                    {...register('eventType')}
                    className="w-full rounded-[1rem] border border-brand-border bg-brand-background-muted px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                  >
                    <option value="">Select event type</option>
                    {eventTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.eventType ? <span className="text-sm text-red-300">{errors.eventType.message}</span> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-brand-text-primary">Event date</span>
                  <input
                    {...register('eventDate')}
                    className="w-full rounded-[1rem] border border-brand-border bg-white/5 px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                    type="date"
                  />
                  {errors.eventDate ? <span className="text-sm text-red-300">{errors.eventDate.message}</span> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-brand-text-primary">Estimated budget</span>
                  <select
                    {...register('budget')}
                    className="w-full rounded-[1rem] border border-brand-border bg-brand-background-muted px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget ? <span className="text-sm text-red-300">{errors.budget.message}</span> : null}
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-brand-text-primary">Preferred location</span>
                <input
                  {...register('location')}
                  className="w-full rounded-[1rem] border border-brand-border bg-white/5 px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                  placeholder="Delhi, Gurgaon, Noida, or venue preference"
                />
                {errors.location ? <span className="text-sm text-red-300">{errors.location.message}</span> : null}
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-brand-text-primary">Tell us about your event</span>
                <textarea
                  {...register('message')}
                  className="min-h-36 w-full rounded-[1rem] border border-brand-border bg-white/5 px-4 py-3 text-sm text-brand-text-primary outline-none transition focus:border-brand-border-strong"
                  placeholder="Share the event vision, guest count, priorities, or any planning challenges you want help with."
                />
                {errors.message ? <span className="text-sm text-red-300">{errors.message.message}</span> : null}
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Submitting enquiry...' : 'Submit enquiry'}
                </Button>
                <p className="text-sm leading-7 text-brand-text-muted">
                  By submitting this form, you’re requesting a consultation conversation with Event Karde.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
