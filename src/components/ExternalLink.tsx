import type { AnchorHTMLAttributes, ReactNode } from 'react'

export function ExternalLink({
  href,
  children,
  className = 'text-brand-blue-dark font-medium hover:underline',
  ...rest
}: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  )
}
