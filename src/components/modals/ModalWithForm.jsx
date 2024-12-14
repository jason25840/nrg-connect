import React, { useEffect, useRef } from 'react';

function ModalWithForm({ title, handleActiveModalClose, onSubmit, children }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') handleActiveModalClose();
    };
    window.addEventListener('keydown', handleEscClose);
    return () => window.removeEventListener('keydown', handleEscClose);
  }, [handleActiveModalClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleActiveModalClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleActiveModalClose]);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70'>
      <div className='relative'>
        {/* Outer glowing gradient effect */}
        <div className='absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 shadow-xl animate-pulse'></div>

        {/* Form Container */}
        <div className='bg-white text-gray-800 p-8 rounded-lg shadow-2xl w-96 relative z-10'>
          <h2 className='text-center text-3xl font-bold mb-8'>{title}</h2>

          <form className='space-y-5' onSubmit={onSubmit} ref={modalRef}>
            {children}
            <button
              className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg'
              type='submit'
            >
              {title}
            </button>
            <button
              type='button'
              onClick={handleActiveModalClose}
              className='mt-4 text-red-500 hover:text-red-800 text-center'
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ModalWithForm;
