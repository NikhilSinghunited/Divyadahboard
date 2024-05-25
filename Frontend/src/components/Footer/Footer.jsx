import { Link } from "react-router-dom"

function Footer() {
    return (<>
        <div className="h-[30px] bg-yellow"></div>
        <div className="bg-bg">
            <footer className="footer text-white w-[90%] mx-auto p-10">
                <aside>
                    <div className="mb-4">
                        <Link to={"/"} className="w-[80px] flex items-center">
                            <img src="/images/logo.png" alt="logo" />
                            <div className="ms-1">
                                <p className="font-RacingSansOne text-[1.5em] tracking-[0.5rem]">DIVYA</p>
                                <p className="font-bold text-pink text-[0.75em] tracking-[0.05rem] whitespace-nowrap mt-[-6px]">Escort Service</p>
                            </div>
                        </Link>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title font-RacingSansOne tracking-widest">CALL GIRLS</h6>
                    <a href="/Call-Girls-in-Connaught-Place" className="link link-hover">Connaught Place</a>
                    <a href="/Call-Girls-in-Seelampur" className="link link-hover">Seelampur</a>
                    <a href="/Call-Girls-in-Kashmiri-gate" className="link link-hover">Kashmiri gate</a>
                    <a href="/Call-Girls-in-Kanhaiya-nagar" className="link link-hover">Kanhaiya nagar</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-RacingSansOne tracking-widest">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className="text-4xl hover:text-pink hover:scale-110 transition-all duration-200"><i className="fa-brands fa-square-instagram"></i></a>
                        <a className="text-4xl hover:text-pink hover:scale-110 transition-all duration-200"><i className="fa-brands fa-square-facebook"></i></a>
                        <a className="text-4xl hover:text-pink hover:scale-110 transition-all duration-200"><i className="fa-brands fa-square-x-twitter"></i></a>
                    </div>
                </nav>
            </footer>
        </div>
    </>
    )
}

export default Footer
