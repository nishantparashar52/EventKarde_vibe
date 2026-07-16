import type { CorporateCaseStudy } from '../mock/corporateContent'

import { Card } from './Card'

interface CaseStudyCardProps {
  caseStudy: CorporateCaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="h-full space-y-5">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-[0.28em] text-brand-accent uppercase">
          {caseStudy.audience}
        </p>
        <h3 className="text-2xl font-semibold text-brand-text-primary">{caseStudy.title}</h3>
        <p className="text-base leading-8 text-brand-text-secondary">{caseStudy.summary}</p>
      </div>

      <ul className="space-y-2">
        {caseStudy.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-3 text-sm leading-7 text-brand-text-secondary">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
