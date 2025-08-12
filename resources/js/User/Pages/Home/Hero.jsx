import HeroImage from "@Assets/visuals/pexels-migsr87-8051256.jpg";

function Hero() {
    return (
        <section>
            <div className="">
                <figure>
                    <img src={HeroImage} alt="" />
                </figure>

                <div className="">
                    <h1>Fashion That Fits You Perfectly </h1>
                    <a href="#">Explore Collection</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
