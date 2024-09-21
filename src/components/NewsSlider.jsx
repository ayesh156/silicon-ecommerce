import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {EffectCoverflow, Navigation} from 'swiper/modules'; // Import Navigation module
import { useState } from 'react';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi2";

const NewsSlider = () => {
    const [selectedYear, setSelectedYear] = useState(2024); // Track the selected year
    const [opacity, setOpacity] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [slideDirection, setSlideDirection] = useState('fade-in-left'); // Initial direction
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Track the current slide index

    const slidesData = [
        {
            year: 2024,
            slides: [
                {
                    title: "1/2024",
                    description: "Launch OSCAL PowerMax 3600, the world's first rugged power station for both home and outdoor backup; Facebook followers exceed one million",
                }
            ]
        },
        {
            year: 2023,
            slides: [
                {
                    title: "10/2023",
                    description: "Launch OSCAL PowerMax 3600, the world's first rugged power station for both home and outdoor backup; Facebook followers exceed one million",
                },
                {
                    title: "11/2023",
                    description: "TIGER 12 placed third in real-time industry-wide sales on AliExpress",
                },
                {
                    title: "12/2023",
                    description: "Throughout 2023, OSCAL and Blackview achieved a total product sales volume of 3,480,000 units and a sales revenue of $400 million",
                },
            ]
        },
        {
            year: 2022,
            slides: [
                {
                    title: "",
                    description: " Self-developed and released the latest DokeOS 3.0; Unveiling the pioneering tablet PC mode",
                },
            ]
        },
        // Add more year objects here
    ];

    // Filter slides based on the selected year
    const currentYearSlides = slidesData.find((data) => data.year === selectedYear)?.slides || [];

    // Update opacity when the slide changes
    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.activeIndex); // Update current slide index
        setOpacity(0); // Reset opacity to 0 for the new slide
        setAnimationClass(''); // Reset animation class
        setTimeout(() => {
            setOpacity(1); // Set opacity to 1 after a brief delay
            // Alternate direction between left and right
            const newDirection = slideDirection === 'fade-in-left' ? 'fade-in-right' : 'fade-in-left';
            setAnimationClass(newDirection); // Set the new direction class
            setSlideDirection(newDirection); // Update the current direction
        }, 300); // Delay for opacity transition
    };

    return (
        <div className="max-w-[76rem] mt-10 md:mt-36 mb-2">
            {/* Year selection buttons */}
            <div className="relative flex justify-between mb-6 text-center px-8 md:px-64">
                {slidesData.map((data) => (
                    <div className="inline-block relative group" key={data.year}>
                        <button
                            onClick={() => setSelectedYear(data.year)}
                            className={`text-2xl rounded ${selectedYear === data.year ? 'text-black font-sans font-bold' : 'text-textGray font-normal'}`}
                        >
                            {data.year}
                        </button>
                        <span className={`absolute left-0 bottom-[-23px] w-full h-[3px]  ${selectedYear === data.year ? 'bg-black' : 'bg-transparent'}`}></span>
                    </div>
                ))}
                <span className="absolute left-0 bottom-[-23px] bg-lineGray w-full h-[1px]"></span>
            </div>

            <div className="swiper-custom3">
                <Swiper
                    effect={'coverflow'} // Set the effect to coverflow
                    slidesPerView={1} // Show part of the adjacent slides
                    grabCursor={true} // Enable cursor grab effect
                    loop={true} // Enable infinite loop mode
                    navigation={{
                        nextEl: '.swiper-button-next', // Selector for next button
                        prevEl: '.swiper-button-prev', // Selector for previous button
                        clickable: true // Make buttons clickable
                    }}
                    modules={[EffectCoverflow, Navigation]} // Load required modules
                    onSlideChange={handleSlideChange} // Handle slide change
                >
                    {/* Render filtered images in SwiperSlide */}
                    {currentYearSlides.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white h-full mt-7 pt-[9.5rem] pb-[3rem] px-16 border-2 flex flex-col justify-center items-center text-center text-textGray fade-in">
                                <h3 className={`text-4xl font-medium ${animationClass}`}  style={{ opacity, height: '50px' }}>
                                    {item.title}
                                </h3>
                                <p className={`mt-11 text-lg transition-opacity duration-500 ease-in-out ${animationClass}`}  style={{ opacity, height: '40px' }}>
                                    {item.description}
                                </p>
                                <div className="pt-[5.4rem]">
                                    <span className="text-2xl text-black">{i + 1} / </span>
                                    <span className="text-2xl">{currentYearSlides.length}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation buttons */}
                <button className="swiper-btn">
                    <HiOutlineChevronLeft className="swiper-button-prev" />
                </button>
                <button className="swiper-btn">
                    <HiOutlineChevronRight className="swiper-button-next" />
                </button>
            </div>
        </div>
    );
}

export default NewsSlider;
