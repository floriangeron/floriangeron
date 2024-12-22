import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Florian Géron" },
    { name: "My personal website", content: "Fun Facts" },
    { description: "A random collection of fun facts." },
  ];
};

const funfacts = [
    "The Vatican classifies capybara as fish.",
    "Antartica has the lowest infant mortality rate of any continent.",
    "There are only two double landlocked countries, i.e. countries who only border landlocked countries. They are Liechtenstein and Uzbekistan.",
    "The Caspian Sea is a lake, not a sea.",
    "Owls' eyes have a conical shape. This means their eyes cannot rotate in their sockets, which is why their neck can turn more than 360 degrees.",
    "Flamenco is a renowned Spanish style of dance and music. The Spanish word for Flemish happens to be Flamenco too. It is thought that the music genre was named after the guitar which is used to make the music. This type of guitar was introduced to Spain by Emperor Charles V and his court. Charles V was Flemish.",
    "Chess is known as 'schaak' in Dutch and 'Schach' in German. These names all derive from the  Persian word for king, 'Shah'. The word 'check mate' comes from Persian too, meaning 'the king is dead'.",
    "The canary islands are not named after the birds. Rather, they are named after the dogs straying the island: The Greek word for dog is 'κύων', the adjective being 'κυνικός'. This is also where we get the word 'canine' from. The birds were then named after the islands.",
    "The original cynic philosopher, Diogenes, is said to have had an interaction with Alexander the Great. Alexander, who admired the philosopher, told him to make a wish - If it was within his power, Alexander would do his best to fulfil the wish. Diogenes asked him to take a step to the left: Alexander was blocking out the sun.",
    "The original cynic philosopher, Diogenes, lived his life as frugally as possible. He possessed three things: A barrel to sleep in, a plate to eat from, and a cup to drink from. When he saw a begger drink from a fountain by molding his hands into a cup, he threw away his cup, happy to be able to throw away one more of his possessions. Diogenes liked to compare his lifestyle to that of a dog. The Greek word for canine is 'κυνικός'. This is where we get the word 'cynical' from, Greek for 'like a dog'.",
    "The river Rhine and diarrhea share an etymological root. The Greek word 'ῥειν' means 'to flow'. Diarrhea literally means 'to flow through'.",
    "'Πάντα ῥεῖ καὶ οὐδὲν μένει' means 'everything flows and nothing stays'.",
    "Cyprus has more cats than humans.",
    "Australia has more kangaroos than humans.",
    "Andalusia, a region is Spain, has an interesting etymology. After the fall of the Western Roman Empire, different Germanic tribes conquered different parts of the Empire. The Vandals conquered Iberia. Some centuries later, the Moors conquered it in turn. They called it 'the land of the Vandals'. However, Arabic doesn't have the V-sound, so it is pronounced as Al-Andalus, which became Andalusia in modern Spanish.",
    "Having a space port closer to the equator reduces the fuel needed to launch a spacecraft into orbit. (Earth's spin provides a kinetic boost.) This is why countries build their space ports as close to the equator as possible: The US in Florida, the Soviet Union in Kazachstan, and the EU in French Guyana.",
    "The Arctic is named after bears: It comes from the Greek word 'ἄρκτος', adjective 'ἀρκτικός'. The region isn't names after polar bears though. It is named after the constellations, the Little and the Great Bear, which are always situated towards the Northern half of the sky. The Latin names for these constallations are Ursa Minor and Ursa Major.",
    "Normandy, the region in France, was given to the French king to a group of vikings. This group has nearly sacked Paris. Despite this aggression, the king was so impressed by their nack for warfare, that he proposed to give them a piece of land along the French coast. In return, the vikings would protect France from any other seaborn invaders. This region came to be known as the region of the Northmen, i.e. Normandy."

]

export default function Funfacts(){
    
    const [currentFactIndex, setCurrentFactIndex] = useState<number | null>(null);

    const showRandomFact = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * funfacts.length);
        } while (randomIndex === currentFactIndex); // Ensure the new index is different
        setCurrentFactIndex(randomIndex);
      };

    return (
        <div className="flex flex-col items-center h-screen gap-16 w-full pb-10 relative">

            {/* Header Section */}
            <header className="flex flex-col items-center gap-9 pt-12">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Fun Facts<span className="sr-only"> Florian Géron</span>
                </h1>
                <p className="text-center max-w-2xl">
                This page contains a random collection of fun facts.
                </p>
            </header>

            {/* Fun Fact Display */}
            <div className="text-center justify-center items-center mt-16">
                {currentFactIndex === null ? (
                    <button
                        onClick={showRandomFact}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:from-pink-500 hover:to-purple-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                    >
                        Press here to show a fun fact
                    </button>
                ) : (
                    <>
                        <p className="text-xl max-w-2xl font-medium text-gray-700 dark:text-gray-200">
                            {funfacts[currentFactIndex]}
                        </p>
                    </>
                )}
            </div>

            {/* Button Positioned at the Bottom */}
            {currentFactIndex !== null && (
                <button
                    onClick={showRandomFact}
                    className="absolute bottom-20 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:from-pink-500 hover:to-purple-500 hover:shadow-2xl"
                >
                    Show another fun fact
                </button>
            )}
        </div>
    );
}