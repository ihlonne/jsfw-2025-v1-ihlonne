'use client';

import { useProductContext } from '@/context/ProductContext';

const SortDropdown = () => {
  const { sortBy, setSortBy } = useProductContext();

  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="w-full md:w-60 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 "
    >
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
    </select>
  );
};

export default SortDropdown;
