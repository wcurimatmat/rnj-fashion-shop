import { Sparkles, ThumbsUp, ShieldCheck } from "lucide-react";

function Offer() {
    return (
        <section>
            <div className="">
                <article>
                    <Sparkles size={28} />
                    <div className="">
                        <h2>High Quality</h2>
                        <p>
                            Expertly crafted garments with attention to every
                            detail, from first stitch to final touch.
                        </p>
                    </div>
                </article>
                <article>
                    <ThumbsUp size={28} />
                    <div className="">
                        <h2>Affordable</h2>
                        <p>
                            Premium fashion you’ll love — at prices you’ll love
                            even more.
                        </p>
                    </div>
                </article>
                <article>
                    <ShieldCheck size={28} />
                    <div className="">
                        <h2>Secure Payment</h2>
                        <p>Fast, safe, and hassle-free checkout every time.</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Offer;
