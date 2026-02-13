import { MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon } from "@heroicons/react/24/outline";
import AnimatedWave from "~/components/AnimatedWave";
import { useState } from "react";

export default function SouthernVietnam() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const routeImg = "/images/travel/vietnam/VietnamRoute.png";

    return (
        <div className="min-h-screen bg-white">
            {/* Title Card */}
            <div className="relative h-[700px] w-full overflow-hidden">
                <img
                    src="/images/travel/vietnam/hochiminh.JPG"
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
                        <h3 className="font-semibold text-gray-900">City of Arrival</h3>
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
                    <div className="mb-6 leading-relaxed">
                        We had only one week to spend in this part of South East Asia.
                        As such, we spent our time in the main city of Southern Vietnam, Ho Chi Minh City, and the impressive Mekong Delta to its South.
                        In the Mekong Delta, we based ourselves in Can Tho and My Tho.
                        <br />

                        <figure>
                            <img
                                src={routeImg}
                                alt="Route we travelled"
                                className="w-full rounded-lg shadow-lg my-6 cursor-pointer"
                                onClick={() => setIsLightboxOpen(true)}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Route we travelled — Ho Chi Minh City to the Mekong Delta</figcaption>
                        </figure>
                    </div>

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
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" role="dialog" aria-modal="true">
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img src={routeImg} alt="Route enlarged" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
                </div>
            )}
        </div>
    );
}