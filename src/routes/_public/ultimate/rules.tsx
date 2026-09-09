import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/ultimate/rules')({
  component: RulesPage,
})

function RulesPage() {
  const x = contact.external
  return (
    <>
      <PageHeader
        eyebrow="Ultimate"
        title="Rules and accreditation"
        lead="Ultimate is self-officiated. If you want to play competitive leagues and tournaments, you must pass a rules accreditation test."
      />
      <Prose>
        <h2>Rules accreditation</h2>
        <ul>
          <li>
            The official rules of the sport are published by WFDF at{' '}
            <ExternalLink href={x.wfdfRules}>rules.wfdf.sport</ExternalLink>. A PDF of the most
            recent rules is on WFDF's{' '}
            <ExternalLink href={x.wfdfResources}>resources page</ExternalLink>.
          </li>
          <li>
            Take the accreditation test at{' '}
            <ExternalLink href={x.wfdfAccreditation}>rules.wfdf.sport/accreditation</ExternalLink>.
            It is free and there is no limit on attempts. There are two levels, Standard and
            Advanced. Standard is usually accepted for beginners; intermediate and experienced
            players are strongly encouraged to pass Advanced.
          </li>
          <li>
            Hand signals are part of self-officiating. Learn them from WFDF's{' '}
            <ExternalLink href={x.wfdfHandSignals}>hand signals PDF</ExternalLink>.
          </li>
        </ul>

        <h2>Spirit of the Game</h2>
        <p>
          “Ultimate stresses sportsmanship and fair play. Competitive play is encouraged, but never
          at the expense of respect between players, adherence to the rules, and the basic joy of
          play.” In other words: play hard but fair, with all calls acknowledged and dealt with
          calmly as the rules describe. Remember that you may not always have the best perspective
          when making a call.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border-green rounded-lg border-l-4 bg-gray-50 p-4">
            <h3 className="mt-0">Good spirit looks like</h3>
            <ul>
              <li>Captains start the game on time</li>
              <li>Players introduce themselves</li>
              <li>Captains know the rules and help new players with them</li>
              <li>Calls are dealt with calmly</li>
              <li>You consider the skill level of the opposing team</li>
              <li>Teams give a cheer at the end of the game</li>
            </ul>
          </div>
          <div className="border-orange rounded-lg border-l-4 bg-gray-50 p-4">
            <h3 className="mt-0">Poor spirit looks like</h3>
            <ul>
              <li>Offensive or demeaning language</li>
              <li>No respect for other players</li>
              <li>Intentional delays to the game</li>
              <li>Yelling “contest” at every call, or unjustified calls</li>
              <li>Using a player's poor knowledge of the rules against them</li>
              <li>Spiking the disc</li>
            </ul>
          </div>
        </div>
        <p>
          WFDF's <ExternalLink href={x.wfdfSpiritOfTheGame}>Spirit of the Game</ExternalLink> pages
          cover spirit scoring, spirit circles and the roles of spirit captains and directors. See
          also our <Link to="/about/policies">policies and guidelines</Link>.
        </p>

        <h2>The playing field</h2>
        <img
          src="/rules/field.png"
          alt="Ultimate field: 100 m long by 37 m wide, with 18 m end zones and a 64 m central zone"
          className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-2"
        />
        <h2>Hand signals</h2>
        <p>
          Because the sport is self-officiated, you need to know the hand signals to play
          competitive games.
        </p>
        <img
          src="/rules/hand-signals.png"
          alt="WFDF hand signals for calls such as foul, violation, goal, contest, travel, pick and time-out"
          className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-2"
        />
        <h2>Governing bodies</h2>
        <ul>
          <li>
            The <ExternalLink href={x.wfdf}>World Flying Disc Federation (WFDF)</ExternalLink> is
            the governing body for the rules of Ultimate we follow.
          </li>
          <li>
            The{' '}
            <ExternalLink href={x.safda}>
              South African Flying Disc Association (SAFDA)
            </ExternalLink>{' '}
            runs Mixed, Opens and Women's Nationals and selects the national and club teams that
            represent South Africa at WFDF championships. WPFDA is SAFDA's provincial association
            for the Western Province.
          </li>
        </ul>
      </Prose>
    </>
  )
}
