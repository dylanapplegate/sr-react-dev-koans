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
    <section className="w-full max-w-xl p-8 bg-gray-900 rounded-lg shadow">
      <h2 className="mb-4 text-xl font-semibold text-accent-400">
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
    <div className="flex flex-col min-h-screen font-sans text-gray-100 bg-gray-950">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-6 py-4 bg-gray-900 border-b border-gray-800">
        <span className="text-2xl font-bold tracking-tight text-white">
          ninja-koans
        </span>
        {/* Placeholder for theme toggle and user settings */}
        <div className="flex gap-4">
          <button className="text-accent-400 hover:text-accent-300 focus:outline-none">
            🌙
          </button>
          <button className="text-gray-400 hover:text-gray-200 focus:outline-none">
            ⚙️
          </button>
        </div>
      </header>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="flex flex-col w-64 min-h-0 p-4 bg-gray-900 border-r border-gray-800">
          <nav className="flex-1 overflow-y-auto">
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
            </ul>
          </nav>
          <footer className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ninja-koans
          </footer>
        </aside>
        {/* Main Content */}
        <main className="flex flex-col items-center justify-start flex-1 min-h-0 p-8 overflow-y-auto">
          <KoanContent koanId={selected} />
        </main>
        {/* Professor AI Panel */}
        <aside className="w-[340px] bg-gray-900 border-l border-gray-800 flex flex-col p-4 min-h-0 max-w-full">
          <ProfessorAI />
        </aside>
      </div>
      {/* Footer */}
      <footer className="w-full px-6 py-2 text-xs text-center text-gray-500 bg-gray-900 border-t border-gray-800">
        &copy; {new Date().getFullYear()} ninja-koans
      </footer>
    </div>
  );
};

export default App;
