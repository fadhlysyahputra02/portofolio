import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal as TerminalIcon } from "lucide-react";

const navItems = [
  { name: "Beranda", id: "home" },
  { name: "Keahlian", id: "skills" },
  { name: "Portofolio", id: "portfolio" },
  { name: "Karier", id: "experience" },
  { name: "Terminal", id: "terminal" },
  { name: "Kontak", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle URL hash on initial page load / reload
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash, false);
      }, 100);
    }
  }, []);

  // Track scrolling using viewport center calculation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate position relative to viewport center
      const viewportCenter = window.scrollY + window.innerHeight / 3;

      // Special case: if scrolled near the very bottom, activate the last section ('contact')
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - 100;
          if (viewportCenter >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, updateHash = true) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      if (updateHash) {
        window.history.pushState(null, "", `#${id}`);
      }
      setActiveSection(id);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl font-mono glassmorphism rounded-full px-6 py-3 transition-all duration-300 ${
          isScrolled ? "shadow-2xl shadow-black/80 py-2.5" : "shadow-md"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Tech Identity */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 font-bold tracking-tight text-white hover:text-teal-400 cursor-pointer transition-colors duration-200"
          >
            <TerminalIcon size={18} className="text-teal-400" />
            <span className="text-sm md:text-base tracking-wider font-mono">MFS // PORTFOLIO</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-black font-bold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full -z-10 shadow-lg shadow-teal-500/20"
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Glassmorphism overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] font-mono glassmorphism rounded-3xl p-6 md:hidden shadow-2xl flex flex-col gap-4 text-center"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-2 text-sm tracking-widest cursor-pointer transition-all ${
                    isActive
                      ? "text-teal-400 font-semibold border-b border-teal-400/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
