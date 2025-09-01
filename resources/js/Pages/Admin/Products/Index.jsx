import { Plus } from "lucide-react";

import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import { Button } from "@/Shadcn/components/ui/button";
import ProductCard from "@/Components/Admin/ProductCard/ProductCard";
import Paginate from "@/Components/Shared/Paginate/Paginate";

function Index() {
    return (
        <AdminLayout>
            <div className="space-y-8">
                <section>
                    <h1 className="text-2xl">Manage Products</h1>
                </section>

                <section>
                    <div className="flex items-center justify-between">
                        <Button className="p-6 text-base" variant="secondary">
                            Filter
                        </Button>
                        <Button
                            className="primary-button p-6 text-base"
                            asChild
                        >
                            <Link>
                                <Plus className="size-5" />
                                <span>Add Product</span>
                            </Link>
                        </Button>
                    </div>
                </section>

                <section>
                    <ul className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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

                    <Paginate />
                </section>
            </div>
        </AdminLayout>
    );
}

export default Index;
