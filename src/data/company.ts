import { Testimonial, ContactInfo } from '../types';

export const companyInfo = {
  name: 'MeMimo',
  tagline: 'Los mejores helados artesanales de Huancayo',
  description: 'Desde 2015, MeMimo ha estado sirviendo los helados más deliciosos y frescos de Huancayo. Nuestros helados artesanales están hechos con ingredientes locales de la más alta calidad, ofreciendo sabores únicos que combinan la tradición peruana con técnicas modernas.',
  history: 'MeMimo nació en el corazón de Huancayo con la visión de crear helados que no solo refresquen, sino que también cuenten la historia de nuestra región. Comenzamos como una pequeña heladería familiar y hoy somos reconocidos por nuestra calidad y sabor único. Nuestros helados están hechos con leche fresca de la sierra y frutas locales como la lúcuma, aguaymanto y chirimoya.',
  mission: 'Ofrecer helados artesanales de la más alta calidad, utilizando ingredientes frescos y locales, creando experiencias dulces que conecten con nuestras raíces peruanas.',
  vision: 'Ser la heladería más reconocida de la sierra peruana, destacando por la calidad de nuestros productos y el servicio excepcional a nuestros clientes.'
};

export const contactInfo: ContactInfo = {
  address: 'Av. Ferrocarril 123, Huancayo - Junín, Perú',
  phone: '+51 964 123 456',
  email: 'info@memimo.com',
  hours: 'Lunes a Domingo: 10:00 AM - 10:00 PM'
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    comment: 'Los mejores helados que he probado en Huancayo. El sabor de lúcuma es increíble, me recuerda a mi infancia.',
    rating: 5,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    comment: 'Excelente atención y helados deliciosos. El sundae de chocolate es mi favorito. Definitivamente volveré.',
    rating: 5,
    date: '2024-01-20'
  },
  {
    id: '3',
    name: 'Ana Torres',
    comment: 'Me encanta que usen ingredientes locales. El helado de aguaymanto es único y delicioso.',
    rating: 5,
    date: '2024-01-25'
  },
  {
    id: '4',
    name: 'Luis Ramírez',
    comment: 'Perfecto lugar para llevar a la familia. Los niños adoran los batidos y el ambiente es muy acogedor.',
    rating: 5,
    date: '2024-01-30'
  },
  {
    id: '5',
    name: 'Rosa Fernández',
    comment: 'Los precios son justos para la calidad que ofrecen. El helado de menta chocolate es mi nuevo favorito.',
    rating: 5,
    date: '2024-02-05'
  },
  {
    id: '6',
    name: 'Miguel Silva',
    comment: 'Gran servicio al cliente y helados frescos. Recomiendo el banana split, es espectacular.',
    rating: 5,
    date: '2024-02-10'
  }
]; 