import React, { useState } from 'react';
import Header from './Header';
import ModalWithForm from './ModalWithForm';

function HomePage() {
  const [activeForm, setActiveForm] = useState('');

  const handleShowForm = (formType) => {
    setActiveForm(formType);
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
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className='flex flex-col items-center justify-center gap-10 mb-40'>
        <button
          onClick={() => handleShowForm('signin')}
          className='text-3xl font-bold px-8 py-4 bg-blue-600 hover:bg-blue-800 rounded-lg shadow-lg'
        >
          Sign In
        </button>

        <button
          onClick={() => handleShowForm('signup')}
          className='text-3xl font-bold px-8 py-4 bg-green-600 hover:bg-green-800 rounded-lg shadow-lg'
        >
          Sign Up
        </button>
      </div>

      {/* Modal Pop-up */}
      {activeForm && (
        <ModalWithForm
          formType={activeForm}
          closeForm={() => setActiveForm('')}
        />
      )}
    </div>
  );
}

export default HomePage;
