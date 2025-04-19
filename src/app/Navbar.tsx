// src/components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <ul className="flex justify-end space-x-8 p-6 pr-12 md:pr-32">
        <li>
          <Link href="/" className="text-white hover:text-gray-400 text-lg md:text-xl transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-white hover:text-gray-400 text-lg md:text-xl transition-colors duration-200">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
