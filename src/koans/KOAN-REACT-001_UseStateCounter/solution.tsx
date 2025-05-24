import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };
  
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex space-x-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={decrement}
        >
          -
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;