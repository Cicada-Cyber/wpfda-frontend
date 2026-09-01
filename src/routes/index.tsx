import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Western Province Flying Disc Association</h1>
      <p className="max-w-2xl text-gray-600">
        Ultimate and flying disc sports in the Western Province — news, league calendars, fixtures
        and clubs. Site under construction.
      </p>
    </section>
  )
}
