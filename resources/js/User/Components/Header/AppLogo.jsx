import Logo from "@Assets/logo/logo.png";

function AppLogo() {
    return (
        <figure className="overflow-hidden md:flex-1">
            <a href="">
                <img src={Logo} alt="" className="w-16 object-cover" />
            </a>
        </figure>
    );
}

export default AppLogo;
