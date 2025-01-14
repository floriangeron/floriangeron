import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "Florian Géron" },
      { name: "My personal website", content: "CV" },
      { description: "My professional and academic credentials." },
    ];
  };

// The main component for the "About Me" page
export default function CV() {

    return (
      <div className="flex flex-col items-center gap-16 w-full pb-10">
        {/* Header Section*/}
        <header className="flex flex-col items-center gap-9 pt-12">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Curriculum Vitae<span className="sr-only"> Florian Géron</span>
          </h1>
        </header>
        
        {/* Professional exp */}
        <section className="flex flex-col items-center text-left gap- px-6 max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              PROFESSIONAL EXPERIENCE
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">DELOITTE</p>
                <p className="italic">Brussels, Belgium</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Senior Data Scientist</p>
                <p className="italic">Sept 2023 - Present</p>
              </div>
              <p>
              Data Scientist with a focus on implementing Machine Learning solutions related to Generative AI, Natural Language Processing, and Computer Vision. My responsibilities include:
              <ul className="list-disc pl-10">
                <li>Product Manager (PM) for an in-house developed, Gen AI-powered regulatory intellegence solution</li>
                <li>Team Leader of the technical/data science team at several client engagements</li>
                <li>Back-end developer on several projects with a focus on Gen AI products</li>
                <li>Machine learning engineer, including training custom models (CNNs and LLMs) but also prompt engineering for foundational Generative AI models</li>
                <li>Data scientist, including data analytics and data visualization for projects in several different industries</li>
                <li>Liaising with clients and other stakeholders to identify their needs, proposing solutions, and presenting results</li>
              </ul>
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">TRILATIONS</p>
                <p className="italic">Antwerp, Belgium</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Data Consultant</p>
                <p className="italic">Sept 2020 - June 2022</p>
              </div>
              <p>
              Data Consultant at a management consultancy firm that delivers actionable insights based on quantitative business measures and comprehensive data analytics techniques, with a focus on clients in the pharmaceutical industry. My responsibilities included:
              <ul className="list-disc pl-10">
                <li>Creating holistic dashboards</li>
                <li>Data modelling, pipelining, processing, analysis, and visualisation</li>
                <li>Identifying client needs, designing and implementing solutions, and discussing results with C-level executives</li>
              </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col items-center text-left gap- px-6 max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              EDUCATION
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">UNIVERSITY OF SYDNEY</p>
                <p className="italic">Sydney, Australia</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Master of Data Science - High Distinction</p>
                <p className="italic">Sept 2022 - June 2023</p>
              </div>
              <p>
              This master degree aims at developing the analytical and technical skills necessary to use data science to guide strategic decisions. It covers topics such as machine learning, data mining, computational statistics, and visual analytics. During the coursework, a lot of attention is given to applications in business. I specialised in deep learning for computer vision and natural language processing.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">CATHOLIC UNIVERSITY OF LEUVEN (KU Leuven)</p>
                <p className="italic">Leuven, Belgium</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">MSc of Mechanical Engineering - Distinction</p>
                <p className="italic">Sept 2018 - June 2020</p>
              </div>
              <p>
              For my Master's, I specialized in mechatronics and robotics, honing in on defining and tuning the synergy of the construction, sensing, actuation and control of machinery. In my master thesis, I focused on the sensing part of mechatronic systems, developing a measurement system for liquid interfaces.
              </p><p>
              During my Master's, I participated in the Erasmus Programme and studied at the TU Wien in Vienna.
              </p>
              <div className="flex justify-between">
                <p className="font-bold">BSc of Engineering Sciences - Distinction</p>
                <p className="italic">Sept 2015 - June 2018</p>
              </div>
              <p>
              This Bachelor's programme includes essential engineering competences (like mathematics, computer science, chemistry, mechanics, economics etc.), integrating all disciplines of basic sciences, engineering and technology. This creates a strong foundation to analytically solve all kinds of technical problems. I chose for a specialisition in Electrotechnical and Mechanical Engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Other Experiences */}
        <section className="flex flex-col items-center text-left gap- px-6 max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              OTHER EXPERIENCES
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Faculty Communicator at the University of Sydney</p>
                <p className="italic">2022 - 2023</p>
              </div>
              <p>
              As faculty communicator of the faculty of engineering, I organised welcome events and fulfilled the role of lead mentor. This meant I trained the mentors who would be guiding students through their journey on the campuses of the University of Sydney.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Member of the European Youth Parliament</p>
                <p className="italic">2014 - 2020</p>
              </div>
              <p>
              <ul className="list-disc pl-10">
                <li>I have chaired international academic research committees exploring European law and policy, as I have attended events in different academic capacities such as President, Vice-President, and Chairperson, as well as organisational roles such as Head-Organiser and Head of Jury. These events took place in countries such as Belgium, Portugal, Slovenia, Serbia, Luxembourg, Finland, Spain, Denmark, Ireland, Estonia, Azerbaijan, Belarus, and the UK.</li>
                <li>I was board member of EYP Belgium in charge of finance and fundraising.</li>
              </ul>
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Trainer at "Parlons Ensemble de l'Europe"</p>
                <p className="italic">2019</p>
              </div>
              <p>
              I chaired an academic research group at this event, which was organised by the Belgian Ministry of Foreign Affairs and aimed at including youth in politics and decision-making.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Board Member at the Engineering Student Association (VTK)</p>
                <p className="italic">2017 - 2018</p>
              </div>
              <p>
              Board member for PR & Communications for the engineering student association VTK (Vlaamse Technische Kring).
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col items-center text-left gap- px-6 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              SKILLS
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left w-full space-y-6">
            <div className="space-y-2">
              <ul className="list-disc pl-4">
                <li><strong>Programming</strong> - Python (including libraries such as pandas, scikit-learn, PyTorch and TensorFlow), R, C, MATLAB, SQL, TypeScript, React</li>
                <li><strong>Cloud computing platforms</strong> – Azure, AWS</li>
                <li><strong>Business Intelligence</strong> – QlikView, Qlik Sense, Tableau</li>
                <li><strong>Software Development</strong> – GitHub, JIRA, Azure DevOps</li>
                <li><strong>Technical</strong> – LaTeX, CAD, FEM</li>
                <li><strong>TOEFL</strong> – 118</li>
                <li><strong>GMAT</strong> – 750</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col items-center text-left gap- px-6 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              LANGUAGES
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left w-full space-y-6">
            <div className="space-y-2">
              <ul className="list-disc pl-4">
                <li><strong>Fluent</strong> – Dutch, English</li>
                <li><strong>Proficient</strong> – German, French</li>
                <li><strong>Notions</strong> – Russian</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certficitions */}
        <section className="flex flex-col items-center text-left gap- px-6 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              CERTIFICATIONS
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left w-full space-y-6">
            <div className="space-y-2">
              <ul className="list-disc pl-4">
                <li><strong>PRINCE2</strong> | Project Management Certification by PeopleCert | Brussels, Belgium | 2024</li>
                <li><strong>Standard Mental Health First Aider</strong> | Mental Health First Aid International | Sydney, Australia | 2022</li>
                <li><strong>Python for Data Science and Machine Learning Bootcamp </strong> | Udemy Course | 2021</li>
                <li><strong>German B2</strong> | Intensive German Summer Course at Sprachenzentrum Wien | Vienna, Austria | 2018</li>
                <li><strong>Industry 4</strong> | Summer Course of the Board of European Students of Technology on "Next Generation Industry" | Rome, Italy | 2018</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className="flex flex-col items-center text-left gap- px-6 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              AWARDS
          </h2>
          <hr className="w-full border-gray-300 dark:border-gray-700 border-1 my-6" />
          <div className="text-gray-1000, dark:text-gray-300 text-left w-full space-y-6">
            <div className="space-y-2">
              <ul className="list-disc pl-4">
                <li><strong>University of Sydney</strong> | Postgraduate Prize for Outstanding Academic Achievement in Master of Data Science | 2023</li>
                <li><strong>University of Sydney</strong> | Postgraduate High Honour Roll | Highest mark in the course “Machine Learning and Data Mining” | 2023</li>
                <li><strong>Flanders</strong> | Laureate of the Plato competition | Competition for translating ancient Greek | 2015</li>
                <li><strong>KU Leuven</strong> | Laureate of the Mathematics B-day | Mathematics competition for high-schoolers | 2014</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-10"></div>

      </div>

    );
  }