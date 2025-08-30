import { Label } from "@/Shadcn/components/ui/label";

function FieldControl({ id, label, children }) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            {children}
        </div>
    );
}

export default FieldControl;
