import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/Shadcn/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Shadcn/components/ui/dropdown-menu";

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
