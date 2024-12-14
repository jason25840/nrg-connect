'use client';

import React, { useState } from 'react';
import Welcome from '../components/Welcome'; // Adjust path as needed
//import HomeContent from "../components/HomeContent";
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
    <div>
      {showWelcome ? (
        <Welcome onEnter={handleEnter} />
      ) : (
        <HomePage onClose={handleActiveModalClose} />
      )}
    </div>
  );
}
