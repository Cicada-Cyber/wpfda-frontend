import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'
import { PinIcon } from '../../../components/icons'
import {
  clubsInDivision,
  divisionLabel,
  nationalTeams,
  otherTeams,
  type Club,
  type Division,
} from '../../../data/clubs'

export const Route = createFileRoute('/_public/clubs/')({
  component: ClubsPage,
})

const groups: { division: Division; active: string }[] = [
  { division: 'mixed', active: 'Usually active July – November' },
  { division: 'opens', active: 'Usually active January – April' },
  { division: 'womens', active: 'Usually active January – April' },
]

function ClubsPage() {
  return (
    <>
      <PageHeader
        title="Clubs & teams"
        lead="New to the sport, new to the province or visiting? Most clubs are open to new recruits, and the larger ones offer training for developing players."
      />

      <div className="space-y-12">
        {groups.map(({ division, active }) => (
          <section key={division}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-brand text-2xl font-bold">{divisionLabel[division]} division</h2>
              <p className="text-sm text-gray-500">{active}</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clubsInDivision(division).map((club) => (
                <ClubCard key={club.slug} club={club} />
              ))}
              {otherTeams
                .filter((t) => t.division === division)
                .map((t) => (
                  <a
                    key={t.name}
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-brand-blue flex flex-col rounded-lg border border-dashed border-gray-300 p-5 transition"
                  >
                    <h3 className="text-brand text-lg font-bold">{t.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">Team page on Instagram ↗</p>
                  </a>
                ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-brand text-2xl font-bold">RSA national teams</h2>
          <p className="mt-1 text-sm text-gray-500">
            Usually active before and during World Championship cycles, held every four years.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {nationalTeams.map((t) => (
              <li key={t.name} className="rounded-lg bg-gray-50 p-4">
                <ExternalLink href={t.link} className="text-brand font-bold hover:underline">
                  {t.name}
                </ExternalLink>
                <p className="text-sm text-gray-600">{t.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-brand text-xl font-bold">
            Start a new team, or revive a dormant one
          </h2>
          <p className="mt-2 text-gray-700">
            Not sure which club would be a good fit, want to resurrect a dormant club, or start
            something completely new? Email{' '}
            <a
              href={`mailto:${contact.emails.general}`}
              className="text-brand-blue-dark font-medium hover:underline"
            >
              {contact.emails.general}
            </a>{' '}
            and we'll help.
          </p>
        </section>
      </div>
    </>
  )
}

function ClubCard({ club }: { club: Club }) {
  return (
    <Link
      to="/clubs/$slug"
      params={{ slug: club.slug }}
      className="group hover:border-brand-blue flex flex-col overflow-hidden rounded-lg border border-gray-200 transition hover:shadow-md"
    >
      <div className="bg-brand flex h-24 items-center justify-center px-4">
        {club.logo ? (
          <img src={club.logo} alt="" className="max-h-16 max-w-[70%] object-contain" />
        ) : (
          <span className="text-lg font-bold text-white">{club.name}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-brand group-hover:text-brand-blue-dark text-lg font-bold">
          {club.name}
        </h3>
        <p className="mt-1 flex-1 text-sm text-gray-600">{club.summary}</p>
        <p className="mt-3 flex items-center gap-1 text-xs text-gray-500">
          <PinIcon />
          {club.homeField.name}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {club.divisions.map((d) => (
            <span
              key={d}
              className="bg-brand/10 text-brand rounded-full px-2 py-0.5 text-xs font-semibold"
            >
              {divisionLabel[d]}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
