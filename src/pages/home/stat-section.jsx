import { Layout } from "../../layout";
import UserIcon from '../../assets/images/users.svg';
import LocationIcon from '../../assets/images/location.svg';
import ServerIcon from '../../assets/images/server.svg';

const StatSection = (props) => {
    return <Layout className="my-24">
        <div className="shadow-2xl shadow-gray-200 rounded-md flex justify-between flex-col md:flex-row items-center md:flex-nowrap p-8">
            <div className="flex-1">
                <div className="flex justify-center xl:space-x-10 space-x-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-red-200 flex justify-center items-center">
                        <img src={UserIcon} alt="Users" className="w-5" />
                    </div>
                    <div className="">
                        <div className="text-3xl font-bold">90+</div>
                        <p className="lg:text-lg">Users</p>
                    </div>
                </div>
            </div>
            <div className="grow border-x-2 py-8 border-slate-200">
                <div className="flex justify-center xl:space-x-10 space-x-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-red-200 flex justify-center items-center">
                        <img src={LocationIcon} alt="Users" className="w-5" />
                    </div>
                    <div className="">
                        <div className="text-3xl font-bold">30+</div>
                        <p className="lg:text-lg">Locations</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-center xl:space-x-10 space-x-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-red-200 flex justify-center items-center">
                        <img src={ServerIcon} alt="Users" className="w-5" />
                    </div>
                    <div className="">
                        <div className="text-3xl font-bold">50+</div>
                        <p className="lg:text-lg">Servers</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
};

export default StatSection;