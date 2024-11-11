import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/attendance">Attendance</Link>
        </nav>
        
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/attendance" element={<AttendancePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
