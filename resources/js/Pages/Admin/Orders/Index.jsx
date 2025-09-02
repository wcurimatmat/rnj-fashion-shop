import { ShoppingBag } from "lucide-react";

import { payments } from "@/Utils/Admin/Payments";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import DataTable from "@/Components/Shared/DataTable/DataTable";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";
import StatsOverview from "@/Components/Admin/StatsOverview/StatsOverview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Shadcn/components/ui/card";

import { columns } from "./Columns";

function Index() {
    return (
        <AdminLayout>
            <PageHeader title="Manage Orders" />

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatsOverview />
                <StatsOverview />
            </section>

            <section>
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
                        <DataTable columns={columns} data={payments} />
                    </CardContent>
                </Card>
            </section>
        </AdminLayout>
    );
}
export default Index;
