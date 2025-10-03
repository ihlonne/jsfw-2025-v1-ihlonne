'use client';

import { Product } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  setSearchQuery: (query: string) => void;
  fetchProducts: () => Promise<void>;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  const fetchProducts = async () => {
    const res = await fetch('https://api.noroff.dev/api/v1/online-shop');
    const data = await res.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered = filtered.sort((a, b) => {
      const aPrice = a.discountedPrice ?? a.price;
      const bPrice = b.discountedPrice ?? b.price;

      switch (sortBy) {
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'price-asc':
          return aPrice - bPrice;
        case 'price-desc':
          return bPrice - aPrice;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [searchQuery, products, sortBy]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        setSearchQuery,
        fetchProducts,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProductContext must be used within a ProductProvider');
  return context;
};
