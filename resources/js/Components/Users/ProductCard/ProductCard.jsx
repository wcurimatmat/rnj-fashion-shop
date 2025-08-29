import ItemImage from "@assets/visuals/item-6.jpg";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/Shadcn/components/ui/button";

function ProductCard() {
    return (
        <div className="grid w-fit gap-4">
            <figure className="aspect-[3/4] max-w-2xs overflow-hidden rounded-md border border-gray-400">
                <a href="#">
                    <img
                        src={ItemImage}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </a>
            </figure>

            <div className="">
                <p className="font-quattrocento mb-2 text-xl">Product Name</p>
                <p>₱150.00</p>
            </div>

            <form action="">
                <Button
                    type="submit"
                    className="w-full cursor-pointer rounded-md bg-rose-300 p-6 text-white hover:bg-rose-400"
                >
                    <ShoppingBag className="size-5" />
                    <span className="text-base">Add To Bag</span>
                </Button>
            </form>
        </div>
    );
}

export default ProductCard;
