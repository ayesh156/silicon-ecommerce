import HomeProducts from "../components/HomeProducts.jsx";
import {homeProducts} from "../constants/index.jsx";
import ImageTopSlider from "../components/ImageTopSlider.jsx";
import ImageBottomSlider from "../components/ImageBottomSlider.jsx";

const Home = () => {

    return (
        <>
            <ImageTopSlider/> {/* Render the top image slider */}
            {homeProducts.map((product, index) => (
                <HomeProducts key={index} category={product.category} items={product.items}/> /* Render HomeProducts for each product category */
            ))}
            <ImageBottomSlider/> {/* Render the bottom image slider */}
        </>
    )
}

export default Home;
