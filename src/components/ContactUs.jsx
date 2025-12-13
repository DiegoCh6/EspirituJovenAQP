import React from 'react'
import toast from 'react-hot-toast'
import {motion} from 'motion/react'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            toast.success('¡Gracias! Pronto nos pondremos en contacto contigo.')
            event.target.reset();
            } else {
            toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
        
    }

  return (
    <section 
      id='contact-us' 
      className='relative pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#e0f4fe] to-white dark:from-gray-950 dark:via-[#07334a] dark:to-gray-950 overflow-hidden'
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0095d0]/10 dark:bg-[#0095d0]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#36c9fa]/10 dark:bg-[#36c9fa]/20 rounded-full blur-3xl" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#0095d0] via-[#36c9fa] to-[#0095d0] bg-clip-text text-transparent">
            Contáctanos
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0095d0] to-[#36c9fa] mx-auto rounded-full mb-6" />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Estamos aquí para ayudarte. Agenda tu cita o consulta con nuestros especialistas. Responderemos a la brevedad.
        </p>
      </motion.div>

      <div className='relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start'>
        
        {/* Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-white dark:bg-[#0b506f] rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-[#0095d0]/20 dark:border-[#36c9fa]/30'
        >
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-[#0095d0] to-[#36c9fa] bg-clip-text text-transparent'>
            Información de Contacto
          </h3>

          <div className='flex flex-col gap-8'>
            {/* Email */}
            <motion.div 
              className='flex items-start gap-5 group'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0095d0]/20 to-[#36c9fa]/20 dark:from-[#0095d0]/30 dark:to-[#36c9fa]/30 border border-[#0095d0]/30 dark:border-[#36c9fa]/40 flex-shrink-0 group-hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0095d0] dark:text-[#36c9fa]">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 8 10-8"/>
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-xs font-bold text-[#0095d0] dark:text-[#36c9fa] uppercase tracking-wide mb-2'>Email</p>
                <a href="mailto:dchuctayar@gmail.com" target="_blank" rel="noopener noreferrer" className='text-base sm:text-lg font-semibold text-gray-800 dark:text-white hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>
                  chuctaya71132@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className='flex items-start gap-5 group'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0095d0]/20 to-[#36c9fa]/20 dark:from-[#0095d0]/30 dark:to-[#36c9fa]/30 border border-[#0095d0]/30 dark:border-[#36c9fa]/40 flex-shrink-0 group-hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0095d0] dark:text-[#36c9fa]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-xs font-bold text-[#0095d0] dark:text-[#36c9fa] uppercase tracking-wide mb-2'>Teléfono</p>
                <a href="tel:+51993088844" target="_blank" rel="noopener noreferrer" className='text-base sm:text-lg font-semibold text-gray-800 dark:text-white hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>
                  +51 993 088 844
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className='flex items-start gap-5 group'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0095d0]/20 to-[#36c9fa]/20 dark:from-[#0095d0]/30 dark:to-[#36c9fa]/30 border border-[#0095d0]/30 dark:border-[#36c9fa]/40 flex-shrink-0 group-hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0095d0] dark:text-[#36c9fa]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-xs font-bold text-[#0095d0] dark:text-[#36c9fa] uppercase tracking-wide mb-2'>Ubicación</p>
                <a href="https://maps.app.goo.gl/2gEY831CKzvxGfNd6" target="_blank" rel="noopener noreferrer" className='text-base sm:text-lg font-semibold text-gray-800 dark:text-white hover:text-[#0095d0] dark:hover:text-[#36c9fa] transition-colors'>
                  AV CHARCANI 100 FRANCISCO BOLOGNESI, 04001, Arequipa 04001
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className='mt-10 pt-8 border-t border-[#0095d0]/20 dark:border-[#36c9fa]/30'>
            <p className='text-xs font-bold text-[#0095d0] dark:text-[#36c9fa] uppercase tracking-wide mb-6'>Síguenos</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              {/* LinkedIn */}
              <motion.a 
                href='https://www.linkedin.com/in/angelo-shandeir-chuctaya-huarca-740a37122/' 
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-[#0095d0] to-[#36c9fa] hover:from-[#0080b8] hover:to-[#2eb8e6] transition-all shadow-lg hover:shadow-xl text-white group'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className='flex-shrink-0'>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className='text-sm font-semibold'>LinkedIn</span>
              </motion.a>

              {/* Facebook Dr. */}
              <motion.a 
                href='https://www.facebook.com/shandeir.anyelos' 
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-[#0095d0] to-[#36c9fa] hover:from-[#0080b8] hover:to-[#2eb8e6] transition-all shadow-lg hover:shadow-xl text-white group'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className='flex-shrink-0'>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className='text-sm font-semibold'>FB Dr. Angelo</span>
              </motion.a>

              {/* Facebook Consultorio */}
              <motion.a 
                href='https://www.facebook.com/ESPIRITUJOVENAQP' 
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-[#0095d0] to-[#36c9fa] hover:from-[#0080b8] hover:to-[#2eb8e6] transition-all shadow-lg hover:shadow-xl text-white group'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className='flex-shrink-0'>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className='text-sm font-semibold'>FB Consultorio</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={onSubmit} 
          className='bg-white dark:bg-[#0b506f] rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-[#0095d0]/20 dark:border-[#36c9fa]/30'
        >
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-[#0095d0] to-[#36c9fa] bg-clip-text text-transparent'>
            Envíanos un Mensaje
          </h3>

          <div className='flex flex-col gap-6'>
            <div>
              <label className='block mb-3 text-sm font-bold text-gray-700 dark:text-gray-200'>
                Nombre Completo
              </label>
              <div className='relative'>
                <div className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0095d0] dark:text-[#36c9fa]">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <input 
                  name="name" 
                  type="text" 
                  placeholder='Juan Pérez' 
                  className='w-full pl-12 pr-4 py-3.5 text-sm bg-white dark:bg-[#07334a] border-2 border-gray-200 dark:border-[#0095d0]/30 rounded-xl outline-none focus:border-[#0095d0] dark:focus:border-[#36c9fa] transition-colors text-gray-800 dark:text-white placeholder-gray-400' 
                  required
                />
              </div>
            </div>

            <div>
              <label className='block mb-3 text-sm font-bold text-gray-700 dark:text-gray-200'>
                Correo Electrónico
              </label>
              <div className='relative'>
                <div className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0095d0] dark:text-[#36c9fa]">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 8 10-8"/>
                  </svg>
                </div>
                <input 
                  name="email" 
                  type="email" 
                  placeholder='correo@ejemplo.com' 
                  className='w-full pl-12 pr-4 py-3.5 text-sm bg-white dark:bg-[#07334a] border-2 border-gray-200 dark:border-[#0095d0]/30 rounded-xl outline-none focus:border-[#0095d0] dark:focus:border-[#36c9fa] transition-colors text-gray-800 dark:text-white placeholder-gray-400' 
                  required
                />
              </div>
            </div>

            <div>
              <label className='block mb-3 text-sm font-bold text-gray-700 dark:text-gray-200'>
                Mensaje / Motivo de Consulta
              </label>
              <textarea 
                name="message" 
                rows={5} 
                placeholder='Describe tu consulta o motivo de la cita...' 
                className='w-full px-4 py-3.5 text-sm bg-white dark:bg-[#07334a] border-2 border-gray-200 dark:border-[#0095d0]/30 rounded-xl outline-none focus:border-[#0095d0] dark:focus:border-[#36c9fa] transition-colors resize-none text-gray-800 dark:text-white placeholder-gray-400' 
                required
              />
            </div>

            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='w-full flex gap-3 items-center justify-center bg-gradient-to-r from-[#0095d0] to-[#36c9fa] text-white text-base font-bold px-8 py-4 rounded-xl hover:from-[#0080b8] hover:to-[#2eb8e6] transition-all shadow-lg hover:shadow-2xl'
            >
              <span>Enviar Mensaje</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </motion.button>
          </div>
        </motion.form>

      </div>
    </section>
  )
}

export default ContactUs
