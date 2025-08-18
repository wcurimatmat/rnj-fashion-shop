import UserLayout from "@User/Layout/UserLayout";

function AccountLayout() {
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
                            <ul className="grid gap-6 text-lg">
                                <li>
                                    <a
                                        href=""
                                        className="w-full py-3 text-left md:py-5"
                                    >
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="w-full py-3 text-left md:py-5"
                                    >
                                        Details
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="w-full py-3 text-left md:py-5"
                                    >
                                        Address Book
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="w-full cursor-pointer py-3 text-left md:py-5"
                                    >
                                        Account
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="min-[1200px]:mt-20 min-[1200px]:flex min-[1200px]:gap-20 min-[1350px]:gap-40">
                <aside className="hidden min-[1200px]:block">
                    <ul className="grid gap-6 text-lg">
                        <li>
                            <a href="">Orders</a>
                        </li>
                        <li>
                            <a href="">Details</a>
                        </li>
                        <li>
                            <a href="">Address Book</a>
                        </li>
                        <li>
                            <a href="">Account</a>
                        </li>
                    </ul>
                </aside>

                <section className="flex-1">{children}</section>
            </div>
        </UserLayout>
    );
}

export default AccountLayout;
