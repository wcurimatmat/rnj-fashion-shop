import AppLogo from "./AppLogo";
import Nav from "./Nav";
import { Menu, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";

function Header() {
    const [navState, setNavState] = useState(false);

    function handleSetNavState() {
        setNavState(!navState);
    }

    return (
        <>
            <header>
                <div className="m-auto flex items-center justify-between px-4 py-8 transition ease-in-out md:px-16 lg:max-w-[1440px] lg:px-24">
                    <button
                        className="flex-1 cursor-pointer md:hidden"
                        onClick={handleSetNavState}
                    >
                        <Menu size={26} />
                    </button>

                    <AppLogo />

                    <Nav navState={navState} />

                    <nav className="flex flex-1 justify-end">
                        <ul className="flex gap-6">
                            <li>
                                <a href="">
                                    <UserRound size={26} strokeWidth={1.5} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <ShoppingBag size={26} strokeWidth={1.5} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                className={`fixed top-0 left-0 z-1 h-screen w-screen bg-gray-200 ${navState ? "visible opacity-65" : "invisible opacity-0"} transition duration-200 ease-in-out`}
                onClick={handleSetNavState}
            ></div>
        </>
    );
}

export default Header;
