import React from 'react';
// @ts-ignore
import logo from '../../imagenes/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="MeMimo Logo" className="h-12 w-auto" />
          <span className="text-brand-black font-semibold">MeMimo</span>
        </div>
        <div className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} MeMimo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 