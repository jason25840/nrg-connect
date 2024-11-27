"use client";

import React, { useState } from "react";
import Welcome from "../components/Welcome"; // Adjust path as needed
//import HomeContent from "../components/HomeContent";
import HomePage from "../components/HomePage";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <div>{showWelcome ? <Welcome onEnter={handleEnter} /> : <HomePage />}</div>
  );
}
