'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              TalentHub
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/casting" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Casting
              </Link>
              <Link href="/talent" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Talent
              </Link>
              <Link href="/representatives" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Representatives
              </Link>
              <Link href="/noticeboard" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Noticeboard
              </Link>
              <Link href="/support" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Support
              </Link>
              <Link href="/login" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/casting" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">
              Casting
            </Link>
            <Link href="/talent" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">
              Talent
            </Link>
            <Link href="/representatives" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">
              Representatives
            </Link>
            <Link href="/noticeboard" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">
              Noticeboard
            </Link>
            <Link href="/support" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">
              Support
            </Link>
            <Link href="/login" className="block bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 