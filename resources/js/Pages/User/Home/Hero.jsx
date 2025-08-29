import { Button } from "@/Shadcn/components/ui/button";

function Hero() {
    return (
        <section className="hero-background rounded-lg py-36 font-bold text-gray-100 lg:py-56">
            <div className="grid gap-8 text-center">
                <h1 className="font-quattrocento text-2xl md:text-4xl lg:text-5xl">
                    Fashion That Fits You Perfectly
                </h1>

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

export default Hero;
