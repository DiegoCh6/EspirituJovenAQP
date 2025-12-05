import { motion } from "motion/react";

const ServiceCard = ({ service, index, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-white to-[#f0faff] dark:from-gray-900 dark:to-[#07334a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#D6E4FF]/30 dark:border-[#0b506f]/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Title with Yellow Stripe */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-6 py-3 flex-shrink-0">
        <h3 className="text-base sm:text-lg font-bold text-center">
          <span className="text-black dark:text-white" style={{ textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff' }}>
            {service.title}
          </span>
          <style jsx>{`
            .dark h3 span {
              text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000 !important;
            }
          `}</style>
        </h3>
      </div>

      {/* Image Preview - Fixed Height */}
      {service.image && (
        <div 
          className="relative w-full h-48 sm:h-56 flex-shrink-0 cursor-pointer group/img overflow-hidden"
          onClick={onImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onImageClick()}
        >
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-end p-2" />
          <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 text-xs px-2 py-1 rounded-full text-gray-700 dark:text-gray-200 shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
            Ver imagen
          </div>
        </div>
      )}

      {/* Description - Flexible */}
      <div className="px-6 py-4 flex-grow flex flex-col justify-center">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0095d0] via-[#0cb3eb] to-[#36c9fa] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
};

export default ServiceCard;
