import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/')({
  component: NewsPage,
})

function NewsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">News</h1>
      <p className="text-gray-600">Latest WPFDA news and announcements will appear here.</p>
    </section>
  )
}
