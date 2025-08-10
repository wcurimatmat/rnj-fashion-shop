import AppLogo from "./AppLogo";
import Nav from "./Nav";
import { Menu } from "lucide-react";
import { useState } from "react";

function Header() {
    const [navState, setNavState] = useState(false);

    function handleSetNavState() {
        setNavState(!navState);
    }

    return (
        <>
            <header>
                <div className="flex items-center justify-between px-4 py-5">
                    <button
                        className="flex-1 cursor-pointer md:hidden"
                        onClick={handleSetNavState}
                    >
                        <Menu size={26} />
                    </button>

                    <AppLogo />

                    <Nav navState={navState} />

                    <div className="flex flex-1 justify-end">
                        <a
                            href=""
                            className="rounded-sm bg-rose-400 px-4 py-2 font-bold text-gray-100 transition duration-200 ease-in-out hover:bg-rose-300"
                        >
                            Login
                        </a>
                    </div>
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
