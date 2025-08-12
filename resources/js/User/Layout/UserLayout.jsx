import Header from "@User/Components/Header/Header";
import Footer from "@User/Components/Footer/Footer";

function UserLayout({ children }) {
    return (
        <>
            <Header />

            <main className="px-4 md:px-16 lg:max-w-[1440px] lg:px-24">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default UserLayout;
