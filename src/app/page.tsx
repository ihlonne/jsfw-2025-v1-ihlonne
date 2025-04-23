'use client';

import getProducts from '@/lib/productApi';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import Image from 'next/image';

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
    <div className='flex align-center justify-center m-[0 auto] max-w-[1290px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-xl shadow-md p-4'
          >
            <div className='relative w-full aspect-[3/4] overflow-hidden rounded-lg'>
              <Image
                src={product.image.url}
                alt={product.image.alt}
                fill
                className='object-cover'
                sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
              />
            </div>
            <h2 className='mt-2 text-sm font-semibold'>
              {product.title}
            </h2>
            {product.reviews &&
              product.reviews.length > 0 && (
                <div className='mt-1 text-sm text-yellow-600'>
                  {(
                    product.reviews.reduce(
                      (sum, r) => sum + r.rating,
                      0
                    ) / product.reviews.length
                  ).toFixed(1)}{' '}
                  ⭐
                </div>
              )}

            <p className='text-sm text-gray-600'>
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
