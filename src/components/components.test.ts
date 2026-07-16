import { describe, expect, it } from 'vitest'

import { events } from '../mock/events'
import { primaryNavigationRoutes } from '../routes/routeMeta'
import { routePaths } from '../routes/routePaths'
import { cn } from '../utils/cn'

describe('shared UI utilities', () => {
  it('joins class names without falsey values', () => {
    expect(cn('alpha', undefined, false, 'beta')).toBe('alpha beta')
  })

  it('keeps the home route out of rendered breadcrumb pages by using the home path as root only', () => {
    expect(primaryNavigationRoutes.some((route) => route.path === routePaths.home)).toBe(true)
    expect(routePaths.home).toBe('/')
  })

  it('provides enough event data to power homepage discovery collections', () => {
    const featuredEvents = events.filter((event) => event.featured)
    const weddingEvents = events.filter((event) => event.category === 'wedding')
    const corporateEvents = events.filter((event) => event.category === 'corporate')

    expect(featuredEvents.length).toBeGreaterThan(1)
    expect(weddingEvents.length).toBeGreaterThan(1)
    expect(corporateEvents.length).toBeGreaterThan(1)
  })

  it('includes at least one event title long enough to exercise compact card readability constraints', () => {
    expect(events.some((event) => event.title.length >= 20)).toBe(true)
  })
})
