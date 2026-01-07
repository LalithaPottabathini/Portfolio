import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                LP
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Lalitha Pottabathini
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Software Engineer specializing in full-stack development,
              cloud architecture, and building scalable web applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/lalitha29/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://github.com/LalithaPottabathini"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#home" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-500 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              lalitha.pottabathini.29@gmail.com
            </p>
            <p className="text-sm text-gray-600">
              Hyderabad, India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-100 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>
            © 2026 Lalitha Pottabathini. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://drive.google.com/file/d/1-O2u2AWG7wcfWg2cXI3NL8cLyPOBhsRI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
