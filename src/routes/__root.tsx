import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <>
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  )
}

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-brand text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-gray-600">That page doesn't exist or has moved.</p>
      <a href="/" className="text-brand-blue mt-6 inline-block font-semibold hover:underline">
        Back to the home page
      </a>
    </div>
  )
}
