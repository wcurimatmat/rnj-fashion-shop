import { Phone, Mail } from "lucide-react";

function ContactUs() {
    return (
        <section>
            <div className="">
                <Phone size={18} />
                <p>+639-123-456-7890</p>
            </div>
            <div className="">
                <Mail size={18} />
                <p>rnjfashionshop@email.com</p>
            </div>
        </section>
    );
}

export default ContactUs;
