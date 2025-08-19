import UserLayout from "@User/Layout/UserLayout";
import AccountVisual from "@Assets/visuals/pexels-soldiervip-1391498.jpg";
import { Menu } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function AccountLayout({ children }) {
    const { component } = usePage();

    const [dropdownMenuState, setDropdownMenuState] = useState(false);

    return (
        <UserLayout>
            <section className="mb-4 flex flex-col items-center gap-4 rounded-md bg-rose-100 py-6 md:py-10 lg:py-14">
                <figure className="aspect-square size-16 overflow-hidden rounded-full md:size-24 lg:size-32">
                    <img
                        src={AccountVisual}
                        alt=""
                        className="h-full w-full object-cover object-[0_20%]"
                    />
                </figure>
                <h1 className="font-quattrocento text-2xl font-bold lg:text-3xl">
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
                        <ul className="text-md divide-y divide-gray-400">
                            <li>
                                <Link href={route("account.order.index")}>
                                    <p className="w-full py-3 text-left md:py-5">
                                        Orders
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href={route("account.details.index")}>
                                    <p className="w-full py-3 text-left md:py-5">
                                        Details
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("account.address-book.index")}
                                >
                                    <p className="w-full py-3 text-left md:py-5">
                                        Address Book
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <p className="w-full py-3 text-left md:py-5">
                                        Account
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="min-[1200px]:mt-20 min-[1200px]:flex min-[1200px]:gap-20 min-[1350px]:gap-40">
                <aside className="hidden min-[1200px]:block">
                    <ul className="grid gap-6 text-lg">
                        <li>
                            <Link
                                href={route("account.order.index")}
                                className={
                                    component.startsWith("Account/Orders")
                                        ? "text-rose-400"
                                        : ""
                                }
                            >
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("account.details.index")}
                                className={
                                    component.startsWith("Account/Details")
                                        ? "text-rose-400"
                                        : ""
                                }
                            >
                                Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("account.address-book.index")}
                                className={
                                    component.startsWith("Account/AddressBook")
                                        ? "text-rose-400"
                                        : ""
                                }
                            >
                                Address Book
                            </Link>
                        </li>
                        <li>
                            <Link href="">Account</Link>
                        </li>
                    </ul>
                </aside>

                <section className="flex-1">{children}</section>
            </div>
        </UserLayout>
    );
}

export default AccountLayout;
