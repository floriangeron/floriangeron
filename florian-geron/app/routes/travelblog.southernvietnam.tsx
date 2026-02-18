import { MapPinIcon, GlobeAltIcon, CurrencyDollarIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import AnimatedWave from "~/components/AnimatedWave";
import { useState } from "react";

export default function SouthernVietnam() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const routeImg = "/images/travel/vietnam/VietnamRoute.png";

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
                    <main className="md:col-span-3 text-gray-800">
                        <h2 id="our-journey" className="text-4xl font-bold mb-4">Our Journey</h2>
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
                        </p>

                        <h3 id="ho-chi-minh-city-day-3" className="text-2xl font-bold mb-4">Day 3 - Cu Chi</h3>
                        <p className="mb-6 leading-relaxed">
                            On our third day, we visited the Cu Chi Tunnels, a network of underground tunnels used by the Viet Cong during the Vietnam War.
                            This was a memorable trip, especially after learning more about the war at the War Remnants Museum the day before.
                            The site itself has been turned into somewhat of a tourist attraction, which sometimes made light of the situation for which the tunnels were used, making the visit to the museum all the more important.
                            <br/>
                            It's good to know that this site is a solid 3-hour drive from the city. We booked our tour via GetYourGuide who organized transport and a guide.
                            <br />
                            <br />
                            After the Cu Chi Tunnels, we headed back to the city for some more food. We had heard a lot about Pizza 4P's, a popular pizza place in HCMC that uses local ingredients and has a unique fusion of Italian and Vietnamese flavors. 
                            We decided to give it a try for dinner, and we were not disappointed! 
                            The place allows you to create half-and-half pizzas, which allowed us to taste four different pizzas between the two of us.
                            The tom yum pizza was such a success that we decided to order a third pizza, fully topped with the tom yum ingredients.
                        </p>

                        <h3 id="ho-chi-minh-city-day-4" className="text-2xl font-bold mb-4">Day 4 - Last bites</h3>
                        <p className="mb-6 leading-relaxed">
                            The morning of our departure to Can Tho, I woke up with an ear infection. We visited the Centre Médical International, where a French doctor by the name of Emmanuel prescribed me some Fusidine, which took care of the infection quickly.
                            <br />
                            We decided to go to a place called Propaganda for lunch. We were blown away by the drinks we ordered, but were slightly disappointed by the food. The decor of the place was very cool though, with a lot of communist propaganda posters.
                            <br />
                            After lunch, we checked out some last sights, including the Jade Emperor Pagoda, dedicated to the supreme god of Taoism.
                            We then visited the Cho Tan Dinh market, which was a little less touristy than the Ben Thanh Market, but we didn't have much success finding gifts here as it seemed to be more of a local market with a focus on textiles.
                            We ended our stay in HCMC with a drink at Mary Jane's rooftop bar right opposite the market, another place we can highly recommend. 
                        </p>

                        <h2 id="mekong-delta" className="text-4xl font-bold mb-4">The Mekong Delta</h2>
                        <h3 id="mekong-delta-day-1" className="text-2xl font-bold mb-4">Day 1 - Arrival in Can Tho</h3>
                        <p className="mb-6 leading-relaxed">
                            Arrival during the finale between Thailand and Vietnam.
                            Visiting TAK speakeasy.
                        </p>

                        <h3 id="mekong-delta-day-2" className="text-2xl font-bold mb-4">Day 2 - Exploring Can Tho</h3>
                        <p className="mb-6 leading-relaxed">
                            Breakfast at Diem Tam - Ca Phe Co Hang.
                            Visiting temples: Phat-Giao Viet-nam & Muniransay Khmer Buddhist temple.
                            Stroll along the riverside quay looking for tour operators.
                            Lunch at the Lighthouse, a French bistro.
                            Walking over the Love Bridhe to an resort area in development. Heavy rains.
                            Hotpot dinner at Com O 68 Can Tho.
                        </p>

                        <h3 id="mekong-delta-day-3" className="text-2xl font-bold mb-4">Day 3 - Cai Rang Floatin Market</h3>
                        <p className="mb-6 leading-relaxed">
                            Cai Rang floating market.
                        </p>

                        <h3 id="mekong-delta-day-3" className="text-2xl font-bold mb-4">Day 4 - My Tho</h3>
                        <p className="mb-6 leading-relaxed">
                            We booked a tour to My Tho with Get Your Guide.
                            We visited two islands and the Vinh Trang Pagoda, a Buddhist temple with a mix of Asian architectural styles, including Vietnamese, Khmer, and Chinese influences. The temple is known for its intricate carvings and statues, as well as its peaceful atmosphere.
                            Dinner in HCMC at Khap Khap with Rebecca.
                        </p>

                        <h2 id="HCMC-revisited" className="text-4xl font-bold mb-4">HCMC Revisited</h2>
                        <h3 id="HCMC-revisited-day-1" className="text-2xl font-bold mb-4">Day 1 - The last highlights</h3>
                        <p className="mb-6 leading-relaxed">
                            Lorem Ipsum
                        </p>

                        <h3 id="HCMC-revisited-day-2" className="text-2xl font-bold mb-4">Day 2 - The last morning</h3>
                        <p className="mb-6 leading-relaxed">
                            Lorem Ipsum
                        </p>

                        <h2 id="hotel-reviews" className="text-4xl font-bold mb-4">Hotel Reviews</h2>
                        <p className="mb-6 leading-relaxed">
                            [Hotel reviews for the places we stayed at]
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </p>

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
                            </ul>
                        </nav>
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