function AuthLayout({ children }) {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="grid flex-1 gap-10 px-4 md:max-w-md">{children}</div>
        </main>
    );
}

export default AuthLayout;
