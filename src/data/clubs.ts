// Club directory, migrated from the old site on 2026-09-09. This is the seed for the
// `club` and `team` tables; once the API is live the directory reads from there.
export type Division = 'mixed' | 'opens' | 'womens'

export const divisionLabel: Record<Division, string> = {
  mixed: 'Mixed',
  opens: 'Opens',
  womens: "Women's",
}

export type ClubSection = { heading: string; paragraphs?: string[]; bullets?: string[] }

export type Club = {
  slug: string
  name: string
  divisions: Division[]
  summary: string
  teams?: { name: string; division: Division; instagram?: string }[]
  contact: {
    email?: string
    instagram?: string
    facebook?: string
    website?: string
    whatsapp?: string
    captains?: string
  }
  homeField: { name: string; mapUrl?: string }
  training: string[]
  sections: ClubSection[]
  recruitment?: string
  /** White-on-transparent wordmark in public/clubs/, shown on a brand-coloured banner. */
  logo?: string
  photos?: { src: string; caption: string }[]
}

export const clubs: Club[] = [
  {
    slug: 'chilli-ultimate',
    logo: '/clubs/chilli-ultimate.png',
    photos: [
      { src: '/clubs/chilli-ultimate-heat.jpg', caption: 'Chilli Heat' },
      { src: '/clubs/chilli-ultimate-legends.jpg', caption: 'Chilli Legends' },
    ],
    name: 'Chilli Ultimate',
    divisions: ['mixed'],
    summary:
      'Two mixed teams, Chilli Heat and Chilli Legends. Pioneers, fierce competitors and a close-knit family.',
    teams: [
      {
        name: 'Chilli Heat',
        division: 'mixed',
        instagram: 'https://www.instagram.com/chilli.heat',
      },
      {
        name: 'Chilli Legends',
        division: 'mixed',
        instagram: 'https://www.instagram.com/chillilegends',
      },
    ],
    contact: { email: 'chilliult.president@gmail.com' },
    homeField: { name: 'Scoville Oval, Pinelands' },
    training: ['Mondays 18:30–20:30', 'Wednesdays 18:30–20:30', 'Saturdays 09:00–11:00'],
    sections: [
      {
        heading: 'Club background',
        paragraphs: [
          'Chilli Ultimate was founded in 2006 as a single mixed team. The team quickly rose to the top of South African competitive ultimate, winning several National Championships and sending several of our players to represent South Africa at World Championships over the years. As the team grew in numbers, additions and offshoots to the club structure evolved: two mixed teams, Heat and Legends; a women’s team, Hot Sauce; Chilli Open; and Chilli Masters. All teams are award winners in their respective arenas.',
          'Chilli Club prides itself on being pioneers, fierce competitors, and fair and spirited sportspeople. A close-knit, loyal family of Chillies is looking to welcome new and experienced players to the squad. Come find your niche!',
        ],
      },
      {
        heading: 'Accolades',
        bullets: [
          'Cape Town Mixed Regionals champions 2021, 2023, 2024, 2025; 2nd place 2022',
          'SA Mixed Nationals champions 2008, 2009, 2010, 2025; 2nd place 2013, 2014, 2015, 2023, 2024',
          'Rocktober champions 2008, 2009, 2015',
          'Opens Nationals champions 2015',
          'Unofficial Masters champions 2012; 2nd place 2013, 2014',
          'WMUCC 2022 Mixed Masters (Legends); WUCC 2026 Club Championships (Heat)',
        ],
      },
      {
        heading: 'Who would fit in?',
        paragraphs: [
          'Anyone looking to have fun playing the game we all love will enjoy the Chilli family. Both social and competitive players are welcome. Expect good hard training sessions led by our innovative and seasoned coaches, as well as lazy post-practice braais, card games and a general feel of fiercely loyal family. Chilli players aim to compete at the highest level of competitive ultimate in the country and uphold good, principled sportsmanship while playing for each other.',
        ],
      },
    ],
  },
  {
    slug: 'ghost-ultimate',
    logo: '/clubs/ghost-ultimate.png',
    photos: [{ src: '/clubs/ghost-ultimate-team.jpg', caption: 'Team photo' }],
    name: 'Ghost Ultimate',
    divisions: ['mixed'],
    summary: 'Work hard, get better, have fun together. Founded 2012 in the southern suburbs.',
    contact: {
      email: 'ghost-ultimate-coca@googlegroups.com',
      instagram: 'https://www.instagram.com/ghostultimate',
      facebook: 'https://www.facebook.com/GhostUltimateClub',
    },
    homeField: { name: 'Cape Town Cricket Club, Plumstead' },
    training: ['Mondays 18:30–20:30', 'Wednesdays 18:30–20:30', 'Saturdays 09:00–11:00'],
    sections: [
      {
        heading: 'Club background',
        paragraphs: [
          'Ghost Ultimate Club was founded in 2012 on the blustery plains of Cape Town’s southern suburbs. Since then we have gone mud-wrestling in Italy, on safari in Kenya and shotskiing all over the country. We regularly frequent the Mother City’s drinking holes, where we make human pyramids and swap items of clothing for fun. At tournaments you will find us at the loud table doing rounds of Lah Dee Dah because it is mandatory. We also play ultimate and sometimes do drills.',
        ],
      },
      {
        heading: 'Club ethos',
        paragraphs: [
          'Our team goals are to “Work hard, Get better, Have fun”. Our mission has been to set a new standard for player development and competitive Ultimate in Cape Town. We’re a competitive bunch on the field, but we’re among the last to leave the party at the end of the night. Ghost is not just a team but a family of friends who play for each other, and we’d love you to join us.',
        ],
      },
      {
        heading: 'Accolades',
        bullets: [
          'South African Mixed National champions 2012, 2013, 2018',
          'Cape Town Winter League champions 2012',
          'Rocktober champions 2012',
          'Mother City Invitational champions 2014',
          'All-African Championships 2nd place 2017',
          'WUCC 2014 Lecco, Italy; Windmill Wind-Up 2019 Amsterdam',
        ],
      },
      {
        heading: 'Who would fit in?',
        paragraphs: [
          'Ghost welcomes all interested players who are keen to improve and contribute to making Ghost the best team it can be. Our depth of experience means players of all levels benefit from training with Ghost: we have very experienced captains and team members who have trained as coaches and played extensively at international level. One of our main aims is to contribute to Ultimate development in South Africa, and we love teaching new players to love the game as much as we do.',
        ],
      },
    ],
  },
  {
    slug: 'gradient-ultimate',
    logo: '/clubs/gradient-ultimate.png',
    photos: [{ src: '/clubs/gradient-ultimate-team.jpg', caption: 'Team photo' }],
    name: 'Gradient Ultimate',
    divisions: ['opens'],
    summary: 'Established 2025 to grow the Opens league, pairing veteran wisdom with young legs.',
    contact: {
      email: 'gradientultimate@gmail.com',
      instagram: 'https://www.instagram.com/gradientultimate/',
      captains: 'James Granelli & Tom Smyth',
    },
    homeField: { name: 'Cape Town Cricket Club, Plumstead' },
    training: ['Mondays 19:00–21:00', 'Wednesdays 19:00–21:00'],
    sections: [
      {
        heading: 'Team vibe',
        paragraphs: [
          'Gradient was established in 2025 to help grow the Opens League and provide a new place to match veteran players’ skills and wisdom with younger players’ athletic ability and passion. At Gradient we strive to play ultimate that is not only competitive but interesting too, practising new playing styles that embrace the game’s creativity. We are always open to new players, particularly at practice. Get in touch with the captains and they will see how best to fit you in.',
        ],
      },
    ],
  },
  {
    slug: 'hot-sauce-ultimate',
    logo: '/clubs/hot-sauce-ultimate.png',
    photos: [{ src: '/clubs/hot-sauce-ultimate-team.jpg', caption: 'Team photo' }],
    name: 'Hot Sauce Ultimate',
    divisions: ['womens'],
    summary:
      "Competitive women's team, three-time national champions, who just really enjoy playing.",
    contact: { instagram: 'https://www.instagram.com/hot_sauce_ulti' },
    homeField: { name: 'Scoville Oval, Pinelands' },
    training: ['Mondays 18:30–20:30', 'Wednesdays 18:30–20:30'],
    sections: [
      { heading: 'Accolades', bullets: ["3 × Women's National Champions"] },
      {
        heading: 'Team vibe',
        paragraphs: [
          'We’re a competitive women’s ultimate team who just really enjoy playing ultimate. We push each other to play our best, aim high at Nationals and make sure we’re having fun along the way. Whether you’re here to grow, compete, or be part of a great team, we’d love to have you!',
        ],
      },
    ],
  },
  {
    slug: 'maties-ultimate',
    logo: '/clubs/maties-ultimate.png',
    photos: [{ src: '/clubs/maties-ultimate-team.jpg', caption: 'Team photo' }],
    name: 'Maties Ultimate',
    divisions: ['mixed', 'opens', 'womens'],
    summary:
      'Stellenbosch University’s club, fielding teams in all three divisions. Open to non-students too.',
    contact: {
      email: 'maties.ultimate@gmail.com',
      instagram: 'https://www.instagram.com/maties.ultimate',
      facebook: 'https://www.facebook.com/profile.php?id=61588284645692',
    },
    homeField: {
      name: 'Coetzenburg B (Maties Athletics), Stellenbosch',
      mapUrl: 'https://maps.google.com/?q=-33.941372,18.869225',
    },
    training: [
      'Monday 17:15 competitive practice',
      'Tuesday 17:30 Res League or Internal Draft League',
      'Wednesday 17:30 casual pickup',
      'Thursday 17:15 competitive practice',
      'Friday 13:15 Rooi Plein frisbee',
      'Saturday league fixtures (TBC)',
      'Sunday 16:00 beach frisbee or casual pickup',
    ],
    sections: [
      {
        heading: 'Club background',
        paragraphs: [
          'Maties Ultimate, previously known as Stellenbosch Ultimate, was founded by a group of university students and alumni. We come from far-flung origins as the Akkerdiske, who participated in the first ever SA Nationals in 2000. From casual pickups between 2005 and 2010 we became an official university sports club in 2012.',
          'Ultimate in Stellenbosch has been alive for 25 years. Highlights include Maties Women finishing second at OWN 2015 and first at OWN 2021, and the mixed team placing third at Mixed Nationals 2024. Our Residence League held its first fixtures in 2019 and our Internal Draft League kicked off in February 2024.',
        ],
      },
      {
        heading: 'Club ethos',
        paragraphs: [
          'We strive to represent Stellenbosch University to the best of our ability, with both excellent sportsmanship and a competitive spirit. We do not play as individuals but give all we can for the larger Maties team, whose ultimate goal is to win championships. Development is equally critical: we host entry-level leagues and continuously expose new players to the sport. Ultimately, we strive to “Gooi die disc!”',
        ],
      },
      {
        heading: 'Who would fit in?',
        paragraphs: [
          'We have something for everyone: two training sessions a week focused on advanced skills and strategy, preparing us for local leagues and regional and national tournaments in all three divisions, plus two casual sessions a week open to anyone. Most of our players are Stellenbosch University students, but as the only ultimate club in the Stellenbosch area we welcome external members too.',
        ],
      },
      {
        heading: 'Additional fixtures',
        paragraphs: ['We host 3–6 Bumper Evenings a year and 3–4 hat tournaments:'],
        bullets: [
          'Welcoming Tournament: an introduction to ultimate on casual pickup rules, usually in term 1',
          'Crosshatched Frisbee: a fancy-dress festival with two games on the same field, usually in term 2',
          'Fly By Night: an LED tournament with light-up discs and glowsticks, usually in term 3',
          'Huck in die Bosch: our classic hat tournament with a long legacy, usually on 24 September',
        ],
      },
    ],
  },
  {
    slug: 'mutiny-ultimate',
    logo: '/clubs/mutiny-ultimate.png',
    photos: [{ src: '/clubs/mutiny-ultimate-team.jpg', caption: 'Team photo' }],
    name: 'Mutiny Ultimate',
    divisions: ['opens'],
    summary: 'A high-performance Opens collective. Two-time national champions.',
    contact: { instagram: 'https://www.instagram.com/mutiny_ultimate_' },
    homeField: { name: 'Scoville Oval, Pinelands' },
    training: ['Mondays 18:30–20:30', 'Wednesdays 18:30–20:30'],
    sections: [
      {
        heading: 'Accolades',
        bullets: ['2 × Open National Champions, including 2024 SA Open Champions', '2 × runner-up'],
      },
      {
        heading: 'Team vibe',
        paragraphs: [
          'We are a high-performance collective defined by a shared commitment to excellence. For us, competition isn’t just about the scoreboard; it’s about the daily discipline of pushing one another to reach our ceiling. We set our sights high every season, not out of expectation, but because we believe in the work we put in and the potential of the person standing next to us.',
        ],
      },
    ],
    recruitment: 'By invitation.',
  },
  {
    slug: 'nomad-ultimate',
    logo: '/clubs/nomad-ultimate.png',
    photos: [{ src: '/clubs/nomad-ultimate-team.jpg', caption: 'Team photo' }],
    name: 'Nomad Ultimate',
    divisions: ['mixed'],
    summary: 'Founded 2021 by ex-UCT students. Clean, competitive ultimate among friends.',
    contact: { instagram: 'https://www.instagram.com/nomadultimate/' },
    homeField: { name: 'Cape Town Cricket Club, Plumstead' },
    training: ['Mondays 18:30–20:30', 'Wednesdays 18:30–20:30'],
    sections: [
      {
        heading: 'Club history',
        paragraphs: [
          'In late 2019 a group of graduating and recently graduated UCT students started discussing a new team for 2020. We hoped to create a team of friends to play clean, competitive Ultimate while having fun. We managed to get our friends to sign on with promises of whale kit and psychedelic camels (still waiting on the camels). We all know how 2020 went, so come 2021 Nomad was born. The club has grown since and we hope to field two teams once we are big enough.',
        ],
      },
      {
        heading: 'Club ethos',
        bullets: [
          'Play competitive Ultimate: playing hard and well is fun',
          'A high level of sportsmanship and Spirit of the Game: we play with friends against friends',
          'Committed and focused practices: practise like you play',
          'Build team vibe, spirit and friendship',
          'Active and constructive coaching and leadership: feedback is the breakfast of champions',
          'Be a team for its players',
        ],
      },
      {
        heading: 'Accolades',
        bullets: [
          '2021 Cape Town Mixed League 1st; Mixed Regionals 2nd',
          '2022 Cape Town Mixed League 2nd; Mixed Regionals 1st',
          '2022 SA Mixed Nationals 1st',
        ],
      },
      {
        heading: 'Who would fit in?',
        paragraphs: [
          'We are a relatively young team and like to keep pretty fit. We play the basic ultimate structures and play them well. We love having new players and always focus on doing the basics well. Our club has a lot of depth and we try to use all our players equally, in the positions where they are strongest and most comfortable. We’re a pretty goofy team off the field and like hanging out and doing other activities together.',
        ],
      },
    ],
  },
  {
    slug: 'northern-lights',
    logo: '/clubs/northern-lights.png',
    photos: [{ src: '/clubs/northern-lights-team.jpg', caption: 'Team photo' }],
    name: 'Northern Lights Ultimate',
    divisions: ['mixed'],
    summary:
      'Development-focused club in the northern suburbs. A good place for a beginner to start.',
    contact: {
      email: 'northernlights7530@gmail.com',
      facebook: 'https://www.facebook.com/NorthernLightsUltimate/',
      website: 'https://northernlightsultimate.wordpress.com/',
      whatsapp: 'https://goo.gl/xKRXHW',
    },
    homeField: {
      name: 'Tygerberg Medical Campus sports fields, Parow',
      mapUrl:
        'https://www.google.co.za/maps/place/33%C2%B054%2727.2%22S+18%C2%B036%2757.0%22E/@-33.908548,18.6154602,345m',
    },
    training: [
      'Sundays 15:00 social pickup, open to anyone',
      'Thursday evenings training',
      'Some Saturday practices during summer league',
    ],
    sections: [
      {
        heading: 'Club ethos',
        paragraphs: [
          'We are a development-focused club and a good place for a beginner to start. The focus is on building players’ knowledge of the game and introducing them to the ultimate community. For us, progress is measured through understanding of the game, because we believe results will follow, with everything done in good spirit and never letting anything supersede the joy of the game.',
        ],
      },
      {
        heading: 'Who would fit in?',
        paragraphs: [
          'Northern Lights welcomes anyone keen to play ultimate. For those who feel they are not ready for league, we regularly host pickup games and always make an effort to ensure that anyone who wants to learn more is given the opportunity and support to do so.',
          'During the Covid campus closures many students graduated and we could not recruit on campus. If you live in the northern suburbs and are interested in helping get things started again, even just pickup games, please let us know. We still have permission to use the campus fields.',
        ],
      },
    ],
  },
  {
    slug: 'uct-ultimate',
    logo: '/clubs/uct-ultimate.png',
    photos: [
      { src: '/clubs/uct-ultimate-flying-tigers.jpg', caption: 'UCT Flying Tigers' },
      { src: '/clubs/uct-ultimate-bengals.jpg', caption: 'UCT BenGals' },
    ],
    name: 'UCT Ultimate',
    divisions: ['mixed', 'opens', 'womens'],
    summary: 'The first official university ultimate club in Africa. For UCT students and staff.',
    teams: [
      { name: 'UCT Flying Tigers', division: 'mixed' },
      { name: 'UCT Roaring Tigers', division: 'mixed' },
      { name: 'UCT ManCubs', division: 'opens' },
      { name: 'UCT BenGals', division: 'womens' },
    ],
    contact: {
      email: 'uctultimate.info@gmail.com',
      instagram: 'https://www.instagram.com/uct_ultimate',
      facebook: 'https://www.facebook.com/UCTUltimate',
    },
    homeField: { name: 'Woolsack Oval, UCT middle campus' },
    training: [
      'Wednesdays 17:30–19:30 (compulsory)',
      'Thursdays 17:30–19:30',
      'Fridays 17:00–19:00 casual pickup',
      'Saturdays 09:00–12:00 (compulsory)',
    ],
    sections: [
      {
        heading: 'Club background',
        paragraphs: [
          'UCT Ultimate (UCTU) had its first practice in November 2009 and was recognised as an official UCT sports club in February 2010, the first official university ultimate club in Africa. Membership has grown from about 20 social players in 2009 to close to 100 members today.',
          'UCT’s competitive teams are full of athletic and passionate players who always challenge, and often surprise, the more experienced club teams in both the Cape Town leagues and national tournaments. UCTU has organised several successful hat and club-day tournaments open to the wider community, and runs its own 55-player internal league from August to September.',
          'Our mission is first and foremost the development and promotion of ultimate as a university sport. Friday social pickup is strictly non-competitive and introduces new players to the game; Wednesdays are for training and development of members across the whole spectrum from brand new to experienced; closer to big tournaments the 1st and 2nd teams use Saturday mornings for dedicated practice.',
          'In 2012 Stellenbosch and Wits joined UCT in forming their own university clubs, and on 1 September 2012 UCT took on Stellenbosch in South Africa’s first official intervarsity ultimate game. Graduating players feed into the other Cape Town clubs and the wider South African ultimate community.',
        ],
      },
      {
        heading: 'Club ethos',
        paragraphs: [
          'UCTU is firmly committed to the development of ultimate in South Africa and caters to all players, from those just starting out to those who want to play at the highest competitive level. We hold Spirit of the Game in the highest regard and aim to produce competitive, spirited teams for all the major tournaments. Fun and enjoyment are paramount, and we love sharing the game with new players. We also host the May Day hat tournament and the UCT indoor tournament.',
        ],
      },
      {
        heading: 'Who would fit in?',
        paragraphs: [
          'Players must be registered students at UCT or employees of UCT. We have three levels of ultimate represented: competitive, developing and social.',
        ],
      },
    ],
  },
]

// Teams that compete in the league but have no club page of their own.
export const otherTeams: { name: string; division: Division; link?: string }[] = [
  { name: 'Craft', division: 'womens', link: 'https://www.instagram.com/craft_ultimate/' },
]

// RSA national teams, usually active before and during World Championship cycles.
export const nationalTeams: { name: string; description: string; link: string }[] = [
  {
    name: 'Wild Dogs',
    description: 'National U24 Mixed team',
    link: 'https://www.instagram.com/rsawilddogs/',
  },
  {
    name: 'Honey Badgers',
    description: 'National Mixed team',
    link: 'https://www.instagram.com/rsawugcmixed/',
  },
  {
    name: 'Mambas',
    description: 'National Opens team',
    link: 'https://www.instagram.com/rsawugcopen/',
  },
  {
    name: 'Bafazi Bafazi',
    description: "National Women's team",
    link: 'https://www.facebook.com/BafaziUltimate',
  },
]

export function getClub(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug)
}

export function clubsInDivision(division: Division): Club[] {
  return clubs.filter((c) => c.divisions.includes(division))
}
