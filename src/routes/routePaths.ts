export const routePaths = {
  home: '/',
  wedding: '/wedding',
  corporateEvents: '/corporate-events',
  gallery: '/gallery',
  about: '/about',
  contact: '/contact',
} as const

export type AppRoutePath = (typeof routePaths)[keyof typeof routePaths]
