import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { ButtonAnchor } from '../../../components/Button'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/about/development')({
  component: DevelopmentPage,
})

const schools = [
  'Apex High School, Eerste River / Blue Downs',
  'Claremont High School',
  'Constantia Waldorf',
  'DSK, German International School Cape Town',
  'ISCT, International School of Cape Town (Woodland Heights)',
  'Michael Oak Waldorf',
  'Project 90 (Manyano High and COSAT)',
  'Voortrekker High School, Kenilworth',
  'Westerford High School',
  'Wynberg Girls Junior School',
]

function DevelopmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Development"
        lead="Growing the sport: funding for clinics, fields and equipment, ultimate in schools, and the community programmes we support."
      />
      <Prose>
        <h2>Development fund</h2>
        <p>
          The development fund is available to any member who needs financial assistance for the
          development or growth of the sport, such as funds to run a clinic, sponsor a field for a
          league, or buy equipment. Submitting an application does not guarantee funding: the
          committee discusses each request and contacts the applicant with the outcome.
        </p>
        <ButtonAnchor href={contact.forms.developmentFunding}>
          Apply for development funding
        </ButtonAnchor>

        <h2>High school ultimate</h2>
        <p>
          A few schools in the province offer ultimate and we would love to expand this. Want to
          start ultimate at your high school or youth group? Through our development coordinator we
          can support a school or group to introduce the game as part of PE or as an extramural.
          Once kids are playing and understand the basic rules, they are invited to weekend
          mini-tournaments for high-school-age players. Schools and groups where ultimate has been
          introduced include:
        </p>
        <ul>
          {schools.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p>
          To get your school or youth group involved, email{' '}
          <a href={`mailto:${contact.emails.general}`}>{contact.emails.general}</a>.
        </p>

        <h2>Jula iSitya NPO</h2>
        <img
          src="/development/jula-isitya-logo.png"
          alt="Jula iSitya: throw a plate"
          className="float-right ml-6 mb-4 w-40"
        />
        <p>
          <em>Jula iSitya</em> is an isiXhosa phrase meaning “throw a plate”. Jula iSitya is a Cape
          Town non-profit first conceptualised by Asanda Nanise in 2021. Asanda grew up in
          Khayelitsha, started playing ultimate at eleven, and credits the sport for his own journey
          out of the cycle of poverty. The organisation was founded on his vision to help youth from
          marginalised backgrounds uplift themselves through ultimate and the principles of Spirit
          of the Game. It became a registered NPO in January 2024 and runs active programmes in
          several schools and in Pollsmoor Prison.
        </p>
        <h3>Pollsmoor Prison programme</h3>
        <p>
          Weekly ultimate sessions for inmates, designed to build fitness and to use Spirit of the
          Game to teach life skills such as effective communication, respectful conduct and fair
          competition, supporting rehabilitation and offering a community to transition back into
          after release.
        </p>
        <h3>Schools programme</h3>
        <p>
          What started in 2022 as training for twenty learners at Apex High School now serves forty
          learners across four schools, with training twice a week and an inter-schools league
          hosted every second Friday of the month.
        </p>
        <div className="clear-both grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['jula-isitya-huddle.png', 'Players in a huddle at a Jula iSitya session'],
            ['jula-isitya-game.jpg', 'A Jula iSitya game in progress'],
            ['jula-isitya-team.jpg', 'Jula iSitya team photo'],
            ['jula-isitya-catch.jpg', 'A player laying out for a catch'],
          ].map(([file, alt]) => (
            <img
              key={file}
              src={`/development/${file}`}
              alt={alt}
              loading="lazy"
              className="aspect-square w-full rounded-lg object-cover"
            />
          ))}
        </div>
        <p>
          To volunteer, start a programme in your school or community, or donate, contact Jula
          iSitya at <a href="mailto:aseinanise@gmail.com">aseinanise@gmail.com</a>, or follow them
          on <ExternalLink href="https://www.instagram.com/jula_isitya/">Instagram</ExternalLink>{' '}
          and <ExternalLink href="https://www.tiktok.com/@jula_isitya">TikTok</ExternalLink>.
        </p>
      </Prose>
    </>
  )
}
