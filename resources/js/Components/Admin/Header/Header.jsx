import { Menu } from "lucide-react";
import { Button } from "@/Shadcn/components/ui/button";
import Dropdown from "@/Components/Admin/Dropdown/Dropdown";
import SidebarDrawer from "../SidebarDrawer/SidebarDrawer";

function Header() {
    return (
        <header>
            <div className="flex items-center justify-between py-3">
                <SidebarDrawer />
                <Dropdown />
            </div>
        </header>
    );
}

export default Header;
