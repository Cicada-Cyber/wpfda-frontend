import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/about/committee')({
  component: CommitteePage,
})

// Names as published on the previous site's committee page.
const committee2026 = [
  'Johann Harzon',
  'Adam Kieffer-Walker',
  'Christine Anderson',
  'Lienke Viljoen',
]

function CommitteePage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Committee"
        lead="WPFDA is managed by a team of volunteers who make time between their professional and personal lives to keep the association running."
      />
      <h2 className="text-brand text-2xl font-bold">Committee 2026</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {committee2026.map((name) => (
          <li key={name} className="rounded-lg bg-gray-50 px-5 py-4 font-medium text-gray-800">
            {name}
          </li>
        ))}
      </ul>
      <Prose>
        <p className="mt-6">
          To contact any member of the committee, email{' '}
          <a href={`mailto:${contact.emails.general}`}>{contact.emails.general}</a>. We aim to get
          back to you as soon as we can.
        </p>
        <h2>Reports</h2>
        <ul>
          <li>
            <ExternalLink href={contact.documents.committeeReport2025}>
              Committee Report 2025
            </ExternalLink>
          </li>
        </ul>
      </Prose>
    </>
  )
}
