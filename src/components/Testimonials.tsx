import React from 'react';
import { testimonials } from '../data/company';
import { motion, easeInOut } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const Testimonials = () => {
  return (
    <motion.section
      id="testimonios"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Lo Que Dicen <span className="text-brand-red">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre por qué nuestros clientes aman MeMimo y nuestros helados artesanales
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-brand-red/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">8+</div>
              <div className="text-gray-700">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">1000+</div>
              <div className="text-gray-700">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">50+</div>
              <div className="text-gray-700">Sabores Únicos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">5.0</div>
              <div className="text-gray-700">Calificación Promedio</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            ¿Quieres ser parte de nuestra historia? ¡Visítanos y comparte tu experiencia!
          </p>
          <a
            href="#contacto"
            className="bg-brand-red hover:bg-brand-redDark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-md"
          >
            Visítanos Hoy
          </a>
        </div>
      </div>
    </motion.section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    comment: string;
    rating: number;
    date: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex mr-3">
          {renderStars(testimonial.rating)}
        </div>
        <span className="text-sm text-gray-500">
          {testimonial.rating}/5
        </span>
      </div>

      {/* Comment */}
      <blockquote className="text-gray-700 mb-6 italic">
        "{testimonial.comment}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{formatDate(testimonial.date)}</div>
        </div>
        <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 