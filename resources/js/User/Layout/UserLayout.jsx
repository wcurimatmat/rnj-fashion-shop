import Header from "@User/Components/Header/Header";
import Footer from "@User/Components/Footer/Footer";

function UserLayout({ children }) {
    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />
        </>
    );
}

export default UserLayout;
