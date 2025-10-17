import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function Administration() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <PageHeader title="Administration" />
            </div>
        </AdminLayout>
    );
}

export default Administration;
