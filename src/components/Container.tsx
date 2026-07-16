import type { PropsWithChildren } from 'react'

import { cn } from '../utils/cn'

interface ContainerProps extends PropsWithChildren {
  className?: string
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('app-container', className)}>{children}</div>
}
