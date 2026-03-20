import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Cinque Terre Travel Blog" },
    { name: "My personal website", content: "My Cinque Terre Travel Blog" },
    { description: "Travel blog about Cinque Terre." },
  ];
};

export default function Angkor() {
    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Cinque Terre</h1>
                    <p className="text-lg text-gray-700">
                        Coming soon...
                    </p>
                </header>
            </div>
        </div>
    )
}