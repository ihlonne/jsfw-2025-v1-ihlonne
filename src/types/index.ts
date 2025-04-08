export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
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
  }[];
}
