import UserLayout from "@layouts/Users/UserLayout";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";
import FieldControl from "@/Components/Shared/FieldControl/FieldControl";
import { Input } from "@/Shadcn/components/ui/input";
import { Button } from "@/Shadcn/components/ui/button";

function Login() {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <UserLayout>
            <div className="m-auto grid max-w-md gap-8 py-20">
                <section className="text-center">
                    <h1 className="font-quattrocento mb-6 text-3xl font-bold">
                        Login
                    </h1>
                    <p>Enter your email and password to login:</p>
                </section>

                <section>
                    <form action="" className="grid gap-6">
                        {/* Email Field */}
                        <FieldControl id="emailAddress" label="E-mail Address">
                            <Input
                                type="text"
                                id="emailAddress"
                                placeholder="Enter e-mail address"
                                className="py-5"
                            />
                        </FieldControl>

                        <FieldControl id="password" label="Password">
                            <div className="flex gap-2">
                                <Input
                                    type={isRevealed ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter password"
                                    className="py-5"
                                />
                                <Button
                                    type="button"
                                    className="h-full"
                                    variant="outline"
                                    onClick={() => setIsRevealed(!isRevealed)}
                                >
                                    <DynamicIcon
                                        name={`${isRevealed ? "eye-closed" : "eye"}`}
                                        className="size-4"
                                    />
                                </Button>
                            </div>
                        </FieldControl>

                        <Button
                            type="submit"
                            className="bg-rose-300 py-6 text-base font-bold text-gray-800 hover:bg-rose-400"
                        >
                            Sign In
                        </Button>
                    </form>
                </section>

                <section>
                    <p className="text-center">
                        Don't have an account?{" "}
                        <Button
                            variant="link"
                            className="font-bold"
                            size="sm"
                            asChild
                        >
                            <a href="" className="text-rose-400">
                                Sign Up
                            </a>
                        </Button>
                    </p>
                </section>
            </div>
        </UserLayout>
    );
}

export default Login;
