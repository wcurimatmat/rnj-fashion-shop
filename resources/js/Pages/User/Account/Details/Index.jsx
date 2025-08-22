import AccountLayout from "@layouts/Users/AccountLayout";

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
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm font-bold text-gray-600 uppercase"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="First Name"
                                        className="rounded-md border border-gray-400 p-3 focus:border-rose-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm font-bold text-gray-600 uppercase"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Last Name"
                                        className="rounded-md border border-gray-400 p-3 focus:border-rose-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm font-bold text-gray-600 uppercase"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name=""
                                        id=""
                                        placeholder="Phone Number"
                                        className="rounded-md border border-gray-400 p-3 focus:border-rose-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-md bg-rose-300 py-3 text-lg font-bold transition duration-200 ease-in-out hover:bg-rose-200"
                                >
                                    Save Personal Information
                                </button>
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
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm font-bold text-gray-600 uppercase"
                                    >
                                        E-mail Address
                                    </label>
                                    <input
                                        type="tel"
                                        name=""
                                        id=""
                                        placeholder="E-mail Address"
                                        className="rounded-md border border-gray-400 p-3 focus:border-rose-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-md bg-rose-300 py-3 text-lg font-bold transition duration-200 ease-in-out hover:bg-rose-200"
                                >
                                    Save E-mail Address
                                </button>
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
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm font-bold text-gray-600 uppercase"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="tel"
                                        name=""
                                        id=""
                                        placeholder="Password"
                                        className="rounded-md border border-gray-400 p-3 focus:border-rose-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm font-bold text-gray-600 uppercase"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="tel"
                                        name=""
                                        id=""
                                        placeholder="Confirm Password"
                                        className="rounded-md border border-gray-400 p-3 focus:border-rose-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-md bg-rose-300 py-3 text-lg font-bold transition duration-200 ease-in-out hover:bg-rose-200"
                                >
                                    Save Password
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </AccountLayout>
    );
}

export default Index;
