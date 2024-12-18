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
        <div className="flex flex-col min-h-screen items-center gap-16 pb-10 w-full">

          {/* Header Section*/}
          <header className="flex flex-col items-center gap-9 pt-12">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              About Me<span className="sr-only"> Florian Géron</span>
            </h1>
            {/* <div className="h-[270px] w-[434px]">
              <img
                src="/_DSC2733.jpg"
                alt="Florian"
                className="w-full"
              />
            </div> */}
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
                    <li>Currently spending my time as a Data Scientist at Deloitte where I develop and coordinate development of AI-powered solutions. I spend most of my time working on in-house projects but am sent out on the odd client project as well.</li>
                    <li>In my spare time, I am a gym rat and a runner. You can also find me reading a steady stream of non-fiction books and spending time with my friends and family.</li>
                    <li>Previously, I played badminton, played piano, and did ballroom dancing. I might pick the latter up again sometime in the future.</li>
                    <li>I grew up around Antwerp, Belgium, where I am currently living. I have also lived in Leuven, Vienna, and Sydney.</li>
                    <li>I have a Master's degree in Mechanical Engineering (KU Leuven) and a second Master's degree in Data Science (University of Sydney).</li>
                </ul>
            </p>
          </section>

        </div>
    );
  }