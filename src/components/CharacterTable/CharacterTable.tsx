import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { characterProps } from "./typings";
import { useNavigate } from "@tanstack/react-router";

export const CharacterTable = ({
  characterDetails,
}: {
  characterDetails: characterProps[];
}) => {
  const navigate = useNavigate();
  const columnHelper = createColumnHelper<characterProps>();

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Species",
      accessorKey: "species",
    },
    columnHelper.accessor("image", {
      header: "Image",
      cell: (info) => (
        <div className="flex justify-center">
          <img
            src={info.getValue()}
            alt="Product"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        </div>
      ),
    }),
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
  ];

  console.log("characterDetails", characterDetails);
  const table = useReactTable({
    data: characterDetails,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleCharacterNav = (id: number) => {
    console.log("id", id);
    navigate({
      to: "/character/$id",
      params: {
        id: id.toString(),
      },
    });
  };

  return (
    <>
      <div>Table</div>
      <table className="p-2 m-2 w-8/12 border-separate border-spacing-y-2">
        <thead>
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup?.id} className="text-center">
              {headerGroup?.headers?.map((header) => (
                <th
                  key={header?.id}
                  className="flex-col border border-gray-500"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table?.getRowModel()?.rows?.map((row) => (
            <tr
              key={row?.id}
              className="text-center cursor-pointer"
              onClick={() => {
                handleCharacterNav(row?.original?.id);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell?.id} className="border border-gray-400">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
