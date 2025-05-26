import React, { useState } from 'react';
import ProfessorAI from './components/ProfessorAI';
import './styles/index.css';

// List of koans (could be dynamic in the future)
const koans = [
  {
    id: 'KOAN-REACT-001_UseStateCounter',
    title: 'useState Counter',
  },
  // Add more koans here as needed
];

/**
 * Loads and displays the content for a given koan.
 * For now, this is a placeholder. In the future, this could dynamically import the koan component.
 */
const KoanContent: React.FC<{ koanId: string }> = ({ koanId }) => {
  // Placeholder: In a real app, dynamically import/render the koan by ID
  return (
    <section className="w-full max-w-xl bg-gray-900 rounded-lg shadow p-8">
      <h2 className="text-xl font-semibold mb-4 text-accent-400">
        {koanId.replace('KOAN-REACT-', 'React Koan: ')}
      </h2>
      <p className="text-gray-300">
        This is where the koan content for{' '}
        <span className="font-mono text-accent-300">{koanId}</span> will be
        rendered.
      </p>
    </section>
  );
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>(
    koans[0]?.id || 'professor-ai',
  );

  return (
    <div className="min-h-screen flex bg-gray-950 text-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-6 tracking-tight text-white">
          ninja-koans
        </h1>
        <nav className="flex-1">
          <ul className="space-y-2">
            {koans.map(koan => (
              <li key={koan.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    selected === koan.id
                      ? 'bg-gray-800 text-accent-400'
                      : 'hover:bg-gray-800 hover:text-accent-300'
                  }`}
                  aria-current={selected === koan.id ? 'page' : undefined}
                  onClick={() => setSelected(koan.id)}
                >
                  {koan.title}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-800 mt-4">
              <button
                className={`w-full text-left px-3 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                  selected === 'professor-ai'
                    ? 'bg-gray-800 text-accent-400'
                    : 'hover:bg-gray-800 hover:text-accent-300'
                }`}
                aria-current={selected === 'professor-ai' ? 'page' : undefined}
                onClick={() => setSelected('professor-ai')}
              >
                Professor AI
              </button>
            </li>
          </ul>
        </nav>
        <footer className="mt-8 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ninja-koans
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start p-8 overflow-y-auto">
        {selected === 'professor-ai' ? (
          <ProfessorAI />
        ) : (
          <KoanContent koanId={selected} />
        )}
      </main>
    </div>
  );
};

export default App;
