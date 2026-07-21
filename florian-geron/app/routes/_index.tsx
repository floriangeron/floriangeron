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
      <div>
        <div className="flex flex-col min-h-screen items-center gap-16 pb-10 w-full">

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
                Hello, I'm Florian.
                This website is a space where I share a little more about myself and my journey.
            </p>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Who I Am
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-left">
                <ul className="list-disc pl-5">
                    <li>I am a Manager in Data Science and AI at Deloitte. I divide my time between working on in-house AI development projects and client projects in data science and AI.</li>
                    <li>In my spare time, I go to the gym regularly and go for the occasional run. You can also find me reading a steady stream of non-fiction books and spending time with my friends and family.</li>
                    <li>Previously, I played badminton, played piano, and did ballroom dancing.</li>
                    <li>I grew up around Antwerp, Belgium, where I am currently living. I have also lived in Leuven, Vienna, and Sydney.</li>
                    <li>I have a Master's degree in Mechanical Engineering (KU Leuven) and a second Master's degree in Data Science (University of Sydney).</li>
                </ul>
            </p>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 pt-5">
                What's on this site
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-left">
              I made this website to play around with FE development, while sharing some parts of my life with the world. You can find the following pages on this site:
                <ul className="list-disc pl-5 pt-3">
                    <li>A <a href="/timeline" className="text-blue-500 hover:underline">timeline</a> of some major events in my life over the past few years.</li>
                    <li>A collection of images of my friends and I making <a href="/pyramids" className="text-blue-500 hover:underline">human pyramids</a>.</li>
                    <li>A random collection of <a href="/funfacts" className="text-blue-500 hover:underline">fun facts</a>. I like sharing fun facts so having a page dedicated to them seemed appropriate.</li>
                    <li>My <a href="/cv" className="text-blue-500 hover:underline">résumé</a> focusing on my academic and professional achievements and experiences.</li>
                    <li>A <a href="/travelblog" className="text-blue-500 hover:underline">travel journal</a> of the recent adventures of my girlfriend and me.</li>
                    <li>My <a href="/contact" className="text-blue-500 hover:underline">contact details</a>.</li>
                </ul>
            </p>
          </section>

        </div>

        <footer className="bg-gray-100 text-center py-4 mt-auto">
          <p className="text-sm text-gray-600">
            Last updated: June 1st, 2026
          </p>
        </footer>
        
      </div>
    );
  }