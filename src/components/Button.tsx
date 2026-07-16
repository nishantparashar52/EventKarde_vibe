import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: never
    to?: never
  }

type AnchorButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    href: string
    to?: never
  }

type RouterButtonProps = BaseButtonProps & {
  to: string
  href?: never
}

type ButtonProps = NativeButtonProps | AnchorButtonProps | RouterButtonProps

const baseClassName =
  'inline-flex items-center justify-center rounded-[var(--radius-pill)] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-background'

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-accent px-6 text-brand-accent-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:bg-brand-accent-strong',
  secondary:
    'glass-panel border-brand-border px-6 text-brand-text-primary hover:-translate-y-0.5 hover:border-brand-border-strong hover:bg-white/10',
  ghost: 'px-4 text-brand-text-secondary hover:text-brand-text-primary',
}

const sizeClassNames: Record<ButtonSize, string> = {
  sm: 'min-h-10 text-sm',
  md: 'min-h-12 text-sm',
  lg: 'min-h-14 text-base',
}

function getResolvedClassName({
  className,
  size,
  variant,
}: Pick<BaseButtonProps, 'className' | 'size' | 'variant'>) {
  return cn(
    baseClassName,
    variantClassNames[variant ?? 'primary'],
    sizeClassNames[size ?? 'md'],
    className,
  )
}

export function Button(props: ButtonProps) {
  const resolvedClassName = getResolvedClassName(props)

  if ('to' in props && typeof props.to === 'string') {
    const { className: _className, children, size: _size, to, variant: _variant } = props

    return (
      <Link className={resolvedClassName} to={to}>
        {children}
      </Link>
    )
  }

  if ('href' in props && typeof props.href === 'string') {
    const {
      children,
      className: _className,
      href,
      size: _size,
      variant: _variant,
      ...anchorProps
    } = props

    return (
      <a className={resolvedClassName} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const {
    children,
    className: _className,
    size: _size,
    type = 'button',
    variant: _variant,
    ...buttonProps
  } = props

  return (
    <button className={resolvedClassName} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
