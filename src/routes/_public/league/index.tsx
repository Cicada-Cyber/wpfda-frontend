import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { ButtonLink } from '../../../components/Button'
import { contact } from '../../../data/contact'
import { leagueHistory } from '../../../data/league-history'

export const Route = createFileRoute('/_public/league/')({
  component: LeaguePage,
})

function LeaguePage() {
  const current = leagueHistory[0]
  return (
    <>
      <PageHeader
        title="League"
        lead="The provincial league runs in two seasons: Open and Women's in the first half of the year, Mixed in the second."
      />
      <img
        src="/photos/league-group.jpg"
        alt="League players gathered on the field with mountains behind"
        className="mb-8 aspect-[21/9] w-full rounded-lg object-cover"
      />
      <Prose>
        <p>
          Fixtures are weekly, on Monday evenings or Saturday mornings, at Stellenbosch University,
          the University of Cape Town, Pinelands Cricket Oval or Scoville Cricket Oval. Each season
          starts with a Draft League open to all, followed by the competitive club league, and ends
          with Regionals and SAFDA Nationals.
        </p>
        <p>
          To play in the league you need to be a{' '}
          <ExternalLink href={contact.forms.registration}>registered member</ExternalLink> and hold
          a <Link to="/ultimate/rules">WFDF rules accreditation</Link>. Clubs enter teams and submit
          rosters through the club portal.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/league/standings">Fixtures & standings</ButtonLink>
          <ButtonLink to="/calendar" variant="outline">
            Season calendar
          </ButtonLink>
          <ButtonLink to="/clubs" variant="outline">
            Clubs & teams
          </ButtonLink>
        </div>
      </Prose>

      <section className="mt-12">
        <h2 className="text-brand text-2xl font-bold">
          {current.year} {current.season} season
        </h2>
        <p className="mt-1 text-gray-600">
          {current.note} <ExternalLink href={contact.external.stallCount}>StallCount</ExternalLink>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-brand text-2xl font-bold">Past seasons</h2>
        <p className="mt-1 text-gray-600">Final league standings.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {leagueHistory.slice(1).map((s) => (
            <article
              key={`${s.year}-${s.season}`}
              className="rounded-lg border border-gray-200 p-5"
            >
              <h3 className="text-brand text-lg font-semibold">
                {s.year} {s.season}
              </h3>
              {s.note && <p className="mt-1 text-sm text-gray-500">{s.note}</p>}
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {s.divisions.map((d) => (
                  <div key={d.name}>
                    <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      {d.name}
                    </p>
                    <ol className="mt-1 space-y-0.5 text-gray-800">
                      {d.standings.map((team, i) => (
                        <li key={team} className="flex gap-2">
                          <span className="w-5 text-right text-gray-400 tabular-nums">{i + 1}</span>
                          <span className={i === 0 ? 'font-semibold' : ''}>{team}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
