import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

function Slideshow() {

    const splide = {
        type: 'loop',
        focus: 'center',
        perPage: 1,
        autoplay: false,
        autoWidth: true,
        height: '400px',
        gap: '0.5rem',
        autoStart: true,
        autoScroll: {
            pauseOnHover: true,
        },
        pagination: false,
        arrows: false,
    }

    return (
        <div className='mb-10' >
            <Splide options={splide} extensions={{ AutoScroll }} aria-label="My Favorite Images">
                <SplideSlide>
                    <div className='h-full rounded-lg overflow-hidden'>
                        <img className='h-full' src="/images/slider-img-1.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='h-full rounded-lg overflow-hidden'>
                        <img className='h-full' src="/images/slider-img-2.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='h-full rounded-lg overflow-hidden'>
                        <img className='h-full' src="/images/slider-img-3.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='h-full rounded-lg overflow-hidden'>
                        <img className='h-full' src="/images/slider-img-4.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='h-full rounded-lg overflow-hidden'>
                        <img className='h-full' src="/images/slider-img-5.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>

            </Splide>
        </div >
    )
}

export default Slideshow
