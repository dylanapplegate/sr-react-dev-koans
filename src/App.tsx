import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-indigo-400">忍者</span> Ninja Koans
        </h1>
        <p className="text-xl mb-8">Master React with AI-Guided Koans</p>
        
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            React + TypeScript + Tailwind CSS Environment Setup Successful!
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App