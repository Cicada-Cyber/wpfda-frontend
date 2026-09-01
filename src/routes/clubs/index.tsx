import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/clubs/')({
  component: ClubsPage,
})

function ClubsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Clubs</h1>
      <p className="text-gray-600">Directory of clubs affiliated to the WPFDA. Coming soon.</p>
    </section>
  )
}
