import type { ReactNode } from 'react'

import { Card } from './Card'

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="h-full space-y-4">
      {icon ? (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
          {icon}
        </div>
      ) : null}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-brand-text-primary">{title}</h3>
        <p className="text-base leading-8 text-brand-text-secondary">{description}</p>
      </div>
    </Card>
  )
}
