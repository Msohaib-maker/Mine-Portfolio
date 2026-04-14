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
    <nav className="fixed w-full z-50 flex justify-center top-6 px-4">
      <div className="relative group">
        {/* Glow behind the navbar */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>
        
        {/* Premium Glass Container */}
        <div className="relative bg-[#0d1320]/75 backdrop-blur-xl border border-cyan-400/20 rounded-full p-2 flex items-center shadow-2xl">
          <ul className="flex justify-center items-center gap-2 relative z-10 w-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="flex">
                  <Link
                    href={link.href}
                    className={`relative flex justify-center items-center h-10 px-8 rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-cyan-300 hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-80 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
                    )}
                    <span className="relative z-20">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
