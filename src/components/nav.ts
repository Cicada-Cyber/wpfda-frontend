// Public-site navigation. Groups render as dropdowns on desktop and as
// sections in the mobile menu. Keep this the single source of the site map.
export type NavLink = { to: string; label: string }
export type NavGroup = { label: string; to?: string; children: NavLink[] }
export type NavItem = NavLink | NavGroup

export const primaryNav: NavItem[] = [
  { to: '/news', label: 'News' },
  {
    label: 'Ultimate',
    to: '/ultimate',
    children: [
      { to: '/ultimate', label: 'What is Ultimate?' },
      { to: '/ultimate/basics', label: 'Basics' },
      { to: '/ultimate/rules', label: 'Rules & accreditation' },
      { to: '/pickup', label: 'Pickup' },
    ],
  },
  {
    label: 'League',
    to: '/league',
    children: [
      { to: '/league', label: 'League overview' },
      { to: '/calendar', label: 'Calendar' },
      { to: '/league/standings', label: 'Fixtures & standings' },
    ],
  },
  { to: '/clubs', label: 'Clubs' },
  {
    label: 'About',
    to: '/about',
    children: [
      { to: '/about', label: 'About WPFDA' },
      { to: '/about/committee', label: 'Committee' },
      { to: '/about/development', label: 'Development' },
      { to: '/about/policies', label: 'Policies & constitution' },
      { to: '/about/merch', label: 'Merch' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}
