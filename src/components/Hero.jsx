import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.8 };

  return (
    <div
      id="hero"
      className="relative w-full h-auto lg:h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: assets.image_hero
          ? `url(${assets.image_hero})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />

      {/* Content container */}
      <div className="relative z-10 w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0 min-h-auto lg:min-h-screen">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text content section */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.4 }}
            className="flex flex-col gap-5 sm:gap-6 lg:gap-8 order-2 lg:order-1"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 dark:bg-[#07334a]/80 border border-[#0095d0]/30 dark:border-[#36c9fa]/40 rounded-full w-fit mx-auto backdrop-blur-sm">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#0095d0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                Más de 1,000 pacientes satisfechos
              </span>
            </div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-center"
            >
              <span className="block text-white drop-shadow-lg">
                Tu Salud es
              </span>
              <span className="block text-[#36c9fa] drop-shadow-[0_0_10px_rgba(54,201,250,0.5)] mt-2">
                Nuestra Prioridad
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.7 }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/95 drop-shadow-md max-w-lg text-center mx-auto"
            >
              Centro médico integral con enfoque en cirugía laparoscópica,
              atención personalizada y tecnología de punta para tu bienestar.
            </motion.p>

            {/* Call to action buttons */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center"
            >
              <motion.a
                href="#contact-us"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg px-8 py-4 font-bold text-white bg-gradient-to-r from-[#0095d0] via-[#0cb3eb] to-[#36c9fa] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#36c9fa] to-[#0095d0] opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="relative z-10">Reservar Cita</span>
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-bold rounded-lg bg-white/90 dark:bg-[#07334a]/80 text-[#0095d0] dark:text-[#36c9fa] border-2 border-white/90 dark:border-[#36c9fa]/50 hover:bg-white dark:hover:bg-[#0b506f] backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Nuestros Servicios</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Doctor profile section */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-6 sm:gap-8 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated rotating glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-[#0095d0] via-[#0cb3eb] to-[#36c9fa] rounded-full blur-lg opacity-60"
              />

              {/* Animated rings */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-white/50 dark:border-[#36c9fa]/60"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -inset-12 sm:-inset-16 rounded-full border border-white/30 dark:border-[#7cdafd]/40"
              />

              {/* Doctor image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden ring-4 sm:ring-6 lg:ring-8 ring-white dark:ring-[#0b506f] shadow-2xl">
                <img
                  src={assets.angelo}
                  alt="Dr. Angelo Chuctaya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Specialty badge */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-[#07334a]/90 rounded-full px-6 py-3 shadow-lg border-2 border-[#0095d0]/30 backdrop-blur-sm"
              >
                <p className="text-center">
                  <span className="block text-sm font-bold text-[#0095d0] dark:text-[#36c9fa]">
                    Especialista en
                  </span>
                  <span className="block text-xs text-gray-600 dark:text-gray-300">
                    Cirugía Laparoscópica
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Doctor info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.3 }}
              className="text-center"
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white drop-shadow-lg"
                style={{
                  textShadow:
                    "0 0 30px rgba(220, 38, 38, 0.6), 0 0 50px rgba(220, 38, 38, 0.4), 0 0 70px rgba(220, 38, 38, 0.2)",
                }}
              >
                Dr. Angelo Chuctaya
              </h2>
              <p className="text-lg text-white/90 drop-shadow-md">
                Cirujano General - Laparoscopía Avanzada
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:flex hidden"
      >
        <span className="text-sm text-white/80 drop-shadow-md">
          Desplázate para más
        </span>
        <svg
          className="w-6 h-6 text-white drop-shadow-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
