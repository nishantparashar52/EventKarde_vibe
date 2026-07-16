import { useQuery } from '@tanstack/react-query'

import { weddingContentService } from '../services/weddingContentService'

export function useWeddingServices() {
  return useQuery({
    queryKey: ['wedding', 'services'],
    queryFn: () => weddingContentService.getServices(),
  })
}

export function useWeddingPackages() {
  return useQuery({
    queryKey: ['wedding', 'packages'],
    queryFn: () => weddingContentService.getPackages(),
  })
}

export function useWeddingProcess() {
  return useQuery({
    queryKey: ['wedding', 'process'],
    queryFn: () => weddingContentService.getProcess(),
  })
}
