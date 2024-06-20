"use client";
import React, { useState, useEffect } from 'react';
import Card from '@/app/Components/Card';
import Filter from '@/app/Components/Filter';
import productData from '@/app/Products/products.json';

const SetOfCards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState(productData);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setProducts(productData);
    } else {
      setProducts(productData.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto p-8 bg-customBlue">
      <Filter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            hoverImage={product.hoverImage || product.image}
            name={product.name}
            price={product.price}
            link={`/Products/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SetOfCards;
