import { describe, expect, it } from 'vitest'

import { primaryNavigationRoutes, routeMeta } from './routeMeta'
import { routePaths } from './routePaths'

describe('route configuration', () => {
  it('keeps primary navigation paths unique', () => {
    const paths = primaryNavigationRoutes.map((route) => route.path)
    const uniquePaths = new Set(paths)

    expect(uniquePaths.size).toBe(paths.length)
  })

  it('maps core pages to their expected human-readable URLs', () => {
    expect(routeMeta.home.path).toBe(routePaths.home)
    expect(routeMeta.wedding.path).toBe('/wedding')
    expect(routeMeta.corporateEvents.path).toBe('/corporate-events')
    expect(routeMeta.gallery.path).toBe('/gallery')
    expect(routeMeta.about.path).toBe('/about')
    expect(routeMeta.contact.path).toBe('/contact')
  })
})
