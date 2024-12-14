import React, { useState } from 'react';

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <input
        className='w-full h-12 border border-gray-400 px-4 rounded-lg'
        placeholder='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
      />

      <input
        className='w-full h-12 border border-gray-400 px-4 rounded-lg'
        placeholder='Password'
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
      />
    </>
  );
}

export default SignInForm;
