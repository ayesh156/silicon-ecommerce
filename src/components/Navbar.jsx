import {NavLink} from "react-router-dom";
import {FaBars, FaXmark} from "react-icons/fa6"
import logo from '../assets/logo.png';
import {useState} from "react";
import {navItems} from "../constants/index.jsx"; // Import image data

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);// State to manage mobile menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle mobile menu open/close
    }

    return (
        <header className="fixed top-0 left-0 right-0 border-b-2 md:border-b-0 bg-white z-50">
            <nav className='md:px-5 py-3 px-3 mx-auto flex justify-between max-w-screen-2xl items-center'>
                {/*Logo Image*/}
                <img src={logo} alt="Logo"/>

                {/* Desktop Navigation Menu */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({path, link}) => (
                            <li key={path} className="relative group">
                                <NavLink to={path}>
                                    {link}
                                </NavLink>
                                {/* Line on hover */}
                                <span
                                    className="absolute left-0 bottom-[-16px] w-full h-[3px] bg-[#133285] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </li>
                        ))
                    }
                </ul>

                {/* language selector */}
                <select
                    id="options"
                    className="block bg-white text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="option1">English</option>
                    <option value="option2">Tamil</option>
                    <option value="option3">Sinhala</option>
                </select>

                {/*mobile menu btn, display mobile screen*/}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        <span
                            className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`}>
                            {isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>}
                        </span>
                    </button>
                </div>
            </nav>

            {/*menu items only for mobile*/}
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-3 bg-white ${isMenuOpen ? 'h-screen w-full transition-all ease-out duration-150' : 'hidden'}`}>
                    {
                        navItems.map(({path, link}) => (
                            <li key={navItems.path} className="border-b-2 md:border-b-0 pb-3 px-4">
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar;
