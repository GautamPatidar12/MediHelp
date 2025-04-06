import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';
import HomePage from './Pages/User-Auth/Home'; // HomePage is now the Landing page
import DashBoard from './Pages/DashBoard/DashBoard';
import Login from './Pages/User-Auth/Login';
import Signup from './Pages/User-Auth/Signup';
import DoctorSignup from './Pages/User-Auth/Doctor';
import Profile from './Pages/User-Auth/Profile';
import Sidebar from './components/SideBar'; // Assuming you have a Sidebar component
import BloodMap from './components/BloodMap';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user state when authenticated
    });

    return () => unsubscribe();
  }, []);

  // Route Protection for authenticated users (redirect to login if not authenticated)
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="App">
        {/* Render the Sidebar only for authenticated users */}
        {user && <Sidebar />}

        {/* Routes */}
        <Routes>
          {/* Home page (landing page with the 'Get Started' button) */}
          <Route path="/" element={<HomePage />} />
          
          {/* Dashboard route (accessible for all users) */}
          <Route
            path="/dashboard"
            element={
              <DashBoard user={user} />
            }
          />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor-signup" element={<DoctorSignup />} />

          {/* Protected Route: Profile Page */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile name={user?.displayName} email={user?.email} />
              </ProtectedRoute>
            }
          />

          <Route path="/bloodmap" element={<BloodMap />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;