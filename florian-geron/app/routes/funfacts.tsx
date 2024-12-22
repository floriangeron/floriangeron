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
    "The Vatican classifies capybara as fish.\nThis allows Latin Americans to eat the animal during Lent.",
    "Antartica has the lowest infant mortality rate of any continent.",
    "There are only two double landlocked countries, i.e. countries who only border landlocked countries.\nThey are Liechtenstein and Uzbekistan.",
    "The Caspian Sea is a lake, not a sea.",
    "Owls' eyes have a conical shape. This means their eyes cannot rotate in their sockets, which is why their neck can turn more than 360 degrees.",
    "Flamenco is a renowned Spanish style of dance and music. The Spanish word for Flemish happens to be Flamenco too. It is thought that the music genre was named after the guitar which is used to make the music. This type of guitar was introduced to Spain by Emperor Charles V and his court.\nCharles V was Flemish.",
    "Chess is known as 'schaak' in Dutch and 'Schach' in German. These names all derive from the  Persian word for king, 'Shah'.\nThe word 'checkmate' comes from Persian too, meaning 'the king is dead'.",
    "The canary islands are not named after the birds. Rather, they are named after the dogs straying the island: The Greek word for dog is 'κύων', the adjective being 'κυνικός'. This is also where we get the word 'canine' from. The birds were then named after the islands.",
    "The original cynic philosopher, Diogenes, is said to have had an interaction with Alexander the Great. Alexander, who admired the philosopher, told him to make a wish - If it was within his power, Alexander would do his best to fulfil the wish.\nDiogenes asked him to take a step to the left: Alexander was blocking out the sun.",
    "The original cynic philosopher, Diogenes, lived his life as frugally as possible. He possessed three things: A barrel to sleep in, a plate to eat from, and a cup to drink from. When he saw a begger drink from a fountain by molding his hands into a cup, he threw away his cup, happy to be able to throw away one more of his possessions.\n\nDiogenes liked to compare his lifestyle to that of a dog. The Greek word for canine is 'κυνικός'. This is where we get the word 'cynical' from, Greek for 'like a dog'.",
    "The river Rhine and diarrhea share an etymological root. The Greek word 'ῥειν' means 'to flow'. Diarrhea literally means 'to flow through'.",
    "'Πάντα ῥεῖ καὶ οὐδὲν μένει' means 'everything flows and nothing stays [still]'.",
    "Cyprus has more cats than humans.",
    "Australia has more kangaroos than humans.",
    "Andalusia, a region is Spain, has an interesting etymology. After the fall of the Western Roman Empire, different Germanic tribes conquered different parts of the Empire. The Vandals conquered Iberia. Some centuries later, the Moors conquered it in turn. They called it 'the land of the Vandals'. However, Arabic doesn't have the V-sound, so it is pronounced as Al-Andalus, which became Andalusia in modern Spanish.",
    "Having a space port closer to the equator reduces the fuel needed to launch a spacecraft into orbit. (Earth's spin provides a kinetic boost.) This is why countries build their space ports as close to the equator as possible: The US in Florida, the Soviet Union in Kazachstan, and the EU in French Guyana.",
    "The Arctic is named after bears: It comes from the Greek word 'ἄρκτος', adjective 'ἀρκτικός'. The region isn't names after polar bears though. It is named after the constellations, the Little and the Great Bear, which are always situated towards the Northern half of the sky. The Latin names for these constallations are Ursa Minor and Ursa Major.",
    "Normandy, the region in France, was given to a group of vikings by the French king. The vikings had nearly sacked Paris. The king was so impressed by their talent for warfare, that - despite the aggression - he gave them a piece of land along the French coast. In return, the vikings would protect France from any other seaborn invaders.\nThis region came to be known as the region of the Northmen, i.e. Normandy.",
    "The croissant is a crescant-shaped pastry. In contemporary culture, it is associated with the French cuisine, but it orginated in Austria, whose inhabitants called it 'kipferl'. This is why the French refer to certain baked goods as 'Viennoiserie'.\n\nIt is said the Viennese came up with the design after successfully repelling the Ottoman siege of Vienna of 1683: The flags of the fleeing Ottoman army, which contain a crescent moon, inspired Viennese bakers. In reality, the kipferl predates this battle.",
    "The mannequin is a doll used to display clothes. Due to it French sound, it is associated with French haute-couture. However, it derives from the Flemish word 'manneken', meaning 'little man'. The mannequin gained popularity in the Flemish textile industry. The French, who either ruled or heavily influenced Flanders for most of its history, borrowed the word and changed its spelling and pronunciation.\n\nMost of the world now uses the French word, which has even found its way back into the Flemish vocabulary, displacing the original Flemish spelling and pronunciation.",
    "The French word 'copain' means 'friend' or 'companion'. It comes from co-pain, meaning co-bread, i.e. the person who you share bread with.",
    "Russia has a larger surface area than Pluto.",
    "Great Britain used to be just called Britain.\nWhen the Germanic Anglo-Saxons invaded the island after the fall of the Western Roman Empire, some its Celtic inhabitants moved back to mainland Europe (which they had originally fled to escape the Romans). They settled in a part of modern France. To disambiguate between the two places, the island became known as Great Britain and the French peninsula as Lesser Britain, now Brittany in English.",
    "Pink does not appear in the rainbow. Contrary to red or blue, pink cannot created by changing the wavelength of light. Instead, pink is obtained by mixing different wavelengths. Concretely, pink is what you see when you subtract green from white light.",
    "In ancient times, purple dye was very expensive. It was extracted from the Murex snail, which as a labour-intensive process. This is why Roman senators had purple robes, to show off their prestige, wealth, and power.\n\nNowadays, purple dye is easier to manufacture. However, this legacy lives on in our national flags: Almost no national flag features purple, as it would have been too expensive to produce en-masse in pre-modern times. The only exceptions are Dominica and Nicaragua.",
    "The Italian region of Lombardy obtains its name from the Germanic people who invaded the region after the fall of the Western Roman Empire. These men had long beards. The Germanic word for 'longbeards' was Latinized into 'langobardi', which mutated into Lombards over time.",
    "Nepal is the only country whose national flag isn't a rectangle.",
    "Belarus has the highest number of cinemas per capita in the world.",
    "Denmark's flag is the oldest continuously used national flag."
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
                        <p
                            className="text-xl max-w-2xl font-medium text-gray-700 dark:text-gray-200"
                            dangerouslySetInnerHTML={{
                                __html: funfacts[currentFactIndex].replace(/\n/g, "<br />"),
                            }}
                        />
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