import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import HeroSection from '../../HeroSection/HeroSection';
import GallerSection from '../../GallerySection/GallerySection';
import './PageProps.css';
import Links from '../../Links/Links';
import Footer from '../../Footer/Footer';

function PageProps(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(props.pages);
        document.title = props.pages.title;
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <div className="bg-blue relative text-white">
                    {/* <div className="bg-pink absolute right-20 top-[-50px] ">
                        <a href="#gallery">
                            <i className="fa-solid fa-angles-down text-2xl px-8 py-6 hover:bg-blue hover:text-yellow shadow-2xl transition-all duration-300"></i>
                        </a>
                    </div> */}
                    <div className="bg-pink shadow-xl w-[300px] lg:w-[600px] md:w-[600px] py-8 text-center rounded-badge absolute left-[50%] translate-x-[-50%] top-[-70px]">
                        <p className="text-white mb-2 text-3xl lg:text-4xl md:text-3xl font-RacingSansOne">Delhi Escort services</p>
                        <p className="text-white font-semibold text-xl font-Montserrat">Contact: +91 96433 30613</p>
                    </div>
                    <div className="max-w-screen-lg mx-auto text-center pt-28 pb-20">
                        <h2 className="font-RacingSansOne text-2xl italic mb-2">BEST SERVICE GUARANTEE</h2>
                        <p className="text-justify italic w-[90%] lg:w-full md:w-[90%] sm:w-[90%] mx-auto">If you are looking for genuine and high-class escort girls, then you have come to the right place. At Girl Service, we offer a wide range of escorts, including independent escorts, VIP escorts, Mallu girls, Russian escorts, college girls, and more. Our services also cater to high-profile individuals who seek discreet and reliable companionship. Please feel free to contact us on WhatsApp at 000000000 to meet our girls. We assure you that we do not provide any fake girls. Before making a booking, we recommend you check out our price list. Thank you for choosing our services.</p>
                    </div>
                </div>
            </main>
            <div className="container bg-dark pt-5">
                <div className="cont-text">
                    <h1 style={{ backgroundColor: "rgb(211, 36, 95)" }} className="text-center bg-pink text-white text-capitalize fs-1 fw-bold">{data.name}</h1>
                    <p>&nbsp;</p>
                </div>
            </div>
            <GallerSection />
            <div className='container-outer bg-dark' >
                <div dangerouslySetInnerHTML={{ __html: data.textSection02 }} className='container w-75 rounded-xl p-5' style={{ backgroundColor: "whitesmoke" }} />
            </div>
            <div className="bg-pink grid gap-16 py-16">
                <div className="max-w-screen-lg mx-auto">
                    <p className="w-[90%] lg:w-full md:w-[90%] sm:w-[90%] mx-auto text-white font-RacingSansOne text-3xl lg:text-5xl md:text-5xl mb-2 text-center lg:text-start md:text-start ">PERFECT ESCORT SERVICE!</p>
                    <p className="text-white text-justify w-[90%] lg:w-full md:w-[90%] sm:w-[90%] mx-auto">
                        Introducing Girl Service, the premier escort service! Experience the convenience of booking any girl of your choice. With just a simple phone call, we will handle your booking with utmost care and ensure that your selected girl is promptly delivered to your specified address or area. Unlike other agencies, we do not charge any additional fees for delivery to well-known hotels. Our services are available round the clock, 24 hours a day, 7 days a week. Discover your ideal companion at Girl Service, where we offer a wide range of girls to cater to your preferences. Whether you desire a blonde, brunette, dark, or slim escort, especially college girls, we have the perfect match for you. Contact us today to book an escort girl and prepare to be amazed by the exceptional experience provided by our escorts agency. Once your booking is confirmed, you can expect the delivery within a swift 25 to 30 minutes. To avail of our services, simply browse our website or reach out to us via phone call or message. Rest assured that your personal details will be handled with utmost confidentiality, as all information will be processed separately and deleted after your booking and service. Feel free to contact us anytime, as we are available 24/7 via WhatsApp or phone call.
                    </p>
                    <div className="max-w-screen-lg mx-auto flex justify-center lg:justify-start md:justify-start lg: gap-4 mt-8">
                        <a href="https://wa.me/9643330613" className="bg-black text-white text-lg px-5 py-2 font-RacingSansOne shadow-2xl cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300">
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            Whatsapp
                        </a>
                        <a href="tel:9643330613" className="bg-black text-white text-lg px-5 py-2 font-RacingSansOne shadow-2xl cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300">
                            <i className="fa-solid fa-phone me-2"></i>
                            Call now
                        </a>
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <p className="w-[90%] lg:w-full md:w-[90%] sm:w-[90%] mx-auto text-white font-RacingSansOne mb-2 text-3xl lg:text-5xl md:text-5xl">TOP GIRL SERVICE PROVIDES THE MOST AFFORDABLE SERVICE AVAILABLE!</p>
                    <p className="text-white text-justify w-[90%] lg:w-full md:w-[90%] sm:w-[90%] mx-auto">
                        Discover the extensive selection of top-notch escorts available at Top Girl Service. We take pride in offering the most affordable rates for our exceptional services. Our escorts are not only beautiful and talented but also provide full-service experiences. They will conveniently deliver their services to your preferred location. Additionally, we offer the option to extend your time with our escorts, allowing you to enjoy more services. As a reliable company, we prioritize secure communication and guarantee outstanding service. For more information and to make a booking, please give us a call today. Whether you are a couple or a group of friends, our escort services provide an opportunity to indulge in unforgettable experiences. Our escorts are intelligent, spontaneous, sexy, and above the age of 21. They are sure to cater to your desires and provide adult entertainment that surpasses expectations. Upon request, we also offer services such as erotic massages and stripteases. Our escort services are open-minded and cater to various preferences. Delivery of our services typically begins within 30 minutes of your booking, although it may take up to 45 minutes depending on the time and traffic. We are proud to serve various areas. Simply inform us of your location and desired escort, and we will be more than happy to assist you. Please do not hesitate to contact us or make a booking. We are delighted to serve you in different cities across India. DivyaEscort’s Finest Escort Service DivyaEscort, known for its vibrancy, is home to some of the most sought-after call girls in India. Whether you prefer college girls, independent escorts, Russian escorts, or high-profile escorts, DivyaEscort has a diverse range of options to cater to your desires. The city offers an abundance of attractions, from its picturesque canals to its charming coffee shops. And with the alluring girls of Escorts Service, your moments in the city will be truly captivating. Whether you reside in DivyaEscort or are visiting the city, Girl Servic is your ultimate destination for a fulfilling and unforgettable time.
                    </p>
                    <div className="max-w-screen-lg mx-auto flex justify-center lg:justify-start md:justify-start gap-4 mt-8">
                        <a href="https://wa.me/9643330613" className="bg-black text-white text-lg px-5 py-2 font-RacingSansOne shadow-2xl cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300">
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            Whatsapp
                        </a>
                        <a href="tel:9643330613" className="bg-black text-white text-lg px-5 py-2 font-RacingSansOne shadow-2xl cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300">
                            <i className="fa-solid fa-phone me-2"></i>
                            Call now
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-blue relative z-[0]">
                <div className="bg-yellow h-[30px] relative z-[-1]"></div>
                <div className="max-w-screen-xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
                    <div className="grid place-items-center lg:place-content-start col-span-1">
                        <div className="w-[300px] lg:w-[400px]">
                            <img className="" src="/images/img-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-span-2 w-[90%] mx-auto">
                        {/* <div className="text-center"> */}
                        <p className="text-white text-2xl italic">State of the Art Training</p>
                        <div className="flex items-center">
                            <p className="text-white text-5xl font-RacingSansOne flex-1">BEST IN CLASS GIRLS</p>
                            <div className="h-[1.5px] bg-white w-full flex-1"></div>
                        </div>
                        {/* </div> */}
                        <p className="italic text-gray-300 mt-8">
                            Divya Escorts Service | Escort Girls Model Escorts girl for your sexual Experience. Escort service is a popular thing, and we provide you with the best and complete experience that can be availed within the price range of 10000 rupees per hour. Check out our sexy escort girls, and contact us for booking now. Welcome to the best escort service. Find the perfect escort girls of your choice. We are the most reliable and qualified escort girls, call girls, DivyaEscort female escorts, and independent escorts. Successfully serving, 24/7 service is available, and we have the most diverse companions who reach your doorstep with utmost privacy within 25 to 30 minutes of booking. There is no choice of beautiful girls to make the time enjoyable; take the services of top beautiful girls for a short time or a night party. Girl Servic Escorts make life more colorful and make new friends. Are you looking for a great selection of DivyaEscort? We offer 24/7 the best escort services.
                        </p>
                        <div className="max-w-screen-lg mx-auto flex justify-center lg:justify-start md:justify-start gap-4 mt-20">
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
            </div>
            <section dangerouslySetInnerHTML={{ __html: data.mapCode }} className="w-full">
            </section>
            <section id="links" className="bg-bg">
                <Links />
            </section>
            <Footer />
        </>
    )
}

export default PageProps