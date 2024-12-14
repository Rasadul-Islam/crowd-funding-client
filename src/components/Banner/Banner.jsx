import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    // Scroll function to handle slide navigation
    const scrollToSlide = (id) => {
        const slide = document.getElementById(id);
        if (slide) {
            slide.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <div>
            <div className="carousel w-full h-80 md:h-96 lg:h-[450px] rounded-b-xl">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/2Mcm721/pexels-photo-2467396.jpg"
                        alt="Community engagement"
                        className="w-full object-cover"
                    />
                    <div className='absolute text-white right-5 top-5 lg:right-32 md:top-16 bg-gray-400 p-2 md:p-5 rounded-xl '>
                    <h1 className='text-2xl lg:text-4xl font-bold text-center'>PullUp</h1>
                    <p className='text-sm md:text-xl lg:text-2xl'>Building a Better Tomorrow, Together.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <Link
                            to="#slide4"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide4')}
                        >
                            ❮
                        </Link>
                        <Link
                            to="#slide2"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide2')}
                        >
                            ❯
                        </Link>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/nrxyvLb/pexels-photo-7230322.jpg"
                        alt="Donation drive"
                        className="w-full object-cover"
                    />
                    <div className='absolute text-purple-600 left-20 top-5  lg:left-36 md:top-20 lg:top-20 bg-white p-2 md:p-5 lg:p-10 rounded-xl w-1/3'>
                    <p className='text-sm md:text-xl lg:text-4xl'>Empower communities with your donation, turning small contributions into impactful changes for a brighter future.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <Link
                            to="#slide1"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide1')}
                        >
                            ❮
                        </Link>
                        <Link
                            to="#slide3"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide3')}
                        >
                            ❯
                        </Link>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/gSvbhNk/pexels-photo-7413915.jpg"
                        alt="Innovation and creativity"
                        className="w-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <Link
                            to="#slide2"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide2')}
                        >
                            ❮
                        </Link>
                        <Link
                            to="#slide4"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide4')}
                        >
                            ❯
                        </Link>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/f495nPq/Glossary-Series-Brand-Crowd-Funding-ftr.png"
                        alt="Empowered communities"
                        className="w-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <Link
                            to="#slide3"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide3')}
                        >
                            ❮
                        </Link>
                        <Link
                            to="#slide1"
                            className="btn btn-circle"
                            onClick={() => scrollToSlide('slide1')}
                        >
                            ❯
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;