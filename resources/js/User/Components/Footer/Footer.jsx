import Shop from "./Shop";
import Nav from "./Nav";
import ContactUs from "./ContactUs";

function Footer() {
    return (
        <footer className="bg-rose-200 px-4 py-16 md:px-16 lg:lg:px-24">
            <div className="m-auto grid gap-8 lg:flex lg:max-w-[1440px] lg:justify-between">
                <Shop />
                <div className="grid gap-8 md:flex md:justify-between lg:gap-20">
                    <Nav />
                    <ContactUs />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
