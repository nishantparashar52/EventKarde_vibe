import type { ContactFormValues } from '../schemas/contactSchema'

export type ContactRequest = ContactFormValues

const wait = async (duration = 240) => new Promise((resolve) => setTimeout(resolve, duration))

export const contactService = {
  async submitEnquiry(payload: ContactRequest) {
    await wait()

    return {
      success: true,
      enquiryId: `enquiry-${Date.now()}`,
      payload,
    }
  },
}
