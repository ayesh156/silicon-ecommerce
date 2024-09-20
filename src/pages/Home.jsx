import HomeProducts from "../components/HomeProducts.jsx";
import {homeProducts} from "../constants/index.jsx";
import ImageTopSlider from "../components/ImageTopSlider.jsx";
import ImageBottomSlider from "../components/ImageBottomSlider.jsx";

const Home = () => {

    return (
        <>
            <div
                className="w-full">
                <ImageTopSlider/> {/* Render the top image slider */}
            </div>
            {homeProducts.map((product, index) => (
                <HomeProducts key={index} category={product.category} items={product.items} /> /* Render HomeProducts for each product category */
            ))}
            <div
                className="w-full mt-10 md:mt-36 mb-2">
                <ImageBottomSlider/> {/* Render the bottom image slider */}
            </div>
        </>
    )
}

export default Home;
