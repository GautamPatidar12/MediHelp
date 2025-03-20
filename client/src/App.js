import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import './App.css';

import Signup from './Pages/User-Auth/Signup'
import Login from './Pages/User-Auth/Login'
import Profile from './Pages/User-Auth/Profile'
import Home from './Pages/User-Auth/Home'
import Doctor from './Pages/User-Auth/Doctor'

import DashBoard from "./Pages/DashBoard/DashBoard";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);
      } else {
        setUserName("");
        setUserEmail("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/profile" element={<Profile name={userName} email={userEmail} />} />
          <Route path="/" element={<Home name={userName} />} />


          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;