import { lazy } from 'react'

export const HomePage = lazy(async () => ({
  default: (await import('../pages/HomePage')).HomePage,
}))

export const WeddingPage = lazy(async () => ({
  default: (await import('../pages/WeddingPage')).WeddingPage,
}))

export const CorporateEventsPage = lazy(async () => ({
  default: (await import('../pages/CorporateEventsPage')).CorporateEventsPage,
}))

export const GalleryPage = lazy(async () => ({
  default: (await import('../pages/GalleryPage')).GalleryPage,
}))

export const AboutPage = lazy(async () => ({
  default: (await import('../pages/AboutPage')).AboutPage,
}))

export const ContactPage = lazy(async () => ({
  default: (await import('../pages/ContactPage')).ContactPage,
}))

export const NotFoundPage = lazy(async () => ({
  default: (await import('../pages/NotFoundPage')).NotFoundPage,
}))
