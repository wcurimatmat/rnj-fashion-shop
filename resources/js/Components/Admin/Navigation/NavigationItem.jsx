import React from "react";
import { Link } from "@inertiajs/react";
import {
    Box,
    ShoppingBag,
    LayoutDashboard,
    UsersRound,
    ChartNoAxesCombined,
} from "lucide-react";

const navigationIcons = {
    dashboard: <LayoutDashboard strokeWidth={1.4} />,
    products: <Box strokeWidth={1.4} />,
    orders: <ShoppingBag strokeWidth={1.4} />,
    customers: <UsersRound strokeWidth={1.4} />,
    reports: <ChartNoAxesCombined strokeWidth={1.4} />,
};

const navigationItemLinks = [
    {
        name: "Dashboard",
        url: route("dashboard.index"),
        icon: navigationIcons.dashboard,
    },
    {
        name: "Products",
        url: route("products.index"),
        icon: navigationIcons.products,
    },
    {
        name: "Orders",
        url: route("orders.index"),
        icon: navigationIcons.orders,
    },
    {
        name: "Customers",
        url: route("customers.index"),
        icon: navigationIcons.customers,
    },
    {
        name: "Reports & Analytics",
        url: "#",
        icon: navigationIcons.reports,
    },
];

const NavigationItem = () =>
    navigationItemLinks.map(function (link, index) {
        return (
            <li key={index} className="rounded-md hover:bg-gray-200">
                <Link href={link.url} className="flex items-center gap-2 p-3">
                    {link.icon}
                    <span className="text-base">{link.name}</span>
                </Link>
            </li>
        );
    });

export default NavigationItem;
