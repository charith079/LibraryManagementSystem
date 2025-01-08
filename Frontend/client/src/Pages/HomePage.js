import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center py-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg w-full md:w-4/5 lg:w-2/3">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Library Management System</h1>
        <p className="text-lg mb-6">
          Manage your books easily and efficiently with our intuitive system. 
          Login or Sign Up to get started!
        </p>
        
        {/* Buttons */}
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-gray-600">
        <p>© 2024 Library Management System. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
