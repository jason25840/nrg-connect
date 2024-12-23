import React, { useState } from 'react';
import Header from './Header';
import ModalWithForm from './modals/ModalWithForm';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

function HomePage() {
  const [activeForm, setActiveForm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // Lifted state for menu open

  const handleActiveModalClose = () => setActiveForm('');

  const handleFormSubmit = (formData, formType) => {
    console.log(`${formType} Form Submitted:`, formData);
    handleActiveModalClose();
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
      {/* Pass toggleMenu and menuOpen to Header */}
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {!activeForm && !menuOpen && (
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
