"use client";
import logo from '../Images/Vector.svg'
import union from '../Images/Plus.svg'
import minus from '../Images/Vector 3.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import '../globals.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-6 flex justify-between items-center bg-neutral-200 border-b border-gray-800 header">
      {/* Logo */}
      <div className="flex items-center">
        <Image height={42} width={42} src={logo} alt='logo' />
        <p className='ml-1 font-bold w-[128px]'>PrimalTraining</p>
      </div>

      {/* Navigation */}
      <nav className="flex items-center">
        {/* Desktop nav */}
        <ol className='hidden md:flex flex-wrap justify-end gap-3 md:gap-5 items-center'>
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

        {/* Mobile union/minus icon */}
        <button 
          className="block md:hidden mr-3" 
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image 
            height={25} 
            width={25} 
            src={menuOpen ? minus : union} 
            alt={menuOpen ? 'close menu' : 'open menu'} 
          /> 
        </button>

        {/* Mobile menu */}
<div
  className={`
    md:hidden absolute left-0 bg-neutral-100 flex flex-col w-full 
    transition-all duration-200 overflow-hidden
    ${menuOpen ? "max-h-96 opacity-100 top-21" : "max-h-0 opacity-0 top-16"}
  `}
>
  <li className='border-b border-black p-[20px] text-2xl'>
    <Link href='/'>HOME</Link>
  </li>
  <li className='border-b border-black p-[20px] text-2xl'>
    <Link href='/about'>ABOUT</Link>
  </li>
  <li 
    className='border-b border-black p-[20px] text-2xl text-white' 
    style={{ background: '#808DFD' }}
  >
    <Link href='/reserve'>RESERVE YOUR SPOT</Link>
  </li>
</div>

      </nav>
    </div>
  );
}
