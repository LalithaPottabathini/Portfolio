import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Check } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-32 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mb-20"
      >
        Key Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-14">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="
              relative
              bg-gradient-to-b from-orange-50 to-white
              border border-orange-100
              rounded-3xl
              p-10
              shadow-xl
              hover:shadow-orange-300/30
              transition-all
            "
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Contributions */}
            <div>
              <h4 className="text-black font-semibold mb-4">
                Contributions
              </h4>

              <ul className="space-y-4 text-gray-700">
                {project.contributions.map(item => (
                  <li key={item} className="flex gap-3">
                    <Check className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl -z-10" />
    </section>
  );
}
