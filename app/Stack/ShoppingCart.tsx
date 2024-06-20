import React from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onAddQuantity: (id: string) => void;
  onRemoveQuantity: (id: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onAddQuantity, onRemoveQuantity }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50`}>
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart ({totalItems})</h2>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <Image src={item.image} alt={item.name} width={60} height={60} />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.price} Baht</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => onRemoveQuantity(item.id)} className="px-2 py-1 bg-gray-300">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => onAddQuantity(item.id)} className="px-2 py-1 bg-gray-300">+</button>
              </div>
              <p className="ml-4">{item.price * item.quantity} Baht</p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <h3 className="text-lg font-bold">Total: {totalPrice} Baht</h3>
          <button className="w-full mt-4 px-4 py-2 bg-customBlue text-white font-bold rounded">Checkout</button>
        </div>
      </div>
      {isOpen && <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-40" onClick={onClose}></div>}
    </>
  );
};

export default ShoppingCart;
