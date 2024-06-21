// app/layout.tsx
import React from 'react';
import StillNavbar from '@/app/Components/StillNavbar';
import NavLinks from '@/app/Components/nav-links';
import '@/app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <StillNavbar />
      <div className="flex flex-col gap-2 pt-16 md:flex-row flex-grow bg-customBlue">
        <div className="w-full md:w-64 bg-customBlue text-customGold">
          <NavLinks />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 text-customDarkGold bg-customGold">
          {children}
        </div>
      </div>
    </div>
  );
}
