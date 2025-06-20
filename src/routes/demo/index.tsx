import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>
        <Link to="/demo/$demoId" params={{ demoId: "123" }}>
          demo 123
        </Link>
      </div>
      Hello "/demo/"!
    </div>
  );
}
