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

    // Lightbox state 
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    // Lightbox state and handler
    function openLightbox(src: string) {
        setLightboxSrc(src);
    }

    // Captions for the carousel images
    const imgCaptionAngkor = [
        "Sunrise at Angkor Wat",
        "Sunrise at Angkor Wat",
        "Sunrise at Angkor Wat",
        "Sunrise at Angkor Wat",
        "The Angkor Wat temple",
        "The Angkor Wat temple",
        "The Angkor Wat temple",
    ]; 
    const imgCaptionSmallCircuit = [
        "Ta Prohm",
        "Ta Prohm",
        "Ta Prohm",
        "Ta Keo",
        "Ta Keo",
        "Bayon (undergoing restoration)",
        "South Gate of Angkor Thom",
    ]; 
    const imgCaptionBigCircuit = [
        "Pre Rup",
        "East Mebon",
        "East Mebon",
        "East Mebon",
        "Ta Som",
        "Ta Som",
        "Neak Pean",
        "Neak Pean",
        "Neak Pean",
        "Preah Khan",
        "Preah Khan",
    ]; 

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
                    src="/images/travel/cambodia/angkor/Angkor.jpeg"
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
                            <p className="text-gray-600">Cambodian Riel (KHR)<br/>US Dollar (USD)</p>
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
                            We then flew to Sihanoukville and took a ferry to the Koh Rong islands, where we spent the remaining ten nights of our trip.
                            We spent four nights on Koh Rong, the larger island with more of a backpacker vibe, and another five nights on Koh Rong Sanloem, the smaller and more peaceful of the two islands.
                            We continued our journey by flight from Sihanoukville which left early in the morning, so we spent one night in Sihanoukville as well.
                            <br />

                            <figure>
                                <img
                                    src={"/images/travel/cambodia/CambodiaRoute.png"}
                                    alt="Route we travelled"
                                    className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/cambodia/CambodiaRoute.png")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Route we travelled — Siem Reap to the Koh Rong Islands</figcaption>
                            </figure>
                            
                        </div>

                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        <div className="mb-6 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Phnom Penh:
                                    <br/>
                                    We decided to leave the capital city out of our itinerary, as we would be spending time in a big city in the next leg of our journey.
                                    We had heard mixed reviews about Phnom Penh, and I am sure it has a place in a Cambodia itinerary which is less beach-focused as ours.
                                    We have heard especially good things about the Killing Fields museum, which documents the history of the Khmer Rouge regime of the 70s.
                                </li>
                                <li>
                                    Kampot:
                                    <br/>
                                    Kampot is a riverside town known for its colonial architecture and its nearby natural beauty, including pepper plantations and National Parks.
                                    We had heard good things about Kampot, though it has supposedly become more touristy in recent years.
                                </li>
                                <li>
                                    Cardamom Mountains:
                                    <br/>
                                    The Cardamom Mountains are a remote and rugged region in southwestern Cambodia, known for their dense rainforests and diverse wildlife.
                                    This stop definitely has a place in more adventurous itineraries.
                                </li>
                                <li>
                                    Kratié:
                                    <br/>
                                    We had considered visiting Kratié to see the Irrawaddy dolphins, but ultimately decided against it as it would have required a long bus ride.
                                </li>
                            </ul>
                        </div>

                        <h2 id="angkor-wat" className="text-4xl font-bold mb-4">Angkor Wat</h2>

                        <h3 id="angkor-wat-history" className="text-2xl font-bold mb-4">Some Background & History</h3>
                        Angkor Wat is the name of the main temple in the Angkor Wat complex; 
                        Angkor Wat by itself is already the largest religious monument in the world, but it is just one of the many temples in the Angkor Archaeological Park.
                        The park consists of over 100 temples.
                        <br /><br />
                        Starting from the 9th century, the Khmer Empire became the dominant power in Southeast Asia, and they chose the area around current-day Siem Reap as the location for their capital city; 
                        Angkor is the Khmer word for city.
                        Over the centuries, the Khmer Empire expanded and their kings built a great many temples in the area.
                        Our guide told us that each king wanted to build a new temple, preferable grander than the previous ones, to leave their mark on the capital and to invite foreign dignitaries to.
                        This continued until the fall of the Khmer Empire in the 15th century, by which time 100s of temples were constructed in this area.
                        <br /><br />
                        As the Empire faded, many of the temples were abandoned and fell into disrepair, and the jungle started to reclaim them.
                        Many sources say that the temples were "lost" to the jungle until they were "rediscovered" by French explorers in the 19th century, but in reality the local people never forgot about them and continued to visit them and maintain them to some extent.
                        This was especially true for Angkor Wat, which was never fully abandoned and has been continuously maintained and used as a place of worship by local priests.
                        <br /><br />
                        Angkor Wat is the most famous temple in the complex and is the largest religious monument in the world.
                        It is featured on the Cambodian flag and is a source of great pride for the Cambodian people.
                        The Khmer Empire was originally founded as a Hindu empire, and Angkor Wat was originally built as a Hindu temple dedicated to the god Vishnu.
                        However, over time the Khmer Empire gradually transitioned to Buddhism, and Angkor Wat was converted into a Buddhist temple, which it remains to this day.
                        
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/angkor/Angkor.jpeg"
                                    alt="Angkor Wat"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/angkor/Angkor.jpeg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/angkor/Angkor2.jpg"
                                    alt="Angkor Wat"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/angkor/Angkor2.jpg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Sunrise at Angkor Wat</figcaption>

                        <br /><br />
                        The Khmer Empire gradually converted from Hinduism to Buddhism over the course of the late 12th century and early 13th century, and this transition is reflected in the architecture of the temples in the Angkor complex.
                        The earlier temples, such as Angkor Wat, have more Hindu elements, while the later temples have more Buddhist elements.
                        <br /><br />
                        The temples served not only as places of worship, but also as political and economic centers, as well as functioning as important engineering structures supporting agricultural activities.
                        Many temples are surrounding by large moats and reservoirs, which were used for irrigation and water management in the region.
                        Over the course of the centuries, this engineering knowledge on irrigation was lost, which contributed to the decline of the Khmer Empire.
                        <br /><br />
                        The name Angkor Wat means "City of Temples". Another temple in the complex is called Angkor Thom, which means "Great City". These names indicate the importance of the temples as the center of the city and the empire.
                        Some other temples include "Bayon", which means "Face" (it is named after the many faces carved into the temple, which are thought to represent either the Buddha or the king who built it) and "Ta Prohm", which is famous for the trees growing out of its ruins.
                        <br /><br />
                        By the 15th century, the Khmer Empire had declined and the capital was moved away from Angkor. Our guide told us that the decline of the empire was due to many factors:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Environmental changes:
                                <br/>
                                A series of droughts followed by intense monsoon floods damaged the irrigation system and led to food shortages and social unrest.
                            </li>
                            <li>
                                Loss of irrigation expertise:
                                <br/>
                                In an attempt to stay as relevant for as long as possible, the engineers who built and maintained the complex irrigation system did not pass on their full knowledge to the next generations.
                                This led to a graduel loss of expertise in irrigation.
                                This made the system more vulnerable to the aforementioned environmental changes.
                                Our guide told us that the experts would pass on only 90% of their knowledge, which meant that after 10 generations only 35% of the knowledge would remain, which was not enough to maintain the system, let alone fix it in case of disaster.
                            </li>
                            <li>
                                Conquest by the Thai kingdom of Ayutthaya:
                                <br/>
                                The Khmer capital of Angkor Wat sat closely to the Thai kingdom of Ayutthaya, much like the modern day city of Siem Reap sits closely to the Thai border.
                                As the Khmer Empire waned, the Ayutthaya kingdom grew stronger and conquered Angkor in the 15th century.<br/>
                                Eventually, the Cambodians regained control of the area, and the name of the city Siem Reap actually means "Defeat of Siam".
                            </li>
                            <li>
                                Religious changes leading to loss of legitimacy of the kings:
                                <br/>
                                The Khmer Empire was originally founded as a Hindu empire, and the kings derived their legitimacy from their role as intermediaries between the gods and the people.
                                Our guide told us that the kings were seen as divine figures, which made it easier for them to control the population.
                                As the empire transitioned to Buddhism, the kings lost some of their divine status and legitimacy, which weakened the control of the central government over the population.
                            </li>
                        </ul>
                        <br /><br />

                        <h3 id="angkor-wat-complex" className="text-2xl font-bold mb-4">The Angkor Wat Complex</h3>
                        The temple complex around Siem Reap contains over 100 temples, and it would be impossible to see them all in one trip.
                        Most tour operators offer two main circuits to see the temples: The small circuit and the big circuit.
                        Each take 6 to 8 hours to complete, and they can be done by car, tuktuk, or bike.

                        <figure>
                            <img
                                src={"/images/travel/cambodia/angkor/AngkorTours.png"}
                                alt="Route we travelled"
                                className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/cambodia/angkor/AngkorTours.png")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Angkor Wat Small Circuit (green) and Big Circuit (red), map from <a href="https://www.novo-monde.com/en/angkor-temples-itinerary/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Novo Monde</a></figcaption>
                        </figure>
                        <br />
                        These circuits are designed to show you the most important and impressive temples, but by no means do they show you all the temples in the area.
                        They cover about 10 temples in total, which is just a fraction of the over 100 temples in the area. 
                        If you have the time and are feeling adventurous, you can explore these temples yourself or with a guide.
                        <br /><br />
                        You will need a park pass to enter the temple complex. There are three options:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                1-day pass: $37
                            </li>
                            <li>
                                3-day pass (consecutive or not): $62
                            </li>
                            <li>
                                7-day pass(consecutive or not): $72
                            </li>
                        </ul>
                        As we had three full days, we went for the 3-day pass.
                        <br /><br />
                        We can recommend spending at least three full days in Siem Reap if you are serious about exploring the temples.
                        This will give you enough time to do the small and big circtuit, as well as a bonus activity to you choice, like exploring some lesser-known temples or visiting the floating villages on Tonle Sap lake.
                        <br /><br />

                        <h3 id="angkor-wat-day-1" className="text-2xl font-bold mb-4">Day 1 - Small Circuit</h3>
                        For our first day at Angkor Wat, we woke up at 3:45 AM to catch the sunrise at Angkor Wat.
                        The sunrise at Angkor Wat is a must-see experience. There were many visitors, but as the site is so large, it did not feel too overcrowded.
                        <br /><br />

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 7 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">
                                        <img 
                                            src={`/images/travel/cambodia/angkorsunrise/angkor${index+1}.jpg`} 
                                            alt={`Angkor ${index+1}`} 
                                            className="w-full h-full sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/cambodia/angkorsunrise/angkor${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionAngkor[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <br /><br />
                        After this magical sunrise experience, we continued with the small circuit. 
                        This circuit took us to the following sites:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Ta Prohm:
                                <br/>
                                This temple is famous for the trees growing out of its ruins.
                                It was popularized by the movie Tomb Raider, which was filmed there.
                            </li>
                            <li>
                                Ta Keo:
                                <br/>
                                This temple is known for its steep staircases and its impressive views from the top.
                            </li>
                            <li>
                                Bayon in Angkor Thom:
                                <br/>
                                This temple is famous for its many faces carved into the stone, which are thought to represent either the Buddha or the king who built it.
                                This temple is located in the Angkor Thom complex, which was the last capital of the Khmer Empire.
                                Angkor Thom means "Great City" and is surrounded by a large moat, which is larger than the moat surrounding Angkor Wat.
                            </li>
                        </ul>
                        <br />
                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 7 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">
                                        <img 
                                            src={`/images/travel/cambodia/smallcircuit/smallcircuit${index+1}.jpg`} 
                                            alt={`Small Circuit ${index+1}`} 
                                            className="w-full h-full sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/cambodia/smallcircuit/smallcircuit${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionSmallCircuit[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <br /><br />
                        Many of the temples we visited were undergoing restoration, which is a testimant to the importance of these temples for the Cambodian people, but also for their tourism industry.
                        Many of these restoration works are funded by foreign countries.
                        Each temple's restoration is typically funded by a single country, as we saw signs indicating restoration funding from Japan, China, the US, or France.
                        <br /><br />
                        We booked this sunrise small circuit tour through Get Your Guide.
                        All in all, we were happy with the tour, but there were some things that bothered us about it.
                        First of all, we had to be ready to go at our hotel at 4:30 AM to catch the sunrise. However, as the tour consisted of about 12 people, we spent 45 minutes driving around picking people up.
                        We made it in time for the sunrise, but we found this inefficiency a bit frustrating.
                        Secondly, while the tour guide was very friendly and took some nice pictures, he was not very informative and did not provide much historical or cultural context about the temples we were visiting. 
                        <br /><br />

                        <h3 id="angkor-wat-day-2" className="text-2xl font-bold mb-4">Day 2 - Big Circuit</h3>
                        For our second day, we woke up at a more reasonable time and did an afternoon tour of the big circuit.
                        This tour took us to the following sites:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Pre Rup:
                                <br/>
                                This temple is a tall structure which rewards visitors who climb its steps with stunning views.
                            </li>
                            <li>
                                East Mebon:
                                <br/>
                                This temple used to be located on an island in the middle of a large reservoir.
                                Now, the reservoir is dry and the temple can be reached by foot.
                                The temple is known for its many carvings and statues of elephants.
                            </li>
                            <li>
                                Ta Som:
                                <br/>
                                Like Bayon, this temple has many faces carved into the stone.
                            </li>
                            <li>
                                Neak Pean:
                                <br/>
                                This temple is located on an island in the middle of a large reservoir.
                                This reservoir itself was the most impressive part of the temple, and it is a popular spot to take pictures, for tourists but also for locals, who come here for photoshoots for special occasions.
                            </li>
                            <li>
                                Preah Khan:
                                <br/>
                                This temple is mostly a ruin, but is known for its impressive size.
                                This temple was dedicated to the father of the king who built it.
                            </li>
                        </ul>
                        <br /><br />
                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 11 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">
                                        <img 
                                            src={`/images/travel/cambodia/bigcircuit/bigcircuit${index+1}.jpg`} 
                                            alt={`Big Circuit ${index+1}`} 
                                            className="w-full h-full sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/cambodia/bigcircuit/bigcircuit${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionBigCircuit[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <br /><br />
                        We booked the big circuit tour via our hotel, who arranged a tuktuk driver and an English-speaking guide for us.
                        This arrangement was much more efficient and allowed us to be more flexible with our schedule.
                        On the other hand, the guide was not as good a communicator as the one we had for the small circuit.
                        He provided some more historical and cultural context about the temples, but it wasn't always easy to understand him.
                        <br /><br />

                        <h3 id="angkor-wat-tips-and-tricks" className="text-2xl font-bold mb-4">Tips and Tricks for visiting Angkor Wat</h3>
                        Here is a succint list of things we wished we had known before visiting Angkor Wat:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Bring your own lunch: </strong>
                                The restaurants in the Angkor complex are expensive tourist traps serving mediocre food.
                                Bring your own food for a tastier and cheaper meal.
                            </li>
                            <li>
                                <strong>Read in advance</strong> about the <strong>history</strong> of the temples to get more out of your visit as the guides are not always very informative.
                            </li>
                            <li>
                                We would recommend spending at least <strong>three full days</strong> in Siem Reap.
                                If you have only one day, we recommend the small circuit, as it includes Angkor Wat.
                                If you have two days, also include the big circuit.
                                If you have three days, we would recommend mapping out your own route to explore the temples, as the small and big circuits only cover a fraction of the temples in the area.
                            </li>
                            <li>
                                <strong>Start your day early</strong> (or late) to avoid the daytime searing heat.
                                We know how to handle some heat, but the heat at Angkor Wat was difficult for us to handle.
                            </li>
                            <li>
                                If you are doing the sunrise tour, be prepared to leave your hotel very early and to wait around for other people to be picked up.
                                We had to put our alarm clock for 3:45 AM. This early wake-up time had an impact on our enjoyment of the rest of the day, and in hindsight we would have preferred to pay for a <strong>private sunrise tour</strong> to sleep in longer.
                            </li>
                        </ul>
                        <br /><br />


                        <h3 id="angkor-wat-day-3" className="text-2xl font-bold mb-4">Day 3 - Siem Reap</h3>
                        Siem Reap turned out to be a much larger city than we expected, and there are many things to see and do in and around the city.
                        During our stay, we were able to do the following: 
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                The Old Market:<br/>
                                The Old Market is a large market in the center of Siem Reap where you can find all sorts of souvenirs, clothes, and food.
                                We visited this market on our first night to buy some souvenirs, and we quite liked the goods on offer so came back to it a couple evenings later.
                                We also visited the Siem Reap Night Market, which is located just across the river from the Old Market, where we bought some cashmere scarves for our family.
                                <br/>
                                Haggling is an ingrained part of the shopping experience in these markets, and we found that you divide the original asking price by 3 and still expect to close the deal; Especially if you are willing to walk away from the deal.
                            </li>
                            <li>
                                Pub Street:<br/>
                                Pub Street is a lively street in the center of Siem Reap, focused on restaurants, bars, and other nightlife venues.
                                We passed Pub Street on our way to the Old Market, and were surprise by how lively it was.
                                The vibe is comparable to Bui Vien in Ho Chi Minh City or Khaosan Road in Bangkok, but a bit more laid back and less loud.
                                Pub Street is fun to see, but we did not hang out here.
                            </li>
                            <li>
                                Angkor Silk Spa:<br/>
                                We took some time from our schedule to relax and restore our energy at a spa close to our hotel.
                                We had a relaxing experience and can recommend it.<br/>
                                We chose this spa as it was on the same road as our hotel, both of which were located on a road with lots of nightlife venues.
                                Some of these nightlife venues seemed to cater to a more adult audience, which the spa seemed to be very aware of as well.
                                When we entered, we spotted that the lobby was filled with crosses and bibles scattered around, which we believe was the spa's way of signaling to their customers that they were a, let's say, "family-friendly" establishment.
                            </li>
                        </ul>

                        <br /><br />
                        Unfortunately, Francesca fell sick on our third day in Siem Reap, so we were not able to get everything out of our stay in Siem Reap.
                        Some other activities we had planned to do but had to skip were:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Tonlé Sap Lake:<br/>
                                Tonlé Sap is a large lake (the largest freshwater lake in SEA) located to the South of Siem Reap, known for its many floating villages.
                                Being an architect, Francesca had wanted to check out these structures built on the water, but unfortunately we did not get around to it.
                                We have heard from others that the floating villages are quite touristy.
                            </li>
                            <li>
                                Apopo Landmine Museum:<br/>
                                During the Vietnam War, the US military dropped millions of landmines in Cambodia.
                                These landmines continue to plague the local population, causing many casualties every year.
                                You will see many people, mostly beggars, with missing limbs in Cambodia.
                                During our visit to Angkor, we saw groups of amputees playing music and selling souvenirs to tourists, with signs stating that they prefer earning their keep like this rather than resorting to begging.<br/>
                                The Apopo Landmine Museum is a museum dedicated to the history of landmines in Cambodia and the efforts to clear them.
                                The museum focuses on a specific type of landmine-detecting rats, called Apopos, which are trained to sniff out landmines and alert their handlers to their presence.
                            </li>
                            <li>
                                Angkor National Museum:<br/>
                                This museum in Siem Reap can be a good primer before visiting the temples, as it provides a lot of historical and cultural context about the temples in the Angkor complex.
                            </li>
                            <li>
                                Lesser-known temples:<br/>
                                Due to our limited time in Siem Reap, we only had time to see the temples included in the small and big circuits.
                                In hindsight, we wish we had more time to explore some of the hidden temples around.
                                Tourists are allowed to roam the temple complex on their own, and we would've loved to research some hidden temples and go discover them ourselves by bike or on foot.
                            </li>
                        </ul>
                        <br /><br />

                        <h3 id="angkor-wat-hotel-reviews" className="text-2xl font-bold mb-4">Hotel Reviews</h3>
                        
                            <details className="group mb-6 rounded-md">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 id="hotel-1" className="text-1xl font-bold m-0">Sakaban Suite</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <StarScale rating={4} />
                                    </div>
                                </summary>
    
                                <div className="px-4 pb-4 collapsible-body">
                                    <div className="max-w-6xl mx-auto">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                            <div className="flex items-center">
                                                <StarLine rating={9} max={10} title='Staff' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={8} max={10} title='Facilities' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={7} max={10} title='Cleanliness' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={7} max={10} title='Comfort' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={6} max={10} title='Location' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={8} max={10} title='Value for Money' />
                                            </div>
                                        </div>
                                    </div>
    
                                    <p className="mb-6 leading-relaxed mt-2">
                                        We enjoyed our time and Sakaban Suite and recommend it to anyone looking for a comfortable base to explore Angkor.
                                        The staff was especially wonderful, as they were happy to help us out with all our requests.
                                        The hotel has a small swimming pool which allowed us to relax on our off-day.
                                        <br/>
                                        The hotel itself is located on a street filled with nightlife venues which cater to an adult audience.
                                        This wasn't too big of a deal for us, except for the fact that the room which we had booked was located at the street-side of the hotel.
                                        These venues were playing music loudly all night long, which prevented us from getting the sleep that we needed.
                                        After bringing this up to the staff, they were happy to move us to a quieter room, but unfortunately this room was less luxurious than the room which we had booked (and for which we had paid).
                                        <br/>
                                        From the hotel lobby, you can book tuktuks and guided tours to the Angkor complex. 
                                        They also offer other activities like messages and cooking classes.
                                        <br/>
                                        Overall, we believe Sakaban offered great value for money and we enjoyed our little oasis of piece within the busy city of Siem Reap.
                                        <br />
                                        Find it <a href="https://maps.app.goo.gl/3dEpiDsu8KZaWF2D8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                    </p>
                                </div>
                            </details>
                        <br />


                        <h3 id="angkor-wat-food-drink-reviews" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        <CollapsibleReview title="Sakaban Suite Restaurant / Bar" rating={4} scale="food">
                            Upon arrival at the hotel, we took advantage of the happy hour at the hotel bar, which interestingly offered a 3-for-2 deal on cocktails, meaning that Fran got to drink an extra cocktail.
                            Overall it's a very decent bar with a comfortable atmosphere, and we enjoyed our time there.
                            The restaurant at the hotel was also nice, but perhaps a bit overpriced for the quality of the food compared to the other restaurants we tried in Siem Reap.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/Gt5RQPBtKo7bMZxs9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Khmer Taste Restaurant" rating={1} scale="food">
                            We decided to hop in for a quick bite at this restaurant one of our evenings, and we were blown away by the prices on the menu.
                            If memory serves us right, we ordered a national dish (Amok), a desert (mango sticky rice), a cocktail, and a soda for the grand total of $4.
                            This was a steal, and the food was tasty, but we ended up getting some stomach issues the next day, which we suspect were caused by the food we ate at this restaurant.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/1dnCdA4SADchtNuE8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Da Stefano" rating={3} scale="food">
                            After our experience at Khmer Taste, we decided to play it safe and ate at a European restaurant.
                            Da Stefano is an Italian restaurant owned by an Italian chef, Stefano, where we both had a pizza to give our stomach a break from the local cuisine.
                            The pizza didn't taste like authentic Italian pizza, but it was decent and we enjoyed our meal there.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/QRiLPhFEcwUfHVc56" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Chubby Gonzos" rating={3.5} scale="food">
                            We both love Mexican food, and we happened to pass this place while exploring the area.
                            We decided to stop by for a quick taco stop. 
                            The tacos were very decent and we enjoyed our meal there.
                            We ordered all the tacos they had on the menu, but this wasn't a lot of food and it wasn't the best we'd had in SEA.
                            We liked the Birria taco the most and recommend this place if you like Mexican food.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/d9G8ERRnCFX2ht6c7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Sambo Khmer & Thai Restaurant" rating={4.5} scale="food">
                            Thai cuisine is our favourite cuisine, so we were excited to check out this Khmer-Thai restaurant which had good reviews online.
                            We were not disappointed, as we had a delicious meal there, and the atmosphere of the restaurant was very nice as well.
                            The owner is a very friendly and welcoming person, who made a point of having a chat with us and making sure we enjoyed our meal.
                            The prices are a bit higher, but we recommend this place over restaurants like Khmer Taste any day.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/3cz4Dhw6kPohw7br8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Phsar Khmer Food Court" rating={4} scale="food">
                            This food court is located close to the Old Market, and it offers a wide variety of food at reasonable prices.
                            We were annoyed by the token system, which required us to buy tokens at a booth before we could order our food, but the food was nice and the venue is nicely decorated.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/D5P9fEaeVdEXSv5x9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Samroh Srah Srang Restaurant (Angkor Wat lunch 1)" rating={0} scale="food">
                            Our first tour in Angkor Wat took us to this restaurant for lunch. 
                            This restaurant is a classic tourist trap, serving bad food at high prices.
                            We do not recommend.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/T1gCnPtUokjwDfvy9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Neak Pean Restaurant (Angkor Wat lunch 2)" rating={0} scale="food">
                            Our private guide who took us on our second tour in Angkor Wat (Big Circuit) took us to this restaurant for lunch.
                            This restaurant was another classic tourist trap, with the food being downright bad and the prices being very high.
                            We do not recommend this restaurant either.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/nVxRzqYHT5za2Jwy5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Night market" rating={2.5} scale="hotdog">
                            There is a night market straddling the riverside next to the Old Market, where you can find local food stalls for a quick and cheap meal.
                            I had a pancake / crêpe filled with honey, which was tasty but a mess to eat.
                            Overall, this night market was not as memorable as the ones of other South-East Asian cities we have been to, as we did not very welcomed as tourists.
                        </CollapsibleReview>

                        <br />


                        <h2 id="koh-rong" className="text-4xl font-bold mb-4">Koh Rong Islands</h2>

                        After our stay in Siem Reap, we flew into Sihanoukville to visit the Koh Rong Islands.
                        After landing in Sihanoukville, we took a 30min taxi ride to the ferry terminal and then a 45min ferry ride to the islands.
                        <br /><br />

                        <h3 id="koh-rong-island" className="text-2xl font-bold mb-4">Koh Rong</h3>

                        We started our island stay on Koh Rong, which is the more developed and more touristy of the two islands, catering to backpackers.
                        Our ferry docked at Long Set Pier on Long Set Beach, which is a long stretch of beach lined with hostels, bars and restaurants.
                        
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Arrival1.jpg"
                                    alt="The ferry arriving at Koh Rong Long Set Beach"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Arrival1.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The ferry arriving at Koh Rong Long Set Beach</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Arrival2.jpg"
                                    alt="The Long Set Beach"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Arrival2.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Long Set Beach</figcaption>
                            </figure>
                        </div><br/>

                        We stayed at Onederz Koh Rong, and were greeted to their Full Moon Party celebrations the evening of our arrival.
                        We enjoyed the party, which was a great setting to meet other travelers and kick off our island stay.
                        There were some fun activities like a fire show which merged into a fire limbo session.

                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Arrival3.jpg"
                                    alt="Our first drinks on Koh Rong"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Arrival3.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Our first drinks on Koh Rong</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Limbo.jpg"
                                    alt="Limbo at the Full Moon Party at Onederz"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Limbo.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Limbo at the Full Moon Party at Onederz</figcaption>
                            </figure>
                        </div>
                        <br /><br />
                        We spent our first day taking it slow. 
                        We enjoyed breakfast on the beach at our hotel bar, where we spent some time ordering coffees and juices which later turned into cocktails.
                        We also walked up and down Long Set Beach a bit, stopping for lunch at Phorn's bar.
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Breakfast.jpg"
                                    alt="Breakfast"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Breakfast.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Breakfast on the beach at Onederz</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Lunch.jpg"
                                    alt="Lunch at Phorn's bar"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Lunch.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Lunch at Phorn's bar</figcaption>
                            </figure>
                        </div><br/>
                        A highlight of Koh Rong is the weekly Nestival that takes place at the Nest hostel.
                        This event start in the early afternoon with some "beach olympics", which are a series of games and challenges that take place on the beach, like a tug of war, a beach volleyball tournament, and a sack race.
                        As the day progresses, the music is turned up and the party gets going, with two stages with DJs.
                        The Nestival is a very fun event if you are a backpacker who's into meeting other travelers and partying.<br/>
                        If you're walking to the Nest from Onederz, you will have to wade through a small river inlet, which is very shallow at low tide but can be a bit more challenging at high tide.
                        There is a rope you can hold on to to help you cross.
                        We did not find this an issue and actually enjoyed the little adventure, but we've heard from some other people that they found this crossing a bit scary, especially at the dark of night. 
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Nestival.jpg"
                                    alt="Nestival"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Nestival.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Nestival afternoon beach olympics</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/Nestival2.jpg"
                                    alt="Nestival party"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/Nestival2.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">One of the stages at the Nestival</figcaption>
                            </figure>
                        </div><br/>
                        The hotel organizes a boat trip to explore the waters around the two Koh Rong islands.
                        The tour starts with a snorkling session at an area where you can see some fish, but nothing that blew us away honestly.
                        Then, the organizers gave us some make-shift fishing equipment for a fishing session.
                        Before the trip, we thought that we might skip this part of the tour, but it ended up being a lot of fun.
                        The people who were able to catch a fish got to keep it and have it cooked for the BBQ dinner.
                        Francesca caught a fish and was very happy with her catch, but she wasn't as happy with eating it for dinner, so Florian ate it in her stead.
                        For sunset, the boat moored at M'Pai Bay on Koh Rong Sanloem. 
                        We walked a short distance up onto the viewpoint opposite Thmorda Resort, where were trated to a stunning sunset view over the ocean.
                        On our way back to Koh Rong, the organizers turned on some music and we had a fun little dance party on the boat.
                        Later, they turned off the lights on the boat and encouraged us to take a plunge in the ocean for a night swim.
                        The water there is filled with bioluminescent plankton, which light up when you move in the water.
                        The lights they emit are rather faint, but it was a fun and magical experience nonetheless.
                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/SanloemSunset1.jpg"
                                    alt="Sanloem Sunset"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/SanloemSunset1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/SanloemSunset2.jpg"
                                    alt="Sanloem Sunset"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/SanloemSunset2.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/SanloemSunset3.jpg"
                                    alt="Sanloem Sunset"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/SanloemSunset3.jpg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Enjoying a drink while watching the sunset at M'Pai Bay</figcaption>
                        <br/>
                        Overall, we really enjoyed our time on Koh Rong.
                        The island has a very laid back pace, while still having enough on offer for young travelers to have fun and meet other people.
                        Go to Koh Rong if you're looking to mingle with other young, like-minded backpackers.
                        Below are a couple more pictures from our stay on Koh Rong, in no particular order.
                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/DinnerOnTheBeach.JPG"
                                    alt="Dinner on the Beach"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/DinnerOnTheBeach.JPG')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Enjoying dinner and drinks at the beach</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/SunsetBeach.jpg"
                                    alt="Sunset at the Beach"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/SunsetBeach.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Sunset fading over the water</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/kohrong/BeachByNight.jpg"
                                    alt="Beach by Night"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/kohrong/BeachByNight.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The beach after nightfall</figcaption>
                            </figure>
                        </div>
                        <br/>
                        Throughout these adventures, Francesca had occasional flare-ups of the stomach issues she contracted in Siem Reap.
                        These became particularly bad on our last night, which, combined with the fact that the weather report wasn't favorable for ferry rides the next day, made us decide to stay on Koh Rong for an extra night.
                        On this additional day, Francesca visited the Koh Rong Clinic and Pharmacy, where she got treated for her disease.
                        She was hooked up to an IV and given a plethora of medications.
                        The doctor was shocked to hear she had been dealing with this for a week, saying most tourists come in with these symptoms after just a few days.
                        We were very grateful for the doctor's help, with the treatment working well and allowing Francesca to enjoy the rest of her stay.
                        However, due to the limited medical facilities on the island, the doctor charged about $500 for the consultation and treatment, which is a hefty sum for European standards of healthcare.
                        <br /><br />
                        We tried to extend our stay at Onederz, but were informed that they were fully booked that night.
                        We moved to the hotel next door, Scarlet Sails, who put us in an uncomfortable room with mold stains.
                        You can find our full review of this hotel below, but suffice it to say that we do not recommend it.
                        <br /><br />
                        After our stay at Scarlet Sails, we boarded the ferry to Koh Rong Sanloem.

                        <br /><br />
                        <h3 id="koh-rong-sanloem" className="text-2xl font-bold mb-4">Koh Rong Sanloem</h3>
                        Koh Rong Sanloem is the quieter and less developed of the two islands.
                        It does not cater to backpackers as much as Koh Rong, and it has a more laid back and romantic vibe.
                        We booked our stay at Island Center Point on Saracen Bay Beach.
                        This is a more upscale hotel, as this would be our romantic getaway on this trip, and we had a wonderful stay there.
                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/cambodia/sanloem/Postcard.JPG"}
                                alt="Sanloem"
                                className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/cambodia/sanloem/Postcard.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Koh Rong Sanloem</figcaption>
                        </figure>
                        <br/>
                        The arrival was a bit rocky:
                        The ferry ride was quite rough, which made Francesca's stomach issues worse.
                        Upon docking at the pier, the hotel staff was awaiting us to take us to the hotel.
                        They had a special contraption, consisting of a car engine, some wheels, and a wooden platform to sit on, which they used to transport our luggage from the pier to the hotel.
                        This wasn't the most comfortable ride, given the unpaved and bumpy road, but we made it to the hotel in one piece.
                        Florian quite liked this little adventure, but Francesca not so much.
                        <br/><br/>
                        Upon arrival at the hotel, we were greeted by the staff with a welcome drink and a refreshing towel.
                        They showed us to our room, and we almost immediately decided to extend our stay by two more nights.
                        After the rough stay at Scarlet Sails and with our stomach issues, we were ready for a couple of days of dolce far niente.
                        They had prepared the room with some romantic touches, like rose petals on the bed and the bath, which immediately showed us the attention to detail that the staff put into making us enjoy our stay.
                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/ArrivalRoad.jpg"
                                    alt="Arrival Road"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/ArrivalRoad.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The road from the pier to the hotel</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/ArrivalBed.jpg"
                                    alt="Arrival Bed"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/ArrivalBed.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Our room at the hotel</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/ArrivalBath.jpg"
                                    alt="Arrival Bath"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/ArrivalBath.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The bath on the terrace of our room</figcaption>
                            </figure>
                        </div>
                        <br/>
                        We spent our days on Koh Rong Sanloem relaxing by the beach, SUPing in the calm waters of Saracen Bay, and walking up and down the beach.
                        This was a wonderful opportunity to slow down from the fast pace of travel and a time to enjoy each other's company.
                        <br /><br />
                        The hotel is located on Saracen Bay Beach, a long beach lined with a host of accomodations in a range of price points, ranging from backpacker hostels to more fancy hotels.
                        We walked up and down the beach a couple of times; This walk can be challenging during high tide, as the water can rise up to knee level in some areas.
                        There are some undeveloped areas, as well as areas where development seemed to have halted halfway, but it is a pleasant walk nonetheless.
                        We walked as far as Coco restaurant on one end of the beach, a pleasant family-owned restaurant,
                        and as far as Onederz Koh Rong Sanloem on the other side of the beach.
                        We really enjoyed the vibe at Onederz on Koh Rong, but the vibe at the Sanloem location was not the same.
                        We found the audience here to be less sociable and lively. 
                        It's hard to pinpoint why exactly, but I suppose the hostel doesn't organize as many activities and the travellers here focus more on relaxation and less on partying.
                        <br /><br />
                        Next to accomodation options, the beach also has some restaurants and bars, and most accomodations have their own restaurant and bar as well.
                        This collection of beachfront venues creates a nice atmosphere on the beach and provides you with some options,
                        but after a couple days you will start to realize they all offer the same options on their menus,
                        so the cuisine on the island will grow somewhat stale after a couple of days.
                        This is more than made up for by the impeccable vibe on the beach.
                        Overall, Saracen Bay Beach is an excellent place to spend a couple of days doing nothing except sunbathing, swimming, eating, drinking, spending time with your loved ones, or meeting interesting strangers.
                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/BeachVibes1.jpg"
                                    alt="Beach Vibes 1"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/BeachVibes1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/BeachVibes2.JPG"
                                    alt="Beach Vibes 2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/BeachVibes2.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/BeachVibes3.JPG"
                                    alt="Beach Vibes 3"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/BeachVibes3.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Saracen Bay Beach</figcaption>
                        <br/>
                        We were particularly fond of the part of the beach in front of our hotel.
                        The hotal provides some sunbeds for their guests, and we spent many, many hours reading, chatting, napping, sunbathing, and drinking cocktails here.
                        At some point, we became fully convinced that time flows differently on this island, as each day flew by, even though we spent the entire afternoon on these sunbeds.
                        <br /><br />
                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 6 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">
                                        <img 
                                            src={`/images/travel/cambodia/sanloemcabane/Cabane${index+1}.JPG`} 
                                            alt={`Cabane ${index+1}`} 
                                            className="w-full h-full sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/cambodia/sanloemcabane/Cabane${index+1}.JPG`)}/>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <figcaption className="text-center text-sm text-gray-600">The sunbeds on the beach of Island Center Point</figcaption>
                        <br /><br />
                        As mentioned earlier, Island Center Point went above and beyond to provide us with an unforgettable stay on the island.
                        After informing them we chose their hotel for our romantic getaway, they sent us a quote for a romantic dinner on the beach package.
                        They sent us a six-course menu and informed us it would cost $95.
                        At first, we assumed this was per person. 
                        We were of the opinion that we didn't need expensive things to enjoy ourselves, so we decided to refuse this offer.
                        Upon arrival, they had suggestively left the menu in our room.
                        After checking the menu again, we realized that the $95 was actually covering the whole package.
                        (The menu mentioned a single complementary wine bottle; we realized a bottle per person would be excessive.)
                        We called the front desk to book the dinner, but before we could confirm they already offered a reduced price of $85 for the whole package.
                        <br/>
                        The romantic beachfront dinner was a wonderful experience.
                        The staff set up a private table for us on the beach, encapsuled by a wooden structure lavished with sheets, and the table was decorated with candles and sea shells.
                        The food was delicious, and there was a member of the staff dedicated to our table for the night, which once again made us feel like the hotel went out of their way to make our stay memorable.
                        Though they had arranged an amazing experience, we noticed they didn't have extensive experience in Western fine dining in a couple of little oddities.
                        For example, they prepared six courses for us, but each course was the size of a decent standalone meal.
                        As each course was delicious, we ended up needing to be rolled off the beach at the end of our dinner!
                        Furthermore, our dedicated waitress took away our plates the moment we finished it and wasted no time bringing the next course,
                        which further added to the feeling we were stuffing ourselves!
                        <br />
                        Halfway through our meal, a fire show started on the beach in front of the neighbouring accomodation.
                        This made our experience even more magical.
                        This dinner was a highlight on our two-month trip through SEA.
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/DinnerBeach1.jpg"
                                    alt="Dinner on the beach"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/DinnerBeach1.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The table that was constructed especially for our dinner</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/cambodia/sanloem/DinnerBeach2.jpg"
                                    alt="Dinner on the beach"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/cambodia/sanloem/DinnerBeach2.jpg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The fire show during our dinner (during our main course)</figcaption>
                            </figure>
                        </div><br/>
                        LITTLE STORY ABOUT MY HEALTH ADVENTURE
                        <div/><div/>
                        All good things must come to end, and the same applies to our time on our little paradise.
                        We had booked an early morning flight out of Sihanoukville to start the next chapter of our trip.
                        As the ferries cannot be relied on for a timely transport (as their departure times are influenced by weather conditions),
                        we decided to stay one night on the mainland at Sihanoukville as a cautious buffer.
                        <br/>
                        Sihanoukville did not strike us as a particularly pleasant city.
                        The area around the ferry port is rather dirty and busy with loud traffic, which did not give us a good impression of the city.
                        We booked a room at Onederz Sihanoukville, as we were quite happy with our stay at Koh Rong.
                        This hostel was walking distance from the ferry port, but the walk there was rather unpleasant because of the aforementioned dirtiness, as well as the overbearing humid heat.
                        We had low hopes for the hostel, but were pleasantly surprised, as overall the hostel was a tidy place with a nice restaurant and pool area.
                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/cambodia/sanloem/Sihanoukville.jpg"}
                                alt="Sihanoukville"
                                className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/cambodia/sanloem/Sihanoukville.jpg")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">The view from our room at Onederz Sihanoukville</figcaption>
                        </figure>
                        <br/>
                        We arrived in the afternoon and spent our day sunbathing by the pool and later on playing card games in the restaurant area.
                        We were informed by the television in this area that a war had broken out between Thailand and Cambodia,
                        so we thought it was a good moment to start the next leg of our journey.
                        <br/><br/>

                        <h3 id="koh-rong-hotel-reviews" className="text-2xl font-bold mb-4">Hotel Reviews</h3>
                            <details className="group mb-6 rounded-md">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 id="hotel-1" className="text-1xl font-bold m-0">Onederz Koh Rong</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <StarScale rating={4} />
                                    </div>
                                </summary>
    
                                <div className="px-4 pb-4 collapsible-body">
                                    <div className="max-w-6xl mx-auto">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                            <div className="flex items-center">
                                                <StarLine rating={7} max={10} title='Staff' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={7} max={10} title='Facilities' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={7} max={10} title='Cleanliness' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={5} max={10} title='Comfort' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={9} max={10} title='Location' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={8} max={10} title='Value for Money' />
                                            </div>
                                        </div>
                                    </div>
    
                                    <p className="mb-6 leading-relaxed mt-2">
                                        Onederz on Koh Rong island is located on Long Set Beach and has everything you need to enjoy a relaxed beach stay on the island.
                                        It's a hostel so it is not the most luxurious place, but we did not have any major issues with hygiene or comfort.
                                        The hostel is aimed at backpackers, which results in a very young and lively set of guests.
                                        <br/>
                                        The hostel has five buildings containing either shared dorms or private rooms (we got a private room), an area for beach volleyball, and a restaurant / bar area that merges into the beach.
                                        We really enjoyed being able to have breakfast and drinks on the beach.
                                        The drinks were very nice and the food was decent, though not the most exciting if you're staying for a long time. 
                                        Overall, the staff were friendly but we had some issues with the service, e.g. waiting a long time or them not taking into account Francesca's dietary restrictions.
                                        <br/>
                                        The hostel organizes a couple of fun activities, such as a weekly Full Moon Party, which attracts visitors from all over the beach for drinks, dancing, and a fire show.
                                        You can also book a boat trip to explore the waters around the island, which includes some snorkeling and some fishing.
                                        <br/>
                                        If you are looking for a social beach getaway, you cannot go wrong with Onederz on Koh Rong.
                                        <br />
                                        Find it <a href="https://maps.app.goo.gl/w4ecHisjcCiCTxLb9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                    </p>
                                </div>
                            </details>

                            <details className="group mb-6 rounded-md">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 id="hotel-1" className="text-1xl font-bold m-0">Scarlet Sails Resort</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <StarScale rating={0} />
                                    </div>
                                </summary>
    
                                <div className="px-4 pb-4 collapsible-body">
                                    <div className="max-w-6xl mx-auto">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                            <div className="flex items-center">
                                                <StarLine rating={5} max={10} title='Staff' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={5} max={10} title='Facilities' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={0} max={10} title='Cleanliness' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={0} max={10} title='Comfort' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={9} max={10} title='Location' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={2} max={10} title='Value for Money' />
                                            </div>
                                        </div>
                                    </div>
    
                                    <p className="mb-6 leading-relaxed mt-2">
                                        We extended our stay on Koh Rong for one night, as the weather and Francesca's health did not allow us to take the ferry to Koh Rong Sanloem.
                                        Onederz was fully booked for the night, so we decided to stay at the hotel next door, Scarlet Sails Resort.
                                        Oh boy, did we dislike this place.
                                        <br/>
                                        Upon arrival, we waited for a long time to check in, as the staff was not responsive, even though there was only one other couple checking in at the same time.
                                        We had booked a bungalow, and were put in a room with stains on the wall, holes in the floor, and a strong moldy smell in the bathroom.
                                        The room's sliding doors did not shut fully, leaving ample space for insects to enter the room.
                                        Suffice it to say we did not at all feel comfortable in this room.
                                        <br/>
                                        The hotel's breakfast was also not good.
                                        The breakfast is a buffet, but the food did not seem fresh.
                                        The lady making some omelettes on demand also did not seem to particularly care about hygiene.
                                        <br/>
                                        Upon checkout, we voiced our disapproval of the room's condition to the staff, who responded by letting us know that half of the bungalows had been renovated recently and that we should ask for one of those next time.
                                        Under no circumstances will we ever consider staying at this hotel again though, and we do not recommend it to anyone.
                                        <br />
                                        Find it <a href="https://maps.app.goo.gl/1F2uVuKhSdrZn455A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                    </p>
                                </div>
                            </details>

                            <details className="group mb-6 rounded-md">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 id="hotel-1" className="text-1xl font-bold m-0">Island Center Point</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <StarScale rating={5} />
                                    </div>
                                </summary>
    
                                <div className="px-4 pb-4 collapsible-body">
                                    <div className="max-w-6xl mx-auto">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                            <div className="flex items-center">
                                                <StarLine rating={10} max={10} title='Staff' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={7} max={10} title='Facilities' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={10} max={10} title='Cleanliness' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={10} max={10} title='Comfort' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={8} max={10} title='Location' />
                                            </div>
                                            <div className="flex items-center">
                                                <StarLine rating={10} max={10} title='Value for Money' />
                                            </div>
                                        </div>
                                    </div>
    
                                    <p className="mb-6 leading-relaxed mt-2">
                                        At this point, you might think this journal is paid promotion for this hotel, but we really were very happy with our stay here. Whether it was by decorating the room with rose petals, providing us with a complementary cake, or offering the romantic beachside dinner, the hotel went out of our way to make our stay memorable.
                                        <br/>
                                        TO COMPLETE
                                        <br />
                                        Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                    </p>
                                </div>
                            </details>

                        <br /><br />
                        <h3 id="koh-rong-food-drink-reviews" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <h3 id="koh-rong-food-drink-reviews" className="text-xl font-bold mb-4">Koh Rong</h3>
                        
                        <CollapsibleReview title="Onederz Hostel Restaurant and Bar" rating={3} scale="food">
                            Waking up for a coffee and some breakfast right on the beach was a great joy for us.
                            The hostel bar and restaurant has a nice atmosphere, throughout morning, afternoon, and evening.
                            The food was decent, though not the most exciting, and the drinks were very nice.
                            After some time, we found that the food selection got a bit monotone, but we enjoyed our meals there overall.
                            <br/>
                            The staff is friendly, though not all members of the staff were very attentive, as we had some issues with items being forgotten or with dietary restrictions not being taken into account.
                            Overall it is an amazing place to have a meal or a drink at the beach, just be sure to expect hostel-level food and service.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Phorn's Rock & Raggae Bar" rating={3.5} scale="food">
                            This bar is located a litle up Long Set Beach from Onederz and serves SEA food.
                            The place is decked out in a raggae theme, with some Jamaican flags and posters, and some raggae music playing in the background.
                            This bar is located on a quieter part of the beach, with some chairs and picknick tables set up on the sand.
                            <br/>
                            We enjoyed our meal here and can recommend this for a low-key meal on the beach.
                            We had ordered a curry without green beans (as Francesca is allergic to these), but the curry came with green beans unfortunately.
                            After bringing this to the staff's attention, they made a new curry without green beans for us.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Happyplace" rating={4.5} scale="food">
                            We stumbled upon this place after finding the restaurant we wanted to eat at had closed for the day.
                            We were a bit sceptical about this place at first, as they offered a weird mix of Italian and SEA food, but we ended up really enjoying our meal there.
                            The person serving us was very friendly and welcoming, and very understanding of Francesca's dietary restrictions, which was a relief after some of the other places we had been to.
                            <br/>
                            The food was delicious, and the cocktails were very nice as well. We felt so at ease at this place that we ate there twice during our stay on the island.
                            <br/>
                            We ordered a chicken mango cashew nut stir fry, which was surprisingly delicious as we hadn't tasted this combination before.
                            We also had a pasta dish (the arrabiata) and a pizza (as there was a pizza deal of the day), which were both very good as well, though we recommend going for the SEA cuisine over the Italian dishes.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="La Cocina Mexican Restaurant" rating={4} scale="food">
                            We had the best Mexican of our lives in Luang Prabang, so we were curious to try out some more Mexican restaurants in SEA.
                            We found this Mexican restaurant on Google and decided to give it a try.
                            We were not disappointed, as we had a tasty meal there.
                            The staff was very friendly as well, we can recommend this place if you're craving some Mexican food on the island.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Nest Beach Club" rating={4} scale="drink">
                            The Nest Beach Club hosts the weekly Nestival.
                            During the Nestival, there are two bars serving drinks, some stands offering some festival foods like burgers and pizza slices, as well as some stands selling local crafts and souvenirs.
                            We experienced this hostel bar during the Nestival event and can recommend it for a fun time partying and socializing with other travelers, if that's what you're looking for in your beach island stay.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <h3 id="koh-rong-food-drink-reviews" className="text-xl font-bold mb-4">Koh Rong Sanloem</h3>

                        <CollapsibleReview title="Coco Restaurant" rating={4} scale="drink">
                            This is a little restaurant at the Western side of the beach.
                            We ate here on our first evening on the island and returned a second time as we quite liked it here.
                            The restaurant seems to be managed by a family, as one of our dishes was brought out of the kitchen by a toddler who was happy to mimic her mother at her job.
                            The food was up to standard and the spot had a local, laid-back vibe, so we would recommend this place for anyone looking for a restaurant with a price tag in between the higher end restaurants at the resorts and the lower end pubs at the hostels on the beach.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Lucky Sun" rating={3.5} scale="drink">
                            We ate lunch once and dinner another day at the resaurant at this hostel.
                            We enjoyed the food here, though it was rather simple SEA food like curries, and some Western classics like burgers as well.
                            We're adding some extra points to our rating here because of the eccentric Australian bloke working here, who was excuberantly singing inbetween serving tables and flirted violently with Florian, which charmed both of us.
                            The subtracting an equal amount of points because of the dreary state of the toilets; We recommend using the toilets of the restaurant nextdoor instead.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="The Big Easy" rating={3.5} scale="drink">
                            There are three hostels with their own bar and restaurant next to each other here, and to be honest they are all pretty interchangeable.
                            The Big Easy has a cleaner, blue look with some nice tables inside and on the beach at low tide.
                            We had lunch indoor here during a small rain, and we enjoyed the food and vibe here.
                            A pretty run-of-the-mill backpacker hostel restaurant in SEA.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Sweet Times" rating={3.5} scale="drink">
                            The third in the row of hostel restaurants on this stretch of the beach.
                            It has a similar vibe and menu to Lucky Sun and The Big Easy, we even suspect they might share a common kitchen.
                            We liked our food here too, as well as the backpacker hostel restaurant vibe.
                            We had lunch here and dinner another day, when there was a BBQ burning on the beach.
                            The BBQ surf-and-turf deal was a nice dinner at a very fair price.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <CollapsibleReview title="Onederz Koh Rong Sanloem Bar & Restaurant" rating={2.5} scale="drink">
                            We wanted to check out the bar and restaurant of this Onederz branch, as we really liked the one on Koh Rong, but we were not impressed by this location. There was no social vibe in the bar area, with many people reading or scrolling on their phone. It also looked like the hostel was not organizing any activities here. We had an enjoyable meal here, but decided not to return as we found other parts of the beach to be more lively.
                            <br />
                            Find it <a href="xxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>

                        <br /><br />

                    </main>

                    <aside className="hidden md:block md:col-span-1">
                        
                        <nav aria-label="Table of contents" className="sticky top-8 self-start bg-white/90 dark:bg-gray-900/80 text-right p-4 hover:scale-105 transition-transform duration-300 overflow-auto">
                            <h3 className="text-lg font-semibold mb-3">Contents</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <a href="#our-journey" onClick={(e) => handleTocClick(e, 'our-journey')} className="block w-full text-left pl-20 font-bold hover:underline">Our Journey</a>
                                </li>
                                <li>
                                    <a href="#angkor-wat" onClick={(e) => handleTocClick(e, 'angkor-wat')} className="block w-full text-left pl-20 font-bold hover:underline">Angkor Wat</a>
                                </li>
                                    <li>
                                        <a href="#angkor-wat-history" onClick={(e) => handleTocClick(e, 'angkor-wat-history')} className="block w-full text-right hover:underline">Background & History</a>
                                    </li>
                                    <li>
                                        <a href="#angkor-wat-complex" onClick={(e) => handleTocClick(e, 'angkor-wat-complex')} className="block w-full text-right hover:underline">Angkor Wat</a>
                                    </li>
                                    <li>
                                        <a href="#angkor-wat-day-3" onClick={(e) => handleTocClick(e, 'angkor-wat-day-3')} className="block w-full text-right hover:underline">Siem Reap</a>
                                    </li>
                                    <li>
                                        <a href="#angkor-wat-hotel-reviews" onClick={(e) => handleTocClick(e, 'angkor-wat-hotel-reviews')} className="block w-full text-right hover:underline">Hotel Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#angkor-wat-food-drink-reviews" onClick={(e) => handleTocClick(e, 'angkor-wat-food-drink-reviews')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
                                    </li>
                                <li>
                                    <a href="#koh-rong" onClick={(e) => handleTocClick(e, 'koh-rong')} className="block w-full text-left pl-20 font-bold hover:underline">Koh Rong Islands</a>
                                </li>
                                    <li>
                                        <a href="#koh-rong-island" onClick={(e) => handleTocClick(e, 'koh-rong-island')} className="block w-full text-right hover:underline">Koh Rong</a>
                                    </li>
                                    <li>
                                        <a href="#koh-rong-sanloem" onClick={(e) => handleTocClick(e, 'koh-rong-sanloem')} className="block w-full text-right hover:underline">Koh Rong Sanloem</a>
                                    </li>
                                    <li>
                                        <a href="#koh-rong-hotel-reviews" onClick={(e) => handleTocClick(e, 'koh-rong-hotel-reviews')} className="block w-full text-right hover:underline">Hotel Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#koh-rong-food-drink-reviews" onClick={(e) => handleTocClick(e, 'koh-rong-food-drink-reviews')} className="block w-full text-right hover:underline">Food & Drinks Reviews</a>
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