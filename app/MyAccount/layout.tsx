// app/layout.tsx
import React from 'react';
import FixedNavbar from '@/app/Components/FixedNavbar';
import NavLinks from '@/app/Components/nav-links';
import '@/app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-customBlue">
      <FixedNavbar />
      <div className="flex justify-center w-full pt-20 md:pt-24">
        <p className="text-3xl font-bold text-customGold underline" style={{ fontFamily: 'bm hanna_tff' }}>My Account</p>
      </div>
      <div className="flex flex-col md:flex-row flex-grow pt-2">
        <div className="w-full md:w-64 bg-customBlue text-customDarkBlue pl-4 pt-6" style={{ fontFamily: 'bm hanna_tff' }}>
          <NavLinks />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:px-12 bg-customBlue text-customGold">
          {children}
        </div>
      </div>
    </div>
  );
}
