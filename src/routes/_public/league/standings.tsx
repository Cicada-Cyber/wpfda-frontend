import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/league/standings')({
  component: StandingsPage,
})

function StandingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="League"
        title="Fixtures & standings"
        lead="Live fixtures, results and automatically computed standings for each division will appear here once results are captured on the platform."
      />
      <Prose>
        <p>
          For the current season, follow the league live on{' '}
          <ExternalLink href={contact.external.stallCount}>StallCount</ExternalLink>. Final
          standings for past seasons are on the <Link to="/league">league page</Link>, and game
          times are on the <Link to="/calendar">calendar</Link>.
        </p>
      </Prose>
    </>
  )
}
