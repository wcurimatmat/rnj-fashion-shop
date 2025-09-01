import AdminLayout from "@/Layouts/Admin/AdminLayout";
import StatsOverview from "@/Components/Admin/StatsOverview/StatsOverview";
import SalesChart from "@/Components/Admin/SalesChart/SalesChart";
import OrderTable from "@/Components/Admin/OrderTable/OrderTable";

function Index() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <section>
                    <h1 className="text-2xl">Welcome back, Admin!</h1>
                </section>

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Overview */}
                    {/* 1. Total Revenue
                        2. Total Orders
                        3. Total Users
                        4. Total Items */}

                    <StatsOverview />
                    <StatsOverview />
                    <StatsOverview />
                    <StatsOverview />
                </section>
                <section>
                    {/* Sales Chart */}
                    <SalesChart />
                </section>
                <section>
                    {/* Orders */}
                    <OrderTable />
                </section>
            </div>
        </AdminLayout>
    );
}

export default Index;
