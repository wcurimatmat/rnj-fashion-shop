import CollapsibleItem from "./CollapsibleItem";
import { Box } from "lucide-react";

const subMenu = [
    {
        name: "Product List",
        url: "#",
    },
    {
        name: "Categories & Collections",
        url: "#",
    },
];

const ProductsManagement = () => {
    return <CollapsibleItem name="Products" menu={subMenu} icon={Box} />;
};

export default ProductsManagement;
