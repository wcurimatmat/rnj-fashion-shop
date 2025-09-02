import { ArrowUpDown } from "lucide-react";

import { Button } from "@/Shadcn/components/ui/button";

import TableRowAction from "@/Components/Shared/TableRowAction/TableRowAction";

export const columns = [
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
                    <TableRowAction row={payment} />
                </div>
            );
        },
    },
];
