import React from "react";

const CustomUsageMetrics = ({ graphsCreated, graphsShared, papersCollected }: any) => {
  return (
    <div className="bg-green-700 text-white p-8 shadow-lg rounded-md transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="flex flex-col items-center h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-4">Your Usage Metrics</h3>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            Graphs Created: <span className="font-semibold">{graphsCreated}</span>
          </li>
          <li className="mb-2">
            Graphs Shared: <span className="font-semibold">{graphsShared}</span>
          </li>
          <li>
            Papers Collected: <span className="font-semibold">{papersCollected}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomUsageMetrics;
