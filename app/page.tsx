// pages/index.tsx
import React from 'react';
import LandingAds from '@/app/LandingPage/Landing'
import Navbar from '@/app/Components/Navbar'

export default function Home() {
    return (
        <div>
          <Navbar/>
          <LandingAds/>
        </div>
    );
}
