import Shop from "./Shop";
import Nav from "./Nav";
import ContactUs from "./ContactUs";

function Footer() {
    return (
        <footer className="bg-rose-200 px-4 py-8">
            <div className="grid gap-8">
                <Shop />
                <Nav />
                <ContactUs />
            </div>
        </footer>
    );
}

export default Footer;
