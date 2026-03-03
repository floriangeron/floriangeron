import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Laos Travel Blog" },
    { name: "My personal website", content: "My Laos Travel Blog" },
    { description: "Travel blog about Laos." },
  ];
};

export default function Laos() {
    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Laos</h1>
                    <p className="text-lg text-gray-700">
                        Coming soon...
                    </p>
                </header>
            </div>
        </div>
    )
}