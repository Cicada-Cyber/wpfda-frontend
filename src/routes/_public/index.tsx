import { Link, createFileRoute } from '@tanstack/react-router'
import { ButtonAnchor, ButtonLink } from '../../components/Button'
import { contact } from '../../data/contact'

export const Route = createFileRoute('/_public/')({
  component: HomePage,
})

const tiles = [
  {
    to: '/pickup',
    title: 'Find a pickup',
    body: 'Casual games all over Cape Town and Stellenbosch, every week, open to everyone. No membership needed.',
    cta: 'Where to play',
  },
  {
    to: '/clubs',
    title: 'Join a club',
    body: 'Competitive mixed, opens and women’s teams across the province. Most are open to new recruits and offer training.',
    cta: 'Clubs & teams',
  },
  {
    to: '/league',
    title: 'League',
    body: 'Two seasons a year: Open & Women’s in the first half, Mixed in the second. Fixtures, results and standings.',
    cta: 'League overview',
  },
  {
    to: '/calendar',
    title: 'Leagues & tournaments',
    body: 'The season calendar: draft leagues, club leagues, regionals, nationals and off-season tournaments.',
    cta: 'See the calendar',
  },
  {
    to: '/ultimate',
    title: 'New to Ultimate?',
    body: 'A fast-paced, non-contact, self-refereed team sport played with a flying disc. Here is how it works.',
    cta: 'What is Ultimate?',
  },
  {
    to: '/about/merch',
    title: 'Need a disc?',
    body: 'Ultimate is played with a 175 g disc. See where to get one.',
    cta: 'Merch',
  },
] as const

function HomePage() {
  return (
    <div className="space-y-14">
      <section className="from-brand to-brand-blue-dark -mx-4 -mt-8 bg-gradient-to-br px-4 py-16 text-white sm:rounded-b-2xl">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-wide text-white/80 uppercase">
            Western Province Flying Disc Association
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Ultimate in the Western Cape
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            WPFDA is the home of ultimate and flying disc sports in the Western Province: pickup
            games, clubs, the provincial league and the road to Nationals. Formerly the Cape Town
            Flying Disc Association.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/pickup" variant="primary">
              Find a pickup
            </ButtonLink>
            <ButtonLink to="/clubs" variant="outline">
              <span className="text-white">Join a club</span>
            </ButtonLink>
          </div>
        </div>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.to}
              to={tile.to}
              className="group hover:border-brand-blue flex flex-col rounded-lg border border-gray-200 p-6 transition hover:shadow-md"
            >
              <h2 className="text-brand group-hover:text-brand-blue-dark text-xl font-bold">
                {tile.title}
              </h2>
              <p className="mt-2 flex-1 text-gray-600">{tile.body}</p>
              <span className="text-brand-blue-dark mt-4 font-semibold">{tile.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-lg bg-gray-50 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-brand text-2xl font-bold">Membership</h2>
          <p className="mt-2 text-gray-700">
            Everyone playing in a WPFDA-organised league or tournament must be a registered member.
            Registration is annual and valid until 31 December. Pickup is open to all and does not
            require membership.
          </p>
          <div className="mt-4">
            <ButtonAnchor href={contact.forms.registration}>Register or renew</ButtonAnchor>
          </div>
        </div>
        <div>
          <h2 className="text-brand text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-gray-700">
            Questions about playing, joining a club, hosting an event or anything else? We are run
            by volunteers and will get back to you as soon as we can.
          </p>
          <div className="mt-4">
            <ButtonLink to="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
