import UserLayout from "@layouts/Users/UserLayout";
import AccountVisual from "@assets/visuals/pexels-soldiervip-1391498.jpg";
import { Link, usePage } from "@inertiajs/react";
import AccountMenu from "@/Components/Users/AccountMenu/AccountMenu";

function AccountLayout({ children }) {
    const { component } = usePage();

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
                <AccountMenu />
            </section>

            <div className="min-[1200px]:mt-20 min-[1200px]:flex min-[1200px]:gap-20 min-[1350px]:gap-40">
                <aside className="hidden min-[1200px]:block">
                    <ul className="grid gap-6 text-lg">
                        <li>
                            <Link
                                href={route("account.orders.index")}
                                className={
                                    component.startsWith("User/Account/Orders")
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
                                    component.startsWith("User/Account/Details")
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
                                    component.startsWith("User/Account/AddressBook")
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
