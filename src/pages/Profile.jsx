import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md h-170 w-80 p-6 text-center">
        <h2 className="text-lg font-semibold mb-4 text-left">
          Account Settings
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://i.pravatar.cc/100?img=48"
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold">Marry Doe</p>
            <p className="text-sm text-gray-600">Marry@gmail.com</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-left">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elit, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
