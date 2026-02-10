import { Link } from "@remix-run/react";

export default function TravelBlog() {
    const blogPosts = [
        {
            id: "angkor",
            title: "Exploring the Ancient Wonders of Angkor Wat",
            date: "December 2025",
            excerpt: "A journey through time and history...",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            imageUrl: "/images/travel/Angkor.jpeg",
        },
        {
            id: "laos",
            title: "Sunsets and Adventure in Laos",
            date: "November 2025",
            excerpt: "Climbing many a mountain for a sunset...",
            content:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            imageUrl: "/images/travel/Laos.jpeg",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-amber-900 mb-4">Travel Blog</h1>
                    <p className="text-lg text-amber-700">
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
                                    <h2 className="text-3xl font-bold text-amber-900">
                                        {post.title}
                                    </h2>
                                    <span className="text-sm text-gray-500 font-semibold">
                                        {post.date}
                                    </span>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    {post.content}
                                </p>

                                <Link to={`/travelblogs/${post.id}`} className="text-amber-600 hover:text-amber-800 font-semibold transition-colors duration-200">
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