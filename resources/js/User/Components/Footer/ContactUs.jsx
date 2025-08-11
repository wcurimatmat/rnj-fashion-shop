import { Phone, Mail } from "lucide-react";

function ContactField({ icon, contact }) {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <p>{contact}</p>
        </div>
    );
}

function ContactUs() {
    return (
        <section>
            <p className="uppercase text-base font-bold mb-2">Contact Us</p>
            
            <div className="grid gap-2">
                <ContactField
                    icon={<Phone size={18} />}
                    contact="+639-123-456-7890"
                />
                <ContactField
                    icon={<Mail size={18} />}
                    contact="rnjfashionshop@email.com"
                />
            </div>
        </section>
    );
}

export default ContactUs;
