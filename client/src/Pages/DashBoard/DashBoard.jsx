import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase'; // Import the auth object to manage authentication
import DoctorConsultancy from '../../components/Consultancy'; // Import DoctorConsultancy component
import News from '../../components/News'; // Import News component
import Insurance from '../../components/Insurance'; // Import Insurance component

function DashBoard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDoctorDetailView, setIsDoctorDetailView] = useState(false);
  const [isNewsView, setIsNewsView] = useState(false);
  const [isInsuranceView, setIsInsuranceView] = useState(false);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    // Fetch current user
    const currentUser = auth.currentUser;
    setUser(currentUser); // Set the user data

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (cardType) => {
    if (cardType === 'doctor') {
      setIsDoctorDetailView(true);
    } else if (cardType === 'news') {
      setIsNewsView(true);
    } else if (cardType === 'insurance') {
      setIsInsuranceView(true);
    }
  };

  const handleBackClick = () => {
    setIsDoctorDetailView(false);
    setIsNewsView(false);
    setIsInsuranceView(false);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect to login page after logout
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  // JSON format for card data
  const cardsData = [
    {
      id: 1,
      title: 'Doctor Consultancy',
      description: 'Click to view doctor details...',
      backgroundColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      onClick: () => handleCardClick('doctor'),
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Some content here...',
      backgroundColor: 'bg-green-100',
      textColor: 'text-green-600',
      onClick: () => {},
    },
    {
      id: 3,
      title: 'News and Updates',
      description: 'Click to get latest news...',
      backgroundColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      onClick: () => handleCardClick('news'),
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Some content here...',
      backgroundColor: 'bg-red-100',
      textColor: 'text-red-600',
      onClick: () => {},
    },
    {
      id: 5,
      title: 'Health Insurance Information',
      description: 'Click to view health insurance details...',
      backgroundColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      onClick: () => handleCardClick('insurance'),
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'Some content here...',
      backgroundColor: 'bg-green-100',
      textColor: 'text-green-600',
      onClick: () => {},
    },
  ];

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
        {/* Profile Section */}
        <div className="flex flex-col items-center py-6">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/100'} // Fallback image
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <div className="text-center">
            <p className="text-xl font-semibold">{user?.displayName || 'User Name'}</p>
            <p className="text-sm text-gray-300">{user?.email || 'user@example.com'}</p>
          </div>
        </div>

        {/* Menu Options */}
        <ul className="mt-6">
          {user ? (
            <>
              <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Home</li>
              <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Settings</li>
              <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Profile</li>
              <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Messages</li>
            </>
          ) : (
            <>
              <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/login')}>Login</li>
              <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</li>
            </>
          )}
        </ul>

        {/* Logout Button */}
        {user && (
          <div className="absolute bottom-6 w-full px-6">
            <button
              className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}
      >
        {/* Top Bar for Search and Button */}
        <div className={`flex items-center justify-between mb-8 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          <div className="flex items-center w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className={`ml-4 py-2 px-4 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all duration-300 ${isMobile ? 'w-10 h-10' : 'px-6'}`}
            >
              {isMobile ? '→' : 'Submit'}
            </button>
          </div>
        </div>

        {/* Conditional Rendering of Content */}
        {isDoctorDetailView ? (
          <DoctorConsultancy onBackClick={handleBackClick} />
        ) : isNewsView ? (
          <News onBackClick={handleBackClick} />
        ) : isInsuranceView ? (
          <Insurance onBackClick={handleBackClick} />
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Main Dashboard</h2>
            <p className="text-lg text-gray-600">Welcome to your modern and beautiful dashboard. Here you can manage your data and get insights.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  onClick={card.onClick}
                  className={`${card.backgroundColor} p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-600 cursor-pointer`}
                >
                  <h3 className={`text-xl font-semibold ${card.textColor}`}>{card.title}</h3>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;