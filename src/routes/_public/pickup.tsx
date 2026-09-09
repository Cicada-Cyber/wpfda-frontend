import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../components/PageHeader'
import { Prose } from '../../components/Prose'
import { ExternalLink } from '../../components/ExternalLink'
import { ButtonAnchor } from '../../components/Button'
import { contact } from '../../data/contact'
import { pickups } from '../../data/pickups'
import { ClockIcon, PinIcon } from '../../components/icons'

export const Route = createFileRoute('/_public/pickup')({
  component: PickupPage,
})

function PickupPage() {
  return (
    <>
      <PageHeader
        title="Pickup"
        lead="Casual games of Ultimate, every week, all over the province. Any skill level, newbies included, no membership required."
      >
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ButtonAnchor href={contact.whatsappPickupCommunity}>
            Join the pickup WhatsApp community
          </ButtonAnchor>
          <span className="text-sm text-gray-500">
            Each pickup confirms numbers on its own group every week. Check before you go.
          </span>
        </div>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2">
        {pickups.map((p) => (
          <article key={p.name} className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-brand text-lg font-bold">{p.name}</h2>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  p.surface === 'beach' ? 'bg-orange/15 text-orange' : 'bg-green/15 text-green-dark'
                }`}
              >
                {p.surface}
              </span>
            </div>
            <p className="mt-1 flex gap-1.5 text-gray-600">
              <PinIcon className="text-grey mt-1" />
              <span>{p.venue}</span>
            </p>
            <ul className="mt-3 space-y-1 font-medium text-gray-800">
              {p.when.map((w) => (
                <li key={w} className="flex items-center gap-1.5">
                  <ClockIcon className="text-brand-blue" />
                  {w}
                </li>
              ))}
            </ul>
            {p.notes && (
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {p.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <Prose>
        <p className="mt-8">
          Hosting a game? Add it to the{' '}
          <ExternalLink href={contact.external.pickupUltimateMap}>Pickup Ultimate map</ExternalLink>{' '}
          and let us know so we can list it here.
        </p>
        <h2>What is a pickup?</h2>
        <ul>
          <li>Casual games of Ultimate Frisbee, also called social frisbee.</li>
          <li>Players of any skill level are welcome, newbies included.</li>
          <li>It's a great place to start and to improve your skills.</li>
          <li>Pickup is open to the public. Membership is not required.</li>
        </ul>
        <h2>What to bring</h2>
        <ul>
          <li>Plenty of water.</li>
          <li>On grass: cleats (soccer boots), or tekkies where the venue prohibits cleats.</li>
          <li>On the beach: barefoot.</li>
          <li>Both a white and a dark shirt. Please, no grey shirts.</li>
        </ul>
      </Prose>
    </>
  )
}
