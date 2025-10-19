import { ChartNoAxesCombined, LayoutDashboard, Megaphone } from "lucide-react";

import Settings from "./Settings";
import NavigationLink from "./NavigationLink";
import ProductsManagement from "./ProductsManagement";
import OrdersManagement from "./OrdersManagement";
import CustomersManagement from "./CustomersManagement";
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
            <ul className="space-y-3">
                <li className="rounded-md hover:bg-gray-200">
                    <NavigationLink
                        icon={LayoutDashboard}
                        name="Dashboard"
                        url={navigationRoutes.dashboard}
                    />
                </li>
                <li>
                    <ProductsManagement />
                </li>
                <li>
                    <OrdersManagement />
                </li>
                <li>
                    <CustomersManagement />
                </li>
                <li className="rounded-md hover:bg-gray-200">
                    <NavigationLink
                        icon={ChartNoAxesCombined}
                        name="Reports & Analytics"
                        url={navigationRoutes.reportsAndAnalytics}
                    />
                </li>
                <li className="rounded-md hover:bg-gray-200">
                    <NavigationLink
                        icon={Megaphone}
                        name="Promotions & Marketing"
                        url={navigationRoutes.promotionsAndMarketing}
                    />
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
