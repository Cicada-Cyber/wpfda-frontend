import type { ReactNode } from 'react'

export function PageHeader({
  title,
  lead,
  eyebrow,
  children,
}: {
  title: string
  lead?: ReactNode
  eyebrow?: string
  children?: ReactNode
}) {
  return (
    <header className="mb-8 border-b border-gray-200 pb-6">
      {eyebrow && (
        <p className="text-brand-blue-dark mb-1 text-xs font-semibold tracking-wide uppercase">
          {eyebrow}
        </p>
      )}
      <h1 className="text-brand text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {lead && <p className="mt-3 max-w-3xl text-lg text-gray-600">{lead}</p>}
      {children}
    </header>
  )
}
