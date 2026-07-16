import { describe, expect, it } from 'vitest'

import { theme } from './theme'

describe('theme', () => {
  it('exposes the premium design tokens needed by the UI system', () => {
    expect(theme.colors.background).toBeTruthy()
    expect(theme.colors.accent).toBeTruthy()
    expect(theme.spacing.section).toContain('clamp')
    expect(theme.typography.display).toContain('clamp')
    expect(theme.radii.pill).toBe('999px')
  })
})
