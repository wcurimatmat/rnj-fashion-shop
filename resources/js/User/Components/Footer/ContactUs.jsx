import { Phone, Mail } from "lucide-react";

function ContactField({ icon, contact }) {
    return (
        <div className="">
            {icon}
            <p>{contact}</p>
        </div>
    );
}

function ContactUs() {
    return (
        <section>
            <ContactField
                icon={<Phone size={18} />}
                contact="+639-123-456-7890"
            />
            <ContactField
                icon={<Mail size={18} />}
                contact="rnjfashionshop@email.com"
            />
        </section>
    );
}

export default ContactUs;
