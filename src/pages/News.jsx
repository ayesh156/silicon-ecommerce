import {useEffect, useState} from "react";
import NewsComponent from "../components/NewsComponent.jsx";
import {newsData} from "../constants/index.jsx"; // Import image data

const News = () => {

    // Retrieve the saved page number from localStorage or default to 1 if not found
    const savedPage = parseInt(localStorage.getItem('currentPage')) || 1;

    // State to manage the current page number
    const [currentPage, setCurrentPage] = useState(savedPage);

    // Set the number of news items to display per page
    const itemsPerPage = 10;

    // Calculate the total number of pages based on the number of items
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    // Function to get the items for the current page
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return newsData.slice(startIndex, endIndex);
    };

    // Function to handle changing pages
    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            localStorage.setItem('currentPage', pageNumber); // Save current page to localStorage
        }
    };

    // UseEffect to initialize current page state from localStorage on component mount
    useEffect(() => {
        const savedPage = parseInt(localStorage.getItem('currentPage')) || 1;
        setCurrentPage(savedPage);
    }, []);

    return (
        <div className="flex justify-center bg-pageWhite pb-11 md:pb-32">
            <div className="max-w-[74rem] w-full md:pt-[5.5rem]">

                {/* Render the NewsComponent with the items for the current page */}
                {getCurrentPageItems().map((item, index) => (
                    <NewsComponent key={index} newsItems={[item]} />
                ))}

                {/* Pagination controls */}
                <div className="flex justify-center mt-5 space-x-2">
                    {/* First page button */}
                    <button
                        onClick={() => changePage(1)}
                        disabled={currentPage === 1} // Disable if already on the first page
                        className="px-5 py-1 border border-black rounded-md bg-white disabled:opacity-50"
                    >
                        First
                    </button>

                    {/* Previous page button */}
                    <button
                        onClick={() => changePage(currentPage - 1)}
                        hidden={currentPage === 1} // Hide if on the first page
                        className="px-5 py-1 border border-black rounded-md bg-white"
                    >
                        {'<'}
                    </button>

                    {/* Render page numbers dynamically */}
                    {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => changePage(page)} // Change to the selected page
                            className={`px-4 py-1 border border-black rounded-md ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white'}`}
                        >
                        {page}
                        </button>
                    ))}

                    {/* Next page button */}
                    <button
                        onClick={() => changePage(currentPage + 1)}
                        hidden={currentPage === totalPages} // Hide if on the last page
                        className="px-5 py-1 border border-black rounded-md bg-white"
                    >
                        {'>'}
                    </button>

                    {/* Last page button */}
                    <button
                        onClick={() => changePage(totalPages)}
                        disabled={currentPage === totalPages} // Disable if already on the last page
                        className="px-5 py-1 border border-black rounded-md bg-white disabled:opacity-50"
                    >
                        Last
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;
