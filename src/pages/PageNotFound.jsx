import NotFoundImg from "../assets/404.png"; // Import the 404 image
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const PageNotFound = () => {
    const navigate = useNavigate(); // Get the navigate function

    return (
        <div className="flex items-center justify-center md:min-h-screen bg-[#EEEEEE] pt-8 md:pt-36 pb-9 md:pb-40"> {/* Full screen background */}
            <div className="bg-white text-sm rounded-lg shadow-2xl pt-4 pb-8 md:px-28 px-10 text-center max-w-[90rem]"> {/* Card styling */}
                <img src={NotFoundImg} alt="Page Not Found" className="w-full h-auto"/> {/* Display the 404 image */}
                <p>Sorry, the page you are looking for could not be found</p>
                <button
                    onClick={() => navigate('/')} // Navigate to the home page on button click
                    className="mt-4 px-5 py-2 bg-btnBlue text-white rounded"
                >
                    Refresh to Oscal's home page
                </button>
            </div>
        </div>
    )
}

export default PageNotFound;
