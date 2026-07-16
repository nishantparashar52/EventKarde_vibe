import type { EventCategory } from '../types/event'

const wait = async (duration = 120) => new Promise((resolve) => setTimeout(resolve, duration))

const categories: EventCategory[] = ['wedding', 'corporate']

export const categoryService = {
  async getAll(): Promise<EventCategory[]> {
    await wait()
    return categories
  },
}
