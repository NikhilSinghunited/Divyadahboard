function HeroSection() {
    return (
        <>
            <div className="bg-[url('/images/hero-img-2.jpg')] lg:bg-[url('/images/hero-img.jpg')] md:bg-[url('/images/hero-img.jpg')] bg-center bg-cover h-[600px]">
                <div className="bg-gradient-to-t from-purple-500 flex flex-col justify-center items-center h-full">
                    <div className="text-center">
                        <p className="text-yellow mb-2 text-xl lg:text-3xl italic font-semibold">Welcome to our 24 hour</p>
                        <h1 className="font-RacingSansOne text-white text-4xl lg:text-6xl md:text-5xl">DIVYA ESCORT SERVICE</h1>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <a href="https://wa.me/9643330613" className="bg-pink text-white text-lg px-5 py-2 font-RacingSansOne shadow-2xl cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300">
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            Whatsapp
                        </a>
                        <a href="tel:9643330613" className="bg-pink text-white text-lg px-5 py-2 font-RacingSansOne shadow-2xl cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300">
                            <i className="fa-solid fa-phone me-2"></i>
                            Call now
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
