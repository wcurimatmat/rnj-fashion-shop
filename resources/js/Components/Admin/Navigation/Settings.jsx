import CollapsibleItem from "./CollapsibleItem";
import { Settings as Gear } from "lucide-react";

const subMenu = [
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

const Settings = () => {
    return (
        <CollapsibleItem
            name="Settings"
            menu={subMenu}
            icon={Gear}
        />
    );
};

export default Settings;
