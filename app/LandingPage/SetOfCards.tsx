"use client"
import React, { useState } from 'react';
import Card from '@/app/Components/Card';
import Filter from '@/app/Components/Filter';

const productData = [
  {
    image: '/images/dull.png',
    name: 'Oatmeal T-Shirt',
    price: '$50',
    link: '/product/oatmeal-t-shirt',
    category: 'Pastel',
  },
  {
    image: '/images/dull.png',
    name: 'Sky T-Shirt',
    price: '$50',
    link: '/product/sky-t-shirt',
    category: 'Pastel',
  },
  {
    image: '/images/dull.png',
    name: 'Pink T-Shirt',
    price: '$50',
    link: '/product/pink-t-shirt',
    category: 'Pastel',
  },
  {
    image: '/images/dull.png',
    name: 'White T-Shirt',
    price: '$50',
    link: '/product/white-t-shirt',
    category: 'Pastel',
  },
  {
    image: '/images/dull.png',
    name: 'Product 2',
    price: '$200',
    link: '/product/product2',
    category: 'Recommended',
  },
  {
    image: '/images/dull.png',
    name: 'Product 3',
    price: '$300',
    link: '/product/product3',
    category: 'Recommended',
  },
  {
    image: '/images/dull.png',
    name: 'Product 1',
    price: '$100',
    link: '/product/product1',
    category: 'All',
  },
];

const SetOfCards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-8 bg-customBlue">
      <Filter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SetOfCards;
