import { AiOutlineGlobal } from "react-icons/ai";
import {footerItems, socialMediaLinks, footerLinks} from "../constants/index.jsx";
import {useEffect, useState} from "react"; // Import data
import { FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {

    return (
        <footer>
            <div className="bottom-0 left-0 right-0 border-b-2 md:border-b-0 md:bg-[#242933] z-50">
                <div
                    className="md:pl-24 md:pr-6 md:pt-16 pb-11 py-3 px-3 mx-auto flex flex-col justify-between max-w-screen-xl items-center">
                    {/* Footer columns grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                        {/* Map through footer items to create columns */}
                        {footerItems.map((column, index) => {
                            const [isOpen, setIsOpen] = useState(false); // State to manage visibility


                            useEffect(() => {
                                const handleResize = () => {
                                    if (window.innerWidth >= 768) {
                                        setIsOpen(true); // Always open on medium screens
                                    } else {
                                        setIsOpen(false); // Collapse on small screens
                                    }
                                };

                                // Initial check to set the correct state based on current window size
                                handleResize();

                                // Add event listener for window resize
                                window.addEventListener("resize", handleResize);

                                // Cleanup function to remove the event listener when the component unmounts
                                return () => {
                                    window.removeEventListener("resize", handleResize);
                                };
                            }, []); // Empty dependency array ensures this effect runs only on mount/unmount

                            return (
                                <div key={index} className="md:text-white">
                                    <div className="flex md:justify-start justify-between md:mb-4 items-center"
                                         onClick={() => {
                                             if (window.innerWidth < 768) {
                                                 setIsOpen(!isOpen); // Toggle visibility on small screens
                                             }
                                         }} // Toggle only on small screens
                                    >
                                        {/* Footer section title */}
                                        <h2
                                            className="text-xl font-semibold cursor-pointer"
                                        >
                                            {column.title}
                                        </h2>
                                        {/* Toggle icons for small screens */}
                                        {isOpen ? (<FaMinus className="mr-2 block md:hidden"/>) :
                                            <FaPlus className="mr-2 block md:hidden"/>}
                                    </div>
                                    {/* Render items only if open on small screens; always show on medium and larger screens */}
                                    <ul className={`space-y-2 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-72' : 'max-h-0'}`}>
                                        {column.items.map((item, i) => (
                                            <li key={i}
                                                className="flex items-center md:text-[#BBBCBE] hover:text-[#D3D4D6] text-lg">
                                                <a href={item.link}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}

                        {/* Column for social media links and global language option */}
                        <div className="text-white md:text-footerBlack flex flex-col items-center md:items-end h-full">
                            {/* Social media icons */}
                            <ul className="space-x-8 flex items-center mt-4 md:mt-0 md:items-end order-2 md:order-1">
                                {/* Map through social media links */}
                                {socialMediaLinks.map((social, index) => (
                                    <li key={index}
                                        className="flex items-center bg-[#BDBFC2] rounded-2xl md:rounded-xl justify-center h-7 w-7 md:h-5 md:w-5">
                                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                                            {social.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* Global language option */}
                            <div
                                className=" md:text-[#BDBFC2] text-[#808080] text-md md:mt-24 flex items-center gap-2 order-1 md:order-2">
                                <AiOutlineGlobal className="text-3xl text-[#808080] md:text-[#808080]"/> Global /
                                English
                            </div>
                        </div>
                    </div>
                    {/* Footer links and copyright information */}
                    <div
                        className="w-full md:text-white flex flex-col justify-center items-center mt-11 text-[11px] font-normal md:text-[16px]">
                        {/* Footer links for large screens */}
                        <ul className="md:list-disc space-x-4 md:space-x-8 md:flex items-center justify-end hidden">
                            {/* Map through footer links */}
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                        {/* Footer links for small screens */}
                        <ul className="md:list-disc space-x-4 md:space-x-8 flex md:hidden items-center justify-end mb-2">
                            {/* Map through footer links */}
                            {footerLinks.slice(0, 3).map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="block md:hidden">
                            {footerLinks.slice(3, 4).map((link, index) => (
                                <a key={index} href={link.href}>{link.text}</a>
                            ))}
                        </div>
                        {/* Copyright notice */}

                    </div>

                </div>

            </div>
            <div className="bg-black text-center py-4 md:py-8">
                <span className="mt-2 text-white w-full text-[11px] md:text-[16px]">2024 © Star Cells (Pvt) Ltd | Designed & Developed by Silicon Radon Networks (Pvt) Ltd.</span>
            </div>
        </footer>

    )
}

export default Footer;
