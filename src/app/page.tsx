'use client';

import { getProducts } from '@/lib/productApi';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import Searchbar from '@/components/Searchbar';
import { ProductProvider } from '@/context/ProductContext';
import ProductList from '@/components/ProductList';

export default function Home() {
  const [products, setProducts] = useState<
    Product[]
  >([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  console.log(products);
  return (
    <ProductProvider>
      <div className='flex align-center justify-center m-[0 auto] w-full'>
        <div className='flex flex-col'>
          <Searchbar />
          <ProductList />
        </div>
      </div>
    </ProductProvider>
  );
}
