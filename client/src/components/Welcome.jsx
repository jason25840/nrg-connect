'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BackgroundLines } from './ui/BackgroundLines';

const Welcome = ({ onEnter }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Handle click to enter
  const handleClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false); // Hide component completely after fading out
      onEnter(); // Callback to enter homepage
    }, 1000); // Match the fade-out duration
  };

  return (
    isVisible && (
      <div
        onClick={handleClick}
        className={`fixed inset-0 flex flex-col items-center justify-center bg-customDark text-white transition-opacity duration-1000 ${
          isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className='absolute inset-0 z-0'>
          <BackgroundLines />
        </div>
        {/* Logo */}
        <div className='relative inset-0 z-10'>
          <div className='relative w-[400px] h-[400px]'>
            <Image
              src='./assets/images/NRGConnectLogo.svg'
              alt='Site Logo'
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
            <p
              className='absolute inset-0 flex items-center justify-center text-customGray text-3xl font-bold
              animate-ping duration-[20s]'
            >
              CONNECT
            </p>
          </div>
          {/*<Image
            src='./assets/images/NRGConnectLogo.svg'
            alt='Site Logo'
            width={400}
            height={400}
            priority
            style={{ objectFit: 'contain' }}
          />*/}

          {/* Text */}
          <p className='text-center mt-4 text-sm animate-pulse'>
            Click to Enter and Connect
          </p>
        </div>
      </div>
    )
  );
};

export default Welcome;
