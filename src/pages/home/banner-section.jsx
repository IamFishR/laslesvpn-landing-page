import banner_image from "../../assets/images/banner_image.png";
import { Layout } from "../../layout";

const BannerSection = (props) => {
    return (
        <Layout className="py-12">
            <div className="two-col">
                <div className="flex items-start justify-center flex-col">
                    <h1 className="text-heading font-medium ">
                        Want anything to be <br className="hidden md:block" />
                        easy with <span className="font-bold">LaslesVPN.</span>
                    </h1>
                    <p className="leading-relaxed my-8">
                        Provide a network for all your needs with ease and fun using <br className="hidden md:block" />
                        <span className="font-medium">LaslesVPN</span> discover interesting features from us.
                    </p>
                    <a href="#" className="btn btn-primary px-20 active rounded-md">Get Started</a>
                </div>
                <div>
                    <img src={banner_image} alt="banner" className="banner-image" />
                </div>
            </div>
        </Layout>
    );
}

export default BannerSection;