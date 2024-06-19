import React from 'react';
import Image from 'next/image';
import { Coda } from 'next/font/google';

const coda = Coda({ weight: '800', subsets: ['latin'] });

interface TestimonialCardProps {
  image: string;
  phrase: string;
  client: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, phrase, client }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 transform scale-105">
      <div className="relative w-full h-56">
        <Image src={image} alt={client} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 text-center">
        <p className={`text-lg font-bold ${coda.className}`}>{client}</p>
        <p className="mt-2">{phrase}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
