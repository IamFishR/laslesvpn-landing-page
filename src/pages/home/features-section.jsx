import { Layout } from "../../layout";
import feature_image from "../../assets/images/features.png"
import check from "../../assets/images/check.svg"

const FeaturesSection = () => {
    return <Layout>
        <div className="two-col">
            <div>
                <img src={feature_image} alt="feature"/>
            </div>
            <div className="xl:pl-16 md:pl-4 flex items-start justify-center flex-col">
                <h2 className="text-4xl font-medium mb-8">
                    We Provide Many <br className="hidden md:block" />
                    Features You Can Use
                </h2>
                <p className="leading-relaxed mb-8">
                    You can explore the features that we provide with fun and <br className="hidden md:block" /> have their own functions each feature.
                </p>
                
                <div className="w-full">
                    <p className="mb-4">
                        <img src={check} alt="check" className="mr-4 inline-block" />
                        Powerful online protection.
                    </p>
                    <p className="mb-4">
                        <img src={check} alt="check" className="mr-4 inline-block" />
                        Internet without borders.
                    </p>
                    <p className="mb-4">
                        <img src={check} alt="check" className="mr-4 inline-block" />
                        Supercharged VPN
                    </p>
                    <p className="mb-4">
                        <img src={check} alt="check" className="mr-4 inline-block" />
                        No specific time limits.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
};

export default FeaturesSection;