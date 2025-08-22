import UserLayout from "@layouts/Users/UserLayout";
import { Trash2, ShoppingCart } from "lucide-react";
import CartVisual from "@assets/visuals/item-6.jpg";

function Index() {
    return (
        <UserLayout>
            <section className="mb-6">
                <h1 className="font-quattrocento mb-2 text-3xl font-bold">
                    My Items
                </h1>
                <p className="text-gray-400">Items: 0</p>
            </section>

            <div className="grid gap-8 lg:flex lg:justify-between lg:gap-20">
                <section className="h-80 overflow-scroll lg:flex-1">
                    <ul className="grid gap-4 lg:gap-10">
                        <li className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <a href="">
                                    <figure className="aspect-[3/4] w-24 lg:w-32">
                                        <img
                                            src={CartVisual}
                                            alt=""
                                            className="h-full w-full object-cover"
                                        />
                                    </figure>
                                </a>

                                <div className="grid gap-1">
                                    <a href="">
                                        <p className="w-[13ch] overflow-hidden text-xl font-bold overflow-ellipsis whitespace-nowrap lg:text-xl">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </a>
                                    <p className="text-sm text-gray-400 lg:text-base">
                                        Medium
                                    </p>
                                    <p className="text-sm text-gray-400 lg:hidden">
                                        ₱150.00
                                    </p>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <p>Price</p>
                            </div>

                            <div className="text-gray-400">
                                <button
                                    className="cursor-pointer"
                                    title="Delete Item"
                                >
                                    <Trash2 size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="divide-y divide-gray-300 rounded-md bg-rose-50 p-5 lg:basis-80 xl:basis-96">
                    <div className="flex justify-between py-4 text-gray-400">
                        <p>Subtotal</p>
                        <p>₱150.00</p>
                    </div>

                    <div className="flex justify-between py-4 text-gray-400">
                        <p>Shipping</p>
                        <p>₱150.00</p>
                    </div>

                    <div className="flex justify-between py-4 font-bold">
                        <p>Total</p>
                        <p>₱150.00</p>
                    </div>

                    <div className="grid gap-4 pt-4">
                        <form action="">
                            <button
                                type="submit"
                                className="w-full cursor-pointer rounded-md bg-rose-300 py-4"
                            >
                                Proceed To Checkout
                            </button>
                        </form>
                        <div className="text-center">
                            <a
                                href=""
                                className="inline-block w-full rounded-md border-2 border-rose-300 py-4"
                            >
                                Continue Shopping
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </UserLayout>
    );
}

export default Index;
