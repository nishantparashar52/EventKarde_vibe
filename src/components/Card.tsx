import type { PropsWithChildren } from 'react'

import { cn } from '../utils/cn'

interface CardProps extends PropsWithChildren {
  className?: string
}

export function Card({ className, children }: CardProps) {
  return (
    <article
      className={cn(
        'glass-panel rounded-[var(--radius-card)] p-6 md:p-8',
        className,
      )}
    >
      {children}
    </article>
  )
}
