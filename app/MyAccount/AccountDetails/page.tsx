"use client"

import React, { useState } from 'react';

// Define the User interface
interface User {
  name: string;
  email: string;
  password: string;
  address: string;
}

// Sample user data (this would typically come from a server or context)
const initialUserData: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  address: '1234 Main St, Springfield, USA',
};

const AccountDetailsPage: React.FC = () => {
  const [userData, setUserData] = useState<User>(initialUserData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    // Save the updated user data (e.g., send to server)
    console.log('Saved user data:', userData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-8 bg-customBlue">
      <h1 className="text-2xl font-bold text-customGold mb-8 text-center">Account Details</h1>
      <div className="bg-customGold p-6 rounded shadow-md">
        <div className="grid gap-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-end">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-customBlue text-white font-bold rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-customBlue text-white font-bold rounded"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsPage;
