import React from 'react';
import { companyInfo } from '../data/company';
// @ts-ignore
import mimo from '../../imagenes/mimo.png';

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center justify-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 flex items-center justify-center gap-4">
            <span>Sobre <span className="text-brand-red">MeMimo</span></span>
            <img src={mimo} alt="Mascota MeMimo" className="hidden md:inline-block w-20 h-20 object-contain drop-shadow-xl" />
          </h2>
          <img src={mimo} alt="Mascota MeMimo" className="mx-auto mb-4 w-20 h-20 object-contain drop-shadow-xl md:hidden" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Historia */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {companyInfo.history}
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fundado en</p>
                <p className="text-xl font-semibold text-gray-900">2015</p>
              </div>
            </div>
          </div>

          {/* Imagen decorativa */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Tradición Familiar</h4>
                <p className="text-gray-700">Cada helado cuenta una historia de pasión y dedicación</p>
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-brand-black text-center mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.16-3.7A2 2 0 015 12.29V7.5a2 2 0 012-2h10a2 2 0 012 2v4.79a2 2 0 01-.84 1.76L12 17.75z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-brand-black mb-2">Calidad</h4>
              <p className="text-gray-700">Utilizamos solo los mejores ingredientes frescos y naturales</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-brand-black mb-2">Comunidad</h4>
              <p className="text-gray-700">Apoyamos a productores locales y nuestra comunidad</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-brand-black mb-2">Pasión</h4>
              <p className="text-gray-700">Cada helado está hecho con amor y dedicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 