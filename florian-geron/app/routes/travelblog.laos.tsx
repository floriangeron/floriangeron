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
                                    In the middle of the small city lies the old royal palace, which is now accompanied by a museum showcasing Laos' history and culture, with a focus on the royal family. The complex also contains a beautiful temple. Our favorite part of the museum was the stable building, which has been converted into a garage for the royal family's collection of vintage cars.
                                </li>
                                <li>
                                    Phousi Hill:<br/>
                                    Just across from the royal palace lies Phousi Hill. It's a short hike to reach the hilltop, which provides a stunning view of Luang Prabang and the surrounding area. This place is most busy during sunrise and sunset, at which point it becomes uncomfortably busy with tourists. It's one of the rare places in Laos where overtourism negatively impacts the tourist experience.
                                </li>
                                <li>
                                    The Night Market:<br/>
                                    Every evening, the main street of Luang Prabang turns into a bustling night market. On the main street, you will find stalls of locals selling souvenirs, clothes and handicrafts. The street ends at a small square which hosts the food market, which offers a wide variety of local Lao dishes as well as some Thai and Vietnamese options. The night market is a fun place to wander around, but just be aware that it mainly targets tourists, so it is not the most authentic night market experience in SEA.
                                </li>
                                <li>
                                    The many beautiful temples:<br/>
                                    When wandering about Luang Prabang, we stumbled upon many beautiful temples. The most famous one is Wat Xieng Thong, which is located on the tip of the peninsula formed by the Mekong and Nam Khan rivers. Most tourists also visit Haw Phra Bang, the temple located in the royal palace complex. This temple contains the Phra Bang, a Buddha statue which is the namesake of the city, as it is considered the palladium of Laos.<br/>
                                    You will find a beautiful temple around every corner in Luang Prabang, so wondering around and popping into temples is a great way to spend some time in the city. Just be sure to dress modestly when visiting temples.
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
                        <br/><br/>
                        <h4 id="luang-prabang-pak-ou" className="text-xl font-bold mb-4">Pak Ou Caves</h4>
                        Located 25km upstream the Mekong River from Luang Prabang, the Pak Ou caves are a collection of caves that are used as a place of worship. The caves contain a thousand (small) Buddha statues, and people still come to the cave to pray and make offerings to this day. The caves are located on a cliff overlooking the Mekong river.<br/>
                        We booked a boat to take us there from the riverfront in Luang Prabang. The boat ride takes about one hour each way, and the ride itself provides a scenic view of the Mekong river and the surrounding countryside. On our tour, the boat stopped at a small village along the way, where we got to see some local Lao marketware, such as "happy water", i.e. local liquor, often with snakes and spiders suspended in it. We booked the boat tour with a street vendor, which was a third of the price as the tours we found online, and we have no complaints about the experience.
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
                                            <StarLine rating={7} max={10} title='Location' />
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
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/qXtPBr224XXt7Pma8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
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
                                    <StarScale rating={2.5} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={5} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={3} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Comfort' />
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
                                    As we got bumped off our train to Vang Vien, we needed to stay one night longer in Luang Prabang than anticipated.
                                    As the Moonlight Champa was fully booked, we booked a night at this hotel.<br/>
                                    As for the positives: The room is located slightly closer to the city center and the staff was extremely friendly and helpful. The receptionist, whose name I embarassingly forgot, was very kind to us and helped us book transport to the train station the next day. You might find him playing guitar in the common area when he is not busy at the reception.<br/>
                                    TO COMPLETE
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
                            We had a cocktail here and were so pleasantly surprised by how good it was, that we decided to have some food there as well.
                            The food was even more amazing than the drinks, and we ended up coming back here multiple times to enjoy the food, drinks, and ambiance of the Mekong riverfront.
                            A great recommendation if you are looking for Mexican food in Laos!
                            <br />
                            Find it <a href="https://maps.app.goo.gl/DLiKwcG5D8hzPT4q9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Manda de Laos" rating={5} scale="food">
                            We had booked this restaurant to celebrate the start of our trip through SEA. This is one of the few fine dining experiences we had planned for our trip, and it did not disappoint.<br/>
                            The outdoor area of the restaurant straddles a large lily pond, making for a unique and romantic atmosphere. The food was delicious, adding a modern twist to Lao dishes and a Lao dish to international dishes. Francesca ordered a Laojito, which was a mojito with lemongrass. This ended up being our favourite cocktail of the entire trip! Florian ordered a dragonfruit cocktail, which clearly fancies itself as the queen of cocktails.<br/>
                            The food was delicious and the staff did an impeccable job as well. We highly recommend this restaurant to anyone who would like to have a special dining experience in Luang Prabang!
                            <br />
                            Find it <a href="https://maps.app.goo.gl/wgdNbaKhChzUGVjJ9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Jungala Lounge Bar" rating={4.5} scale="drink">
                            This lounge bar is tucked away on the bank of the Nam Khan river. Due to its location you will not bump into it by accident, but we highly recommend looking it up on Maps! It is a laid-back bar where you can rest on some pillows while having some food and drinks and overlooking the Nam Khan river (the smaller of the two rivers that define Luang Prabang).<br/>
                            We had lunch here and dinner another day, and we enjoyed both meals. We can recommend this spot both for food but also for a romantic cocktail night.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/ULLJ4P1us2te5Nnc7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="The Belle Rive Terrace" rating={4} scale="drink">
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

                        {/* Vang Vieng */}
                        <h2 id="vang-vieng" className="text-4xl font-bold mb-4">Vang Vieng</h2>
                        <h3 id="vang-vieng-city" className="text-2xl font-bold mb-4">Vang Vieng</h3>
                        <h3 id="vang-vieng-adventures" className="text-2xl font-bold mb-4">Mountains & Lagoons</h3>
                        <h3 id="vang-vieng-hotel-reviews" className="text-2xl font-bold mb-4">Hotel Reviews</h3>
                        <h3 id="vang-vieng-reviews" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>


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