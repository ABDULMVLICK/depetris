import React, { useEffect, useState } from 'react';

// Composant d'en-tête avec logo et navigation
// Conçu pour reproduire le rendu existant de Section1
const Header = () => {
  const [is_menu_open, set_is_menu_open] = useState(false);
  const [is_scrolled, set_is_scrolled] = useState(false);

  useEffect(() => {
    const on_scroll = () => {
      set_is_scrolled(window.scrollY > 10);
    };
    on_scroll();
    window.addEventListener('scroll', on_scroll, { passive: true });
    return () => window.removeEventListener('scroll', on_scroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-20 p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${is_scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="/" aria-label="Aller à l'accueil" className="inline-block">
            <img src="/logoDepetris.png" alt="DEPETRIS DESIGN Logo" className="h-10 w-auto sm:h-12 lg:h-16 cursor-pointer" />
          </a>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center text-white text-sm lg:text-base">
          <div className="flex gap-6 lg:gap-10 mt-1">
            <a href="#" className="hover:text-black transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Techlons</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Contact Us</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Events</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Contact Us</a>
          </div>
        </nav>

        {/* Bouton mobile */}
        <button
          aria-label="Ouvrir le menu"
          aria-expanded={is_menu_open}
          className="md:hidden text-white p-2"
          onClick={() => set_is_menu_open(!is_menu_open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {is_menu_open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {is_menu_open && (
        <div className="md:hidden mt-3 rounded-md bg-black/70 text-white backdrop-blur-sm">
          <nav className="flex flex-col divide-y divide-white/10">
            <a href="#" className="px-4 py-3 hover:text-black hover:bg-white transition-colors duration-300">Home</a>
            <a href="#" className="px-4 py-3 hover:text-black hover:bg-white transition-colors duration-300">Techlons</a>
            <a href="#" className="px-4 py-3 hover:text-black hover:bg-white transition-colors duration-300">Contact Us</a>
            <a href="#" className="px-4 py-3 hover:text-black hover:bg-white transition-colors duration-300">Events</a>
            <a href="#" className="px-4 py-3 hover:text-black hover:bg-white transition-colors duration-300">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


