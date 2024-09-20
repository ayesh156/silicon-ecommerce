import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "react-scroll-up";
import { SlArrowUp } from "react-icons/sl";



const App = () => {

  return (
      <>
          <Navbar /> {/* Render the Navbar component */}
          <div className="mt-16"> {/* Adjust the margin based on your navbar height */}
              <Outlet /> {/* Render child routes here */}
          </div>
          <Footer /> {/* Render the Footer component */}
          <div className="fixed z-[1000]"> {/* Fixed positioning for the ScrollToTop button */}
          <ScrollToTop showUnder={650}>
              <div className="relative bg-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.3)] p-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] transition-shadow duration-300">
                  <SlArrowUp className="text-gray-800 text-2xl"/>
              </div>
          </ScrollToTop>
          </div>
      </>
  )
}

export default App;
