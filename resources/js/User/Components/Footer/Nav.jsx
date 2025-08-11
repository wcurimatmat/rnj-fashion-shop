import NavItems from "@User/Utils/NavItems";

function RenderFooterNavColumn({ title, links }) {
    return (
        <section>
            <p>{title}</p>
            <nav>
                <ul>
                    {links.map(function ({ name, url }, index) {
                        return (
                            <li key={index}>
                                <a href={url}>{name}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
    );
}

function Nav() {
    return (
        <section>
            <RenderFooterNavColumn title="Pages" links={NavItems.pages} />
            <RenderFooterNavColumn title="Legal" links={NavItems.legals} />
            <RenderFooterNavColumn title="Help" links={NavItems.help} />
        </section>
    );
}

export default Nav;
