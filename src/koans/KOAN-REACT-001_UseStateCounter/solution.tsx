import React, { useState } from 'react';

/**
 * KOAN-REACT-001: Counter Solution
 *
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
      className="flex flex-col items-center max-w-xs gap-6 p-6 mx-auto bg-gray-800 rounded-lg shadow"
    >
      <h3 className="mb-2 text-lg font-semibold text-accent-400">Counter</h3>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Decrement"
          onClick={handleDecrement}
          className="px-4 py-2 bg-gray-700 rounded text-accent-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-400"
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
          className="px-4 py-2 bg-gray-700 rounded text-accent-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-400"
        >
          +
        </button>
      </div>
      <button
        type="button"
        aria-label="Reset counter"
        onClick={handleReset}
        className="px-4 py-2 mt-2 font-semibold text-white rounded bg-accent-500 hover:bg-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
      >
        Reset
      </button>
    </section>
  );
};

export default Counter;
