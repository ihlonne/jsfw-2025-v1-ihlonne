import Link from 'next/link';
import CartNavItem from './CartNavItem';

const Header = () => {
  return (
    <div className="width-full flex flex-col md:flex-row justify-center md:justify-between items-center py-8 m px-18">
      <Link href="/" className="font-black text-4xl">
        BLiNK
      </Link>

      <nav>
        <ul className="inline-flex gap-4 text-lg mt-4 md:mt-0">
          <li>
            <Link href="/" className="hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:font-bold">
              Contact
            </Link>
          </li>
          <CartNavItem />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
