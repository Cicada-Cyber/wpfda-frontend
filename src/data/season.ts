// The shape of a typical year. Exact dates are announced closer to the time and
// will come from the events calendar once the API is live.
export type SeasonBlock = { title: string; note?: string; events: { name: string; when: string }[] }

export const seasonStructure: SeasonBlock[] = [
  {
    title: "Open & Women's season",
    note: 'First half of the year',
    events: [
      { name: 'Draft League', when: 'February – March' },
      { name: "Open & Women's Competitive League", when: 'March – April' },
      { name: "Open & Women's Regionals", when: 'March / April' },
      { name: "Open & Women's Nationals", when: 'April / May' },
    ],
  },
  {
    title: 'Mixed season',
    note: 'Second half of the year',
    events: [
      { name: 'Draft League', when: 'July – August' },
      { name: 'Mixed Club League', when: 'August – November' },
      { name: 'UCT indoor tournament', when: 'September / October' },
      { name: 'Rocktober, Gauteng', when: 'October' },
      { name: 'Mixed Regionals', when: 'October / November' },
      { name: 'Mixed Nationals', when: 'October / November' },
    ],
  },
  {
    title: 'Off-season events',
    events: [
      { name: 'UCT May Day', when: 'May' },
      { name: "Awesome 4Some 4's Tournament", when: 'June' },
      { name: 'Bafazi Fund Goaltimate League', when: 'May – July' },
      { name: 'Masters League', when: 'November – December' },
    ],
  },
]
