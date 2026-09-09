import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/ultimate/')({
  component: WhatIsUltimatePage,
})

function WhatIsUltimatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Ultimate"
        title="What is Ultimate?"
        lead="Ultimate Frisbee, also known as Ultimate, is a fast-paced 7-a-side non-contact, self-refereed team sport played with a flying disc. Divisions include Men's (Opens), Women's and Mixed."
      />
      <Prose>
        <p>
          Ultimate combines elements of American football and netball. Two teams compete to score
          points by passing the disc around. A point is scored by catching the disc in the end zone.
          No contact is allowed and you can't run with the disc, but it can be passed in any
          direction and over any distance. If the throwing team drops the disc or throws it out of
          bounds, the other team gets possession. The team with the most points at the end wins.
          Games under WFDF rules are played to 15 points or 100 minutes.
        </p>
        <h2>Learn more</h2>
        <ul>
          <li>
            <Link to="/ultimate/basics">Ultimate basics</Link>: the field, how play starts, scoring
            and turnovers, explained for beginners.
          </li>
          <li>
            <Link to="/ultimate/rules">Rules and accreditation</Link>: the official WFDF rules, the
            free accreditation test every competitive player must pass, and Spirit of the Game.
          </li>
          <li>
            <Link to="/about/policies">Policies and guidelines</Link>: the constitution, code of
            conduct, anti-harassment policy and inclusion guidelines we play under.
          </li>
          <li>
            <Link to="/pickup">Pickup</Link>: the easiest way to try the sport. Turn up, play, no
            membership needed.
          </li>
        </ul>
        <h2>Watch</h2>
        <p>
          A five-minute introduction:{' '}
          <ExternalLink href={contact.external.howToPlayVideo}>
            How to Play Ultimate Frisbee for Beginners
          </ExternalLink>{' '}
          (Excel Ultimate, YouTube).
        </p>
      </Prose>
    </>
  )
}
