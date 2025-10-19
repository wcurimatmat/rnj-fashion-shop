import CollapsibleItem from "./CollapsibleItem";
import { UserRound } from "lucide-react";

const subMenu = [
    {
        name: "Customer List",
        url: "#",
    },
    {
        name: "Customer Service",
        url: "#",
    },
];

const CustomersManagement = () => {
    return <CollapsibleItem name="Customers" menu={subMenu} icon={UserRound} />;
};

export default CustomersManagement;
