import { Menu } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/Shadcn/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/Shadcn/components/ui/dropdown-menu";

function AccountMenu() {
    const accountMenuNavigation = [
        {
            name: "Order History",
            href: route("account.orders.index"),
        },
        {
            name: "User Details",
            href: route("account.details.index"),
        },
        {
            name: "Address Book",
            href: route("account.address-book.index"),
        },
        {
            name: "Account Settings",
            href: "#",
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Menu />
                    Account Menu
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                {accountMenuNavigation.map(function (item, index) {
                    return (
                        <DropdownMenuItem key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default AccountMenu;
