import ProductCard from "@User/Components/ProductCard/ProductCard";

function ItemCollections() {
    return (
        <section>
            <div className="">
                <ul className="">
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
