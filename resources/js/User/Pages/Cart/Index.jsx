import UserLayout from "@User/Layout/UserLayout";
import { Trash2, ShoppingCart } from "lucide-react";
import CartVisual from "@Assets/visuals/item-6.jpg";

function Index() {
    return (
        <UserLayout>
            <section className="">
                <h1>My Bag</h1>
                <p>Items: 0</p>
            </section>

            <div className="">
                <section>
                    <ul>
                        <li>
                            <div className="">
                                <figure>
                                    <img src={CartVisual} alt="" />
                                </figure>
                                <p>Size</p>
                            </div>

                            <div className="">
                                <p>Price</p>
                            </div>

                            <div className="">
                                {/* Actions */}

                                <button>
                                    <Trash2 size={26} strokeWidth={1.5} />
                                </button>
                                <button>
                                    <ShoppingCart size={26} strokeWidth={1.5} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    {/* Cart summary here */}

                    <div className="">
                        <p>Subtotal</p>
                        <p>₱150.00</p>
                    </div>

                    <div className="">
                        <p>Shipping</p>
                        <p>₱150.00</p>
                    </div>

                    <div className="">
                        <p>Total</p>
                        <p>₱150.00</p>
                    </div>

                    <div className="">
                        <form action="">
                            <button type="submit">Proceed To Checkout</button>
                        </form>
                        <div className="">
                            <a href="">Continue Shopping</a>
                        </div>
                    </div>
                </section>
            </div>
        </UserLayout>
    );
}

export default Index;
