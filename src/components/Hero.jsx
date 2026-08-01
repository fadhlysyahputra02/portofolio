import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

// --- Typewriter Effect Hook ---
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2200) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          // Fully typed, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

// --- Main Hero Component ---
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const roles = ["Application Developer", "DevOps Engineer", "Infrastructure Specialist"];
  const typedText = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl text-center z-10 flex flex-col items-center"
      >

        {/* Techy Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-teal-500/25 bg-teal-500/5 text-teal-400 text-xs font-mono mb-8 uppercase tracking-[0.18em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
          </span>
          <Cpu size={12} />
          Available for Work
        </motion.div>

        {/* Main Name — Full Teal to Blue Gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-[5rem] font-extrabold tracking-tighter leading-[1.05] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
        >
          Muhammad Fadhly Syahputra
        </motion.h1>

        {/* Typewriter Roles */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 font-mono text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 h-9"
        >
          <span className="text-teal-400 select-none">&gt;_</span>
          <span className="text-white font-semibold min-w-0">
            {typedText}
          </span>
          <span className="inline-block w-0.5 h-6 bg-teal-400 cursor-blink align-middle self-center" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-sans font-light"
        >
          Membangun aplikasi yang skalabel{" "}
          <span className="text-teal-400 font-medium">(Apps)</span> dan memastikan
          infrastruktur yang handal{" "}
          <span className="text-blue-400 font-medium">(DevOps)</span> untuk hasil{" "}
          <span className="text-white font-medium italic">end-to-end</span> yang sempurna.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 font-mono w-full sm:w-auto"
        >
          {/* Primary CTA — Glow on hover */}
          <motion.button
            onClick={() => scrollToSection("portfolio")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              group relative flex items-center justify-center gap-2.5
              px-9 py-4 rounded-full text-sm font-semibold cursor-pointer
              bg-gradient-to-r from-teal-500 to-blue-600
              text-white
              transition-all duration-300
              shadow-[0_0_0_0_rgba(45,212,191,0)]
              hover:shadow-[0_0_30px_8px_rgba(45,212,191,0.3),0_0_60px_16px_rgba(59,130,246,0.15)]
            "
          >
            {/* Inner glow overlay */}
            <span
              className="
                absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-teal-400/20 to-blue-500/20
                transition-opacity duration-300
              "
            />
            <span className="relative">Lihat Projek</span>
            <ArrowRight
              size={16}
              className="relative group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            onClick={() => scrollToSection("terminal")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex items-center justify-center gap-2.5
              px-9 py-4 rounded-full text-sm font-medium cursor-pointer
              border border-white/10 hover:border-teal-500/40
              bg-white/5 hover:bg-teal-500/5
              text-gray-300 hover:text-white
              transition-all duration-300
            "
          >
            <span className="text-teal-400 font-bold">&gt;_</span>
            Jalankan Terminal
          </motion.button>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-8 bg-gradient-to-b from-teal-500/60 to-transparent rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Ambient radial glow behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-teal-600/10 via-cyan-600/8 to-blue-600/10 blur-3xl pointer-events-none -z-10" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-20" />
    </section>
  );
};

export default Hero;
