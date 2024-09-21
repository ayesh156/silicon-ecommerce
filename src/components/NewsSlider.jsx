import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {EffectCoverflow, Navigation} from 'swiper/modules'; // Import Navigation module
import { useState } from 'react';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi2"; // Icons for navigation buttons
import {aboutNewsSlider} from "../constants/index.jsx"; // Importing slider data

const NewsSlider = () => {
    // useState hooks for tracking selected year, opacity, animation class, slide direction, and current slide index
    const [selectedYear, setSelectedYear] = useState(2024); // Track the selected year
    const [opacity, setOpacity] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [slideDirection, setSlideDirection] = useState('fade-in-left'); // Initial direction
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Track the current slide index

    // Filter slides based on the selected year
    const currentYearSlides = aboutNewsSlider.find((data) => data.year === selectedYear)?.slides || [];

    // Handle slide change event to trigger animation and manage opacity
    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.activeIndex); // Update active slide index
        setOpacity(0); // Reset opacity to create a fade effect
        setAnimationClass(''); // Clear previous animation class
        setTimeout(() => {
            setOpacity(1); // Set opacity back after a brief delay for fade-in effect
            // Toggle between left and right animation directions
            const newDirection = slideDirection === 'fade-in-left' ? 'fade-in-right' : 'fade-in-left';
            setAnimationClass(newDirection); // Apply new animation direction
            setSlideDirection(newDirection); // Update the current slide direction state
        }, 300); // Timeout for smooth transition
    };

    return (
        <div className="max-w-full md:max-w-[76rem] mt-20 md:mt-32 md:mb-2">
            {/* Year selection buttons for filtering news by year */}
            <div className="relative mx-10 md:mx-0 flex justify-between md:mb-6 text-center px-4 md:px-64">
                {aboutNewsSlider.map((data) => (
                    <div className="inline-block relative group" key={data.year}>
                        <button
                            onClick={() => setSelectedYear(data.year)}
                            className={`text-lg md:text-2xl rounded ${selectedYear === data.year ? 'text-black font-bold' : 'text-textGray font-normal'}`}
                        >
                            {data.year}
                        </button>
                        <span
                            className={`absolute left-0 bottom-[-8px] md:bottom-[-18px] w-full h-[2px] ${selectedYear === data.year ? 'bg-black' : 'bg-transparent'} z-10`}></span>
                    </div>
                ))}
                <span className="absolute left-0 bottom-[-8px] md:bottom-[-18px] bg-lineGray w-full h-[1px] z-0"></span>
            </div>

            {/* Swiper component for news slides */}
            <div className="swiper-custom3">
                <Swiper
                    effect={'coverflow'} // Applying coverflow effect for Swiper
                    slidesPerView={1} // Display one slide at a time
                    grabCursor={true} // Enable grab cursor for slide navigation
                    loop={true} // Loop through slides indefinitely
                    navigation={{
                        nextEl: '.swiper-button-next', // Next slide button
                        prevEl: '.swiper-button-prev', // Previous slide button
                        clickable: true
                    }}
                    modules={[EffectCoverflow, Navigation]} // Enable coverflow and navigation modules
                    onSlideChange={handleSlideChange} // Event handler for slide change
                >
                    {/* Dynamically render slides based on filtered data */}
                    {currentYearSlides.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="bg-white h-auto mt-5 pt-[6rem] sm:pt-[9.5rem] pb-[2rem] md:pb-[3rem] px-4 sm:px-8 md:px-16 border-2 flex flex-col justify-center items-center text-center text-textGray fade-in">
                                {/* Slide title with animation and opacity transitions */}
                                <h3 className={`text-xl sm:text-2xl md:text-4xl h-[50px] font-normal md:font-medium ${animationClass}`}
                                    style={{opacity}}>
                                    {item.title}
                                </h3>
                                {/* Slide description with opacity transition */}
                                <p className={`mt-6 sm:mt-8 md:mt-11 text-[12px] sm:text-[16px] md:text-lg transition-opacity duration-500 ease-in-out ${animationClass} h-[40px]`}
                                   style={{opacity}}>
                                    {item.description}
                                </p>
                                {/* Display current slide number and total slide count */}
                                <div className="pt-8 sm:pt-10 md:pt-[5.4rem]">
                                    <span className="text-lg sm:text-2xl text-black">{i + 1} / </span>
                                    <span className="text-lg sm:text-2xl">{currentYearSlides.length}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation buttons */}
                <button className="swiper-btn" hidden={currentSlideIndex === 0}>
                    <HiOutlineChevronLeft className="swiper-button-prev" />
                </button>
                <button className="swiper-btn" hidden={currentSlideIndex === aboutNewsSlider.length - 1}>
                    <HiOutlineChevronRight className="swiper-button-next" />
                </button>
            </div>
        </div>

    );
}

export default NewsSlider;
