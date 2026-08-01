import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = ({ size = 26, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const WhatsAppFAB = () => {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp target phone & pre-filled Indonesian message
  const waPhone = "6285704049215";
  const waMessage = encodeURIComponent(
    "Halo Muhammad Fadhly Syahputra, saya tertarik untuk berdiskusi mengenai proyek / peluang kerja."
  );
  const waUrl = `https://api.whatsapp.com/send?phone=${waPhone}&text=${waMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center px-4 py-2 rounded-xl bg-[#121824] border border-emerald-500/30 text-white font-mono text-xs shadow-xl shadow-black/60 pointer-events-none"
          >
            <span className="text-emerald-400 font-semibold mr-1.5">&gt;_</span>
            Hubungi via WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative group flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] text-white
          shadow-[0_0_25px_rgba(37,211,102,0.4)]
          hover:shadow-[0_0_35px_rgba(37,211,102,0.7)]
          transition-all duration-300 cursor-pointer
        "
        aria-label="Hubungi via WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="animate-ping absolute inset-0 rounded-full bg-[#25D366] opacity-40 pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="relative group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
};

export default WhatsAppFAB;
