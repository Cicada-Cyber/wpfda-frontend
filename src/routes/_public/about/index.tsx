import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/about/')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About WPFDA"
        lead="The Western Province Flying Disc Association is the provincial body for ultimate and other flying disc sports in the Western Cape."
      />
      <Prose>
        <p>
          WPFDA is the provincial tier of the{' '}
          <ExternalLink href={contact.external.safda}>
            South African Flying Disc Association
          </ExternalLink>{' '}
          (SAFDA), which in turn is a member of the World Flying Disc Federation. Individual players
          belong to clubs, clubs affiliate to the province, and the province represents the region
          within SAFDA. We run the provincial league, keep the member register, and support pickup,
          development and tournaments across the province.
        </p>
        <h2>From CTFDA to WPFDA</h2>
        <p>
          WPFDA continues the work of the Cape Town Flying Disc Association (CTFDA), which organised
          ultimate in Cape Town for two decades. As SAFDA's structure moved to provincial
          associations, CTFDA became WPFDA. Nothing is lost in the change: existing member numbers
          carry over, the clubs and leagues are the same, and the volunteers are the same people.
        </p>
        <h2>Membership</h2>
        <p>
          Everyone playing in a WPFDA-organised league or tournament must be a registered member.
          Registration is annual and valid until 31 December.{' '}
          <ExternalLink href={contact.forms.registration}>Register or renew here</ExternalLink>.
          Pickup games are open to everyone and do not require membership.
        </p>
        <h2>How we are run</h2>
        <p>
          WPFDA is managed by a volunteer <Link to="/about/committee">committee</Link>, under a{' '}
          <Link to="/about/policies">constitution and a set of policies</Link> that every member
          agrees to. Our <Link to="/about/development">development programme</Link> supports the
          growth of the sport in schools and communities.
        </p>
      </Prose>
    </>
  )
}
