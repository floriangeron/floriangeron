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
                            <p className="text-gray-600">5 days</p>
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
                        <h3 id="travel-information" className="text-2xl font-bold mb-4">Travel information</h3>
                        Here are a couple of tips for visiting this region in Italy:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Logistics: </strong>Getting around the Cinque Terre and the surrounding region can be done via trains, ferries, and buses.<br/>The local train network is very convenient for traveling between the five towns. Be mindful to buy these train tickets in advance, as online purchases are not available within 15 minutes of the train's departure. We had gotten on a train, confident we could buy tickets after boarding, but this proved to be a mistake. We ended up buying the ticket for another time and talked our way out of the situation with the train conductor, which, if you have ever argued with Italians, was a stressful situation.<br/>The ferry is a scenic way to travel between the towns and enjoy some spectacular views of the coastline.
                            </li>
                            <li>
                                <strong>Weather: </strong>The best time to visit is arguably during spring or autumn, when the sun is out but it is not yet too hot. We visited in August, which is the peak of summer, and it was very hot, humid, and crowded. The hikes were challenging in the heat, and I'm pretty sure we sweated out a few liters of water each day. Of course, this made the refreshing swims at the end of our hikes even more enjoyable. Be sure to bring plenty of water and sunscreen.
                            </li>
                            <li>
                                <strong>Hiking: </strong>The Cinque Terre is famous for its hiking trails, which offer stunning views of the coastline and the colorful towns. The most popular trail is the Sentiero Azzurro, which connects all five towns. However, some sections may be closed for maintenance or due to weather conditions, so check the trail status before you go. We also recommend exploring some of the less crowded trails for a more peaceful experience.
                            </li>
                            <li>
                                <strong>Accommodation: </strong>We stayed in La Spezia, which is a larger town just south of the Cinque Terre. This was a convenient base for exploring the region, as it has more accommodation options and is well-connected by train. We did not like our stay here very much though, so we would recommend looking into other options as well.<br/>If you prefer to stay in one of the Cinque Terre towns, be sure to book well in advance, as they can fill up quickly, especially during peak season. You will also need to be aware of the fact that some towns have limited accessibility, so you will probably have to carry your luggage up and down stairs or steep paths, and over cobble stone roads. We heard some American tourists who booked accommodatoins inside one of the towns complain about this, so be aware of the challenges that come with staying in these picturesque towns.
                            </li>
                        </ul>
                        <br/><br/>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        Our trip focused on the Cinque Terre, which is a collection of five picturesque towns along the Italian Riviera, known for their colorful houses and hiking trails. We were based in La Spezia and also explored the beautiful town of Portofino.
                        <br/><br/>
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        The Cinque Terre are, from North the Sout: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. We skipped Manarola due to time and logistical constraints, but we did visit the other four towns.<br/>
                        We also took the train up North to the Portofino peninsula, where we visited Portofino itself, San Fruttuoso, and Camogli. We skipped Santa Margherita Ligure, which is a larger town on the way to Portofino, but we did not have time to explore it.<br/><br/>

                        {/* La Spezia */}
                        <h2 id="spezia" className="text-4xl font-bold mb-4">La Spezia</h2>
                        As the Cinque Terre are a collection of small towns with limited accommodation and accessibility, we decided to base ourselves in La Spezia, which is a larger town just South of the Cinque Terre towns. La Spezia did not leave a great impression on us, but it was a convenient base for our explorations. We stayed in an AirBnB a little outside of the city center. The town itself struck us as an industrial port town that is a bit run-down at places, but it has a few nice spots along the water and some good restaurants. We did not spend much time in La Spezia itself, as we were eager to explore the Cinque Terre and Portofino.
                        <br/><br/>
                        <h3 id="spezia-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Blu Bistrot Porto Mirabello" rating={4} scale="food">
                            We had our first dinner in La Spezia in this restaurant. It is located on the touristy part of the harbor. We enjoyed our evening out in this neighbourhood and the food in this restaurant was good. I recommend this restaurant for a nice dinner in La Spezia, it is a good place to start your trip in the region.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/iMp4gwLcJEJU3kFr6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Ciao Baby" rating={4} scale="food">
                            We had lunch here while waiting for our train that would take us from La Spezia to Milan. This turned out to be a hidden gem, as the food was excellent, the service was friendly, and the place had a cool laid-back vibe. It was a nice place to have lunch and recharge before our train ride.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/FmkrBGYCdfiEAjVY6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        {/* Cinque Terre */}
                        <h2 id="cinqueterre" className="text-4xl font-bold mb-4">Cinque Terre</h2>
                        We dedicated two days to exploring the Cinque Terre. Because of the summer heat, we did not do any of the longer hikes. We did two of the shorter hikes between two adjacent towns, and we also took the train and ferry to explore the other towns.<br/><br/>

                        <h3 id="cinqueterre-day-1" className="text-2xl font-bold mb-4">Day 1 - Corniglia, Vernazza, Riomaggiore</h3>
                        We started our first day by taking the train to Corniglia. Upon exiting the train station, the day started with a steep climb up to the town, which is perched on a cliff overlooking the sea. The views were breathtaking (though perhaps the climb up the stairs was every more breathtaking) and we enjoyed walking along the few narrow streets of the small town. We had lunch here and then hiked to Vernazza.<br/><br/>
                        Our first hike of our trip was the trail from Corniglia to Vernazza. This trail is part of the Sentiero Azzurro, which connects all five towns of the Cinque Terre. The hike was challenging in the summer heat, but we enjoyed the views we got to see during the hike, and the hike was all worth it when we arrived in Vernazza. We spent the late afternoon swimming in the little bay in front of the town.<br/><br/>
                        After our swim, we took the ferry to Riomaggiore, the southernmost town of the Cinque Terre. We explored the town and had dinner here before taking the train back to La Spezia. We enjoyed exploring Riomaggiore as well, which was more manageable as the temperature had cooled down a bit by the time we arrived. We climbed up the hill to the Castello di Riomaggiore, which offered was a nice way to end our first day in the Cinque Terre.<br/><br/>

                        <h3 id="cinqueterre-day-2" className="text-2xl font-bold mb-4">Day 2 - Vernazza to Monterosso al Mare</h3>
                        We started our second day by taking the train to Vernazza, the northenmost town we had reached the day before. We had some lunch here and then hiked to Monterosso al Mare, the northernmost town of the Cinque Terre. The hike was again challenging in the summer heat, and once again we were rewarded with a refreshing swim in the sea upon arrival in Monterosso. We spent the rest of the afternoon exploring Monterosso, the largest of the five towns, and had some dinner here as well before taking the train back to La Spezia. Monterosso felt like the most touristy of the five towns, but it also offered most diversity in terms of shops and restaurants.<br/><br/>

                        <h3 id="cinque-terre-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Riomaggiore - Trattoria Via dell'Amore" rating={4.5} scale="food">
                            We had a delightful dinner at Trattoria Via dell'Amore. We had to queue for some time to get a table, but we had some great cocktails, and the food was excellent.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/9xTxfX6e4szzrkXQ6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Corniglia - Bar Pan e Vin" rating={3.5} scale="food">
                            We had lunch at this charming little restaurant in Corniglia. The food was good and the outdoor seating area is very nice, so a good option for a casual meal in Corniglia.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/U8tXjNQnkwYBwygu9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Vernazza - Organic Poke" rating={3} scale="food">
                            We took out some poke bowls at this place in Vernazza. Hidden in the narrow alleys of Vernazza, it is a good option for a healthy takeout meal. The bowls were just okay and the service was rather slow, but still a good option if you want a healthy takeout snack.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/WS52wDj478qWYSwv9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Monterosso - Ristorante Ciak" rating={3.5} scale="food">
                            We had dinner at Ristorante Ciak in Monterosso. The food was good, and the service was friendly. The restaurant has a cozy atmosphere and is a good option for a relaxed dinner in Monterosso. It has a little bit of a touristy feel, but it is still a good option for a casual dinner in Monterosso.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/X739pU92v15nHzed9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Bar il Gabbiano" rating={4} scale="coffee">
                            On our hike from Corniglia to Vernazza, we stopped here for a refreshing drink. It is little more than a counter with two small tables, but it offers a magnificent view on the coastline and Corniglia. We had some overpriced lemonades which were very refreshing in the summer heat.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/wyMRJeiJ7zAazhfFA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        {/* Portofino */}
                        <h2 id="portofino" className="text-4xl font-bold mb-4">Portofino</h2>
                        We dedicated one day to exploring the Portofino peninsula. We took the train to Santa Margherita Ligure and then took a bus to Portofino. We got off the bus one stop early, at Baia Cannone, for a scenic swim in the cure bay. The bay is overlooked by a beautiful villa, one of the iconic sights of Portofino.<br/><br/>
                        After a short swim, we continued to Portofino, where we explored the town and had lunch. We climbed up the stairs to Castella and Chiesa di San Giorgio, where we were treated to a panoramic view of the town and the bay.<br/><br/>
                        We then got on a ferry to San Fruttuoso. This small town is nestled in a cove of a bay and is only accessible by boat or by hiking. San Fruttuoso is home to a beautiful abbey with a small beach in front of it. It is a beautiful little spot to visit.<br/><br/>
                        After our visit to San Fruttuoso, we took the ferry to Camogli, a larger town at the other end of the peninsula. We followed the same procedure as always: Explore the town, have a swim, and have dinner before taking the train back to La Spezia. I feel like I am becoming a broken record, but Camogli was a beautiful and charming town as well.<br/><br/>

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