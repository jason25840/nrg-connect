import React from 'react';
import Image from 'next/image';
import Navigation from './Navigation';

function Header({ menuOpen, toggleMenu }) {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center h-400 w-full bg-transparent px-20'>
      <Image
        src='/assets/images/NRGLogo.svg'
        alt='Site Logo'
        width={100}
        height={100}
        style={{ objectFit: 'contain' }}
      />
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Header;
