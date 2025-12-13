import React, { useEffect, useMemo, useRef, useState } from "react";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const AboutUS = () => {
  // Images for the slideshow
  const aboutImages = useMemo(
    () => [assets.angelo, assets.nosotros, assets.image_hero].filter(Boolean),
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
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base text-[#0095d0] dark:text-[#36c9fa] font-semibold uppercase tracking-wide">
            Sobre el Dr. Angelo Chuctaya
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="block -mt-2 sm:-mt-3 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Confiabilidad y Experiencia Médica
        </motion.h2>

        {/* Description Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base"
        >
          <p>
            El <span className="font-bold text-gray-900 dark:text-white">Dr. Angelo Chuctaya</span> (CMP 67474 – RNE 39074) es{" "}
            <span className="font-bold text-[#0b5d3e] dark:text-[#10b981]">especialista en Cirugía General y Laparoscópica</span>, con amplia experiencia en el manejo de emergencias quirúrgicas y procedimientos abdominales de alta complejidad.
          </p>

          <p>
            Cada día brinda atención a pacientes que requieren soluciones inmediatas y seguras, priorizando la recuperación rápida y la calidad de vida. Su enfoque combina{" "}
            <span className="font-bold text-gray-900 dark:text-white">técnicas mínimamente invasivas</span>, equipamiento moderno y un trato humano y cercano, asegurando a cada paciente la confianza de estar en manos expertas.
          </p>

          <p>
            Además, ha complementado su formación con{" "}
            <span className="font-bold text-gray-900 dark:text-white">capacitaciones internacionales en Brasil, Chile y México</span>, especializándose en cirugía laparoscópica avanzada, mínima invasión y manejo de trauma. Esta experiencia internacional le permite aplicar en Arequipa{" "}
            <span className="font-bold text-[#0b5d3e] dark:text-[#10b981]">técnicas de vanguardia reconocidas a nivel mundial</span>.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <a
            href="https://wa.me/51993088844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25d366] to-[#1da851] hover:from-[#1ebe5d] hover:to-[#158f46] text-white font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Agenda una cita</span>
          </a>
        </motion.div>
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
                  className="absolute top-2/3 left-1/2 w-auto h-full -translate-x-1/2 -translate-y-1/2"
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
