import Header from "@components/Users/Header/Header";
import Footer from "@components/Users/Footer/Footer";

function UserLayout({ children }) {
    return (
        <>
            <Header />

            <main className="m-auto px-4 md:px-16 lg:max-w-[1440px] lg:px-24">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default UserLayout;
