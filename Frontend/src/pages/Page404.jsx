function Page404() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-bg">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-pink px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <p className="relative inline-block text-sm font-medium text-pink group active:text-pink-500 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-pink group-hover:translate-y-0"></span>
                    <span className="relative block px-8 py-3 bg-bg border border-current">
                        <a href="/" >Go Home</a>
                    </span>
                </p>
            </button>
        </main>
    )
}

export default Page404
