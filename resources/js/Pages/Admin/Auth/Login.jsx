import ShopLogo from "@/Assets/logo/logo.png";
import FieldControl from "@/Components/Shared/FieldControl/FieldControl";
import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Input } from "@/Shadcn/components/ui/input";
import { Button } from "@/Shadcn/components/ui/button";
import { Link } from "@inertiajs/react";

function Login() {
    return (
        <AuthLayout>
            <header className="flex flex-col items-center justify-center gap-4">
                <figure className="aspect-square w-20">
                    <img
                        src={ShopLogo}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </figure>

                <h1 className="font-quattrocento text-2xl">Admin Panel</h1>
            </header>

            <section>
                <form action="" className="grid gap-4">
                    <FieldControl id="emailAddress" label="E-mail Address">
                        <Input
                            type="email"
                            id="emailAddress"
                            placeholder="Enter e-mail address"
                            className="py-5"
                        />
                    </FieldControl>

                    <FieldControl id="password" label="Password">
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="py-5"
                        />
                    </FieldControl>

                    <Button
                        type="submit"
                        className="bg-rose-300 py-5 text-base font-bold hover:bg-rose-400"
                    >
                        Sign In
                    </Button>
                </form>

                <div className="m-auto mt-10 w-max">
                    <Button variant="link" asChild>
                        <Link>Forget details?</Link>
                    </Button>
                </div>
            </section>
        </AuthLayout>
    );
}

export default Login;
