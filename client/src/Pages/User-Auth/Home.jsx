import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard'); // Redirect to dashboard after clicking Get Started
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="text-center bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
        <p className="mb-6 text-lg">Your professional hub for medical consultations and more.</p>
        <button
          onClick={handleGetStarted}
          className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HomePage;