import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const cartItemCount = 3;

const Header = () => {
  return (
    <div className='width-full flex flex-col md:flex-row justify-center md:justify-between items-center py-8 m px-18'>
      <Link
        href='/'
        className='font-black text-4xl'
      >
        BLiNK
      </Link>

      <nav>
        <ul className='inline-flex gap-4 text-lg mt-4 md:mt-0'>
          <li>
            <Link
              href='/'
              className='hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-red-800'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-red-800'
            >
              Contact
            </Link>
          </li>
          <li className='relative'>
            <Link
              href='/cart'
              className='flex justify-center items-center gap-1 hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-red-800'
            >
              <p>Cart</p>
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center'>
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
