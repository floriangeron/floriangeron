import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { useState } from "react";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const navLinks = [
    { to: "/", label: "About Me" },
    { to: "/timeline", label: "Timeline" },
    { to: "/pyramids", label: "Pyramids" },
    { to: "/funfacts", label: "Fun Facts" },
    { to: "/cv", label: "Résumé" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="icon" href="/my-logo-2-zoom.png" />
      </head>

      <body className="flex h-screen relative">

        {/* Toggle Button */}
        <button
          className={`fixed top-4 transition-all duration-300 z-10 ${
            isSidebarOpen ? "left-[16.5rem]" : "left-4"
          } bg-gray-300 text-gray-600 px-2 py-1 rounded shadow-md`}
          onClick={() => setSidebarOpen(!isSidebarOpen)} // Toggle state
        >
          {isSidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-200 text-black p-4 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0 z-40" : "-translate-x-full z-10"
          }`}
          style={{ width: "16rem" }}
        >
          <h1 className="text-2xl font-bold mb-4">Navigation</h1>
          <nav>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`hover:text-gray-500 ${
                      location.pathname === to ? "text-gray-500" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 overflow-auto transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
