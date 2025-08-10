import NavItems from "@User/Utils/NavItems";

function Nav({ navState }) {
    return (
        <nav
            className={`fixed top-20 left-4 md:static ${navState ? "translate-none" : "-translate-x-[120%]"} z-2 transition duration-150 ease-in-out`}
        >
            <div className="rounded-sm bg-rose-300 px-12">
                <ul className="flex flex-col divide-y">
                    {NavItems.map(function (item, index) {
                        return (
                            <li key={index} className="py-4">
                                <a
                                    href={item.url}
                                    className="font-quattrocento text-xl"
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
