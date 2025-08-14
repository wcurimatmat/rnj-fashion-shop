import UserLayout from "@User/Layout/UserLayout";

import Hero from "./Hero";
import Features from "./Features";
import Proposition from "./Proposition";

function Index() {
    return (
        <UserLayout>
            <div className="grid gap-8 md:gap-12 lg:gap-20">
                <Hero />
                <Features />
                <Proposition />
            </div>
        </UserLayout>
    );
}

export default Index;
