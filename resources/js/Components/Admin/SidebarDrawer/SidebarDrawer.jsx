import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/Shadcn/components/ui/drawer";
import { Button } from "@/Shadcn/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { Link } from "@inertiajs/react";
import ShopLogo from "@/Assets/logo/logo.png";

function SidebarDrawer() {
    return (
        <Drawer direction="left">
            <DrawerTrigger>
                <Menu />
            </DrawerTrigger>

            <DrawerContent className="p-4">
                <DrawerClose className="flex justify-end">
                    <Button variant="ghost" size="icon" className="">
                        <X className="size-5" />
                    </Button>
                </DrawerClose>

                <div className="grid gap-10">
                    <section className="flex items-center gap-2">
                        <figure className="aspect-square w-12">
                            <img
                                src={ShopLogo}
                                alt="object-cover w-full h-full"
                            />
                        </figure>
                        <p className="text-lg font-bold">R&J Fashion Shop</p>
                    </section>

                    <nav>
                        <ul>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2"
                                >
                                    <LayoutDashboard strokeWidth={1.5} />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default SidebarDrawer;
