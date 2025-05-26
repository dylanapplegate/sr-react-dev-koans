import React from 'react';

/**
 * ProfessorAI is a placeholder chat interface for the Professor AI Agent.
 * This component is visually styled but does not implement real AI logic yet.
 */
const ProfessorAI: React.FC = () => {
  return (
    <section className="w-full max-w-xl bg-gray-900 rounded-lg shadow p-8 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-accent-400">
        Professor AI
      </h2>
      <div className="w-full mb-4 p-4 bg-gray-800 rounded text-gray-200 min-h-[80px]">
        <p>
          👋 Welcome! I am Professor AI. Ask me anything about JavaScript,
          React, or these koans.
        </p>
      </div>
      <form
        className="w-full flex gap-2"
        onSubmit={e => e.preventDefault()}
        aria-label="Chat input"
      >
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent-500"
          placeholder="Type your question..."
          aria-label="Type your question"
          disabled
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-accent-500 text-white font-semibold disabled:opacity-50"
          disabled
        >
          Send
        </button>
      </form>
      <p className="mt-2 text-xs text-gray-500">(AI chat coming soon)</p>
    </section>
  );
};

export default ProfessorAI;
