import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import data from '../../data/pageData.js'

function Links() {
    const [visible, setVisible] = useState(25);
    const [getLinks, setGetLinks] = useState([]);
    useEffect(() => {
        fetchPageData();
    }, []);

    const fetchPageData = async () => {
        try {
            const pagesResponse = await axios.get("http://localhost:5000/pages");
            setGetLinks(pagesResponse.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    return (
        <div className="pb-8">
            <div className="bg-pink text-center py-2">
                <p className="text-white text-3xl font-RacingSansOne">Places in Delhi for Escort services</p>
            </div>
            <div className='w-[90%] mx-auto'>
                <div className='my-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    {getLinks.map((item) => {
                        return (
                            <div key={item._id} className='mb-1 hover:translate-x-2 transition-all duration-300'>
                                <Link to={`/pages/${item.url}`} className='font-semibold text-lg text-white text-capitalize'>
                                    <i className="fa-solid fa-location-crosshairs me-1 text-amber-400"></i>
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })}
                    {data.slice(0, visible).map((item) => {
                        return (
                            <div key={item.id} className='mb-1 hover:translate-x-2 transition-all duration-300'>
                                <Link to={`/${item.title.split(' ').join('-')}`} className='font-semibold text-lg text-white'>
                                    <i className="fa-solid fa-location-crosshairs me-1 text-pink"></i>
                                    {item.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center'>
                    {visible !== data.length
                        ? <button className='bg-pink text-white text-lg px-5 py-2 font-RacingSansOne cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300' onClick={() => setVisible(data.length)}>View More</button>
                        : <button className='bg-pink text-white text-lg px-5 py-2 font-RacingSansOne cursor-pointer hover:bg-blue hover:text-yellow transition-all duration-300' onClick={() => setVisible(25)}>View Less</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Links
