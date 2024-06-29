import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link'

const OrderDetails: React.FC = () => {
  const router = useRouter();
  const { orderNumber } = router.query;

  // Fetch order details using the orderNumber from the URL
  // You can replace this with your actual data fetching logic
  const order = {
    orderNumber,
    date: '2023-06-29',
    status: 'Shipped',
    total: 150,
    pointsGain: 15,
    items: [
      { id: '1', name: 'Product 1', quantity: 2, price: 50 },
      { id: '2', name: 'Product 2', quantity: 1, price: 50 },
    ],
  };

  return (
    <div className="container mx-auto p-8 bg-customBlue">
      <h1 className="text-2xl font-bold text-customDarkBlue mb-8">
        Order Details - {orderNumber}
      </h1>
      <p className="text-lg mb-4">Date: {order.date}</p>
      <p className="text-lg mb-4">Status: {order.status}</p>
      <p className="text-lg mb-4">Total: {order.total} Baht</p>
      <p className="text-lg mb-4">Points Gain: {order.pointsGain}</p>
      <h2 className="text-xl font-bold mb-4">Items</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - {item.quantity} x {item.price} Baht
          </li>
        ))}
      </ul>
      <Link href="/MyAccount/Orders" className="text-customBlue hover:underline">Back to Orders</Link>
    </div>
  );
};

export default OrderDetails;
