import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function Store() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <PageHeader title="Store" />
            </div>
        </AdminLayout>
    );
}

export default Store;
