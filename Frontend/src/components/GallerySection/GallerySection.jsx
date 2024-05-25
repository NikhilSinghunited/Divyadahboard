function GallerSection() {
    return (
        <section id="gallery" className="bg-bg py-16 relative">
            <div className="bg-yellow h-[30px] w-full absolute top-0">
            </div>
            <div className="italic w-[90%] lg:w-full md:w-[90%] sm:w-[90%] mx-auto">
                <div className="max-w-screen-lg mx-auto">
                    <p className="text-yellow text-3xl italic">What we offer</p>
                    <div className="flex items-center">
                        <p className="text-white text-5xl font-RacingSansOne flex-1">BEST IN CLASS GIRLS</p>
                        <div className="h-[1.5px] bg-yellow w-full flex-1"></div>
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center">
                    <div>
                        <img className="" src="/images/girl-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="" src="/images/girl-2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="" src="/images/girl-3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="" src="/images/girl-4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="" src="/images/girl-5.jpg" alt="" />
                    </div>
                    <div>
                        <img className="" src="/images/girl-6.jpg" alt="" />
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto flex justify-center gap-4 mt-20">
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
        </section>
    )
}

export default GallerSection
