import React from 'react';
import { companyInfo } from '../data/company';
// @ts-ignore
import logo from '../../imagenes/logo.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          {/* Logo grande */}
          <img src={logo} alt="MeMimo Logo" className="mx-auto mb-2 w-40 md:w-56 drop-shadow-xl" />
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-brand-black mb-6">
            Los Mejores
            <span className="text-brand-red block">Helados Artesanales</span>
            de Huancayo
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-brand-black mb-8 max-w-3xl mx-auto">
            {companyInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Disfruta de nuestros helados artesanales hechos con ingredientes frescos de la sierra peruana. 
            Sabores únicos que combinan tradición y calidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#productos"
              className="bg-brand-red hover:bg-brand-redDark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-md"
            >
              Ver Nuestros Productos
            </a>
            <a
              href="#sobre-nosotros"
              className="bg-white hover:bg-brand-redLight text-brand-red font-semibold py-3 px-8 rounded-lg border-2 border-brand-red transition-colors duration-200 text-lg shadow-md"
            >
              Conoce Nuestra Historia
            </a>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">100% Natural</h3>
              <p className="text-gray-700">Ingredientes frescos de la sierra peruana</p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Hecho Artesanalmente</h3>
              <p className="text-gray-700">Proceso tradicional con técnicas modernas</p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Sabor Único</h3>
              <p className="text-gray-700">Sabores tradicionales peruanos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 