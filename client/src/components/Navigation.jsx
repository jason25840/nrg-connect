import React, { useEffect, useRef } from 'react';

function Navigation({ menuOpen, toggleMenu }) {
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        toggleMenu(false); // Close the menu only if the click is outside the menu
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <nav className='relative'>
      {/* Hamburger Icon */}
      <div className='md:hidden'>
        {!menuOpen && (
          <button
            onClick={() => toggleMenu(true)}
            className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 rounded-full mb-10'
          >
            ☰ {/* Hamburger Icon */}
          </button>
        )}
      </div>

      {/* Desktop Navigation */}
      {!menuOpen && (
        <div className='hidden md:flex items-center gap-10'>
          <button className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 border-solid border-2 rounded-full hover:border-x-customDark'>
            Our Mission
          </button>
          <button className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 border-solid border-2 rounded-full hover:border-x-customDark'>
            Reach Us
          </button>
          <button className='text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 border-solid border-2 rounded-full hover:border-x-customDark'>
            Advertise
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'
          onClick={() => toggleMenu(false)} // Clicks anywhere outside the menu close it
        >
          <div
            ref={menuRef}
            className='bg-white border border-gray-300 rounded-lg shadow-lg p-4'
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
          >
            <button className='block w-full text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 hover:bg-gray-100 mb-2'>
              Our Mission
            </button>
            <button className='block w-full text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 hover:bg-gray-100 mb-2'>
              Reach Us
            </button>
            <button className='block w-full text-customDark bg-gradient-to-r from-customBlue to-customYellow py-2 px-4 hover:bg-gray-100'>
              Advertise
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
