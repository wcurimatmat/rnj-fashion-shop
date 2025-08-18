import AccountLayout from "@User/Layout/AccountLayout";
import { MapPinCheck, MapPinMinus, MapPinPlus, SquarePen } from "lucide-react";
import { Link } from "@inertiajs/react";

function Index() {
    return (
        <AccountLayout>
            <section className="mb-6">
                <header>
                    <h2 className="text-2xl font-bold">Address Book</h2>
                </header>
            </section>

            <div className="max-w-lg">
                <section className="mb-8">
                    <ul className="grid gap-4">
                        <li className="rounded-md border-2 border-rose-300 bg-rose-100 px-4 py-6">
                            <div className="grid gap-6">
                                <div className="">
                                    <p className="leading-5 font-bold lg:w-[32ch]">
                                        566 Shaw Boulevard, Mandaluyong City,
                                        Metro Manila, Philippines
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-bold text-rose-500 uppercase">
                                        <p>Current Address</p>
                                    </div>
                                    <div className="flex items-center">
                                        <form className="flex gap-4">
                                            <button
                                                className="cursor-pointer"
                                                type="submit"
                                            >
                                                <MapPinMinus
                                                    size={20}
                                                    strokeWidth={2}
                                                />
                                            </button>
                                            <button
                                                className="cursor-pointer"
                                                type="submit"
                                                disabled
                                            >
                                                <MapPinCheck
                                                    size={20}
                                                    strokeWidth={2}
                                                    className="text-rose-500"
                                                />
                                            </button>
                                            <button
                                                className="cursor-pointer"
                                                type="submit"
                                            ></button>
                                        </form>
                                        <a href="">
                                            {" "}
                                            <SquarePen
                                                size={20}
                                                strokeWidth={2}
                                                className=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="rounded-md border-2 border-gray-300 bg-gray-100 px-4 py-6">
                            <div className="grid gap-6">
                                <div className="">
                                    <p className="leading-5 font-bold lg:w-[32ch]">
                                        566 Shaw Boulevard, Mandaluyong City,
                                        Metro Manila, Philippines
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-bold text-rose-500 uppercase">
                                        <p className="hidden">
                                            Current Address
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <form className="flex gap-4">
                                            <button
                                                className="cursor-pointer"
                                                type="submit"
                                            >
                                                <MapPinMinus
                                                    size={20}
                                                    strokeWidth={2}
                                                />
                                            </button>
                                            <button
                                                className="cursor-pointer"
                                                type="submit"
                                                disabled
                                            >
                                                <MapPinCheck
                                                    size={20}
                                                    strokeWidth={2}
                                                />
                                            </button>
                                            <button
                                                className="cursor-pointer"
                                                type="submit"
                                            ></button>
                                        </form>
                                        <a href="">
                                            {" "}
                                            <SquarePen
                                                size={20}
                                                strokeWidth={2}
                                                className=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <Link
                        href={route("account.address-book.create")}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-rose-300 py-5 font-bold transition-colors duration-200 ease-in-out hover:bg-rose-200 active:bg-rose-200"
                    >
                        <MapPinPlus size={20} />
                        <p>Add Address</p>
                    </Link>
                </section>
            </div>
        </AccountLayout>
    );
}

export default Index;
