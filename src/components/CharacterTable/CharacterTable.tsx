import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { characterProps } from "./typings";
import { columns } from "./tableColumns";

export const CharacterTable = ({
  characterDetails,
}: {
  characterDetails: characterProps[];
}) => {
  console.log("characterDetails", characterDetails);
  const table = useReactTable({
    data: characterDetails,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("table", table);
  return (
    <>
      <div>Table</div>
      <table border={1} cellPadding="8" cellSpacing="0">
        <thead>
          {table
            ?.getHeaderGroups()
            ?.map((headerGroup) => (
              <tr key={headerGroup?.id}>
                {headerGroup?.headers?.map((header) => (
                  <th key={header?.id}>
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
            <tr key={row?.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell?.id}>
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
