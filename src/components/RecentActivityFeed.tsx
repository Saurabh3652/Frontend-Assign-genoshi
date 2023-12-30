import React from "react";

const CustomActivityFeed = ({ activities }: any) => {
  return (
    <div className="bg-blue-900 text-white p-8 shadow-lg rounded-md transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="flex flex-col items-center h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-4">Your Recent Activity</h3>
        <ul className="list-disc ml-6">
          {activities.map((activity: any, index: any) => (
            <li key={index} className="mb-4">
              <p className="text-lg">{activity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomActivityFeed;
