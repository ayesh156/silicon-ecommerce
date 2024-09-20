import hsimg1 from "../assets/hero_slider_img/elite1_pc.jpg";
import hsimg2 from "../assets/hero_slider_img/pilot-2_pc.jpg";
import hsimg3 from "../assets/hero_slider_img/pad80wifi.jpg";
import hsimg4 from "../assets/hero_slider_img/PC-pad50kids.webp";
import hsimg5 from "../assets/hero_slider_img/tiger12_pc.webp";
import hsimg6 from "../assets/hero_slider_img/pw6000_pc1.jpg";

import hpimg1 from "../assets/home_devices_img/smartphone/tiger12_pc.png";
import hpimg2 from "../assets/home_devices_img/smartphone/tiger10_pc.jpg";
import hpimg3 from "../assets/home_devices_img/smartphone/modern8-pc.webp";
import hpimg4 from "../assets/home_devices_img/pad/pad18_pc.png";
import hpimg5 from "../assets/home_devices_img/pad/ELITE1_pC.jpg";
import hpimg6 from "../assets/home_devices_img/rugged_phones/pilot2_pc.jpg";
import hpimg7 from "../assets/home_devices_img/portable_power_station/powermax6000_pc.jpg";
import hpimg8 from "../assets/home_devices_img/portable_power_station/powermax3600_pc.jpg";

import hbsimg1 from "../assets/home_bottom_slider_img/pad16.png";
import hbsimg2 from "../assets/home_bottom_slider_img/PAD18.png";
import hbsimg3 from "../assets/home_bottom_slider_img/tiger10.jpg";
import hbsimg4 from "../assets/home_bottom_slider_img/tiger12.png";

import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";

//navItems
export const navItems = [
  {path: "/", link: "Home"},
  {path: "/news", link: "News"},
  {path: "/about-us", link: "About"},
  {path: "/contact-us", link: "Contact"},
];


//footerItems
export const footerItems = [
  {
    title: "ABOUT OSCAL",
    items: [
      { label: "About Us", link: "#" },
      { label: "News", link: "#" },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      { label: "TIGER Series Smartphone", link: "#" },
      { label: "FLAT Series Smartphone", link: "#" },
      { label: "C Series Smartphone", link: "#" },
      { label: "PILOT Series Smartphone", link: "#" },
      { label: "MODERN Series Smartphone", link: "#" },
      { label: "Pad Series", link: "#" },
      { label: "Portable Power Station", link: "#" },
      { label: "Hibuds", link: "#" },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { label: "Support Center", link: "#" },
      { label: "Contact Us", link: "#" },
      { label: "CE Certification", link: "#" },
      { label: "Network Bands Check", link: "#" },
      { label: "RF Exposure", link: "#" },
    ],
  },
];

//footerMediaLinks
export const socialMediaLinks = [
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: <LiaFacebookF className="text-xl md:text-sm" />,
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    icon: <FaYoutube className="text-xl md:text-sm" />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    icon: <FaInstagram className="text-xl md:text-sm" />,
  },
  {
    name: "Twitter",
    link: "https://x.com",
    icon: <TiSocialTwitter className="text-xl md:text-sm" />,
  },
];

// footerLinks
export const footerLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Use" },
  { href: "#", text: "Legal Statement" },
  { href: "#", text: "Intellectual Property Rights" }
];

// homeTopSliderImg
export const homeTopImg = [
  {
    name: "img-1",
    image: hsimg1,
    title: "ELITE 1",
    subtitle: "Explore, Create, Inspire. Your Space Here",
    description: "8200mAh Mega Battery | 10.51 - inch Large Display: Android 14",
    link : "https://google.com",
    color: "black",
    direction: "left"
  },
  {
    name: "img-2",
    image: hsimg2,
    title: "PILOT 2",
    subtitle: "Explore, Create, Inspire. Your Space Here",
    description: "8200mAh Mega Battery | 10.51 - inch Large Display: Android 14",
    link : "https://google.com",
    color: "white",
    direction: "left"
  },
  {
    name: "img-3",
    image: hsimg3,
    title: "Pad 80 WIFI",
    subtitle: "Explore, Create, Inspire. Your Space Here",
    description: "8200mAh Mega Battery | 10.51 - inch Large Display: Android 14",
    link : "https://google.com",
    color: "black",
    direction: "left"
  },
  {
    name: "img-4",
    image: hsimg4,
    title: "Pad 50 Kids",
    subtitle: "Explore, Create, Inspire. Your Space Here",
    description: "8200mAh Mega Battery | 10.51 - inch Large Display: Android 14",
    link : "https://google.com",
    color: "black",
    direction: "right"
  },
  {
    name: "img-5",
    image: hsimg5,
    title: "TIGER 12",
    subtitle: "Explore, Create, Inspire. Your Space Here",
    description: "8200mAh Mega Battery | 10.51 - inch Large Display: Android 14",
    link : "https://google.com",
    color: "black",
    direction: "right"
  },
  {
    name: "img-6",
    image: hsimg6,
    title: "PowerMax 6000",
    subtitle: "Explore, Create, Inspire. Your Space Here",
    description: "8200mAh Mega Battery | 10.51 - inch Large Display: Android 14",
    link : "https://google.com",
    color: "black",
    direction: "left"
  },
];

// homeProductsItems
export const homeProducts = [
  {
    category: "Pad Series",
    items: [
      {
        image: hpimg5,
        title: "ELITE 1",
        description: "Show it! Play it!",
        link: "https://google.com",
        layout: 1,
      },
      {
        image: hpimg4,
        title: "PAD 18",
        description: "All the Best, All in One.",
        link: "https://google.com",
        layout: 1,
      },
    ],
  },
  {
    category: "Smartphone",
    items: [
      {
        image: hpimg1,
        title: "TIGER 10",
        description: "Day or Night, You Shine So Bright.",
        link: "https://google.com",
        layout: 1,
      },
      {
        image: hpimg2,
        title: "TIGER 10",
        description: "Day or Night, You Shine So Bright.",
        link: "https://google.com",
        layout: 2,
      },
      {
        image: hpimg3,
        title: "MODERN 8",
        description: "Go Beyond Power, Make Every Photo Epic",
        link: "https://google.com",
        layout: 2,
      },

    ],
  },
  {
    category: "Rugged Phones",
    items: [
      {
        image: hpimg6,
        title: "PILOT 2",
        description: "Dual Screens, Dual LED Flashlights, Double the Magic",
        link: "https://google.com",
        layout: 3,
      }
    ],
  },
  {
    category: "Portable Power Station",
    items: [
      {
        image: hpimg7,
        title: "PowerMax 6000",
        description: "Power All Your High-Powered Home Devices With Ease",
        link: "https://google.com",
        layout: 1,
      },
      {
        image: hpimg8,
        title: "PowerMax 3600",
        description: "",
        link: "https://google.com",
        layout: 1,
      }
    ],
  },
];

// homeBottomSliderImg
export const homeBottomImgSlider = [
  {
    name: "img-1",
    image: hbsimg1,
  },
  {
    name: "img-2",
    image: hbsimg2,
  },
  {
    name: "img-3",
    image: hbsimg3,
  },
  {
    name: "img-4",
    image: hbsimg4,
  },
]