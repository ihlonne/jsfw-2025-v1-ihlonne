'use client';

import Link from 'next/link';
import { useProductContext } from '@/context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { filteredProducts } = useProductContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1290px]">
      {filteredProducts.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
