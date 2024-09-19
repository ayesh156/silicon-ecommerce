import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {homeBottomImgSlider} from "../constants/index.jsx"; // Import image data
import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules'; // Import Navigation module

const ImageBottomSlider = () => {

    return (
        <div className="relative text-white">
            <div className="swiper-custom2">
                <Swiper
                    effect={'coverflow'}
                    centeredSlides={true} // Center the main slide
                    slidesPerView={1.2} // Adjust to show part of the adjacent slides
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }}
                    pagination={{ clickable: true }} // Enable pagination
                    modules={[EffectCoverflow, Navigation, Pagination]}
                >
                    {/* Render images in SwiperSlide */}
                    {homeBottomImgSlider.map((item, i) => (
                        <SwiperSlide key={i} className="flex justify-center h-[358px] w-[293px]">
                            <img className="h-full w-full object-cover" src={item.image} alt={item.name}/>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler"></div>

                </Swiper>
                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );

}

export default ImageBottomSlider;
