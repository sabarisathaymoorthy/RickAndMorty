import { getCharactersDetails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/character/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  const { data: characterData } = useQuery({
    queryKey: ["character-details", id],
    queryFn: () => {
      getCharactersDetails(id);
    },
  });

  console.log("characterData", characterData);
  return <div>Hello "/character/$id"! {id}</div>;
}
