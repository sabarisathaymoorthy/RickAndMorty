import { CharacterTable } from "@/components/CharacterTable/CharacterTable";
import { getAllCharacters } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/characterList/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: characterDetails, refetch } = useQuery({
    queryKey: ["all"],
    queryFn: getAllCharacters,
  });

  console.log("characterDetails", characterDetails);
  return (
    <div>
      {characterDetails?.results?.length > 0 && (
        <CharacterTable characterDetails={characterDetails?.results} />
      )}
    </div>
  );
}
