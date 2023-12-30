import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const CreateNewGraph: React.FC = () => {
  const [graphTitle, setGraphTitle] = useState('');
  const [graphDescription, setGraphDescription] = useState('');
  const [selectedPapers, setSelectedPapers] = useState<string[]>([]);
  const [graphSettings, setGraphSettings] = useState<any>({ layout: 'default', colors: 'blue' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic, including the graph creation process.
    // You can access graphTitle, graphDescription, selectedPapers, and graphSettings here.
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Create New Graph</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
              value={graphTitle}
              onChange={(e) => setGraphTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
              value={graphDescription}
              onChange={(e) => setGraphDescription(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Select Papers</label>
            {/* Implement paper selection UI here */}
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Graph Settings</label>
            {/* Implement graph settings UI here */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full focus:outline-none focus:ring focus:border-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Graph
          </button>
        </form>
        {/* Display graph visualization preview here */}
      </div>
    </div>
  );
};

export default CreateNewGraph;
