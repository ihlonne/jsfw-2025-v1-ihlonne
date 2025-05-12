'use client';

import { Product } from '@/types';
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  setSearchQuery: (query: string) => void;
  fetchProducts: () => Promise<void>;
}

const ProductContext = createContext<
  ProductContextType | undefined
>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<
    Product[]
  >([]);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>([]);
  const [searchQuery, setSearchQuery] =
    useState('');

  const fetchProducts = async () => {
    const res = await fetch(
      'https://api.noroff.dev/api/v1/online-shop'
    );
    const data = await res.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        setSearchQuery,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error(
      'useProductContext must be used within a ProductProvider'
    );
  return context;
};
