import Navbar from "./components/Navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-x-hidden selection:bg-teal-500/30 selection:text-white">
      {/* Dynamic Network Node Background */}
      <InteractiveBackground />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Terminal />
        <Contact />
      </main>

      {/* Minimalist & Informative Footer */}
      <Footer />

      {/* WhatsApp Floating Action Button (FAB) */}
      <WhatsAppFAB />
    </div>
  );
}

export default App;
