import CollapsibleItem from "./CollapsibleItem";
import { ShoppingBag } from "lucide-react";

const subMenu = [
    {
        name: "Order List",
        url: "#",
    },
    {
        name: "Returns & Refunds",
        url: "#",
    },
];

const OrdersManagement = () => {
    return <CollapsibleItem name="Orders" menu={subMenu} icon={ShoppingBag} />;
};

export default OrdersManagement;
