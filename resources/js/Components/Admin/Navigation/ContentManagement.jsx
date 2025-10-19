import CollapsibleItem from "./CollapsibleItem";
import { TableOfContents } from "lucide-react";

const subMenu = [
    {
        name: "Homepage",
        url: "",
    },
    {
        name: "Blogs",
        url: "",
    },
];

const ContentManagement = () => {
    return (
        <CollapsibleItem
            name="Content Management"
            menu={subMenu}
            icon={TableOfContents}
        />
    );
};

export default ContentManagement;
