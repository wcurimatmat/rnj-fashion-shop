import ItemImage from "@Assets/visuals/item-6.jpg";
import { ShoppingBag } from "lucide-react";

function ProductCard() {
    return (
        <div className="grid gap-4 w-fit">
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
                <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-rose-400 px-4 py-2 text-white hover:bg-rose-300">
                    <ShoppingBag size={24} />
                    <p className="text-lg font-bold">Add To Bag</p>
                </button>
            </form>
        </div>
    );
}

export default ProductCard;
