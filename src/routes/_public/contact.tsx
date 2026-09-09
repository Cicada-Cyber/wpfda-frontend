import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../components/PageHeader'
import { ExternalLink } from '../../components/ExternalLink'
import { contact } from '../../data/contact'

export const Route = createFileRoute('/_public/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        lead="WPFDA is run by volunteers. We'll respond as soon as we can."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <section className="rounded-lg border border-gray-200 p-5">
          <h2 className="text-brand text-lg font-bold">Email</h2>
          <dl className="mt-3 space-y-3 text-gray-700">
            <div>
              <dt className="text-sm text-gray-500">General enquiries</dt>
              <dd>
                <a
                  href={`mailto:${contact.emails.general}`}
                  className="text-brand-blue-dark font-medium hover:underline"
                >
                  {contact.emails.general}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">League queries</dt>
              <dd>
                <a
                  href={`mailto:${contact.emails.league}`}
                  className="text-brand-blue-dark font-medium hover:underline"
                >
                  {contact.emails.league}
                </a>
              </dd>
            </div>
          </dl>
        </section>
        <section className="rounded-lg border border-gray-200 p-5">
          <h2 className="text-brand text-lg font-bold">Social</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>
              <ExternalLink href={contact.social.instagram}>Instagram</ExternalLink>{' '}
              <span className="text-sm text-gray-500">@capetownultimate</span>
            </li>
            <li>
              <ExternalLink href={contact.social.facebook}>Facebook</ExternalLink>{' '}
              <span className="text-sm text-gray-500">capetownultimate</span>
            </li>
            <li>
              <ExternalLink href={contact.whatsappPickupCommunity}>
                Pickup WhatsApp community
              </ExternalLink>
            </li>
          </ul>
        </section>
      </div>
      <p className="mt-8 max-w-2xl text-gray-700">
        Looking for a specific club? Each{' '}
        <Link to="/clubs" className="text-brand-blue-dark font-medium hover:underline">
          club page
        </Link>{' '}
        has its own contact details. For the people behind WPFDA, see the{' '}
        <Link to="/about/committee" className="text-brand-blue-dark font-medium hover:underline">
          committee
        </Link>
        .
      </p>
    </>
  )
}
