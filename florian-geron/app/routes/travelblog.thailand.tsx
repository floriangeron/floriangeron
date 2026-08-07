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

    // Captions for the carousel images
    const imgCaptionTemples = [
        "Wat Si Soda",
        "Wat Si Soda",
        "Wat Si Soda",
        "Wat Pha Lat",
        "Wat Pha Lat",
        "Wat Pha Lat",
        "Wat Pha Lat",
        "Wat Phra That Doi Suthep",
        "Wat Phra That Doi Suthep",
    ]; 

    const imgCaptionTemples2 = [
        "Wat Lok Molee",
        "Bridge crossing the moat into the city",
        "Wat Rajamontean",
        "Wat Rajamontean",
        "Wat Phra Singh Waramahavihan",
        "Wat Phra Singh Waramahavihan",
        "Wat Phra Singh Waramahavihan",
        "Wat Chiang Man",
    ]; 

    const imgCaptionHike1 = [
        "Passing through a village road",
        "through the rice fields",
        "past dangerous cliffs",
        "and more rice fields",
        "our guide Tiger leading the charge",
        "taking in the views",
        "taking a rest",
        "up the mountain",
        "Sam overlooking our homestay village",
        "Tiger and John on top of the world",
    ]; 

    const imgCaptionHikeVillage = [
        "Entering our homestay village",
        "Thai mountain village",
        "Thai mountain village",
        "Thai mountain village",
        "Enjoying John's amazing massaman curry",
        "Dancing with the locals",
    ]; 

    const imgCaptionHike2 = [
        "Starting our second day",
        "through the jungle",
        "past the rice fields",
        "past dangerous cliffs",
        "taking a rest",
        "through the river",
        "photoshoot under the waterfall",
        "the views on our way home",
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
                    src="/images/travel/thailand/Thailand.JPG"
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
                        I personally divide the country into three main regions: the north where you will find the mountains, jungles, and temple complexes; the south where you will find beautiful islands and beaches; and the capital Bangkok, a huge city with towering skyscrapers, truly one of the great cities of the world.
                        <br/><br/> 
                        Here are a couple of tips for visiting the country:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Currency: </strong>Thailand's currency is the Thai Baht (THB). We did not carry any cash when flying into the country, which doesn't really cause an issue as we were able to pay for the things we needed upon arrival (Grab, e-SIM, etc.) with our credit cards. I would strongly recommend getting a <strong>Revolut</strong> card or similar, as this made paying in Baht very easy. After arriving in the city center, we got some cash out of the ATMs for small purchases at restaurants and local markets.
                            </li>
                            <li>
                                <strong>Logistics: </strong>Like in the rest of Southeast Asia, <strong>Grab</strong> is king when it comes to getting around short distances. Grab also offers other services like food delivery. Next to cars, Grab also offers motorbike taxis, which are a fast and exhilarating way to get around. For longer distances with ferries, trains, and flights, <strong>12GoAsia</strong> is the go-to platform for booking tickets.
                            </li>
                            <li>
                                <strong>e-SIM: </strong>Getting an e-SIM has never been easier thanks to apps like Saily, Nomad, and Revolut. We installed the e-SIM before arriving and can highly recommend doing this as it's a convenient way to stay connected while traveling.
                            </li>
                            <li>
                                <strong>Weather: </strong>The best time to visit is during the dry season, from November to April. We went in November and had mostly great weather throughout the trip.
                            </li>
                            <li>
                                <strong>Vaccinations: </strong>Make sure to check the latest vaccination recommendations for Thailand, as they can change over time. When we went, it was recommended to have vaccinations for Hepatitis A and B, Typhoid, and Tetanus. As I stayed in Southeast Asia for a longer period, I also had vaccinations for Japanese Encephalitis and Rabies, but these are not typically necessary for a short trip to Thailand.
                            </li>
                        </ul>
                        <br /><br />
                        <h3 id="the-crew" className="text-2xl font-bold mb-4">The crew</h3>
                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                <CarouselItem key={1} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Seba1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Seba2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Seba
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                Everyone's favorite smile.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem key={2} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/William1.jpeg`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/William2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                William
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                The bard of the group, singing tales of love and adventure.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem key={3} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Dieter1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Dieter2.jpeg`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Dieter
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                The lucky one.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>   
                                <CarouselItem key={4} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Emile1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Emile2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Emile
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                The daredevil. Photographer extraordinaire. Crazy K. 
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>       
                                <CarouselItem key={5} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Jasper1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Jasper2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Jasper
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                Friends with humans and animals alike.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem key={6} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full ">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Vincent1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Vincent2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Vincent
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                The fashionista. 
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem key={7} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Sam1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Sam2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Sam
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                His laugh can be heard from across the country. 
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>  
                                <CarouselItem key={8} className="basis-[80%] pl-1 lg:basis-[45%] min-w-0 shrink-0 w-full max-w-full">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="p-0 overflow-hidden h-full flex flex-col w-full max-w-full min-w-0">
                                        <img 
                                            src={`/images/travel/thailand/crew/Florian1.JPG`} 
                                            alt={`Thailand`} 
                                            className="w-full h-[24rem] sm:h-[28rem] md:h-[40rem] object-cover rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/crew/Florian2.JPG`)}/>
                                            <div className="px-4 pt-3 pb-3 min-h-[8.5rem] flex flex-col overflow-hidden min-w-0 max-w-full">
                                                <p className="pb-1 text-base sm:text-lg text-gray-700 font-bold text-center break-words min-w-0">
                                                Florian
                                                </p>
                                                <p className="pt-1 text-sm sm:text-base text-gray-700 break-words min-w-0">
                                                Only got sick three times!
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>                        
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <br/><br/>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        With only two weeks, building our itinerary was a challenge. The question was whether to follow a more completionist approach and try to see as much of the country as possible, or to focus on a few places and take a more relaxed approach. After some calls and discussions, we decided to have a more completionist itinerary, as many people weren't sure they would go back to Thailand anytime soon. <br/><br/>
                        We took a flight from Brussels to Bangkok (via Qatar), and immediately took a domestic flight north to Chiang Mai. In this area, we spent one night in Chiang Mai and three nights in Pai. We then took another domestic flight south to Phuket. We spent three nights in Phuket, and then took a ferry to Koh Phi Phi, where we spent one night. We then took a ferry to Ao Nang, where we spent another night. From there, we took a minivan to Khao Sok, where we spent three nights. Initially, we were planning to stay here two nights and take the night train back to Bangkok, but this train was cancelled last minute due to a natural disaster, so we had to stay in the area another night and take a flight to Bangkok the next day. We spent the last three nights of our trip in Bangkok.<br/><br/>
                        <figure>
                            <img
                                src={"/images/travel/thailand/ThailandRoute.png"}
                                alt="Route we traveled"
                                className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/ThailandRoute.png")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Route we traveled — Thailand</figcaption>
                        </figure><br/>
                        In hindsight, I would have preferred a more relaxed itinerary, as we spent a lot of time traveling. This is fun to do when traveling with friends, but I do think we missed some of the slow travel experience that would have been typical of relaxed places like Pai and the islands. That being said, many of my friends said they wouldn't have wanted it any other way, as we got to see a lot of the country in a short time. 
                        <br/><br/>
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        <div className="mb-6 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Gulf of Thailand:
                                    <br/>
                                    When discussing our itinerary, we had to choose between the Gulf of Thailand and the Andaman Sea. Our decision mainly hinged on the weather forecasts of the two regions during the time of year we were visiting.<br/>
                                    The Gulf of Thailand is known for its islands like Koh Samui, Koh Pha Ngan, and Koh Tao. These islands are known for their beautiful beaches and vibrant nightlife. The Full Moon Parties in Koh Pha Ngan are particularly infamous.
                                </li>
                                <li>
                                    Ayutthaya:
                                    <br/>
                                    Ayutthaya is a historical city located north of Bangkok. It was the capital of the Kingdom of Siam and is known for its impressive ruins and temples. The city is a UNESCO World Heritage Site and is a popular day trip from Bangkok.
                                </li>
                                <li>
                                    Chiang Rai:
                                    <br/>
                                    Chiang Rai is a city in northern Thailand, known for its beautiful temples and the Golden Triangle region. The city is home to the famous White Temple (Wat Rong Khun) and the Blue Temple (Wat Rong Suea Ten). Chiang Rai is close to Golden Triangle, the area where the borders of Thailand, Laos, and Myanmar meet.
                                </li>
                                <li>
                                    Ko Lipe and Koh Lanta:
                                    <br/>
                                    Ko Lipe and Koh Lanta are two islands in the Andaman Sea, known for their beautiful beaches and clear waters. Ko Lipe is a small island with a laid-back vibe, while Koh Lanta is larger and offers more activities and amenities. Both islands are popular destinations for snorkeling and diving.
                                </li>
                            </ul>
                        </div>

                        {/* Chiang Mai */}
                        <h2 id="chiang-mai" className="text-4xl font-bold mb-4">Chiang Mai</h2>
                        <h3 id="chiang-mai-city" className="text-2xl font-bold mb-4">Chiang Mai</h3>
                        Chiang Mai is the largest city in northern Thailand and somewhat of a gateway to the region's mountains, jungles, and temples. The city itself is charming to visit too; The old town is surrounded by a moat, which is rectangular rather than circular, making it distinct from most European moats. The city contains many beautiful temples and the night market is a great place to buy some souvenirs and try some street food. At the time, I did not buy any souvenirs as it was the first stop of our trip and I thought we would see many more night markets. In hindsight I wish I bought some souvenirs as the Chiang Mai night market was one of the larger ones we visited in the country.<br/><br/>
                        We arrived in Chiang Mai at noon and left the next day in the late afternoon, which gave us some time to see the main highlights of the city.<br/><br/>
                        To immediately fight back against the jetlag, we started with an afternoon temple tour. This tour took us a couple of hours and brought us to some of the most impressive temples just outside of the city.<br/><br/>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-[90%] pl-1 lg:basis-[40%]">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img 
                                            src={`/images/travel/thailand/chiangmai/temples${index+1}.jpg`} 
                                            alt={`Temples ${index+1}`} 
                                            className="w-full h-auto max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] object-contain rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/chiangmai/temples${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionTemples[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel><br/>

                        In the evening, we went to a small night market near our hotel for some food, before heading into the main night market for the classic tourist experience.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/chiangmai/Market1.jpg"
                                    alt="Chang Phuak Market"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/chiangmai/Market1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/chiangmai/Market2.JPEG"
                                    alt="Chang Phuak Market"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/chiangmai/Market2.JPEG')}
                                />
                                
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">A local food market</figcaption>
                        <br/>

                        The following day, we visited some more temples located within the city moat, which we explored by foot without a guide.<br/><br/>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 8 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-[90%] pl-1 lg:basis-[40%]">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img 
                                            src={`/images/travel/thailand/chiangmai/templess${index+1}.jpg`} 
                                            alt={`Templess ${index+1}`} 
                                            className="w-full h-auto max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] object-contain rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/chiangmai/templess${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionTemples2[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel><br/>

                        At around 2PM, we got into a minivan for a four hour ride through the mountains to Pai.<br/><br/>


                        <h3 id="pai" className="text-2xl font-bold mb-4">Pai</h3>
                        Pai is a small town in the mountains of northern Thailand. It is known to be a popular destination for backpackers looking for a bohemian vibe, as it is known as a bit of a psychedelic center. The reputation is well-deserved, as a guy in our minivan already started talking about the psychedelic experiences he'd had in Pai. The town itself is in fact very charming, with many hippie-style cafes and shops. The town is centered upon a main road with many establishments, but there are more hostels further out of the city center as well.<br/><br/>

                        We mainly visited Pai for the beautiful nature surrounding it. We slept in a hotel in the center of Pai upon arriving, and the next morning we departed bright and early for a two-day trek in the mountains. We had two local guides, John and Tiger, who drove us about an hour out of Pai to the starting point of the trek. <br/><br/>
                        {/* <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 10 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-[90%] pl-1 lg:basis-2/5">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img 
                                            src={`/images/travel/thailand/pai/hikeday1v${index+1}.jpg`} 
                                            alt={`Hikeday1 ${index+1}`} 
                                            className="w-full h-auto max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] object-contain rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/pai/hikeday1v${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionHike1[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel><br/> */}
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure>
                                <img
                                    src="/images/travel/thailand/pai/hikeday1h1.jpg"
                                    alt="Hikeday1"
                                    className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/hikeday1h1.jpg')}
                                />
                            </figure>
                            <figure>
                                <img
                                    src="/images/travel/thailand/pai/hikeday1h2.jpg"
                                    alt="Hikeday1"
                                    className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/hikeday1h2.jpg')}
                                />
                            </figure>
                            <figure>
                                <img
                                    src="/images/travel/thailand/pai/hikeday1h3.JPG"
                                    alt="Hikeday1"
                                    className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/hikeday1h3.JPG')}
                                />
                            </figure>
                            <figure>
                                <img
                                    src="/images/travel/thailand/pai/hikeday1h4.jpg"
                                    alt="Hikeday1"
                                    className="w-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/hikeday1h4.jpg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center my-6 text-sm text-gray-600">Some highlights from the first day of our hike</figcaption>
                    
                        At the end of the first day, we arrived in a local village, Tiger's home village, where we had a homestay experience. Upon arriving in the village, we were greeted by a guy on a motorcycle carrying a pig's head on his back. We also started hearing many gunshots in the area at twilight. We were informed that these were the hunters hunting for monkeys in the area. John cooked some delicious massaman curry for us, which was better than any massaman curry I had in restaurants during the trip. After dinner, we wanted to check out the stars, so we walked a little outside of the village center, where we stumbled upon a local party with someone playing music on a guitar / banjo instrument while the others danced around in circles. We joined the locals for a short and sweet dance under the stars.<br/><br/>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 6 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-[90%] pl-1 lg:basis-[40%]">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img 
                                            src={`/images/travel/thailand/pai/hikevillage${index+1}.jpg`} 
                                            alt={`Hike village ${index+1}`} 
                                            className="w-full h-auto max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] object-contain rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/pai/hikevillage${index+1}.jpg`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionHikeVillage[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel><br/>
            
                        The next day, we continued our trek through the mountains. I started getting ill during the second day of our trek, which heavily dampened my enjoyment of this experience. There was little to it except pushing through though. During this day's hike, we passed an area which was guarded by Thai soldiers. We supposed they were doing some training exercises in the area, and they told our guides we were not allowed to pass through. When John gestured that he would like to continue anyway, one of the soldiers gently but firmly took his arm and told him to find another way, which we did. We ended our hike by doing a river crossing. A little further downstream, we swam across the river again for some photos under a waterfall.<br/><br/>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 8 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-[90%] pl-1 lg:basis-[40%]">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img 
                                            src={`/images/travel/thailand/pai/hikeday2v${index+1}.JPG`} 
                                            alt={`Hikeday2 ${index+1}`} 
                                            className="w-full h-auto max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] object-contain rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/pai/hikeday2v${index+1}.JPG`)}/>
                                        </CardContent>
                                    </Card>
                                    <figcaption className="text-center text-sm text-gray-600">{imgCaptionHike2[index]}</figcaption>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel><br/>

                        We drove back to Pai, where we spent one more night. The following morning, I spent some time resting while the rest of the group explored the nature around Pai by scooter, before driving back to Chiang Mai airport for the next leg of our trip.<br/><br/>

                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/pai/PaiScooter1.JPG"
                                    alt="Exploring Pai by scooter"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/PaiScooter1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/pai/PaiScooter2.JPG"
                                    alt="Exploring Pai by scooter"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/PaiScooter2.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/pai/PaiScooter3.JPG"
                                    alt="Exploring Pai by scooter"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/pai/PaiScooter3.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Exploring Pai by scooter</figcaption>
                        <br/>


                        <h3 id="chiang-mai-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Chiang Mai Charmm Bar & Restaurant" rating={5} scale="food">
                            For our first lunch in Thailand, we wandered into this restaurant on the edge of the Chiang Mai old town. This restaurant was a slam dunk for our first meal in Thailand, as we got delicious food for trademark low Thai prices. Most of us ordered the Khao Soi, a traditional northern Thai coconut curry dish, and it was fantastic. The staff was very friendly too. The only downside was that the AC was a bit too cold for us, but this is a common issue for Europeans traveling in Thailand.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/2GrxHfXiRFBosWhJ6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/thailand/chiangmai/Charmm.jpg"}
                                    alt="Charmm"
                                    className="w-full sm:w-[90%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/thailand/chiangmai/Charmm.jpg")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Enjoying our first Khao Soi</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Chang Phuak Market" rating={4} scale="food">
                            We visited this local market on our first night in Chiang Mai. We were some of the only tourists there, but we still felt very welcome and comfortable. We all tried different dishes like curries and noodles, and overall we all enjoyed our food here. I personally tried two classic Thai desserts: mango sticky rice and roti (a Thai banana pancake) with condensed milk, and both were delicious. This night market is a recommendation if you'd like to try some true local food in Chiang Mai.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/DDzPycu11hgYfW148" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/chiangmai/Market3.JPG"
                                        alt="Chang Phuak Market"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/chiangmai/Market3.JPG')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/chiangmai/Market4.jpg"
                                        alt="Chang Phuak Market"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/chiangmai/Market4.jpg')}
                                    />
                                    
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">Enjoying some chow</figcaption>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Restaurant under SN Apartment 201" rating={3.5} scale="food">
                            For our second lunch in Chiang Mai, we tried a local restaurant on the street of our hotel. I cannot find this restaurant on Google Maps, but the restaurant is located next the SN Apartment 201 hotel, so you can find it there if you'd like!<br/>
                            This restaurant provided another local experience, and most of us had some khao soi again, which was good but slightly less impressive than the one we had in Charmm. The staff was friendly and the prices were very low, but the restaurant itself was a bit dirty and run-down. Endearingly, the restaurant had some official-looking pictures of Thai people on the wall, holding diplomas or awards, which we assume are the family members of the restaurant owners.
                            <br />
                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/thailand/chiangmai/Resto.JPG"}
                                    alt="Resto"
                                    className="w-[75%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/thailand/chiangmai/Resto.JPG")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Lunch at a local restaurant</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Pai Siam Bar & Bistro" rating={3.5} scale="food">
                            We had dinner at this place on our first night in Pai. It was a lively venue with a nice atmosphere, with an older Thai man playing some whimsical live music. The food was good but did not blow us away. The massaman in particular was a bit of a letdown; we expect they might have toned down the flavor profile for tourists.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/SsRWnAdcF9X9zfi68" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>


                        {/* Phuket, Koh Phi Phi, Ao Nang */}
                        <h2 id="phuket-ao-nang" className="text-4xl font-bold mb-4">Phuket to Ao Nang</h2>
                        <h3 id="phuket" className="text-2xl font-bold mb-4">Phuket</h3>
                        In Phuket, we chose a very central location, which had the advantage of being reasonably close to all sights of interest, but the downside of not being particularly close to any particular one, so we had to get a Grab any time we wanted to go somewhere. I spent the first day in Phuket recovering from my illness, while the others went out to explore the island.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/phuket/Dive1.JPG"
                                    alt="Dive1"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/phuket/Dive1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/phuket/Dive2.JPG"
                                    alt="Dive2"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/phuket/Dive2.JPG')}
                                />
                                
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Sam and William going diving</figcaption>
                        <br/>
                        On the second day, my friends went out for snorkeling and scuba diving, but that was not an option for me as my sinuses were still blocked from my illness. Instead, I had a slow day exploring my girlfriend's favorite beach on the island, Ao Yon beach.<br/><br/>
                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/phuket/AoYon.jpg"}
                                alt="Ao Yon Beach"
                                className="w-full sm:w-[90%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/phuket/AoYon.jpg")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Ao Yon Beach</figcaption>
                        </figure>
                        <br/>

                        It started raining during lunch there, at which point I made my way to Phuket Old Town. Phuket Old Town is a charming area with many colonial buildings and a nice atmosphere. I spent some time walking around the streets and checking out the local shops.<br/><br/>

                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/phuket/OldTown1.jpg"
                                    alt="Phuket Old Town"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/phuket/OldTown1.jpg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/phuket/OldTown2.jpg"
                                    alt="Phuket Old Town"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/phuket/OldTown2.jpg')}
                                />
                                
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Phuket Old Town</figcaption>
                        <br/>

                        <h3 id="koh-phi-phi" className="text-2xl font-bold mb-4">Koh Phi Phi</h3>

                        The next day, we took a ferry to Koh Phi Phi, where we spent one night. We highly recommend staying on the island overnight, as this will allow you to enjoy the nearby sights very early or late in the day, when there are fewer tourists.<br/><br/>

                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/phiphi/PhiPhiView.JPG"}
                                alt="Phi Phi View"
                                className="w-full sm:w-[90%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/phiphi/PhiPhiView.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">View over Koh Phi Phi</figcaption>
                        </figure>
                        <br/>

                        On the evening of our arrival, we went on a boat tour to visit one of Thailand's main tourist spots: Maya Bay. The tour started with some sights we did not find particularly interesting, like Monkey Bay (where we did not see any monkeys) and Viking Cave (which is not really accessible). We also got dropped at a snorkeling spot where there was limited visibility. <br/>
                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/phiphi/PiLehBay.JPG"}
                                alt="Pi Leh Bay"
                                className="w-full sm:w-[90%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/phiphi/PiLehBay.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">The crew at Pi Leh Bay</figcaption>
                        </figure>
                        <br/>
                        Luckily, the tour got a lot more interesting upon entering Pi Leh Bay. This beautiful bay was full of tourist boats, like our own, but we still greatly enjoyed the beauty of the bay. We then made our way to Maya Bay, which was the highlight of the day. We were dropped off at a floating pier and walked across some planks to get to the beach. The beach was busy but not too crowded, and we enjoyed taking in the beauty of the bay and looking for sharks in the water. On our way back from the bay to the boat, we spotted a large lizard.<br/>
                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/phiphi/MayaPyramid.JPG"}
                                alt="Maya Pyramid"
                                className="w-full sm:w-[90%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/phiphi/MayaPyramid.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Pyramid on Maya Bay</figcaption>
                        </figure>
                        <br/>
                        We ended the tour with a last snorkeling session during sunset, just outside of Maya Bay. This was a very fun experience, as it must've been one of the most beautiful settings for snorkeling I've experienced so far. The boat staff treated us to some fresh pineapple at this time, and overall it was a great ending to our trip.<br/><br/>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 8 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-[80%] pl-1 lg:basis-[39%]">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img 
                                            src={`/images/travel/thailand/phiphi/PhiPhi${index+1}.JPG`} 
                                            alt={`Phi Phi ${index+1}`} 
                                            className="w-full h-auto max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] object-contain rounded-lg cursor-pointer" 
                                            onClick={() => openLightbox(`/images/travel/thailand/phiphi/PhiPhi${index+1}.JPG`)}/>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}                                    
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/Thailand.JPG"}
                                alt="Thailand"
                                className="w-[100%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/Thailand.JPG")}
                            />
                        </figure>
                        <figcaption className="text-center text-sm text-gray-600">Our excursion to Maya Bay</figcaption><br/><br/>


                        <h3 id="ao-nang" className="text-2xl font-bold mb-4">Ao Nang</h3>

                        After a relaxing night and slow morning of sunbathing and swimming on Koh Phi Phi, we got on a ferry to the Thai mainland.<br/><br/>
                        
                        After a scenic ride, the ferry dropped us off at the floating pier on the other side of the isthmus of Railay Beach. We walked off the pier, passed some monkeys, and crossed the small town into the Railay Beach area.<br/>

                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/aonang/RailayMonkey1.JPG"
                                    alt="Railay Monkey"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/aonang/RailayMonkey1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/aonang/RailayMonkey2.JPG"
                                    alt="Railay Monkey"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/aonang/RailayMonkey2.JPG')}
                                />
                                
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Some monkeys around Railay, enjoying tourist leftovers</figcaption>
                        <br/>
                        
                        The area is known for its beach and impressive limestone cliffs. This area is a very popular tourist spot, filled with many restaurants and shops, as well as many venues selling "happy shakes". These are milkshakes with psychedelic mushrooms mixed in them. The places selling these shakes have a very distinct vibe, with colorful decorations and stoner music playing. Generally, Railay Beach has a very chill and relaxed vibe, and we enjoyed our time there. <br/><br/>

                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/aonang/RailayBeach.jpg"}
                                alt="Railay Beach"
                                className="w-full sm:w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/aonang/RailayBeach.jpg")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Railay Beach</figcaption>
                        </figure>
                        <br/>

                        We were planning to hang around Railay for some time, until after sunset, because we heard that Ao Nang is a bit of a chaotic place and we preferred to spend our time on a laid-back beach. However, in the afternoon, a storm started rolling in, so we had to make a choice: Either we wait out the storm in Railay, or we take a boat to Ao Nang and hope we can get there before the storm hits in earnest (as boats are the only way to get off the isthmus on which Railay is located). We decided to take the boat to Ao Nang, and we had a very wet and bumpy ride. The ride got scary when the driver lost control and almost steered us into the cliffs. He wasn't able to drop us off at the pier in Ao Nang, so he dropped us in the lagoon of another bay, where we had to wade to the shore. As there were some sharp stones and shells on the sea floor, some of us came out of the water with bloody cuts on their feet. Upon getting out of the water, we got into a taxi to our hotel.
                        <br/><br/>
                        Upon arriving in Ao Nang, the weather had pretty much calmed down, so we picked the absolute worst time to get in the little boat.<br/><br/>
                        In Ao Nang, we did little more than checking into the hotel, getting some dinner, and going for some drinks afterwards. Walking on the main street of Ao Nang is quite the experience. It is a loud area filled with neon signs and commercial vehicles with posters on top driving around advertising stuff like Muay Thai fights and nightclubs. Ao Nang wasn't really our vibe, so we were happy to leave the next morning for our next destination, Khao Sok National Park.<br/><br/>


                        <h3 id="islands-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Phuket Lae Lay" rating={4} scale="food">
                            I had lunch at this restaurant when exploring Ao Yon beach. The restaurant is located on a street just off the beach. The staff was friendly and the food was good, but not particularly special.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/Mj1mz9F21cbzfD186" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/phuket/LaeLay1.jpg"
                                        alt="Phuket Lae Lay"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/phuket/LaeLay1.jpg')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/phuket/LaeLay2.jpg"
                                        alt="Phuket Lae Lay"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/phuket/LaeLay2.jpg')}
                                    />
                                    
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">Enjoying red curry at Lae Lay</figcaption>
                        </CollapsibleReview>
                        <CollapsibleReview title="Phuket Shaw Tom Yum Noodle Soup" rating={2.5} scale="food">
                            This place was recommended to me, but I was not a particular fan. The soup itself was good, but the restaurant was rather dirty and the staff was not particularly friendly. It is a cheap option to try some authentic Thai food, but I would not recommend it otherwise.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/wThx4owJCoKgxBC49" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Rom Mai" rating={3.5} scale="food">
                            We had a quick lunch here before getting on our ferry to Ao Nang. The food was good and the vibes on the beach were nice, but the service was a bit slow and the prices were a bit higher than we expected for the quality of food. Overall a good option for lunch on the beach on Koh Phi Phi.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/q2mvLgLSuUXo5NmK7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Tanta" rating={3.5} scale="food">
                            This restaurant offers both Western and Thai food, making it a good option for groups with different tastes. The food was good, but not particularly special. The restaurant is located on the main street of Ao Nang, which makes it a convenient option for dinner. Overall, a good option for larger groups, but I wouldn't go again if I was traveling alone or as a couple.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/hzhi8DkeThd8qh7Y9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Thai Thai Restaurant" rating={4.5} scale="food">
                            After dinner, we walked along the beachfront until we stumbled upon this place. We just had a drink here, but we liked the laid-back vibe of the place, the nice cocktails, and the friendly staff.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/qydfh1oGcyUvJJLp7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/aonang/AoNang.jpg"}
                                alt="Ao Nang Beach"
                                className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/aonang/AoNang.jpg")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Drinks at Thai Thai Restaurant</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>

                        {/* Khao Sok */}
                        <h2 id="khao-sok" className="text-4xl font-bold mb-4">Khao Sok</h2>
                        <h3 id="khao-sok-natural-park" className="text-2xl font-bold mb-4">Khao Sok National Park</h3>
                        We left Ao Nang early in the morning to drive to Khao Sok National Park. We spent two nights in the park: we spent the first night in Khaosok Boutique Camps, a hotel located on the hill slopes in the jungle. We spent the second night in a floating bungalow on the lake itself, in a hotel called The Laguna Chiewlarn.<br/><br/>

                        We spent our first day exploring the rivers and jungle of Khao Sok National Park. We went on a canoe tour through the jungle, where we saw some monkeys and other wildlife along the way. We stopped at the halfway point, where our guides served us local coffee in bamboo cups, which we were able to take home with us as a souvenir.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/River1.JPG"
                                    alt="Khao Sok River"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/River1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/River2.jpg"
                                    alt="Khao Sok River"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/River2.jpg')}
                                />
                                
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Drifting down the Khao Sok River</figcaption>
                        <br/>

                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/khaosok/Snake.JPG"}
                                alt="Snake in Khao Sok"
                                className="w-[100%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/khaosok/Snake.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">A snake spotted in the canopies above us</figcaption>
                        </figure>
                        <br/>

                        We also visited Wat Sok Tham Phanthurak on our way to our hotel. This temple has a special monkey shrine, which sets it apart from other Thai temples. There is a main temple building, a monkey shrine, as well as a cave with a Buddha statue inside. A nice stop when driving through Khao Sok and a fun opportunity to see some silly monkeys up close, but not a must-see.<br/><br/>

                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/KhaoSokMonkey1.JPG"
                                    alt="Khao Sok Monkey"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSokMonkey1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/KhaoSokMonkey2.JPG"
                                    alt="Khao Sok Monkey"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSokMonkey2.JPG')}
                                />
                                
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Monkeys in the Wat Sok Tham Phanthurak temple</figcaption>
                        <br/>

                        After checking into our hotel and having some dinner there, we went on a night safari through the jungle. We mainly saw insects, spiders, and other small critters, but we also saw a few larger animals, like a civet cat high up in the canopy. The night safari was a fun experience, though the number of tourists on the same path as us made it a bit less enjoyable.<br/><br/>

                        <div className="grid md:grid-cols-3 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/NightSafari1.JPG"
                                    alt="Night Safari in Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/NightSafari1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/NightSafari2.JPG"
                                    alt="Night Safari in Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/NightSafari2.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/NightSafari3.JPG"
                                    alt="Night Safari in Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/NightSafari3.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Spotting critters on the Night Safari in Khao Sok</figcaption>
                        <br/>

                        The second day was the highlight of our Khao Sok experience. We went on a boat which took us to our floating bungalow on the Cheow Lan lake. This is an artificial lake, which was created by damming the river. The Thai government decided to make the nature surrounding lake a National Park, which allowed wildlife to thrive in the area. The lake is surrounded by limestone cliffs and jungle, which makes for a beautiful setting. <br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/KhaoSok1.JPG"
                                    alt="Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSok1.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/KhaoSok2.JPG"
                                    alt="Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSok2.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Cheow Lan Lake</figcaption>
                        <br/>
                        Unfortunately, we had rainy weather throughout the day, limiting our options for outdoor activities. We had planned a boat tour to explore some of the nearby caves and waterfalls, and to hopefully spot some elephants, but we had to cancel it due to the rainfall. So instead, we spent the day swimming in the lake and enjoying the beautiful scenery. When the rain let up, we were able to use the hotel's kayak to explore the immediate surrounding of the lake a bit.<br/><br/> 
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/KhaoSok3.JPG"
                                    alt="Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSok3.JPG')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/KhaoSok4.JPG"
                                    alt="Khao Sok"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSok4.JPG')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Making the best of the rainy weather</figcaption>
                        <br/>

                        We had dinner at the hotel and played some card games before going to bed. On our way to our room, we ran into an owl watching over the area. This was a beautiful way to end our day in Khao Sok.<br/><br/>

                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/khaosok/KhaoSokOwl.JPG"}
                                alt="Khao Sok Owl"
                                className="w-full sm:w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/khaosok/KhaoSokOwl.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">The Owl on our bungalow in Khao Sok</figcaption>
                        </figure>
                        <br/>

                        On our last day in Khao Sok, we went on an excursion to explore a nearby cave with a shrine. We got onto a boat and then crossed a piece of jungle by foot. As it was still pouring, leeches were all around the pathway, trying to get to our feet and legs. We had to be careful to avoid them, and one of us even had one in their neck at some point. This was a rather stressful experience, though my nerves were calmed when one of guides informed me that they are not dangerous and do not spread any diseases. He told me to think of it as "giving back to nature", which actually helped me a bit.<br/>
                        The cave itself was a nice destination but not the most impressive sight to behold. In hindsight, I think I would've preferred seeing some more of the lake from the boat rather than going on the cave excursion on foot.<br/><br/>

                        We were planning to make our way back to Bangkok by getting to Surat Thani and taking a night train from there. However, upon arriving at the train station, we learned that the train had been cancelled due to "natural disaster". We never learned what exactly happened, but we had to make a last-minute decision on how to get to Bangkok. We decided to stay the night in Surat Thani and fly to Bangkok the next morning.<br/><br/>

                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/SuratThani1.JPG"
                                    alt="Surat Thani"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/SuratThani1.JPG')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">The group frantically booking a flight to Bangkok</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/khaosok/SuratThani2.JPG"
                                    alt="Surat Thani"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/khaosok/SuratThani2.JPG')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Enjoying some massage to unwind (and kill time in Surat Thani)</figcaption>
                            </figure>
                        </div>
                        <br/>
                        

                        <h3 id="khao-sok-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Rann Restaurant" rating={4} scale="food">
                            This restaurant next to the Surat Thani railway station was our base of operations for an entire afternoon. We initially had some lunch here and then ordered some drinks while playing board games, as we needed to kill some time while waiting for our train. After realizing our train was cancelled, we had to book a flight to Bangkok, which we did at this restaurant. The staff was very friendly and helpful, and the food was good.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/PP9asvyW3jALpWgE9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        

                        {/* Bangkok */}
                        <h2 id="bangkok" className="text-4xl font-bold mb-4">Bangkok</h2>
                        <h3 id="bangkok-city" className="text-2xl font-bold mb-4">Bangkok City</h3>
                        This brings us to the last leg of our trip: Bangkok. We spent three nights in Bangkok. We spent our time exploring the city, visiting temples, getting a taste of the culture and nightlife, and getting some tailored clothes.<br/><br/>

                        When in Bangkok as a tourist, the main tourist destinations are of course the Grand Palace and the Wat Arun temple. We spent an afternoon visiting these two sights in the sweltering, humid Bangkok heat. The Grand Palace is an extensive complex of buildings. It's an impressive site to visit, but it is also very crowded and touristy.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/bangkok/RoyalPalace1.jpeg"
                                    alt="Royal Palace"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/bangkok/RoyalPalace1.jpeg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/bangkok/RoyalPalace2.jpeg"
                                    alt="Royal Palace"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/bangkok/RoyalPalace2.jpeg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">The Grand Palace</figcaption>
                        <br/>

                        We visited Thailand right after the passing of Thailand's queen, meaning that the country was in mourning. When we were in Bangkok, her body was lying in state in the Grand Palace, open to Thai people wanting to pay their respect. This meant that we were not able to enter all areas in the Grand Palace complex, as we were not wearing the mandatory black clothing.<br/><br/>
                        When first approaching the complex, we were stopped by a friendly-looking passerby (he told us he was a Thai tourist from Chiang Mai who was in town to pay respects to the late queen), who told us that the Grand Palace is closed and that he could organize a special tour for us. He told us we just had to stop a tuktuk driver, and this driver would be able to take us to some of the main sights and be our driver for the day for a very limited price.<br/>
                        As we continued walking around the area, we were stopped by more people telling us this exact same story. After looking it up, it seems like this is an organized tourist trap, where the tuktuk drivers add more and more costs throughout the tour. They then take you to souvenir stores, gem stores, etc., where the driver gets a commission on every purchase. Part of this scam is them telling you that the Grand Palace is closed today, which is supposed to convince you to drop your original plans of visiting the Grand Palace. Because of the queen's funeral, this sounded very plausible. In the end, we were able to enter the Grand Palace, with just a couple of areas not being available for us. Beware of this scam!<br/><br/>

                        After the Grand Palace, we made our way across the river to visit Wat Arun. This majestic temple is another great site to visit when in Bangkok. The local people also seem to like to visit this place; there were many Thai people in fancy outfits having elaborate photo shoots there.<br/><br/>
                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/bangkok/WatArun1.jpeg"
                                    alt="Wat Arun"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/bangkok/WatArun1.jpeg')}
                                />
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/bangkok/WatArun2.jpeg"
                                    alt="Wat Arun"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/bangkok/WatArun2.jpeg')}
                                />
                            </figure>
                        </div>
                        <figcaption className="text-center text-sm text-gray-600">Wat Arun</figcaption>
                        <br/>

                        On our first night in Bangkok, we decided to check out a piece of culture that Thailand is globally known for. Bangkok is home to the global center of Muay Thai: The Rajadamnern Stadium. A ticket buys you entry for the entire evening, with multiple fights taking place. This venue tries to combine the traditional elements of Muay Thai with a more modern, commercial approach, like popcorn stands and informative videos on the history of Muay Thai in between the fights.<br/>
                        The evening kicked off with one female fight, followed by multiple male fights. The combatants included European and African contenders, alongside the Asian ones. The event was MC'd by a Thai local, but we had trouble understanding anything he was saying, except him regularly shouting "MUAAAAY THAAAAAI".<br/><br/>

                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/bangkok/MuayThai.JPG"}
                                alt="Muay Thai"
                                className="w-full sm:w-[90%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/bangkok/MuayThai.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Rajadamnern Stadium</figcaption>
                        </figure>
                        <br/>

                        We also spent some time exploring the Bangkok nightlife. We did the mandatory walk through Khaosan Road, but this area was a bit too over-the-top for our liking. My favorite moment was when one of the barkers hit one of my friends on the head with a menu because we weren't paying them any attention. We also walked through Soi Cowboy Street, which was a bit calmer but also a bit grimmer than Khaosan Road, in my estimation.<br/><br/>

                        <figure className="flex flex-col items-center">
                            <img
                                src={"/images/travel/thailand/bangkok/WeThemBoys.JPG"}
                                alt="ThemBoys"
                                className="w-full sm:w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/thailand/bangkok/WeThemBoys.JPG")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">The Boys in Bangkok</figcaption>
                        </figure>
                        <br/>

                        While in Bangkok, some of us were in the market for a tailored suit while traveling in Southeast Asia, so we decided to check out some tailors on Google and visit one with good reviews. We ended up visiting <a href="https://maps.app.goo.gl/LPPChUVJh8XUNwuT6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMBFA Tailor</a>, and most of us were rather happy with our tailored clothes. Only one of us got a suit, but almost all the rest got a tailored shirt to remember this trip by.<br/>
                        It took us multiple visits to get our clothes: The first visit for exploring the options and taking our measurements. The second visit to try out the clothes and make some detailed measurements for retouches. By the third time we visited the shop, we were able to take our clothes with us. Having to come back multiple times actually meant this was a serious time investment, and given our limited time in Bangkok, perhaps it wasn't the wisest decision to spend so much time here. That being said, it is a fond memory of ours, especially our second visit to the shop: As we were waiting quite long before they were able to get to us all, they pulled out a bar cart and told us to help us to some drinks.<br/>

                        <div className="grid md:grid-cols-2 gap-2">
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/bangkok/Tailor2.JPG"
                                    alt="Tailor"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/bangkok/Tailor2.JPG')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Picking the right fabric</figcaption>
                            </figure>
                            <figure className="md:col-span-1">
                                <img
                                    src="/images/travel/thailand/bangkok/Tailor1.jpeg"
                                    alt="Tailor"
                                    className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox('/images/travel/thailand/bangkok/Tailor1.jpeg')}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Helping ourselves to the bar cart</figcaption>
                            </figure>
                        </div>
                        <br/>

                        After our final night in Bangkok, I packed up my things early and left the rest of the group to get to the airport. While they were flying back home, I was meeting my girlfriend in Bangkok airport <Link to="/travelblog/laos" className="text-blue-600 hover:underline">to explore the next country together</Link>.<br/><br/>


                        <h3 id="bangkok-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>
                        <CollapsibleReview title="Noodles 75 Bangkok" rating={3} scale="food">
                            We had some lunch at this restaurant, which I quite enjoyed. This seems like a place where locals go to eat, and the food was good and cheap. The staff was friendly and helpful, and the restaurant had a nice atmosphere. However, one of my friends got sick after eating here, so I would recommend being careful.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/PFZhVCZNamKqLMh19" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="The Commons Thonglor" rating={4.5} scale="food">
                            This building is located in Thonglor, another expat area in Bangkok. It is a very nice community center, offering eating venues as well as coworking spaces. We quite liked the vibe here and had a quick bite.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/tnJk2Sn8Mp2XtZ6T6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="Deep" rating={3} scale="food">
                            We had some dinner here before checking out Khaosan Road. We had some good Thai food here, but the quality wasn't amazing either. A fine place to have dinner while out, but nothing to write home about.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/Z9oegttTf7iLpF1K8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        <CollapsibleReview title="K. Panich Sticky Rice" rating={2} scale="hotdog">
                            This venue selling mango sticky rice got a mention in the Michelin guide, so we had to check it out. Unfortunately, it is pretty much a tourist trap, in our estimation. The mango sticky rice was good, but not any better than the one you can buy at a local market for a fraction of the price.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/JekZ5PKSwpvvcHHe6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/thailand/bangkok/StickyMango.jpeg"}
                                    alt="Mango"
                                    className="w-[50%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/thailand/bangkok/StickyMango.jpeg")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Trying Michelin-grade mango sticky rice</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Aire Bar" rating={4.5} scale="drink">
                            This is a classy rooftop bar on top of the Hyatt in Bangkok, which we visited on our final night in Bangkok. We enjoyed dinner here, very affordable for European travellers, and enjoyed the views while reminiscing about our favorite moments of the trip. We can highly recommend this place for anyone looking for calm rooftop views in Bangkok.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/rJKg2EYuuCWWWvPa7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/thailand/bangkok/Rooftop1.jpeg"}
                                    alt="Rooftop"
                                    className="w-[75%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/thailand/bangkok/Rooftop1.jpeg")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">One night in Bangkok</figcaption>
                            </figure>
                            <br/>
                        </CollapsibleReview>
                        <CollapsibleReview title="Vanilla Sky Rooftop bar" rating={4.5} scale="drink">
                            Located right next to Aire Bar, this is another rooftop bar along Sukhumvit Road. We had drinks and dessert here. This rooftop bar is in the open air and has some deep house music playing in the background, so perhaps a slightly more romantic and hip bar than Aire.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/E4dBMUxQyqCjJVTo8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </CollapsibleReview>
                        
                        

                        {/* Hotels */}
                        <h2 id="hotel-reviews" className="text-4xl font-bold mb-4">Hotel Reviews</h2>
                        Florian took this trip with seven of his friends, so this hotel review section will be written from the perspective of a group of eight people in their late 20s traveling together. These reviews might therefore not be the most relatable for solo travelers or couples!<br/><br/>

                        <HotelReview
                            headingId="hotel-1"
                            title="Chiang Mai: The White Elephant Home"
                            overallRating={4}
                            categories={[
                                { title: 'Staff', rating: 8 },
                                { title: 'Facilities', rating: 6 },
                                { title: 'Cleanliness', rating: 8 },
                                { title: 'Comfort', rating: 9 },
                                { title: 'Location', rating: 7 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            This hotel provided a comfortable stay for our time in Chiang Mai. We had a little standalone building all to ourselves, as well as some rooms in the main building. This allowed us to have some privacy and a place to hang out together. The hotel is located a bit outside of the city center, but still within walking distance of the old town. The staff was very friendly and helpful. The breakfast was fine, but not particularly big for European standards. During breakfast, the lady gave me a second portion without charging me for it. My friend asked for a second portion too, but his second portion ended up on the bill! We got a good laugh out of this, but it's a good example of differing service norms in Thailand compared to Europe. Overall, I would recommend this hotel for a stay in Chiang Mai, especially for a larger group.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/2QL4BqunXzQFhyXRA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Pai: The Sylvana Pai Hotel"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: 7 },
                                { title: 'Facilities', rating: 7 },
                                { title: 'Cleanliness', rating: 8 },
                                { title: 'Comfort', rating: 9 },
                                { title: 'Location', rating: 10 },
                                { title: 'Value for Money', rating: 9 },
                            ]}
                        >
                            This hotel provided a very convenient and comfortable stay in Pai. The hotel consists of small standalone bungalows, surrounding a calm outdoor area with a pool. The hotel is located right off the main walking street in Pai, which makes it a very convenient location for exploring the town. The hotel itself is very calm and quiet, while still being right in the middle of the action.<br/>
                            The staff wasn't particularly friendly or helpful, but they were polite and professional. The hotel does not provide breakfast, but there are many restaurants nearby. Overall, I would recommend this hotel for a stay in Pai if you want a peaceful stay close to the city center.
                            <br />
                            Find it <a href="https://maps.app.goo.gl/EXyz5XSertue7GAu6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Phuket: Namtok Villa"
                            overallRating={4}
                            categories={[
                                { title: 'Staff', rating: null },
                                { title: 'Facilities', rating: 9 },
                                { title: 'Cleanliness', rating: 9 },
                                { title: 'Comfort', rating: 9 },
                                { title: 'Location', rating: 6 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            In Phuket, we stayed in a villa in a central location on the island. This meant that we were reasonably close to all sights of interest, like the Old Town and Patong beach, but not particularly close to any one of them, meaning we had to take a ~20min Grab to get around. The villa was very comfortable for a group of eight and had a nice pool. It was a great spot for me to recover from my illness.<br/>
                            Overall we had a good stay here, and I would recommend it if you are looking for a comfortable stay in Phuket in a calmer area, away from the party scene of Phuket.
                            <br/>
                            Find it <a href="https://maps.app.goo.gl/S1uqUa5doTWBbMRB8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/phuket/Namtok1.JPG"
                                        alt="Phuket Namtok"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/phuket/Namtok1.JPG')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/phuket/Namtok2.JPG"
                                        alt="Phuket Namtok"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/phuket/Namtok2.JPG')}
                                    />
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">Namtok Villa on Phuket</figcaption>
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Koh Phi Phi: The Cove"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: 9 },
                                { title: 'Facilities', rating: 8 },
                                { title: 'Cleanliness', rating: 8 },
                                { title: 'Comfort', rating: 8 },
                                { title: 'Location', rating: 10 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            In order to get away from the crowds on Koh Phi Phi, we stayed in a hotel on the eastern side of the island. The hotel is nestled along the slopes of the island and is only accessible by boat. Upon arriving at the hotel's beach, we realized we had made the right decision to stay in this oasis of tropical peace.<br/>
                            The rooms we had weren't particularly luxurious, but they were comfortable and clean. The staff also helped us with getting our luggage up and down the slopes. We enjoyed lounging on the beach and swimming in the warm waters of the sea in between our excursions. Overall, we had a great stay here and would recommend it to anyone looking for a peaceful stay on Koh Phi Phi, including couples who are looking for a more romantic retreat.
                            <br/>
                            Find it <a href="https://maps.app.goo.gl/49zDPQPQumVb9bvL9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/phiphi/TheCove1.jpg"
                                        alt="Koh Phi Phi"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/phiphi/TheCove1.jpg')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/phiphi/TheCove2.jpg"
                                        alt="Koh Phi Phi"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/phiphi/TheCove2.jpg')}
                                    />
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">The Cove on Koh Phi Phi</figcaption>
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Ao Nang: Wake Up Aonang"
                            overallRating={2}
                            categories={[
                                { title: 'Staff', rating: 6 },
                                { title: 'Facilities', rating: 4 },
                                { title: 'Cleanliness', rating: 5 },
                                { title: 'Comfort', rating: 2 },
                                { title: 'Location', rating: 8 },
                                { title: 'Value for Money', rating: 7 },
                            ]}
                        >
                            This was genuinely one of the weirdest venues I've stayed at. On the face of it, it looks like a nice hotel, and to be fair we had everything we needed. However, I found the rooms to be very weirdly designed, giving a strange, dystopian, run-down, station-like vibe. The showers were concrete boxes with modernistic but sad shower heads. It all reminded me of something out of the Star Wars universe.<br/>
                            In principle, this hotel has everything you need, is close to the action, and offers good value for money. However it is one of the hotels where the design was so sad that it made me feel uncomfortable.
                            <br/>
                            Find it <a href="https://maps.app.goo.gl/mLpVNu8xowYdr2Ug7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Khao Sok: Khaosok Boutique Camps"
                            overallRating={4}
                            categories={[
                                { title: 'Staff', rating: 8 },
                                { title: 'Facilities', rating: null },
                                { title: 'Cleanliness', rating: 7 },
                                { title: 'Comfort', rating: 7 },
                                { title: 'Location', rating: 8 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            This hotel is nestled in the hillside of the jungles of Khao Sok. The hotel consists of small standalone rooms, which are fancy hotel room-sized tents, which are comfortable and clean. It is a very peaceful place and a great base to explore the surrounding nature.<br/>
                            We had dinner at the hotel restaurant and we enjoyed our food and time here.<br/>
                            Find it <a href="https://maps.app.goo.gl/K8gpSog68HA6AS3F6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/khaosok/KhaoSokHotel1.jpg"
                                        alt="Khao Sok"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSokHotel1.jpg')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/thailand/khaosok/KhaoSokHotel2.JPG"
                                        alt="Khao Sok"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/thailand/khaosok/KhaoSokHotel2.JPG')}
                                    />
                                </figure>
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">Khaosok Boutique Camps</figcaption>
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Khao Sok: The Laguna Chiewlarn"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: 8 },
                                { title: 'Facilities', rating: 6 },
                                { title: 'Cleanliness', rating: 7 },
                                { title: 'Comfort', rating: 7 },
                                { title: 'Location', rating: 10 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            A picture-perfect, picturesque hotel in an amazing location. This (kind of) hotel is a must-do experience when visiting Khao Sok, and we were very happy with our stay here. It is a bit touristy, but this is by design, and we still very much enjoyed our time here.<br/>
                            Find it <a href="https://maps.app.goo.gl/z9Hh18j9xY2FDH768" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Surat Thani: Baan Urt Hotel"
                            overallRating={1}
                            categories={[
                                { title: 'Staff', rating: 5 },
                                { title: 'Facilities', rating: null },
                                { title: 'Cleanliness', rating: 2 },
                                { title: 'Comfort', rating: 2 },
                                { title: 'Location', rating: 5 },
                                { title: 'Value for Money', rating: 3 },
                            ]}
                        >
                            This is the hotel we booked when we unexpectedly needed to stay the night in Surat Thani. We chose it due to its location close to the airport, which is the only thing this hotel has going for it. The hotel rooms smell very moldy, I would not recommend anyone to stay the night here, except people like us who needed to stay the night at a cheap price.<br/>
                            Find it <a href="https://maps.app.goo.gl/viAyA3hEsWyPzxNfA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                            <figure className="flex flex-col items-center">
                                <img
                                    src={"/images/travel/thailand/khaosok/BaanUrtHotel.JPG"}
                                    alt="Baan Urt Hotel"
                                    className="w-full sm:w-[75%] rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox("/images/travel/thailand/khaosok/BaanUrtHotel.JPG")}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Baan Urt Hotel in Surat Thani</figcaption>
                            </figure>
                            <br/>
                        </HotelReview>
                        
                        <HotelReview
                            headingId="hotel-1"
                            title="Bangkok: Oasis 65"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: null },
                                { title: 'Facilities', rating: null },
                                { title: 'Cleanliness', rating: 9 },
                                { title: 'Comfort', rating: 9 },
                                { title: 'Location', rating: 6 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            We booked this accommodation via AirBnB, and it served as a great base to explore Bangkok out of. This place is located in Sukhumvit, Bangkok's expat area. Located along the BTS Skytrain, this area is well connected and filled with supermarkets, bars, and other venues tailored to an international audience.<br/>
                            We stayed at this four-story house, with plenty of room for the eight of us. It was clean and comfortable, and we particularly liked the rooftop terrace. I would recommend this place for larger groups visiting Bangkok.<br/>
                            Find it <a href="https://maps.app.goo.gl/yTrH4bvNbYAR6qe67" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

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