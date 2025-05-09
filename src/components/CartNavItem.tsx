'use client';

import { useCartStore } from '@/stores/cartStore';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const CartNavItem = () => {
  const totalItems = useCartStore((state) =>
    state.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  );

  return (
    <li className='relative'>
      <Link
        href='/cart'
        className='flex justify-center items-center gap-1 hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-red-800'
      >
        <p>Cart</p>
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center'>
            {totalItems}
          </span>
        )}
      </Link>
    </li>
  );
};

export default CartNavItem;
