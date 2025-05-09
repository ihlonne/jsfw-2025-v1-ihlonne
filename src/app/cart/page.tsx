'use client';

import QuantityControl from '@/components/QuantityControl';
import { useCart } from '@/hooks/useCart';
import { useCartStore } from '@/stores/cartStore';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const items = useCartStore(
    (state) => state.items
  );
  const totalPrice = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const { removeItem } = useCart();

  const handleDelete = (id: string) => {
    removeItem(id);
  };

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        Your Cart
      </h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className='divide-y divide-gray-200'>
            {items.map((item) => (
              <li
                key={item.id}
                className='grid grid-cols-3 w-full py-4'
              >
                <div className='flex gap-2'>
                  {item.image &&
                    item.image.url && (
                      <div className='w-[120px] h-[120px]'>
                        <Image
                          src={item.image.url}
                          alt={item.image.alt}
                          width={120}
                          height={120}
                          className='rounded object-cover w-[120px] h-[120px]'
                        />
                      </div>
                    )}

                  <div>
                    <p className='font-semibold'>
                      {item.title}
                    </p>
                    <p className='text-sm text-gray-600'>
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className='flex flex-col place-items-center place-content-center'>
                  <QuantityControl
                    id={item.id}
                    quantity={item.quantity}
                  />
                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className='mt-2 cursor-pointer'
                  >
                    Remove
                  </button>
                </div>

                <div className='place-items-end place-content-center'>
                  <p className='font-medium'>
                    $
                    {(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className='mt-6 text-right'>
            <p className='text-lg font-bold'>
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className='mt-6 items-end'>
            <Link
              href='/success'
              className='w-auto px-8 py-2 bg-blue-700 text-white  font-bold rounded hover:bg-blue-800 transition cursor-pointer'
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
