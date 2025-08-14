import UserLayout from "@User/Layout/UserLayout";
import ProductViewVisual from "@Assets/visuals/item-6.jpg";
import availableSizes from "@User/Utils/AvailableSizes";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Index() {
    const [dropdownState, setDropdownState] = useState({
        0: true,
        1: false,
    });

    function handleDropdownState(index) {
        setDropdownState((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    }

    return (
        <UserLayout>
            <section className="grid gap-8">
                <figure class="aspect-[3/4] overflow-hidden rounded-md border-2 border-gray-400">
                    <img
                        src={ProductViewVisual}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </figure>

                <div className="grid gap-6">
                    <div className="">
                        <h1 className="font-quattrocento mb-2 text-2xl font-bold">
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
                        <button
                            type="submit"
                            className="rounded-md bg-rose-300 py-4"
                        >
                            Checkout
                        </button>
                        <button
                            type="submit"
                            className="rounded-md border-2 border-rose-300 py-4"
                        >
                            Add To Bag
                        </button>
                    </form>

                    <div className="divide-y divide-gray-300 border border-x-0 border-gray-300">
                        <div className="py-3">
                            <button
                                className="flex w-full items-center justify-between py-2 text-xl font-bold text-gray-500"
                                onClick={() => handleDropdownState(0)}
                            >
                                <p>Features & Description</p>
                                <ChevronDown
                                    size={20}
                                    className={`${dropdownState[0] ? "rotate-180" : ""} transition duration-200 ease-in-out`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                    dropdownState[0] ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <div className="leading-7">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Facilis praesentium
                                    quibusdam aperiam, enim ea minus.
                                </div>
                            </div>
                        </div>

                        <div className="py-3">
                            <button
                                className="flex w-full items-center justify-between py-2 text-xl font-bold text-gray-500"
                                onClick={() => handleDropdownState(1)}
                            >
                                <p>Delivery & Returns</p>
                                <ChevronDown
                                    size={20}
                                    className={`${dropdownState[1] ? "rotate-180" : ""} transition duration-200 ease-in-out`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                    dropdownState[1] ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <div className="leading-7">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Facilis praesentium
                                    quibusdam aperiam, enim ea minus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>{/* Ratings and Review */}</section>
        </UserLayout>
    );
}

export default Index;
