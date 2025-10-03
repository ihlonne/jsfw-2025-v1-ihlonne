'use client';

import { useProductContext } from '../context/ProductContext';

const Searchbar = () => {
  const { setSearchQuery } = useProductContext();

  return (
    <input
      type="search"
      placeholder="Search products..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full md:w-80 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Searchbar;
