import ImageSlider from "../components/ImageTopSlider.jsx";
import HomeProducts from "../components/HomeProducts.jsx";
import {homeProducts} from "../constants/index.jsx";
import ImageTopSlider from "../components/ImageTopSlider.jsx";
import ImageBottomSlider from "../components/ImageBottomSlider.jsx";

const Home = () => {

    return (
        <>
            <div
                className="w-full">
                <ImageTopSlider/>
            </div>
            {homeProducts.map((product, index) => (
                <HomeProducts key={index} category={product.category} items={product.items}
                              isStacked={product.items.isStacked}/>
            ))}
            <div
                className="w-full mt-36 mb-2">
                <ImageBottomSlider/>
            </div>
        </>
    )
}

export default Home;
