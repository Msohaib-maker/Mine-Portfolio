"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { agency, navLinks } from "./siteConfig";

const Navbar = () => {
  const [activeId, setActiveId] = useState(navLinks[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight whichever section currently sits in the middle band of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <a href="#about" className="flex items-center gap-2 text-white font-bold tracking-tight">
          <Image src={agency.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full ring-1 ring-white/20 shadow-[0_0_10px_rgba(255,255,255,0.25)]" priority />
          {agency.name}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  activeId === link.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-hazel-300 px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-white"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" viewBox="0 0 24 24">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-white/10 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base ${
                  activeId === link.id ? "text-white bg-white/5" : "text-white/60"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-hazel-300 px-3 py-3 text-center text-base font-semibold text-black"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
