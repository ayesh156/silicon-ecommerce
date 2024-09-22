import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {homeBottomImgSlider} from "../constants/index.jsx"; // Import data
import {EffectCoverflow, Navigation, Pagination, Autoplay} from 'swiper/modules'; // Import Navigation module

const ImageBottomSlider = () => {

    return (
        <div className="w-full mt-10 md:mt-36 mb-2">
            <div className="swiper-custom2">
                <Swiper
                    effect={'coverflow'} // Set the effect to coverflow
                    centeredSlides={true} // Center the main slide in view
                    slidesPerView={1.2} // Show part of the adjacent slides
                    grabCursor={true} // Enable cursor grab effect
                    loop={true} // Enable infinite loop mode
                    navigation={{
                        nextEl: '.swiper-button-next', // Selector for next button
                        prevEl: '.swiper-button-prev', // Selector for previous button
                        clickable: true // Make buttons clickable
                    }}
                    autoplay={{
                        delay: 2000, // Delay between slides
                        disableOnInteraction: false, // Keep autoplay after user interaction
                    }}
                    pagination={{ clickable: true }} // Enable pagination dots
                    modules={[Autoplay, EffectCoverflow, Navigation, Pagination]} // Load required modules
                    breakpoints={{
                        768: {
                            slidesPerView: 1.2, // Show 1 slide when viewport is below 768px
                        },
                        0: {
                            slidesPerView: 1, // Show 1 slide when viewport is below 768px
                        },
                    }}
                >
                    {/* Render images in SwiperSlide */}
                    {homeBottomImgSlider.map((item, i) => (
                        <SwiperSlide key={i} className="flex justify-center h-[358px] w-[293px]">
                            <img className="h-[360px] md:h-full w-full object-cover" src={item.image} alt={item.name}/>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler"></div>

                </Swiper>
                {/* Pagination container */}
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );

}

export default ImageBottomSlider;
