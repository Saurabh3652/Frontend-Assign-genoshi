import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-500 text-white py-5 px-4 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Genoshi.io
          </Link>
        </div>
        <ul className="flex">
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/" className="text-lg">Home</Link>
          </li>
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/pricing" onClick={closeDropdown} className="text-lg">Pricing</Link>
          </li>
          <li
            className={`ml-8 relative group ${isDropdownOpen ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            <div className="cursor-pointer text-lg">Other</div>
            <ul className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-gray-700 text-white py-2 mt-2 space-y-2`}>
              <li>
                <Link to="/create-graph" onClick={closeDropdown} className="block px-4 py-2 hover:bg-blue-500">Create New Graph</Link>
              </li>
              <li>
                <Link to="/graph-details" onClick={closeDropdown} className="block px-4 py-2 hover:bg-blue-500">Graph Details</Link>
              </li>
              <li>
                <Link to="/account-settings" onClick={closeDropdown} className="block px-4 py-2 hover:bg-blue-500">Account Settings</Link>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
