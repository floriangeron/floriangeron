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
                    src="/images/travel/laos/Laos.jpg"
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

                        After visiting Thailand with his friends, Florian met up with Francesca in Bangkok airport to continue the rest of the trip together.
                        The next stop on our itinerary was Laos, a landlocked country in Southeast Asia, considered one of the most authentic and least touristy in the region.
                        <br/><br/>
                        Unlike Thailand, which managed to remain independent during the era of European colonization, Laos (like its neighbours Cambodia and Vietnam) was a French colony until 1953. Vietnam foughts its way to independence by means of war, while Laos achieved it through negotiation. To this day, Laos and Vietnam are considered to have a "special relationship" due to their shared history and communist ideology.
                        <br/><br/>
                        Linguistically, Lao is a Tai-Kadai language closely related to Thai, and the two languages are mutually intelligible to a large extent. The two countries are also close in terms of religion, with both countries being predominantly Theravada Buddhist. Laos is considered a lot more laid-back than Thailand; someone told me all go-getters have already left for Thailand, so only the bon vivants and chill people remain in Laos. <br/>
                        Despite their shared linguistic and cultural heritage with Thailand, Laos has politically and economically aligned itself more closely with Vietnam due to their shared history under French colonialism and their shared communist ideology. In modern times, China is driving a wedge between that relationship, as it has invested heavily in infrastructure projects in Laos. Vietnam sees China as a threat and is therefore unhappy with these developments.
                        <br/><br/>
                        Laos implicitly sided with the North Vietnamese during the Vietnam war, allowing them to use its territory for supply routes and bases. These supply routes connecting North Vietnam to the South via Laos and Cambodia are known as the Ho Chi Minh Trail. These routes were heavily bombed by the US, making Laos the most heavily bombed country per capita in history. The legacy of this war is still visible today, with unexploded bombs still being found and causing casualties. These unexploded bombs, also called unexploded ordnances (UXOs), are a major issue in Laos, with an estimated 80 million UXOs still scattered across the country.
                        <br/><br/>
                        Since the war, Vietnam has developed rapidly and become a major tourist destination. Cambodia also attracts many tourists due to the Angkor Wat temple complex and its tropical islands. Laos, on the other hand, has remained relatively under the radar, with a more laid-back vibe and less tourist infrastructure. This makes it a great destination for travelers looking to experience a more authentic and less crowded Southeast Asia.
                        <br/><br/>
                        Laos is a predominantly Buddhist country, with a rich cultural heritage and stunning natural landscapes. The main tourist destinations in Laos are the cities of Luang Prabang and Vang Vieng in the North, and the 4000 Islands and Bolaven Plateau in the South.
                        <br/><br/>

                        <h3 id="tourist-intro" className="text-2xl font-bold mb-4">Tourist Information</h3>
                        As Laos is somewhat less touristy than its neighbours, here are some key pieces of information to keep in mind when planning a trip there.
                        <br/><br/>
                        Laos is a conservative, communist country. It is good to keep this combination of social conservatism and political authoritarianism in mind when visiting. For example, it is recommended to dress modestly and avoid public dislays of affection; We were even told holding hands in public is seen as inappropriate in Laos. However, in all honesty, we did not notice this level of conservatism during our trip.<br/>
                        Laos' government imposes a country-wide curfew from 11pm to 4am. We were told this decision was made to preserve Laos' local charm. It is not strictly enforced in tourist areas, but Vang Vieng's nightlife does come to an abrupt halt at 11pm.<br/>
                        Furthermore, it is illegal for a non-Laotian to have a sexual relationship with a Lao citizen. We did not test whether this law was enforced, but is another good example of the conservative and authoritarian nature of Laos' government. We believe these laws are in place to preserve the traditional Lao culture and prevent it from becoming a destination for nightlife and sexual tourism, like Thailand.
                        <br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/LP1.jpg"
                                    alt="Luang Prabang"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/LP1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/LP2.jpg"
                                    alt="Luang Prabang"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/LP2.jpg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">You will find many Lao and communist flags around Luang Prabang, incl. on hotels and cafes</figcaption>
                        <br/>
                        Laos' infrastructure is still developing. Buses and minivans are the most common way to cover longer distances, and the roads can be in poor condition. More recently, a high-speed train was built by the Chinese, which connects Vientiane, Vang Vieng and Luang Prabang to Southern Chinese cities. We found this high-speed train to be an efficient and comfortable way to travel, with some caviats. The ticketing system is rather confusing; It does not seem possible to book your tickets more than a couple of weeks in advance. Even if you book far in advance via an agency (which is what we did), they might get back to you a couple of days before the trip that they were not able to secure your tickets (which is what happened to us). We were able to get tickets for the next day, so overall no big issue, but it was an unwelcome surprise nonetheless. The train itself is comfortable and efficient, but is mainly used by Chinese tourists. Prepare for a very Chinese experience: The travelers are not afraid to push and shove to get on and off the train (even though there is assigned seating). This got a bit overwhelming for us at times. Even though the ticketing system is unreliable and the train travelers are a bit rowdy, taking the one-hour train ride still beats the ~5 hour bus ride between Luang Prabang and Vang Vieng, for example, so we would still recommend it if you are traveling between those two cities.<br/><br/>
                        When covering shorter distances, motorbikes are a common and convenient way to get around. We recommend driving with caution and wearing a helmet, as the roads can be in poor condition and the traffic can be chaotic. That being said, it is a very fun and flexible way to explore the areas surrounding Vang Vieng.
                        <br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/scooter1.JPG"
                                    alt="Vang Vieng"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/scooter1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/scooter2.JPG"
                                    alt="Vang Vieng"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/scooter2.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Little photo opp of our scooter adventure in Vang Vieng</figcaption>
                        <br/>

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
                        <h3 id="luang-prabang-city" className="text-2xl font-bold mb-4">Luang Prabang</h3>
                        
                        Luang Prabang is the old royal capital of Laos. The entire city is a UNESCO World Heritage Site, due to a combination of its well-preserved architecture, its rich culture, and its stunning natural setting. The city is nestled between the Mekong and Nam Khan rivers and surrounded by lush green mountains. It is a charming and laid-back city, perfect for travellers who would like to take it easy and experience the local culture. The city is small enough to explore on foot, and there are plenty of cafes and restaurants to relax in.
                        <br/><br/>
                        As Luang Prabang was the first stop on our trip, we took it easy and spent a full day just wandering around the city, soaking in the atmosphere, going to some nice restaurants, and visiting the main sights. These main sights include:
                        <div className="mb-6 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    The Royal Palace & National Museum:<br/>
                                    In the middle of the small city lies the old royal palace, which is now accompanied by a museum showcasing Laos' history and culture, with a focus on the royal family. The complex also contains a beautiful temple, Haw Phra Bang. This temple contains the Phra Bang, a Buddha statue which is the namesake of the city, as it is considered the palladium of Laos. Our favorite part of the museum was the stable building, which has been converted into a garage for the royal family's collection of vintage cars.
                                    <div className="grid md:grid-cols-2 gap-2">
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/RoyalPalace.jpg"
                                                alt="Royal Palace"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/RoyalPalace.jpg')}
                                            />
                                            <figcaption className="text-center text-sm text-gray-600">Royal Palace</figcaption>
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/RoyalTemple.jpg"
                                                alt="Royal Temple"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/RoyalTemple.jpg')}
                                            />
                                            <figcaption className="text-center text-sm text-gray-600">Haw Phra Bang (the city's namesake)</figcaption>
                                        </figure>
                                    </div><br/>
                                </li>
                                <li>
                                    Phousi Hill:<br/>
                                    Just across from the royal palace lies Phousi Hill. It's a short hike to reach the hilltop, which provides a stunning view of Luang Prabang and the surrounding area. This place is most busy during sunrise and sunset, at which point it becomes uncomfortably busy with tourists. It's one of the rare places in Laos where overtourism negatively impacts the tourist experience.

                                    <div className="grid md:grid-cols-2 gap-2">
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/Phousi1.jpg"
                                                alt="Phousi Hill"
                                                className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/Phousi1.jpg')}
                                            />
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/Phousi3.JPG"
                                                alt="Phousi Hill"
                                                className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/Phousi3.JPG')}
                                            />
                                        </figure>
                                    </div>
                                    <div className="grid md:grid-cols-1 gap-2">
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/PhousiLong.jpg"
                                                alt="Phousi Hill"
                                                className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/PhousiLong.jpg')}
                                            />
                                        </figure>
                                    </div>
                                    <figcaption className="text-center text-sm text-gray-600">The views from Phousi Hill</figcaption>
                                </li>
                                <li>
                                    The Night Market:<br/>
                                    Every evening, the main street of Luang Prabang turns into a bustling night market. On the main street, you will find stalls of locals selling souvenirs, clothes and handicrafts. The street ends at a small square which hosts the food market, which offers a wide variety of local Lao dishes as well as some Thai and Vietnamese options. The night market is a fun place to wander around, but just be aware that it mainly targets tourists, so it is not the most authentic night market experience in SEA.
                                </li>
                                <li>
                                    The many beautiful temples:<br/>
                                    When wandering about Luang Prabang, we stumbled upon many beautiful temples. The most famous one is Wat Xieng Thong, which is located on the tip of the peninsula formed by the Mekong and Nam Khan rivers.<br/>
                                    You will find a beautiful temple around every corner in Luang Prabang, so wondering around and popping into temples is a great way to spend some time in the city. Just be sure to dress modestly when visiting temples.
                                    <div className="grid md:grid-cols-2 gap-2">
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/LPTemple1.jpg"
                                                alt="Temple 1"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/LPTemple1.jpg')}
                                            />
                                            <figcaption className="text-center text-sm text-gray-600">Wat Mouanna Somphowaram</figcaption>
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/LPTemple2.jpg"
                                                alt="Temple 2"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/LPTemple2.jpg')}
                                            />
                                            <figcaption className="text-center text-sm text-gray-600">Wat Wisunarat</figcaption>
                                        </figure>
                                    </div><br/>
                                </li>
                                <li>
                                    The morning alms giving ceremony:<br/>
                                    Every morning at sunrise, the monks of the many temples in Luang Prabang walk through the streets to collect alms from the locals. This unique tradition is one of the things that set Luang Prabang on the map as a tourist destination. It is a unique experience to witness, but for us it falls into the category of "cool to see once, but not super memorable".
                                </li>
                                <li>
                                    The Mekong and Nam Khan riverfronts:<br/>
                                    The confluence of the Mekong and Nam Khan rivers creates a peninsula, which forms the center of Luang Prabang. The riverfronts are a great place to take a stroll, especially during sunset. When we were visiting, they were still developing this area with parks and walkways, but it was already a popular location to take pictures, for tourists and locals alike.<br/>
                                    The riverside is lined with bars and restaurants, which are a great place to relax and enjoy the view. We really liked this part of the city, and you will find some reviews of the restaurants we visited in the review section below.
                                    <br /><br />
                                    <div className="grid md:grid-cols-2 gap-2">
                                        <figure>
                                            <img
                                                src="/images/travel/laos/luangprabang/Riverside1.jpg"
                                                alt="Luang Prabang Riverfront 1"
                                                className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/Riverfront1.JPG')}
                                            />
                                        </figure>
                                        <figure>
                                            <img
                                                src="/images/travel/laos/luangprabang/Riverside2.jpg"
                                                alt="Luang Prabang Riverfront 2"
                                                className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/Riverfront2.JPG')}
                                            />
                                        </figure>
                                        <figure>
                                            <img
                                                src="/images/travel/laos/luangprabang/Riverside3.jpg"
                                                alt="Luang Prabang Riverfront 3"
                                                className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/Riverfront3.JPG')}
                                            />
                                        </figure>
                                        <figure>
                                            <img
                                                src="/images/travel/laos/luangprabang/Riverside4.jpg"
                                                alt="Luang Prabang Riverfront 4"
                                                className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/Riverfront4.JPG')}
                                            />
                                        </figure>
                                    </div>
                                    <figcaption className="text-center my-6 text-sm text-gray-600">The riverfront along the Mekong River</figcaption>
                                </li>
                            </ul>
                        </div>
                        Luang Prabang really stood out to us as a city with a unique charm and character. We found that the tourist audience was quite a bit older than in other Southeast Asian destinations. There did not seem to be any nightlife venue, which works just fine for this city. They go in for a relaxed, cultural experience, with many cute cafes and some really good restaurants.
                        <br/><br/>


                        <h3 id="luang-prabang-adventures" className="text-2xl font-bold mb-4">Waterfalls and Caves</h3>
                        Luang Prabang is surrounded by many natural sights. We checked out the following two, but there are many more hidden throughout the region.
                        <br/><br/>
                        <h4 id="luang-prabang-kuang-si" className="text-xl font-bold mb-4">Kuang Si Falls</h4>
                        The Kuang Si waterfalls are a collection of waterfalls located around 30km South of Luang Prabang (about a 1 hour drive). We booked transportation to the waterfalls via our hotel, who organized a tuk-tuk to take us there and back. The roads revert to unpaved dirt roads once you leave Luang Prabang, so in hindsight we would recommend organizing a car or another closed-compartment vehicle, as we were both quite dusty by the time we got there.<br/>
                        The waterfalls themselves are a fun place to visit. The first few falls you will see are rather unimpressive, but as you walk further up the trail, you will end up at the main waterfall, which is quite stunning. It is a 60m tall waterfall, and there is a staircase which allows you to get up the hill from which the water is tumbling down. There are some cafes in treehouses here, which are a great place to relax and take in the view.<br/>
                        Swimming is allowed in the pools, but the water was too cold for our liking!<br/>
                        The park also contains the Tat Kuang Si Bear Rescue Center, which is a sanctuary for sloth bears that have been rescued from poachers. It is a nice addition to the park, but not the most memorable part of the experience. The bears were mostly sleeping during our visit, but they do seem to have nice and well-maintained enclosures.<br/> 
                        On the way back, we asked our driver to stop at a buffalo ice cream stand that we had seen on the way there. This ice cream stand is part farm, and in hindsight we would've liked to take a tour there as well. The ice cream itself was delicious, we took the caramel and mulberry flavours and really enjoyed them both. They were an unexpected delight in the Lao countryside.
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/KuangSi1.jpg"
                                    alt="Kuang Si Falls"
                                    className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/KuangSi1.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The small falls leading to the main waterfall</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/KuangSi2.JPG"
                                    alt="Kuang Si Falls"
                                    className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/KuangSi2.JPG')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Main Kuang Si Waterfall</figcaption>
                            </figure>
                        </div>
                        <br/><br/>
                        <h4 id="luang-prabang-pak-ou" className="text-xl font-bold mb-4">Pak Ou Caves</h4>
                        Located 25km upstream the Mekong River from Luang Prabang, the Pak Ou caves are a collection of caves that are used as a place of worship. The caves contain a thousand (small) Buddha statues, and people still come to the cave to pray and make offerings to this day. The caves are located on a cliff overlooking the Mekong river.<br/>
                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/PakOu1.jpg"
                                    alt="Pak Ou Caves"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/PakOu1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/PakOu2.jpg"
                                    alt="Pak Ou Caves"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/PakOu2.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/PakOu3.jpg"
                                    alt="Pak Ou Caves"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/PakOu3.jpg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Pak Ou Caves</figcaption>
                        <br/>
                        We booked a boat to take us there from the riverfront in Luang Prabang. The boat ride takes about one hour each way, and the ride itself provides a scenic view of the Mekong river and the surrounding countryside. On our tour, the boat stopped at a small village along the way, where we got to see some local Lao marketware, such as "happy water", i.e. local liquor, often with snakes and spiders suspended in it. We booked the boat tour with a street vendor, which was a third of the price as the tours we found online, and we have no complaints about the experience.
                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <img
                                        src="/images/travel/laos/luangprabang/Mekong1.jpg"
                                        alt="Mekong River"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/Mekong1.jpg')}
                                    />
                                    <img
                                        src="/images/travel/laos/luangprabang/Mekong2.jpg"
                                        alt="Mekong River"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/Mekong2.jpg')}
                                    />
                                </div>
                                <figcaption className="text-center text-sm text-gray-600">Mekong River views</figcaption>
                            </figure>

                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/luangprabang/HappyWater.jpg"
                                    alt="Happy Water"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/luangprabang/HappyWater.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Local happy water</figcaption>
                            </figure>
                        </div>
                        <br/><br/>

                        <h3 id="luang-prabang-hotel-reviews" className="text-2xl font-bold mb-4">Hotel Reviews</h3>
                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h4 id="hotel-1" className="text-1xl font-bold m-0">Moonlight Champa Riverview</h4>
                                </div>
                                <div className="flex items-center">
                                    <StarScale rating={4.5} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={7} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Comfort' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Location' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Value for Money' />
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed mt-2">
                                    This delightful little hotel is located on the Nam Khan river, a short walk away from the city center.
                                    We really liked our stay at this hotel. The reception overlooks the river, where we really could come to rest upon arriving in Luang Prabang, as well as during out breakfasts at the hotel.
                                    The rooms are comfortable and well-maintained and the staff is very friendly and helpful. They were able to book some of our excursions for us, for example, and were always happy to help with any questions we had.
                                    The hotel does not have any other facilities to speak of next to the reception which is also the breakfast area, but it is a great place to stay if you are looking for a comfortable and relaxing place to stay that is a short walking distance from the city center.
                                    The breakfast itself was not super impressive, consisting of some coffee, juice, and fruits.
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/qXtPBr224XXt7Pma8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                                    <div className="grid md:grid-cols-3 gap-2">
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/LPHotel3.jpg"
                                                alt="Moonlight Champa Riverview"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/LPHotel3.jpg')}
                                            />
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/LPHotel2.jpg"
                                                alt="Moonlight Champa Riverview"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/LPHotel2.jpg')}
                                            />
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/luangprabang/LPHotel1.jpg"
                                                alt="Moonlight Champa Riverview"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/luangprabang/LPHotel1.jpg')}
                                            />
                                        </figure>
                                    </div>
                                    <figcaption className="text-center text-sm text-gray-600">Moonlight Champa Riverview</figcaption>
                                </p>
                            </div>
                        </details>

                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h4 id="hotel-1" className="text-1xl font-bold m-0">Luang Prabang Museum Inn & Travel</h4>
                                </div>
                                <div className="flex items-center">
                                    <StarScale rating={2} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={2} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Comfort' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={7} max={10} title='Location' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Value for Money' />
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed mt-2">
                                    As we got bumped off our train to Vang Vieng, we needed to stay one night longer in Luang Prabang than anticipated.
                                    As the Moonlight Champa was fully booked, we booked a night at this hotel.<br/>
                                    As for the positives: The room is located slightly closer to the city center and the staff was extremely friendly and helpful. The receptionist was very kind to us and helped us book transport to the train station the next day. You might find him playing guitar in the common area when he is not busy at the reception.<br/>
                                    However, we were very disappointed with our room, as the bathroom had a strong moldy smell which precipitated into the entire room. This made it very difficult to feel at ease during our stay at this hotel. If you have other options, we would not recommend staying here.
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/QVgD8HoygeYmHRat9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                </p>
                            </div>
                        </details>


                        <h3 id="luang-prabang-reviews" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Manolo's Mexican Eatery" rating={5} scale="food">
                            On our very first walk through Luang Prabang, we walked through the city until we hit the Mekong riverfront.
                            Here, we decided to get a drink at one of vibey restaurants / bars overlooking the river.
                            We walked into a shack selling Mexican foods and drinks; admittedly somewhat of a weird choice for a drink in SEA.
                            We had a cocktail here and were so pleasantly surprised by how good (and strong) it was, that we decided to have some food there as well.
                            The food was even more amazing than the drinks, and we ended up coming back here multiple times to enjoy the food, drinks, and ambiance of the Mekong riverfront.
                            A great recommendation if you are looking for Mexican food in Laos!
                            <br />
                            Find it <a href="https://maps.app.goo.gl/DLiKwcG5D8hzPT4q9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/luangprabang/Manolo1.jpg"
                                        alt="Manolo's Mexican Eatery"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/Manolo1.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">First sip from the cocktail</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/luangprabang/Manolo2.jpg"
                                        alt="Manolo's Mexican Eatery"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/Manolo2.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Stronger than expected!</figcaption>
                                </figure>
                            </div><br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Manda de Laos" rating={5} scale="food">
                            We had booked this restaurant to celebrate the start of our trip through SEA. This is one of the few fine dining experiences we had planned for our trip, and it did not disappoint.<br/>
                            The outdoor area of the restaurant straddles a large lily pond, making for a unique and romantic atmosphere. The food was delicious, adding a modern twist to Lao dishes and a Lao twist to international dishes. Francesca ordered a Laojito, which was a mojito with lemongrass. This ended up being our favourite cocktail of the entire trip! Florian ordered a dragonfruit cocktail, which clearly fancies itself as the queen of cocktails.<br/>
                            The food was delicious and the staff did an impeccable job as well. We highly recommend this restaurant to anyone who would like to have a special dining experience in Luang Prabang!
                            <br />
                            Find it <a href="https://maps.app.goo.gl/wgdNbaKhChzUGVjJ9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/luangprabang/MandaLaos1.jpg"
                                        alt="Manda de Laos"
                                        className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/MandaLaos1.jpg')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/luangprabang/MandaLaos2.jpg"
                                        alt="Manda de Laos"
                                        className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/MandaLaos2.jpg')}
                                    />
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">The Queen of Cocktails!</figcaption>
                            <br/>
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/luangprabang/MandaLaos3.jpg"
                                        alt="Manda de Laos"
                                        className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/MandaLaos3.jpg')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/luangprabang/MandaLaos4.jpg"
                                        alt="Manda de Laos"
                                        className="w-full shadow-lg my-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/luangprabang/MandaLaos4.jpg')}
                                    />
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">Manda de Laos</figcaption>
                        </CollapsibleReview>
                        <CollapsibleReview title="Jungala Lounge Bar" rating={4.5} scale="drink">
                            This lounge bar is tucked away on the bank of the Nam Khan river. Due to its location you will not bump into it by accident, but we highly recommend looking it up on Maps! It is a laid-back bar where you can rest on some pillows while having some food and drinks and overlooking the Nam Khan river (the smaller of the two rivers that define Luang Prabang).<br/>
                            We had lunch here and dinner another day, and we enjoyed both meals. We can recommend this spot both for food but also for a romantic cocktail night.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/ULLJ4P1us2te5Nnc7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/laos/luangprabang/Jungala.jpg"}
                                    alt="Jungala Lounge Bar"
                                    className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/laos/luangprabang/Jungala.jpg")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Jungala Lounge Bar</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="The Belle Rive Terrace" rating={3.5} scale="drink">
                            We stopped for a drink here on our was back from the Pak Ou caves. It is another bar located on the Mekong riverfront, exuding the same relaxed ambience and providing the same beautiful view of the river as the other bars on the riverfront. We had a cocktail here and enjoyed it, and recommend it as a nice place to stop for a drink while exploring Luang Prabang.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/YWhN9Ltm5eH8YFBv5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Buffalo ice cream" rating={4} scale="hotdog">
                            We stopped at this stand selling buffalo ice cream on our way back from the Kuang Si falls.
                            This stand belongs to a buffalo farm, who also sell cheese and tours for the farm.
                            The ice cream was delicious and a fun surprise to run into in the Lao countryside.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/W3vfQBbM4wQugHMBA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Luang Prabang Night Market" rating={4} scale="hotdog">
                            The food section of the Luang Prabang night market is a great place to try a variety of South-East Asian dishes.
                            They serve Lao dishes (lie larb and papaya salad), but also South-East Asian classics like Thai curries and mango sticky rice (a favourite of ours). The food is delicious and very affordable, making it a great option for a casual meal in the evening. 
                            The only downside is that the seating area can get quite crowded and noisy, which can detract from the dining experience. When we arrived it was quite calm at first, but then a bus of Chinese tourists arrived and weren't afraid to let everyone know they had arrived.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/9yLQmSdX9rorxyGq9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <br/><br/>

                        {/* Vang Vieng */}
                        <h2 id="vang-vieng" className="text-4xl font-bold mb-4">Vang Vieng</h2>
                        <h3 id="vang-vieng-city" className="text-2xl font-bold mb-4">Vang Vieng</h3>
                        Vang Vieng is the adventure capital of Laos. It is the gateway to many outdoor adventure activities, such as ziplining, kayaking, and hiking. During sunrise and sunset, the sky above Vang Vieng is filled with hot air balloons and paramotors, which is a enchanting sight to behold. The town itself is rather small and has little more to offer than some hostels and a couple of bars and restaurants. Most of these venues lean into the party / backpacker vibe, rather than the outdoor / adventure vibe. That being said, Laos' curfew means that most venues stop playing music at 10pm, so you will probably still get a good night's sleep even if you stay in the center of town.<br/>
                        Vang Vieng also has a night market, but it is less lively and diverse than the one in Luang Prabang. You will be able to find souvenirs and clothes here, but we found the food section to be rather limited. Instead, if you are looking for a fun collection of food to try, look up the Vang Vieng Food Court on Maps! This is a collection of food stalls with a shared seating area, with cuisines from all over Asia on offer. It has a very authentic and lively vibe, and we came back here multiple times during our stay in Vang Vieng. Be mindful that you will see some weird food (like pigs ears) and that the electricity might fail, but the stalls will still be playing music from their speakers and light up the area with their own lanterns!
                        <br/><br/>
                        <h3 id="vang-vieng-adventures" className="text-2xl font-bold mb-4">Mountains & Lagoons</h3>
                        We spent three full days in Vang Vieng, and filled our days with the following activities:
                        <br/><br/>
                        <h4 id="vang-vieng-day-1" className="text-xl font-bold mb-4">Nam Xay Viewpoint and Blue Lagoon 1</h4>
                        We decided to rent a scooter at our hotel and explore the area around Vang Vieng on our own. We really recommend this to other tourists as well, as the traffic is pretty manageable and the distances are a bit too wide for non-motorized transport. The Lao people are clearly investing in the infrastructure to support tourism, as the roads were being paved as we were driving!<br/>
                        We drove to "Blue Lagoon 1", which is one of the ponds / lakes in which the mountain water collects. The water has a beautiful turquoise color, and there are some nice spots for food and drinks around the lagoon. The lagoon itself was pretty crowded though, particularly with Chinese tourists. The other lagoons aren't nearly as crowded, so in hindsight we would recommend skipping this one in favor of one of the other lagoons.<br/>
                        After this quick dip in the blue lagoon, we drove a little further up to the Nam Xay viewpoint. After parking your motorbike, you will have to take a short but steep hike up the mountain to reach the viewpoint. The view from the top is stunning; It was the postcard view of Laos I had in my mind before travelling there myself. It is a great place to take some pictures, and the Lao people know this as well as they put some decommissioned motorbikes on the top of the mountain for some photo opportunities.<br/>
                        We reached the top of the mountain a solid 45min before sunset, which made for a great time to take some pictures. The queue for the first bike was doable, and the second one wasn't too bad either, up until the couple in front of us had their turn. They spent a solid 10min on their pictures, and we suspect they were waiting for the sunset to actually happen. At a certain point the wait became ridiculous, at which point the other people in the queue told them it was time to move on. This was an awkward situation, but this meant that we actually had one of the best times of day for our photoshoot! It did mean we felt pretty rushed though.<br/>
                        We did our photoshoot and hung around for a little while longer, but decided to start the descent before the sun had set, as we didn't want to descend in total darkness. That being said, we did notice that good artificial lighting is installed on our way down, so you could probably stay until after sunset without any issues.
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/NamXay1.JPG"
                                    alt="Temple 1"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/NamXay1.JPG')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Nam Xay Viewpoint 1</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/NamXay2.jpg"
                                    alt="Temple 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/NamXay2.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Nam Xay Viewpoint 2 (golden hour!)</figcaption>
                            </figure>
                        </div><br/>
                        <h4 id="vang-vieng-day-2" className="text-xl font-bold mb-4">Ziplining and Kajaking </h4>
                        On our second day in Vang Vieng, we decided to book some of the outdoor activities that Vang Vieng is known for. We booked a ziplining and kajaking tour via Get Your Guide. The operators picked us up from our hotel at the start of the day.<br/><br/>
                        First, we drove out of the city center towards the area around Nam Xay. There we did some ziplining, which was a very fun activity. As we were going kajaking after, Florian was wearing slippers. On our way to the top, one of his slippers broke, which meant he had to complete the upward trek and downward ziplining in one slipper. Luckily, one of the guides was friendly enough to lend him one of his slippers when walking over rough terrain!<br/>
                        Before flying to Laos, we had heard a real horror story about ziplining in Laos. A Belgian father and son had been ziplining in Laos, and they both died during this activity. When walking between the ziplines, they passed close to a hornet's nest, and both father and son were stung to death by the hornets. This made us feel somewhat nervous about the experience, but happily everything went smoothly for us.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/Zipline1.jpg"
                                    alt="Zipline 1"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/Zipline1.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Walking towards the zipline</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/Zipline2.jpg"
                                    alt="Zipline 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/Zipline2.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The first zipline</figcaption>
                            </figure>
                        </div><br/>
                        After the ziplining, the tour operators drove us to the river were we would do some kajaking. The kajaking was pretty fun, but the highlight was towards the end of the trip, as we made our way back into the city. As the sun was going down, the hot air balloons and paramotors were taking off all around us, making for an unforgettable view and experience.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/Kajak1.JPG"
                                    alt="Kajak 1"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/Kajak1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/Kajak2.JPG"
                                    alt="Kajak 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/Kajak2.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Kajaking fun</figcaption>
                        <br/>
                        After the kajaking, the tour operators want to leave us at the riverside, even though the tour description specified we would be dropped off back at our hotel. They dropped us off and told us to walk back, but this wasn't really an option as Florian only had one slipper at this point. In the end, they solved the problem by giving us a lift back to our hotel on the back of their motorbike. This was a rather exciting experience, but we made it back in one piece!<br/><br/>
                        Overall, we enjoyed the tour, but we were somewhat annoyed by the logistical management of the tour operator, as we spent a lot of time waiting around between the different activities and getting moved from one minivan into another, which felt sketchy.
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/Doggo1.jpg"
                                    alt="Doggo 1"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/Doggo1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/Doggo2.jpg"
                                    alt="Doggo 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/Doggo2.jpg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">A friendly doggo catching a cheeky ride in the minivan</figcaption><br/>

                        <h4 id="vang-vieng-day-3" className="text-xl font-bold mb-4">Blue lagoon 2</h4>
                        On our final day in Vang Vieng, we took the scooter out to Blue Lagoon 2, which was a lot more enjoyable than Blue Lagoon 1. With less crowds, it was a more relaxing experience. Though not crowded, it was pleasantly busy, with most tourists there for taking a swim and relaxing rather than taking pictures.
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/BlueLagoon22.JPG"
                                    alt="Blue Lagoon 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/BlueLagoon2.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/laos/vangvieng/BlueLagoon2.JPG"
                                    alt="Blue Lagoon 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/laos/vangvieng/BlueLagoon22.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Chilling at Blue Lagoon 2</figcaption><br/>


                        <h3 id="vang-vieng-hotel-reviews" className="text-2xl font-bold mb-4">Hotel Reviews</h3>
                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h4 id="hotel-1" className="text-1xl font-bold m-0">Ruby Mountain View Resort</h4>
                                </div>
                                <div className="flex items-center">
                                    <StarScale rating={3} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={7} max={10} title='Comfort' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={7} max={10} title='Location' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={6} max={10} title='Value for Money' />
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed mt-2">
                                    Our stay at this hotel was one of our weirdest during our trip throughout SEA. We had booked this hotel on Booking as we were enchanted by the views on the mountains from the room's bedroom and bathroom. In all fairness, the hotel does deliver on this promise, as the views from the room are stunning.<br/>
                                    Upon arrival, we wanted to take a bath in the bathroom to enjoy the view, but the water did not get hot. We called the reception and they sent someone to fix it, but after many attempts and an hour of lost time, they decided to switch our room. The new room's bath did have some hot water, but it ran out pretty quickly. It took us a lot of time to get enough hot water out for a comfortable bath, at which point our frustration had built up quite a bit. Sometime after nightfall, I made my way to the reception to ask for an additional towel. I entered the reception building which was across a lawn from the room, but I did not find the receptionist. Instead, there was a man lying on some rags on the floor of the reception. Not knowing whether this man was a homeless person, I got very uncomfortable and left the reception without asking for a towel. This entire interaction made us feel very uneasy. This feeling was compounded by the fact that two of the room's walls are made of glass. Normally, this would be a great feature of the room given its location amidst the mountains, but in this case, it made us feel very exposed and vulnerable. The next day, upon asking the receptionist about this interaction, we were informed that this man is the hotel's nighttime guard.<br/>
                                    Some other experiences with the hotel's staff showed us that they were well-meaning, but were not trained to work in the service industry. For example, there are some nice, expensive Italian coffee machines at the breakfast area. Upon asking for a coffee, the staff simply told us to use the water boiler and coffee powder in the room. The breakfast itself was quite nice and varied, though.<br/>
                                    Some other examples include the staff not replacing our towels after cleaning the room and providing us with scooters with worn-down brakes. Because of our issues with the Lao trains, we booked an extra night with them. Instead of giving us a discount because of our troubles, they wanted to ask a higher rate due to weekend rates (even though the hotel was nowhere near fully booked). They did end up giving us the original rate upon some discussion, but this was a frustrating experience as well and showed their lack of understanding of the service industry.<br/>
                                    All-in-all, the hotel has very modern and clean rooms and is located just outside of the city center, a short walk away from the Vang Vieng nightlife. If you are looking for a hotel with stunning views, modern facilities, and don't mind some friction in the service, this hotel is a good option. Just don't expect a home run in terms of the service experience. Most hotels in Vang Vieng cater to the party / backpacker crowd, and this hotel defintely offers a more relaxed experience.
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/1Y8YqDRqkySURCtM9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                                    <figure className="flex flex-col items-center">
                                        <img
                                            src={"/images/travel/laos/vangvieng/VVHotel.JPG"}
                                            alt="Vang Vieng Hotel"
                                            className="w-[75%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox("/images/travel/laos/vangvieng/VVHotel.JPG")}
                                        />
                                        <figcaption className="text-center text-sm text-gray-600">The bathroom view</figcaption>
                                    </figure>
                                    <br/>
                                </p>
                            </div>
                        </details>

                        <h3 id="vang-vieng-reviews" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Vela cafe and restaurant" rating={3} scale="food">
                            This restaurant serves authentic Lao food, catered to a tourist audience. Overall the food was good, but the service was very slow and the crowd was a bit too loud when we were visiting. We had a good meal here, a Lao khao soi and larb, but we would not go out of our way to eat here again.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/bejz3TRTjC27CXVZ6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="BaanLao café" rating={3.5} scale="food">
                            We enjoyed some brunch here to start one of our adventurous days in Vang Vieng. We weren't blown away by the food or the service, but the restaurant has a unique terrace overlooking the Lao countryside, which is a nice place to relax and have a meal. It also present a nice photo opportunity, which the Chinese tourists had spotted as well.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/L9sX1FSprUf84Svu7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/laos/vangvieng/BaanLao.jpg"}
                                    alt="BaanLao café"
                                    className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/laos/vangvieng/BaanLao.jpg")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">BaanLao Café</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Mittaphap restaurant" rating={4} scale="food">
                            We hopped into this restaurant for a quick lunch on our way to the blue lagoon 1. We were pleasantly surprised by this restaurant, which serves authentic Lao food and donates some of the proceedings to a local charity. The food was delicious and the staff was very friendly.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/yohX8fE7uBynyC3Z8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Vang Vieng Food Court" rating={4} scale="hotdog">
                            Hidden in an alley on the main street, we stumbled upon this food court on our first night in Vang Vieng. We ended visiting a couple of times, as we liked the collection of (weird) food on offer here, ranging from local Lao food to Thai, Chinese, and Korean stands. Some of the stands had great food and friendly service, while others were less of a success. We had one particularly bad interaction where we had ordered two dishes, but the lady only prepared one. After bringing it to her attention, she went to work but gave us the wrong dish. After telling her we can't eat that dish due to allergies, she finally prepared the right one, but by that time we were 45min later, at which point we were quite frustrated.<br/>
                            The food court has a authentic and lively vibe, and overall we enjoyed coming here and trying new things. The infrastructure is quite basic and the electricity even blacked out a couple of times, but this didn't diminish the atmosphere of the court, as people pulled out lanterns. We would recommed this court if you're looking for a more authentic food experience in Vang Vieng.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/vBqiryqa39dYH3gk7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/laos/vangvieng/StreetMarket.jpg"}
                                    alt="Street market"
                                    className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/laos/vangvieng/StreetMarket.jpg")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Vang Vieng Food Court</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Mama very big" rating={5} scale="hotdog">
                            This street vendor has obtained a legendary status in Vang Vieng. She serves a kind of hotdog, heavi(n)ly loaded with toppings such as avocado, egg, cheese, and sauces. The resulting hotdog is as delicious as it is filling. We took one each on one of our adventures to picknick at the blue lagoon 2, and it was the perfect lunch meal, loading us up with enough calories to last us through the day.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/eo7ZvqKtFxYHwRqMA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/vangvieng/MamaVeryBig.jpg"
                                        alt="Mama Very Big"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/vangvieng/MamaVeryBig.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Mama Very Big</figcaption><br/>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/laos/vangvieng/MamaAtTheLake.JPG"
                                        alt="Mama at the Lake"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/laos/vangvieng/MamaAtTheLake.JPG')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Enjoying the sandwhich at Blue Lagoon 2</figcaption><br/>
                                </figure>
                            </div>
                            
                        </CollapsibleReview>
                        <CollapsibleReview title="Mixue" rating={3.5} scale="hotdog">
                            Mixue is a Chinese ice cream franchise that is taking Asia by storm. We decided to check it out for ourselves and quite liked having a cold ice cream treat during the mid-day Lao heat. It is a pretty basic ice cream shop but we can recommend it if you want a quick ice cream that hits the spot.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Elephant crossing rooftop" rating={5} scale="drink">
                            The rooftop is the place to be during sunrise or sunset to watch the sky above Vang Vieng, as the sky is filled with hot air balloons and paramotors at these times. We came here during sunset and had a cheeky photoshoot while enjoying some drinks. This rooftop experience is exactly what you'd expect and what we wanted out of a rooftop in Vang Vieng, so we can only recommend.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                            <div className="grid md:grid-cols-3 gap-2">
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/vangvieng/Elephant1.jpg"
                                                alt="Elephant Crossing Rooftop"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/vangvieng/Elephant1.jpg')}
                                            />
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/vangvieng/Elephant2.jpg"
                                                alt="Elephant Crossing Rooftop"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/vangvieng/Elephant2.jpg')}
                                            />
                                        </figure>
                                        <figure className="md:col-span-1">
                                            <img
                                                src="/images/travel/laos/vangvieng/Elephant3.JPG"
                                                alt="Elephant Crossing Rooftop"
                                                className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openLightbox('/images/travel/laos/vangvieng/Elephant3.JPG')}
                                            />
                                        </figure>
                                    </div>
                                    <figcaption className="text-center text-sm text-gray-600">The views from the Elephant Crossing rooftop</figcaption>
                        </CollapsibleReview>
                        <CollapsibleReview title="Mad monkeys bar" rating={3} scale="drink">
                            The mad monkey hostel has a bar at the pool area of the hostel, which is a great place for some cheap drinks and socializing. It is exactly what you'd expect from a bar in a backpacker hostel, so we'd recommend it if you are looking for a fun and social atmosphere. The cocktails weren't great and the service was very slow, but it's a fun place if you're willing to look past this.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Sakura bar" rating={3} scale="drink">
                            This is one of the few bars in Vang Vieng that have a club vibe to them. In the evening, they turn the music up and the dance floor fills up with people. If you are looking for a place to dance in Vang Vieng, this could be your best bet. It is a peculiar collection of people, mainly Western backpackers (early 20s) and Chinese tourists (mostly middle-aged), and it's one of the rare places they interact. We saw some drunk Chinese ladies excitedly taking turns taking pictures with a tall, blond Dutch guy. The music itself is a mix of early 2000s Western music and the odd Asian pop song. The music installation was pretty bad. This venue van be a fun time if you are ready for a weird night out, and you'll probably need a couple of drinks in you to enjoy it.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Irish pub" rating={3} scale="drink">
                            The Irish pub is located in the same street as Sakura bar. While Sakura bar clearly goes for the dancing vibe, the Irish pub is filled with tables and chairs, condusive to chatting, but the music is turned extremely loud, making talking nearly impossible. We had a drink here and met some young Lao guys who were visiting from another part of the country (we suspect Vang Vieng is the party city for Lao people), but we had trouble communicating due to the loud music and their limited English.<br/>
                            The Irish pub can be fun to hang out with some friends and play some pool, but the loud music defeats the purpose of socializing.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>


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
                                        <a href="#luang-prabang-city" onClick={(e) => handleTocClick(e, 'luang-prabang-city')} className="block w-full text-right hover:underline">Luang Prabang</a>
                                    </li>
                                    <li>
                                        <a href="#luang-prabang-adventures" onClick={(e) => handleTocClick(e, 'luang-prabang-adventures')} className="block w-full text-right hover:underline">Waterfalls and Caves</a>
                                    </li>
                                    <li>
                                        <a href="#luang-prabang-hotel-reviews" onClick={(e) => handleTocClick(e, 'luang-prabang-hotel-reviews')} className="block w-full text-right hover:underline">Hotel Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#luang-prabang-reviews" onClick={(e) => handleTocClick(e, 'luang-prabang-reviews')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                    </li>
                                <li>
                                    <a href="#vang-vieng" onClick={(e) => handleTocClick(e, 'vang-vieng')} className="block w-full text-left pl-20 font-bold hover:underline">Vang Vieng</a>
                                </li>
                                    <li>
                                        <a href="#vang-vieng-city" onClick={(e) => handleTocClick(e, 'vang-vieng-city')} className="block w-full text-right hover:underline">Vang Vieng</a>
                                    </li>
                                    <li>
                                        <a href="#vang-vieng-adventures" onClick={(e) => handleTocClick(e, 'vang-vieng-adventures')} className="block w-full text-right hover:underline">Mountains and Lagoons</a>
                                    </li>
                                    <li>
                                        <a href="#vang-vieng-hotel-reviews" onClick={(e) => handleTocClick(e, 'vang-vieng-hotel-reviews')} className="block w-full text-right hover:underline">Hotel Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#vang-vieng-reviews" onClick={(e) => handleTocClick(e, 'vang-vieng-reviews')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
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