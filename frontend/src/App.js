import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Navigation Links */}
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/attendance">Attendance</Link>
//         </nav>
        
//         {/* Route Definitions */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/attendance" element={<AttendancePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a GET request to the backend API
    fetch('https://bethanyimmanuel-4f2d5b192706.herokuapp.com/') // Replace with your Heroku app URL
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default App;
