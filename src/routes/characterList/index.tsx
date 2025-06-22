import { CharacterTable } from "@/components/CharacterTable/CharacterTable";
import { getAllCharacters } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/characterList/")({
  component: RouteComponent,
  validateSearch: z.object({
    page: z.coerce.number().optional(),
  }),
});

function RouteComponent() {
  const { page = 1 } = useSearch({ from: "/characterList/" });
  const navigate = useNavigate();

  const { data: characterDetails } = useQuery({
    queryKey: ["all", page],
    queryFn: () => getAllCharacters(page ?? 1),
  });

  const handlePageChange = (navStep: number) => {
    const toPage = page + navStep;
    if (toPage > 0 && characterDetails?.info?.pages >= toPage) {
      navigate({
        to: "/characterList",
        search: {
          page: toPage,
        },
      });
    }
  };

  return (
    <div>
      {characterDetails?.results?.length > 0 && (
        <>
          <CharacterTable characterDetails={characterDetails?.results} />
          <div className="p-2 flex-row items-center">
            <button
              disabled={page >= characterDetails?.info?.pages}
              className="p-5 border border-gray-400 cursor-pointer m-4"
              onClick={() => {
                handlePageChange(1);
              }}
            >
              {"Next"}
            </button>
            <button
              disabled={page <= 0}
              className="p-5  border border-gray-400 cursor-pointer"
              onClick={() => {
                handlePageChange(-1);
              }}
            >
              {"Prev"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
