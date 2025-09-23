"use client";
import logo from '../Images/Vector.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-3 flex flex-wrap md:flex-nowrap justify-between items-center bg-neutral-100 gap-y-3">
      <div className="flex items-center mb-2 md:mb-0">
        <Image height={40} width={40} src={logo} alt='logo' />
        <p className='ml-1 font-bold'>PrimalTraining</p>
      </div>
      <nav className="w-full md:w-auto">
        <ol className='hidden md:flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 items-center'>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li>
            <button
              className="py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer gap-4"
              style={{ background: '#808DFD', color: 'black' }}
            >
              RESERVE YOUR SPOT
            </button>
          </li>
        </ol>
      </nav>
    </div>
  );
}
