import UserLayout from "@User/Layout/UserLayout";

import Hero from "./Hero";
import Features from "./Features";

function Index() {
    return (
        <UserLayout>
            <div className="grid gap-8">
                <Hero />
                <Features />
            </div>
        </UserLayout>
    );
}

export default Index;
