// Final league standings by season, migrated from the old site. Once results are
// captured in the platform, standings are computed and this file becomes archive only.
export type SeasonResult = {
  year: number
  season: 'Open & Women' | 'Mixed'
  note?: string
  divisions: { name: string; standings: string[] }[]
}

export const leagueHistory: SeasonResult[] = [
  {
    year: 2026,
    season: 'Mixed',
    note: 'In progress. Follow it live on StallCount.',
    divisions: [],
  },
  {
    year: 2026,
    season: 'Open & Women',
    divisions: [
      {
        name: 'Open',
        standings: ['Mutiny', 'Gradient', 'Zephyr', "Maties Ma'Gents", 'UCT ManCubs'],
      },
      { name: 'Women', standings: ['Hot Sauce', "Maties Ma'Ladies", 'UCT BenGals', 'Craft'] },
    ],
  },
  {
    year: 2025,
    season: 'Mixed',
    divisions: [
      {
        name: 'Division 1',
        standings: [
          'Chilli Heat',
          'Maties Meerkats',
          'Nomad',
          'Ghost',
          'UCT Flying Tigers',
          'Chilli Legends',
        ],
      },
      {
        name: 'Division 2',
        standings: [
          'Westerford',
          'Maties Mountain Leopards',
          'Northern Lights',
          'UCT Roaring Tigers',
          'Moya Flyers',
        ],
      },
    ],
  },
  {
    year: 2025,
    season: 'Open & Women',
    divisions: [
      { name: 'Open', standings: ['Mutiny', 'Maties Muzz Mullets', 'Gradient', 'UCT ManCubs'] },
      { name: 'Women', standings: ['Hot Sauce', 'UCT BenGals', "Ma'Ladies"] },
    ],
  },
  {
    year: 2024,
    season: 'Mixed',
    divisions: [
      {
        name: 'Mixed',
        standings: [
          'Chilli Heat',
          'Nomad',
          'Roaring Tigers',
          'Chilli Legends',
          'Maties Meerkats',
          'Ghost',
          'Flying Tigers',
          'Maties Mountain Leopards',
        ],
      },
    ],
  },
  { year: 2024, season: 'Open & Women', note: 'Skipped due to league changes', divisions: [] },
  {
    year: 2023,
    season: 'Mixed',
    divisions: [
      {
        name: 'Mixed',
        standings: [
          'Chilli Heat',
          'Nomad',
          'Chilli Legends',
          'Ghost',
          'UCT Flying Tigers',
          'Maties Ultimate',
          'UCT Roaring Tigers',
        ],
      },
    ],
  },
  {
    year: 2023,
    season: 'Open & Women',
    divisions: [
      {
        name: 'Open',
        standings: ['Mutiny 2', 'Mutiny 1', 'Maties Maroon Men', 'Homebru', 'UCT ManCubs'],
      },
      { name: 'Women', standings: ['Hot Sauce', 'UCT BenGals', 'Craft'] },
    ],
  },
  {
    year: 2022,
    season: 'Mixed',
    divisions: [
      {
        name: 'Mixed',
        standings: [
          'Nomad',
          'Chilli Heat',
          'Chilli Legends',
          'UCT Flying Tigers',
          'Catch 22',
          'Legends Scotland',
          'Maties Ultimate',
          'UCT Roaring Tigers',
        ],
      },
    ],
  },
  {
    year: 2022,
    season: 'Open & Women',
    divisions: [
      {
        name: 'Open',
        standings: [
          'Mutiny 1',
          'UCT ManCubs',
          'HomeBru',
          'UCT Opens 2',
          'Mutiny 2',
          'Maties Disconnect',
        ],
      },
      { name: 'Women', standings: ['Craft', 'Hot Sauce', 'UCT BenGals', 'Leftovers'] },
    ],
  },
  { year: 2021, season: 'Mixed', note: 'Cancelled due to Covid', divisions: [] },
  { year: 2021, season: 'Open & Women', note: 'Cancelled due to Covid', divisions: [] },
  {
    year: 2020,
    season: 'Mixed',
    divisions: [
      {
        name: 'Mixed',
        standings: [
          'Maties',
          'Catch 22',
          'Chilli Heat',
          'Chilli Legends',
          'Vikings',
          'Ghost',
          'UCT Flying Tigers',
          'UCT Roaring Tigers',
          'UCT Crouching Tigers',
          'Northern Lights',
        ],
      },
    ],
  },
  {
    year: 2019,
    season: 'Mixed',
    divisions: [
      {
        name: 'Mixed',
        standings: [
          'UCT Flying Tigers',
          'Catch 22',
          'Chilli Heat',
          'Ghost',
          'Maties 1',
          'Chilli Legends',
          'Northern Lights',
          'UCT Roaring Tigers',
          'UCT Crouching Tigers',
          'Sakusa',
          'Maties 2',
        ],
      },
    ],
  },
]
