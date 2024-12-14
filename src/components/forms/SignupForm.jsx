import React, { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <input
        className='w-full h-12 border border-gray-400 px-4 rounded-lg'
        placeholder='Name'
        name='name'
        type='text'
        value={formData.name}
        onChange={handleChange}
      />

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

      <input
        className='w-full h-12 border border-gray-400 px-4 rounded-lg'
        placeholder='Confirm Password'
        name='password2'
        type='password'
        value={formData.password2}
        onChange={handleChange}
      />
    </>
  );
}

export default SignUpForm;
