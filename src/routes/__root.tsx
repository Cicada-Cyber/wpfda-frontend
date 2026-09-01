import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootLayout,
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/news', label: 'News' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/clubs', label: 'Clubs' },
] as const

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="bg-brand text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-bold tracking-wide">
            WPFDA
          </Link>
          <nav className="flex gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-accent [&.active]:text-accent [&.active]:font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Western Province Flying Disc Association · affiliated to SAFDA
      </footer>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  )
}
