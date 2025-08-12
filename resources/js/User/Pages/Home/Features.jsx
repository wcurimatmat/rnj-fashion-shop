import ItemImage from "@Assets/visuals/item-6.jpg";

function Features() {
    return (
        <section>
            <div className="">
                <h2>Featured</h2>
            </div>

            <div className="">
                <div className="">
                    <figure>
                        <img src={ItemImage} alt="" />
                    </figure>
                    <div className="">
                        <p>Product Name</p>
                        <p>Product Price</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
