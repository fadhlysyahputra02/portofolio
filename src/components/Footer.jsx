import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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

        {/* Bottom Row: Social Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-gray-500">
          
          {/* Social Links including LinkedIn */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/fadhlysyahputra0502"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-teal-500/40 hover:text-teal-400 transition-all cursor-pointer"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/fadhlysyahputra02"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-teal-500/40 hover:text-white transition-all cursor-pointer"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Muhammad Fadhly Syahputra. Dibuat dengan React & Tailwind CSS.
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
