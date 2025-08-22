import NavItems from "@utils/Users/NavItems";

function RenderFooterNavColumn({ title, links }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase">{title}</p>
            <nav>
                <ul className="grid gap-3.5">
                    {links.map(function ({ name, url }, index) {
                        return (
                            <li key={index}>
                                <a href={url}>{name}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

function Nav() {
    return (
        <section className="grid gap-6 md:flex md:gap-14">
            <RenderFooterNavColumn title="Pages" links={NavItems.pages} />
            <RenderFooterNavColumn title="Legal" links={NavItems.legals} />
            <RenderFooterNavColumn title="Help" links={NavItems.help} />
        </section>
    );
}

export default Nav;
