import { useQuery } from '@tanstack/react-query'

import { eventService } from '../services/eventService'
import type { EventCategory } from '../types/event'

export function useFeaturedEvents() {
  return useQuery({
    queryKey: ['events', 'featured'],
    queryFn: () => eventService.getFeatured(),
  })
}

export function useEventsByCategory(category: EventCategory) {
  return useQuery({
    queryKey: ['events', category],
    queryFn: () => eventService.getByCategory(category),
  })
}

export function useRecentEvents() {
  return useQuery({
    queryKey: ['events', 'recent'],
    queryFn: () => eventService.getAll(),
  })
}

export function useGalleryImages(category: EventCategory | 'all' = 'all') {
  return useQuery({
    queryKey: ['events', 'gallery', category],
    queryFn: () => eventService.getGalleryImages(category),
  })
}
