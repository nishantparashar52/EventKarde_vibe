import { cn } from '../utils/cn'

interface LoaderProps {
  label?: string
  className?: string
}

export function Loader({
  label = 'Loading experience…',
  className,
}: LoaderProps) {
  return (
    <div className={cn('flex items-center justify-center px-4 py-16', className)}>
      <div className="glass-panel flex items-center gap-3 rounded-[var(--radius-card)] px-5 py-4 text-sm text-brand-text-secondary">
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-accent shadow-[var(--shadow-glow)]"
        />
        <span>{label}</span>
      </div>
    </div>
  )
}
