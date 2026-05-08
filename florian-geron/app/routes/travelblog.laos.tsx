import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

import { MapIcon, MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

import AnimatedWave from "~/components/AnimatedWave";
import { StarScale } from "~/components/ui/StarRating";
import { StarLine } from '../components/ui/StarLine';
import CollapsibleReview from '../components/ui/CollapsibleReview';

export const meta: MetaFunction = () => {
  return [
    { title: "Laos Travel Blog" },
    { name: "My personal website", content: "My Laos Travel Blog" },
    { description: "Travel blog about Laos." },
  ];
};

export default function Laos() {
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

    // Lightbox state 
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    // Lightbox state and handler
    function openLightbox(src: string) {
        setLightboxSrc(src);
    }

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                details.group summary {
                    list-style: none;
                }
                details.group summary::-webkit-details-marker {
                    display: none;
                }
                details.group .chev {
                    transition: transform 250ms ease;
                    transform-origin: center;
                }
                details.group[open] .chev {
                    transform: rotate(180deg);
                }
                details.group .collapsible-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 1000ms ease, opacity 200ms ease;
                    opacity: 0;
                }
                details.group[open] .collapsible-body {
                    max-height: 2000px;
                    opacity: 1;
                }
                /* Ensure images inside the article scale on narrow screens */
                main img {
                    max-width: 100%;
                    height: auto;
                }
                /* Prevent long words or code blocks from causing horizontal overflow */
                main {
                    overflow-wrap: anywhere;
                    word-break: break-word;
                }
                /* Make tables, iframes, svgs and videos responsive */
                main table, main iframe, main svg, main video {
                    max-width: 100%;
                    width: 100%;
                    height: auto;
                    table-layout: auto;
                }
                /* Preserve pre/code formatting but allow wrapping on narrow screens */
                main pre, main code {
                    white-space: pre-wrap;
                    word-break: break-word;
                    max-width: 100%;
                }
            `}</style>

            {/* Title Card */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[700px] w-full overflow-hidden">
                <img
                    src="/images/travel/laos/Laos.jpeg"
                    alt="Laos"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Laos</h1>
                        <p className="text-2xl">Sunsets and Adventure in Laos</p>
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
                            <p className="text-gray-600">Luang Prabang</p>
                        </div>
                        <div className="text-center">
                            <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Language</h3>
                            <p className="text-gray-600">Lao</p>
                        </div>
                        <div className="text-center">
                            <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Currency</h3>
                            <p className="text-gray-600">Lao Kip (LAK)</p>
                        </div>
                        <div className="text-center">
                            <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                            <p className="text-gray-600">1 Week</p>
                        </div>
                        <div className="text-center">
                            <CalendarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Time of Year</h3>
                            <p className="text-gray-600">November 2025</p>
                        </div>
                    </div>
                </div>

                {/* Blog Content with right-side TOC */}
                <div className="grid md:grid-cols-4 gap-8">
                    <main className={`md:col-span-3 text-gray-800 ${fontSizeClass} max-w-[min(100%,65ch)] mx-auto md:max-w-none md:mx-0 px-4`}>

                        {/* Our Journey */}
                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
                        <h3 id="background" className="text-2xl font-bold mb-4">Background</h3>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>

                        We spent a week in Laos, splitting our time between the two most popular destinations in the North: Luang Prabang and Vang Vieng.
                        Luang Prabang is the old royal capital of Laos, known for its rich history and culture, while Vang Vieng is a small backpacker town famous for its outdoor activities.
                        We flew into and out of Luang Prabang, moving between the two cities by the high-speed train.

                        <figure>
                            <img
                                src={"/images/travel/laos/LaosRoute.png"}
                                alt="Route we travelled"
                                className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/laos/LaosRoute.png")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Route we travelled — Luang Prabang to Vang Vieng</figcaption>
                        </figure>


                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        <div className="mb-6 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Vientiane:
                                    <br/>
                                    We decided to skip the capital city of Laos, as we heard it was more of an administrative and commercial center rather than a tourist destination.
                                    We flew directly into and out of Luang Prabang, which is the old capital of the country and the main tourist hub. 
                                    This allowed us to maximize our time in the parts of Laos we were most interested in and avoid spending a transit day in Vientiane.
                                    Vientiane is connected to Vang Vieng and Luang Prabang by the Chinese-built high-speed railway, so it is a convenient addition to your itinerary if you would like to see it.
                                </li>
                                <li>
                                    Nong Khiaw:
                                    <br/>
                                    A little North of Luang Prabang lies Nong Khiaw. 
                                    Nong Khiaw is famous amongst backpackers for its hiking trails on the limestone karst mountains and its laid-back vibe along the Nam Ou river.
                                    Some people rave about it, while others we have talked to pointed out the lack of infrastructure and amenities.
                                    We heard one story of some backpackers who did a multi-day trek, but were not prepared for the freezing cold at night.
                                    We're sure it can be a great experience for the right type of traveler.
                                </li>
                                <li>
                                    Gibbon Experience:
                                    <br/>
                                    The Gibbon Experience is a unique multi-day adventure in Northern Laos.
                                    The premise is that you journey from treehouse to treehouse using a network of ziplines, traversing the jungle canopy to get the chance to spot the endangered gibbons in their natural habitat.
                                    We have heard that it is an unforgettable experience for nature lovers and adventure seekers, and it is the first thing we would have added to our itinerary if we had more time in Laos.
                                </li>
                                <li>
                                    Mekong Slow Boat:
                                    <br/>
                                    Another way to enter Laos is via the Mekong River, starting in Northern Thailand and floating on the Mekong river down to Luang Prabang.
                                    This is a popular route into Laos for backpackers and can be a very scenic and relaxing way to see the countryside.
                                    We heard from other travelers that this is a hit-or-miss experience, depending on the people you end up sharing the boat with.
                                    We met a German girl who was on a boat with a group of exclusively Dutch people, so she felt a little excluded.
                                    We decided to skip it because we had limited time.
                                </li>
                                <li>
                                    Pakse:
                                    <br/>
                                    If you look at Laos on a map, you will see that the Northern part (containing Vientiane and Luang Prabang) is more developed and connected, while the Southern part forms a long and narrow strip along the Mekong river with fewer roads and more remote villages.
                                    The main city in the South is Pakse, which is a common starting point for exploring Southern points on interest like the 4000 Islands and the Bolaven Plateau.
                                </li>
                            </ul>
                        </div>
                        

                        {/* Luang Prabang */}
                        <h2 id="luang-prabang" className="text-4xl font-bold mb-4">Luang Prabang</h2>

                        {/* Vang Vieng */}
                        <h2 id="vang-vieng" className="text-4xl font-bold mb-4">Vang Vieng</h2>

                    </main>

                    {/* Sidebar with TOC and font size selector */}
                    <aside className="hidden md:block md:col-span-1">
                        
                        <nav aria-label="Table of contents" className="sticky top-8 self-start bg-white/90 dark:bg-gray-900/80 text-right p-4 hover:scale-105 transition-transform duration-300 overflow-auto">
                            <h3 className="text-lg font-semibold mb-3">Contents</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <a href="#our-journey" onClick={(e) => handleTocClick(e, 'our-journey')} className="block w-full text-left pl-20 font-bold hover:underline">Our Journey</a>
                                </li>
                                <li>
                                    <a href="#luang-prabang" onClick={(e) => handleTocClick(e, 'luang-prabang')} className="block w-full text-left pl-20 font-bold hover:underline">Luang Prabang</a>
                                </li>
                                <li>
                                    <a href="#vang-vieng" onClick={(e) => handleTocClick(e, 'vang-vieng')} className="block w-full text-left pl-20 font-bold hover:underline">Vang Vieng</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="sticky top-[435px] self-start flex items-center justify-end mb-4 hover:scale-105 transition-transform duration-300">
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

            {lightboxSrc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" role="dialog" aria-modal="true">
                    <button
                        onClick={() => setLightboxSrc(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img src={lightboxSrc} alt="Image enlarged" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
                </div>
            )}

        </div>
    )
}