import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function Notifications() {
    return (
        <div className="space-y-8">
            <PageHeader title="Notifications" />
        </div>
    );
}

Notifications.layout = (page) => <AdminLayout children={page} />;

export default Notifications;
