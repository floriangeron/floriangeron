import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

import { MapIcon, MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";

import AnimatedWave from "~/components/AnimatedWave";

export const meta: MetaFunction = () => {
  return [
    { title: "Cambodia Travel Blog" },
    { name: "My personal website", content: "My Cambodia Travel Blog" },
    { description: "Travel blog about Cambodia." },
  ];
};

export default function Angkor() {
    // configurable font size class for paragraph content (Tailwind)
    const [fontSizeClass, setFontSizeClass] = useState<string>(() => {
        try {
            return localStorage.getItem('travelblog-font-size') || 'text-lg';
        } catch (e) {
            return 'text-xl';
        }
    });
    useEffect(() => {
        try {
            localStorage.setItem('travelblog-font-size', fontSizeClass);
        } catch (e) {
            // ignore
        }
    }, [fontSizeClass]);

    // Smooth scroll to relevant section when clicking TOC links, and update URL hash without adding history entry
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
            <div className="relative h-[350px] sm:h-[450px] md:h-[700px] w-full overflow-hidden">
                <img
                    src="/images/travel/Angkor.jpeg"
                    alt="Angkor Wat"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Cambodia</h1>
                        <p className="text-2xl">Exploring Angkor Wat and the Koh Rong Islands</p>
                    </div>
                </div>
                
                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-[120%]">
                    <AnimatedWave />
                </div>

            </div>

            {/* Page-only Map button (left of the global Home button) */}
            <Link
                to="/travelblog"
                title="Back to travel blogs overview"
                className="fixed top-4 right-16 bg-gray-300 text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-400 transition duration-300 z-20 flex items-center justify-center"
                aria-label="Travel Blog"
            >
                <MapIcon className="w-5 h-5" />
            </Link>

            <div className="max-w-7xl mx-auto py-12 px-4">

                {/* Key Info Icons (constrained) */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                        <div className="text-center">
                            <MapPinIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">City of Arrival</h3>
                            <p className="text-gray-600">Siem Reap</p>
                        </div>
                        <div className="text-center">
                            <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Language</h3>
                            <p className="text-gray-600">Khmer</p>
                        </div>
                        <div className="text-center">
                            <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Currency</h3>
                            <p className="text-gray-600">Cambodian Riel (KHR)</p>
                        </div>
                        <div className="text-center">
                            <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                            <p className="text-gray-600">2 Weeks</p>
                        </div>
                        <div className="text-center">
                            <CalendarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Time of Year</h3>
                            <p className="text-gray-600">December 2025</p>
                        </div>
                    </div>

                </div>

                {/* Blog Content with right-side TOC */}
                <div className="grid md:grid-cols-4 gap-8">
                    <main className={`md:col-span-3 text-gray-800 ${fontSizeClass} max-w-[min(100%,65ch)] mx-auto md:max-w-none md:mx-0 px-4`}>

                        {/* Our Journey */}
                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        <div className="mb-6 leading-relaxed">
                            We had allocated 11 days for our trip to Cambodia, which we extended to two full weeks upon arriving at our hotel on Koh Rong Sanloem.
                            If you have the time, we can definitely recommend spending two weeks in Cambodia, as there are many things to see and do, and even with two weeks we left a lot of the country unexplored.
                            We flew into Siem Reap, the gateway to the Angkor Wat temples, where we spent four nights.
                            We then flew to Sihanoukville and took a ferry to the Koh Rong islands, where we spent the remaining 10 nights of our trip.
                            We spent 5 nights on Koh Rong, the larger island with more of a backpacker vibe, and another 5 nights on Koh Rong Sanloem, the smaller and more peaceful of the two islands.
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
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        <div className="mb-6 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Phu Quoc Island:
                                    <br/>
                                    From our research, this island looked overly commercialized and touristy. We decided to spend our time on the Cambodian Koh Rong islands instead.
                                </li>
                                <li>
                                    Da Lat:
                                    <br/>
                                    If we had had more time, we would've liked to check out Da Lat, mainly to visit the nature around the city.
                                </li>
                                <li>
                                    Mui Ne:
                                    <br/>
                                    Another place we would've like to check out if had had more time, mainly to see the sand dunes and to surf.
                                </li>
                                <li>
                                    Chau Doc:
                                    <br/>
                                    The mangroves around Chau Doc peaked our interest, but we decided to skip it in favor of My Tho.
                                </li>
                            </ul>
                        </div>

                    </main>

                    <aside className="hidden md:block md:col-span-1">
                        
                        <nav aria-label="Table of contents" className="sticky top-8 self-start bg-white/90 dark:bg-gray-900/80 text-right p-4 hover:scale-105 transition-transform duration-300 overflow-auto">
                            <h3 className="text-lg font-semibold mb-3">Contents</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <a href="#our-journey" onClick={(e) => handleTocClick(e, 'our-journey')} className="block w-full text-right hover:underline">Our Journey</a>
                                </li>
                                <li>
                                    <a href="#angkor-wat" onClick={(e) => handleTocClick(e, 'angkor-wat')} className="block w-full text-right hover:underline">Angkor Wat</a>
                                </li>
                                <li>
                                    <a href="#koh-rong" onClick={(e) => handleTocClick(e, 'koh-rong')} className="block w-full text-right hover:underline">Koh Rong</a>
                                </li>
                                <li>
                                    <a href="#hotel-reviews" onClick={(e) => handleTocClick(e, 'hotel-reviews')} className="block w-full text-right hover:underline">Hotel Reviews</a>
                                </li>
                                <li>
                                    <a href="#food-drink-reviews" onClick={(e) => handleTocClick(e, 'food-drink-reviews')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="sticky top-64 self-start flex items-center justify-end mb-4 hover:scale-105 transition-transform duration-300">
                            <label htmlFor="font-size-select" className="mr-2 text-sm text-gray-600">Text size</label>
                            <select
                                id="font-size-select"
                                value={fontSizeClass}
                                onChange={(e) => setFontSizeClass(e.target.value)}
                                className="border rounded px-2 py-1 text-sm"
                            >
                                <option value="text-base">Normal</option>
                                <option value="text-lg">Large</option>
                                <option value="text-xl">Larger</option>
                                <option value="text-2xl">Huge</option>
                            </select>
                        </div>

                    </aside>

                </div>
            
            </div>

        </div>
    )
}