import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characterList/$pageId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/characterTable/$pageId"!</div>
}
