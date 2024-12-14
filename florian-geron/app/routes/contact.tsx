import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Florian Géron" },
    { name: "My personal website", content: "Contact" },
    { description: "How to contact me." },
  ];
};

export default function Contact() {
    return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16 w-full">
        {/* Links Section */}
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            Let's connect:
          </p>
          <ul>
            {resources.map(({ href, text, icon }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const resources = [
    {
      href: "https://www.linkedin.com/in/florian-geron",
      text: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
        >
          <path
            d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/floriangeron/",
      text: "Instagram",
      icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <rect
          x="3"
          y="6"
          width="14"
          height="10"
          rx="2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="11"
          r="3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 6L7.5 4H12.5L13.5 6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      ),
    },
  ];