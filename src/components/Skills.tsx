import { motion, type Variants } from "framer-motion";
import { skills } from "../data/skills";
import { skillIcons } from "../data/skillIcons";
import { FaRegCircle } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-10 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-16">
        Skills
      </h2>

      <div className="space-y-10">
        {skills.map((group) => (
          <motion.div
            key={group.title}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => {
                const Icon = skillIcons[skill] ?? FaRegCircle;

                return (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      text-sm font-medium
                      rounded-md
                      bg-white text-gray-800 border border-gray-200
                      shadow-sm
                      hover:bg-orange-500 hover:text-white
                      transition-colors
                    "
                  >
                    <Icon className="text-base" />
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
