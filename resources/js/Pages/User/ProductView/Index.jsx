import UserLayout from "@layouts/Users/UserLayout";
import ProductViewVisual from "@assets/visuals/item-6.jpg";
import availableSizes from "@utils/Users/AvailableSizes";
import ProductAccordion from "./ProductAccordion";
import { Button } from "@/Shadcn/components/ui/button";

function Index() {
    return (
        <UserLayout>
            <section className="grid gap-8 min-[925px]:m-auto min-[925px]:flex min-[925px]:max-w-5xl min-[925px]:items-start min-[925px]:gap-20">
                <figure class="aspect-[3/4] overflow-hidden rounded-md border-2 border-gray-400">
                    <img
                        src={ProductViewVisual}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </figure>

                <div className="grid gap-6 min-[925px]:gap-12">
                    <div className="">
                        <h1 className="font-quattrocento mb-2 text-2xl font-bold min-[925px]:text-4xl">
                            Lorem ipsum dolor sit amet.
                        </h1>
                        <p>₱150.00</p>
                    </div>

                    <div className="">
                        <p className="mb-2 text-sm font-bold text-gray-500 uppercase">
                            Size:
                        </p>

                        <ul className="flex flex-wrap gap-2">
                            {availableSizes.map((size, index) => (
                                <li key={index}>
                                    <button className="w-14 cursor-pointer rounded-md border-2 border-rose-300 py-4">
                                        {size}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form action="" className="grid gap-4 font-bold">
                        <Button
                            type="submit"
                            className="bg-rose-300 py-6 text-gray-800 hover:bg-rose-400 font-bold text-base"
                        >
                            Checkout
                        </Button>
                        <Button
                            type="submit"
                            className="py-6 font-bold text-base"
                            variant="outline"
                        >
                            Add To Bag
                        </Button>
                    </form>

                    <ProductAccordion />
                </div>
            </section>

            <section>{/* Ratings and Review */}</section>
        </UserLayout>
    );
}

export default Index;
