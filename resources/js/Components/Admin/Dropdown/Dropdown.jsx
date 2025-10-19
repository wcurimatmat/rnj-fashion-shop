import { Button } from "@/Shadcn/components/ui/button";

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
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="py-6 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-gray-300 p-4"></div>
                            <p className="text-base">Maria Llewelyn</p>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
