import UserLayout from "@User/Layout/UserLayout";
import ProductCard from "@User/Components/ProductCard/ProductCard";

function Index() {
    return (
        <UserLayout>
            <div className="grid gap-8 md:gap-12 lg:gap-20">
                <section>
                    <h1>All Items</h1>
                </section>

                <section>
                    <div className="">
                        <p>Filters:</p>

                        {/* TODO Filter Feature */}
                    </div>
                </section>

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
            </div>
        </UserLayout>
    );
}

export default Index;
