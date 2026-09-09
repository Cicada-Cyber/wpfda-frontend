import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const styles = {
  primary: 'bg-brand-blue hover:bg-brand-blue-dark text-white',
  secondary: 'bg-brand hover:bg-brand-dark text-white',
  outline: 'border border-brand text-brand hover:bg-brand/5',
} as const

const base =
  'btn inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition'

export function ButtonLink({
  to,
  children,
  variant = 'primary',
}: {
  to: string
  children: ReactNode
  variant?: keyof typeof styles
}) {
  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  )
}

export function ButtonAnchor({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof styles
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  )
}
