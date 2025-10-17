import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function Notifications() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <PageHeader title="Notifications" />
            </div>
        </AdminLayout>
    );
}

export default Notifications;
