export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags?: string[];
  reviews?: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
