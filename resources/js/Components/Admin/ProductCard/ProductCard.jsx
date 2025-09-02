import { Button } from "@/Shadcn/components/ui/button";
import ProductCardVisual from "@/Assets/visuals/item-6.jpg";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Shadcn/components/ui/card";
import { Link } from "@inertiajs/react";

function ProducCard() {
    return (
        <Card className="gap-3 rounded-md py-4">
            <CardContent className="px-4">
                <figure className="aspect-[3/4]">
                    <img
                        src={ProductCardVisual}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </figure>
            </CardContent>

            <CardHeader className="px-4">
                <CardTitle className="text-lg">Item 6</CardTitle>
                <CardDescription>$1,250.00</CardDescription>
            </CardHeader>

            <CardFooter className="px-4">
                <Button
                    className="primary-button w-full rounded p-6 text-base font-bold text-gray-800"
                    asChild
                >
                    <Link href="#">Edit Product</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProducCard;
