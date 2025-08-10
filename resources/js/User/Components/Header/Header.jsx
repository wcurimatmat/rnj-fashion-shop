import AppLogo from "./AppLogo";

import { Menu, ShoppingBag, CircleUserRound } from "lucide-react";

function Header() {
    return (
        <header>
            <div className="flex items-center justify-between px-4 py-5">
                <button className="flex-1 cursor-pointer">
                    <Menu size={26} />
                </button>

                <AppLogo />

                <div className="flex flex-1 justify-end">
                    <ul className="flex items-center gap-6">
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
