import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/news/')({
  component: NewsPage,
})

function NewsPage() {
  return (
    <>
      <PageHeader
        title="News"
        lead="Announcements, season wrap-ups and league previews. Posts will be published here once the platform's news tools are live."
      />
      <p className="text-gray-700">
        In the meantime, follow WPFDA on{' '}
        <ExternalLink href={contact.social.instagram}>Instagram</ExternalLink> and{' '}
        <ExternalLink href={contact.social.facebook}>Facebook</ExternalLink> for the latest.
      </p>
    </>
  )
}
