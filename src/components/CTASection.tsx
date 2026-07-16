import type { ReactNode } from 'react'

import { cn } from '../utils/cn'
import { Card } from './Card'

interface CTASectionProps {
  title: string
  description: string
  actions: ReactNode
  className?: string
}

export function CTASection({
  title,
  description,
  actions,
  className,
}: CTASectionProps) {
  return (
    <Card className={cn('overflow-hidden rounded-[var(--radius-shell)] px-6 py-8 md:px-10 md:py-10', className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <h2 className="section-title text-brand-text-primary">{title}</h2>
          <p className="body-large">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">{actions}</div>
      </div>
    </Card>
  )
}
