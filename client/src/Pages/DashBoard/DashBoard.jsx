import React, { useState } from 'react';

function DashBoard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Adjust layout for mobile on window resize
  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Overlay for Sidebar on Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-full fixed top-0 left-0 transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center justify-center py-5 text-2xl font-semibold">
          Dashboard
        </div>
        <ul>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Settings</li>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Profile</li>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Messages</li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}
      >
        {/* Top Bar for Search and Button */}
        <div className={`flex items-center justify-between mb-8 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Submit Button */}
            <button
              className={`ml-4 py-2 px-4 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all duration-300 ${isMobile ? 'w-10 h-10' : 'px-6'}`}
            >
              {isMobile ? '→' : 'Submit'}
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Main Dashboard</h2>
          <p className="text-lg text-gray-600">Welcome to your modern and beautiful dashboard. Here you can manage your data and get insights.</p>

          {/* Sample Content */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-600">
              <h3 className="text-xl font-semibold text-blue-600">Card 1</h3>
              <p className="text-gray-600 mt-2">Some content here...</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-green-600">
              <h3 className="text-xl font-semibold text-green-600">Card 2</h3>
              <p className="text-gray-600 mt-2">Some content here...</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-600">
              <h3 className="text-xl font-semibold text-yellow-600">Card 3</h3>
              <p className="text-gray-600 mt-2">Some content here...</p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-red-600">
              <h3 className="text-xl font-semibold text-red-600">Card 4</h3>
              <p className="text-gray-600 mt-2">Some content here...</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-600">
              <h3 className="text-xl font-semibold text-blue-600">Card 5</h3>
              <p className="text-gray-600 mt-2">Some content here...</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-green-600">
              <h3 className="text-xl font-semibold text-green-600">Card 6</h3>
              <p className="text-gray-600 mt-2">Some content here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button (for Mobile) */}
      <button
        className="lg:hidden absolute top-16 left-5 bg-blue-600 text-white p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
    </div>
  );
}

export default DashBoard;