import { motion } from "framer-motion";
import { Laptop, Server, Layers, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: <Laptop className="text-teal-400" size={28} />,
    description: "Fokus pada pembuatan aplikasi cerdas, skalabel, dan efisien dari sisi front-end hingga back-end.",
    skills: ["Flutter", "Laravel", "Golang", "PostgreSQL", "Firebase", "REST API"],
    accentColor: "from-teal-500/20 to-cyan-500/20",
    glowColor: "hover:shadow-[0_0_35px_rgba(45,212,191,0.25)] hover:border-teal-400/50",
    badgeColor: "border-teal-500/20 text-teal-300 bg-teal-500/5 hover:border-teal-400/40 hover:text-teal-200",
  },
  {
    title: "Infrastructure & Ops",
    icon: <Server className="text-blue-400" size={28} />,
    description: "Memastikan stabilitas sistem, otomatisasi deployment, manajemen server, dan arsitektur jaringan yang andal.",
    skills: [
      "Docker",
      "Nginx Proxy",
      "Linux Server Management",
      "ERPNext Deployment",
      "Networking (VLAN/Firewall)",
    ],
    accentColor: "from-blue-500/20 to-indigo-500/20",
    glowColor: "hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:border-blue-400/50",
    badgeColor: "border-blue-500/20 text-blue-300 bg-blue-500/5 hover:border-blue-400/40 hover:text-blue-200",
  },
];

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen scroll-mt-20 pt-28 pb-20 px-6 flex flex-col justify-start bg-black">
      <div className="max-w-6xl mx-auto w-full z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-mono mb-4 uppercase tracking-widest"
          >
            <Layers size={14} />
            Core Competencies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Keahlian & Ekosistem Teknologi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed"
          >
            Kombinasi kemampuan pengembangan aplikasi (*Development*) dan keahlian pengelolaan infrastruktur (*DevOps*) untuk solusi end-to-end yang tangguh.
          </motion.p>
        </div>

        {/* 2-Column Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              className={`
                relative group backdrop-blur-xl bg-white/[0.02] 
                border border-white/10 rounded-3xl p-8 sm:p-10 
                transition-all duration-500 flex flex-col h-full overflow-hidden
                ${category.glowColor}
              `}
            >
              {/* Subtle top background gradient glow */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${category.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}
              />

              {/* Card Icon & Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                {category.description}
              </p>

              {/* Skills List Badges */}
              <div className="mt-auto">
                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Tech Stack List
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.03 }}
                      className={`
                        flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-2.5 rounded-xl
                        border backdrop-blur-md transition-all duration-300 ${category.badgeColor}
                      `}
                    >
                      <CheckCircle2 size={14} className="opacity-75" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
