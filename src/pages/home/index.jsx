import BannerSection from "./banner-section";
import StatSection from "./stat-section";
import FeaturesSection from "./features-section";
const Home = (props) => {
    return (
        <div className="home">
            <BannerSection />
            <StatSection />
            <FeaturesSection />
        </div>
    );
}

export default Home;