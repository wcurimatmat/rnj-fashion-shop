import { LayoutDashboard } from "lucide-react";
import { Link } from "@inertiajs/react";
import { DynamicIcon } from "lucide-react/dynamic";

const links = [
    { name: "Dashboard", url: "#", icon: "layout-dashboard" },
    { name: "Dashboard", url: "#", icon: "layout-dashboard" },
    { name: "Dashboard", url: "#", icon: "layout-dashboard" },
    { name: "Dashboard", url: "#", icon: "layout-dashboard" },
];

function Navigation() {
    return (
        <nav>
            <ul>
                {links.map(function (link, index) {
                    return (
                        <li
                            key={index}
                            className="rounded-md hover:bg-gray-200"
                        >
                            <Link
                                href={link.url}
                                className="flex items-center gap-2 p-3"
                            >
                                <DynamicIcon
                                    name={link.icon}
                                    strokeWidth={1.4}
                                />
                                <span className="text-base">{link.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navigation;
