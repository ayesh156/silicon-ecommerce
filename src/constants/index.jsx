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

import ndimg1 from "../assets/news_img/pw6000.webp";
import ndimg2 from "../assets/news_img/oscal-pad-18.jpg";
import ndimg3 from "../assets/news_img/oscal-pad-70.jpg";
import ndimg4 from "../assets/news_img/powermax-3600.jpg";
import ndimg5 from "../assets/news_img/oscal-PowerMax-700.webp";
import ndimg6 from "../assets/news_img/OSCAL-C60.webp";
import ndimg7 from "../assets/news_img/oscal-pad60.webp";
import ndimg8 from "../assets/news_img/700w-power-station.jpg";
import ndimg9 from "../assets/news_img/power-outage.webp";
import ndimg10 from "../assets/news_img/oscal-pad13.jpg";
import ndimg11 from "../assets/news_img/Power-station-vs-power.jpg";
import ndimg12 from "../assets/news_img/oscal-powermax700.jpg";
import ndimg13 from "../assets/news_img/700w-power-station.jpg";
import ndimg14 from "../assets/news_img/700w-power-station2.webp";
import ndimg15 from "../assets/news_img/oscal-s60pro-4.jpg";
import ndimg16 from "../assets/news_img/s80-nfc.jpg";
import ndimg17 from "../assets/news_img/oscal-s80.webp";
import ndimg18 from "../assets/news_img/Blackview-BV6600-Pro.jpg";
import ndimg19 from "../assets/news_img/blackview-bv8800-4.jpg";
import ndimg20 from "../assets/news_img/bl8800-series.png";

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

// Sample news data
export const newsData = [
  {
    date: "September 11,2024",
    link: "http://google.com",
    image: ndimg1,
    title: "OSCAL PowerMax 6000: Power for Home, Outdoors, and Beyond",
    description: "Perfect for home emergencies or outdoor adventures.",
  },
  {
    date: "December 21,2023",
    link: "http://google.com",
    image: ndimg2,
    title: "Oscal Pad 18: The most recommended tablet for students",
    description: "See how Pad 18 being the best tablet for students.",
  },
  {
    date: "July 25,2023",
    link: "http://google.com",
    image: ndimg3,
    title: "Pad 70: Efficient for on-the-go use",
    description: "Pad 70: Efficient for on-the-go use",
  },
  {
    date: "July 14,2023",
    link: "http://google.com",
    image: ndimg4,
    title: "OSCAL PowerMax 3600 Power Station Coming Soon",
    description: "OSCAL PowerMax 3600 Power Station Coming Soon",
  },
  {
    date: "May 11,2023",
    link: "http://google.com",
    image: ndimg5,
    title: "PowerMax 700: The Most Reliable Power Station for Outdoor Rescue",
    description: "The Most Reliable Power Station for Outdoor Rescue",
  },
  {
    date: "May 5,2023",
    link: "http://google.com",
    image: ndimg6,
    title: "OSCAL C60 On Sale: Endless Pursuit of Simplicity",
    description: "C60 On Sale",
  },
  {
    date: "May 5,2023",
    link: "http://google.com",
    image: ndimg7,
    title: "OSCAL Pad 60 Coming Soon with Powerful Performance and Affordable Price",
    description: "Pad 60 Coming Soon",
  },
  {
    date: "April 28,2023",
    link: "http://google.com",
    image: ndimg8,
    title: "The Best Budget 700W Portable Power Station in 2023",
    description: "Portable and powerful.",
  },
  {
    date: "April 18,2023",
    link: "http://google.com",
    image: ndimg9,
    title: "Why power station is very important for house emergency?",
    description: "Power station is very important for house emergency.",
  },
  {
    date: "April 11,2023",
    link: "http://google.com",
    image: ndimg10,
    title: "OSCAL Pad 13: Tablet Portability, Laptop Productivity",
    description: "OSCAL Pad 13 hit the market.",
  },
  {
    date: "April 11,2023",
    link: "http://google.com",
    image: ndimg11,
    title: "Power bank vs portable power station: What's the differences?",
    description: "Power bank vs power station",
  },
  {
    date: "April 8,2023",
    link: "http://google.com",
    image: ndimg12,
    title: "700W and 1000W power station: Which one should I choose?",
    description: "700W and 1000W power station choosing guide.",
  },
  {
    date: "March 30,2023",
    link: "http://google.com",
    image: ndimg13,
    title: "How much do you know about portable power stations classification?",
    description: "Portable power stations classification",
  },
  {
    date: "March 23,2023",
    link: "http://google.com",
    image: ndimg14,
    title: "300W and 700W power station, which one should I choose?",
    description: "Portable power station buying guide.",
  },
  {
    date: "March 15,2023",
    link: "http://google.com",
    image: ndimg15,
    title: "How does IR night vision camera work and why we can see things through darkness?",
    description: "Guides about IR night vision camera.",
  },
  {
    date: "March 10,2023",
    link: "http://google.com",
    image: ndimg16,
    title: "What is NFC and How to use NFC?",
    description: "Guides about NFC",
  },
  {
    date: "February 28,2023",
    link: "http://google.com",
    image: ndimg17,
    title: "About the practicality of S80 smartphone for outdoors",
    description: "The practicality of S80 for outdoors",
  },
  {
    date: "February 23,2023",
    link: "http://google.com",
    image: ndimg18,
    title: "[UK Picks] The 2023 best 5G thermal phone for British people",
    description: "Best 5G thermal phone for British people",
  },
  {
    date: "February 21,2023",
    link: "http://google.com",
    image: ndimg19,
    title: "The best 4G smartphone with IR camera you missed in 2023",
    description: "The best IR night camera smartphone under 300 USD",
  },
  {
    date: "February 16,2023",
    link: "http://google.com",
    image: ndimg20,
    title: "The 2 best thermal imaging smartphones you missed in 2023",
    description: "Regrettably, by far, it’s kind of unlikely that Apple will launch the thermal camera iPhone. But ...",
  }
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