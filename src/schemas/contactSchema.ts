import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Please enter a valid phone number.')
    .regex(/^[0-9+\-()\s]{10,}$/, 'Please enter a valid phone number.'),
  email: z.email('Please enter a valid email address.'),
  eventType: z.string().trim().min(1, 'Please select an event type.'),
  eventDate: z.string().trim().min(1, 'Please select an event date.'),
  budget: z.string().trim().min(1, 'Please choose an estimated budget.'),
  location: z.string().trim().min(2, 'Please enter the preferred event location.'),
  message: z.string().trim().min(20, 'Please share a few event details so we can help properly.'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
