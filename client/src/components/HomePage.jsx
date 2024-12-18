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
      className='flex flex-col justify-between w-full h-screen'
      style={{
        backgroundImage: 'url(./assets/images/NRG_Bridge.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />

      <div className='flex flex-col items-center justify-center gap-10 mb-40'>
        <button
          onClick={() => setActiveForm('signin')}
          className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-5 px-10 border-solid border-2 rounded-full hover:border-x-customDark'
        >
          Sign In
        </button>

        <button
          onClick={() => setActiveForm('signup')}
          className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-5 px-10 border-solid border-2 rounded-full hover:border-x-customDark'
        >
          Sign Up
        </button>
      </div>

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
