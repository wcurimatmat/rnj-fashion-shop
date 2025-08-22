import ProductCard from "@User/Components/ProductCard/ProductCard";

function ItemCollections() {
    return (
        <section>
            <div className="">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 min-[622px]:grid-cols-3 md:gap-x-4 lg:grid-cols-4 lg:gap-6">
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
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                </ul>
            </div>
            {/* TODO Pagination */}
        </section>
    );
}

export default ItemCollections;
