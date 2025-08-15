import UserLayout from "@User/Layout/UserLayout";

function Login() {
    return (
        <UserLayout>
            <section className="">
                <h1>Login</h1>
                <p>Enter your email and password to login:</p>
            </section>

            <section>
                <form action="">
                    <div className="">
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </section>
        </UserLayout>
    );
}

export default Login;
