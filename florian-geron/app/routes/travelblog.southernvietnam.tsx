import { MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon } from "@heroicons/react/24/outline";
import AnimatedWave from "~/components/AnimatedWave";
import { useState } from "react";

export default function SouthernVietnam() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const routeImg = "/images/travel/vietnam/VietnamRoute.png";

    function openLightbox(src: string) {
        setLightboxSrc(src);
    }

    function handleTocClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // update the hash without adding history entry
            history.replaceState(null, '', `#${id}`);
        }
    }

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

            
            <div className="max-w-7xl mx-auto py-12 px-4">

                {/* Key Info Icons (constrained) */}
                <div className="max-w-4xl mx-auto">
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

                </div>

                {/* Blog Content with right-side TOC */}
                <div className="grid md:grid-cols-4 gap-8">
                    <main className="md:col-span-3 text-gray-800">
                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
                        <div className="mb-6 leading-relaxed">
                            We had only one week to spend in this part of South East Asia.
                            As such, we spent our time in the main city of Southern Vietnam, Ho Chi Minh City, and the impressive Mekong Delta to its South.
                            In the Mekong Delta, we based ourselves in Can Tho and My Tho.
                            <br />

                            <figure>
                                <img
                                    src={routeImg}
                                    alt="Route we travelled"
                                    className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox(routeImg)}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Route we travelled — Ho Chi Minh City to the Mekong Delta</figcaption>
                            </figure>
                        </div>

                        <h2 id="ho-chi-minh-city" className="text-4xl font-bold mb-4">Ho Chi Minh City</h2>
                        <h3 id="ho-chi-minh-city-day-1" className="text-2xl font-bold mb-4">Day 1 - Bui Vien Walking Street</h3>
                        <p className="mb-6 leading-relaxed">
                            We arrived in HCMC in the evening and headed out to see some of the city's iconic sights.
                            First, we went for some dinner at the Ben Nghe Street Food market.
                            Then, we walked down Nguyen Hue street, passing the iconic Cafe Apartment building. 
                            We decided to head straight to the famous Bui Vien Walking Street, a bustling area known for its vibrant nightlife, street food, and lively atmosphere.
                            This street was a little over-the-top for our tastes, but it was fun to experience the energy and see the crazy side of the city at night.
                            After experiencing the madness of this street, we went up to a rooftop bar,{' '}
                            <a href="https://maps.app.goo.gl/iSeJ5NxwRs4jnfRV8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            The View Rooftop Bar
                            </a>
                            , to enjoy a drink in a more relaxed setting and admire the city skyline at night. And that's a wrap for the first night in HCMC!

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CafeApartment.jpg"
                                        alt="The Cafe Apartment on Nguyen Hue Street"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CafeApartment.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Cafe Apartment on Nguyen Hue Street</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/BuiVien.jpg"
                                        alt="Bui Vien Walking Street at night"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/BuiVien.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Bui Vien Walking Street at night</figcaption>
                                </figure>
                            </div>


                        </p>

                        <h2 id="mekong-delta" className="text-4xl font-bold mb-4">The Mekong Delta</h2>
                        <p className="mb-6 leading-relaxed">
                            [Add your content about the Mekong Delta here]
                        </p>

                        <h2 id="hotel-reviews" className="text-4xl font-bold mb-4">Hotel Reviews</h2>
                        <p className="mb-6 leading-relaxed">
                            [Hotel reviews for the places we stayed at]
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </p>
                    </main>

                    <aside className="hidden md:block md:col-span-1">
                        <nav aria-label="Table of contents" className="sticky top-8 self-start bg-white/90 dark:bg-gray-900/80 text-right p-4 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-lg font-semibold mb-3">Contents</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <a href="#our-journey" onClick={(e) => handleTocClick(e, 'our-journey')} className="block w-full text-right hover:underline">Our Journey</a>
                                </li>
                                <li>
                                    <a href="#ho-chi-minh-city" onClick={(e) => handleTocClick(e, 'ho-chi-minh-city')} className="block w-full text-right hover:underline">Ho Chi Minh City</a>
                                </li>
                                <li>
                                    <a href="#mekong-delta" onClick={(e) => handleTocClick(e, 'mekong-delta')} className="block w-full text-right hover:underline">The Mekong Delta</a>
                                </li>
                                <li>
                                    <a href="#hotel-reviews" onClick={(e) => handleTocClick(e, 'hotel-reviews')} className="block w-full text-right hover:underline">Hotel Reviews</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
            {lightboxSrc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" role="dialog" aria-modal="true">
                    <button
                        onClick={() => setLightboxSrc(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img src={lightboxSrc} alt="Route enlarged" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
                </div>
            )}
        </div>
    );
}