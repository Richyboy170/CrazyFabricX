// Card.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string;
  name: string;
  price: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, name, price, link }) => {
  return (
    <Link href={link} passHref>
      <div className="bg-customGold shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center p-4">
        <div className="relative w-full h-96">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'bm hanna_tff' }}>{name}</h3>
          <p className="text-lg text-customDarkGreen mt-2" style={{ fontFamily: 'bm hanna_tff' }}>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
