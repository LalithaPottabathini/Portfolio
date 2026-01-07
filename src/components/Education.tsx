import { motion } from "framer-motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-white py-24 px-6 overflow-visible"
    >
      {/* SECTION WRAPPER (relative anchor for absolute image) */}
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Education
        </h2>

        {/* EDUCATION CONTAINER */}
        <div className="relative bg-white border-l-4 border-orange-500 shadow-md rounded-lg px-10 py-10 ml-32">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold">
                  {edu.degree}
                </h3>
                <p className="text-gray-700">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600">
                  {edu.duration} | {edu.score}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GIRL IMAGE — OUTSIDE CONTAINER, ABSOLUTE OVERLAY */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            absolute
            top-22
            left-29
            -translate-x-1/2
            w-36
            z-30
            pointer-events-none
            hidden lg:block
          "
        >
          <img
            src="/education-cartoon.png"
            alt="Cartoon girl overlapping education section"
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  );
}
