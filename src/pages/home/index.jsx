import BannerSection from "./banner-section";
import StatSection from "./stat-section";
import FeaturesSection from "./features-section";
import PriceSection from "./price-section";
const Home = (props) => {
    return (
        <div className="home">
            <BannerSection />
            <StatSection />
            <FeaturesSection />
            <PriceSection />
        </div>
    );
}

export default Home;