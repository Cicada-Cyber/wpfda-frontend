export type Pickup = {
  name: string
  venue: string
  when: string[]
  notes?: string[]
  surface: 'grass' | 'beach'
}

export const pickups: Pickup[] = [
  {
    name: 'Rondebosch',
    venue: "Rondebosch Boys' High sports fields, Oakhurst Avenue",
    when: ['Mondays 17:15', 'Sundays 15:00'],
    notes: ['No soccer boots or studs allowed'],
    surface: 'grass',
  },
  {
    name: 'Pinelands',
    venue: 'Scoville Cricket Oval, bottom field',
    when: ['Thursdays 17:15'],
    notes: ['No soccer boots or studs allowed'],
    surface: 'grass',
  },
  {
    name: 'Maties pickup',
    venue: 'Coetzenburg B fields, Stellenbosch',
    when: ['Wednesdays 17:50', 'Sundays 16:00'],
    notes: [
      'Coordinated by students, so less active during the holidays',
      'Extra pickups (2–3 times a week) during exam time in June and November',
    ],
    surface: 'grass',
  },
  {
    name: 'UCT social',
    venue: 'Woolsack Cricket Oval, UCT middle campus',
    when: ['Fridays 17:00'],
    notes: ['Coordinated by students, so might be less active during the holidays'],
    surface: 'grass',
  },
  {
    name: 'Beach pickup, Clifton',
    venue: 'Clifton 1st or 2nd beach, whichever is available',
    when: ['Sundays, first pull 09:00–10:00 (earlier in summer to get beach space)'],
    notes: ['Details are confirmed on the WhatsApp group a few days before'],
    surface: 'beach',
  },
  {
    name: 'Beach pickup, Muizenberg',
    venue: 'Behind the colourful huts; nearest parking at the water slides',
    when: ['Saturday or Sunday 09:30'],
    notes: ['Details are confirmed on the WhatsApp group a few days before'],
    surface: 'beach',
  },
]
