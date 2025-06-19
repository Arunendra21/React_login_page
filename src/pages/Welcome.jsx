import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 h-[650px] flex flex-col justify-end">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">Welcome to PopX</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
    <Link to="/create">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium mb-3 transition-all">
            Create Account
          </button>
          </Link>
    <Link to="/signin">
          <button className="w-full bg-purple-200 hover:bg-purple-300 text-black py-2 px-4 rounded-lg font-medium transition-all">
            Already Registered? Login
          </button>
          
        
      </Link>

      
        </div>
      </div>
    </div>
  );
}

export default Welcome;
