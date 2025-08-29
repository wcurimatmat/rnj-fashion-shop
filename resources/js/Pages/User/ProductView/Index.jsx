import UserLayout from "@layouts/Users/UserLayout";
import ProductViewVisual from "@assets/visuals/item-6.jpg";
import availableSizes from "@utils/Users/AvailableSizes";
import ProductAccordion from "./ProductAccordion";
import { Button } from "@/Shadcn/components/ui/button";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/Shadcn/components/ui/toggle-group";

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
                        <h1 className="font-quattrocento mb-2 text-2xl font-bold min-[925px]:text-3xl">
                            Lorem ipsum dolor sit amet.
                        </h1>
                        <p>₱150.00</p>
                    </div>

                    <div className="">
                        <p className="mb-2 text-base font-bold text-gray-600">
                            Size:
                        </p>

                        <ul className="flex flex-wrap gap-2">
                            <ToggleGroup
                                variant="outline"
                                type="single"
                                size="lg"
                            >
                                {availableSizes.map(function (size, index) {
                                    return (
                                        <ToggleGroupItem value={size}>
                                            {size}
                                        </ToggleGroupItem>
                                    );
                                })}
                            </ToggleGroup>
                        </ul>
                    </div>

                    <form action="" className="grid gap-4 font-bold">
                        <Button
                            type="submit"
                            className="bg-rose-300 py-6 text-base font-bold text-gray-800 hover:bg-rose-400"
                        >
                            Checkout
                        </Button>
                        <Button
                            type="submit"
                            className="py-6 text-base font-bold"
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
