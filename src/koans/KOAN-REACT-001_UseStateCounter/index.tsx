import React from 'react';

/**
 * KOAN-REACT-001: Counter Placeholder
 *
 * Replace this placeholder with a functional counter component.
 * Requirements:
 * - Use React functional components and the useState hook.
 * - Display the current count.
 * - Provide buttons to increment, decrement, and reset the count.
 * - Style using Tailwind CSS (dark theme).
 * - Ensure accessibility (aria-labels, keyboard navigation, semantic HTML).
 */
const Counter: React.FC = () => {
  // TODO: Implement the counter logic using useState and handlers for increment, decrement, and reset.
  return (
    <section
      aria-label="Counter component"
      className="flex flex-col items-center max-w-xs gap-6 p-6 mx-auto bg-gray-800 rounded-lg shadow"
    >
      <h3 className="mb-2 text-lg font-semibold text-accent-400">Counter</h3>
      <div className="flex items-center gap-4">
        {/* Replace these with working buttons and count display */}
        <button
          type="button"
          aria-label="Decrement"
          className="px-4 py-2 bg-gray-700 rounded opacity-50 cursor-not-allowed text-accent-300"
          disabled
        >
          -
        </button>
        <span
          className="text-2xl font-mono px-6 py-2 rounded bg-gray-900 text-accent-200 border border-gray-700 min-w-[3rem] text-center"
          aria-live="polite"
        >
          0
        </span>
        <button
          type="button"
          aria-label="Increment"
          className="px-4 py-2 bg-gray-700 rounded opacity-50 cursor-not-allowed text-accent-300"
          disabled
        >
          +
        </button>
      </div>
      <button
        type="button"
        aria-label="Reset counter"
        className="px-4 py-2 mt-2 font-semibold text-white rounded opacity-50 cursor-not-allowed bg-accent-500"
        disabled
      >
        Reset
      </button>
    </section>
  );
};

export default Counter;
