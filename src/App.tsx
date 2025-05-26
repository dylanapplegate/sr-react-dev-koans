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
const KoanContent: React.FC<{ koanId: string; title?: string }> = ({
  koanId,
  title,
}) => {
  // Placeholder: In a real app, dynamically import/render the koan by ID
  return (
    <section className="w-full max-w-xl p-8 bg-gray-900 rounded-lg shadow">
      <h2 className="mb-4 text-xl font-semibold text-accent-400">
        {title ?? koanId}
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
  // Responsive toggle for Professor AI panel (mobile)
  const [showAI, setShowAI] = useState(false);

  // Find the selected koan object for title
  const selectedKoanObject = koans.find(k => k.id === selected);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-100 bg-gray-950">
      {/* Header */}
      <header
        className="flex items-center justify-between w-full px-6 py-4 bg-gray-900 border-b border-gray-800"
        role="banner"
      >
        <span className="text-2xl font-bold tracking-tight text-white">
          ninja-koans
        </span>
        <div className="flex gap-4">
          <button
            className="text-accent-400 hover:text-accent-300 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            🌙
          </button>
          <button
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
            aria-label="User settings"
          >
            ⚙️
          </button>
          {/* Mobile: Toggle Professor AI panel */}
          <button
            className="block ml-2 lg:hidden text-accent-400 hover:text-accent-300 focus:outline-none"
            aria-label="Toggle Professor AI panel"
            onClick={() => setShowAI(v => !v)}
          >
            🤖
          </button>
        </div>
      </header>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <nav
          className="flex flex-col w-64 min-h-0 p-4 bg-gray-900 border-r border-gray-800"
          aria-label="Koan navigation"
        >
          <div className="flex-1 overflow-y-auto">
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
          </div>
          <footer className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ninja-koans
          </footer>
        </nav>
        {/* Main Content */}
        <main
          className="flex flex-col items-center justify-start flex-1 min-h-0 p-8 overflow-y-auto"
          id="main-content"
          tabIndex={-1}
        >
          <KoanContent koanId={selected} title={selectedKoanObject?.title} />
        </main>
        {/* Professor AI Panel (right) */}
        <aside
          className={`hidden lg:flex flex-col w-[340px] max-w-full min-h-0 bg-gray-900 border-l border-gray-800 p-4 ${
            showAI ? 'fixed inset-0 z-50 flex lg:static' : ''
          }`}
          aria-label="Professor AI panel"
        >
          <ProfessorAI />
          {/* Mobile close button */}
          <button
            className="absolute text-gray-400 top-4 right-4 lg:hidden hover:text-accent-400 focus:outline-none"
            aria-label="Close Professor AI panel"
            onClick={() => setShowAI(false)}
          >
            ✕
          </button>
        </aside>
        {/* Mobile: Slide-in Professor AI panel */}
        {showAI && (
          <dialog
            open
            className="fixed inset-0 z-40 flex lg:hidden bg-black/60"
            aria-modal="true"
          >
            <aside className="flex flex-col w-[340px] max-w-full min-h-0 bg-gray-900 border-l border-gray-800 p-4 ml-auto h-full overflow-y-auto">
              <ProfessorAI />
              <button
                className="absolute text-gray-400 top-4 right-4 hover:text-accent-400 focus:outline-none"
                aria-label="Close Professor AI panel"
                onClick={() => setShowAI(false)}
              >
                ✕
              </button>
            </aside>
            <button
              className="flex-1"
              aria-label="Close overlay"
              onClick={() => setShowAI(false)}
            />
          </dialog>
        )}
      </div>
      {/* Footer */}
      <footer
        className="w-full px-6 py-2 text-xs text-center text-gray-500 bg-gray-900 border-t border-gray-800"
        role="contentinfo"
      >
        &copy; {new Date().getFullYear()} ninja-koans
      </footer>
    </div>
  );
};

export default App;
