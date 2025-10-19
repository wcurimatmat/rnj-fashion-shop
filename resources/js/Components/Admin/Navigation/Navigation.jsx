import {
    Box,
    ChartNoAxesCombined,
    LayoutDashboard,
    Megaphone,
    ShoppingBag,
    UsersRound,
} from "lucide-react";

import Settings from "./Settings";
import NavigationLink from "./NavigationLink";
import ContentManagement from "./ContentManagement";

const navigationRoutes = {
    dashboard: route("dashboard.index"),
    products: route("products.index"),
    orders: route("orders.index"),
    reportsAndAnalytics: "#",
    promotionsAndMarketing: "#",
};

function Navigation() {
    return (
        <nav>
            <ul>
                <li className="rounded-md hover:bg-gray-200">
                    <NavigationLink
                        icon={LayoutDashboard}
                        name="Dashboard"
                        url={navigationRoutes.dashboard}
                    />
                </li>
                <li className="rounded-md hover:bg-gray-200">
                    Products Management
                </li>
                <li className="rounded-md hover:bg-gray-200">
                    Orders Management
                </li>
                <li className="rounded-md hover:bg-gray-200">
                    Customers Management
                </li>
                <li>
                    <ContentManagement />
                </li>
                <li>
                    <Settings />
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
