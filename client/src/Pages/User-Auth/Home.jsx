import React from "react";
import { Link } from "react-router-dom";

function Home({ name }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>

      {/* Button Section with Flex for Alignment */}
      <div className="flex flex-col sm:flex-row gap-6 mb-4">
        <Link to="/login" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600">
            Login
          </button>
        </Link>
        <Link to="/signup" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600">
            Signup
          </button>
        </Link>
        {/* New Button: Register as a Doctor */}
        <Link to="/doctor" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
            Register as a Doctor
          </button>
        </Link>
      </div>

      {/* Conditional Welcome Text */}
      <h2 className="text-lg">
        {name ? `Welcome - ${name}` : "Please login or sign up"}
      </h2>
    </div>
  );
}

export default Home;