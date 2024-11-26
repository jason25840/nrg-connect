"use client";

import React, { useState } from "react";
import Image from "next/image";

const Welcome = ({ onEnter }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Handle click to enter
  const handleClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false); // Hide component completely after fading out
      onEnter(); // Callback to enter homepage
    }, 1000); // Match the fade-out duration
  };

  return (
    isVisible && (
      <div
        onClick={handleClick}
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Logo */}
        <div className="w-[400px] h-[400px] relative">
          <Image
            src="/assets/images/NRGLogo.svg"
            alt="Site Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Text */}
        <p className="text-center mt-4 text-sm animate-pulse">
          Click to Enter and Connect
        </p>
      </div>
    )
  );
};

export default Welcome;
