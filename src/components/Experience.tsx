import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Professional Experience
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-4 items-start">
          
          {/* LEFT: Experience Content */}
          <div>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-l border-orange-500 pl-6 mb-10"
              >
                <h3 className="text-xl font-semibold">
                  {exp.role} – {exp.company}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {exp.duration} | {exp.location}
                </p>

                <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start lg:-ml-6 lg:mt-16"
          >
            {/* Blob Background */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-96 h-96 text-orange-400 opacity-80"
            >
              <path
                fill="currentColor"
                d="M44.8,-74.6C57.9,-68.5,68.1,-57.7,73.9,-45C79.7,-32.2,81.2,-17.5,78.8,-4.1C76.4,9.3,70.1,21.3,62.1,32.7C54.1,44.1,44.4,54.9,32.6,62.4C20.8,69.8,6.9,73.9,-7.4,75.5C-21.7,77.1,-43.4,76.2,-58.1,67.7C-72.7,59.2,-80.4,43.2,-82.8,26.5C-85.2,9.8,-82.4,-7.6,-75.4,-22.8C-68.4,-38,-57.3,-51,-43.8,-57.4C-30.3,-63.8,-15.1,-63.6,0.1,-63.8C15.3,-64,30.7,-64.6,44.8,-74.6Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Cartoon Image */}
            <div className="relative w-96 h-96 z-10">
              <img
                src="/exp-cartoon.png"
                alt="Lalitha Pottabathini"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
