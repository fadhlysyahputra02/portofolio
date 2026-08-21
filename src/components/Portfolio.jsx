import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Briefcase, Smartphone, Server, Globe, Cpu, X, Layers } from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }) => (
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

const projects = [
  {
    title: "Aplikasi Absensi Berbasis GPS",
    category: "Mobile App",
    categoryIcon: <Smartphone size={12} />,
    description: "Sistem absensi karyawan berbasis lokasi GPS yang terintegrasi dengan REST API Laravel. Mengelola autentikasi pengguna, sinkronisasi data kehadiran real-time, serta dashboard pelaporan yang akurat untuk manajemen HR.",
    images: ["/absensi_app_1.png", "/absensi_app_2.png", "/absensi_app_3.png"],
    tags: ["Flutter", "Laravel", "PostgreSQL", "REST API", "GPS Tracking"],
    badgeStyle: "border-teal-500/30 text-teal-300 bg-teal-500/10",
    github: "https://github.com/fadhlysyahputra02/absensimagang",
    isMobile: true,
  },
  {
    title: "Sistem Kasir (Point of Sale)",
    category: "Mobile / POS",
    categoryIcon: <Cpu size={12} />,
    description: "Aplikasi kasir berbasis Flutter dengan dukungan dual-mode: online via Firebase untuk sinkronisasi real-time, dan offline via SQLite untuk transaksi tanpa jaringan. Menangani pemesanan menu, rincian pesanan, dan konfirmasi transaksi.",
    images: ["/kasir_app_1.png", "/kasir_app_2.png", "/kasir_app_3.png"],
    tags: ["Flutter", "Firebase", "SQLite", "Cloud Sync", "Offline-First"],
    badgeStyle: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
    github: "https://github.com/fadhlysyahputra02/mie-ayam-bhayangkara-offline",
    isMobile: true,
  },
  {
    title: "ERPNext & Frappe Infrastructure Support",
    category: "Infrastructure",
    categoryIcon: <Server size={12} />,
    description: "Maintenance dan optimasi lingkungan produksi ERPNext/Frappe. Melakukan deployment, pemecahan masalah konektivitas, manajemen Docker container, serta konfigurasi Nginx Reverse Proxy untuk keandalan sistem bisnis kritis.",
    images: ["/project_security_terminal.png"],
    tags: ["Linux Administration", "Docker", "Nginx Proxy", "Frappe Framework"],
    badgeStyle: "border-blue-500/30 text-blue-300 bg-blue-500/10",
    isMobile: false,
  },
  {
    title: "School Management System (Web Portal)",
    category: "Web Application",
    categoryIcon: <Globe size={12} />,
    description: "Platform manajemen sekolah berbasis web untuk pengelolaan data akademis, rekapitulasi nilai, dan dasbor portal guru serta admin. Dibangun full menggunakan Flutter Web dengan Firebase sebagai backend utama.",
    images: ["/school_web_app.png"],
    tags: ["Flutter Web", "Firebase Firestore", "Firebase Auth", "Cloud Storage"],
    badgeStyle: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
    github: "https://github.com/fadhlysyahputra02/sys-mng-sch",
    isMobile: false,
  },
  {
    title: "School Management System (Mobile App)",
    category: "Mobile App",
    categoryIcon: <Smartphone size={12} />,
    description: "Aplikasi mobile berbasis Flutter dan Firebase untuk guru, siswa, dan wali murid SMAN 1 Malang. Fitur mencakup QR ID Card digital, portal wali kelas, kelas mengajar, jadwal mata pelajaran, menu manajemen akademis, ujian semester, hingga fitur chat guru.",
    images: ["/school_mobile_1.png", "/school_mobile_2.png", "/school_mobile_3.png"],
    tags: ["Flutter", "Firebase Firestore", "Firebase Auth", "FCM"],
    badgeStyle: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10",
    github: "https://github.com/fadhlysyahputra02/sys-mng-sch",
    isMobile: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.96 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="relative min-h-screen scroll-mt-20 pt-28 pb-20 px-4 sm:px-6 flex flex-col justify-start bg-transparent">
      <div className="max-w-6xl mx-auto w-full z-10">

        {/* Section Header */}
        <div className="text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Portofolio Proyek
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed"
          >
            Menampilkan showcase implementasi teknis yang berfokus pada dua disiplin: Application Development dan Infrastructure Operations.
          </motion.p>
        </div>

        {/* Responsive CSS Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-teal-500/40 rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_35px_rgba(45,212,191,0.15)]"
            >
              {/* Image Container Header Bar */}
              <div className="relative border-b border-white/10 bg-[#07090e] overflow-hidden">
                {/* Category Badge on Top Left */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold border backdrop-blur-md shadow-lg ${project.badgeStyle}`}
                  >
                    {project.categoryIcon}
                    {project.category}
                  </span>
                </div>

                {project.isMobile ? (
                  /* 3-Screenshot Mobile Showcase (No Cropping!) */
                  <div className="pt-14 pb-5 px-4 bg-gradient-to-b from-[#0a0d16] to-[#05060a]">
                    <div className="flex items-center justify-center gap-2.5 sm:gap-4 h-72 sm:h-80">
                      {project.images.map((imgSrc, imgIdx) => (
                        <motion.div
                          key={imgIdx}
                          whileHover={{ scale: 1.05, y: -4 }}
                          onClick={() => setSelectedImage(imgSrc)}
                          className="
                            relative w-1/3 h-full rounded-2xl overflow-hidden border border-white/15 
                            shadow-xl bg-black/80 group/img cursor-pointer transition-all duration-300
                            hover:border-teal-400/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]
                          "
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title} Screenshot ${imgIdx + 1}`}
                            className="w-full h-full object-contain bg-black/90 p-1"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mono text-[10px] bg-black/80 text-teal-300 px-2 py-1 rounded border border-teal-500/30">
                              Zoom
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[10px] font-mono text-center text-gray-500 mt-3">
                      * Klik gambar untuk melihat ukuran penuh
                    </p>
                  </div>
                ) : (
                  /* Standard Web / Infrastructure Image Box */
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
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

      {/* Modal Preview for Full-size Image Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-md w-full max-h-[90vh] flex flex-col items-center justify-center bg-[#07090e] p-2 rounded-3xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-white hover:text-teal-400 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage}
                alt="Full size preview"
                className="w-full h-auto max-h-[82vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
