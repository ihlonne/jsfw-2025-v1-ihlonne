'use client';

import getProducts from '@/lib/productApi';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';

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
    <div className='flex align-center justify-center m-[0 auto] w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1290px]'>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
