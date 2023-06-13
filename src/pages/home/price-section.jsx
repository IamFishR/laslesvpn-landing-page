import { Layout } from "../../layout";
import Card from "../../helper/card";
import check from "../../assets/images/check.svg";
const PriceSection = (props) => {
    return (
        <Layout className="py-12">
            <div className="text-center md:w-2/4 mx-auto">
                <h2 className="text-4xl font-medium mb-8">
                    choose your plan
                </h2>
                <p className="leading-relaxed mb-8">
                    Let's choose the package that is best for you and explore it happily and <br className="md-block d-none" /> cheerfully.
                </p>
            </div>

            <div className="flex flex-wrap justify-between items-center">
                <Card className="w-full md:w-1/3 mb-8 md:mb-0">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <div className="flex justify-center items-center">
                            <div>
                                <h3 className="text-2xl font-medium mb-4">
                                    free plan
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    $0 <span className="text-gray-400">/ mo</span>
                                </p>
                                <ul className="text-sm text-gray-500 mb-6">
                                    <li className="mb-3">
                                        <img src={check} className="inline-block mr-2" alt="check" /> Unlimited Bandwitch
                                    </li>
                                    <li className="mb-3">
                                        <img src={check} className="inline-block mr-2" alt="check" /> Encrypted Connection
                                    </li>
                                    <li className="mb-3">
                                        <img src={check} className="inline-block mr-2" alt="check" /> No Traffic Logs
                                    </li>
                                    <li className="mb-3">
                                        <img src={check} className="inline-block mr-2" alt="check" /> Works on All Devices
                                    </li>
                                </ul>

                                <button className="btn btn-primary btn-block">
                                    select
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Layout>
    );
}

export default PriceSection;