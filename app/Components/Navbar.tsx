"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = (): void => {
    setShowLogo(false);
    setTimeout(() => window.scrollTo(0, 0), 0); // Scroll to top to reset the view
    setTimeout(() => setShowLogo(true), 500); // Re-show the logo after a short delay
  };

  return (
    <nav className={`bg-customGold p-4 fixed top-0 left-0 right-0 z-50 ${showNavbar ? 'visible' : 'invisible'}`}>
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/points" className="text-customBlue">
          My Points: xxx
        </Link>

        {showLogo && (
          <div className="absolute inset-0 flex justify-center items-center cursor-pointer" onClick={handleLogoClick}>
            <Image
              src="/images/MainBrand2 Navy.png"
              alt="Brand Logo"
              width={100}
              height={50}
              objectFit="contain"
              className="navbar-logo"
            />
          </div>
        )}

        <div className="flex items-center space-x-4">
          <Link href="/profile" className="text-customBlue">
            User Profile
          </Link>
          <Link href="/cart" className="text-customBlue">
            Shopping Cart
          </Link>
          <button
            onClick={toggleMenu}
            className="text-customBlue focus:outline-none"
          >
            Menu
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-customBlue mt-2 p-4 rounded">
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="text-customGold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/points" className="text-customGold">
                My Points
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
