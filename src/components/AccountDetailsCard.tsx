import React from 'react';

interface AccountDetailsProps {
  plan: string;
  status: string;
}

const AccountDetailsCard: React.FC<AccountDetailsProps> = ({ plan, status }) => {
  return (
    <div className="bg-indigo-900 text-white p-8 shadow-lg rounded-md transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="flex flex-col items-center justify-center h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-4">Account Details</h3>
        <p className="text-gray-300 mb-2">Your current plan: <span className="text-yellow-400 font-semibold">{plan}</span></p>
        <p className={`text-gray-300 mb-2 ${status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
          Account Status: <span className="font-semibold">{status}</span>
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default AccountDetailsCard;
