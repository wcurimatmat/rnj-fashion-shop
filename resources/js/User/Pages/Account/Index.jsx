import UserLayout from "@User/Layout/UserLayout";
import AccountVisual from "@Assets/visuals/pexels-soldiervip-1391498.jpg";
import Details from "./Details";
import AddressBook from "./AddressBook";
import { Menu } from "lucide-react";
import { useState } from "react";

function Index({ children }) {
    const [dropdownMenuState, setDropdownMenuState] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    function handleActiveTab(index) {
        setActiveTab(index);
        setDropdownMenuState(false);
    }

    return (
        <UserLayout>
            <section className="mb-4 flex flex-col items-center gap-4 rounded-md bg-rose-100 py-6">
                <figure className="aspect-square w-16 overflow-hidden rounded-full">
                    <img
                        src={AccountVisual}
                        alt=""
                        className="h-full w-full object-cover object-[0_20%]"
                    />
                </figure>
                <h1 className="font-quattrocento text-2xl font-bold">
                    Maria Llewelyn
                </h1>
            </section>

            <section className="relative mb-4 flex justify-end min-[1200px]:hidden">
                <div className="">
                    <button
                        className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-400 bg-gray-200 px-4 py-2 active:bg-gray-300"
                        onClick={() => setDropdownMenuState(!dropdownMenuState)}
                    >
                        <Menu size={24} strokeWidth={1.5} />
                        <p>Menu</p>
                    </button>

                    <div
                        className={`absolute left-0 mt-4 w-full rounded-md border border-gray-300 bg-gray-200 px-4 md:px-8 ${dropdownMenuState ? "visible opacity-100" : "invisible opacity-0"} transition duration-200 ease-in-out`}
                    >
                        <ul className="divide-y divide-gray-400">
                            <li className="">
                                <button
                                    onClick={() => handleActiveTab(0)}
                                    className="w-full cursor-pointer py-3 text-left md:py-5"
                                >
                                    Details
                                </button>
                            </li>
                            <li className="">
                                <button
                                    onClick={() => handleActiveTab(1)}
                                    className="w-full cursor-pointer py-3 text-left md:py-5"
                                >
                                    Address Book
                                </button>
                            </li>
                            <li className="">
                                <button className="w-full cursor-pointer py-3 text-left md:py-5">
                                    Orders
                                </button>
                            </li>
                            <li className="">
                                <button className="w-full cursor-pointer py-3 text-left md:py-5">
                                    Account
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="min-[1200px]:mt-20 min-[1200px]:flex min-[1200px]:gap-20 min-[1350px]:gap-40">
                <aside className="hidden min-[1200px]:block">
                    <ul className="grid gap-6 text-lg">
                        <li className="">
                            <button
                                className={`cursor-pointer ${activeTab === 0 ? "text-rose-400" : ""}`}
                                onClick={() => setActiveTab(0)}
                            >
                                Details
                            </button>
                        </li>
                        <li className="">
                            <button
                                className={`cursor-pointer ${activeTab === 1 ? "text-rose-400" : ""}`}
                                onClick={() => setActiveTab(1)}
                            >
                                Address Book
                            </button>
                        </li>
                        <li className="">
                            <button
                                className={`cursor-pointer ${activeTab === 2 ? "text-rose-400" : ""}`}
                                onClick={() => setActiveTab(2)}
                            >
                                Orders
                            </button>
                        </li>
                        <li className="">
                            <button
                                className={`cursor-pointer ${activeTab === 3 ? "text-rose-400" : ""}`}
                                onClick={() => setActiveTab(3)}
                            >
                                Account
                            </button>
                        </li>
                    </ul>
                </aside>

                <section className="flex-1">
                    {activeTab === 0 && <Details />}
                    {activeTab === 1 && <AddressBook />}
                </section>
            </div>
        </UserLayout>
    );
}

export default Index;
