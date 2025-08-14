import UserLayout from "@User/Layout/UserLayout";

import ProductViewVisual from "@Assets/visuals/item-6.jpg";

function Index() {
    return (
        <UserLayout>
            <section className="">
                <figure>
                    <img src={ProductViewVisual} alt="" />
                </figure>

                <div className="">
                    <div className="">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>₱150.00</p>
                    </div>

                    <div className="">
                        <p>Sizes:</p>

                        <ul>
                            <li>
                                <button></button>
                            </li>
                        </ul>
                    </div>

                    <form action="">
                        <button type="submit">Checkout</button>
                        <button type="submit">Add To Bag</button>
                    </form>

                    <div className="">
                        {/* Dropdowns */}

                        <div className="">
                            <button>Features & Description</button>
                            <div className="">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis praesentium quibusdam
                                aperiam, enim ea minus.
                            </div>
                        </div>
                        <div className="">
                            <button>Delivery & Returns</button>
                            <div className="">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis praesentium quibusdam
                                aperiam, enim ea minus.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>{/* Ratings and Review */}</section>
        </UserLayout>
    );
}

export default Index;
