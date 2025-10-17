import { Link } from "@inertiajs/react";
import {
    Box,
    ShoppingBag,
    LayoutDashboard,
    UsersRound,
} from "lucide-react";

import CollapsibleItem from "./CollapsibleItem";

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
    {
        name: "Customers",
        url: route("customers.index"),
        icon: <UsersRound strokeWidth={1.4} />,
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
                                {link.icon}
                                <span className="text-base">{link.name}</span>
                            </Link>
                        </li>
                    );
                })}

                <li>
                    <CollapsibleItem />
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
