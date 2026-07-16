import { useQuery } from '@tanstack/react-query'

import { corporateContentService } from '../services/corporateContentService'

export function useCorporateServices() {
  return useQuery({
    queryKey: ['corporate', 'services'],
    queryFn: () => corporateContentService.getServices(),
  })
}

export function useCorporateIndustries() {
  return useQuery({
    queryKey: ['corporate', 'industries'],
    queryFn: () => corporateContentService.getIndustries(),
  })
}

export function useCorporateCaseStudies() {
  return useQuery({
    queryKey: ['corporate', 'case-studies'],
    queryFn: () => corporateContentService.getCaseStudies(),
  })
}
