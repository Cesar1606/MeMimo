import React from 'react';
import { contactInfo } from '../data/company';
import { motion, easeInOut } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const Contact = () => {
  return (
    <motion.section
      id="contacto"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ¿Tienes dudas, sugerencias o quieres hacer un pedido especial? ¡Escríbenos!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red text-brand-black"
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red text-brand-black"
              required
            />
            <textarea
              placeholder="Mensaje"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red text-brand-black"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-redDark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-md"
            >
              Enviar Mensaje
            </button>
          </form>
          {/* Información de contacto */}
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-brand-black text-lg">{contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-brand-black text-lg">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-brand-black text-lg">{contactInfo.email}</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-8 md:mt-0 w-full">
            <a href="https://www.facebook.com/HELADERIAMEMIMO" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-brand-red hover:bg-brand-redDark text-white rounded-full p-3 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://www.instagram.com/memimooficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-brand-red hover:bg-brand-redDark text-white rounded-full p-3 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.308 2.633 2.283 2.428 3.395 2.37 4.676 2.312 5.956 2.3 6.365 2.3 12c0 5.635.012 6.044.07 7.324.058 1.281.263 2.393 1.238 3.368.975.975 2.087 1.18 3.368 1.238 1.28.058 1.689.07 7.324.07s6.044-.012 7.324-.07c1.281-.058 2.393-.263 3.368-1.238.975-.975 1.18-2.087 1.238-3.368.058-1.28.07-1.689.07-7.324s-.012-6.044-.07-7.324c-.058-1.281-.263-2.393-1.238-3.368C19.393.334 18.281.128 17 .07 15.719.012 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@memimooficial" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-brand-red hover:bg-brand-redDark text-white rounded-full p-3 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2v14.25a3.75 3.75 0 1 1-3.75-3.75h1.5a2.25 2.25 0 1 0 2.25 2.25V2h2.25a4.5 4.5 0 0 0 4.5 4.5v2.25a6.75 6.75 0 0 1-6.75-6.75z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 