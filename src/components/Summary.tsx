import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Blob background */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-95 h-95 text-orange-400 opacity-80"
          >
            <path
              fill="currentColor"
              d="M44.8,-74.6C57.9,-68.5,68.1,-57.7,73.9,-45C79.7,-32.2,81.2,-17.5,78.8,-4.1C76.4,9.3,70.1,21.3,62.1,32.7C54.1,44.1,44.4,54.9,32.6,62.4C20.8,69.8,6.9,73.9,-7.4,75.5C-21.7,77.1,-43.4,76.2,-58.1,67.7C-72.7,59.2,-80.4,43.2,-82.8,26.5C-85.2,9.8,-82.4,-7.6,-75.4,-22.8C-68.4,-38,-57.3,-51,-43.8,-57.4C-30.3,-63.8,-15.1,-63.6,0.1,-63.8C15.3,-64,30.7,-64.6,44.8,-74.6Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Image */}
          <div className="relative w-84 h-84 rounded-full overflow-hidden z-10">
            <img
              src="/cartoon.png"
              alt="Lalitha Pottabathini"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>

          <p className="text-gray-600 mb-8">
            Results-driven Software Engineer with 2 years of experience
            designing and deploying scalable, distributed full-stack
            applications. Expert in JavaScript/TypeScript ecosystems with deep
            knowledge of React, Angular, Node.js, Express.js, and cloud-native
            architectures. Demonstrated success optimizing system performance
            (45% reliability improvement), accelerating deployment velocity (50%
            reduction), and architecting microservices for high-throughput
            enterprise applications. Proficient in API design, database
            optimization, CI/CD automation, test-driven development, and agile
            methodologies.Actively exploring Generative AI and Large Language
            Model (LLM) system internals, tokenization, inference workflows, and
            RLHF techniques for intelligent application development.
          </p>

          <Skill label="JavaScript / TypeScript" value="90%" />
          <Skill label="Node.js / React" value="85%" />
          <Skill label="Databases /GraphQL" value="80%" />
        </div>
      </div>
    </section>
  );
}

function Skill({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-orange-500 rounded"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  );
}
