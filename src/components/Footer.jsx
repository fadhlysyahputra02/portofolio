import { motion } from "framer-motion";
import { ArrowUp, Download } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Keahlian", id: "skills" },
    { name: "Portofolio", id: "portfolio" },
    { name: "Karier", id: "experience" },
    { name: "Terminal", id: "terminal" },
    { name: "Kontak", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070a] text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Top Row: Info & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/5">

          {/* Brand Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-sans font-bold text-xl text-white tracking-tight">
              Muhammad Fadhly Syahputra
            </h3>
            <p className="font-mono text-xs text-teal-400">
              Application Developer &bull; DevOps Engineer &bull; Infrastructure Specialist
            </p>
            <p className="text-xs text-gray-500 max-w-md font-light leading-relaxed mt-1">
              Membangun aplikasi skalabel dan arsitektur infrastruktur server yang andal untuk hasil end-to-end terbaik.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-teal-400 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Row: Download CV & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-gray-500">

          {/* Download CV Link */}
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1X3CBExYZ6wmss9nwSPBgUbS_NWTkPwvU/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2 rounded-xl border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-400 text-teal-300 hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-teal-500/5 hover:shadow-teal-500/15"
            >
              <Download size={15} className="text-teal-400 group-hover:translate-y-0.5 transition-transform duration-300" />
              <span className="font-semibold text-xs tracking-wide">Unduh CV</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Muhammad Fadhly Syahputra.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-teal-500/40 hover:text-teal-400 transition-all cursor-pointer"
            title="Kembali ke atas"
          >
            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
