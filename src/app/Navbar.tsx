// src/components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute right-0 top-0 pr-32 pt-8">
      <ul className="flex space-x-8">
        <li>
        <Link href="/main" className="text-white hover:text-gray-400 text-xl ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-white hover:text-gray-400 text-xl  ">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
