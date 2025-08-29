import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/Shadcn/components/ui/select";

function GetLocation({ id, locations }) {
    if (id !== "region") {
        return locations.map(function (location) {
            return (
                <SelectItem key={location.code} value={location.code}>
                    {location.name}
                </SelectItem>
            );
        });
    }

    return locations.map(function (location) {
        return (
            <SelectItem key={location.code} value={location.code}>
                {location.regionName.startsWith("Region")
                    ? `${location.regionName} - ${location.name}`
                    : `${location.name}`}
            </SelectItem>
        );
    });
}

function SelectLocation({
    locations,
    onChangeValue,
    placeholder,
    id,
    label,
    value,
}) {
    return (
        <div className="w-full">
            <label className="text-base font-bold text-gray-500">{label}</label>

            <Select
                id="region"
                value={value || ""}
                onValueChange={(value) => onChangeValue(id, value)}
            >
                <SelectTrigger className="mt-2 w-full py-5">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <GetLocation id={id} locations={locations} />
                </SelectContent>
            </Select>
        </div>
    );
}

export default SelectLocation;
