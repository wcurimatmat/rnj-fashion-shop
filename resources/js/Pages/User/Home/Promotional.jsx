import { Button } from "@/Shadcn/components/ui/button";

function Promotional() {
    return (
        <section className="promotional-background rounded-lg py-36 font-bold text-gray-100 lg:py-56">
            <div className="grid gap-8 text-center">
                <h2 className="font-quattrocento m-auto text-2xl md:max-w-sm md:text-4xl md:max-lg:leading-14 lg:max-w-xl lg:text-5xl lg:leading-14">
                    Chic, Comfortable, and Always on Trend
                </h2>

                <Button
                    asChild
                    className="text-md m-auto w-max bg-rose-300 p-6 hover:bg-rose-400 md:text-lg"
                >
                    <a href="#">Explore Collection</a>
                </Button>
            </div>
        </section>
    );
}

export default Promotional;
