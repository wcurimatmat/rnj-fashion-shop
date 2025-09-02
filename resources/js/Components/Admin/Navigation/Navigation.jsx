import { Link } from "@inertiajs/react";
import { Box, ShoppingBag, LayoutDashboard } from "lucide-react";

const links = [
    {
        name: "Dashboard",
        url: route("dashboard.index"),
        icon: <LayoutDashboard strokeWidth={1.4} />,
    },
    {
        name: "Products",
        url: route("products.index"),
        icon: <Box strokeWidth={1.4} />,
    },
    {
        name: "Orders",
        url: route("orders.index"),
        icon: <ShoppingBag strokeWidth={1.4} />,
    },
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
                                {/* <DynamicIcon
                                    name={link.icon}
                                    strokeWidth={1.4}
                                /> */}
                                {link.icon}
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
