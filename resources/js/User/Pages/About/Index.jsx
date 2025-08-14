import UserLayout from "@User/Layout/UserLayout";

function About() {
    return (
        <UserLayout>
            <section className="m-auto grid max-w-2xl gap-8">
                <div className="">
                    <h1 className="font-quattrocento text-2xl font-bold md:text-4xl lg:text-5xl">
                        About Us
                    </h1>
                </div>

                <div className="grid gap-6 leading-7">
                    <p>
                        At{" "}
                        <span className="font-quattrocento font-bold text-rose-400">
                            R&J Fashion Shop
                        </span>
                        , we believe fashion is more than just clothing—it’s a
                        way to express confidence, creativity, and
                        individuality. Our curated collections are designed with
                        today’s woman in mind, offering styles that transition
                        seamlessly from casual days to elegant evenings.
                    </p>

                    <p>
                        From timeless wardrobe staples to the latest trends,
                        each piece is carefully selected for quality, comfort,
                        and a touch of sophistication. Whether you’re looking
                        for a chic everyday outfit, a statement dress for a
                        special occasion, or the perfect accessories to complete
                        your look, we’ve got you covered.
                    </p>

                    <p>
                        <span className="font-bold">
                            Our mission is simple:
                        </span>{" "}
                        to help you look and feel your best, every day. With a
                        passion for style and a commitment to exceptional
                        service, R&J Fashion Shop is your go-to destination for
                        fashion that inspires confidence and celebrates who you
                        are.
                    </p>
                </div>
            </section>
        </UserLayout>
    );
}

export default About;
