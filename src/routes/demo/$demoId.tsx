import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/$demoId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { demoId } = Route.useParams();

  return <div>Hello "/demo/{demoId}"!</div>;
}
