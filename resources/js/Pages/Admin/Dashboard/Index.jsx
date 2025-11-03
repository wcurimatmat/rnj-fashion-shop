import AdminLayout from "@/Layouts/Admin/AdminLayout";
import StatsOverview from "@/Components/Admin/StatsOverview/StatsOverview";
import SalesChart from "@/Components/Admin/SalesChart/SalesChart";
import OrderTable from "@/Components/Admin/OrderTable/OrderTable";

function Index() {
    return (
        <div className="space-y-8">
            <section>
                <h1 className="text-2xl">Welcome back, Admin!</h1>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatsOverview />
                <StatsOverview />
                <StatsOverview />
                <StatsOverview />
            </section>
            <section>
                <SalesChart />
            </section>
            <section>
                <OrderTable />
            </section>
        </div>
    );
}

Index.layout = (page) => <AdminLayout children={page} />;

export default Index;
