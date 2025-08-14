import { Sparkles, ThumbsUp, ShieldCheck } from "lucide-react";

function Offer() {
    return (
        <section>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 xl:gap-20">
                <article className="flex items-start gap-5 min-[450px]:basis-[360px] md:basis-[300px] xl:basis-xs">
                    <div className="rounded-full bg-radial-[at_25%_25%] from-white to-rose-300 to-75% p-3">
                        <Sparkles size={28} />
                    </div>
                    <div className="grid flex-1 gap-1">
                        <h2 className="font-quattrocento text-xl font-bold">
                            High Quality
                        </h2>
                        <p className="leading-7">
                            Expertly crafted garments with attention to every
                            detail, from first stitch to final touch.
                        </p>
                    </div>
                </article>
                <article className="flex items-start gap-5 min-[450px]:basis-[360px] md:basis-[300px] xl:basis-xs">
                    <div className="rounded-full bg-radial-[at_25%_25%] from-white to-rose-300 to-75% p-3">
                        <ThumbsUp size={28} />
                    </div>
                    <div className="grid flex-1 gap-1">
                        <h2 className="font-quattrocento text-xl font-bold">
                            Affordable
                        </h2>
                        <p className="leading-7">
                            Premium fashion you’ll love — at prices you’ll love
                            even more.
                        </p>
                    </div>
                </article>
                <article className="flex items-start gap-5 min-[450px]:basis-[360px] md:basis-[300px] xl:basis-xs">
                    <div className="rounded-full bg-radial-[at_25%_25%] from-white to-rose-300 to-75% p-3">
                        <ShieldCheck size={28} />
                    </div>
                    <div className="grid flex-1 gap-1">
                        <h2 className="font-quattrocento text-xl font-bold">
                            Secure Payment
                        </h2>
                        <p className="leading-7">
                            Fast, safe, and hassle-free checkout every time.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Offer;
