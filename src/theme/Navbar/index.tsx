import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const navLinks = [
  { to: '/why-atto', label: 'Why Atto' },
  { to: '/how-it-works', label: 'How it Works' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/tokenomics', label: 'Tokenomics' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/security', label: 'Security' },
  { to: '/blog', label: 'Blog' },
];

const CustomNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-[14px] md:px-[50px] py-[10px] md:py-[30px] border-b border-gray-200 bg-white">
        <div className="flex-shrink-0 pt-2">
          <Link to="/">
            <img
              src="img/logo.png"
              alt="Atto Logo"
              className="h-7 md:h-8"
            />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-medium text-[#373B3E] text-[14px] hover:text-yellow-600 hover:no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div
            className="lg:hidden flex flex-col justify-between h-6 w-6 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <img
              src="img/icons/menu-icon.svg"
              alt="Menu Icon"
              className="h-6 w-6"
            />
          </div>

          <Link
            to="/download"
            className="border-solid border-[1px] px-4 py-2 text-[14px] rounded-full font-medium text-[#373B3E] hover:bg-yellow-500 hover:text-white transition hover:no-underline"
          >
            Download the App →
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white p-6 z-50 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className="text-gray-800 mb-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          X
        </div>

        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block font-medium text-[#373B3E] hover:text-yellow-600 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default CustomNavbar;
