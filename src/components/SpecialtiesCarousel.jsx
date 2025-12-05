import React from "react";
import { motion } from "motion/react";

const SpecialtiesCarousel = () => {
  const specialties = [
    { icon: "👨‍⚕️", label: "Coloproctología" },
    { icon: "🏥", label: "Hemorroides" },
    { icon: "🏢", label: "Cirugía de colon y ano" },
    { icon: "🔬", label: "Cirugía Laparoscópica" },
    { icon: "⚕️", label: "Cirugía Abdominal" },
    { icon: "💉", label: "Procedimientos Menores" },
  ];

  // x4 items para efecto infinito seamless
  const duplicatedSpecialties = [...specialties, ...specialties, ...specialties, ...specialties];

  return (
    <div className="relative w-full bg-gradient-to-r from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] dark:from-[#07334a] dark:via-[#0b506f] dark:to-[#07334a] py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Gradient fade left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#1e3a5f] via-[#1e3a5f]/50 to-transparent dark:from-[#07334a] dark:via-[#07334a]/50 z-10 pointer-events-none" />
      
      {/* Gradient fade right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#1e3a5f] via-[#1e3a5f]/50 to-transparent dark:from-[#07334a] dark:via-[#07334a]/50 z-10 pointer-events-none" />

      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 sm:gap-12 lg:gap-16 px-4"
          animate={{ x: [0, -2880] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedSpecialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-3 sm:gap-4 flex-shrink-0 min-w-max"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 dark:bg-white/5 border-2 border-white/30 dark:border-[#36c9fa]/30 backdrop-blur-sm hover:border-white/50 dark:hover:border-[#36c9fa]/60 transition-colors">
                <span className="text-3xl sm:text-4xl lg:text-5xl">{specialty.icon}</span>
              </div>

              {/* Label */}
              <p className="text-white text-center text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap px-2">
                {specialty.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#36c9fa] to-transparent" />
    </div>
  );
};

export default SpecialtiesCarousel;
