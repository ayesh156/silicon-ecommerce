const NewsComponent = ({ newsItems }) => {
    return (
        <div>
            {/* Loop through the newsItems array */}
            {newsItems.map((item, index) => (
                <div className="md:mb-[9.5rem] mb-14" key={index}>
                    {/* Display formatted date in heading */}
                    <h2 className="text-center text-4xl mb-[1.9rem] md:mb-[4.7rem] font-medium">
                        {item.date.split(' ')[0]} {item.date.split(',')[1]}
                    </h2>

                    {/* Link that wraps around the image and text section */}
                    <a href={item.link}
                       className="flex flex-col md:flex-row justify-between items-center relative mb-5 mx-2 md:mx-0">
                        {/* Image section */}
                        <img src={item.image} className="md:h-[350px] w-full md:w-[30rem] object-cover" alt="Image"/>

                        {/* Container for the news details */}
                        <div className="relative md:absolute md:right-0 top-auto w-full md:w-[731px] h-auto bg-white py-5 px-[18px] md:px-10 flex items-center justify-center rounded-sm md:rounded-lg transition-shadow duration-500 hover:shadow-lg hover:shadow-black/40">
                            <div className="flex flex-col w-full justify-center">

                                {/* Date and category (News) */}
                                <div className="flex items-center justify-between w-full mb-3">
                                    <span className="text-md text-textGray">{item.date}</span>
                                    <span className="text-xl text-textBlue">News</span>
                                </div>

                                {/* News title */}
                                <h3 className="text-2xl overflow-hidden whitespace-nowrap text-ellipsis mr-10 mb-3">
                                    {item.title}
                                </h3>

                                {/* News description */}
                                <p className="text-textGray overflow-hidden mb-5 md:mb-7">
                                    {item.description}
                                </p>

                                {/* Read more link */}
                                <span className="underline text-textBlue text-xl">Read More</span>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default NewsComponent;