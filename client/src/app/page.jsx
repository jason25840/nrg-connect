'use client';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Welcome from '../components/Welcome';
import HomePage from '../components/HomePage';

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  const handleActiveModalClose = () => {
    setActiveModal('');
  };

  return (
    <Provider store={store}>
      <div>
        {showWelcome ? (
          <Welcome onEnter={handleEnter} />
        ) : (
          <HomePage onClose={handleActiveModalClose} />
        )}
      </div>
    </Provider>
  );
}
