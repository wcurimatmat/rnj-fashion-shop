import TableRowAction from "@/Components/Shared/TableRowAction/TableRowAction";

export const columnDefs = [
    {
        accessorKey: "id",
        header: () => "id",
    },
    {
        accessorKey: "firstName",
        header: () => "First Name",
    },
    {
        accessorKey: "lastName",
        header: () => "Last Name",
    },
    {
        accessorKey: "email",
        header: () => "Email",
    },
    {
        accessorKey: "createdAt",
        header: () => "Created At",
        cell: (props) => {
            const date = new Date(props.getValue());

            return date.toLocaleDateString();
        },
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
