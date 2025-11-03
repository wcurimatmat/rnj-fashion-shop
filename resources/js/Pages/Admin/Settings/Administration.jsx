import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function Administration() {
    return (
        <div className="space-y-8">
            <PageHeader title="Administration" />
        </div>
    );
}

Administration.layout = (page) => <AdminLayout children={page} />;

export default Administration;
