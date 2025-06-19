import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create_acc() {
  const [isAgency, setIsAgency] = useState(null);
  const navigate=useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 h-[780px] flex flex-col justify-center">
        <h2 className="-mt-20 font-bold text-2xl mb-6">Create your Popx account</h2>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-sm font-medium z-10">
            Full name
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-sm font-medium z-10">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-sm font-medium z-10">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-sm font-medium z-10">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-sm font-medium z-10">
            Company name
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-900">
            Are you an Agency?<span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
                className="appearance-none w-5 h-5 border-2 border-purple-600 rounded-full checked:bg-purple-600 checked:border-4 checked:border-white transition-all"
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
                className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-gray-700 checked:border-4 checked:border-white transition-all"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all " onClick={()=>{navigate("/profile")}}>
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create_acc;
