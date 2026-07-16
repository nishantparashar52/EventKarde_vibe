import type { WeddingPackage } from '../mock/weddingContent'

import { Card } from './Card'

interface PackageCardProps {
  packageItem: WeddingPackage
}

export function PackageCard({ packageItem }: PackageCardProps) {
  return (
    <Card className="h-full space-y-5">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-[0.28em] text-brand-accent uppercase">
          {packageItem.audience}
        </p>
        <h3 className="text-2xl font-semibold text-brand-text-primary">{packageItem.name}</h3>
        <p className="text-base leading-8 text-brand-text-secondary">{packageItem.summary}</p>
      </div>

      <ul className="space-y-2">
        {packageItem.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-brand-text-secondary">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
