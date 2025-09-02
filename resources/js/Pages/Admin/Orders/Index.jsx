import { useState } from "react";

import { ArrowUpDown, ShoppingBag, MoreHorizontal } from "lucide-react";

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
    useReactTable,
} from "@tanstack/react-table";

import { payments } from "@/Utils/Admin/Payments";

import { ScrollArea } from "@/Shadcn/components/ui/scroll-area";

import { cn } from "@/Shadcn/lib/utils";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Shadcn/components/ui/dropdown-menu";
import Paginate from "@/Components/Shared/Paginate/Paginate";

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
                    <ScrollArea className="h-[400px] rounded border">
                        <Table className="table-fixed">
                            <TableHeader className="">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <TableHead
                                                className={`sticky top-0 bg-zinc-100 py-3 ${cn(header.column.columnDef.meta?.className)}`}
                                                key={header.id}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext(),
                                                      )}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody className="pr-5">
                                {table.getRowModel().rows.map((row) => (
                                    <TableRow className="pr-5">
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                className={`pr-5 ${cn(cell.column.columnDef.meta?.className)}`}
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
                </CardContent>
            </Card>
        </AdminLayout>
    );
}

const columns = [
    { accessorKey: "id", header: () => "id" },
    {
        accessorKey: "amount",
        header: () => "Amount",
        meta: { className: "max-lg:hidden" },
    },
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
    {
        accessorKey: "status",
        header: () => "Status",
        meta: { className: "max-md:hidden" },
    },
    {
        accessorKey: "email",
        header: () => "Email",
        meta: { className: "max-xl:hidden" },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(payment.id)
                                }
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                                View payment details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];

export default Index;
