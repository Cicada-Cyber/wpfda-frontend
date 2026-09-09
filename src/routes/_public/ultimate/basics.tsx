import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'

export const Route = createFileRoute('/_public/ultimate/basics')({
  component: BasicsPage,
})

const basics = [
  {
    title: 'The field',
    body: 'A rectangular pitch, 100 m long by 37 m wide, with an 18 m end zone at each end. Games are 7-a-side outdoors; league formats may vary.',
  },
  {
    title: 'Starting play',
    body: 'Each point begins with both teams lining up on their own end-zone line. The defence throws (“pulls”) the disc to the offence. After a point is scored, the scoring team pulls.',
  },
  {
    title: 'Scoring',
    body: 'A point is scored when a player catches a pass in the end zone their team is attacking. Games are typically played to a set score, or a time cap, whichever comes first.',
  },
  {
    title: 'Moving the disc',
    body: 'The disc may be thrown in any direction, to any teammate. A player may not run with the disc; the thrower establishes a pivot foot. A defender marking the thrower counts the stall aloud, and the thrower has ten seconds to release.',
  },
  {
    title: 'Turnovers',
    body: 'Possession changes when a pass is dropped, intercepted, blocked, lands out of bounds, or the stall count reaches ten. The defence picks up the disc and immediately becomes the offence.',
  },
  {
    title: 'Non-contact',
    body: 'No physical contact is allowed between players. Picks and screens are also prohibited. Contact that affects play is a foul.',
  },
  {
    title: 'Fouls and calls',
    body: 'When a foul or violation occurs, the affected player calls it and play stops. If the two players disagree, the disc goes back to the last thrower and play resumes as though nothing had happened.',
  },
  {
    title: 'Self-officiating',
    body: 'There are no referees. Players are responsible for their own foul and line calls, and for resolving disputes calmly and quickly.',
  },
  {
    title: 'Spirit of the Game',
    body: 'Competitive play is encouraged, but never at the expense of respect between players, the rules, or the basic joy of play. Teams rate each other’s spirit after games in leagues and tournaments.',
  },
  {
    title: 'Substitutions',
    body: 'Unlimited substitutions are allowed, but only between points (after a score) or for an injury.',
  },
]

const diagrams: { title: string; items: { n: number; caption: string }[] }[] = [
  {
    title: 'Throwing',
    items: [
      { n: 1, caption: 'Backhand grip' },
      { n: 2, caption: 'Backhand power grip' },
      { n: 3, caption: 'Forehand grip' },
      { n: 4, caption: 'Wrist snap, grip and disc angle' },
      { n: 5, caption: 'Throwing angles: outside-in and inside-out' },
    ],
  },
  {
    title: 'Offence structures',
    items: [
      { n: 6, caption: 'Vertical stack' },
      { n: 7, caption: 'Horizontal stack' },
      { n: 8, caption: 'Split stack' },
      { n: 9, caption: 'Zone offence' },
      { n: 10, caption: 'Zone defence' },
      { n: 11, caption: 'Hex offence' },
    ],
  },
  {
    title: 'Defence and forcing',
    items: [
      { n: 12, caption: 'Straight-up force' },
      { n: 13, caption: 'Forehand force' },
      { n: 14, caption: 'Backhand force' },
      { n: 15, caption: 'Downfield positioning' },
      { n: 16, caption: 'Home vs away' },
      { n: 17, caption: 'Open side and break side' },
      { n: 18, caption: 'Force middle and force sideline' },
      { n: 19, caption: 'No line and no round' },
    ],
  },
]

function BasicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ultimate"
        title="Ultimate basics"
        lead="New to the sport or need a refresher? These are the ten things you need to know before your first game."
      />
      <ol className="grid max-w-4xl gap-4 sm:grid-cols-2">
        {basics.map((item, i) => (
          <li key={item.title} className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-baseline gap-3">
              <span className="text-brand-blue text-2xl font-bold">{i + 1}</span>
              <h2 className="text-brand text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="mt-2 text-gray-700">{item.body}</p>
          </li>
        ))}
      </ol>
      <section className="mt-14">
        <h2 className="text-brand text-2xl font-bold">Diagrams</h2>
        <p className="mt-1 max-w-3xl text-gray-600">
          Grips, throws, offence structures and defensive forces, illustrated. Useful before your
          first league game.
        </p>
        {diagrams.map((group) => (
          <div key={group.title} className="mt-8">
            <h3 className="text-brand text-lg font-semibold">{group.title}</h3>
            <ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((d) => (
                <li key={d.n} className="rounded-lg border border-gray-200 bg-white p-3">
                  <img
                    src={`/basics/${d.n}.png`}
                    alt={d.caption}
                    loading="lazy"
                    className="mx-auto max-h-56 w-full object-contain"
                  />
                  <p className="mt-2 text-center text-sm text-gray-600">{d.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Prose>
        <p className="mt-8">
          Ready for the full rules and the hand signals? See{' '}
          <Link to="/ultimate/rules">rules and accreditation</Link>. Want to try it? Turn up to a{' '}
          <Link to="/pickup">pickup</Link>.
        </p>
      </Prose>
    </>
  )
}
