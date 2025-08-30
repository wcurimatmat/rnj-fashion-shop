import ShopLogo from "@/Assets/logo/logo.png";

function Sidebar() {
    return (
        <aside className="sticky top-0 hidden h-screen border-0 border-r border-r-gray-400/50 px-6 py-3 md:block md:basis-[280px]">
            <section className="flex items-center gap-2">
                <figure className="aspect-square w-10">
                    <img src={ShopLogo} alt="object-cover w-full h-full" />
                </figure>
                <p className="text-base font-bold">R&J Fashion Shop</p>
            </section>
        </aside>
    );
}

export default Sidebar;
