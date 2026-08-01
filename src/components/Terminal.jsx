import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TermIcon, RotateCcw, Activity, ShieldCheck, Globe, Clock, MapPin } from "lucide-react";

const welcomeMessage = [
  "┌──────────────────────────────────────────────────────────┐",
  "│  Command Center OS v2.4.0 (x86_64-apple-darwin)          │",
  "│  Type 'help' to inspect available CLI commands.          │",
  "└──────────────────────────────────────────────────────────┘",
  "",
];

const Terminal = () => {
  const [history, setHistory] = useState(welcomeMessage);
  const [inputVal, setInputVal] = useState("");
  const consoleRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll ONLY internal console container without moving window
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const rawCommand = inputVal.trim();
      const command = rawCommand.toLowerCase();
      let response = [];

      switch (command) {
        case "whoami":
          response = [
            "USER IDENTITY:",
            "  Name:     Muhammad Fadhly Syahputra",
            "  Role:     DevOps Engineer | Linux System Administrator | Programmer",
            "  Company:  PT. Textilindo — IT Staff / Server & Infrastructure",
            "  Bio:      IT professional dengan pengalaman praktis dalam administrasi",
            "            server Linux, Docker & Docker Compose, Nginx reverse proxy,",
            "            manajemen database, dan troubleshooting jaringan.",
            "            Juga memiliki latar belakang kuat dalam pengembangan aplikasi",
            "            mobile dan web untuk solusi end-to-end yang sempurna.",
          ];
          break;

        case "ls projects":
        case "ls":
        case "projects":
          response = [
            "CHECKING PROJECT DIRECTORY (~/projects)...",
            "======================================================================================",
            "PERMISSION    PROJECT NAME                    CATEGORY          STACK",
            "--------------------------------------------------------------------------------------",
            "drwxr-xr-x    ERPNext-Frappe-Server-Support   Infrastructure    Linux, Docker, Nginx",
            "  └─ Deployment, maintenance & troubleshooting lingkungan produksi ERPNext/Frappe.",
            "     Konfigurasi reverse proxy, pembaruan layanan, dan penanganan isu konektivitas.",
            "",
            "drwxr-xr-x    Dockerized-App-Environment      Infrastructure    Docker, Docker Compose",
            "  └─ Containerisasi aplikasi dan layanan, manajemen volume, network, dan image.",
            "",
            "drwxr-xr-x    Nginx-Reverse-Proxy-Config      Infrastructure    Nginx, SSL/TLS, DNS",
            "  └─ Konfigurasi reverse proxy, SSL/TLS termination, dan routing multi-domain.",
            "",
            "drwxr-xr-x    Network-Server-Troubleshooting  Infrastructure    Linux, VLAN, Firewall",
            "  └─ Administrasi server, monitoring log, manajemen SSH, dan troubleshooting jaringan.",
            "",
            "drwxr-xr-x    Employee-Attendance-App         Mobile App        Flutter, Laravel, PostgreSQL",
            "  └─ Aplikasi absensi berbasis GPS dengan autentikasi, sinkronisasi real-time,",
            "     dan dashboard pelaporan untuk kebutuhan HR.",
            "",
            "drwxr-xr-x    Food-POS-Mobile-App             Mobile App        Flutter, Firebase, SQLite",
            "  └─ Aplikasi kasir dual-mode: online via Firebase & offline via SQLite.",
            "",
            "drwxr-xr-x    School-Management-System        Application       Firebase, Firestore, Auth",
            "  └─ Sistem manajemen sekolah dengan data siswa, guru, kelas, dan role-based access.",
            "======================================================================================",
            "",
            "Ketik 'techstack' untuk melihat keahlian teknis, atau scroll ke section Portofolio.",
          ];
          break;

        case "techstack":
          response = [
            "TECHNICAL STACK & SKILLS:",
            "─────────────────────────────────────────────────────",
            "  [OS & Server]",
            "    └─ Linux (Ubuntu/Debian), Windows Server",
            "",
            "  [Infrastructure & DevOps]",
            "    └─ Docker, Docker Compose, Nginx, Reverse Proxy",
            "    └─ SSH, SSL/TLS, Firewall, TCP/IP, DNS, VLAN",
            "    └─ Bash Scripting, Git, Server Monitoring",
            "",
            "  [Database]",
            "    └─ PostgreSQL, MySQL, SQLite, Firebase Firestore",
            "",
            "  [Development]",
            "    └─ Flutter, PHP (Laravel), Golang",
            "    └─ JavaScript, TypeScript, REST API, Postman",
            "─────────────────────────────────────────────────────",
          ];
          break;

        case "contact":
          response = [
            "CONTACT & CONNECTIVITY:",
            "  LinkedIn:  https://www.linkedin.com/in/fadhly-syahputra",
            "  GitHub:    https://github.com/fadhlysyahputra02",
            "  Email:     fadhly.syahputra@gmail.com",
            "  Phone:     +62 857-0404-9215",
          ];
          break;

        case "help":
          response = [
            "COMMAND CENTER CLI — AVAILABLE COMMANDS:",
            "  whoami       - Tampilkan identitas & bio profesional",
            "  projects     - List semua proyek aplikasi & infrastruktur",
            "  techstack    - Tampilkan keahlian teknis lengkap",
            "  contact      - Tampilkan info kontak & profil",
            "  clear        - Bersihkan layar terminal",
            "  secret       - Run core system diagnostic",
          ];
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        case "secret":
          response = [
            "Initiating core diagnostic override...",
            "  ██████╗  ██████╗ ██╗   ██╗██████╗ ███████╗",
            "  ██╔══██╗██╔═══██╗██║   ██║██╔══██╗██╔════╝",
            "  ██║  ██║██║   ██║██║   ██║██████╔╝███████╗",
            "  ██║  ██║██║   ██║██║   ██║██╔═══╝ ╚════██║",
            "  ██████╔╝╚██████╔╝╚██████╔╝██║     ███████║",
            "  ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚══════╝",
            "",
            "  [LOG]: Linux server online. Docker daemon running.",
            "  [LOG]: Nginx reverse proxy active. SSL/TLS verified.",
            "  [LOG]: All systems operational. Uptime: 99.9%",
          ];
          break;

        case "":
          response = [""];
          break;

        default:
          response = [
            `zsh: command not found: ${rawCommand}`,
            `Ketik 'help' untuk melihat perintah yang tersedia.`,
          ];
      }

      setHistory((prev) => [...prev, `fadhly@command-center:~$ ${inputVal}`, ...response]);
      setInputVal("");
    }
  };

  const resetTerminal = () => {
    setHistory(welcomeMessage);
    setInputVal("");
  };

  return (
    <section id="terminal" className="relative min-h-screen scroll-mt-20 pt-28 pb-20 px-4 sm:px-6 flex flex-col justify-start bg-transparent">
      <div className="max-w-4xl mx-auto w-full z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-mono mb-4 uppercase tracking-widest"
          >
            <TermIcon size={14} />
            Command Center
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Interactive Command Center
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Eksplorasi latar belakang, proyek, dan kontak secara langsung dengan mengetikkan perintah shell di bawah ini.
          </p>
        </div>

        {/* MacOS Style Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={handleTerminalClick}
          className="w-full bg-[#0a0d12] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] font-mono text-xs sm:text-sm text-gray-300 cursor-text group"
        >
          {/* MacOS Window Control Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#12161f] border-b border-white/10 select-none">
            {/* Color Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity inline-block cursor-pointer" title="Close" />
              <span className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity inline-block cursor-pointer" title="Minimize" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity inline-block cursor-pointer" title="Expand" />
            </div>

            {/* Window Title */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <TermIcon size={13} className="text-teal-400" />
              <span>fadhly@command-center:~ (zsh)</span>
            </div>

            {/* Reset Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetTerminal();
              }}
              className="text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded hover:bg-white/5"
              title="Reset Console"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Terminal Console Output */}
          <div ref={consoleRef} className="p-5 sm:p-7 min-h-[320px] max-h-[460px] overflow-y-auto flex flex-col gap-2.5 bg-[#07090e]">
            {history.map((line, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap leading-relaxed ${line.startsWith("fadhly@command-center:~$")
                  ? "text-teal-300 font-semibold"
                  : line.startsWith("USER IDENTITY:") || line.startsWith("DIRECTORY CONTENTS") || line.startsWith("CONTACT & CONNECTIVITY:")
                    ? "text-cyan-400 font-bold"
                    : line.startsWith("zsh:")
                      ? "text-rose-400"
                      : "text-gray-300"
                  }`}
              >
                {line}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-white pt-1">
              <span className="text-teal-400 font-semibold select-none">fadhly@command-center:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-grow bg-transparent border-none outline-none focus:ring-0 p-0 text-white font-mono text-xs sm:text-sm"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>
          </div>
        </motion.div>

        {/* System Simulation Footer Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 px-6 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-gray-400 backdrop-blur-md"
        >
          {/* Server Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-gray-300 font-medium">Server Status:</span>
            <span className="text-emerald-400 font-semibold">Operational</span>
          </div>

          {/* Uptime */}
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-teal-400" />
            <span className="text-gray-300 font-medium">Uptime:</span>
            <span className="text-teal-300 font-semibold">99.9%</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-gray-300 font-medium">Location:</span>
            <span className="text-blue-300 font-semibold">Indonesia</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Terminal;
