import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {homeTopImg} from "../constants/index.jsx"; // Import image data

import {Autoplay, EffectCoverflow, Navigation, Pagination} from 'swiper/modules'; // Import Navigation module
import { HiOutlineChevronLeft,HiOutlineChevronRight } from "react-icons/hi2";

const ImageTopSlider = () => {

    return (
        <div className="relative text-white">
            <div className="swiper-custom">
                <Swiper
                    effect={'coverflow'} // Set the effect to coverflow
                    slidesPerView={1} // Show one slide at a time
                    grabCursor={true} // Enable cursor grab effect
                    loop={true} // Enable infinite loop mode
                    navigation={{
                        nextEl: '.swiper-button-next', // Selector for next button
                        prevEl: '.swiper-button-prev', // Selector for previous button
                        clickable: true // Make buttons clickable
                    }}
                    pagination={{ clickable: true }} // Enable pagination dots
                    autoplay={{
                        delay: 2000, // Delay between slides
                        disableOnInteraction: false, // Autoplay won't stop after interaction
                    }}
                    modules={[Autoplay, Navigation, Pagination, EffectCoverflow]} // Load required modules
                    style={{
                        '--swiper-effect-coverflow-rotate': '50deg',
                        '--swiper-effect-coverflow-depth': '300px',
                        '--swiper-effect-coverflow-modifier': '1'
                    }} // Custom styles for coverflow effect
                >
                    {/* Render images in SwiperSlide */}
                    {homeTopImg.map((item, i) => (
                        <SwiperSlide key={i} className="flex justify-center md:h-[358px] h-[610px] w-[293px]">
                            <img className="md:h-full h-[395px] w-full md:object-cover" src={item.image} alt={item.name}/>
                            {/* Overlay Container */}
                            <div className={`md:absolute md:bg-transparent inset-0 flex flex-col justify-end md:justify-center text-left ${item.direction === 'right' ? 'md:items-end md:pr-24' : 'md:items-start md:pl-24'} ${item.color === 'white' ? 'text-white bg-black' : 'text-black bg-white'} p-2 md:p-4`}>
                                <div className={`flex flex-col justify-start items-start md:justify-center`}>
                                <h2 className="text-3xl md:text-5xl mb-2 font-semibold">{item.title}</h2>
                                <h4 className="text-[16px] mb-4">{item.subtitle}</h4>
                                <span className="text-[16px] mb-4">{item.description}</span>
                                <button className="mt-4 md:bg-[#fe5200] md:text-white md:w-32 py-1 underline md:no-underline md:px-4 text-lg md:text-xl rounded-sm hover:underline">
                                    <a href={item.link}>Buy Now</a>
                                </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler"></div>

                </Swiper>
                {/* Pagination dots */}
                <div className="swiper-pagination"></div>
                {/* Navigation buttons */}
                <button className="swiper-btn"><HiOutlineChevronLeft className="swiper-button-prev"/></button>
                <button className="swiper-btn"><HiOutlineChevronRight className="swiper-button-next" /></button>
            </div>
        </div>
    );

}

export default ImageTopSlider;
