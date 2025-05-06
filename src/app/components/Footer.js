'use client';

import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop =() =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Divider line above footer */}
      <div className="h-[1px] bg-gray-300 w-full mt-20" />

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
          {/* Left: Logo + tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
              <span className="text-xl font-bold text-blue-400">AI Recruiter</span>
            </div>
            <p className="text-gray-400">Your voice-powered AI interview assistant.</p>
            <div className="flex space-x-4 mt-4 text-blue-400">
              <a href="#"><FaFacebook className="h-5 w-5 hover:text-blue-600 transition" /></a>
              <a href="#"><FaTwitter className="h-5 w-5 hover:text-blue-600 transition" /></a>
              <a href="#"><FaLinkedin className="h-5 w-5 hover:text-blue-600 transition" /></a>
            </div>
          </div>

          {/* Right: Navigation links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button onClick={scrollToTop} className="hover:text-blue-400 text-left">
                    Home
                  </button>
                </li>
                <li>
                  <a href="#features" className="hover:text-blue-400">Features</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} AI Recruiter. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
