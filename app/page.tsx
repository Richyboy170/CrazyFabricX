// pages/index.tsx
import React from 'react';
import LandingAds from '@/app/LandingPage/Landing'
import Navbar from '@/app/Components/Navbar'
import SetOfCards from '@/app/LandingPage/SetOfCards'
import Testimonials from '@/app/Testimonials/Testimonials'
import ProductsTestimonials from '@/app/Testimonials/ProductsTestimonials';


export default function Home() {
    return (
        <div className="bg-customBlue">
          <Navbar/>
          <LandingAds/>
          <SetOfCards/>
          <hr className="border-t-2 border-gray-300 my-8" />
          <Testimonials/>
        </div>
    );
}
