import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Add this import
import { auth } from '../firebase'; // Import the Firebase auth object

function Sidebar({ user }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Successfully logged out
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="bg-gray-900 text-white w-64 h-full fixed top-0 left-0">
      <div className="flex flex-col items-center py-6">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mb-4"
        />
        <div className="text-center">
          <p className="text-xl font-semibold">{user?.displayName || 'Guest'}</p>
          <p className="text-sm text-gray-300">{user?.email || 'Not logged in'}</p>
        </div>
      </div>

      <ul className="mt-6">
        {user ? (
          <>
            <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>
              <Link to="/login">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
              <Link to="/doctor-signup">Doctor Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;