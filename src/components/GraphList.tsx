import React from 'react';

const GraphList = ({ graphs }: any) => {
  return (
    <div className="bg-blue-900 text-white p-6 transition duration-300 ease-in-out hover:shadow-2xl shadow-lg rounded-md">
      <div className="flex flex-col h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-4">Your Saved Graphs</h3>
        <ul className="list-disc ml-6">
          {graphs.map((graph: any, index: any) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={graph.thumbnail}
                alt={graph.title}
                className="w-16 h-16 rounded-md mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">{graph.title}</h4>
                <p className="text-sm text-gray-300">{graph.dateCreated}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GraphList;
