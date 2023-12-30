import React from 'react';
import NavBar from '../components/NavBar';

const GraphDetailsPage: React.FC = () => {
  const graphs = [
    {
      title: 'Heading 1',
      description: 'Task Description 1',
      dateCreated: '2013-01-07',
      papers: ['article 1', 'article 2', 'article 3'],
    },
    {
      title: 'Heading 2',
      description: 'Task Description 2',
      dateCreated: '2013-02-18',
      papers: ['article 4', 'article 5'],
    },
    {
      title: 'Heading 3',
      description: 'Task Description 3',
      dateCreated: '2022-03-08',
      papers: ['article 6'],
    },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto p-8">
        {graphs.map((graph, graphIndex) => (
          <div key={graphIndex} className="p-6 border border-gray-700 rounded-lg hover:shadow-md transition duration-300 ease-in-out mb-8">
            <h2 className="text-2xl font-bold mb-4">{graph.title}</h2>
            <p className="text-gray-300 mb-4">{graph.description}</p>
            <p className="text-gray-300">Date Created: {graph.dateCreated}</p>
            <ul className="mt-4">
              {graph.papers.map((paper, paperIndex) => (
                <li key={paperIndex} className="text-gray-300 mb-2 flex items-center">
                  {paper}
                  <button className="ml-2 text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full focus:outline-none focus:ring focus:border-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                Edit
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full focus:outline-none focus:ring focus:border-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                Share
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full focus:outline-none focus:ring focus:border-red-600 transition duration-300 ease-in-out transform hover:scale-105">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphDetailsPage;
