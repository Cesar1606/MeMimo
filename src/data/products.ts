// Productos reales de MeMimo organizados por categoría principal

export const rolls = {
  triples: {
    nombre: 'Rolls Triples',
    precio: 11,
    incluye: 'Incluye 3 toppings',
    sabores: [
      'Piña', 'Fresa', 'Plátano', 'Lúcuma', 'Kiwi', 'Mango', 'Maracuyá', 'Arándanos', 'Aguaymanto',
      'Oreo', 'Nutella', 'Cua Cua', 'Chocman', 'Bon o Bon', 'Casino Menta', 'Chirimoya', 'Cereza'
    ]
  },
  duo: {
    nombre: 'Rolls Dúo',
    precio: 9,
    incluye: 'Incluye 2 toppings',
    sabores: [
      'Piña', 'Fresa', 'Plátano', 'Lúcuma', 'Maracuyá', 'Arándanos', 'Oreo', 'Bon o Bon', 'Casino Menta', 'Aguaymanto', 'Chirimoya', 'Mango'
    ]
  },
  clasico: {
    nombre: 'Rolls Clásico',
    precio: 8,
    incluye: 'Incluye 1 topping',
    sabores: [
      'Piña', 'Plátano', 'Maracuyá', 'Aguaymanto', 'Oreo', 'Bon o Bon', 'Casino Menta'
    ]
  },
  exclusivos: {
    nombre: 'Rolls Exclusivos',
    precio: 11,
    incluye: 'Incluye 3 toppings',
    combinaciones: [
      'Coco Canela',
      'Me Mimo Pitufo (Chirimoya o Plátano)',
      'Me Mimo Tropical (Maracuyá + Mango + Piña)',
      'Pink Berry (Fresa + Arándanos + Nutella)',
      'Banana Pink (Fresa + Plátano + Chocman)',
      'Chiri Berry (Arándanos + Chirimoya + Kiwi)',
      'Choco Banano (Oreo + Nutella + Plátano)',
      'Cookie Monster (Nutella + Oreo + Chocman)',
      'Frutos del Bosque (Fresa + Arándanos + Cereza)',
      'Malubon (Mango + Lúcuma + Bon o Bon)'
    ]
  },
  especiales: {
    nombre: 'Rolls Especiales',
    precio: 14,
    incluye: 'Incluye 3 toppings',
    descripcion: 'Crema de Whisky Baileys',
    opciones: [
      'Clásico',
      'Café',
      'Fresa',
      'Lúcuma',
      'Arándanos'
    ]
  }
};

export const heladosGourmet = {
  nombre: 'Helados Gourmet (Italianos)',
  opciones: [
    { cantidad: '1 bola', precio: 9 },
    { cantidad: '2 bolas', precio: 14 },
    { cantidad: '3 bolas', precio: 17 },
    { cantidad: '1/2 litro', precio: 27 },
    { cantidad: '1 litro', precio: 47 }
  ]
};

export const malteadas = {
  nombre: 'Malteadas',
  precio: 12,
  sabores: ['Frutos Rojos', 'Lúcuma', 'Fresa']
};

export const crepes = {
  dulces: [
    {
      nombre: 'Suprema',
      descripcion: 'Nutella + Helados + Brownie + Fresa o Plátano + Chantilly',
      precio: 18
    },
    {
      nombre: 'Nutella',
      descripcion: 'Nutella + Helados + Brownie',
      precio: 16
    },
    {
      nombre: 'Nutella + Helados + Fresa o Plátano',
      precio: 14
    },
    {
      nombre: 'Nutella + Fresa o Plátano',
      precio: 12
    },
    {
      nombre: 'Fudge',
      descripcion: 'Fudge + Helados + Brownie',
      precio: 14
    },
    {
      nombre: 'Fudge + Helados + Fresa o Plátano',
      precio: 12
    },
    {
      nombre: 'Fudge + Fresa o Plátano',
      precio: 10
    },
    {
      nombre: 'Dulce de Leche',
      descripcion: 'Dulce de Leche + Helados + Brownie',
      precio: 14
    },
    {
      nombre: 'Dulce de Leche + Helados + Fresa o Plátano',
      precio: 12
    },
    {
      nombre: 'Dulce de Leche + Fresa o Plátano',
      precio: 10
    }
  ],
  saladas: [
    {
      nombre: 'Clásica',
      descripcion: 'Jamón + Queso',
      precio: 12
    },
    {
      nombre: 'Hawaiana',
      descripcion: 'Jamón + Queso + Piña',
      precio: 14
    }
  ]
};

export const bebidas = {
  calientes: [
    { nombre: 'Chocolate', precio: 6 },
    { nombre: 'Café', precio: 5 },
    { nombre: 'Mate', precio: 3 }
  ],
  frias: [
    { nombre: 'Jugo de Fresa', precio: 8 },
    { nombre: 'Jugo de Plátano', precio: 8 },
    { nombre: 'Jugo de Papaya', precio: 8 },
    { nombre: 'Jugo de Piña', precio: 8 },
    { nombre: 'Gaseosa', precio: 3.5 },
    { nombre: 'Agua Mineral', precio: 3 }
  ]
};

export const toppings = {
  rolls: [
    { nombre: 'Pecanas', precio: 2.5 },
    { nombre: 'Ositos Borrachos', precio: 2.5 },
    { nombre: 'Chantilly', precio: 2.5 },
    { nombre: 'Brownie', precio: 2.5 },
    { nombre: 'Malvaviscos Flameados', precio: 2.0 }
  ],
  crepesDulces: [
    { nombre: 'Pecanas', precio: 2.5 },
    { nombre: 'Chantilly', precio: 2.5 },
    { nombre: 'Brownie', precio: 2.5 },
    { nombre: 'Bola de helado', precio: 2.0 },
    { nombre: 'Fruta (fresa o plátano)', precio: 1.0 }
  ],
  crepesSalados: [
    { nombre: 'Queso', precio: 2.5 },
    { nombre: 'Jamón', precio: 2.5 },
    { nombre: 'Piña', precio: 2.0 }
  ],
  malteadas: [
    { nombre: 'Chispas de Chocolate', precio: 2.0 }
  ]
}; 