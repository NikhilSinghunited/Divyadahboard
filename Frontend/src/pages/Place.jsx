import { useLocation, useParams } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/HeroSection/HeroSection"
import GallerySection from "../components/GallerySection/GallerySection"
import Links from "../components/Links/Links"
import Slideshow from "../components/Slideshow/Slideshow"
import Table from "../components/Table/Table"
import Footer from "../components/Footer/Footer"
import data from "../data/pageData.js"

function Place() {
    const param = useParams()
    const placeUrl = param.name.split('-').join(' ')

    const placeContent = data.find((item) => item.title === placeUrl)

    const location = useLocation()
    const { pathname } = location

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <div className="flex justify-center relative bottom-[60px]">
                    <div className="bg-pink w-[300px] lg:w-[600px] md:w-[600px] py-8 text-center rounded-badge">
                        <p className="text-white mb-2 text-3xl lg:text-4xl md:text-3xl font-RacingSansOne">{placeContent.title}</p>
                        <p className="text-white font-semibold text-xl font-Montserrat">Contact: +91 96433 30613</p>
                    </div>
                </div>
                <div className="w-[90%] mx-auto mb-10">
                    {placeContent.content?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-6">
                                <h2 className="text-lg font-semibold">{item?.title}</h2>
                                <p className="text-justify">{item?.description}</p>
                            </div>
                        )
                    })}
                </div>
                <Slideshow />
                <Table />
                <GallerySection />
                <div className="w-[90%] mx-auto my-10">
                    {placeContent.content2?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-6">
                                <h2 className="text-lg font-semibold">{item?.title}</h2>
                                <p className="text-justify">{item?.description}</p>
                            </div>
                        )
                    })}
                </div>
                <section id="links" className="bg-bg">
                    <Links />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Place
