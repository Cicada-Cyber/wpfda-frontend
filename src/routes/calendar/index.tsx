import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/calendar/')({
  component: CalendarPage,
})

function CalendarPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Calendar</h1>
      <p className="text-gray-600">
        Season calendar — game times, venues and who plays when. Coming soon, with an iCal feed.
      </p>
    </section>
  )
}
