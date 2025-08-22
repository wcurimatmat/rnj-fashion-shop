import ProductCard from "@User/Components/ProductCard/ProductCard";

function Features() {
    return (
        <section>
            <div className="mb-6">
                <h2 className="font-quattrocento text-2xl md:text-3xl">
                    Featured
                </h2>
            </div>

            <div className="">
                <ul className="flex flex-wrap justify-center gap-6 min-[1416px]:justify-between">
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Features;
