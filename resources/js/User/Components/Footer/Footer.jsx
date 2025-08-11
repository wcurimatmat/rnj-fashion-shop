import Shop from "./Shop";
import Nav from "./Nav";
import ContactUs from "./ContactUs";

function Footer() {
    return (
        <footer className="bg-rose-200 px-4 py-8 md:px-16">
            <div className="grid gap-8 lg:max-w-[1440px] m-auto lg:flex lg:justify-between">
                <Shop />
                <div className="grid gap-8 md:flex md:justify-between">
                    <Nav />
                    <ContactUs />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
