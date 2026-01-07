import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className=" flex items-center py-30" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-lg text-gray-600  mb-4">
            Hi, I am
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-orange-500">Lalitha</span> Pottabathini
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Results-driven Full Stack Developer with 2 years of experience building
            scalable, distributed full-stack applications using React,
            Node.js, GraphQL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side - Image */}
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
          <div className="relative w-96 h-96 rounded-full overflow-hidden z-10">
            {/* <img
              src="/cartoon.png"
              alt="Lalitha Pottabathini"
              className="w-full h-full object-cover"
            /> */}
            <video
              src="/video.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
