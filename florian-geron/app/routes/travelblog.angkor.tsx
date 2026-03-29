import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

import { MapIcon, MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";

import AnimatedWave from "~/components/AnimatedWave";

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

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

                        <h3 id="angkor-wat-our-experience" className="text-2xl font-bold mb-4">Day 1 - Small Circuit</h3>
                        For our first day at Angkor Wat, we woke up at 3:45 AM to catch the sunrise at Angkor Wat.
                        The sunrise at Angkor Wat is a must-see experience. There were many visitors, but as the site is so large, it did not feel too overcrowded.
                        <br /><br />

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 7 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-0">
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
                                        <CardContent className="flex aspect-square items-center justify-center p-0">
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

                        <h3 id="angkor-wat-our-experience" className="text-2xl font-bold mb-4">Day 2 - Big Circuit</h3>
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
                                        <CardContent className="flex aspect-square items-center justify-center p-0">
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

                        <h3 id="siem-reap" className="text-2xl font-bold mb-4">Day 3 - Bonus Day! (What else to do in Siem Reap)</h3>
                        xx
                        <br /><br />


                        <h2 id="koh-rong" className="text-4xl font-bold mb-4">Koh Rong Islands</h2>


                        <h2 id="hotel-reviews" className="text-4xl font-bold mb-4">Hotel Reviews</h2>


                        <h2 id="food-drink-reviews" className="text-4xl font-bold mb-4">Food & Drinks Reviews</h2>

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
                                    <a href="#koh-rong" onClick={(e) => handleTocClick(e, 'koh-rong')} className="block w-full text-right hover:underline">Koh Rong Islands</a>
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