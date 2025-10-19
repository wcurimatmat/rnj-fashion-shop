import { Link } from "@inertiajs/react";

const NavigationLink = ({ icon: Icon, name, url }) => {
    return (
        <Link href={url}>
            <div className="flex items-center gap-2 p-3">
                <span>
                    <Icon strokeWidth={1.4} />
                </span>
                <p className="text-base">{name}</p>
            </div>
        </Link>
    );
};

export default NavigationLink;
