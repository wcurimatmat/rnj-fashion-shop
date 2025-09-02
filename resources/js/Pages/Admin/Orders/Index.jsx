import { useState } from "react";

import { ArrowUpDown, ShoppingBag } from "lucide-react";

import AdminLayout from "@/Layouts/Admin/AdminLayout";
import { Button } from "@/Shadcn/components/ui/button";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Shadcn/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Shadcn/components/ui/table";
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    sortingFns,
    useReactTable,
} from "@tanstack/react-table";

import { payments } from "@/Utils/Admin/Payments";

import { ScrollArea } from "@/Shadcn/components/ui/scroll-area";

function Index() {
    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data: payments,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <AdminLayout>
            <PageHeader title="Manage Orders" />

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-1">
                        <ShoppingBag className="size-4" />
                        Orders
                    </CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[400px] rounded border pr-2">
                        <Table className="table-fixed">
                            <TableHeader className="">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <TableHead
                                                className="sticky top-0 bg-zinc-100 py-3"
                                                key={header.id}
                                            >
                                                <div
                                                    variant="ghost"
                                                    className="flex items-center gap-1"
                                                >
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column
                                                                  .columnDef
                                                                  .header,
                                                              header.getContext(),
                                                          )}
                                                </div>
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody className="pr-5">
                                {table.getRowModel().rows.map((row) => (
                                    <TableRow className="pr-5">
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell className="pr-5">
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
                </CardContent>
            </Card>
        </AdminLayout>
    );
}

const columns = [
    { accessorKey: "id", header: () => "id" },
    { accessorKey: "amount", header: () => "Amount" },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="cursor-pointer"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Name
                    <ArrowUpDown size="size-4" strokeWidth={1.4} />
                </Button>
            );
        },
    },
    { accessorKey: "status", header: () => "Status" },
    { accessorKey: "email", header: () => "Email" },
];

export default Index;
