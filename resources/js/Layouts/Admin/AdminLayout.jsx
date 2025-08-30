import Header from "@/Components/Admin/Header/Header";
import Sidebar from "@/Components/Admin/Sidebar/Sidebar";

function AdminLayout({ children }) {
    return (
        <div className="md:flex md:justify-between md:items-start">
            <Sidebar />
            <main className="flex-1">
                <div className="grid gap-8 p-4 md:p-6">
                    <Header />
                    {children}
                </div>
            </main>
        </div>
    );
}

export default AdminLayout;
