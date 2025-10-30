import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";
import { Plus, Ellipsis } from "lucide-react";
import { Button } from "@/Shadcn/components/ui/button";
import { Link } from "@inertiajs/react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Shadcn/components/ui/table";

const Index = () => {
    return (
        <AdminLayout>
            <>
                <PageHeader title="Categories & Collections" />

                <section className="space-y-12">
                    <div className="flex justify-end">
                        <Button
                            className="primary-button p-6 text-base"
                            asChild
                        >
                            <Link href="#">
                                <Plus strokeWidth={1.4} className="size-5" />
                                <p>Add New Category</p>
                            </Link>
                        </Button>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Item Count</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>Tops</TableCell>
                                <TableCell>25</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost">
                                        <Ellipsis strokeWidth={1.4} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </section>
            </>
        </AdminLayout>
    );
};

export default Index;
