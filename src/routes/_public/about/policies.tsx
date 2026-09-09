import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/about/policies')({
  component: PoliciesPage,
})

function PoliciesPage() {
  const d = contact.documents
  const x = contact.external
  const documents = [
    {
      title: 'Constitution',
      body: 'Establishes the principles, governance and purpose of the association. The 2012 CTFDA constitution applies until the WPFDA constitution is adopted.',
      href: d.constitution2012,
    },
    {
      title: 'Code of Conduct',
      body: 'The standard of behaviour expected of every member, on and off the field. Accepted as part of registration.',
      href: d.codeOfConduct,
    },
    {
      title: 'Anti-harassment Policy',
      body: 'What harassment is, how to report it, and how reports are handled. Accepted as part of registration.',
      href: d.antiHarassmentPolicy,
    },
    {
      title: 'Inclusion Guidelines',
      body: 'Not a policy document but guidelines meant to help create an inclusive and safe environment for all members.',
      href: d.inclusionGuidelines,
    },
  ]
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Policies & guidelines"
        lead="The documents every member plays under, and the principle behind all of them: Spirit of the Game."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {documents.map((doc) => (
          <a
            key={doc.title}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-brand-blue flex flex-col rounded-lg border border-gray-200 p-5 transition hover:shadow-md"
          >
            <h2 className="text-brand text-lg font-bold">{doc.title}</h2>
            <p className="mt-1 flex-1 text-sm text-gray-600">{doc.body}</p>
            <span className="text-brand-blue-dark mt-3 text-sm font-semibold">Open document ↗</span>
          </a>
        ))}
      </div>

      <Prose>
        <h2>Spirit of the Game</h2>
        <p>
          The core principle of any disc sport is Spirit of the Game. Ultimate, more than any other
          sport, strives to incorporate it at every level of play, from beginner pickups to
          international championship games. It is similar to fair play and sportsmanship, but with a
          much higher emphasis, summarised in the preamble to the rules:
        </p>
        <blockquote className="border-brand border-l-4 pl-4 text-gray-700 italic">
          All players are responsible for administering and adhering to the rules. Ultimate relies
          upon a Spirit of the Game that places the responsibility for fair play on every player. It
          is trusted that no player will intentionally break the rules; thus there are no harsh
          penalties for breaches, but rather a method for resuming play in a manner which simulates
          what would most likely have occurred had there been no breach.
        </blockquote>
        <p>
          Highly competitive play is encouraged, but should never sacrifice the mutual respect
          between players, adherence to the agreed-upon rules, or the basic joy of play. Intentional
          fouling, cheating, dangerous plays, disrespectful conversations and other “win at all
          costs” behaviour are contrary to the Spirit of the Game. As Ultimate is self-refereed,
          players must know the rules, be fair-minded and truthful, explain their viewpoint clearly
          and briefly, allow opponents a reasonable chance to speak, and resolve disputes quickly
          using respectful language.
        </p>
        <h3>Spirit scoring</h3>
        <p>
          Directly after a game, players rate the other team, and their own, on five fundamentals:
        </p>
        <ol>
          <li>Did they know and abide by the rules?</li>
          <li>Did they avoid body contact?</li>
          <li>Were they fair-minded?</li>
          <li>Did they show self-control and a positive attitude?</li>
          <li>Did they communicate properly and respectfully?</li>
        </ol>
        <p>
          In leagues and larger tournaments, each team's spirit captain collects scores and gives
          them to the spirit director, who reviews them for issues and awards the Spirit of the Game
          prize.
        </p>
        <ul>
          <li>
            <ExternalLink href={x.wfdfSpiritOfTheGame}>WFDF Spirit of the Game</ExternalLink>:
            education, spirit circles and the history of self-officiating
          </li>
          <li>
            <ExternalLink href={x.wfdfSpiritCaptainsManual}>Spirit captains manual</ExternalLink>{' '}
            and{' '}
            <ExternalLink href={x.wfdfSpiritDirectorsManual}>spirit directors manual</ExternalLink>
          </li>
          <li>
            <ExternalLink href={d.sotgResourceLibrary}>SOTG resource library</ExternalLink>
          </li>
          <li>
            Our own <Link to="/ultimate/rules">rules and accreditation</Link> page, with examples of
            good and poor spirit
          </li>
        </ul>
        <h2>Raise a concern</h2>
        <p>
          To report a conduct or harassment matter, or to ask the committee anything about these
          policies, email <a href={`mailto:${contact.emails.general}`}>{contact.emails.general}</a>.
          Reports are handled confidentially under the anti-harassment policy.
        </p>
      </Prose>
    </>
  )
}
