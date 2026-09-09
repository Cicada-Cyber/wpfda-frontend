import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

// Admin portal shell for WPFDA admins. Role gating happens in the API.
export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/admin" className="font-bold tracking-wide">
            WPFDA Admin
          </Link>
          <Link to="/" className="text-sm hover:underline">
            ← Public site
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
