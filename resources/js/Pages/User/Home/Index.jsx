import UserLayout from "@layouts/Users/UserLayout";

import Hero from "./Hero";
import Features from "./Features";
import Proposition from "./Proposition";
import Offer from "./Offer";
import Promotional from "./Promotional";

function Index() {
    return (
        <UserLayout>
            <div className="grid gap-8 md:gap-12 lg:gap-20">
                <Hero />
                <Features />
                <Proposition />
                <Offer />
                <Promotional />
            </div>
        </UserLayout>
    );
}

export default Index;
