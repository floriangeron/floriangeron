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
import CollapsibleReview from '../components/ui/CollapsibleReview';
import HotelReview from '../components/ui/HotelReview';

export const meta: MetaFunction = () => {
  return [
    { title: "Cinque Terre Travel Blog" },
    { name: "My personal website", content: "My Cinque Terre Travel Blog" },
    { description: "Travel blog about Cinque Terre." },
  ];
};

export default function CinqueTerre() {
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
                    src="/images/travel/CinqueTerre.JPG"
                    alt="Cinque Terre"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Cinque Terre</h1>
                        <p className="text-2xl">Hikes and Dives in the Hot Italian Summer Heat</p>
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
                            <p className="text-gray-600">La Spezia</p>
                        </div>
                        <div className="text-center">
                            <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Language</h3>
                            <p className="text-gray-600">Italian</p>
                        </div>
                        <div className="text-center">
                            <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Currency</h3>
                            <p className="text-gray-600">Euro</p>
                        </div>
                        <div className="text-center">
                            <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                            <p className="text-gray-600">1 week</p>
                        </div>
                        <div className="text-center">
                            <CalendarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Time of Year</h3>
                            <p className="text-gray-600">August 2024</p>
                        </div>
                    </div>
                </div>

                {/* Blog Content with right-side TOC */}
                <div className="grid md:grid-cols-4 gap-8">
                    <main className={`md:col-span-3 text-gray-800 ${fontSizeClass} max-w-[min(100%,65ch)] mx-auto md:max-w-none md:mx-0 px-4`}>

                        {/* Our Journey */}
                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
                        <h3 id="background" className="text-2xl font-bold mb-4">Background</h3>
                        Having friends all over the world is a blessing, but meeting up regularly can be a challenge. We decided to make this summer trip leave the group chat and meet up in person in the summer of 2024. Our first stop was in Italy, where we explored the Ligurian coast together.
                        <br/><br/>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        Our trip focused on the Cinque Terre, which is a collection of five picturesque towns along the Italian Riviera, known for their colorful houses and hiking trails. We were based in La Spezia and also explored the beautiful town of Portofino.
                        <br/><br/>
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        The Cinque Terre are, from North the Sout: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. We skipped Manarola due to time and logistical constraints, but we did visit the other four towns.<br/>
                        We also took the train up North to the Portofino peninsula, where we visited Portofino itself, San Fruttuoso, and Camogli. We skipped Santa Margherita Ligure, which is a larger town on the way to Portofino, but we did not have time to explore it.<br/><br/>

                        {/* La Spezia */}
                        <h2 id="spezia" className="text-4xl font-bold mb-4">La Spezia</h2>
                        As the Cinque Terre are a collection of small towns with limited accommodation and accessibility, we decided to base ourselves in La Spezia, which is a larger town just South of the Cinque Terre towns. La Spezia did not leave a great impression on us, but it was a convenient base for our explorations. We stayed in an AirBnB a little outside of the city center. The town itself struck us as an industrial port town that is a bit run-down at places, but it has a few nice spots along the water and some good restaurants. We did not spend much time in La Spezia itself, as we were eager to explore the Cinque Terre and Portofino.<br/><br/>

                        {/* Cinque Terre */}
                        <h2 id="cinqueterre" className="text-4xl font-bold mb-4">Cinque Terre</h2>

                        {/* Portofino */}
                        <h2 id="portofino" className="text-4xl font-bold mb-4">Portofino</h2>

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
                                    <a href="#spezia" onClick={(e) => handleTocClick(e, 'spezia')} className="block w-full text-left pl-20 font-bold hover:underline">La Spezia</a>
                                </li>
                                <li>
                                    <a href="#cinqueterre" onClick={(e) => handleTocClick(e, 'cinqueterre')} className="block w-full text-left pl-20 font-bold hover:underline">Cinque Terre</a>
                                </li>
                                <li>
                                    <a href="#portofino" onClick={(e) => handleTocClick(e, 'portofino')} className="block w-full text-left pl-20 font-bold hover:underline">Portofino</a>
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