"use client"
import React, { useState, useEffect } from 'react';
import TestimonialCard from '@/app/Trash Bin/Testimonials/TestimonialCard';
import ColorFilter from '@/app/Trash Bin/Testimonials/ColorFilter';
import Circle from '@/app/Trash Bin/Testimonials/Circle';

interface Testimonial {
  image: string;
  phrase: string;
  client: string;
  color: string;
  product: string;
}

const OverAllTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [selectedColor, setSelectedColor] = useState('all');

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  const handleMouseEnter = (testimonial: Testimonial) => {
    setActiveTestimonial(testimonial);
  };

  const handleMouseLeave = () => {
    if (!selectedTestimonial) {
      setActiveTestimonial(null);
    }
  };

  const handleClick = (testimonial: Testimonial) => {
    if (selectedTestimonial?.client === testimonial.client) {
      setSelectedTestimonial(null);
      setActiveTestimonial(null);
    } else {
      setSelectedTestimonial(testimonial);
      setActiveTestimonial(testimonial);
    }
  };

  const filteredTestimonials = selectedColor === 'all' ? testimonials : testimonials.filter((testimonial) => testimonial.color === selectedColor);

  return (
    <div className="container mx-auto py-8 h-screen">
      <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
      <ColorFilter selectedColor={selectedColor} onSelectColor={setSelectedColor} />
      <div className="relative flex justify-center items-center mb-8 overflow-x-auto whitespace-nowrap">
        <div className="absolute w-64 h-64 bg-gray-200 rounded-full"></div>
        {filteredTestimonials.map((testimonial, index) => (
          <Circle
            key={index}
            color={testimonial.color}
            isSelected={selectedTestimonial?.client === testimonial.client}
            onMouseEnter={() => handleMouseEnter(testimonial)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(testimonial)}
          />
        ))}
      </div>
      <div className={`transition-opacity duration-500 ${activeTestimonial ? 'opacity-100' : 'opacity-0'}`}>
        {activeTestimonial && (
          <TestimonialCard
            image={activeTestimonial.image}
            phrase={activeTestimonial.phrase}
            client={activeTestimonial.client}
          />
        )}
      </div>
    </div>
  );
};

export default OverAllTestimonials;
