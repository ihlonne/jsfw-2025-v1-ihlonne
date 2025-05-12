'use client';

import { getProducts } from '@/lib/productApi';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import Searchbar from '@/components/Searchbar';
import { ProductProvider } from '@/context/ProductContext';
import ProductList from '@/components/ProductList';
import SortDropdown from '@/components/SortDropdown';

export default function Home() {
  const [products, setProducts] = useState<
    Product[]
  >([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <ProductProvider>
      <div className='flex align-center justify-center mx-auto w-full max-w-[1290px]'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 my-8'>
            <Searchbar />
            <SortDropdown />
          </div>
          <ProductList />
        </div>
      </div>
    </ProductProvider>
  );
}
