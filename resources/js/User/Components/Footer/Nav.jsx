import NavItems from "@User/Utils/NavItems";

function RenderFooterNavColumn({ title, links }) {
    return (
        <div className="grid gap-2">
            <p className="uppercase text-base font-bold">{title}</p>
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
        <section className="grid gap-6">
            <RenderFooterNavColumn title="Pages" links={NavItems.pages} />
            <RenderFooterNavColumn title="Legal" links={NavItems.legals} />
            <RenderFooterNavColumn title="Help" links={NavItems.help} />
        </section>
    );
}

export default Nav;
