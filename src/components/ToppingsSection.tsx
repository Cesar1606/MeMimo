import React from 'react';
import { toppings } from '../data/products';

// Unificar toppings por nombre y precio únicos
const allToppings = [
  ...toppings.rolls,
  ...toppings.crepesDulces,
  ...toppings.crepesSalados,
  ...toppings.malteadas
];
const uniqueToppings = Array.from(
  new Map(allToppings.map(t => [t.nombre + t.precio, t])).values()
);

const ToppingsSection = () => {
  return (
    <section className="mt-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-brand-black mb-6 text-center">
        Toppings <span className="text-brand-red">Especiales</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {uniqueToppings.map((topping) => (
          <div
            key={topping.nombre + topping.precio}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center gap-2 border border-gray-100"
          >
            <span className="text-lg font-semibold text-brand-black">{topping.nombre}</span>
            <span className="text-brand-red font-bold">S/ {topping.precio.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToppingsSection; 