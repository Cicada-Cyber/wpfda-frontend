import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

// Club portal shell. Authentication and the roster tools arrive with the API;
// for now this is the layout every /portal page shares.
export const Route = createFileRoute('/portal')({
  component: PortalLayout,
})

function PortalLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="bg-brand-blue-dark text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/portal" className="font-bold tracking-wide">
            WPFDA Club Portal
          </Link>
          <Link to="/" className="text-sm hover:underline">
            ← Public site
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
