import Header from "@/Components/Admin/Header/Header";

function AdminLayout({ children }) {
    return (
        <>
            <div className="grid gap-8 p-4 md:px-16 lg:px-24">
                <Header />
                <main>{children}</main>
            </div>
        </>
    );
}

export default AdminLayout;
