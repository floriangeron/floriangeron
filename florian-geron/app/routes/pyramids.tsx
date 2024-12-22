import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Florian Géron" },
    { name: "My personal website", content: "Pyramids" },
    { description: "Me and my friends making pyramids in different places." },
  ];
};

const images = [
  {
    title: "Nice, Sept 2016",
    image: "/images/pyramids/2016 Nice.JPG",
  },
  {
    title: "Madrid, Feb 2017",
    image: "/images/pyramids/2017 Madrid.JPG",
  },
  {
    title: "Porto, Sept 2017",
    image: "/images/pyramids/2017 Porto.JPG",
  },
  {
    title: "Barcelona, Feb 2018",
    image: "/images/pyramids/2018 Barcelona.JPG",
  },
  {
    title: "Sweden, Jul 2018",
    image: "/images/pyramids/2018 Zweden.JPG",
  },
  {
    title: "Valencia, Feb 2019",
    image: "/images/pyramids/2019 Valencia.JPG",
  },
  {
    title: "Montpellier, Sept 2020",
    image: "/images/pyramids/2020 Montpellier.jpg",
  },
  {
    title: "Berlin, May 2023",
    image: "/images/pyramids/2023 Berlijn.jpg",
  },
  {
    title: "Albania, Sept 2023",
    image: "/images/pyramids/2023 Albanie.jpg",
  },
  {
    title: "Malta, May 2024",
    image: "/images/pyramids/2024 Malta.JPG",
  },
  {
    title: "France, Sept 2024",
    image: "/images/pyramids/2024 France.JPG",
  },
];

export default function Pyramids() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotations, setRotations] = useState<number[]>(new Array(images.length).fill(0)); // Store rotations for each image

  // Function to generate a random tilt between -5 and +5 degrees
  const getRandomTilt = () => {
    return Math.random() * 10 - 5; // Random number between -5 and 5
  };

  useEffect(() => {
    // Update rotation for the current image if it's not set yet
    setRotations((prevRotations) => {
      const newRotations = [...prevRotations];
      if (newRotations[currentIndex] === 0) {
        newRotations[currentIndex] = getRandomTilt();
      }
      return newRotations;
    });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center gap-16 w-full pb-10">
      {/* Header Section */}
      <header className="flex flex-col items-center gap-9 pt-12">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Banlieu Pyramids<span className="sr-only"> Florian Géron</span>
        </h1>
        <p className="text-center max-w-2xl">
          Our high-school friend group has developed the habit of building human pyramids wherever we go! Who was part of the most pyramids?
        </p>
      </header>

      {/* Pictures Section */}
      <div className="relative w-full max-w-[1000px] h-[70vh] overflow-hidden flex justify-center items-center">
        
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute max-w-[600px] flex flex-col items-center transition-opacity duration-[1000ms] ease-in-out ${
              index <= currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              zIndex: index === currentIndex ? images.length : index,
              transform: `rotate(${rotations[index]}deg)`,
              transition: "transform 0.5s ease", // Smooth transition for the tilt effect
            }}
          >
            {/* Frame Container */}
            <div
              className="relative bg-white border border-gray-300 shadow-md p-2"
              style={{
                display: "inline-block",
              }}
            >
              <img
                src={image.image}
                alt={`Pyramid ${index + 1}`}
                className="block object-contain"
                style={{
                  maxWidth: "100%",
                  maxHeight: "60vh",
                }}
              />
              <p
                className="mt-4 text-center text-3xl font-medium text-gray-700 dark:text-gray-300"
                style={{
                  fontFamily: "'Dancing Script', cursive", // Apply handwriting font
                  fontSize: "1.5rem", // Larger font size
                  letterSpacing: "0.05em", // Optional: add some letter spacing for a more natural look
                }}
              >
                {image.title}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 z-10"
          style={{ pointerEvents: "auto" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 z-10"
          style={{ pointerEvents: "auto" }}
        >
          Next
        </button>

      </div>
    </div>
  );
}
