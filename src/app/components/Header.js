'use client';

import React from 'react';

const Header =() =>{
  const scrollToId = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white via-gray-100 to-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Wrap logo and text in a flex container */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-2xl" />
        <div className="text-2xl font-bold text-blue-600">AI Recruiters</div>
      </div>
        <nav className="space-x-15 hidden md:flex text-xl font-bold">
          <button
            onClick={() => scrollToId('home')}
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToId('features')}
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Features
          </button>
          <button
            onClick={() => scrollToId('contact')}
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
