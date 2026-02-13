import { MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon } from "@heroicons/react/24/outline";
import AnimatedWave from "~/components/AnimatedWave";

export default function SouthernVietnam() {
    return (
        <div className="min-h-screen bg-white">
            {/* Title Card */}
            <div className="relative h-[700px] w-full overflow-hidden">
                <img
                    src="/images/travel/hochiminh.JPG"
                    alt="Southern Vietnam"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Southern Vietnam</h1>
                        <p className="text-2xl">Exploring Ho Chi Minh City and the Mekong Delta</p>
                    </div>
                </div>
                
                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-[120%]">
                    <AnimatedWave />
                </div>

            </div>

            {/* Key Info Icons */}
            <div className="max-w-4xl mx-auto py-12 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <MapPinIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">Capital City</h3>
                        <p className="text-gray-600">Ho Chi Minh City</p>
                    </div>
                    <div className="text-center">
                        <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">Language</h3>
                        <p className="text-gray-600">Vietnamese</p>
                    </div>
                    <div className="text-center">
                        <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">Currency</h3>
                        <p className="text-gray-600">Vietnamese Dong (VND)</p>
                    </div>
                    <div className="text-center">
                        <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                        <p className="text-gray-600">1 Week</p>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="max-w-none text-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
                    <p className="mb-6 leading-relaxed">
                        Join me on my exploration of Ho Chi Minh City and some of its surrounding natural beauty.
                        With only one week to spend here, we explored the city itself and the impressive Mekong Delta to its South.
                        <br />
                        [Imagine of the path we travelled]
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Ho Chi Minh City</h2>
                    <p className="mb-6 leading-relaxed">
                        [Add your content about Ho Chi Minh City here]
                    </p>

                    <h2 className="text-2xl font-bold mb-4">The Mekong Delta</h2>
                    <p className="mb-6 leading-relaxed">
                        [Add your content about the Mekong Delta here]
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Hotel Reviews</h2>
                    <p className="mb-6 leading-relaxed">
                        [Hotel reviews for the places we stayed at]
                    </p>
                </div>
            </div>
        </div>
    );
}