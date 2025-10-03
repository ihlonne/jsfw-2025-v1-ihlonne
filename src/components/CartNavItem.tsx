'use client';

import { useCartStore } from '@/stores/cartStore';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const CartNavItem = () => {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <li className="relative">
      <Link
        href="/cart"
        className="flex justify-center items-center gap-1 hover:font-bold"
      >
        <p>Cart</p>
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-2 bg-blue-8 00 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </li>
  );
};

export default CartNavItem;
