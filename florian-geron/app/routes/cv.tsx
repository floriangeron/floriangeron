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
      <div className="flex flex-col items-center gap-16 w-full">
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
                <p className="font-bold">Deloitte - Senior Data Scientist</p>
                <p className="italic">Sept 2023 - Present</p>
              </div>
              <p>
                  Data Scientist with a focus on implementing Machine Learning solutions related to Natural Language Processing and Computer Vision.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Trilations - Data Consultant</p>
                <p className="italic">Sept 2020 - June 2022</p>
              </div>
              <p>
              As an analyst at a management consultancy firm that delivers actionable insights based on quantitative business measures and comprehensive data analytics techniques, my responsibilities included:
                <ul className="list-disc pl-10">
                  <li>Creating holistic dashboards</li>
                  <li>Data modelling, pipelining, processing, analysis, and visualisation</li>
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
            <div className="space-y-1">
              <div className="flex justify-between">
                <p className="font-bold">UNIVERSITY OF SYDNEY</p>
                <p className="italic">Sydney, Australia</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Master of Data Science - High Distinction</p>
                <p className="italic">Sept 2022 - June 2023</p>
              </div>
              <p>
                <ul className="list-disc pl-10">
                  <li>Deep learning, natural language processing, visual analytics, data mining</li>
                  <li>Faculty communicator and lead mentor at the faculty of engineering</li>
                </ul>
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <p className="font-bold">CATHOLIC UNIVERSITY OF LEUVEN (KU Leuven)</p>
                <p className="italic">Leuven, Belgium</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">MSc of Mechanical Engineering - Distinction</p>
                <p className="italic">Sept 2018 - June 2020</p>
              </div>
              <p>
                <ul className="list-disc pl-10">
                  <li>Specialisation: Mechatronics and robotics</li>
                  <li>Optimisation, intellectual property management, advanced robot control systems</li>
                  <li>Spent one semester abroad in Vienna, as part of an exchange programme (Erasmus) to the Technical University of Vienna (TU Wien)</li>
                </ul>
              </p>
              <div className="flex justify-between">
                <p className="font-bold">BSc of Engineering Sciences - Distinction</p>
                <p className="italic">Sept 2015 - June 2018</p>
              </div>
              <p>
                <ul className="list-disc pl-10">
                  <li>Specialisation: Electrical and mechanical engineering</li>
                  <li>Computer science methodologies, numerical mathematics, industrial management</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

      </div>

    );
  }