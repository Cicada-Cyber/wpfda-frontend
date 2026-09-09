import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { divisionLabel, getClub } from '../../../data/clubs'

export const Route = createFileRoute('/_public/clubs/$slug')({
  loader: ({ params }) => {
    const club = getClub(params.slug)
    if (!club) throw notFound()
    return club
  },
  component: ClubPage,
})

function ClubPage() {
  const club = Route.useLoaderData()
  const c = club.contact
  return (
    <>
      <Link to="/clubs" className="text-brand-blue-dark text-sm font-medium hover:underline">
        ← All clubs
      </Link>
      {club.logo && (
        <div className="bg-brand mt-3 flex h-40 items-center justify-center rounded-lg px-6">
          <img
            src={club.logo}
            alt={`${club.name} logo`}
            className="max-h-28 max-w-[80%] object-contain"
          />
        </div>
      )}
      <PageHeader
        eyebrow={club.divisions.map((d) => `${divisionLabel[d]} division`).join(' · ')}
        title={club.name}
        lead={club.summary}
      />

      <div className="grid gap-10 md:grid-cols-[1fr_18rem]">
        <Prose>
          {club.teams && (
            <>
              <h2>Teams</h2>
              <ul>
                {club.teams.map((t) => (
                  <li key={t.name}>
                    {t.name} <span className="text-gray-500">({divisionLabel[t.division]})</span>
                    {t.instagram && (
                      <>
                        {' · '}
                        <ExternalLink href={t.instagram}>Instagram</ExternalLink>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          {club.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {club.recruitment && (
            <>
              <h2>Recruitment</h2>
              <p>{club.recruitment}</p>
            </>
          )}
          {club.photos && (
            <div className="not-prose grid gap-4 sm:grid-cols-2">
              {club.photos.map((ph) => (
                <figure key={ph.src}>
                  <img
                    src={ph.src}
                    alt={`${club.name}: ${ph.caption}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                  />
                  <figcaption className="mt-1 text-sm text-gray-500">{ph.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </Prose>

        <aside className="space-y-6">
          <div className="rounded-lg bg-gray-50 p-5">
            <h2 className="text-brand font-semibold">Home turf</h2>
            <p className="mt-1 text-gray-700">
              {club.homeField.mapUrl ? (
                <ExternalLink href={club.homeField.mapUrl}>{club.homeField.name}</ExternalLink>
              ) : (
                club.homeField.name
              )}
            </p>
            <h2 className="text-brand mt-4 font-semibold">Training</h2>
            <ul className="mt-1 space-y-1 text-gray-700">
              {club.training.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-gray-50 p-5">
            <h2 className="text-brand font-semibold">Contact</h2>
            <ul className="mt-1 space-y-1 text-gray-700">
              {c.email && (
                <li>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-brand-blue-dark break-all hover:underline"
                  >
                    {c.email}
                  </a>
                </li>
              )}
              {c.instagram && (
                <li>
                  <ExternalLink href={c.instagram}>Instagram</ExternalLink>
                </li>
              )}
              {c.facebook && (
                <li>
                  <ExternalLink href={c.facebook}>Facebook</ExternalLink>
                </li>
              )}
              {c.website && (
                <li>
                  <ExternalLink href={c.website}>Website</ExternalLink>
                </li>
              )}
              {c.whatsapp && (
                <li>
                  <ExternalLink href={c.whatsapp}>WhatsApp group</ExternalLink>
                </li>
              )}
              {c.captains && <li className="text-sm text-gray-500">Captains: {c.captains}</li>}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}
