import AppLogo from "./AppLogo";

import { Menu, ShoppingBag, CircleUserRound } from "lucide-react";

function Header() {
    return (
        <header>
            <div className="flex align-center justify-between">
                <button className="">
                    <Menu size={26} />
                </button>

                <AppLogo />

                <div className="">
                    <ul className="flex align-center gap-4">
                        <li>
                            <a href="">
                                <ShoppingBag size={26} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <CircleUserRound size={26} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
