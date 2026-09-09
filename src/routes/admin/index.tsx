import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../components/PageHeader'

export const Route = createFileRoute('/admin/')({
  component: AdminHome,
})

function AdminHome() {
  return (
    <PageHeader
      title="Admin portal"
      lead="Member register, imports and exports, events and notifications. Available once the API is deployed."
    />
  )
}
