import React from 'react';

function ModalWithForm({ formType, closeForm }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70'>
      <div className='relative'>
        <div className='absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 shadow-xl animate-pulse'></div>

        <div className='bg-white text-gray-800 p-8 rounded-lg shadow-2xl w-96 relative z-10'>
          <h2 className='text-center text-3xl font-bold mb-8'>
            {formType === 'signin' ? 'Sign In' : 'Sign Up'}
          </h2>

          <form className='space-y-5'>
            {formType === 'signup' && (
              <input
                className='w-full h-12 border border-gray-400 px-4 rounded-lg'
                placeholder='Name'
                name='name'
                type='text'
              />
            )}

            <input
              className='w-full h-12 border border-gray-400 px-4 rounded-lg'
              placeholder='Email'
              name='email'
              type='email'
            />

            <input
              className='w-full h-12 border border-gray-400 px-4 rounded-lg'
              placeholder='Password'
              name='password'
              type='password'
            />

            {formType === 'signup' && (
              <input
                className='w-full h-12 border border-gray-400 px-4 rounded-lg'
                placeholder='Confirm Password'
                name='password2'
                type='password'
              />
            )}

            <button
              className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg'
              type='submit'
            >
              {formType === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>

            <button
              type='button'
              onClick={closeForm}
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
