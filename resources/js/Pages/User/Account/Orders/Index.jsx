import AccountLayout from "@User/Layout/AccountLayout";
import { Check } from "lucide-react";

function Index() {
    return (
        <AccountLayout>
            <section className="mb-6">
                <header>
                    <h2 className="text-2xl font-bold">Your Orders</h2>
                </header>
            </section>

            <section>
                <ul className="grid gap-4 max-w-lg">
                    <li className="overflow-hidden rounded-md border border-rose-200">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between bg-rose-100 p-4">
                                <div className="flex items-center gap-2">
                                    <p>08-19-2025</p>
                                    <p>12:59</p>
                                </div>

                                <div className="">
                                    <p className="font-bold text-green-600">
                                        Delivered
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 px-4 pb-4">
                                <figure className="aspect-square w-max rounded-full bg-radial-[at_25%_25%] from-white to-rose-300 to-75% p-4">
                                    <Check size={24} />
                                </figure>

                                <div className="grid flex-1 gap-4">
                                    <p className="mb-2 text-lg font-bold">
                                        # 123456
                                    </p>

                                    <div className="grid gap-2">
                                        <p className="text-md">1 item</p>
                                        <p className="text-md">₱150.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pr-4 pb-3 text-right">
                                <a
                                    href=""
                                    className="text-sm font-bold uppercase"
                                >
                                    More Info
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="overflow-hidden rounded-md border border-rose-200">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between bg-rose-100 p-4">
                                <div className="flex items-center gap-2">
                                    <p>08-19-2025</p>
                                    <p>12:59</p>
                                </div>

                                <div className="">
                                    <p className="font-bold text-green-600">
                                        Delivered
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 px-4 pb-4">
                                <figure className="aspect-square w-max rounded-full bg-radial-[at_25%_25%] from-white to-rose-300 to-75% p-4">
                                    <Check size={24} />
                                </figure>

                                <div className="grid flex-1 gap-4">
                                    <p className="mb-2 text-lg font-bold">
                                        # 123456
                                    </p>

                                    <div className="grid gap-2">
                                        <p className="text-md">1 item</p>
                                        <p className="text-md">₱150.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pr-4 pb-3 text-right">
                                <a
                                    href=""
                                    className="text-sm font-bold uppercase"
                                >
                                    More Info
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </AccountLayout>
    );
}

export default Index;
