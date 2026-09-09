import type { ReactNode } from 'react'

// Readable long-form text. Use for content pages migrated from the old site.
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-4 leading-relaxed text-gray-800 [&_a:not(.btn)]:font-medium [&_a:not(.btn)]:text-brand-blue-dark [&_a:not(.btn):hover]:underline [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-brand [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
      {children}
    </div>
  )
}
