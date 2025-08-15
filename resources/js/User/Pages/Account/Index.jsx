import UserLayout from "@User/Layout/UserLayout";
import AccountVisual from "@Assets/visuals/pexels-soldiervip-1391498.jpg";
import { Menu } from "lucide-react";

function Index() {
    return (
        <UserLayout>
            <section>
                <figure>
                    <img src={AccountVisual} alt="" />
                </figure>
                <h1>Maria Llewelyn</h1>
            </section>

            <div className="">
                <button>
                    <Menu size={24} strokeWidth={1.5} />
                    <p>Menu</p>
                </button>
                <aside>
                    <ul>
                        <li>
                            <button>Details</button>
                        </li>
                        <li>
                            <button>Address Book</button>
                        </li>
                        <li>
                            <button>Orders</button>
                        </li>
                        <li>
                            <button>Account</button>
                        </li>
                    </ul>
                </aside>

                <section>{children}</section>
            </div>
        </UserLayout>
    );
}

export default Index;
