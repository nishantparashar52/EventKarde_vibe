import { describe, expect, it } from 'vitest'

import { weddingContentService } from './weddingContentService'

describe('weddingContentService', () => {
  it('returns enough package and process content for the wedding landing page', async () => {
    const [services, packages, process] = await Promise.all([
      weddingContentService.getServices(),
      weddingContentService.getPackages(),
      weddingContentService.getProcess(),
    ])

    expect(services.length).toBeGreaterThan(2)
    expect(packages.length).toBeGreaterThan(2)
    expect(process.length).toBeGreaterThan(3)
  })
})
