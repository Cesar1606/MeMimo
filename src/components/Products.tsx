import React, { useState } from 'react';
import { rolls, heladosGourmet, malteadas, crepes, bebidas, toppings } from '../data/products';
import { motion, EASES } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' as const } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: 'easeInOut' as const } },
};

const categories = [
  { id: 'rolls', name: 'Rolls' },
  { id: 'gourmet', name: 'Helados Gourmet' },
  { id: 'malteadas', name: 'Malteadas' },
  { id: 'crepes', name: 'Crepes' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'toppings', name: 'Toppings' },
];

const Products = () => {
  const [selectedTab, setSelectedTab] = useState('rolls');

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Nuestros <span className="text-brand-red">Productos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre nuestra variedad de productos artesanales y bebidas
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-2 border-brand-red rounded-full bg-white/80 shadow-lg p-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedTab(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 border-2 ${
                selectedTab === cat.id
                  ? 'bg-brand-red text-white border-brand-red shadow-lg scale-105'
                  : 'bg-white text-brand-black border-brand-red/30 hover:bg-brand-red/10 hover:text-brand-red'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {selectedTab === 'rolls' && <RollsSection />}
          {selectedTab === 'gourmet' && <GourmetSection />}
          {selectedTab === 'malteadas' && <MalteadasSection />}
          {selectedTab === 'crepes' && <CrepesSection />}
          {selectedTab === 'bebidas' && <BebidasSection />}
          {selectedTab === 'toppings' && <ToppingsTab />}
        </div>
      </div>
    </section>
  );
};

function RollsSection() {
  // Unificar todos los rolls en una sola grilla
  const allRolls = [
    { ...rolls.triples, tipo: 'Triples' },
    { ...rolls.duo, tipo: 'Dúo' },
    { ...rolls.clasico, tipo: 'Clásico' },
    { ...rolls.exclusivos, tipo: 'Exclusivos' },
    { ...rolls.especiales, tipo: 'Especiales' },
  ];
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
      {allRolls.map((item) => (
        <motion.div
          key={item.nombre}
          variants={fadeInUp}
          className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-extrabold text-brand-red mb-1 uppercase tracking-wide">{item.nombre}</h3>
          <div className="text-3xl font-black text-brand-black mb-1">S/. {item.precio}</div>
          <div className="text-base text-brand-black mb-1 font-semibold">{item.incluye}</div>
          {'sabores' in item && item.sabores && (
            <div className="mb-1">
              <span className="font-bold text-brand-red">Sabores:</span>
              <ul className="list-disc list-inside text-brand-black text-sm mt-1">
                {item.sabores.map((sabor) => (
                  <li key={sabor}>{sabor}</li>
                ))}
              </ul>
            </div>
          )}
          {'combinaciones' in item && item.combinaciones && (
            <div className="mb-1">
              <span className="font-bold text-brand-red">Combinaciones Exclusivas:</span>
              <ul className="list-disc list-inside text-brand-black text-sm mt-1">
                {item.combinaciones.map((combo) => (
                  <li key={combo}>{combo}</li>
                ))}
              </ul>
            </div>
          )}
          {'descripcion' in item && item.descripcion && (
            <div className="mb-1 text-brand-black">
              <span className="font-bold text-brand-red">{item.descripcion}:</span>
              {'opciones' in item && item.opciones && (
                <ul className="list-disc list-inside text-sm mt-1">
                  {item.opciones.map((op) => (
                    <li key={op}>{op}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

function GourmetSection() {
  return (
    <motion.div className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8 max-w-xl mx-auto" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
      <h3 className="text-2xl font-extrabold text-brand-red mb-4 uppercase tracking-wide">{heladosGourmet.nombre}</h3>
      <ul className="divide-y divide-brand-red/20">
        {heladosGourmet.opciones.map((op) => (
          <li key={op.cantidad} className="flex justify-between py-3 text-lg">
            <span className="font-bold text-brand-black">{op.cantidad}</span>
            <span className="font-black text-brand-red">S/. {op.precio}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function MalteadasSection() {
  return (
    <motion.div className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8 max-w-xl mx-auto" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
      <h3 className="text-2xl font-extrabold text-brand-red mb-4 uppercase tracking-wide">{malteadas.nombre}</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-brand-black">Sabores:</span>
        <span className="font-black text-brand-red text-2xl">S/. {malteadas.precio}</span>
      </div>
      <ul className="list-disc list-inside text-brand-black text-sm mt-1">
        {malteadas.sabores.map((sabor) => (
          <li key={sabor}>{sabor}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function CrepesSection() {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
      <motion.div className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
        <h4 className="text-xl font-extrabold text-brand-red mb-2 uppercase tracking-wide">Dulces</h4>
        <ul className="divide-y divide-brand-red/20">
          {crepes.dulces.map((crepe) => (
            <li key={crepe.nombre + crepe.precio} className="py-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-brand-black">{crepe.nombre}</span>
                <span className="font-black text-brand-red">S/. {crepe.precio}</span>
              </div>
              {crepe.descripcion && (
                <div className="text-sm text-gray-700 mt-1">{crepe.descripcion}</div>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
        <h4 className="text-xl font-extrabold text-brand-red mb-2 uppercase tracking-wide">Saladas</h4>
        <ul className="divide-y divide-brand-red/20">
          {crepes.saladas.map((crepe) => (
            <li key={crepe.nombre + crepe.precio} className="py-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-brand-black">{crepe.nombre}</span>
                <span className="font-black text-brand-red">S/. {crepe.precio}</span>
              </div>
              {crepe.descripcion && (
                <div className="text-sm text-gray-700 mt-1">{crepe.descripcion}</div>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function BebidasSection() {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
      <motion.div className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
        <h4 className="text-xl font-extrabold text-brand-red mb-2 uppercase tracking-wide">Bebidas Calientes</h4>
        <ul className="divide-y divide-brand-red/20">
          {bebidas.calientes.map((b) => (
            <li key={b.nombre + b.precio} className="py-3 flex justify-between items-center">
              <span className="font-bold text-brand-black">{b.nombre}</span>
              <span className="font-black text-brand-red">S/. {b.precio}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
        <h4 className="text-xl font-extrabold text-brand-red mb-2 uppercase tracking-wide">Bebidas Frías</h4>
        <ul className="divide-y divide-brand-red/20">
          {bebidas.frias.map((b) => (
            <li key={b.nombre + b.precio} className="py-3 flex justify-between items-center">
              <span className="font-bold text-brand-black">{b.nombre}</span>
              <span className="font-black text-brand-red">S/. {b.precio}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function ToppingsTab() {
  // Unificar toppings en cards
  const allToppings = [
    ...toppings.rolls.map(t => ({ ...t, tipo: 'Rolls' })),
    ...toppings.crepesDulces.map(t => ({ ...t, tipo: 'Crepes Dulces' })),
    ...toppings.crepesSalados.map(t => ({ ...t, tipo: 'Crepes Salados' })),
    ...toppings.malteadas.map(t => ({ ...t, tipo: 'Malteadas' })),
  ];
  // Eliminar duplicados por nombre y precio
  const uniqueToppings = Array.from(new Map(allToppings.map(t => [t.nombre + t.precio, t])).values());
  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" variants={fadeInUp} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.2 }}>
      {uniqueToppings.map((topping) => (
        <motion.div
          key={topping.nombre + topping.precio}
          variants={fadeInUp}
          className="bg-white border-4 border-brand-red rounded-2xl shadow-xl p-8 flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <span className="text-xl font-extrabold text-brand-black mb-1">{topping.nombre}</span>
          <span className="text-2xl font-black text-brand-red">S/ {topping.precio.toFixed(2)}</span>
          <span className="text-xs text-brand-red font-semibold">{topping.tipo}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Products; 