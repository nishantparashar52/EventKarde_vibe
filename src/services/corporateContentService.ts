import {
  corporateCaseStudies,
  corporateIndustries,
  corporateServices,
  type CorporateCaseStudy,
} from '../mock/corporateContent'

const wait = async (duration = 120) => new Promise((resolve) => setTimeout(resolve, duration))

export const corporateContentService = {
  async getServices() {
    await wait()
    return corporateServices
  },

  async getIndustries() {
    await wait()
    return corporateIndustries
  },

  async getCaseStudies(): Promise<CorporateCaseStudy[]> {
    await wait()
    return corporateCaseStudies
  },
}
