import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

export default function App() {


  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Fixed Navigation */}
      <Navbar/>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-12 space-y-20">
        <Home />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
