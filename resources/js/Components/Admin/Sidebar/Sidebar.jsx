import ShopLogo from "@/Assets/logo/logo.png";
import Navigation from "../Navigation/Navigation";

function Sidebar() {
    return (
        <aside className="sticky top-0 hidden h-screen p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:block md:basis-[280px]">
            <div className="grid gap-8">
                <section className="flex items-center gap-2">
                    <figure className="aspect-square w-10">
                        <img src={ShopLogo} alt="object-cover w-full h-full" />
                    </figure>
                    <p className="text-base font-bold">R&J Fashion Shop</p>
                </section>

                <section>
                    <Navigation />
                </section>
            </div>
        </aside>
    );
}

export default Sidebar;
