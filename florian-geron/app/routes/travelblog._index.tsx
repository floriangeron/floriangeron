import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Florian Géron" },
    { name: "My personal website", content: "My Travel Blog" },
    { description: "Collection of travel blogs." },
  ];
};

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

    // Group posts by year (extract 4-digit year from the `date` string)
    const postsByYear = blogPosts.reduce<Record<string, typeof blogPosts>>((acc, post) => {
        const match = post.date.match(/\d{4}/);
        const year = match ? match[0] : "Unknown";
        if (!acc[year]) acc[year] = [];
        acc[year].push(post);
        return acc;
    }, {});

    const [visible, setVisible] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const key = entry.target.getAttribute("data-key");
                        if (key) {
                            setVisible((v) => (v[key] ? v : { ...v, [key]: true }));
                            io.unobserve(entry.target);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const els = document.querySelectorAll("[data-animate]");
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Travel Blog</h1>
                    <p className="text-lg text-gray-700">
                        Adventures and discoveries from around the world
                    </p>
                </header>

                {/* Blog Posts */}
                <div className="relative">
                    {/* Decorative vertical, slightly-bendy SVG line (beside posts) - hidden on small screens */}
                    <div className="absolute inset-y-0 left-0 hidden md:block pointer-events-none z-0">
                        <svg
                                viewBox="0 0 100 1200"
                                preserveAspectRatio="none"
                                className="h-full w-48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <defs>
                                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#E6EEF8" />
                                    <stop offset="100%" stopColor="#DCEFFE" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M30 0 C10 140, 50 280, 30 420 C10 560, 50 700, 30 840 C10 980, 50 1120, 30 1200"
                                fill="none"
                                stroke="url(#g)"
                                strokeWidth="12"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.98"
                            />
                        </svg>
                    </div>

                    <div className="space-y-12 ml-4 md:ml-44">
                        {Object.keys(postsByYear)
                            .sort((a, b) => Number(b) - Number(a))
                            .map((year) => (
                            <div key={year} className="relative">
                                {/* Year marker positioned to align with the left SVG timeline */}
                                <div className="absolute -left-8 md:-left-48 flex items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-white/90 border border-black-200 px-6 py-2 rounded-md text-lg md:text-3xl font-bold text-blue-500 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                            {year}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {postsByYear[year].map((post, idx) => {
                                    const keyAttr = `${post.id ?? 'post'}-${year}-${idx}`;
                                    return (
                                            <article
                                                key={keyAttr}
                                                data-animate
                                                data-key={keyAttr}
                                                className={
                                                    `bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform ` +
                                                    (visible[keyAttr] ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0")
                                                }
                                                style={{
                                                    willChange: "transform, opacity",
                                                    transition: "transform 1000ms ease-out, opacity 1000ms ease-out, box-shadow 300ms ease"
                                                }}
                                            >
                                                {/* Image */}
                                                <Link to={`/travelblog/${post.id}`} className="block h-[220px] sm:h-[300px] md:h-[450px] bg-gray-300 overflow-hidden">
                                                    <img
                                                        src={post.imageUrl}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                </Link>

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
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
