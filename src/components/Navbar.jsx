import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa6"
import logo from '../assets/logo.png';

const Navbar = () => {

    //navItems

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/news", link: "News"},
        {path: "/about-us", link: "About"},
        {path: "/contact-us", link: "Contact"},
    ];
    ;

    return (
        <header>
            <nav className='md:px-5 py-4 px-3 mx-auto flex justify-between items-center'>
                {/*Logo Image*/}
                <img src={logo} alt="Logo"/>

                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({path, link}) => (
                            <li key={navItems.path}>
                                <NavLink to={path}>{link}</NavLink>
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
                    <button className='cursor-pointer'>
                        <FaBars className='w-5 h-5' />
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;
