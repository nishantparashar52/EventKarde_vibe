import { routePaths, type AppRoutePath } from './routePaths'

export interface RouteMeta {
  label: string
  path: AppRoutePath
  title: string
  description: string
  includeInPrimaryNavigation?: boolean
}

export const routeMeta = {
  home: {
    label: 'Home',
    path: routePaths.home,
    title: 'Premium Event Management in Delhi NCR | Event Karde',
    description: 'Event Karde creates premium wedding and corporate event experiences across Delhi NCR with elegant execution and trusted planning.',
    includeInPrimaryNavigation: true,
  },
  wedding: {
    label: 'Wedding',
    path: routePaths.wedding,
    title: 'Luxury Wedding Planner in Delhi NCR | Event Karde',
    description: 'Discover premium wedding planning, décor, hospitality, and curated celebration experiences across Delhi NCR.',
    includeInPrimaryNavigation: true,
  },
  corporateEvents: {
    label: 'Corporate Events',
    path: routePaths.corporateEvents,
    title: 'Corporate Event Management Delhi NCR | Event Karde',
    description: 'Premium corporate event planning for leadership summits, office celebrations, brand activations, and curated business experiences.',
    includeInPrimaryNavigation: true,
  },
  gallery: {
    label: 'Gallery',
    path: routePaths.gallery,
    title: 'Event Gallery | Event Karde',
    description: 'Browse premium wedding and corporate event visuals from curated celebrations delivered across Delhi NCR.',
    includeInPrimaryNavigation: true,
  },
  about: {
    label: 'About',
    path: routePaths.about,
    title: 'About Event Karde | Premium Event Company',
    description: 'Learn about Event Karde, our planning philosophy, service approach, and commitment to premium event execution.',
    includeInPrimaryNavigation: true,
  },
  contact: {
    label: 'Contact',
    path: routePaths.contact,
    title: 'Contact Event Karde | Book a Consultation',
    description: 'Contact Event Karde for wedding and corporate event consultations in Delhi NCR.',
    includeInPrimaryNavigation: true,
  },
} satisfies Record<string, RouteMeta>

export const primaryNavigationRoutes = Object.values(routeMeta).filter(
  (route) => route.includeInPrimaryNavigation,
)
