import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/40 backdrop-blur-md shadow-sm"
            : "bg-white shadow-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between font-bold">
        <h1 className="text-xl text-orange-500">Lalitha</h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://drive.google.com/file/d/1-O2u2AWG7wcfWg2cXI3NL8cLyPOBhsRI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
