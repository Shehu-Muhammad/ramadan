// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full bg-gray-900 text-white dark:bg-black z-50 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo / Brand */}
          {/* <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/boxing_logo.jpg'
              alt='The Greatness Boxing Academy Logo'
              width={36}
              height={36}
              priority
            />
            <span className='text-xl font-bold text-red-600 dark:text-red-400'>
              Greatness Boxing Academy
            </span>
          </Link> */}

          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-6'>
            <li>
              <Link href='/prayer' className='hover:text-red-600'>
                Prayer Times
              </Link>
            </li>
            <li>
              <Link href='/rules' className='hover:text-red-600'>
                Rules
              </Link>
            </li>
            <li>
              <Link href='/meals' className='hover:text-red-600'>
                Meals
              </Link>
            </li>
            <li>
              <Link href='/workout' className='hover:text-red-600'>
                Workout
              </Link>
            </li>
            <li>
              <Link href='/gratitude' className='hover:text-red-600'>
                Gratitude
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className='md:hidden focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? (
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden bg-gray-900 dark:bg-black px-4 pt-2 pb-4 space-y-1'>
          <li>
            <Link
              href='/prayer'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 rounded-md hover:bg-red-600 hover:text-white transition'
            >
              Prayer Times
            </Link>
          </li>
          <li>
            <Link
              href='/rules'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 rounded-md hover:bg-red-600 hover:text-white transition'
            >
              Rules
            </Link>
          </li>
          <li>
            <Link
              href='/meals'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 rounded-md hover:bg-red-600 hover:text-white transition'
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              href='/workout'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 rounded-md hover:bg-red-600 hover:text-white transition'
            >
              Workout
            </Link>
          </li>
          <li>
            <Link
              href='/gratitude'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 rounded-md hover:bg-red-600 hover:text-white transition'
            >
              Gratitude
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
