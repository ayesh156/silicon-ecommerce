import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const App = () => {

  return (
      <>
          <Navbar />
          <div className="mt-16"> {/* Adjust the margin based on your navbar height */}
              <Outlet />
          </div>
      </>
  )
}

export default App;
