import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function Signin() {
  const navigate=useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 h-[650px] flex flex-col justify-center">
        
        <h2 className="text-2xl font-bold text-gray-900 -mt-60 mb-2 leading-tight">
          Signin to your <br /> PopX account
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

         <div className="relative mb-6">
          <label className="absolute -top-3 left-3 bg-white px-1 text-purple-600 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

         <div className="relative mb-6">
          <label className="absolute -top-3 left-3 bg-white px-1 text-purple-600 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button className="w-full bg-gray-400 text-white py-3 rounded-lg font-medium hover:bg-gray-500 transition" onClick={()=>{navigate("/profile")}}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Signin;
