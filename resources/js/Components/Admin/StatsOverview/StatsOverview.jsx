import { Banknote } from "lucide-react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

function StatsOverview() {
    return (
        <Card className="flex-1 bg-linear-to-t from-gray-100 to-gray-50">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span className="text-gray-500">Total Revenue</span>
                    <div className="rounded-full bg-green-200 p-2">
                        <Banknote />
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-3xl font-bold">$1,250.00</p>
            </CardContent>
        </Card>
    );
}

export default StatsOverview;
