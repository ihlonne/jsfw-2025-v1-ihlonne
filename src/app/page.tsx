'use client';

import Searchbar from '@/components/Searchbar';
import { ProductProvider } from '@/context/ProductContext';
import ProductList from '@/components/ProductList';
import SortDropdown from '@/components/SortDropdown';

export default function Home() {
  return (
    <ProductProvider>
      <div className='flex align-center justify-center mx-auto w-full max-w-[1290px]'>
        <div className='flex flex-col w-full text-center md:text-left'>
          <h1 className='font-bold text-3xl'>
            Browse items
          </h1>
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
