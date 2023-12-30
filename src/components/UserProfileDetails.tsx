import React from "react";

const CustomUserProfileDetails = ({ name, email, bio, profilePhoto }: any) => {
  return (
    <div className="flex bg-indigo-800 text-white p-8 shadow-lg">
      <div className="flex-shrink-0">
        <img
          src={profilePhoto}
          alt="Profile"
          className="h-32 w-32 rounded-full"
        />
      </div>
      <div className="flex flex-col ml-4">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-gray-300">{email}</p>
        <div className="mt-4">
          <p className="text-gray-400">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomUserProfileDetails;
