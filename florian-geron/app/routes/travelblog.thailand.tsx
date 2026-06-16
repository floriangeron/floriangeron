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
    { title: "Thailand Travel Blog" },
    { name: "My personal website", content: "My Thailand Travel Blog" },
    { description: "Travel blog about Thailand." },
  ];
};

export default function Thailand() {
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
                    src="/images/travel/Thailand.JPG"
                    alt="Thailand"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Thailand</h1>
                        <p className="text-2xl">Speedrun of Thailand's Mountains and Beaches</p>
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
                            <p className="text-gray-600">Bangkok</p>
                        </div>
                        <div className="text-center">
                            <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Language</h3>
                            <p className="text-gray-600">Thai</p>
                        </div>
                        <div className="text-center">
                            <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Currency</h3>
                            <p className="text-gray-600">Baht (THB)</p>
                        </div>
                        <div className="text-center">
                            <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                            <p className="text-gray-600">2 Weeks</p>
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
                        Every year, Florian goes on vacation with his group of high school friends. As some of us are now approaching 30, we decided to do a more adventurous trip than our usual European city trip.
                        <br/><br/>

                        <h3 id="tourist-intro" className="text-2xl font-bold mb-4">Tourist Information</h3>
                        Thailand is a well-known tourist destination and is rather easy to travel in for Western tourists. The country has well-developed tourist infrastructure and the people are used to tourists, meaning you will probably get by with English, and if not they will try their best to help you.<br/><br/>
                        The best time to visit is during the dry season, from November to April. We went in November and had great weather throughout the trip.<br/><br/>
                        I personally divide the country into three main regions: the north where you will find the mountains, jungles, and temple complexes; the south where you will find beautiful islands and beaches; and the capital Bangkok, a huge city with towering skyscrapers, truly one of the great cities of the world.
                        <br/><br/> 
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        With only two weeks, building our itinerary was a challenge. The question was whether to follow a more completionist approach and try to see as much of the country as possible, or to focus on a few places and take a more relaxed approach. After some calls and discussions, we decided to have a more completionist itinerary, as many people weren't sure they would go back to Thailand anytime soon. <br/><br/>
                        We took a flight from Brussels to Bangkok (via Qatar), and immediately took a domestic flight north to Chiang Mai. In this area, we spent one night in Chiang Mai and three nights in Pai. We then took another domestic flight south to Phuket. We spent three nights in Phuket, and then took a ferry to Koh Phi Phi, where we spent one night. We then took a ferry to Ao Nang, where we spent another night. From there, we took a minivan to Khao Sok, where we spent three nights. Initially, we were planning to stay here two nights and take the night train back to Bangkok, but this train was cancelled last minute due to a natural disaster, so we had to stay in the area another night and take a flight to Bangkok the next day. We spent the last three nights of our trip in Bangkok.<br/><br/>
                        Picture<br/><br/>
                        In hindsight, I would have preferred a more relaxed itinerary, as we spent a lot of time traveling. This is fun to do when traveling with friends, but I do think we missed some of the slow travel experience that would have been typical of relaxed places like Pai and the islands. That being said, many of my friends said they wouldn't have wanted it any other way, as we got to see a lot of the country in a short time. 
                        <br/><br/>
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        - Gulf of Thailand (Koh Samui, Koh Pha Ngan, Koh Tao)<br/>
                        - Ayutthaya<br/>
                        - Sukhothai<br/>
                        - Northern mountain areas (Chiang Rai (temples!), Golden Triangle)<br/>
                        - Other islands (Ko Lipe, Koh Lanta, etc.)<br/><br/>
                        We had to skip these places due to time constraints, but they are all on the list for future trips!

                        {/* Chiang Mai */}
                        <h2 id="chiang-mai" className="text-4xl font-bold mb-4">Chiang Mai</h2>
                        <h3 id="chiang-mai-city" className="text-2xl font-bold mb-4">Chiang Mai</h3>
                        Chiang Mai is the largest city in northern Thailand and somewhat of a gateway to the region's mountains, jungles, and temples. The city itself is charmging to visit too; The old town is surrounded by a moat, which, compared to most European moats, is rectangular rather than circular. The city contains many beautiful temples and the night market is a great place to buy some souvenirs and try some street food. At the time, I did not buy any souvenirs as it was the first stop of our trip and I thought we would see many more nighet markets, but in hindsight I wish I bought some souvenirs as the Chiang Mai night market was one of the larger ones we visited in the country.<br/><br/>
                        We arrived in Chiang Mai at noon and left the next day in the late afternoon, which gave us some time to see the main highlights of the city.<br/><br/>
                        To immediately fight back against the jetlag, we started with an afternoon temple tour:<br/>
                        - Wat Si Soda<br/>
                        - Wat Pha Lat<br/>
                        - Wat Phra That Doi Suthep<br/>

                        In the evening, we went to a small night market near our hotel for some food, before heading into the main night market for the classic tourist experience.<br/><br/>

                        The following day, we visited some more temples:<br/>
                        - Wat Lok Molee<br/>
                        - Wat Rajamontean<br/>
                        - Wat Phra Singh Waramahavihan<br/>
                        - Wat Chiang Man<br/><br/>

                        At around 2PM, we got into a minivan for a four hour ride through the mountains to Pai.<br/><br/>


                        <h3 id="pai" className="text-2xl font-bold mb-4">Pai</h3>
                        <h3 id="chiang-mai-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Chiang Mai Charmm Bar & Restaurant" rating={5} scale="food">
                            For our first lunch in Thailand, we wandered into this restaurant on the edge of the Chiang Mai old town. This restaurant was a slam dunk for our first meal in Thailand, as we got delicious food for trademark low Thai prices. Most of us ordered the Khao Soi, a traditional northern Thai coconut curry dish, and it was fantastic. The staff was very friendly too. The only downside was that the AC was a bit too cold for us, but this is a common issue for Europeans traveling in Thailand.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/2GrxHfXiRFBosWhJ6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Chang Phuak Market" rating={4} scale="food">
                            We visited this local market on our first night in Chiang Mai. We were some of the only tourists there, but we still felt very welcome and comfortable. We all tried different dishes like curries and noodles, and overall we all enjoyed our food here. I personally tried two classic Thai dessert: mango sticky rice and roti (a Thai banana pancake) with condensed milk, and both were delicious. This night market is a recommendation if you'd like to try some true local food in Chiang Mai.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/DDzPycu11hgYfW148" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Restaurant under SN Apartment 201" rating={3.5} scale="food">
                            For our second lunch in Chiang Mai, we tried a local restaurant in the street of our hotel. I cannot find this restaurant on Google Maps, but the restaurant is located next the SN Apartment 201 hotel, so you can find it there if you'd like!<br/>
                            This restaurant provided another local experience, and most of us had some khao soi again, which was good but slightly less impressive than the oone we had in Charmm. The staff was friendly and the prices were very low, but the restaurant itself was a bit dirty and run-down. Endearingly, the restaurant had some official-looking pictures of Thai people on the wall, holding diplomas or awards, which we assume are the family members of the restaurant owners.
                            <br />
                        </CollapsibleReview>


                        {/* Phuket, Koh Phi Phi, Ao Nang */}
                        <h2 id="phuket-ao-nang" className="text-4xl font-bold mb-4">Phuket to Ao Nang</h2>
                        <h3 id="phuket" className="text-2xl font-bold mb-4">Phuket</h3>
                        <h3 id="koh-phi-phi" className="text-2xl font-bold mb-4">Koh Phi Phi</h3>
                        <h3 id="ao-nang" className="text-2xl font-bold mb-4">Ao Nang</h3>
                        <h3 id="islands-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Khao Sok */}
                        <h2 id="khao-sok" className="text-4xl font-bold mb-4">Khao Sok</h2>
                        <h3 id="khao-sok-natural-park" className="text-2xl font-bold mb-4">Khao Sok Natural Park</h3>
                        <h3 id="khao-sok-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Bangkok */}
                        <h2 id="bangkok" className="text-4xl font-bold mb-4">Bangkok</h2>
                        <h3 id="bangkok-city" className="text-2xl font-bold mb-4">Bangkok City</h3>
                        <h3 id="bangkok-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Hotels */}
                        <h2 id="hotel-reviews" className="text-4xl font-bold mb-4">Hotel Reviews</h2>
                        Florian took this trip with seven of his friends, so this hotel review section will be written from the perspective of a group of eight people in their late 20s traveling together. These reviews might therefore not be the most relatable for solo travelers or couples!<br/><br/>

                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h4 id="hotel-1" className="text-1xl font-bold m-0">Chiang Mai: The White Elephant Home</h4>
                                </div>
                                <div className="flex items-center">
                                    <StarScale rating={4} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={6} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Comfort' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={7} max={10} title='Location' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Value for Money' />
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed mt-2">
                                    xxxx.
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/2QL4BqunXzQFhyXRA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                </p>
                            </div>
                        </details>

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
                                    <a href="#chiang-mai" onClick={(e) => handleTocClick(e, 'chiang-mai')} className="block w-full text-left pl-20 font-bold hover:underline">Chiang Mai</a>
                                </li>
                                    <li>
                                        <a href="#chiang-mai-city" onClick={(e) => handleTocClick(e, 'chiang-mai-city')} className="block w-full text-right hover:underline">Chiang Mai City</a>
                                    </li>
                                    <li>
                                        <a href="#pai" onClick={(e) => handleTocClick(e, 'pai')} className="block w-full text-right hover:underline">Pai</a>
                                    </li>
                                    <li>
                                        <a href="#chiang-mai-food-drinks" onClick={(e) => handleTocClick(e, 'chiang-mai-food-drinks')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                    </li>
                                <li>
                                    <a href="#phuket-ao-nang" onClick={(e) => handleTocClick(e, 'phuket-ao-nang')} className="block w-full text-left pl-20 font-bold hover:underline">Phuket to Ao Nang</a>
                                </li>
                                    <li>
                                        <a href="#phuket" onClick={(e) => handleTocClick(e, 'phuket')} className="block w-full text-right hover:underline">Phuket</a>
                                    </li>
                                    <li>
                                        <a href="#koh-phi-phi" onClick={(e) => handleTocClick(e, 'koh-phi-phi')} className="block w-full text-right hover:underline">Koh Phi Phi</a>
                                    </li>
                                    <li>
                                        <a href="#ao-nang" onClick={(e) => handleTocClick(e, 'ao-nang')} className="block w-full text-right hover:underline">Ao Nang</a>
                                    </li>
                                    <li>
                                        <a href="#islands-food-drinks" onClick={(e) => handleTocClick(e, 'islands-food-drinks')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                    </li>
                                <li>
                                    <a href="#khao-sok" onClick={(e) => handleTocClick(e, 'khao-sok')} className="block w-full text-left pl-20 font-bold hover:underline">Khao Sok</a>
                                </li>
                                    <li>
                                        <a href="#khao-sok-natural-park" onClick={(e) => handleTocClick(e, 'khao-sok-natural-park')} className="block w-full text-right hover:underline">Khao Sok Natural Park</a>
                                    </li>
                                    <li>
                                        <a href="#khao-sok-food-drinks" onClick={(e) => handleTocClick(e, 'khao-sok-food-drinks')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                    </li>
                                <li>
                                    <a href="#bangkok" onClick={(e) => handleTocClick(e, 'bangkok')} className="block w-full text-left pl-20 font-bold hover:underline">Bangkok</a>
                                </li>
                                    <li>
                                        <a href="#bangkok-city" onClick={(e) => handleTocClick(e, 'bangkok-city')} className="block w-full text-right hover:underline">Bangkok City</a>
                                    </li>
                                    <li>
                                        <a href="#bangkok-food-drinks" onClick={(e) => handleTocClick(e, 'bangkok-food-drinks')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                    </li>
                                <li>
                                    <a href="#hotel-reviews" onClick={(e) => handleTocClick(e, 'hotel-reviews')} className="block w-full text-left pl-20 font-bold hover:underline">Hotel Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="sticky top-[575px] self-start flex items-center justify-end mb-4 hover:scale-105 transition-transform duration-300">
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