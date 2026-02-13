import { Link } from "@remix-run/react";

export default function TravelBlog() {
    const blogPosts = [
        {
            id: "southernvietnam",
            title: "The Highlights of Southern Vietnam",
            date: "December 2025",
            excerpt: "Exploring the main sights of Vietnam's southern region...",
            content:
                "Join me on my exploration of Ho Chi Minh City and some of its surrounding natural beauty. With only one week to spend here, we explored the city itself and the impressive Mekong Delta to its South.",
            imageUrl: "/images/travel/vietnam/hochiminh.JPG",
        },
        {
            id: "angkor",
            title: "Exploring the Ancient Wonders of Angkor Wat",
            date: "December 2025",
            excerpt: "A journey through time and history...",
            content:
                "Join me on a journey through the ancient temples around Angkor Wat, the world's largest collection of ancient temples, hidden in the jungles of Cambodia.",
            imageUrl: "/images/travel/Angkor.jpeg",
        },
        {
            id: "laos",
            title: "Sunsets and Adventure in Laos",
            date: "November 2025",
            excerpt: "Climbing many a mountain for a sunset...",
            content:
                "Join me on our one-week journey through Laos, exploring some of the beautiful landscapes and towns of this hidden gem in Southeast Asia.",
            imageUrl: "/images/travel/Laos.jpeg",
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Travel Blog</h1>
                    <p className="text-lg text-gray-700">
                        Adventures and discoveries from around the world
                    </p>
                </header>

                {/* Blog Posts */}
                <div className="space-y-12">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="h-[450px] bg-gray-300 overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-3xl font-bold text-gray-900">
                                            {post.title}
                                        </h2>
                                    <span className="text-sm text-gray-500 font-semibold">
                                        {post.date}
                                    </span>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    {post.content}
                                </p>

                                <Link to={`/travelblog/${post.id}`} className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
