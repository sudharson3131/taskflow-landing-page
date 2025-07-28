import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-4 bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 cursor-pointer">TaskFlow</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
          </li>
          <li>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 rounded-b-lg space-y-2 px-2 py-3">
          <a
            href="#features"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <button
            className="w-full text-left px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Login
          </button>
          <button
            className="w-full text-left px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
