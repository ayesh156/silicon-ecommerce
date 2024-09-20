const HomeProducts = ({category, items}) => (
    <div className="flex justify-center mt-28">
        <div className="max-w-7xl p-4 w-full">
            {/* Header with category title and link to more products */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-4xl font-medium">{category}</h2>
                <a
                    href="https://google.com"
                    className="text-xl font-normal hover:underline transform transition-transform duration-500 hover:-translate-x-3"
                >
                    More >>
                </a>
            </div>
            {/* Conditional rendering based on item layout */}
            {items.some(item => item.layout === 3) ? (
                // Layout 3: Grid with three columns
                <div className="grid lg:grid-cols-3 gap-5">
                    {items.map((item, index) => (
                        <a key={index} href={item.link} className="relative w-full">
                            <img src={item.image} alt={item.title} className="w-full rounded-3xl h-auto object-cover"/>
                            <div className="absolute top-8 left-8">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-sm pt-2">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            ) : items.some(item => item.layout === 2) ? (
                // Layout 2: First item in one column, next items in a grid
                <div className="grid lg:grid-cols-2 gap-5">
                    {items.slice(0, 1).map((item, index) => (
                        <a key={index} href={item.link} className="relative w-full">
                            <img src={item.image} alt={item.title}
                                 className="w-full rounded-3xl h-auto object-cover"/>
                            <div className="absolute top-8 left-8">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-sm pt-2">{item.description}</p>
                            </div>
                        </a>
                    ))}
                    {/* Grid for the next two items */}
                    <div className="grid grid-rows-2 gap-4">
                        {items.slice(1, 3).map((item, index) => (
                            <a key={index} href={item.link} className="relative w-full">
                                <img src={item.image} alt={item.title}
                                     className="w-full rounded-3xl h-auto object-cover"/>
                                <div className="absolute top-8 left-8">
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="text-sm pt-2">{item.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            ) : (
                // Default Layout: Grid with two columns for all items
                <div className="grid lg:grid-cols-2 gap-5">
                    {items.map((item, index) => (
                        <a key={index} href={item.link} className="relative w-full">
                            <img src={item.image} alt={item.title}
                                 className="w-full rounded-3xl h-auto object-cover"/>
                            <div className="absolute top-8 left-8">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-sm pt-2">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    </div>

);

export default HomeProducts;