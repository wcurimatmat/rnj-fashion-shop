import PropositionVisual from "@Assets/visuals/pexels-daroon-19087201.jpg";

function Proposition() {
    return (
        <section className="grid gap-20 rounded-md bg-rose-100 p-8 min-[450px]:p-14 md:p-20 xl:flex xl:items-center xl:p-28">
            <article className="flex-1">
                <div className="mb-10 xl:mb-14">
                    <h2 className="font-quattrocento mb-2 text-2xl xl:mb-5 xl:text-3xl">
                        Your Style, Your Way
                    </h2>
                    <p className="leading-7">
                        We believe fashion should enhance your life, not
                        complicate it. That's why we’ve curated a collection of
                        stylish, versatile, and comfortable pieces that
                        seamlessly fit into your everyday routine. From the
                        office to weekend outings, our designs are made to move
                        with you—without ever compromising on style. We’re
                        committed to providing you with fashion that’s as
                        practical as it is beautiful, so you can focus on what
                        truly matters.
                    </p>
                </div>

                <a
                    href=""
                    className="rounded-sm bg-rose-300 px-8 py-4 font-bold shadow-xl/30 shadow-rose-400 transition duration-200 ease-in-out hover:bg-rose-200"
                >
                    Explore Collections
                </a>
            </article>

            <figure className="m-auto aspect-square w-full overflow-hidden rounded-md shadow-xl/30 shadow-rose-400 md:max-w-md">
                <img
                    src={PropositionVisual}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </figure>
        </section>
    );
}

export default Proposition;
