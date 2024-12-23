import React, { useState } from 'react';
import Header from './Header';
import ModalWithForm from './modals/ModalWithForm';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

function HomePage() {
  const [activeForm, setActiveForm] = useState('');

  const handleActiveModalClose = () => setActiveForm('');

  const handleFormSubmit = (formData, formType) => {
    console.log(`${formType} Form Submitted:`, formData);
    handleActiveModalClose();
  };

  return (
    <div
      className='flex flex-col w-full min-h-screen'
      style={{
        backgroundImage: 'url(./assets/images/BridgeWhiteWaterImage.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      {!activeForm && (
        <div className='flex flex-col items-center justify-center flex-grow gap-6 sm:gap-10 sm:mt-0 mt-auto mb-10 sm:mb-0'>
          <button
            onClick={() => setActiveForm('signin')}
            className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-3 px-6 text-sm border-solid border-2 rounded-full hover:border-x-customDark'
          >
            Sign In
          </button>

          <button
            onClick={() => setActiveForm('signup')}
            className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-3 px-6 text-sm border-solid border-2 rounded-full hover:border-x-customDark'
          >
            Sign Up
          </button>
        </div>
      )}

      {activeForm === 'signin' && (
        <ModalWithForm
          title='Sign In'
          isOpen={!!activeForm}
          handleActiveModalClose={handleActiveModalClose}
          onSubmit={handleFormSubmit}
        >
          <SignInForm />
        </ModalWithForm>
      )}

      {activeForm === 'signup' && (
        <ModalWithForm
          title='Sign Up'
          isOpen={!!activeForm}
          handleActiveModalClose={handleActiveModalClose}
          onSubmit={handleFormSubmit}
        >
          <SignUpForm />
        </ModalWithForm>
      )}
    </div>
  );
}

export default HomePage;

import React from 'react';
import Image from 'next/image';
import Navigation from './Navigation';

{
  /*Header*/
}
function Header() {
  return (
    <div className='flex flex-row justify-between h-400 w-full bg-transparent px-20'>
      <Image
        src='/assets/images/NRGLogo.svg'
        alt='Site Logo'
        width={100}
        height={100}
        style={{ objectFit: 'contain' }}
      />
      <Navigation />
    </div>
  );
}

//export default Header;

import React from 'react';

function Navigation({ menuOpen, toggleMenu }) {
  return (
    <nav className='relative'>
      {/* Hamburger Icon */}
      <div className='md:hidden'>
        {!menuOpen && (
          <button
            onClick={toggleMenu}
            className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 rounded-full mb-10'
          >
            ☰ {/* Hamburger Icon */}
          </button>
        )}
      </div>

      {/* Desktop Navigation */}
      {!menuOpen && (
        <div className='hidden md:flex items-center gap-10'>
          <button className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 border-solid border-2 rounded-full hover:border-x-customDark'>
            Our Mission
          </button>
          <button className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 border-solid border-2 rounded-full hover:border-x-customDark'>
            Reach Us
          </button>
          <button className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 border-solid border-2 rounded-full hover:border-x-customDark'>
            Advertise
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute right-0 top-full bg-white border border-gray-300 rounded-lg shadow-lg md:hidden'>
          <button className='block w-full text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 hover:bg-gray-100'>
            Our Mission
          </button>
          <button className='block w-full text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 hover:bg-gray-100'>
            Reach Us
          </button>
          <button className='block w-full text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 hover:bg-gray-100'>
            Advertise
          </button>
        </div>
      )}
    </nav>
  );
}

// export default Navigation;
