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
    // 0
    "The Vatican classifies capybara as fish.\nThis allows Latin Americans to eat the animal during Lent.",
    "Seven babies have been born on Antartica, all of whom survived birth. This means that Antartica has the lowest infant mortality rate of any continent.",
    "There are only two double landlocked countries, i.e. countries who only border landlocked countries.\nThey are Liechtenstein and Uzbekistan.",
    "The Caspian Sea is a lake, not a sea.",
    "Owls' eyes have a cylindrical shape. This means their eyes cannot rotate in their sockets, which is why they have evolved the ability to turn their necks up to 270 degrees.",
    "Flamenco is a renowned Spanish style of dance and music. The Spanish word for Flemish happens to be Flamenco too. It is thought that the music genre was named after the guitar which is used to make the music. This type of guitar was introduced to Spain by Emperor Charles V and his court.\nCharles V was Flemish.",
    "Chess is known as 'schaak' in Dutch and 'Schach' in German. These names all derive from the  Persian word for king, 'Shah'.\nThe word 'checkmate' comes from Persian too, meaning 'the king is dead'.",
    "The canary islands are not named after the birds. Rather, they are named after the dogs straying the island: The Greek word for dog is 'κύων', the adjective being 'κυνικός'. This is also where we get the word 'canine' from. The birds were then named after the islands.",
    "The original cynic philosopher, Diogenes, is said to have had an interaction with Alexander the Great. Alexander, who admired the philosopher, told him to make a wish - If it was within his power, Alexander would do his best to fulfil the wish.\nDiogenes asked him to take a step to the left: Alexander was blocking out the sun.",
    "The original cynic philosopher, Diogenes, lived his life as frugally as possible. He possessed three things: A barrel to sleep in, a plate to eat from, and a cup to drink from. When he saw a begger drink from a fountain by molding his hands into a cup, he threw away his cup, happy to be able to throw away one more of his possessions.\n\nDiogenes liked to compare his lifestyle to that of a dog. The Greek word for canine is 'κυνικός'. This is where we get the word 'cynical' from, Greek for 'like a dog'.",
    // 10
    "The river Rhine and diarrhea share an etymological root. The Greek word 'ῥειν' means 'to flow'. Diarrhea literally means 'to flow through'.",
    "'Πάντα ῥεῖ καὶ οὐδὲν μένει' means 'everything flows and nothing stays [still]'.",
    "Cyprus has more cats than humans.",
    "Australia has more kangaroos than humans.",
    "Mongolia has more horses than people.",
    "The Netherlands has more bikes than people.",
    "Andalusia, a region is Spain, has an interesting etymology. After the fall of the Western Roman Empire, different Germanic tribes conquered different parts of the Empire. The Vandals conquered Iberia. Some centuries later, the Moors conquered it in turn. They called it 'the land of the Vandals'. However, Arabic doesn't have the V-sound, so it is pronounced as Al-Andalus, which became Andalusia in modern Spanish.",
    "Having a space port closer to the equator reduces the fuel needed to launch a spacecraft into orbit. (Earth's spin provides a kinetic boost.) This is why countries build their space ports as close to the equator as possible: The US in Florida, the Soviet Union in Kazachstan, and the EU in French Guyana.",
    "The Arctic is named after bears: It comes from the Greek word 'ἄρκτος', adjective 'ἀρκτικός'. The region isn't names after polar bears though. It is named after the constellations, the Little and the Great Bear, which are always situated towards the Northern half of the sky. The Latin names for these constallations are Ursa Minor and Ursa Major.",
    "Normandy, the region in France, was given to a group of vikings by the French king. The vikings had nearly sacked Paris. The king was so impressed by their talent for warfare, that - despite the aggression - he gave them a piece of land along the French coast. In return, the vikings would protect France from any other seaborn invaders.\nThis region came to be known as the region of the Northmen, i.e. Normandy.",
    // 20
    "The croissant is a crescant-shaped pastry. In contemporary culture, it is associated with the French cuisine, but it orginated in Austria, whose inhabitants called it 'kipferl'. This is why the French refer to certain baked goods as 'Viennoiserie'.\n\nIt is said the Viennese came up with the design after successfully repelling the Ottoman siege of Vienna of 1683: The flags of the fleeing Ottoman army, which contain a crescent moon, inspired Viennese bakers. In reality, the kipferl predates this battle.",
    "The mannequin is a doll used to display clothes. Due to it French sound, it is associated with French haute-couture. However, it derives from the Flemish word 'manneken', meaning 'little man'. The mannequin gained popularity in the Flemish textile industry. The French, who either ruled or heavily influenced Flanders for most of its history, borrowed the word and changed its spelling and pronunciation.\n\nMost of the world now uses the French word, which has even found its way back into the Flemish vocabulary, displacing the original Flemish spelling and pronunciation.",
    "The French word 'copain' means 'friend' or 'companion'. It comes from co-pain, meaning co-bread, i.e. the person who you share bread with.",
    "Russia has a larger surface area than Pluto.",
    "Great Britain used to be just called Britain.\nWhen the Germanic Anglo-Saxons invaded the island after the fall of the Western Roman Empire, some its Celtic inhabitants moved back to mainland Europe (which they had originally fled to escape the Romans). They settled in a part of modern France. To disambiguate between the two places, the island became known as Great Britain and the French peninsula as Lesser Britain, now Brittany in English.",
    "Pink does not appear in the rainbow. Contrary to red or blue, pink cannot created by changing the wavelength of light. Instead, pink is obtained by mixing different wavelengths. Concretely, pink is what you see when you subtract green from white light.",
    "In ancient times, purple dye was very expensive. The dye was extracted from the Murex snail, which is a labour-intensive process. This is why Roman senators had purple robes, to show off their prestige, wealth, and power.\n\nNowadays, purple dye is easier to manufacture. However, this legacy lives on in our national flags: Almost no national flag features purple, as it would have been too expensive to produce en-masse in pre-modern times. The only exceptions are Dominica and Nicaragua.",
    "The Italian region of Lombardy obtains its name from the Germanic people who invaded the region after the fall of the Western Roman Empire. These men had long beards. The Germanic word for 'longbeards' was Latinized into 'langobardi', which mutated into Lombards over time.",
    "Nepal is the only country whose national flag isn't a rectangle.",
    "Belarus has the highest number of cinemas per capita in the world.",
    // 30
    "Denmark's flag is the oldest continuously used national flag.",
    "Wellington is the world's southernmost capital. It is located at 41.28°S.\n\nReykjavik, the world's norternmost capital, is located at 64.15°N.",
    "France's longest land border is the one it shares with Brazil.",
    "France has land borders with all the countries that Belgium borders.\nIt borders the Netherlands in the Caribbean, on the island of Saint-Martin.",
    "More than 50% of Canadians live South of Seattle.",
    "Greenland lies to the North, West, South, and East of Iceland.",
    "The national flag with the most colours, is the one of Belize.\nIt has 12 colours.",
    "Plymouth is the capital of Montserrat, a British overseas territory. Plymouth was abandoned in 1997 after it was affected by a nearby volcanic eruption. This makes Plymouth the only capital that is also a ghost town.",
    "In New Zealand, 50,000 people listed 'Jedi' as their religion in the official state census.",
    "France's territories span 12 time zones.",
    // 40
    "East-Timor is a country in South-East Asia. The word 'Timor' means 'East'. This means that the country is called 'East-East'.",
    "The country of Chad is named after the main body of water in it, as 'Chad' means 'Lake'. This means that 'Lake Chad' means 'Lake Lake'.",
    "'Gobi' is the Mongolian word for 'desert'. This means that 'Gobi desert' means 'desert desert'.",
    "There is only one cinema in all of Suriname.\n\n\nUpdate: As of January 2025, there are two cinemas in Suriname.",
    "Jamaica is the only country in the world whose flag does not feature red, white or blue.",
    "Bhutan is the only carbon-negative country in the world.",
    "Bhutan does not only measure gross domestic product (GDP), it also measures gross national happiness :)",
    "Tuvalu's domain name is .tv. Thanks to this domain name's popularity, slightly under 10% of government revenue is generated by royalties coming from this domain name.",
    "The Dutch language is littered with English loanwords. English contains some Dutch loanwords too, but most of these actually entered the English lexicon via Afrikaans, a language spoken by the descendants of Dutch settlers in South-Africa. The most famous example is 'apartheid', meaning 'separate-ness'. Other examples include 'veldt' (field) and 'aardvark' (earth pig).",
    "The state of Rhode Island is the smallest state of the USA. It was named by Dutch settlers, who called it 'red island', 'roode eylant' in old Dutch, because of the colour of its cliffs.",
    // 50
    "The name of the man who baptized Jezus would become one of the most successful names in history.\n\nThe original Hebrew name 'Yochanan', meaning 'Yahweh is great', was translated into 'Ioannes' in Greek. From there, it became a popular name in most European languages: Johannes, Johan, Hannes, Hans, Jens (Germanic), John (English), Jan (Dutch), Ivan (Slavic), Jean (French), Juan (Spanish), João (Portuguese), Giovanni (Italian), Sean (Irish), Ian (Scottish).\n\nThese names became so popular that they became emblematic of their respective languages. If you ask someone to come up with a generic English name, chances are they'd come up with John. The same goes for most entries in the list above. In French, Jean-Baptiste is a popular name, making the reference to the Biblical character even more explicit.",
    "After the French-speaking Normans conquered England in 1066, French vocabulary started infiltrating the English lexicon. As the Normans ruled the land, this especially affected words used by the elite.\n\nThis is why the Germanic version of a word usually sounds less fancy than its Latin equivalent. Examples include 'purchase' vs 'buy', 'acquire' vs 'get', 'commence' vs 'begin', 'chamber' vs 'room', 'mansion' vs 'house'.\n\nThis is most famously demonstrated in the fact that English has a different word for an animal and its meat. 'Cow' and 'beef', 'chicken' and 'poultry', 'sheep' vs 'mutton', 'pig' vs 'pork', and 'calf' vs 'veal'. The Anglo-Saxon farmers would raise the animals, which would get served to the Norman nobles.",
    "The Dutch word for 'to paint' is 'schilderen'. This comes from the Dutch word for shield, 'schild'. In medieval times, knights would paint their shield, which is how the process of painting became known as 'shielding' in Dutch, rather than some mutation of the German word 'malen'.",
    "The Milky Way is the name of our galaxy. In fact, all galaxies are named after milk: The word 'galaxy' comes from the Greek word 'gala', meaning milk. The words 'lactose' and 'lactic' come from the related Latin version of the root word, 'lax'.",
    "Helicopter contains two Greek root words: 'helico' and 'pter'. These words combine to mean 'spiral-wing'.",
    "The American state of Idaho has a made-up name. Someone proposed the name to congress, saying that the native Americans living there called the region by that name. In reality, the man had made up the name after meeting a girl named Ida.",
    "Portuguese is the most widely spoken language in the Southern hemisphere.",
    "Palau's capital of Ngerulmud is the least populated capital city of a sovereign nation in the world, with 318 inhabitants.\n\nThe world's most populous capital is Tokyo, with 37 million people.",
    "The word 'barbarian' comes from ancient Greek. The Greeks used the word 'bar-bar' as an onomatopoeia for people who spoke a language they could not understand. This word was adopted by the Romans, and, over time, this word began to carry a negative association, as it was used to refer to Germanic tribes and the Huns, people the Romans saw as uncultured. The term ended up being used for basically anyone that wasn't Greek or Roman.\n\nAfter the Romans left North Africa, the new Arab conquerors used the name 'al-Barbar' for the indigenous inhabitants of the region. They are still referred to by the name 'Berber' today. However, many people prefer the term 'Amazigh', the indigenous name for the people, meaning 'free people'.",
    "Odysseus' son is called Telemachus. The name consists of 'tele', meaning far, and 'machus', meaning war, referring to the fact that for most of his life, his father is fighting a war far away.",
    // 60
    "In Greek mythology, Atlas was a Titan who was condemned to hold up the heavens as a punishment for taking the side of the Titans during the Titanomachy, the war between the Titans and the Olympian gods.\n\nAfter Perseus slayed Medusa, Medusa's eyes maintained their power of turning living beings into stone. Perseus decided to end Atlas' plight and used this severed head to turn the Titan into stone, giving us the Atlas mountains.\n\nThe Titan and its mountain chain also led to the name for the Atlantic Ocean. The Atlas mountains were at the westernmost edge of the known world. The Ocean beyond this point was therefore named 'Atlantic'.",
    "Maltese is a semitic language closely related to Arabic and distantly related to Hebrew. It is the only official language of the EU that is Semitic.",
    "Finnish, Estonian, and Hungarian are Uralic languages, a non-Indo-European language family. These languages likely originated near the Ural Mountains and spread to Europe through migration and settlement over centuries.",
    "Basque is a language isolate, meaning it has no known relatives. It is not Indo-European. It probably predates the arrival of the Indo-European languages to Europe.",
    "The sentence 'The quick brown fox jumps over the lazy dog' uses every letter of the alphabet.",
    "There are no rivers in Saudi Arabia.",
    "In old Dutch, the word for 'apple' was a generic term used to refer to any kind of fruit. This is why, in Dutch, 'an orange' is 'een appelsien', meaning 'apple from China': The fruit originated in the East, which the Dutch associated with China. Similarly, 'a potato' is 'een aardappel', meaning 'ground apple'.",
    "The colour orange is named after the fruit. This word only entered the English language around the 15th century. Before this time, English speakers used the word 'yellow-red', for orange.\n\nThe fruit gets its name from the Sanskrit 'nāraṅga' which refers to the orange tree. The word found its way from Sanskrit to Persian to Arabic to French, and then finally to English.",
    "In the 20th century, an influential Arab family, the House of Saud, unified most of the Arabian peninsula. They named this newly unified country 'Saudi Arabia', which would be a bit like the UK being called 'Windsorland' or the Netherlands being called 'Oranjeland'.",
    "Andorra is the largest country without an airport.",
    // 70
    "Wombat poop is cube-shaped. This unique shape helps prevent the poop from rolling away, marking their territory effectively.",
    "The Eiffel Tower can grow taller in summer. Heat causes the metal to expand, adding up to 6 inches (15 cm) to its height.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "The world's largest desert isn't the Sahara — it's Antarctica. A desert is defined by low precipitation, not heat, and Antarctica is the driest continent.",
    "Like a group of fish is called a 'school', a group of flamingos is called a 'flamboyance'. Other interesting group names include a 'murder' of crows and a 'parliament' of owls.",
    "In Switzerland, it is illegal to own just one guinea pig. They are social animals and must have a companion.",
    "The US has more than 50,000 square kilometers of parking. That's a surface area larger than the area of the Netherlands.",
    "Bluetooth technology is named after Harald Blåtand, a Danish viking king who united the Danish tribes. The technology's inventors chose this name because Bluetooth unites different devices, like Harald united the tribes. Combining his runic initials results in the Bluetooth symbol.",
    "There is a mall in Moldova called MallDova.",
    "Andorra has the highest number of McDonald's restaurants per capita.",
    // 80
    "Lake Baikal covers a larger surface area than the country of Belgium. It is the deepest lake in the world, and also the largest freshwater lake by volume: It contains 22% of the world's fresh surface water.",
    "The Danube is the river that passes through the most countries in the world. It courses through ten countries and visits four capitals on its way to the Black Sea.",
    "The word 'quarantine' comes from the Italian word for forty. When plague broke out on a ship, the ship would have to wait for forty days before being allowed access to an Italian port.",
    "Scotland's national animal is the unicorn.",
    "The dot over the letters 'i'  and 'j' is called a tittle.",
    "The little plastic or metal tip at the end of a shoelace is called an aglet.",
    "The Latin word for 'mouse' is 'mus'. A little mouse is called a 'musculus', which is where we get the word 'muscle' from. Ancient Romans thought that our muscles' movements looked like a small mouse moving around beneath our skin.",
    "In old English, the prefix 'wer-' indicated a male human, i.e. 'wereman'. The 'wif-' prefix referred to a female human, i.e. 'wifman', which morphed into 'woman'. The 'wer-' prefix survives primarily in the word 'werewolf,' meaning 'man-wolf'.",
    "The word 'disaster' comes from the roots 'dis-' (bad) and 'aster' (star), reflecting the ancient belief that bad events were caused by unfavorable alignments of the stars.",
    "The word 'avocado' comes from the Nahuatl (Aztec) word 'āhuacatl', which also means 'testicle', likely due to the fruit's shape.",
    // 90
    "The company that was enlisted by NASA to manufacture the Apollo astronauts' spacesuits, is the same company that produced Playtex bras. Their skills in producing strong, flexible, and robust materials were a perfect fit for NASA's needs.",
    "Bananas contain potassium-40, making them slightly radioactive. To receive the same dose of radiation as a chest X-ray, you'd need to eat 1000 bananas.",
    "The term 'bug' for an error in computer programming supposedly came from a computer scientist in the 50s finding an actual bug in their computer hardware, causing the system to break down.",
    "'Bolshevik' is the Russian word for 'the majority'.\nWhen Lenin's faction broke off from the Social Democratic Labour Party in 1903, they adopted the name 'Bolshevik', even though the faction was usually in the minority.",
    "'Soviet' (совет) is the Russian word for 'council'.",
    

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
            <div className="flex-grow text-center justify-center items-center mt-16">
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:from-pink-500 hover:to-purple-500 hover:shadow-2xl mt-16 mb-24"
                >
                    Show another fun fact
                </button>
            )}
        </div>
    );
}