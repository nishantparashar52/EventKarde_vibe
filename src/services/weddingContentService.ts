import {
  weddingPackages,
  weddingProcess,
  weddingServices,
  type WeddingPackage,
} from '../mock/weddingContent'

const wait = async (duration = 120) => new Promise((resolve) => setTimeout(resolve, duration))

export const weddingContentService = {
  async getServices() {
    await wait()
    return weddingServices
  },

  async getPackages(): Promise<WeddingPackage[]> {
    await wait()
    return weddingPackages
  },

  async getProcess() {
    await wait()
    return weddingProcess
  },
}
