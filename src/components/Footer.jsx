import { AiOutlineGlobal } from "react-icons/ai";
import {footerItems, socialMediaLinks, footerLinks} from "../constants/index.jsx"; // Import image data

const Footer = () => {

    return (
        <footer className="bottom-0 left-0 right-0 border-b-2 md:border-b-0 bg-[#242933] z-50">
            <div
                className="md:pl-24 md:pr-6 md:pt-16 md:pb-11 py-3 px-3 mx-auto flex flex-col justify-between h-[536px] max-w-screen-xl items-center">
                {/* Footer columns grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                    {/* Map through footer items to create columns */}
                    {footerItems.map((column, index) => (
                        <div key={index} className="text-white">
                            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
                            <ul className="space-y-2">
                                {column.items.map((item, i) => (
                                    <li key={i}
                                        className="flex items-center text-[#BBBCBE] hover:text-[#D3D4D6] text-lg">
                                        <a href={item.link}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column for social media links and global language option */}
                    <div className="text-footerBlack flex flex-col items-end h-full">
                        <ul className="space-x-8 flex items-center justify-end">
                            {/* Map through social media links */}
                            {socialMediaLinks.map((social, index) => (
                                <li key={index}
                                    className="flex items-center bg-[#BDBFC2] rounded-xl justify-center h-5 w-5">
                                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="text-[#BDBFC2] text-md mt-24 flex items-center gap-2">
                            <AiOutlineGlobal className="text-3xl text-[#808080]"/> Global / English
                        </div>
                    </div>
                </div>
                {/* Footer links and copyright information */}
                <div className="w-full text-white flex flex-col justify-center items-center">
                    <ul className="list-disc space-x-8 flex items-center justify-end">
                        {/* Map through footer links */}
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                    <span className="mt-2">copyright ©2024 Oscal All rights reserved.</span>
                </div>
            </div>

        </footer>

    )
}

export default Footer;
