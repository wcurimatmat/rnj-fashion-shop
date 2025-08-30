import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/Shadcn/components/ui/dropdown-menu";
import { Settings, LogOut } from "lucide-react";

function Dropdown() {
    return (
        <div className="md:flex md:w-full md:justify-end">
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
        </div>
    );
}

export default Dropdown;
