// KOAN-REACT-001: UseState Counter
// Replace the placeholder code below with your implementation

import React from 'react';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  // TODO: Implement the useState Hook to track the count
  
  // TODO: Implement increment function
  
  // TODO: Implement decrement function that prevents count from going below zero
  
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      
      {/* TODO: Display the current count */}
      <p className="text-2xl mb-4">Count: ?</p>
      
      {/* TODO: Implement the increment and decrement buttons */}
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">-</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
      </div>
    </div>
  );
};

export default Counter;