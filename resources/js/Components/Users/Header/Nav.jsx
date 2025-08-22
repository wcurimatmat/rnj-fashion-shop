import NavItems from "@User/Utils/NavItems";

function Nav({ navState }) {
    return (
        <nav
            className={`fixed top-20 left-4 md:static ${navState ? "translate-none" : "-translate-x-[120%]"} z-2 transition duration-150 ease-in-out md:translate-none`}
        >
            <div className="rounded-sm bg-rose-200 px-12 md:bg-transparent">
                <ul className="flex flex-col divide-y md:flex-row md:gap-8 md:divide-none">
                    {NavItems.pages.map(function ({name, url}, index) {
                        return (
                            <li key={index} className="py-4">
                                <a
                                    href={url}
                                    className="font-quattrocento-sans text-md md:text-base"
                                >
                                    {name}
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
