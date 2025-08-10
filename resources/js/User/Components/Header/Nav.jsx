import NavItems from "@User/Utils/NavItems";

function Nav({ navState }) {
    return (
        <nav
            className={`fixed top-20 left-4 md:static ${navState ? "translate-none" : "-translate-x-[120%]"} z-2 transition duration-150 ease-in-out md:translate-none`}
        >
            <div className="rounded-sm bg-rose-200 px-12 md:bg-transparent">
                <ul className="flex flex-col divide-y md:flex-row md:gap-8 md:divide-none">
                    {NavItems.map(function (item, index) {
                        return (
                            <li key={index} className="py-4">
                                <a
                                    href={item.url}
                                    className="font-quattrocento text-md md:text-base"
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
