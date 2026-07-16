import type { PropsWithChildren } from 'react'

import { cn } from '../utils/cn'

interface SectionProps extends PropsWithChildren {
  className?: string
  contentClassName?: string
}

export function Section({ className, contentClassName, children }: SectionProps) {
  return (
    <section className={cn('section-shell', className)}>
      <div className={cn(contentClassName)}>{children}</div>
    </section>
  )
}
