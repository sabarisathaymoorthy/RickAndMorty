import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1>Hii Welcome to the World of Rick and Morty</h1>
      <button
        className="p-2 border-gray-600 border cursor-pointer"
        onClick={() => {
          navigate({
            to: "/characterList",
            search: {
              page: 1,
            },
          });
        }}
      >
        {"Click here to get a quick view of the characters"}
      </button>
    </div>
  );
}
