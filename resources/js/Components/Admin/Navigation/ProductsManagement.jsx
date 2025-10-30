import CollapsibleItem from "./CollapsibleItem";
import { Box } from "lucide-react";

const subMenu = [
    {
        name: "Product List",
        url: route("products.index"),
    },
    {
        name: "Categories & Collections",
        url: route("categories-and-collections.index"),
    },
];

const ProductsManagement = () => {
    return <CollapsibleItem name="Products" menu={subMenu} icon={Box} />;
};

export default ProductsManagement;
