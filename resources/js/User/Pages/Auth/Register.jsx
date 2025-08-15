import UserLayout from "@User/Layout/UserLayout";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";

function Register() {
    const [passwordFieldState, setPasswordFieldState] = useState(false)
    
    return (
        <UserLayout>
            <div className="m-auto grid max-w-md gap-8 py-20">
                <section className="text-center">
                    <h1 className="font-quattrocento mb-6 text-3xl font-bold">
                        Sign Up
                    </h1>
                    <p>Please fill in the information below:</p>
                </section>

                <section>
                    <form action="" className="grid gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">First Name</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="First Name"
                                className="rounded-md border border-gray-300 p-4 outline-transparent focus:border-rose-300"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Last Name</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Last Name"
                                className="rounded-md border border-gray-300 p-4 outline-transparent focus:border-rose-300"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="E-mail"
                                className="rounded-md border border-gray-300 p-4 outline-transparent focus:border-rose-300"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    type={`${passwordFieldState ? "text" : "password"}`}
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="w-full rounded-md border border-gray-300 p-4 pr-12 outline-transparent focus:border-rose-300"
                                />
                                <button
                                    className="absolute right-4"
                                    type="button"
                                    onClick={() =>
                                        setPasswordFieldState(!passwordFieldState)
                                    }
                                >
                                    <DynamicIcon
                                        name={`${passwordFieldState ? "eye-closed" : "eye"}`}
                                        size={24}
                                        className="text-gray-500"
                                    />
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer rounded-md bg-rose-300 p-4 text-lg font-bold transition-colors duration-200 ease-in-out hover:bg-rose-200"
                        >
                            Create Account
                        </button>
                    </form>
                </section>

                <section>
                    <p className="text-center">
                        Already have an account?{" "}
                        <a
                            href=""
                            className="font-bold text-rose-400 hover:text-rose-300"
                        >
                            Login
                        </a>
                    </p>
                </section>
            </div>
        </UserLayout>
    );
}

export default Register;
