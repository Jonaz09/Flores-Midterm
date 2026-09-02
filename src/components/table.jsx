import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Box } from "@mui/material";

export default function GadgetTable({ data, onRowClick }) {
  const [pageIndex, setPageIndex] = useState(0);

  const columns = [
    { header: "Gadget Name", accessorKey: "gadgetName" },
    { header: "Category", accessorKey: "category" },
    { header: "Manufacturer", accessorKey: "manufacturer" },
    { header: "Health Rating", accessorKey: "healthRating" },
    { header: "Store Name", accessorKey: "storeName" },   
    { header: "User Role", accessorKey: "userRole" },
  ];

  const table = useReactTable({
    data,
    columns,
    state: { pagination: { pageIndex, pageSize: 5 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        setPageIndex(updater({ pageIndex }).pageIndex);
      } else {
        setPageIndex(updater.pageIndex);
      }
    },
  });

  const totalPages = table.getPageCount();

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => onRowClick && onRowClick(row.original)}
              style={{ cursor: "pointer" }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={i === pageIndex ? "contained" : "outlined"}
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
