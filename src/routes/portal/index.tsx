import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../components/PageHeader'

export const Route = createFileRoute('/portal/')({
  component: PortalHome,
})

function PortalHome() {
  return (
    <>
      <PageHeader
        title="Club login"
        lead="Club managers sign in here to enter events and submit rosters from registered, paid-up members."
      />
      <div className="max-w-md rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-gray-600">
          Logins are provisioned by WPFDA. The portal opens once the member register is live; until
          then, contact the league team to enter events.
        </p>
      </div>
    </>
  )
}
