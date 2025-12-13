import React from 'react'
import { motion } from 'motion/react'
import logo from '../assets/bitmap.png'
import assets from '../assets/assets'

const Footer = () => {
  const footerLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#services' },
    { label: 'Especialidades', href: '#specialties' },
    { label: 'Acerca de mi', href: '#about-us' },
    { label: 'Contáctame', href: '#contact-us' },
  ]

  return (
    <footer className='bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        {/* Main Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-8 sm:mb-12'>
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-start'
          >
            <div className='flex flex-col items-center md:items-start mb-3'>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 sm:gap-2.5 origin-left mb-3"
              >
                <img
                  src={assets.logo_esaqp}
                  alt="Espíritu Joven AQP"
                  className="w-[160px] sm:w-[180px] lg:w-[200px] h-auto object-contain drop-shadow-md transition-all dark:bg-white dark:px-2 dark:py-1 dark:rounded-md"
                />
              </motion.a>
              <h3 className='text-lg font-black bg-gradient-to-r from-[#0095d0] to-[#36c9fa] bg-clip-text text-transparent leading-tight'>
                Dr. Angelo Chuctaya
              </h3>
              <p className='text-sm text-gray-700 dark:text-gray-300'>
                Cirugía General y Laparoscópica
              </p>
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-start'
          >
            <h4 className='font-bold text-gray-900 dark:text-white mb-5 text-base'>Enlaces</h4>
            <ul className='space-y-2.5 text-sm text-center md:text-left'>
              {footerLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className='text-gray-700 dark:text-gray-300 hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Consultorio Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-start'
          >
            <h4 className='font-bold text-gray-900 dark:text-white mb-5 text-base'>Consultorio</h4>
            <div className='space-y-4 text-sm'>
              <div className='flex items-start gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-[#0095d0] dark:text-[#36c9fa] flex-shrink-0 mt-0.5' viewBox='0 0 24 24' fill='currentColor'>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Av. Charcani 100 Fco. Bolognesi, Cayma, Arequipa.
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-[#0095d0] dark:text-[#36c9fa] flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span className='text-gray-700 dark:text-gray-300'>Atención 24 horas</span>
              </div>
              <a 
                href='https://wa.me/51993088844'  target="_blank"
                className='flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +51 993 088 844
              </a>
            </div>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-end'
          >
            <h4 className='font-bold text-gray-900 dark:text-white mb-4 text-base'>Agenda tu cita</h4>
            <p className='text-sm text-gray-700 dark:text-gray-300 mb-5 text-center md:text-right leading-relaxed'>
              Atención rápida, segura y personalizada. Tu salud en buenas manos.<br/>
              <span className='font-semibold'>Atendemos casos urgentes.</span>
            </p>
            <a
              href='https://wa.me/51993088844'
              target="_blank"
              className='inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              +51 993 088 844
            </a>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className='h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6' />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            &copy; 2025. Diego Chuctaya. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

