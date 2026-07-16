import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RouteErrorBoundary } from '../components/RouteErrorBoundary'
import { RouteFallback } from '../components/RouteFallback'
import { MainLayout } from '../layouts/MainLayout'
import {
  AboutPage,
  ContactPage,
  CorporateEventsPage,
  GalleryPage,
  HomePage,
  NotFoundPage,
  WeddingPage,
} from './lazyPages'
import { routePaths } from './routePaths'

function withSuspense(node: React.ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{node}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: withSuspense(<HomePage />),
      },
      {
        path: routePaths.wedding.slice(1),
        element: withSuspense(<WeddingPage />),
      },
      {
        path: routePaths.corporateEvents.slice(1),
        element: withSuspense(<CorporateEventsPage />),
      },
      {
        path: routePaths.gallery.slice(1),
        element: withSuspense(<GalleryPage />),
      },
      {
        path: routePaths.about.slice(1),
        element: withSuspense(<AboutPage />),
      },
      {
        path: routePaths.contact.slice(1),
        element: withSuspense(<ContactPage />),
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(<NotFoundPage />),
  },
])
