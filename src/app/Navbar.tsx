// src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

  return (
    <nav className="fixed w-full z-50 flex justify-center mt-4 h-14">
      <div className="bg-slate-500 bg-opacity-50 backdrop-blur-sm rounded-full">
        <ul className="flex justify-center items-center">
          {navLinks.map((link) => (
           <div
           key={link.href}
           className={`w-32 h-14 flex justify-center items-center rounded-full transition-colors duration-200 ${
             pathname === link.href
               ? 'bg-orange-500 text-black'
               : 'text-white hover:text-gray-300'
           }`}
         >
           <li>
             <Link
               href={link.href}
               className="text-lg md:text-xl"
             >
               {link.label}
             </Link>
           </li>
         </div>
         
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
