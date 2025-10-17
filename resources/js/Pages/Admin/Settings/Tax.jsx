import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function Tax() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <PageHeader title="Tax" />
            </div>
        </AdminLayout>
    );
}

export default Tax;
