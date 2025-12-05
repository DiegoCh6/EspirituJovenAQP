import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const servicesData = [
    {
      title: "Colecistectomía",
      description: "Extracción de la vesícula biliar por técnica laparoscópica o abierta, según cada caso.",
      image: assets.colecistectomia,
    },
    {
      title: "Apendicectomía",
      description: "Cirugía para extirpar el apéndice inflamado mediante laparoscopía o cirugía abierta.",
      image: assets.apendicectomia,
    },
    {
      title: "Hernias y Eventraciones",
      description: "Reparación de hernias inguinales, umbilicales, incisionales y eventraciones con malla.",
      image: assets.hernias,
    },
    {
      title: "Tumores de Partes Blandas",
      description: "Resección quirúrgica de tumores benignos y malignos en tejidos subcutáneos.",
      image: assets.tumores,
    },
    {
      title: "Urgencias Abdominales",
      description: "Atención inmediata para peritonitis, obstrucción intestinal y otras emergencias.",
      image: assets.urgencias,
    },
    {
      title: "Suturas y Procedimientos Menores",
      description: "Cierre de heridas, drenaje de abscesos y otros procedimientos ambulatorios.",
      image: assets.suturas,
    },
    {
      title: "Ecografía Hepática y de Vías Biliares",
      description: "Estudio por ultrasonido para diagnóstico de patologías hepáticas y biliares.",
      image: assets.ecografia,
    },
    {
      title: "Verrugas en el cuello",
      description: "Desaste de esas verrugas en el cuello",
      image: assets.verrugas,
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f0faff] to-white dark:from-gray-950 dark:via-[#07334a] dark:to-gray-950">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#0095d0] via-[#36c9fa] to-[#0095d0] bg-clip-text text-transparent">
            Nuestros Servicios
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] mx-auto rounded-full mb-4" />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ofrecemos atención médica integral especializada en cirugía abdominal y laparoscópica con tecnología de punta y años de experiencia.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            index={index} 
            onImageClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Image Gallery Modal - Redesigned */}
      <AnimatePresence>
        {selectedIndex !== null && (() => {
          const s = servicesData[selectedIndex];
          return (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg p-3 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              {/* Desktop Layout */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                className="hidden sm:flex relative w-full max-w-6xl h-[85vh] bg-white dark:bg-gradient-to-br dark:from-[#0b506f] dark:via-[#07334a] dark:to-[#0b506f] rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Side - Image */}
                <div className="flex-1 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#07334a] dark:to-[#0b506f] p-6 flex items-center justify-center overflow-hidden">
                  <motion.img
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                    style={{ minWidth: '100%', minHeight: '100%' }}
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>

                {/* Right Side - Info */}
                <div className="w-[420px] bg-white dark:bg-[#0b506f] flex flex-col border-l border-gray-200 dark:border-[#36c9fa]/20">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#0095d0] to-[#36c9fa] px-8 py-6 relative">
                    <motion.h3 
                      key={s.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold text-white leading-tight pr-8"
                    >
                      {s.title}
                    </motion.h3>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
                  </div>

                  {/* Description */}
                  <div className="flex-1 px-8 py-6 overflow-y-auto">
                    <motion.div
                      key={s.description}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-6">
                        {s.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#07334a]/50 px-4 py-2.5 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                        <span className="font-medium">Consulta disponibilidad con nuestro especialista</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Counter & Navigation */}
                  <div className="px-8 py-5 bg-gradient-to-br from-gray-50 to-white dark:from-[#07334a] dark:to-[#0b506f] border-t border-gray-200 dark:border-[#36c9fa]/20">
                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(prev => (prev - 1 + servicesData.length) % servicesData.length);
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#07334a] border-2 border-[#0095d0]/30 dark:border-[#36c9fa]/30 rounded-xl hover:border-[#0095d0] dark:hover:border-[#36c9fa] hover:shadow-md transition-all group"
                        aria-label="Anterior"
                      >
                        <svg className="w-5 h-5 text-[#0095d0] dark:text-[#36c9fa] group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Anterior</span>
                      </button>

                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] rounded-xl shadow-md">
                        <span className="text-sm font-bold text-white">{selectedIndex + 1}</span>
                        <span className="text-xs text-white/80">/</span>
                        <span className="text-sm font-medium text-white/90">{servicesData.length}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(prev => (prev + 1) % servicesData.length);
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#07334a] border-2 border-[#0095d0]/30 dark:border-[#36c9fa]/30 rounded-xl hover:border-[#0095d0] dark:hover:border-[#36c9fa] hover:shadow-md transition-all group"
                        aria-label="Siguiente"
                      >
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Siguiente</span>
                        <svg className="w-5 h-5 text-[#0095d0] dark:text-[#36c9fa] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 bg-white/95 dark:bg-[#0b506f]/95 hover:bg-white dark:hover:bg-[#0b506f] backdrop-blur-sm p-2.5 rounded-xl transition-all shadow-lg hover:shadow-xl border border-gray-200 dark:border-[#36c9fa]/40 group z-20"
                  aria-label="Cerrar"
                >
                  <svg className="w-6 h-6 text-gray-600 dark:text-[#36c9fa] group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>

              {/* Mobile Layout */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                className="sm:hidden relative w-full max-w-lg flex flex-col max-h-[92vh] bg-white dark:bg-gradient-to-b dark:from-[#0b506f] dark:to-[#07334a] rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with Counter */}
                <div className="bg-gradient-to-r from-[#0095d0] to-[#36c9fa] px-5 py-4 relative">
                  <motion.h3
                    key={s.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg font-bold text-white text-center leading-tight pr-10"
                  >
                    {s.title}
                  </motion.h3>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30">
                    <span className="text-xs font-bold text-white">{selectedIndex + 1}/{servicesData.length}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
                </div>

                {/* Image */}
                <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#07334a] dark:to-[#0b506f] flex items-center justify-center min-h-[45vh] max-h-[50vh] overflow-hidden">
                  <motion.img
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    style={{ minWidth: '100%', minHeight: '100%' }}
                  />
                </div>

                {/* Description */}
                <div className="flex-1 px-5 py-4 overflow-y-auto bg-white dark:bg-[#0b506f]">
                  <motion.p
                    key={s.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3"
                  >
                    {s.description}
                  </motion.p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#07334a]/50 px-3 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span className="font-medium">Consulta disponibilidad</span>
                  </div>
                </div>

                {/* Navigation Footer */}
                <div className="px-4 py-4 bg-gradient-to-r from-gray-50 to-white dark:from-[#07334a] dark:to-[#0b506f] border-t border-gray-200 dark:border-[#36c9fa]/20 flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(prev => (prev - 1 + servicesData.length) % servicesData.length);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-[#07334a] border-2 border-[#0095d0]/30 dark:border-[#36c9fa]/30 rounded-xl active:scale-95 transition-all"
                    aria-label="Anterior"
                  >
                    <svg className="w-5 h-5 text-[#0095d0] dark:text-[#36c9fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Anterior</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(prev => (prev + 1) % servicesData.length);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] rounded-xl active:scale-95 transition-all shadow-md"
                    aria-label="Siguiente"
                  >
                    <span className="text-sm font-bold text-white">Siguiente</span>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-3 left-3 bg-white/90 dark:bg-[#0b506f]/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-gray-200 dark:border-[#36c9fa]/40 active:scale-95 transition-all z-20"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-[#36c9fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};

export default Services;
