import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Title with background - FIXED height */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 + 0.05 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#0095d0] to-[#36c9fa] px-4 sm:px-5 py-3 sm:py-4 h-[68px] sm:h-[76px] flex items-center flex-shrink-0"
      >
        <h3 className="w-full text-lg sm:text-xl font-bold text-white drop-shadow-sm line-clamp-2 uppercase text-center">
          {service.title}
        </h3>
      </motion.div>

      {/* Image Container - EXACTLY uniform height */}
      <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
        {service.image && (
          <motion.img 
            src={service.image} 
            alt={service.title}
            className="absolute top-1/2 left-1/2 w-auto h-full -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      {/* Description - FIXED minimum height with flex grow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 + 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col flex-grow p-4 sm:p-5 min-h-[130px] sm:min-h-[150px] justify-between border border-t-0 border-gray-200 dark:border-gray-700"
      >
        {/* Text content */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Accent Line - Bottom aligned */}
        <motion.div
          className="h-1 w-10 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          whileHover={{ width: 56 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
