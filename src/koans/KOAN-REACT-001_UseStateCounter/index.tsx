// KOAN-REACT-001: UseState Counter
// Replace the placeholder code below with your implementation

import React, { useState } from 'react';

/**
 * Counter component for KOAN-REACT-001
 * Demonstrates useState, immutability, accessibility, and Tailwind CSS.
 */
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <section
      aria-label="Counter component"
      className="flex flex-col items-center gap-6 p-6 bg-gray-800 rounded-lg shadow max-w-xs mx-auto"
    >
      <h3 className="text-lg font-semibold text-accent-400 mb-2">Counter</h3>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Decrement"
          onClick={handleDecrement}
          className="px-4 py-2 rounded bg-gray-700 text-accent-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-400"
        >
          -
        </button>
        <span
          className="text-2xl font-mono px-6 py-2 rounded bg-gray-900 text-accent-200 border border-gray-700 min-w-[3rem] text-center"
          aria-live="polite"
        >
          {count}
        </span>
        <button
          type="button"
          aria-label="Increment"
          onClick={handleIncrement}
          className="px-4 py-2 rounded bg-gray-700 text-accent-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-400"
        >
          +
        </button>
      </div>
      <button
        type="button"
        aria-label="Reset counter"
        onClick={handleReset}
        className="mt-2 px-4 py-2 rounded bg-accent-500 text-white font-semibold hover:bg-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
      >
        Reset
      </button>
    </section>
  );
};

export default Counter;
