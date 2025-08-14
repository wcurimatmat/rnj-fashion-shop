import UserLayout from "@User/Layout/UserLayout";

import ItemCollections from "./ItemCollections";

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

                <ItemCollections />
            </div>
        </UserLayout>
    );
}

export default Index;
