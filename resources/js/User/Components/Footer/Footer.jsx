import Shop from "./Shop";
import Nav from "./Nav";
import ContactUs from "./ContactUs";

function Footer() {
    return (
        <footer className="bg-rose-200 px-4 py-8 md:px-16">
            <div className="grid gap-8">
                <Shop />
                <div className="grid gap-8">
                    <Nav />
                    <ContactUs />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
