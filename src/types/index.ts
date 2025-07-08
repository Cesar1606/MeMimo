export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'helado' | 'batido' | 'postre' | 'bebida';
  image?: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
} 