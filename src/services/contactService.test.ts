import { describe, expect, it } from 'vitest'

import { contactService } from './contactService'

describe('contactService', () => {
  it('returns a successful enquiry response for valid lead payloads', async () => {
    const response = await contactService.submitEnquiry({
      name: 'Nishant Gupta',
      phone: '+91 99999 99999',
      email: 'nishant@example.com',
      eventType: 'Wedding',
      eventDate: '2026-12-12',
      budget: '₹8L - ₹15L',
      location: 'Gurgaon',
      message: 'We are planning a premium wedding and would like decor, hospitality, and production support.',
    })

    expect(response.success).toBe(true)
    expect(response.enquiryId.startsWith('enquiry-')).toBe(true)
    expect(response.payload.eventType).toBe('Wedding')
  })
})
