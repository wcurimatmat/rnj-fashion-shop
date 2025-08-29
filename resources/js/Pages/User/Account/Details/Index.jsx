import AccountLayout from "@layouts/Users/AccountLayout";
import { Label } from "@/Shadcn/components/ui/label";
import { Input } from "@/Shadcn/components/ui/input";
import { Button } from "@/Shadcn/components/ui/button";

function Index() {
    return (
        <AccountLayout>
            <section className="mb-6">
                <header>
                    <h2 className="text-2xl font-bold">My Details</h2>
                </header>
            </section>

            <div className="grid gap-8">
                <section>
                    <header className="mb-6 border-2 border-x-0 border-t-0 border-b-gray-300">
                        <h3 className="text-xl font-bold">
                            1. Personal Information
                        </h3>
                    </header>

                    <div className="lg:flex lg:gap-20">
                        <div className="mb-6">
                            <p className="leading-7 lg:w-[32ch]">
                                Update your name and phone number so we can keep
                                your account up to date.
                            </p>
                        </div>

                        <div className="flex-1">
                            <form action="" className="grid gap-4 lg:gap-6">
                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="firstName"
                                        className="text-base font-bold text-gray-600"
                                    >
                                        First Name
                                    </Label>

                                    <Input
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter first name"
                                        className="py-6"
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="lastName"
                                        className="text-base font-bold text-gray-600"
                                    >
                                        Last Name
                                    </Label>

                                    <Input
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter last name"
                                        className="py-6"
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="phoneNumber"
                                        className="text-base font-bold text-gray-600"
                                    >
                                        Phone Number
                                    </Label>

                                    <Input
                                        type="tel"
                                        id="phoneNumber"
                                        placeholder="Enter phone number"
                                        className="py-6"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="bg-rose-300 py-6 text-base font-bold text-gray-800 hover:bg-rose-400"
                                >
                                    Save Personal Information
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <header className="mb-6 border-2 border-x-0 border-t-0 border-b-gray-300">
                        <h3 className="text-xl font-bold">2. E-mail Address</h3>
                    </header>

                    <div className="lg:flex lg:gap-20">
                        <div className="mb-6">
                            <p className="leading-7 lg:w-[32ch]">
                                Change the email linked to your account. Make
                                sure it’s one you check often.
                            </p>
                        </div>

                        <div className="flex-1">
                            <form action="" className="grid gap-3 lg:gap-6">
                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="emailAddress"
                                        className="text-base font-bold text-gray-600"
                                    >
                                        E-mail Address
                                    </Label>

                                    <Input
                                        type="tel"
                                        id="emailAddress"
                                        placeholder="Enter e-mail address"
                                        className="py-6"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="bg-rose-300 py-6 text-base font-bold text-gray-800 hover:bg-rose-400"
                                >
                                    Save E-mail Address
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <header className="mb-6 border-2 border-x-0 border-t-0 border-b-gray-300">
                        <h3 className="text-xl font-bold">3. Password</h3>
                    </header>

                    <div className="lg:flex lg:gap-20">
                        <div className="mb-6">
                            <p className="leading-7 lg:w-[32ch]">
                                Keep your account secure by updating your
                                password regularly.
                            </p>
                        </div>

                        <div className="flex-1">
                            <form action="" className="grid gap-3 lg:gap-6">
                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="password"
                                        className="text-base font-bold text-gray-600"
                                    >
                                        Password
                                    </Label>

                                    <Input
                                        type="password"
                                        id="password"
                                        placeholder="Enter password"
                                        className="py-6"
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="password"
                                        className="text-base font-bold text-gray-600"
                                    >
                                        Password
                                    </Label>

                                    <Input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm password"
                                        className="py-6"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="bg-rose-300 py-6 text-base font-bold text-gray-800 hover:bg-rose-400"
                                >
                                    Save Password
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </AccountLayout>
    );
}

export default Index;
