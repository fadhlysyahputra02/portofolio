import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }) => (
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

const LinkedinIcon = ({ size = 20, className = "" }) => (
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/fadhly.syahputra@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Portofolio Web] Pesan Baru dari ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.");
      }
    } catch (err) {
      console.error("Email send error:", err);
      alert("Terjadi kesalahan saat pengiriman. Silakan hubungi via WhatsApp/Email langsung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfos = [
    {
      icon: <Mail className="text-teal-400" size={20} />,
      label: "Email",
      value: "fadhly.syahputra@gmail.com",
      link: "mailto:fadhly.syahputra@gmail.com",
    },
    {
      icon: <GithubIcon className="text-teal-400" size={20} />,
      label: "GitHub",
      value: "github.com/fadhlysyahputra02",
      link: "https://github.com/fadhlysyahputra02",
    },
    {
      icon: <LinkedinIcon className="text-teal-400" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/fadhlysyahputra0502",
      link: "https://www.linkedin.com/in/fadhlysyahputra0502",
    },
    {
      icon: <MapPin className="text-teal-400" size={20} />,
      label: "WhatsApp / Lokasi",
      value: "085704049215 | Indonesia",
      link: "https://api.whatsapp.com/send?phone=6285704049215",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen scroll-mt-20 pt-28 pb-20 px-4 flex flex-col justify-start bg-black">
      <div className="max-w-6xl mx-auto w-full z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-green/10 bg-accent-green/5 text-accent-green text-xs font-mono mb-4 uppercase tracking-widest"
          >
            <Mail size={12} />
            Connect
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Hubungi Saya
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Ada ide proyek menarik atau ingin berdiskusi? Jangan ragu untuk mengirimkan pesan atau terhubung melalui media sosial saya.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-6">
              {contactInfos.map((info) => {
                const CardWrapper = info.link ? "a" : "div";
                const wrapperProps = info.link
                  ? { href: info.link, target: "_blank", rel: "noreferrer", className: "cursor-pointer block" }
                  : {};

                return (
                  <CardWrapper key={info.label} {...wrapperProps}>
                    <motion.div
                      whileHover={{ x: info.link ? 6 : 0, borderColor: "rgba(0, 255, 136, 0.2)" }}
                      className="p-5 bg-brand-dark border border-white/5 rounded-xl flex items-center gap-4 transition-all duration-300"
                    >
                      <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-0.5">
                          {info.label}
                        </h4>
                        <p className="text-sm font-sans font-medium text-white group-hover:text-accent-green transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Quote / Tech tagline */}
            <div className="p-6 bg-brand-gray/50 border border-white/5 rounded-xl text-center lg:text-left mt-6">
              <span className="font-mono text-accent-green text-xs font-semibold">&gt;_ MOTO SAYA</span>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed font-light italic">
                "Bangun dengan rapi, rilis dengan stabil, rawat agar tetap hidup."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-brand-dark border border-white/5 rounded-2xl p-8 flex flex-col gap-6 h-full relative overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Bayu Pamungkas"
                  className="w-full bg-brand-gray border border-white/5 focus:border-accent-green/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                  Alamat Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="bayupamungkas@gmail.com"
                  className="w-full bg-brand-gray border border-white/5 focus:border-accent-green/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ketik pesan Anda di sini..."
                  className="w-full bg-brand-gray border border-white/5 focus:border-accent-green/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button & Notification */}
              <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent-green text-brand-black font-semibold text-sm hover:bg-emerald-400 disabled:opacity-50 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-accent-green/10 hover:shadow-accent-green/20 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin inline-block" />
                  ) : (
                    <>
                      Kirim Pesan
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-accent-green font-mono text-xs"
                    >
                      <CheckCircle size={16} />
                      Pesan Anda berhasil dikirim!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
