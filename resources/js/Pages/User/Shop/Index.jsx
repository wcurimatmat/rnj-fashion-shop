import UserLayout from "@layouts/Users/UserLayout";

import ItemCollections from "./ItemCollections";
import Header from "./Header";

function Index() {
    return (
        <UserLayout>
            <div className="grid gap-8 lg:gap-12">
                <Header />

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
