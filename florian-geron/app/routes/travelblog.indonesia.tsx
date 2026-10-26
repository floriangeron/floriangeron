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
    { title: "Destination Travel Blog" },
    { name: "My personal website", content: "My Indonesia Travel Blog" },
    { description: "Travel blog about Indonesia." },
  ];
};

export default function Indonesia() {
    // configurable font size class for paragraph content (Tailwind)
    const [fontSizeClass, setFontSizeClass] = useState<string>(() => {
        try {
            return localStorage.getItem('travelblog-font-size') || 'text-base';
        } catch (e) {
            return 'text-base';
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
                    src="/images/travel/indonesia/Padar.jpeg"
                    alt="Padar"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Indonesia</h1>
                        <p className="text-2xl">Exploring Bali, Lombok, and Komodo National Park</p>
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
                            <p className="text-gray-600">Bali Denpasar</p>
                        </div>
                        <div className="text-center">
                            <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Language</h3>
                            <p className="text-gray-600">Bahasa Indonesia</p>
                        </div>
                        <div className="text-center">
                            <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Currency</h3>
                            <p className="text-gray-600">Indonesian Rupiah (IDR)</p>
                        </div>
                        <div className="text-center">
                            <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                            <p className="text-gray-600">3 weeks</p>
                        </div>
                        <div className="text-center">
                            <CalendarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Time of Year</h3>
                            <p className="text-gray-600">October 2026</p>
                        </div>
                    </div>
                </div>

                {/* Blog Content with right-side TOC */}
                <div className="grid md:grid-cols-4 gap-8">
                    <main className={`md:col-span-3 text-gray-800 ${fontSizeClass} max-w-[min(100%,65ch)] mx-auto md:max-w-none md:mx-0 px-4`}>

                        {/* Our Journey */}
                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
                        <h3 id="background" className="text-2xl font-bold mb-4">Background</h3>
                        Indonesia has always been an infinitely fascinating country to me. Part of its allure lies in the fact that is spread over thousands of island, each with their own unique culture, making the country incredibly diverse. I learned a lot about this diversity during this trip:<br/>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Each island has its own indigenous language, with Bahase Indonesia used as the common lingua franca. This language was chosen as the national language upon its independence in 1945. Interestingly, they did not choose to elevate the largest local language, Javanese, to this status. Rather, they imported a Malay dialect and adapted it as the national language, as it was already widely used in the region for trading purposes. The founding government believed this would help unify the diverse archipelago, by not privileging any single local language.
                            </li>
                            <li>
                                Indonesia is a predominantly Muslim country (it is in fact the country with the largest Muslim population in the world), which you'll notice on islands like Lombok thanks to the many mosques, though some islands have other majority religions. For example, Hinduism is predominant in Bali and Catholicism is the majority religion in Flores.
                            </li>
                        </ul>
                        <br/>
                        However, there are some things that remain consistent across the country, such as their love for nasi goreng, mi goreng, and other local dishes.<br/>
                        <br/>
                        <h3 id="tourist-information" className="text-2xl font-bold mb-4">Tourist information</h3>
                        Here are a couple of tips for visiting the country:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Currency: </strong>Indonesia's currency is the Indonesian Rupiah (IDR). We did not carry any cash when flying into the country, which doesn't really cause an issue as we were able to pay for the things we needed upon arrival (Grab, e-SIM, etc.) with our credit cards. I would strongly recommend getting a <strong>Revolut</strong> card or similar, as this made paying in Rupiah very easy. After arriving in the city center, we got some cash out of the ATMs for small purchases at restaurants and local markets.<br/>
                                We recommend avoiding the Mandiri Bank's ATMs, as they charge 50,000 IDR (2.50 EUR) per withdrawal and have a withdrawal limit of 1,250,000 IDR (62.50 EUR). We used other ATMs when possible, like Maybank, which did not charge any fees and have a withdrawal limit of 3,000,000 IDR (150 EUR).
                            </li>
                            <li>
                                <strong>Logistics: </strong>Like in the rest of Southeast Asia, <strong>Grab</strong> is king when it comes to getting around short distances. Grab also offers other services like food delivery. Next to cars, Grab also offers motorbike taxis, which are a fast and exhilarating way to get around. In Indonesia, there is also <strong>GoJek</strong> for similar services.<br/>
                                For longer distances with ferries, trains, and flights, <strong>12GoAsia</strong> is the go-to platform for booking tickets.
                            </li>
                            <li>
                                <strong>Accommodation: </strong>We booked all of our accommodation in advance via <strong>Booking.com</strong>. Other platforms for booking accommodation in Southeast Asia include <strong>Agoda</strong> and <strong>Airbnb</strong>. <br/>
                                When booking accommodation in Southeast Asia, ensure that you're not only reading the reviews on the booking platform but also checking other sources like Google Reviews. After our past experiences in Southeast Asia, we decided to steer clear of any hotels with even a single review mentioning moldy smell.
                            </li>
                            <li>
                                <strong>e-SIM: </strong>Getting an e-SIM has never been easier thanks to apps like Saily, Nomad, and Revolut. We installed the e-SIM before arriving and can highly recommend doing this as it's a convenient way to stay connected while traveling.
                            </li>
                            <li>
                                <strong>Weather: </strong>The best time to visit is during the dry season, from May to October. We went in October and had great weather throughout the trip.
                            </li>
                            <li>
                                <strong>Vaccinations: </strong>Make sure to check the latest vaccination recommendations for Indonesia, as they can change over time. When we went, it was recommended to have vaccinations for Hepatitis A and B, Typhoid, and Tetanus.
                            </li>
                        </ul>
                        <br /><br />
                        <h3 id="the-crew" className="text-2xl font-bold mb-4">The crew</h3>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        We found affordable flight tickets from Brussels to Bali, so we started our journey in Bali. After seeing some of our friends exploring the Komodo National Park, we decided this would be the centerpoint of our journey. With three weeks at our disposal, we decided to fill up the remaining time by visiting Lombok, the Gili Islands, and Nusa Penida.
                        <figure>
                            <img
                                src={"/images/travel/indonesia/IndonesiaRoute.png"}
                                alt="Route we traveled"
                                className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openLightbox("/images/travel/indonesia/IndonesiaRoute.png")}
                            />
                            <figcaption className="text-center text-sm text-gray-600">Route we traveled — Bali to Lombok to Komodo</figcaption>
                        </figure><br/>
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        Indonesia is a huge country with thousands of islands, making it impossible to see everything in a three week trip. Rather than explaining why we did not visit the other regions of the country, like Sumatra, Java, Bornea, Sulawesi, or Papua, we will describe some of the trade-offs we made when visiting the islands we did see:<br/>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Bali: </strong><br/>
                                We decided to spend little time in Bali, mainly using it as a starting point for our journey. We had heard that the island can be very crowded and touristy, so we preferred to explore the less-visited islands. This means we stayed around the beach areas in the south close to the airport, and did not venture further inland to spots like Ubud, Sedimen or Mount Batur.
                            </li>
                            <li>
                                <strong>Gili Islands: </strong>Which island to stay on?<br/>
                                The Gili islands are three small islands off the northwest coast of Lombok. They are known as laid-back beach getaways where you can relax, snorkel, and enjoy the island lifestyle. Gili Trawangan is the most popular and lively, Gili Meno is quieter and more romantic, and Gili Air offers a balance between the two.<br/>
                                As the Gilis were our first stop after Bali, we wanted to experience the vibrant atmosphere of Gili Trawangan while still having the option to relax and take it slow. We decided to stay on a quiter part of the island as this would allow us to relax while still being able to enjoy the party scene.
                            </li>
                            <li>
                                <strong>Lombok: </strong>What to visit on the island?<br/>
                                Lombok has many beautiful places to visit. We stayed on Kuta Lombok and did a day trip to Tetebatu, but we didn't spend much more time in the lush interior of the country. Concretely, there are three popular areas in the interior of the island to explore: Northern Lombok with its waterfalls and rice terraces, Central Lombok with Mount Rinjani and surrounding villages, and the area south of Rinjani, centered on Tetebatu.<br/>
                                The multi-day hike up Mount Rinjani is a popular activity for adventurous travelers. However, after hearing it can be quite challenging, both physically and mentally, we decided we didn't want to spend several days of our holiday on this trek. That being said, most people who've undertaken this challenge speak highly of the experience and the breathtaking views from the summit.
                            </li>
                            <li>
                                <strong>Nusa Lembongan vs Nusa Penida: </strong>Beach getaway vs adventurous island exploration<br/>
                                As we were flying out of Bali, but didn't want to stay on Bali proper for our last days, we decided to spend our last days on one of the nearby islands, either Nusa Lembongan or Nusa Penida. Nusa Lembongan is known for its relaxed beach vibe, while Nusa Penida offers more adventurous exploration with dramatic cliffs and scenic viewpoints. We knew we wanted to visit the scenic viewpoints on Nusa Penida, like Kelingking Beach and Angel's Billabong, so the question was whether we wanted to visit these sites as day trips from Nusa Lembongang or stay on Nusa Penida itself. Nusa Penida is less developed and has less going on than on the backpacker-friendly beach getaway Nusa Lembongan, but it allows you to fully experience the island's natural beauty without the need for long day trips. More importantly, it allows you to visit the scenic viewpoints early in the morning and late in the afternoon, when the day tourist aren't there. As we had already had the backpacker party island experience on Gili Trawangan, we decided to go for Nusa Penida in this case.
                            </li>
                        </ul>
                        <br/>
                        <h3 id="field-notes" className="text-2xl font-bold mb-4">Field notes</h3>
                        A short summary of my main takes from this trip:
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>What we would do differently: </strong><br/>
                                1. We would split up our time one the Gilis differently. Instead of spending 6 nights on Gili T, we would spend 3 nights on Gili T and 3 nights on Gili Meno.<br/>
                                2. Spend more time in Lombok, especially in the interior of the island. We also wouldn't mind spending another day in Kuta Lombok.<br/>
                                3. Book an even more luxurious boat to explore Komodo National Park. We were happy with our boat, but we wouldn't book the same one again.<br/>
                                4. Don't rent a scooter on Nusa Penida, unless you're an experienced scooter driver. More on this below.
                            </li>
                            <li>
                                <strong>Budget: </strong><br/>
                                We expected the trip to be relatively affordable, especially after our experiences in other places in Southeast Asia like Thailand, Laos, and Cambodia. We found that Indonesia was generally more expensive than these places. In Thailand, it is easy to find extremely low-cost options in tourist areas, which we found more challenging in Indonesia. To be fair, we also did not have any stomach issues this time around, which might be a result of us going to more expensive restaurants. However, this impression extends beyond just food and includes accommodation and retail costs as well. One thing that remained quite affordable was local transportation, such as taxis and scooters.
                            </li>
                            <li>
                                <strong>Best meal: </strong><br/>
                                Fabriche (esp Negroni with prosecco instead of gin)
                                Beach dinner by Lumi
                            </li>
                            <li>
                                <strong>Biggest surprise: </strong><br/>
                                We were surprised how difficult it was to find authentic Indonesian experiences, including cuisinge and local culture. Most of what we saw was heaivily westernized and catered to tourists rather than locals. Most restaurants would sell Western food and play Western music, for example, even in areas that were not heavily touristic.
                            </li>
                        </ul>
                        <br/><br/>

                        {/* Bali */}
                        <h2 id="bali" className="text-4xl font-bold mb-4">Bali</h2>

                        <h3 id="bali-canggu" className="text-2xl font-bold mb-4">Canggu</h3>
                        <h3 id="bali-seminyak" className="text-2xl font-bold mb-4">Seminyak</h3>
                        <h3 id="bali-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Gili Islands */}
                        <h2 id="gili-islands" className="text-4xl font-bold mb-4">Gili Islands</h2>

                        <h3 id="gili-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Lombok */}
                        <h2 id="lombok" className="text-4xl font-bold mb-4">Lombok</h2>

                        <h3 id="lombok-kuta" className="text-2xl font-bold mb-4">Kuta Lombok</h3>
                        <h3 id="lombok-tetebatu" className="text-2xl font-bold mb-4">Tetebatu</h3>
                        <h3 id="lombok-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Komodo National Park */}
                        <h2 id="komodo-national-park" className="text-4xl font-bold mb-4">Komodo National Park</h2>

                        {/* Nusa Penida */}
                        <h2 id="nusa-penida" className="text-4xl font-bold mb-4">Nusa Penida</h2>

                        <h3 id="penida-food-drinks" className="text-2xl font-bold mb-4">Food & Drinks Reviews</h3>

                        {/* Hotels */}
                        <h2 id="hotels" className="text-4xl font-bold mb-4">Hotel Reviews</h2>

                        Having learned from our past trips in Southeast Asia, we were more diligent in our research and selection of hotels for this trip. Concretely, we double checked whether each accommodation has consistently positive reviews across multiple platforms, including Booking.com and Google Reviews. As such, we were happy with all hotels we stayed at, and can recommend each of the places mentioned below. Open each review to read about our experiences there! <br/>

                        <HotelReview
                            headingId="hotel-1"
                            title="Bali: Surf Lodge Canggu"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: 8 },
                                { title: 'Facilities', rating: 8 },
                                { title: 'Cleanliness', rating: 9 },
                                { title: 'Comfort', rating: 8 },
                                { title: 'Location', rating: 8 },
                                { title: 'Value for Money', rating: 10 },
                            ]}
                        >
                            On our first two nights in Bali, we stayed at the Surf Lodge in Canggu. As a three-star hotel, it offered a good balance of comfort and affordability. We were happily surprised by the common pool area, the included breakfast, and the general cleanliness of the hotel. The hotel staff helped us organize our taxi from the airport and also allowed us to book a massage via them. Both services were priced competitively. The location was convenient for exploring Canggu's beaches and cafes, but far enough from the main road that we didn't hear any of the traffic at night. We would recommend this place for anyone who's looking for a comfortable stay in Canggu on a limited budget.<br/>
                            Find it <a href="https://maps.app.goo.gl/t1AFxKbLnnXthwUL7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Bali: Happy Together by Kresna Hospitality"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: 8 },
                                { title: 'Facilities', rating: 8 },
                                { title: 'Cleanliness', rating: 9 },
                                { title: 'Comfort', rating: 8 },
                                { title: 'Location', rating: 8 },
                                { title: 'Value for Money', rating: 8 },
                            ]}
                        >
                            We spent our last night of our trip in this hotel in Seminyak, Bali. The hotel was modern and well-maintained, making it a comfortable stay. The staff were friendly and helpful, helping us organize our logistics and allowing for a slightly late checkout. Our room was large, with a little living room area. We were very happy with the massive bath tub in our bathroom. Both of us could fit comfortably, with space left for a third person to squeeze in. We can recommend this hotel for anyone visiting Seminyak for a convenient and comfortable stay.<br/>
                            Find it <a href="https://maps.app.goo.gl/kRziftRcwfVmqzLY6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Gili Trawangan: PinkCoco"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: 8 },
                                { title: 'Facilities', rating: 8 },
                                { title: 'Cleanliness', rating: 9 },
                                { title: 'Comfort', rating: 9 },
                                { title: 'Location', rating: 8 },
                                { title: 'Value for Money', rating: 7 },
                            ]}
                        >
                            PinkCoco is a instagram-friendly hotel, with a vibrant decor centering around the color pink. The hotel markets itself as a hotel "for Cool Adults only". I had some reservations about the concept initially, mainly fearing that it would be overrun by the cringe instagram crowd, but it turned out to be a laid-back and calm place to stay when we were there. We would even go so far as to say that it was a bit too quiet while we were there, with no lively atmosphere inside the hotel to speak of, though this didn't bother us as we enjoyed having peace and quiet in the hotel. The rooms are spacious and comfortable, and the hotel goes the extra mile to ensure a memorable experience, for example by providing matching pink pyjamas for the guests. The staff also leaves a little surprise in the room every day, ranging from some snacks to a turtle plushie.<br/>
                            Every Friday to Monday night, the hotel organizes entertainment on the beach, where a DJ plays music with some live saxophone performances, as well as a fire dance and fireworks. This event attracts visitors from all over the island, as it is the picture perfect spot for sunset on Gili Trawangan.<br/>
                            The hotel is located on the southern coast of Gili Trawangan. We chose this location so that we could enjoy a quieter and more relaxed atmosphere, away from the busier eastern part of the island, while still being close enough the cycle there if we wanted a night out. Overall, this formula worked well for us. The only downside of the location of this hotel is that its beach is not meant for swimming, meaning you have to cycle to other parts of the island if you want to take a dip in the sea. It is one of the only spots of the island where the sea is not easily accessible for a swim.<br/>
                            Overall, PinkCoco offers a unique and memorable experience, but we feel like it's instagrammability inflates the price a bit compared to other hotels on the island. That being said, the hotel provides excellent service.<br/>
                            Find it <a href="https://maps.app.goo.gl/DkP78pCAEowyfUe78" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Kuta Lombok: Kokoi Villas"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: null },
                                { title: 'Facilities', rating: null },
                                { title: 'Cleanliness', rating: null },
                                { title: 'Comfort', rating: null },
                                { title: 'Location', rating: null },
                                { title: 'Value for Money', rating: null },
                            ]}
                        >
                            xxx.<br/>
                            Find it <a href="https://maps.app.goo.gl/pBNZ7jJNf6jBUpoW6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Labuan Bajo: Seaesta"
                            overallRating={4}
                            categories={[
                                { title: 'Staff', rating: null },
                                { title: 'Facilities', rating: null },
                                { title: 'Cleanliness', rating: null },
                                { title: 'Comfort', rating: null },
                                { title: 'Location', rating: null },
                                { title: 'Value for Money', rating: null },
                            ]}
                        >
                            xxx.<br/>
                            Find it <a href="https://maps.app.goo.gl/X3QSAqsunVMzo5aA9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            <br />
                        </HotelReview>

                        <HotelReview
                            headingId="hotel-1"
                            title="Nusa Penida: Mantra Villa"
                            overallRating={4.5}
                            categories={[
                                { title: 'Staff', rating: null },
                                { title: 'Facilities', rating: null },
                                { title: 'Cleanliness', rating: null },
                                { title: 'Comfort', rating: null },
                                { title: 'Location', rating: null },
                                { title: 'Value for Money', rating: null },
                            ]}
                        >
                            xxx.<br/>
                            Find it <a href="https://maps.app.goo.gl/TrEuBrfNQZYVWT2c6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
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
                                    <a href="#bali" onClick={(e) => handleTocClick(e, 'bali')} className="block w-full text-left pl-20 font-bold hover:underline">Bali</a>
                                </li>
                                <li>
                                    <a href="#gili-islands" onClick={(e) => handleTocClick(e, 'gili-islands')} className="block w-full text-left pl-20 font-bold hover:underline">Gili Islands</a>
                                </li>
                                <li>
                                    <a href="#lombok" onClick={(e) => handleTocClick(e, 'lombok')} className="block w-full text-left pl-20 font-bold hover:underline">Lombok</a>
                                </li>
                                <li>
                                    <a href="#komodo-national-park" onClick={(e) => handleTocClick(e, 'komodo-national-park')} className="block w-full text-left pl-20 font-bold hover:underline">Komodo National Park</a>
                                </li>
                                <li>
                                    <a href="#nusa-penida" onClick={(e) => handleTocClick(e, 'nusa-penida')} className="block w-full text-left pl-20 font-bold hover:underline">Nusa Penida</a>
                                </li>
                                <li>
                                    <a href="#hotels" onClick={(e) => handleTocClick(e, 'hotels')} className="block w-full text-left pl-20 font-bold hover:underline">Hotel Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="sticky top-[300px] self-start flex items-center justify-end mb-4 hover:scale-105 transition-transform duration-300">
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