import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

function PaymentMethod() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <PageHeader title="Payment Method" />
            </div>
        </AdminLayout>
    );
}

export default PaymentMethod;
