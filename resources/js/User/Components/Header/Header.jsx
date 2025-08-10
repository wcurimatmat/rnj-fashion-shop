import AppLogo from "./AppLogo";

import { Menu } from "lucide-react";

function Header() {
    return (
        <header>
            <div className="flex items-center justify-between px-4 py-5">
                <button className="flex-1 cursor-pointer">
                    <Menu size={26} />
                </button>

                <AppLogo />

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
    );
}

export default Header;
