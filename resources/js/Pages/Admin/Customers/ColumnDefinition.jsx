import TableRowAction from "@/Components/Shared/TableRowAction/TableRowAction";

export const columnDefs = [
    {
        accessorKey: "id",
        header: () => "id",
        meta: { className: "max-md:hidden" },
    },
    {
        accessorKey: "firstName",
        header: () => "First Name",
        meta: { className: "max-lg:hidden" },
    },
    {
        accessorKey: "lastName",
        header: () => "Last Name",
        meta: { className: "max-lg:hidden" },
    },
    {
        accessorKey: "email",
        header: () => "Email",
        meta: { className: "w-64" },
    },
    {
        accessorKey: "createdAt",
        header: () => "Created At",
        cell: (props) => {
            const date = new Date(props.getValue());

            return date.toLocaleDateString();
        },
        meta: { className: "max-lg: hidden" },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const customer = row.original;

            return (
                <div className="flex justify-end">
                    <TableRowAction row={customer} />
                </div>
            );
        },
    },
];
