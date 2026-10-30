import { ArrowUpRight } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type LinkProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  'children' | 'className'
> & { href: string }

type ButtonProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'children' | 'className'
> & { href?: never }

type KineticButtonProps = {
  children: ReactNode
  className?: string
} & (LinkProps | ButtonProps)

export function KineticButton(props: KineticButtonProps) {
  const arrow = <ArrowUpRight aria-hidden="true" className="kinetic-button__arrow" />

  if ('href' in props && typeof props.href === 'string') {
    const { children, className = '', href, ...linkProps } = props

    return (
      <a {...linkProps} className={`kinetic-button ${className}`.trim()} href={href}>
        <span>{children}</span>
        {arrow}
      </a>
    )
  }

  const { children, className = '', ...buttonProps } = props

  return (
    <button
      {...buttonProps}
      className={`kinetic-button ${className}`.trim()}
      type={buttonProps.type ?? 'button'}
    >
      <span>{children}</span>
      {arrow}
    </button>
  )
}
