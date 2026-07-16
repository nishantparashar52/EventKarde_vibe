import { describe, expect, it } from 'vitest'

import { corporateContentService } from './corporateContentService'

describe('corporateContentService', () => {
  it('returns enough content for the corporate landing page sections', async () => {
    const [services, industries, caseStudies] = await Promise.all([
      corporateContentService.getServices(),
      corporateContentService.getIndustries(),
      corporateContentService.getCaseStudies(),
    ])

    expect(services.length).toBeGreaterThan(2)
    expect(industries.length).toBeGreaterThan(3)
    expect(caseStudies.length).toBeGreaterThan(2)
  })
})
