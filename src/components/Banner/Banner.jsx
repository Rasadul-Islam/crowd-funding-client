import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    // Scroll function to handle slide navigation
    const scrollToSlide = (id) => {
        const slide = document.getElementById(id);
        if (slide) {
            slide.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
                    <h1 className='absolute text-white right-20 top-5 lg:right-40 md:top-10 p-2 md:p-5 rounded-xl text-2xl lg:text-4xl font-bold text-center'>PullUp</h1>
                    <div className='absolute text-white right-0 top-14 md:right-0 md:top-20 p-2 md:p-5 rounded-xl'>
                        <p className="text-sm md:text-xl lg:text-2xl w-80 md:w-96 lg:w-[500px] text-center">
                            <Typewriter
                                words={[
                                    'Building a Better Tomorrow, Together.',
                                    'Empowering Dreams, One Donation at a Time.',
                                    'Your Contribution Fuels Innovation and Hope.',
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={150}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </p>
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
                    <p className="text-sm md:text-xl lg:text-4xl">
                            <Typewriter
                                words={[
                                    'Empower communities with your donation.',
                                    'Small contributions, big impact.',
                                    'Support projects that matter.',
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
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