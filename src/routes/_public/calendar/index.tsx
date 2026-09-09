import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'
import { seasonStructure } from '../../../data/season'

export const Route = createFileRoute('/_public/calendar/')({
  component: CalendarPage,
})

function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Calendar"
        lead="The year is split into two seasons. Open and Women's at the start of the year, Mixed towards the end. Each begins with a Draft League open to all, followed by a competitive league, and ends with SAFDA Nationals."
      />
      <p className="mb-8 max-w-3xl text-gray-700">
        Exact dates are confirmed closer to the time. A subscribable iCal feed with every game is
        coming with the platform; until then the league calendars below are the source of truth.
      </p>

      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        <a
          href={contact.calendars.opensLeague}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-brand-blue rounded-lg border border-gray-200 p-5 transition hover:shadow-md"
        >
          <h2 className="text-brand text-lg font-bold">Open League 2026</h2>
          <p className="mt-1 text-gray-600">Fixtures on Google Calendar ↗</p>
        </a>
        <a
          href={contact.calendars.womensLeague}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-brand-blue rounded-lg border border-gray-200 p-5 transition hover:shadow-md"
        >
          <h2 className="text-brand text-lg font-bold">Women's League 2026</h2>
          <p className="mt-1 text-gray-600">Fixtures on Google Calendar ↗</p>
        </a>
      </div>

      <h2 className="text-brand text-2xl font-bold">A typical year</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {seasonStructure.map((block) => (
          <section key={block.title} className="rounded-lg bg-gray-50 p-5">
            <h3 className="text-brand font-semibold">{block.title}</h3>
            {block.note && <p className="text-sm text-gray-500">{block.note}</p>}
            <ul className="mt-3 space-y-2">
              {block.events.map((e) => (
                <li key={e.name} className="flex flex-col">
                  <span className="font-medium text-gray-800">{e.name}</span>
                  <span className="text-sm text-gray-500">{e.when}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Prose>
        <p className="mt-10">
          Would you or your team like to host or organise an event, such as a beginner skills
          clinic, a university or high school event or a beach tournament? Email{' '}
          <a href={`mailto:${contact.emails.general}`}>{contact.emails.general}</a> and WPFDA will
          help support your efforts.
        </p>
        <h2>Highlights</h2>
        <p>
          <ExternalLink href={contact.external.nationals2025Highlights}>
            Open & Women's Nationals 2025, Western Region highlights
          </ExternalLink>{' '}
          (YouTube, by Joshua Hansen).
        </p>
      </Prose>
    </>
  )
}
