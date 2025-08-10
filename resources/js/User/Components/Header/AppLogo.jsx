import Logo from "@Assets/logo/logo.png";

function AppLogo() {
    return (
        <figure className="aspect-square overflow-hidden">
            <a href="">
                <img src={Logo} alt="" className="w-14 object-cover" />
            </a>
        </figure>
    );
}

export default AppLogo;
