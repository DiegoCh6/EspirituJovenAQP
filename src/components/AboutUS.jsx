import React, { useEffect, useMemo, useRef, useState } from "react";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const AboutUS = () => {
  // Images for the slideshow
  const aboutImages = useMemo(
    () => [assets.angelo, assets.local].filter(Boolean),
    []
  );

  // Slideshow state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const AUTO_DELAY = 4500;

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % Math.max(aboutImages.length, 1));
  const goPrev = () =>
    setCurrentIndex((prev) =>
      (prev - 1 + Math.max(aboutImages.length, 1)) % Math.max(aboutImages.length, 1)
    );

  // Autoplay effect
  useEffect(() => {
    if (aboutImages.length <= 1) return;
    if (isHovered) return;
    intervalRef.current = setInterval(goNext, AUTO_DELAY);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isHovered, aboutImages.length]);

  return (
    <motion.div
      id="about-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-0 text-gray-800 dark:text-white overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Left Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#0095d0] via-[#36c9fa] to-[#0095d0] bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            Con <span className="font-semibold text-[#0095d0] dark:text-[#36c9fa]">20 años de experiencia</span> en cirugía abdominal y laparoscópica, el Dr. Angelo Chuctaya lidera nuestro consultorio con excelencia médica y tecnología de punta.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            Nos especializamos en <span className="font-semibold">procedimientos mínimamente invasivos</span>, garantizando recuperación rápida y resultados superiores para nuestros pacientes.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-2">
          {[
            { num: "5000+", label: "Cirugías Exitosas" },
            { num: "99%", label: "Satisfacción" },
            { num: "20+", label: "Años Experiencia" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0095d0]/10 to-[#36c9fa]/10 dark:from-[#0095d0]/20 dark:to-[#36c9fa]/20 rounded-lg p-2 sm:p-3 text-center border border-[#0095d0]/20 dark:border-[#36c9fa]/30"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0095d0] dark:text-[#36c9fa]">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-4 flex justify-center"
        >
          <a
            href="#contact-us"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] hover:from-[#0080b8] hover:to-[#2eb8e6] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Agendar Consulta</span>
          </a>
        </motion.div>

        {/* Feature Highlight - Desktop only */}
        <div className="hidden lg:block pt-6 border-t border-[#0095d0]/20 dark:border-[#36c9fa]/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0095d0]/20 dark:bg-[#36c9fa]/30">
                <svg className="h-5 w-5 text-[#0095d0] dark:text-[#36c9fa]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">
                Atención Integral Personalizada
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Cada paciente recibe un plan quirúrgico personalizado con protocolos internacionales de seguridad.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image and Title Below */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col gap-6"
      >
        {/* Image */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[350px] lg:h-[420px] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slideshow images */}
          <div className="absolute inset-0">
            <AnimatePresence initial={false} mode="wait">
              {aboutImages.length > 0 && (
                <motion.img
                  key={aboutImages[currentIndex]}
                  src={aboutImages[currentIndex]}
                  alt="Consultorio"
                  className="w-full h-full object-cover object-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Navigation Controls */}
          {aboutImages.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
              <button
                onClick={goPrev}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all"
                aria-label="Anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                {currentIndex + 1} / {aboutImages.length}
              </div>
              <button
                onClick={goNext}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all"
                aria-label="Siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Title moved below images for all breakpoints with Services-style heading */}
        <div className="text-center space-y-4 pt-4 border-t border-[#0095d0]/20 dark:border-[#36c9fa]/30">
          
          
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Consultorio Médico{" "}
              <span className="bg-gradient-to-r from-[#0095d0] via-[#36c9fa] to-[#0095d0] bg-clip-text text-transparent">
                Espíritu Joven AQP
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#0095d0] dark:text-[#36c9fa] font-semibold">
              Dr. Angelo Chuctaya - Cirugía Abdominal y Laparoscópica
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUS;
