import video from "../assets/about_us-video.mp4";
import {servicesData} from "../constants/index.jsx"; // Import image data
import companyImg from "../assets/about_img/about_company_img.jpg";
import NewsSlider from "../components/NewsSlider.jsx";

const About = () => {

    return (
        <div className="bg-pageWhite">
            {/* Section with background video */}
            <div className="md:relative">
                <video
                    className="w-full h-auto min-h-64 md:h-screen object-cover"
                    src={video}
                    autoPlay
                    loop
                    muted
                />
            </div>

            {/* About OSCAL Section */}
            <div className="flex flex-col justify-center items-center h-full pt-11 pb-[3.8rem] px-2 md:px-0 md:py-28">
                <h1 className="text-xl md:text-4xl font-medium mb-4 relative">
                    About OSCAL
                    {/* Decorative underline */}
                    <div
                        className="absolute md:bottom-[-30px] bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[0.5px] bg-black"></div>
                </h1>
                {/* Company description paragraphs */}
                <p className="text-[12px] md:text-xl max-w-[65.6rem] leading-5 md:leading-10 text-center mt-[2.7rem] md:mt-[6.9rem] text-textBlack">
                    OSCAL is a technology brand that focuses on product performance, design, quality, and service.
                    Driven by the innovation DNA, OSCAL is committed to letting everyone enjoy smart devices with
                    leap-forward performance and trendsetting design at a very friendly price.
                </p>
                <p className="text-[12px] md:text-xl max-w-[65.6rem] leading-5 md:leading-10 text-center mt-[2.2rem] md:mt-[5rem] text-textBlack">
                    OSCAL has an excellent R&D team, led by a number of technical experts who have worked for decades in
                    international first-line mobile phone companies, and consisting of nearly 100 R&D engineers. They
                    strive to maintain the leading position in the industry, and pay more attention to customer
                    experience and product quality. Design innovation, performance excellence, and attention to details
                    are the basis of OSCAL products&apos; design and R&D. OSCAL has long cooperation with first-class
                    suppliers, and the supply of production materials is extremely stable.
                </p>
                <p className="text-[12px] md:text-xl max-w-[65.6rem] leading-5 md:leading-10 text-center mt-[2.2rem] md:mt-[5rem] text-textBlack">
                    At the beginning of 2021, OSCAL was awarded as The Most Potential Hi-Tech Brand to promisingly reach
                    the top technology brand worldwide. This year, OSCAL plans to launch several highly affordable smart
                    devices, including mainstream smartphones, rugged outdoor phones, tablets, and earphones to open the
                    global market. In the blueprint, OSCAL strives to cover over 100 markets worldwide, including
                    Europe, Africa, Asia, Latin America, Oceania, etc.
                </p>
            </div>

            {/* Innovation, Quality, and Service Section */}
            <div className="flex flex-col justify-center items-center h-full pb-[3rem] md:pb-[5.6rem]">
                <h1 className="text-xl md:text-4xl font-medium relative">
                    Innovation, Quality and Service
                    <div
                        className="absolute md:bottom-[-30px] bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[0.5px] bg-black"></div>
                </h1>

                {/* Service Data Grid */}
                <div className="mt-[1.2rem] md:mt-[4.8rem] grid grid-cols-2 md:grid-cols-3 w-full gap-4 max-w-5xl">
                    {servicesData.map((employee, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center mt-16"
                        >
                            <h4 className="text-xl md:text-4xl font-medium">{employee.count}</h4>
                            <span className="text-md mt-[2rem] md:mt-[3.2rem]">{employee.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Company Image */}
            <img src={companyImg} alt="Company Image" className="w-full h-full"/>

            {/* News Center Section */}
            <div className="flex flex-col justify-center items-center h-full pt-[4.4rem] md:pt-[5.2rem] md:pb-[7.6rem]">
                <h1 className="text-xl md:text-4xl font-medium relative">
                    News Center
                    {/* Decorative underline */}
                    <div
                        className="absolute  md:bottom-[-30px] bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[0.5px] bg-black"></div>
                </h1>
                {/* News Slider Component */}
                <NewsSlider/>
            </div>
        </div>
    )
};

export default About;
