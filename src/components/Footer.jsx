import React from 'react'
import { motion } from 'motion/react'
import logo from '../assets/bitmap.png'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center gap-3 mb-3'>
              <img
                src={logo}
                alt='Logo Espíritu Joven'
                className='w-30 h-16 rounded-full object-cover shadow bg-white p-1.5 ring-1 ring-gray-200 dark:ring-white/30'
              />
              <div>
                <p className='text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400'>Consultorio Médico</p>
                <h3 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0095d0] to-[#36c9fa] bg-clip-text text-transparent leading-tight'>
                  Dr. Angelo Chuctaya
                </h3>
              </div>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
              Cirujano General con atención médica de calidad en Arequipa.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className='font-semibold text-gray-800 dark:text-white mb-3'>Enlaces Rápidos</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#hero' className='text-gray-600 dark:text-gray-400 hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>Inicio</a></li>
              <li><a href='#services' className='text-gray-600 dark:text-gray-400 hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>Servicios</a></li>
              <li><a href='#about-us' className='text-gray-600 dark:text-gray-400 hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>Nosotros</a></li>
              <li><a href='#contact-us' className='text-gray-600 dark:text-gray-400 hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>Contacto</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className='font-semibold text-gray-800 dark:text-white mb-3'>Contacto</h4>
            <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
              <li className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-[#0095d0]'>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href='tel:+51993088844' className='hover:text-[#0095d0] transition-colors'>+51 993 088 844</a>
              </li>
              <li className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-[#0095d0]'>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 8 10-8"/>
                </svg>
                <a href='mailto:dchuctayar@gmail.com' className='hover:text-[#0095d0] transition-colors'>dchuctayar@gmail.com</a>
              </li>
              <li className='flex items-start gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-[#0095d0] mt-0.5'>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <a href='https://maps.app.goo.gl/2gEY831CKzvxGfNd6' target='_blank' rel='noopener noreferrer' className='hover:text-[#0095d0] transition-colors'>
                  Arequipa, Perú
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-200 dark:border-gray-800 my-6'></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400'
        >
          <p>© 2025 Dr. Angelo Chuctaya. Todos los derechos reservados.</p>
          <div className='flex flex-wrap gap-2'>
            <a
              href='https://www.facebook.com/shandeir.anyelos'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-gray-700 hover:border-[#0095d0] hover:text-[#0095d0] transition-colors dark:bg-white/10 dark:text-gray-100 dark:border-white/15 dark:hover:border-[#36c9fa] dark:hover:text-[#36c9fa]'
              aria-label='Facebook Dr. Angelo Chuctaya'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className='text-[#1877f2]'>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className='text-xs font-semibold'>Dr. Angelo</span>
            </a>
            <a
              href='https://www.facebook.com/ESPIRITUJOVENAQP'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-gray-700 hover:border-[#0095d0] hover:text-[#0095d0] transition-colors dark:bg-white/10 dark:text-gray-100 dark:border-white/15 dark:hover:border-[#36c9fa] dark:hover:text-[#36c9fa]'
              aria-label='Facebook Consultorio Espíritu Joven'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className='text-[#1877f2]'>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className='text-xs font-semibold'>Consultorio</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
