// src/Components/Ui/Navbar.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-base-500 p-6  navbar mt-3 bg-opacity-40">
      <div className="flex items-center flex-shrink-0 font-bold  text-2xl mr-6">
        <Link href="/">
          <span className="font-semibold text-2xl tracking-tight cursor-pointer font-poppins hover:text-button focus:outline-none focus:ring-2 focus:ring-inset focus:ring-base-500 transition-all ease-in-out duration-300">
            Pet Life Forecast
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md hover:text-buttonText hover:bg-button focus:outline-none focus:ring-2 focus:ring-inset focus:ring-base-500 transition-all ease-in-out duration-300"
        >
          {isOpen ? (
            // Close icon when the menu is open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon when the menu is closed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/about">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-2xl hover:text-button transition-all ease-in-out   mr-4 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/feedback">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-2xl hover:text-button transition-all ease-in-out   mr-4 cursor-pointer">
              Feedback
            </span>
          </Link>
          <Link href="/contact">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-2xl hover:text-button transition-all ease-in-out   mr-4 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
