import type { ReactNode } from 'react'

import { cn } from '../utils/cn'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  actions?: ReactNode
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  actions,
  className,
}: SectionTitleProps) {
  const alignmentClassName = align === 'center' ? 'items-center text-center' : 'items-start'

  return (
    <div className={cn('flex flex-col gap-5', alignmentClassName, className)}>
      {eyebrow ? <span className="eyebrow-label">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="section-title text-brand-text-primary">{title}</h2>
        {description ? <p className="body-large max-w-3xl">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  )
}
