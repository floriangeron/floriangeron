import { useState, useEffect } from "react";
import { MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import AnimatedWave from "~/components/AnimatedWave";
import { StarScale } from '../components/ui/StarRating';
import CollapsibleReview from '../components/ui/CollapsibleReview';
import { StarLine } from '../components/ui/StarLine';
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

export default function SouthernVietnam() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
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
    
    const routeImg = "/images/travel/vietnam/VietnamRoute.png";
    const imgCaption = [
        "Our guide holding a bee hive",
        "Our guide handling a python",
        "A snake suspended in 'Happy Water'",
        "Tuktuk through the jungle",
        "Boat ride on the Mekong",
        "Locals on the river",
        "My Tho port building",
        "Vinh Trang Happy Buddha",
        "Vinh Trang Pagoda",
        "Vinh Trang Reclining Buddha",
        "Vinh Trang Tall Buddha",
    ]; 

    function openLightbox(src: string) {
        setLightboxSrc(src);
    }

    function handleTocClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // update the hash without adding history entry
            history.replaceState(null, '', `#${id}`);
        }
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
            `}</style>
            {/* Title Card */}
            <div className="relative h-[700px] w-full overflow-hidden">
                <img
                    src="/images/travel/vietnam/hochiminh.JPG"
                    alt="Southern Vietnam"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Southern Vietnam</h1>
                        <p className="text-2xl">Exploring Ho Chi Minh City and the Mekong Delta</p>
                    </div>
                </div>
                
                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-[120%]">
                    <AnimatedWave />
                </div>

            </div>

            
            <div className="max-w-7xl mx-auto py-12 px-4">

                {/* Key Info Icons (constrained) */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                        <div className="text-center">
                            <MapPinIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">City of Arrival</h3>
                            <p className="text-gray-600">Ho Chi Minh City</p>
                        </div>
                        <div className="text-center">
                            <GlobeAltIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Language</h3>
                            <p className="text-gray-600">Vietnamese</p>
                        </div>
                        <div className="text-center">
                            <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Currency</h3>
                            <p className="text-gray-600">Vietnamese Dong (VND)</p>
                        </div>
                        <div className="text-center">
                            <ClockIcon className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                            <h3 className="font-semibold text-gray-900">Travel Duration</h3>
                            <p className="text-gray-600">1 Week</p>
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
                    <main className={`md:col-span-3 text-gray-800 ${fontSizeClass}`}>

                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
                        <h3 id="what-we-did" className="text-2xl font-bold mb-4">What we did</h3>
                        <div className="mb-6 leading-relaxed">
                            We had only one week to spend in this part of South East Asia.
                            As such, we spent our time in the main city of Southern Vietnam, Ho Chi Minh City, and the impressive Mekong Delta to its South.
                            In the Mekong Delta, we based ourselves in Can Tho and My Tho.
                            <br />

                            <figure>
                                <img
                                    src={routeImg}
                                    alt="Route we travelled"
                                    className="w-full rounded-lg shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox(routeImg)}
                                />
                                <figcaption className="text-center text-sm text-gray-600">Route we travelled — Ho Chi Minh City to the Mekong Delta</figcaption>
                            </figure>
                        </div>
                        <h3 id="what-we-skipped" className="text-2xl font-bold mb-4">What we skipped</h3>
                        <div className="mb-6 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Phu Quoc Island:
                                    <br/>
                                    From our research, this island looked overly commercialized and touristy. We decided to spend our time on the Cambodian Koh Rong islands instead.
                                </li>
                                <li>
                                    Da Lat:
                                    <br/>
                                    If we had had more time, we would've liked to check out Da Lat, mainly to visit the nature around the city.
                                </li>
                                <li>
                                    Mui Ne:
                                    <br/>
                                    Another place we would've like to check out if had had more time, mainly to see the sand dunes and to surf.
                                </li>
                                <li>
                                    Chau Doc:
                                    <br/>
                                    The mangroves around Chau Doc peaked our interest, but we decided to skip it in favor of My Tho.
                                </li>
                            </ul>
                        </div>


                        <h2 id="ho-chi-minh-city" className="text-4xl font-bold mb-4">Ho Chi Minh City</h2>
                        <h3 id="ho-chi-minh-city-day-1" className="text-2xl font-bold mb-4">Day 1 - HCMC by Night</h3>
                        <p className="mb-6 leading-relaxed">
                            We arrived in HCMC after sunset, but still decided to head out to see some of the city's iconic sights.
                            <br />
                            First, we went for some dinner at the Ben Nghe Street Food market. Though a little touristy, we liked the diversity of food on offer. I ate a typical Vietnamese pancake, Bánh Xèo, which was nice but wasn't particularly rich in taste in my opinion. <br /> 
                            Then, we walked down Nguyen Hue street, passing the iconic Cafe Apartment building. After taking the obligatory photos of the building, we decided to head West towards the Bui Vien Walking Street.
                            On the way there, we passed the Ben Thanh Market, which was closed, but we took this opportunity to walk into the Silverland hotel next door and take the elevator all the way up to take a look at the city skyline at  night from their rooftop bar and pool. The bar was closed, but luckily we were able to enjoy the view anyway.
                            <br />
                            After this little deviation, we headed straight to the famous Bui Vien Walking Street, a bustling area known for its vibrant nightlife, street food, and lively atmosphere.
                            This street was a little over-the-top for our tastes, but it was fun to experience the energy and see the crazy side of the city at night.
                            After experiencing the madness of this street, we went up to a rooftop bar,{' '}
                            <a href="https://maps.app.goo.gl/iSeJ5NxwRs4jnfRV8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            The View Rooftop Bar
                            </a>
                            , to enjoy a drink in a more relaxed setting and admire the city skyline at night. And that's a wrap for the first night in HCMC!

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CafeApartment.jpg"
                                        alt="The Cafe Apartment on Nguyen Hue Street"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CafeApartment.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Cafe Apartment on Nguyen Hue Street</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/BuiVien.jpg"
                                        alt="Bui Vien Walking Street at night"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/BuiVien.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Bui Vien Walking Street at night</figcaption>
                                </figure>
                            </div>
                        </p>

                        <h3 id="ho-chi-minh-city-day-2" className="text-2xl font-bold mb-4">Day 2 - Saigon Fever</h3>
                        <p className="mb-6 leading-relaxed">
                            Our first full day in Ho Chi Minh City! We head a lot of things to do in this city, but one thing was at the top of our mind. We would be flying home on the 23rd of December, leaving us no time to do Christmas shopping at home. Therefore, our first stop in HCMC would be some markets to buy some unique Christmas gifts for our friends and family.
                            We took a Grab to the Ben Thanh Market, the main market in the city. We stopped for an eggyolk coffee at a small cafe right across the street from the market first, before heading into the market. 
                            The market itself is a bustling hive with local goods and knockoff designer items. We had a lot of fun browsing through the different stalls and picking out some unique gifts for our loved ones back home.
                            <br />
                            After the market, we headed to Roots Plant-based cafe for lunch. This place was a little hidden gem, with a cozy atmosphere and delicious plant-based dishes. We both really enjoyed our meals here and would highly recommend it to anyone looking for a tasty and healthy meal in HCMC. The coconut coffee was especially memorable!
                            <br />
                            After lunch, we went back to the markets for some more shopping. We headed to the Com Tam Saigon Central Market, which was a little less touristy than the Ben Thanh Market. Interestingly, the vendors here were less open to bargaining than at the Ben Thanh Market. At Benh Than, prices would start very high, but you could bargain down as much as 80%. At Com Tam, prices were more reasonable to start with, but there was less room for bargaining.
                            <br />
                            <br />
                            After this shopping spree, we visited the War Remnants Museum. This is a museum that I can highly recommend, as it will leave a lasting impression on you. The museum shows the brutal reality and the horrors of the Vietnam War, with graphic photos from the war. Especially the section on the lasting effects of Agent Orange left a deep impression, showing the impact that this chemical weapon still has on the Vietnamese people today.
                            <br />
                            <br />
                            We processed the experience of the museum with a relaxed dinner at the Ben Nghe Street Food market, which felt familiar to us at this point. After dinner, we visited a classy speakeasy nextdoor, called the Rabbit Hole, which we highly recommend. We passed the Notre Dame Cathedral, dressed up in Christmas lights, on the way back to our hotel.

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/BenNghe.jpg"
                                        alt="The Ben Nghe Street Food Market"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/BenNghe.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Ben Nghe Street Food Market</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/NotreDame.jpg"
                                        alt="Notre Dame Cathedral at night"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/NotreDame.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Notre Dame Cathedral at night</figcaption>
                                </figure>
                            </div>

                        </p>

                        <h3 id="ho-chi-minh-city-day-3" className="text-2xl font-bold mb-4">Day 3 - Cu Chi</h3>
                        <p className="mb-6 leading-relaxed">
                            On our third day, we visited the Cu Chi Tunnels, a network of underground tunnels used by the Viet Cong during the Vietnam War.
                            This was a memorable trip, especially after learning more about the war at the War Remnants Museum the day before.
                            The site itself has been turned into somewhat of a tourist attraction, which sometimes made light of the situation for which the tunnels were used, making the visit to the museum all the more important.
                            <br/>
                            It's good to know that this site is a solid 3-hour drive from the city. We booked our tour via {' '}
                            <a href="https://www.getyourguide.com/cu-chi-tunnels-l3671/ho-chi-minh-city-cu-chi-tunnels-morning-or-afternoon-tour-t60689/?utm_source=getyourguide&utm_medium=sharing&utm_campaign=activity_details" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Get Your Guide
                            </a>
                            {' '} who organized transport and a guide.
                            <br />
                            <br />
                            After the Cu Chi Tunnels, we headed back to the city for some more food. We had heard a lot about Pizza 4P's, a popular pizza place in HCMC that uses local ingredients and has a unique fusion of Italian and Vietnamese flavors. 
                            We decided to give it a try for dinner, and we were not disappointed! 
                            The place allows you to create half-and-half pizzas, which allowed us to taste four different pizzas between the two of us.
                            The tom yum pizza was such a success that we decided to order a third pizza, fully topped with the tom yum ingredients.

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CuChi.jpg"
                                        alt="The Cu Chi Tunnels"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CuChi.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">A tank greeting you as you enter the Cu Chi site</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/Pizza.jpg"
                                        alt="Pizza 4P's"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/Pizza.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Pizza 4P's Half and Half Pizza</figcaption>
                                </figure>
                            </div>

                        </p>

                        <h3 id="ho-chi-minh-city-day-4" className="text-2xl font-bold mb-4">Day 4 - Last bites</h3>
                        <p className="mb-6 leading-relaxed">
                            The morning of our departure to Can Tho, I woke up with an ear infection. We visited the Centre Médical International, where a French doctor by the name of Emmanuel prescribed me some Fusidine, which took care of the infection quickly.
                            <br />
                            We decided to go to a place called Propaganda for lunch. We were blown away by the drinks we ordered, but were slightly disappointed by the food. The decor of the place was very cool though, with a lot of communist propaganda art.
                            <br />
                            After lunch, we checked out some last sights, including the Jade Emperor Pagoda, dedicated to the supreme god of Taoism.
                            We then visited the Cho Tan Dinh market, which was a little less touristy than the Ben Thanh Market, but we didn't have much success finding gifts here as it seemed to be more of a local market with a focus on textiles.
                            We ended our stay in HCMC with a drink at Mary Jane's rooftop bar right opposite the market, another place we can highly recommend.

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/Propaganda.jpg"
                                        alt="The Propaganda Restaurant"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/Propaganda.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Propaganda Restaurant</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/MaryJane.JPG"
                                        alt="Mary Jane's Rooftop Bar"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/MaryJane.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Mary Jane's Rooftop Bar</figcaption>
                                </figure>
                            </div>

                        </p>

                        <br />

                        <h2 id="mekong-delta" className="text-4xl font-bold mb-4">The Mekong Delta</h2>
                        <h3 id="mekong-delta-day-1" className="text-2xl font-bold mb-4">Day 1 - Arrival in Can Tho</h3>
                        <p className="mb-6 leading-relaxed">
                            We booked a van via 12GoAsia to take us from HCMC to Can Tho, which took us around 4 hours.
                            The van was comfortable and the ride was smooth, but when arriving in Can Tho, the driver dropped us off outside of the city.
                            The van company arranged another ride for us to the center of the city, which went smoothly enough.
                            Upon arriving, we realized that there was a football match between the Vietnamese and Thai national teams. Not just any match, the finale of the SEA Games!
                            We exited the car right after the end of the match, which Vietnam had won! The streets were filled with people celebrating the victory, waving flags, honking horns, and singing. 
                            A memorable way to arrive in a new city!
                            <br /><br />
                            We roamed around the streets for a while, enjoying the festive atmosphere and high-fiving every other Vietnamese person we passed by.
                            We ended up visiting a local speakeasy, called TAK. We were the only Westerners, and the staff didn't speak English, but were very friendly and welcoming. We had no trouble communicating thanks to Google Translate.
                            We highly recommend this place, which seemed like an alternative place for the artists and creatives of the city to hang out.
                            
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/TAK1.JPG"
                                        alt="TAK Speakeasy"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/TAK1.jpg')}
                                    />
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/TAK2.jpg"
                                        alt="TAK Speakeasy"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/TAK2.jpg')}
                                    />
                                </figure>
                                
                            </div>
                            <figcaption className="text-center text-sm text-gray-600">TAK Speakeasy</figcaption>

                        </p>

                        <h3 id="mekong-delta-day-2" className="text-2xl font-bold mb-4">Day 2 - Exploring Can Tho</h3>
                        <p className="mb-6 leading-relaxed">
                            We started our first full day in Can Tho with a breakfast at a local cafe called Diem Tam - Ca Phe Co Hang. With great coffee and extremely low prices, this place is a hidden gem and a great way to start the day in Can Tho.
                            <br /><br />
                            To start off our time in Can Tho, we visited two temples: the Phat-Giao Viet-Nam, a Buddhist temple with mixed Asian influences, and the Muniransay Khmer Buddhist temple, a temple with a unique blend of Vietnamese and Khmer architectural styles. 
                            <br />
                            
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/PhatGiao.jpg"
                                        alt="The Phat Giao Temple"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/PhatGiao.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Phat Giao Temple</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/Muniransay.jpg"
                                        alt="The Muniransay Khmer Buddhist Temple"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/Muniransay.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Muniransay Khmer Buddhist Temple</figcaption>
                                </figure>
                            </div>

                            <br />
                            After visiting the temples, we strolled along the riverside quay, looking for tour operators.
                            This was a surprisingly difficult task, as most of the addresses on Google Maps related to Tour operators were not accurate.
                            We ended up finding a tour operator that could take us to the floating markets the next day.
                            For lunch, we went to L'Escale, a rooftop French bistro with a nice view over the Mekong.
                            After lunch, we walked over the Love Bridge to a resort area that was still in development.
                            When walking back, we got caught in a heavy rainstorm, at which point we decided to Grab back to our hotel.
                            <br /><br />
                            We ended our day with a hotpot dinner at a local restaurant called Com O 68 Can Tho. Once again, English was not spoken by the staff nor were there any English menus, but the staff was very friendly and explained the process of cooking with the hotpot to us.

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/Escale.jpg"
                                        alt="The Escale Restaurant"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/Escale.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The view from L'Escale Restaurant</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/Hotpot.jpg"
                                        alt="The Hotpot Dinner"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/Hotpot.JPG')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The Hotpot Dinner at Com O 68 Can Tho</figcaption>
                                </figure>
                            </div>

                        </p>

                        <h3 id="mekong-delta-day-3" className="text-2xl font-bold mb-4">Day 3 - Cai Rang Floating Market</h3>
                        <p className="mb-6 leading-relaxed">
                            The following day started early with a tour (booked via the "Travel Service Center" under the International Hotel in Can Tho) to the Cai Rang Floating Market, the largest floating market in the Mekong Delta.
                            This market is an iconic sight of the Mekong Delta, with vendors selling their goods from boats on the river.
                            Apparently, this market has decreased in size over the years, as improved logistics make a floating market less necessary for the locals, but it is still a popular tourist attraction and a great way to experience the local culture and way of life in the Mekong Delta.
                            Fun fact: To indicate what produce they are selling, vendors at the market tie some of their produce to a long pole on the boat, which can be seen from a distance.
                            <br />
                            
                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CaiRang.jpg"
                                        alt="The Cai Rang Floating Market"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CaiRang.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Vendors at Cai Rang displaying their produce</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CaiRangCoffee.jpg"
                                        alt="The Coffee at Cai Rang"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CaiRangCoffee.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Getting some coffee at Cai Rang</figcaption>
                                </figure>
                            </div>

                            <br />
                            During the tour, we visited a factory that produces rice noodles and coconut candy, which felt mostly like a tourist attraction but was still reasonably fun.
                            We also visited a family which runs a small floating farm on the river, where they grow vegetables and raise animals on a floating platform.

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CaiRangNoodles.jpg"
                                        alt="Cai Rang Noodles"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CaiRangNoodles.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Rice noodles at Cai Rang</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CaiRangFarm.jpg"
                                        alt="The Cai Rang Farm"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CaiRangFarm.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">The floating farm at Cai Rang</figcaption>
                                </figure>
                            </div>

                        </p>

                        <h3 id="mekong-delta-day-4" className="text-2xl font-bold mb-4">Day 4 - My Tho</h3>
                        <p className="mb-6 leading-relaxed">
                            After our troubles with finding a local tour operator in Can Tho, we decided to book a tour to My Tho with{' '}
                            <a href="https://www.getyourguide.com/ho-chi-minh-city-l272/from-ho-chi-minh-city-mekong-delta-small-group-tour-t60784/?utm_source=getyourguide&utm_medium=sharing&utm_campaign=activity_details" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Get Your Guide
                            </a>
                            .
                            During this tour, we visited two islands nearby My Tho: Thoi Son / Unicorn Island and Con Phung / Phoenix Island.
                            Here, we partook in many activities, including tasting fresh honey right off the hive, trying some coconut candy, driving through the jungle on a small tuktuk, flowing down the river on a small boat (sampan), and listening to tradidional music.
                            Afterwards, we visited the Vinh Trang Pagoda, a temple famous for its three giant Buddha statues, including a Reclining Buddha and a fat, happy Buddha.
                            <br /><br />
                            <Carousel className="w-full">
                                <CarouselContent className="-ml-1">
                                    {Array.from({ length: 11 }).map((_, index) => (
                                    <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                        <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-0">
                                            <img 
                                                src={`/images/travel/vietnam/mytho/MyTho${index+1}.jpg`} 
                                                alt={`My Tho ${index+1}`} 
                                                className="w-full h-full sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer" 
                                                onClick={() => openLightbox(`/images/travel/vietnam/mytho/MyTho${index+1}.jpg`)}/>
                                            </CardContent>
                                        </Card>
                                        <figcaption className="text-center text-sm text-gray-600">{imgCaption[index]}</figcaption>
                                        </div>
                                    </CarouselItem>
                                    ))}                                    
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            <br /><br />

                            We ended our day back in HCMC, where we had dinner at Bep Me In (Nguyen Thai Binh branch), which was highly recommended on several blogs online.
                            The food was rather meat-focused and underwhelming, and the AC was very cold for our tastes, so all in all we didn't have a great experience here.
                        
                        </p>

                        <h2 id="HCMC-revisited" className="text-4xl font-bold mb-4">HCMC Revisited</h2>
                        <h3 id="HCMC-revisited-day-1" className="text-2xl font-bold mb-4">Day 1 - The last highlights</h3>
                        <p className="mb-6 leading-relaxed">
                            Our last full day on our trip! 
                            We started the day with a coffee and a baked bun at Garden Kisses, a cute cafe with nice food and drinks!
                            We decided to check off some of the sights we hadn't seen yet in HCMC, like the Ho Chi Minh Book Street, the Saigon Central Post Office, and the Saigon Opera House.
                            We then decided to join the Instagram crowd and have a coffee in one of the cafes in the Cafe Apartment.
                            The spots on the top floor balcony were taken, so we had a coffee at Good Day on the floor below, where we took some instagrammable pictures ourselves.
                            <br /><br />
                            For dinner, we visited Man Moi Tao Dan, an upscale restaurant serving local food as made by the chef's mother.
                            Once again, the food was meat-centered and the AC was a little cold, but we enjoyed our evening here as the food was delicious and the atmosphere was nice, with a mix of locals and tourists.
                            <br /><br />
                            We ended our final day with a visit to Lulu - Bar and Eatery, a Cuban-style cocktail bar (Cuba is considered a close friend to Vietnam due to communist solidarity) with a great atmosphere and delicious cocktails.
                            We highly recommend this place for a romantic night in HCMC!

                            <div className="grid md:grid-cols-2 gap-2">
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/BookSt.jpg"
                                        alt="Ho Chi Minh Book Street"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/BookSt.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Ho Chi Minh Book Street</figcaption>
                                </figure>
                                <figure className="md:col-span-1">
                                    <img
                                        src="/images/travel/vietnam/CafeApt.jpg"
                                        alt="Good Day Cafe in the Cafe Apartment"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/CafeApt.jpg')}
                                    />
                                    <figcaption className="text-center text-sm text-gray-600">Good Day Cafe in the Cafe Apartment</figcaption>
                                </figure>
                            </div>

                        </p>

                        <h3 id="HCMC-revisited-day-2" className="text-2xl font-bold mb-4">Day 2 - The last morning</h3>
                        <p className="mb-6 leading-relaxed">
                            For our last day in Vietnam, we had a relaxed morning and had another coffee at Garden Kisses, followed by a Banh Mi from a nearby stand on the street (Banh Mi Bay Ho).
                            Many locals were buying large numbers of Banh Mis here, which we suspect were for their office lunches with their colleagues.
                            As suspected, the Banh Mi was delicious!
                            <br /><br />
                            We decided to spend our last afternoon in another rooftop bar, this time at the IMC Rooftop Bar.
                            We had a final glass of wine here, before Grabbing to the airport for our flight back home.
                            <br /><br />
                            We had heard horror stories about the waiting lines at the airport, so we arrived 4 hours early.
                            This was a bit of an overkill, as the luggage check-in only opened 3 hours before the flight.
                            We decided to play some card games to pass the time and had a drink at the Butter Bean in the terminal hall, which served us a surprisingly amazing drink with rice and coconut milk. It was amazing.
                            In the end, the check-in and security process went smoothly, and we had a relaxed flight home!
                        </p>

                        {/* Hotel Reviews */}
                        <h2 id="hotel-reviews" className="text-4xl font-bold mb-4">Hotel Reviews</h2>
                        
                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h3 id="hotel-1" className="text-2xl font-bold m-0">Ho Chi Minh City - Nexus House Nguyen Binh Khiem</h3>
                                </div>
                                <div className="flex items-center">
                                    <StarScale rating={3.5} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={6} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={6} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={7} max={10} title='Comfort' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Location' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={8} max={10} title='Value for Money' />
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed mt-2">
                                    All in all, we had a good experience at the Nexus House. 
                                    The location is convenient, the center only being a short Grab away, and the staff was friendly and helpful.
                                    We were allocated a street-facing room at first, which was quite noisy, but after asking the staff, we were moved to a quieter room at the back of the hotel.
                                    Both bathrooms had a faint smell of mold, which was a little unpleasant but also rather common in SEA in our experience.
                                    The rooms are small, but this is advertised on the website and we didn't mind it, as we didn't spend much time in the room anyway.
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/tsq3Bd3UjtTrTLnF9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                </p>
                            </div>
                        </details>

                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h3 id="hotel-2" className="text-2xl font-bold m-0">Ho Chi Minh City - Nguyen Le Home Phan Ton</h3>
                                </div>
                                <div className="flex items-center">
                                    <StarScale rating={3} />
                                </div>
                            </summary>

                            <div className="px-4 pb-4 collapsible-body">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                                        <div className="flex items-center">
                                            <StarLine rating={2} max={10} title='Staff' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={4} max={10} title='Facilities' />
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
                                            <StarLine rating={6} max={10} title='Value for Money' />
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed mt-2">
                                    We booked a room at Nguyen Le Home Dinh Chieu for our last nights in HCMC.
                                    After booking, we were contacted by the hotel, who informed us that they had overbooked and that they would move us to another hotel, the Nguyen Le Home Phan Ton.
                                    We were uncomfortable with this, as we had heard similar stories about "bait and switch" tactics by hotels in SEA.
                                    The hotel was communicative, sent us pictures of the other hotel, and gave us a 10% discount, so we accepted the change.
                                    It turned out that the other address was a new venue of apartment / Airbnb style rooms that the hotel had recently opened.
                                    This meant that the room and furniture was brand new, but they hadn't actually finished setting up the hotel yet.
                                    For example, there were no light bulbs in the living room.
                                    All in all, we had a comfortable stay here. If it wasn't for the bait-and-switch and for the unfinished state of the room, we would have given this hotel a higher rating.
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/xuatxgqi9GddaZ449" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                </p>
                            </div>
                        </details>

                        <details className="group mb-6 rounded-md">
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <div className="flex items-center">
                                    <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h3 id="hotel-3" className="text-2xl font-bold m-0">Can Tho - Luxhome Mekong Hotel</h3>
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
                                            <StarLine rating={6} max={10} title='Facilities' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={9} max={10} title='Cleanliness' />
                                        </div>
                                        <div className="flex items-center">
                                            <StarLine rating={10} max={10} title='Comfort' />
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
                                    This hotel was the hidden gem of our trip.
                                    <br />
                                    We had a wonderful stay at the Luxhome Mekong Hotel.
                                    We got a very spacious and modern room at a very reasonable price, and the staff was extremely friendly and helpful.
                                    The hotel seemed to cater at internal Vietnamese tourists, as the staff did not speak any English, but they were very helpful and accommodating nonetheless.
                                    The hotel is located a little outside of the city center, but this was not a problem for us as we had a Grab to get around.
                                    We would highly recommend this hotel to anyone visiting Can Tho!
                                    <br />
                                    Find it <a href="https://maps.app.goo.gl/XKaeH95JzjNqYzZs8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                </p>
                            </div>
                        </details>

                        {/* Eateries reviews */}

                        <h2 id="food-drink-reviews" className="text-4xl font-bold mb-4">Food & Drinks Reviews</h2>

                        <h3 id="HCMC-restaurants" className="text-2xl font-bold mb-4">HCMC Restaurants</h3>

                            <CollapsibleReview title="Pizza 4P's - Hai Ba Trung" rating={4.5} scale="food">
                                Pizza 4P's is a popular pizza franchise in HCMC, known for its unique pizzas and its young and dynamic atmosphere.
                                We had some delicious food here, which mixed Italian and Vietnamese/SEA cuisines.
                                We started with a mango-and-ham entree (mixing up the Italian melon-and-ham dish) and some wine.
                                The restaurant allows you to create half-and-half pizzas, so we got to try four different pizza styles between the two of us.
                                We were blown away by the tom yum pizza, of which we ordered another one after finishing our first half.
                                The only downside of this restaurant is its rather steep prices compared to other restaurants in HCMC.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/JeUM5eqcU9UpdUzJ9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Propaganda" rating={3} scale="food">
                                This restaurant is known for its decor featuring Vietnamese communist propaganda art, and for its menu of local dishes.
                                We were blowm away by the drinks, but were less impressed by the food we ate there.
                                The food was not bad, but it was not amazing either, and we found it to be overpriced for the quality of the food.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/VPZwEKFDvqWb3KsR6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Bếp Mẹ Ỉn - Nguyễn Thái Bình" rating={2.5} scale="food">
                                This restaurant was recommended to us by several blogs online, but we were not impressed by our experience here.
                                We found the menu to be pretty monotonous and the focus seemed to be on presenting instagrammable dishes rather than on the food itself.
                                The food we had was underwhelming, and the AC was unreasonably cold, which we didn't dress for. The other customers, mostly Vietnamese locals and Chinese toursists, didn't seem to mind the cold.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/YjQA2eZKfG9F7pUFA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Mặn Mòi, Tao Đàn" rating={4} scale="food">
                                An upscale restaurant serving local food, supposedly like a Vietnamese grandmother would make it.
                                The restaurant is known for its unique architecture.
                                As Vietnam is supposed to be an easy cuisine to find vegetarian food, we were surprised to find that the menu was very meat-focused.
                                Nevertheless, the food we had was delicious and the atmosphere was nice.
                                The restaurant seems to attract both tourists and locals, and the service was good, though the AC was a little cold for our tastes, which we found to be a recurring theme in many Vietnamese restaurants with local clientele.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/dVEvrTYbfpuqZcin9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>. 
                            </CollapsibleReview>

                            <CollapsibleReview title="KHAP KHAP Thai Bistro - Thảo Điền" rating={3} scale="food">
                                After several days of Vietnamese food, we were longing for some Thai food again (our favorite SEA cuisine).
                                We visited Khap Khap, which was a Thai restaurant in the expat area of Thao Dien.
                                The food was good though not as good as other Thai food we'd had, with less authentic flavors.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/3Xuv2u6mnNLdqHPL7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>. 
                            </CollapsibleReview>

                        <h3 id="HCMC-cafes" className="text-2xl font-bold mb-4">HCMC Cafes</h3>

                            <CollapsibleReview title="Garden Kisses" rating={4.5} scale="coffee">
                                A cozy little cafe / bakery serving some delicious coffee and pastries. 
                                We enjoyed it so much that we started our day here twice!
                                <br />
                                Find it <a href="https://maps.app.goo.gl/z9PBgH1uGyxm7EuQ7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Roots Plant-Based Cafe" rating={5} scale="coffee">
                                One of our favorite meals in HCMC was at Roots!
                                This is a plant-based cafe / restaurant where we enjoyed a particularly amazing coconut coffee and some delicious vegan bowls.
                                We highly recommend this place, especially if you're looking for a place to get some rest after some shopping at the Benh Thanh market!
                                <br />
                                Find it <a href="https://maps.app.goo.gl/bJj2MdQ1VhcE25Fx8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Eggyolk Coffee" rating={3} scale="coffee">
                                A fun stop for a quick eggyolk coffee break, as well as pastries and other drinks.
                                The eggyolk coffee was a fun experience, and the pastries were also good, though not amazing.
                                The shop also sells eggyolk coffee merchandise like mugs and T-shirts, which is fun but also made it feel a little touristy and gimmicky.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/FCVjsNeAgFpSV4oPA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Ivegan Ben Thanh" rating={1} scale="coffee">
                                We might have simply ordered the wrong thing, but we were not impressed by our visit to this vegan cafe.
                                We found the food to be underwhelming and overpriced (we both had a bowl which wasn't flavorful), the interior was rather sterile and cold, and the service was not great either.
                                Not a terrible experience, but we wouldn't recommend this place.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/CMDXMkMYC6H5EaqK9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Butter Bean" rating={4.5} scale="coffee">
                                A little coffee shop in the airport terminal.
                                This is not the kind of place we'd normally share a review on, but we had to include it because of the amazing drink we had here.
                                We had a drink with rice and coconut milk, which was surprisingly delicious! A great way to end our trip with a final taste of Vietnam.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/T22TgCn2DTrmsBzs7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>
                        
                        <h3 id="HCMC-bars" className="text-2xl font-bold mb-4">HCMC Bars</h3>

                            <CollapsibleReview title="The View Rooftop Bar" rating={4.5} scale="drink">
                                This rooftop bar is located at the end of Bui Vien, the main party street in HCMC, and provides a nice view over the city.
                                Due to its location, it's got more of a party vibe going on, which is fun if that's what you're looking for.
                                It's easy to meet some other travelers here, and the drinks are reasonably priced for a rooftop bar.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/3mRZGKkkSQqGmnYm6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Mary Jane's The Bar" rating={4.5} scale="drink">
                                An unpretentious rooftop bar with nice staff and great views over the city.
                                We needed to kill some time before heading to Can Tho, and we were pleasantly surprised by this bar.
                                This is not a particularly fancy place, but a nice place to have a drink with friends or a romantic date night, with good cocktails at reasonable prices and a relaxed atmosphere.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/25VKrHqTTRdr134Z9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Rabbit Hole" rating={4} scale="drink">
                                An upscale speakeasy-style cocktail bar with a refined interior and a distinguished cocktail menu (with many cocktails referecing Alice in Wonderland).
                                We found the atmosphere a little to quiet and formal for our tastes, and the cocktails come at a higher price, but if you are looking for a refined cocktail experience in HCMC, this is the place to be.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/dAagtAwWQiGj4kNj9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Lulu - Bar & Eatery" rating={4.5} scale="drink">
                                A Cuban-style cocktail bar with a nice, romantic atmosphere.
                                There are several different seating areas, including an area with tables for food and drinks, a bar area with high tables and stools, and a cozy area with sofas and low tables.
                                The restaurant incorporates Cuban culture in its design and menu, with Cuban music playing in the background.
                                The Vietnamese consider Cuba a close friend due to their shared Communist ideology.
                                We had some of the most delicious cocktails of our trip here, and we would highly recommend this place.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/PuwWzwRafbiyTs4Y6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="IMC Rooftop Bar" rating={3} scale="drink">
                                This rooftop bar provides a nice view over the city and has a relaxed atmospohere, great for a drink in the late afternoon with friends and family.
                                We were happy to spend a couple of hours here waiting for our flight, but we wouldn't necessarily recommend coming here just for a drink.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/Dsjhiqu38wYs1LD48" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                        <h3 id="HCMC-street-food" className="text-2xl font-bold mb-4">HCMC Street Food</h3>

                            <CollapsibleReview title="Ben Nghe Street Food" rating={4} scale="hotdog">
                                This market contains lots of stalls with food from different cuisines, mainly Vietnamese but also Thai, Indian, and Korean food.
                                We tried several dishes here, including a Banh Xeo, a savoury Vietnamese pancake, which we found a tad bland compared to other SEA food.
                                We also tried the Thai and Korean food, which were both delicious and very affordable.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/L1ugUxKGUyu7c9oGA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            
                                <figure className="md:col-span-1 w-[50%] mx-auto">
                                    <img
                                        src="/images/travel/vietnam/BenNghe.jpg"
                                        alt="The Ben Nghe Market"
                                        className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                        onClick={() => openLightbox('/images/travel/vietnam/BenNghe.jpg')}
                                    />
                                </figure>
                                <figcaption className="text-center text-sm text-gray-600">Ben Nghe Street Food Market</figcaption>

                            </CollapsibleReview>
                            
                            <CollapsibleReview title="Bánh Mì Bảy Hổ" rating={5} scale="hotdog">
                                Spicy and delicious bánh mì at an unbeatable price.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/RmutEWQzwvRg72dKA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                            <CollapsibleReview title="Bánh Mì Xanh" rating={5} scale="hotdog">
                                Vegan bánh mì restaurant serving two options: all-tofu or fake meat mix.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/vBDgwV2iEPvcBX6X7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                        <h3 id="can-tho-restaurants" className="text-2xl font-bold mb-4">Can Tho Restaurants</h3>

                            <CollapsibleReview title="L'Escale" rating={4.5} scale="food">
                                This restaurant is a French-style bistro overlooking the Mekong river.
                                We enjoyed our food and the view here, and would recommend it for a nice dinner with a view in the center of Can Tho.
                                We especially liked the Vietnamese white wine!
                                <br />
                                Find it <a href="https://maps.app.goo.gl/oucpbZW8SUoUoXP16" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                                
                                <div className="grid md:grid-cols-2 gap-2">
                                    <figure className="md:col-span-1">
                                        <img
                                            src="/images/travel/vietnam/Escale.jpg"
                                            alt="The Escale Restaurant"
                                            className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox('/images/travel/vietnam/Escale.jpg')}
                                        />       
                                    </figure>
                                    <figure className="md:col-span-1">
                                        <img
                                            src="/images/travel/vietnam/Escale2.JPG"
                                            alt="The Escale Restaurant"
                                            className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox('/images/travel/vietnam/Escale2.JPG')}
                                        />
                                    </figure>
                                </div>
                                <figcaption className="text-center text-sm text-gray-600">The view from L'Escale Restaurant</figcaption>
                            
                            </CollapsibleReview>

                            <CollapsibleReview title="Cơm Ơ 68 Cần Thơ" rating={4} scale="food">
                                We decided to check out this restaurant after finding in on Google Maps.
                                The restaurant serves local food at a very affordable price, and the staff seemed to be least prepared for English speakers, but as per usual they were very friendly and helpful nonetheless.
                                We translated the menu using Google Translate and we went for the Beef Hot Pot (Lau Bo).
                                The waiter showed us how to eat it, by putting the beef in the hot pot and wrapping it in a rice paper with some herbs and dipping it in the sauce.
                                We had a fun experience here, but be prepared for a very local experience, as this restaurant seems to cater exclusively to Vietnamese locals.
                                Not recommended if you don't like the ambiguity that comes with ordering from a menu you don't understand.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/v4TgP6c53EmZCxKD6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            
                                <div className="grid md:grid-cols-2 gap-2">
                                    <figure className="md:col-span-1">
                                        <img
                                            src="/images/travel/vietnam/Hotpot.jpg"
                                            alt="The Hotpot Dinner"
                                            className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox('/images/travel/vietnam/Hotpot.jpg')}
                                        />
                                    </figure>
                                    <figure className="md:col-span-1">
                                        <img
                                            src="/images/travel/vietnam/HotPot2.JPG"
                                            alt="The Hotpot Dinner"
                                            className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox('/images/travel/vietnam/HotPot2.JPG')}
                                        />
                                        
                                    </figure>
                                </div>
                                <figcaption className="text-center text-sm text-gray-600">The Hotpot Dinner at Com O 68 Can Tho</figcaption>
                            
                            </CollapsibleReview>

                            <CollapsibleReview title="Bún bò Huế - Huỳnh Châu" rating={3} scale="food">
                                Another very local experience, this time recommended by our guide of the floating market.
                                This place exclusively serves Bún bò Huế, a spicy beef noodle soup.
                                The food wasn't our thing, and the restaurant was rather hectic.
                                We didn't enjoy our meal here as much as other local places, but it's a fun experience if you want to try a local specialty.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/WMxDDUfmTvWZ4UQv8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>

                        <h3 id="can-tho-cafes" className="text-2xl font-bold mb-4">Can Tho Cafes</h3>
                            
                            <CollapsibleReview title="ĐIỂM TÂM - CÀ PHÊ CÔ HẰNG" rating={4.5} scale="coffee">
                                This cafe caters to the locals of Can Tho.
                                We had some amazing food and drinks at an even more amazing price.
                                We can definitely recommend!
                                <br />
                                Find it <a href="https://maps.app.goo.gl/MJL87dJRaBBiTY2k8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                            </CollapsibleReview>


                        <h3 id="can-tho-bars" className="text-2xl font-bold mb-4">Can Tho Bars</h3>

                            <CollapsibleReview title="TAK Speakeasy" rating={5} scale="drink">
                                We had found this speakeasy online and decided to visit this local speakeasy in Can Tho.
                                After walking to its direction using Google Maps, we found the place by the seeing the tapir logo on the door.
                                TAK is a charming speakeasy with an intimate atmosphere, catering to the artists and creatives of Can Tho.
                                While the rest of the city was celebrating the football victory against Thailand that evening, the people in the bar seemed to be discussing other topics.
                                The staff didn't speak English, but were very friendly and created some amazing cocktails for us.
                                <br />
                                Find it <a href="https://maps.app.goo.gl/9BfacgV2JwPujkyR8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.

                                <div className="grid md:grid-cols-2 gap-2">
                                    <figure className="md:col-span-1">
                                        <img
                                            src="/images/travel/vietnam/TAK1.JPG"
                                            alt="TAK Speakeasy"
                                            className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox('/images/travel/vietnam/TAK1.jpg')}
                                        />
                                    </figure>
                                    <figure className="md:col-span-1">
                                        <img
                                            src="/images/travel/vietnam/TAK2.jpg"
                                            alt="TAK Speakeasy"
                                            className="w-full shadow-lg my-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openLightbox('/images/travel/vietnam/TAK2.jpg')}
                                        />
                                    </figure>
                                    
                                </div>
                                <figcaption className="text-center text-sm text-gray-600">TAK Speakeasy</figcaption>

                            </CollapsibleReview>

                    </main>

                    <aside className="hidden md:block md:col-span-1">
                        
                        <nav aria-label="Table of contents" className="sticky top-8 self-start bg-white/90 dark:bg-gray-900/80 text-right p-4 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-lg font-semibold mb-3">Contents</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <a href="#our-journey" onClick={(e) => handleTocClick(e, 'our-journey')} className="block w-full text-right hover:underline">Our Journey</a>
                                </li>
                                <li>
                                    <a href="#ho-chi-minh-city" onClick={(e) => handleTocClick(e, 'ho-chi-minh-city')} className="block w-full text-right hover:underline">Ho Chi Minh City</a>
                                </li>
                                <li>
                                    <a href="#mekong-delta" onClick={(e) => handleTocClick(e, 'mekong-delta')} className="block w-full text-right hover:underline">The Mekong Delta</a>
                                </li>
                                <li>
                                    <a href="#HCMC-revisited" onClick={(e) => handleTocClick(e, 'HCMC-revisited')} className="block w-full text-right hover:underline">HCMC Revisited</a>
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
                    <img src={lightboxSrc} alt="Route enlarged" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
                </div>
            )}
        </div>
    );
}