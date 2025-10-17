import { Settings, ChevronRight } from "lucide-react";

import { Link } from "@inertiajs/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Shadcn/components/ui/collapsible";

import { useState } from "react";

const settingsSubMenu = [
    {
        name: "Administration",
        url: route("settings.administration"),
    },
    {
        name: "Notifications",
        url: route("settings.notification"),
    },
    {
        name: "Payment Methods",
        url: route("settings.payments"),
    },
    {
        name: "Store",
        url: route("settings.store"),
    },

    {
        name: "Tax",
        url: route("settings.tax"),
    },
];

function CollapsibleItem() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapsible defaultOpen={true}>
            <CollapsibleTrigger
                className="cursor-pointer rounded-md p-3 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(!isOpen)}
                asChild
            >
                <div className="flex items-center justify-between">
                    <div className="flex w-full justify-start gap-2">
                        <Settings strokeWidth={1.4} className="size-6" />
                        <div className="text-base">Settings</div>
                    </div>

                    <ChevronRight
                        strokeWidth={1.4}
                        className={`size-6 transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
                    />
                </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
                <nav className="ml-6 border-l pl-5">
                    <ul className="space-y-4">
                        {settingsSubMenu.map((link) => (
                            <li key={link.name}>
                                <Link href={link.url}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </CollapsibleContent>
        </Collapsible>
    );
}

export default CollapsibleItem;
