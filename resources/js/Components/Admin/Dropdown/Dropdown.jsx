import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/Shadcn/components/ui/dropdown-menu";
import { Settings, LogOut } from "lucide-react";

function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className=""></div>
                <p>Maria Llewelyn</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Settings />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Dropdown;
