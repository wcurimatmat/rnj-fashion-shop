import { useState } from "react";

import { cn } from "@/Shadcn/lib/utils";
import { flexRender } from "@tanstack/react-table";
import Paginate from "@/Components/Shared/Paginate/Paginate";
import { ScrollArea } from "@/Shadcn/components/ui/scroll-area";
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Shadcn/components/ui/table";

function DataTable({ columns, data }) {
    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <>
            <ScrollArea className="h-[400px] rounded border">
                <Table className="table-fixed">
                    <TableHeader className="">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        className={`sticky top-0 bg-zinc-100 py-3 ${cn(header.column.columnDef.meta?.className)} px-4 font-bold`}
                                        key={header.id}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="pr-5">
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} className="pr-5">
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        className={` ${cn(cell.column.columnDef.meta?.className)} px-4`}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
            <div className="mt-5">
                <Paginate />
            </div>
        </>
    );
}

export default DataTable;
