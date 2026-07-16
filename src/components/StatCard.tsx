import { Card } from './Card'

interface StatCardProps {
  value: string
  label: string
  description: string
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <Card className="h-full space-y-3">
      <p className="text-4xl font-semibold tracking-tight text-brand-accent">{value}</p>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-brand-text-primary">{label}</h3>
        <p className="text-sm leading-7 text-brand-text-secondary">{description}</p>
      </div>
    </Card>
  )
}
