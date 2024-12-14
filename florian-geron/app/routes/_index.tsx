import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "Florian Géron" },
      { name: "My personal website", content: "About Me" },
      { description: "Learn more about me." },
    ];
  };

// The main component for the "About Me" page
export default function AboutMe() {

    return (
        <div className="flex flex-col min-h-screen items-center">
          <div className="flex flex-col items-center gap-16 w-full">
            {/* Header Section*/}
            <header className="flex flex-col items-center gap-9 pt-12">
              <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                About Me<span className="sr-only"> Florian Géron</span>
              </h1>
              <div className="h-[270px] w-[434px]">
                <img
                  src="/_DSC2733.jpg"
                  alt="Florian"
                  className="w-full"
                />
              </div>
            </header>
            
            {/* About Me Section */}
            <section className="flex flex-col items-center text-center gap-6 px-6 max-w-2xl">
            <p className="text-gray-600 dark:text-gray-300 text-left">
                {/* Replace this placeholder text with your personal story or details */}
                Hello! My name is Florian.
                This website is a space where I share a little more about myself and my journey.
            </p>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Who I Am
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-left">
                {/* Replace this placeholder text with your personal story or details */}
                I am passionate about [your passions or interests]. 
                With experience in [your expertise], I enjoy [what you enjoy doing]. 
            </p>
            </section>

          </div>
        </div>
    );
  }