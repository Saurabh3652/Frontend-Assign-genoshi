import React from "react";
import NavBar from "../components/NavBar";
import UserProfileDetails from "../components/UserProfileDetails";
import AccountDetailsCard from "../components/AccountDetailsCard";
import UsageMetrics from "../components/UsageMetrics";
import RecentActivityFeed from "../components/RecentActivityFeed";
import GraphList from "../components/GraphList";
import ActionButtonOverlay from "../components/CustomOverlayButton";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const ProfileDashboard: React.FC = () => {
  // Example data
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    bio: "Passionate about data and technology.",
    profilePhoto:
      "https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png",
  };
  const usage = { graphsCreated: 20, graphsShared: 15, papersCollected: 10 };
  const activities = [
    "Created Awesome Graph",
    "Shared Insightful Graph",
    "Collected Interesting Paper",
  ];
  const savedGraphs = [
    {
      title: "Awesome Graph",
      dateCreated: "2023-03-01",
      thumbnail:
        "https://via.placeholder.com/150",
    },
    {
      title: "Insightful Graph",
      dateCreated: "2023-02-15",
      thumbnail:
        "https://via.placeholder.com/150",
    },
    {
      title: "Interesting Paper",
      dateCreated: "2023-01-10",
      thumbnail:
        "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="container mx-auto p-4 pt-5 flex flex-wrap justify-center gap-4">
        <UserProfileDetails {...user} className="w-full md:w-1/2" />
        <div className="w-full md:w-1/2">
          <AccountDetailsCard plan="Enterprise Plan" status="Active" />
        </div>
        <UsageMetrics {...usage} className="w-full md:w-1/2" />
        <RecentActivityFeed activities={activities} className="w-full md:w-1/2" />
        <GraphList graphs={savedGraphs} className="w-full md:w-1/2" />
        <div className="w-full md:w-1/2 mt-4">
          <Link to="/#" className="text-blue-500 hover:underline block">
            View Favorites
          </Link>
          <Link to="/collections" className="text-blue-500 hover:underline block mt-2">
            View Collections
          </Link>
        </div>
      </div>
      <ActionButtonOverlay>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
          Create New Graph
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
          Share Graph
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full">
          Upload Paper
        </button>
      </ActionButtonOverlay>
    </div>
  );
};

export default ProfileDashboard;
