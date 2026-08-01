import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Building2, Terminal } from "lucide-react";

const experiences = [
  {
    type: "work",
    isActive: true,
    statusText: "[STATUS: ACTIVE]",
    company: "PT. Textilindo",
    role: "IT Staff / Server & Infrastructure",
    period: "Sept 2025 – Sekarang",
    description:
      "Bertanggung jawab atas administrasi server Linux/Windows, pemeliharaan ERPNext, manajemen Docker, dan memastikan konektivitas jaringan perusahaan tetap optimal.",
    tags: ["Linux Admin", "Windows Server", "ERPNext", "Docker", "Nginx", "Networking"],
    icon: <Building2 className="text-emerald-400" size={18} />,
  },
  {
    type: "intern",
    isActive: false,
    statusText: "[STATUS: COMPLETED]",
    company: "CV. Natusi",
    role: "Mobile Developer Intern",
    period: "Juli 2024 – Desember 2024",
    description:
      "Mengembangkan aplikasi mobile menggunakan Flutter dan mengintegrasikan layanan backend REST API untuk sistem absensi dan manajemen internal.",
    tags: ["Flutter", "Dart", "REST API", "State Management", "Mobile Development"],
    icon: <Briefcase className="text-teal-400" size={18} />,
  },
  {
    type: "education",
    isActive: false,
    statusText: "[STATUS: GRADUATED]",
    company: "Universitas Muhammadiyah Malang",
    role: "S1 Teknik Informatika",
    period: "2021 – 2025",
    description:
      "Fokus pada pengembangan perangkat lunak, arsitektur sistem terdistribusi, dan arsitektur infrastruktur IT.",
    tags: ["Software Engineering", "Computer Networks", "Database Systems", "Cloud Computing"],
    icon: <GraduationCap className="text-blue-400" size={18} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen scroll-mt-20 pt-28 pb-20 px-4 sm:px-6 flex flex-col justify-start bg-transparent"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-mono mb-4 uppercase tracking-widest"
          >
            <Terminal size={14} />
            Career & Education Track
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Karier & Edukasi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed"
          >
            Rekam jejak pengalaman kerja profesional, kegiatan magang, serta latar belakang pendidikan akademik.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative pl-6 sm:pl-10 space-y-12"
        >
          {/* Vertical Dashed Connecting Line */}
          <div className="absolute top-3 bottom-3 left-2.5 sm:left-4.5 w-0.5 border-l-2 border-dashed border-teal-500/30 -z-10" />

          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              {/* Timeline Point (Node) with Pulse Effect for Active Status */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 flex items-center justify-center">
                {exp.isActive ? (
                  <div className="relative flex items-center justify-center">
                    {/* Glowing outer pulse ring */}
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-black shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full bg-[#121824] border-2 border-teal-400/50 shadow-md group-hover:border-teal-300 group-hover:scale-125 transition-all duration-300" />
                )}
              </div>

              {/* Experience Card Container */}
              <div
                className={`
                  backdrop-blur-xl bg-white/[0.02] border rounded-3xl p-6 sm:p-8
                  transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]
                  ${
                    exp.isActive
                      ? "border-emerald-500/40 shadow-[0_0_20px_rgba(52,211,153,0.1)] hover:border-emerald-400"
                      : "border-white/10 hover:border-teal-500/40"
                  }
                `}
              >
                {/* Status & Period Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-semibold tracking-wider ${
                        exp.isActive ? "text-emerald-400" : "text-teal-400"
                      }`}
                    >
                      {exp.statusText}
                    </span>
                    <span className="text-gray-500">@</span>
                    <span className="text-white font-bold text-sm tracking-tight">{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    <Calendar size={13} className="text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">{exp.icon}</div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-gray-300 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-500/20 group-hover:text-teal-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
