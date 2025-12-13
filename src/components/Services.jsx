import { motion } from "motion/react";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Manga Gástrica",
      description:
        "Cirugía bariátrica mínimamente invasiva para reducir el tamaño del estómago, favorecer la pérdida de peso y mejorar la calidad de vida.",
      image: assets.mangaGastro,
    },
    {
      title: "Colecistectomía",
      description:
        "Extracción de la vesícula biliar por técnica laparoscópica o abierta, según cada caso.",
      image: assets.colicistectomia,
    },
    {
      title: "Apendicectomía",
      description:
        "Cirugía para extirpar el apéndice inflamado mediante laparoscopía o cirugía abierta.",
      image: assets.apendicectomia,
    },
    {
      title: "Hernias y Eventraciones",
      description:
        "Reparación de hernias abdominales mediante técnicas abiertas o laparoscópicas, con recuperación más rápida y menor dolor.",
      image: assets.hernias,
    },
    {
      title: "Tumores de Partes Blandas",
      description:
        "Resección quirúrgica de tumores benignos y malignos en tejidos subcutáneos.",
      image: assets.tumor,
    },

    {
      title: "Procedimientos menores y suturas",
      description:
        "Cierre de heridas, drenaje de abscesos y otros procedimientos ambulatorios.",
      image: assets.suturas,
    },
    {
      title: "Ecografía Hepática y de Vías Biliares",
      description:
        "Estudio por ultrasonido para diagnóstico de patologías hepáticas y biliares.",
      image: assets.ecografia,
    },
    {
      title: "Verrugas en el cuello",
      description:
        "Extirpación quirúrgica de verrugas y lesiones cutáneas en zona cervical con técnicas minimamente invasivas.",
      image: assets.verrugas,
    },
    {
      title: "Uñeros",
      description:
        "Uñeros: Alivio inmediato y definitivo. Tratamiento especializado y procedimientos mínimamente invasivos para eliminar el dolor y la raíz del problema.",
      image: assets.uñero,
    },
    {
      title: "Consulta Virtual",
      description: "Atención médica virtual, sin salir de casa. Consultas rápidas y seguras con profesionales de la salud desde tu teléfono o computadora.",
      image: assets.virtual1,
    },
    {
      title: "Urgencias",
      description:
        "Urgencias Médicas. Respuesta rápida, atención inmediata.",
      image: assets.urgencias,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16 sm:mb-20"
      >
        <motion.span
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-[#0095d0]/10 to-[#36c9fa]/10 border border-[#0095d0]/20 rounded-full text-xs sm:text-sm font-bold text-[#0095d0] dark:text-[#36c9fa] uppercase tracking-wider"
        >
          Nuestros Servicios
        </motion.span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
          Atención Médica
          <span className="block mt-1 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] bg-clip-text text-transparent">
            Especializada
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          El Dr. Angelo Chuctaya ofrece una atención integral en cirugía general
          y laparoscópica, asegurando calidad, confianza y acompañamiento en
          todo momento.
        </p>
      </motion.div>

      {/* Services Grid - Responsive height for fullscreen cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
        
        {/* Consultorio CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: servicesData.length * 0.08 }}
          viewport={{ once: true }}
          className="group flex flex-col h-full bg-gradient-to-b from-[#2b8ef7] via-[#2fa7f5] to-[#34c0f7] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Title Header */}
          <div className="bg-white/20 px-4 sm:px-5 py-3 sm:py-4 h-[68px] sm:h-[76px] flex items-center justify-center flex-shrink-0">
            <h3 className="w-full text-lg sm:text-xl font-bold text-white drop-shadow-sm line-clamp-2 uppercase text-center">
              ¿Necesitas una Consulta Médica?
            </h3>
          </div>

          {/* Content Area matching image height */}
          <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden bg-[#2fa7f5] flex-shrink-0 flex flex-col justify-center p-4 sm:p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.1a6.4 6.4 0 0 0-6.4 6.4c0 4.8 5.6 11 6 11.5a.5.5 0 0 0 .8 0c.4-.5 6-6.7 6-11.5A6.4 6.4 0 0 0 12 2.1m0 9.1a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4" />
                </svg>
                <p className="text-sm sm:text-base font-semibold text-center">
                  Av. Charcani N.100
                </p>
              </div>
              <p className="text-xs sm:text-sm text-center text-white/90">
                Fco. Bolognesi, Cayma, Arequipa
              </p>
              <div className="border-t border-white/30 my-3" />
              <div className="flex items-center justify-center gap-4 text-white/95 text-sm">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8 5h8v2H8zm4 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6" />
                    <path d="M15 13h-2.5V9h-1v5H15Z" />
                  </svg>
                  <span className="font-semibold">¿Tienes síntomas o dudas sobre tu condición? </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.25A10.75 10.75 0 1 0 22.75 12 10.762 10.762 0 0 0 12 1.25m0 20A9.25 9.25 0 1 1 21.25 12 9.261 9.261 0 0 1 12 21.25" />
                    <path d="M12.75 6.5h-1.5v6l4.75 2.85.75-1.23-4-2.37Z" />
                  </svg>
                  <span className="font-semibold">Agenda una evaluación con el Dr. Angelo Chuctaya y recibe atención inmediata.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description matching ServiceCard description */}
          <div className="flex flex-col flex-grow p-4 sm:p-5 min-h-[130px] sm:min-h-[150px] justify-between bg-white/10">
            <div className="flex-grow flex items-center justify-center">
              <motion.a
                href="https://wa.me/51993088844"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0b9d58] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contáctanos
              </motion.a>
            </div>

            {/* Accent Line */}
            <motion.div
              className="h-1 w-10 bg-white/50 mt-4 rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              whileHover={{ width: 56 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>

      {/* Unified CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6 pt-12 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            ¿Necesitas más información sobre nuestros servicios?
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Contáctanos directamente para consultas y citas
          </p>
        </div>

        <motion.a
          href="https://wa.me/51993088844"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-[#25d366] to-[#1da851] text-white font-bold rounded-lg hover:from-[#1ebe5d] hover:to-[#158f46] transition-all shadow-lg hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Contactar por WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Services;
