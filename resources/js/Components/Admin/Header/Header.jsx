import { Menu } from "lucide-react";
import { Button } from "@/Shadcn/components/ui/button";
import Dropdown from "@/Components/Admin/Dropdown/Dropdown";

function Header() {
    return (
        <header>
            <div className="flex items-center justify-between p-4">
                <Button size="icon" variant="ghost">
                    <Menu />
                </Button>
                <Dropdown />
            </div>
        </header>
    );
}

export default Header;
