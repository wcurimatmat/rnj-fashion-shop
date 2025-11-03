import { ChevronRight } from "lucide-react";

import { Link } from "@inertiajs/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Shadcn/components/ui/collapsible";

import { useState } from "react";

function CollapsibleItem({ name = "", menu = [], icon: Icon }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <CollapsibleTrigger
                className="cursor-pointer rounded-md p-3 py-3 hover:bg-gray-200"
                asChild
            >
                <div className="flex items-center justify-between">
                    <div className="flex w-full justify-start gap-2">
                        <Icon strokeWidth={1.4} className="size-6" />
                        <div className="text-base">{name}</div>
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
                        {menu.map((link) => (
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
