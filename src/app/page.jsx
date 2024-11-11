"use client";

import React, { useState } from "react";
import Welcome from "../components/Welcome"; // Adjust path as needed
import HomeContent from "../components/HomeContent"; // Or import your other main page content

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <div>
      {showWelcome ? <Welcome onEnter={handleEnter} /> : <HomeContent />}
    </div>
  );
}
