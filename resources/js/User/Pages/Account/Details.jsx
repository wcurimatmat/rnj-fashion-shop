function Details() {
    return (
        <>
            <section>
                <header>
                    <h2 className="text-2xl font-bold">My Details</h2>
                </header>
            </section>

            <div className="">
                <section>
                    <header className="">
                        <h3>Personal Information</h3>
                    </header>

                    <div className="">
                        <div className="">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti, magni.
                            </p>
                        </div>

                        <div className="">
                            <form action="">
                                <div className="">
                                    <div className="">
                                        <label htmlFor="">First Name</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="First Name"
                                        />
                                    </div>

                                    <div className="">
                                        <label htmlFor="">Last Name</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="">Phone Number</label>
                                    <input
                                        type="tel"
                                        name=""
                                        id=""
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <header className="">
                        <h3>E-mail Address</h3>
                    </header>

                    <div className="">
                        <div className="">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti, magni.
                            </p>
                        </div>

                        <div className="">
                            <form action="">
                                <div className="">
                                    <label htmlFor="">E-mail Address</label>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="E-mail Address"
                                    />
                                </div>

                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <header className="">
                        <h3>Password</h3>
                    </header>
                    <div className="">
                        <div className="">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti, magni.
                            </p>
                        </div>

                        <div className="">
                            <form action="">
                                <div className="">
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="">Confirm Password</label>
                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Confirm Password"
                                    />
                                </div>

                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Details;
