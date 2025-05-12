'use client';

import { useProductContext } from '../context/ProductContext';

const Searchbar = () => {
  const { setSearchQuery } = useProductContext();

  return (
    <div className='max-w-4xl mx-auto my-12 px-4'>
      <div className='flex'>
        <input
          type='search'
          placeholder='Search Items...'
          onChange={(e) =>
            setSearchQuery(e.target.value)
          }
          className='w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600'
        />
      </div>
    </div>
  );
};

export default Searchbar;
