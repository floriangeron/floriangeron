import type { MetaFunction } from "@remix-run/node";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Florian Géron" },
    { name: "My personal website", content: "My Journey" },
    { description: "Timeline of my life." },
  ];
};

export default function Timeline() {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  useEffect(() => {
    const container = document.querySelector(".flex-1.overflow-auto");
    if (!container) return;

    const handleScroll = () => {
      const atTop = container.scrollTop === 0;
      const atBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight <= 1.5;
  
      setShowTopArrow(!atTop);
      setShowBottomArrow(!atBottom);
    };
  
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".flex-1.overflow-auto");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    const container = document.querySelector(".flex-1.overflow-auto");
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  };

  const milestones = [
    {
      date: "July 2024",
      title: "🎉 Tomorrowland",
      description: "Reconnecting with my friends from my time in Sydney at Belgium's most iconic event!",
      image: "/images/TML.JPG",
    },
    {
      date: "May 2024",
      title: "🤖 RegAI",
      description: "Start of the development of RegAI, Deloitte's regulatory intelligence solution. Using LLMs, RegAI accelerates compliance checks. As PM, I am responsible for the technical development, leading a team of engineers and developers, as well as presenting the tool in client conversations.",
      image: "/images/RegAI.png",
    },
    {
      date: "April 2024",
      title: "👑 PRINCE2 Foundation in Project Management",
      description: "As my responsibilities start involving more and more project management, I have taken the Prince 2 Foundation course to equip myself with the knowledge and skills for successful project management.",
      image: "/images/prince2.png",
    },
    {
      date: "October 2023",
      title: "💼 Deloitte",
      description: "Start of my journey at Deloitte as a Senior Data Scientist with a focus on Artificial Intelligence and Machine Learning.",
      image: "/images/DeloitteLogo.png",
    },
    {
      date: "July 2023",
      title: "🎉 Ozora",
      description: "Before jumping into my next professional chapter, I'm taking time off with my friends from university to explore Ozora, one of the world's most unique festivals!",
      image: "/images/Ozora.png",
    },
    {
      date: "June 2023",
      title: "🎓 Master of Data Science",
      description: "Obtained my second Master's degree. I am now a Master of Data Science! I graduated with high distinction, obtaining two academic prizes: Postgraduate Prize for Outstanding Academic achievement in Master of Data Science, as well as the Postgraduate High Honour Roll for receiving the highest mark in the course 'Machine Learning and Data Mining' in 2023.",
      image: "/images/USYD.jpg",
    },
    {
      date: "June 2022",
      title: "🇦🇺 University of Sydney",
      description: "I have decided to swap Antwerp for Sydney for the next year. During this break from work, I will be pursuing a Master degree in Data Science.",
      image: "/images/Sydney.jpg",
    },
    {
      date: "November 2021",
      title: "🇱🇺 Head of Jury at Luxembourg 2021",
      description: "I've taken up the role of Head of Jury at the 8th National Selection Conference of EYP Luxembourg. With this great honour, I am finishing my time at the European Youth Parliament. It has been an absolute pleasure getting to know this many people from all over the continent. This organization has been a big part of my life, and I am grateful for the many lessons I have learnt and skills I have developed thanks to it!",
      image: "/images/Lux.JPG",
    },
    {
      date: "September 2020",
      title: "💼 Trilations",
      description: "My first job! At Trilations, I have a focus on data modelling, data visualization, and data engineering.",
      image: "/images/logo-Trilations.png",
    },
    {
      date: "June 2020",
      title: "🎓 Master (MSc) of Mechanical Engineering",
      description: "Graduated from the KU Leuven with a Master of Mechanical Engineering! Big shoutout to my friends who made it through this journey with me.",
      image: "/images/Graduation.jpg",
    },
    {
      date: "October 2019",
      title: "🇧🇾 President of Stembridge 2019",
      description: "Leading a team of chairpersons at this regional session in Belarus was a great pleasure and an honour, as well as an opportunity to learn a lot about team management. This session in particular showcases the potential of EYP for bringing together people who otherwise might never have met. Exploring Minsk was very fun too, an experience like no other.",
      image: "/images/Minsk.jpg",
    },
    {
      date: "August 2019",
      title: "🇵🇹 Chairperson at Coimbra 2019",
      description: "At this International Forum organized by EYP Portugal, I had the pleasure of being a Chairperson, chairing the committee on Industry, Research and Energy (ITRE).",
      image: "/images/Coimbra.jpg",
    },
    {
      date: "January 2019",
      title: "🕺 Ball in Vienna's Hofburg",
      description: "One of the last activities here in Vienna: Going to a ball in the Hofburg, the palace of Franz Josef and Sisi. A fitting end to a wonderful time in this city!",
      image: "/images/BallVienna.JPG",
    },
    {
      date: "September 2018",
      title: "🇦🇹 Erasmus in Vienna",
      description: "I am spending the first semester of my Master degree on an Erasmus exchange in Vienna!",
      image: "/images/ViennaRathaus.png",
    },
    {
      date: "June 2018",
      title: "🎓 Bachelor (BSc) in Engineering Sciences",
      description: "I obtained a bachelor degree in engineering sciences at the KU Leuven, with a focus on Electrical and Mechanical Engineering!",
      image: "/images/BaDegree.png",
    },
    {
      date: "February 2018",
      title: "🇧🇪 Chairperson at Bruges 2018",
      description: "Joining EYP Belgium's National Selection Conference as a Chairperson, chairing the committee on Industry, Research and Energy (ITRE).",
      image: "/images/Bruges.jpg",
    },
    {
      date: "November 2016",
      title: "🇫🇮 Editor at Kempele 2016",
      description: "Editor at EYP Finland's session in Kempele, together with my friend Maciek Maj. As Editors, we are responsible for leading the Media Team in creating memories of this event that will last us a lifetime!",
      image: "/images/Kempele.jpg",
    },
    {
      date: "September 2015",
      title: "📚 KU Leuven",
      description: "I am starting my academic life by pursuing a degree in engineering at the KU Leuven.",
      image: "/images/KULeuvenLogo.png",
    },
    {
      date: "February 2014",
      title: "🇪🇺 European Youth Parliament",
      description: "I joined the European Youth Parliament (EYP) by attending the National Selection Conference of EYP Belgium in Brussels. EYP organizes simulation sessions of the European Parliament where participants get assigned to a certain committee and draft resultions which get presented and debated during the General Assembly.",
      image: "/images/EYPBE.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16 w-full">
        {/* Header Section*/}
        <header className="flex flex-col items-center gap-9 pt-12">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            My Journey<span className="sr-only"> as Florian Géron</span>
          </h1>
        </header>

        {/* Timeline Section */}
        <section className="relative w-full max-w-7xl px-16 py-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          <div className="grid gap-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Milestone Content */}
                <div
                  className={`w-full max-w-[500px] ${
                    index % 2 === 0 ? "text-left" : "text-left"
                  } bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-10 transform transition-transform duration-300 hover:scale-105`}
                >
                  {/* Text Section - Caption */}
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {milestone.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-left mt-2">
                      {milestone.description}
                    </p>
                  </div>
                  {/* Render image if available */}
                  {milestone.image && (
                    <div className="mt-4 flex justify-center">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full max-h-[1000px] object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
                {/* Milestone Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
                  <div className="relative h-6 w-6 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900">
                    {/* Concentric Circle */}
                    <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-30"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      {/* Scroll to Bottom Button */}
      {showBottomArrow && (
        <button
          className="fixed bottom-4 right-4 rounded-full bg-gray-100 hover:bg-gray-200 p-2 shadow-md"
          onClick={scrollToBottom}
        >
          <FaArrowDown className="w-6 h-6 text-gray-400 hover:text-gray-600" />
        </button>
      )}

      {/* Scroll to Top Button */}
      {showTopArrow && (
        <button
          className="fixed top-4 right-4 rounded-full bg-gray-100 hover:bg-gray-200 p-2 shadow-md"
          onClick={scrollToTop}
        >
          <FaArrowUp className="w-6 h-6 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
}
