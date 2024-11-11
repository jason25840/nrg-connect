"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

const Welcome = ({ onEnter }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ x: "50%", y: "50%" });
  const [isVisible, setIsVisible] = useState(true);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      const { offsetWidth, offsetHeight } = target;

      // Calculate movement towards the mouse pointer
      const newX = ((clientX / offsetWidth) * 40 - 20).toFixed(2); // -20 to 20 range
      const newY = ((clientY / offsetHeight) * 40 - 20).toFixed(2); // -20 to 20 range
      setLogoPosition({
        x: `${50 + parseFloat(newX)}%`,
        y: `${50 + parseFloat(newY)}%`,
      });
    };

    // Only add the mousemove listener if on desktop (not mobile)
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        className={`fixed inset-0 flex items-center justify-center bg-black text-white transition-opacity duration-1000 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Logo with slight movement towards the cursor */}
        <div
          className="absolute transition-transform duration-500 ease-out"
          style={{
            left: logoPosition.x,
            top: logoPosition.y,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <Image
            src="/assets/images/nrg-connect-logo.svg" // Use path relative to the `public` directory
            alt="Site Logo"
            width={400} // Specify width in pixels
            height={400} // Specify height in pixels
            className="w-24 h-24"
          />
          <p className="text-center mt-4 text-lg">Click anywhere to enter</p>
        </div>
      </div>
    )
  );
};

export default Welcome;
